#!/usr/bin/env node
// dashboard/server.mjs — Phase 2: read-only data + action POST endpoints

import http              from 'http';
import fs                from 'fs';
import path              from 'path';
import { spawnSync, spawn } from 'child_process';
import net                  from 'net';
import os                   from 'os';
import { fileURLToPath } from 'url';
import { buildAgentCommand, resolveClaudeBin, resolveCodexBin } from '../scripts/agent-runner.mjs';
import { computeYoutubeScheduleHint } from './lib/youtube-schedule-hint.mjs';

const __dirname  = path.dirname(fileURLToPath(import.meta.url));
const ROOT       = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(__dirname, 'public');

const HOST = '127.0.0.1';
const PORT = 3456;

const SHORTS_DIR   = path.join(ROOT, 'docs', 'video-tests', 'shorts');
const BATCHES_DIR  = path.join(ROOT, 'docs', 'video-tests', 'batches');
const REPORTS_DIR  = path.join(ROOT, 'docs', 'video-tests', 'reports');
const PUBLISH_DIR  = path.join(ROOT, 'docs', 'video-tests', 'publish');
const BLOG_DIR     = path.join(ROOT, 'src', 'content', 'blog');
const SCRIPTS_DIR  = path.join(ROOT, 'scripts');
const JOBS_DIR     = path.join(__dirname, '.jobs');
const DRAFTS_DIR       = path.join(ROOT, 'docs', 'drafts');
const DRAFT_LINKS_PATH = path.join(ROOT, 'docs', 'drafts', '.draft-links.json');
const TOKEN_PATH       = path.join(ROOT, '.secrets', 'tiktok', 'token.json');
const EXPORT_ROOT  = process.env.DERIN_OKUMA_EXPORT_ROOT || path.join(os.homedir(), 'Derin Okuma YT');
const N8N_URL      = process.env.N8N_URL || 'http://localhost:5678';

const SBV_ROOT      = '/home/muhammet/projects/scene-blog-video';
const N8N_PORT      = 5678;
const RENDERER_PORT = 8000;
const SERVICE_JOBS  = {
  'n8n-main':   'svc-n8n-main',
  'n8n-worker': 'svc-n8n-worker',
  'renderer':   'svc-renderer',
};

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
};

try { fs.mkdirSync(JOBS_DIR, { recursive: true }); } catch {}

const ALLOWED_ACTIONS = new Set([
  'validate-shorts', 'export-captions', 'tiktok-dry-run', 'tiktok-draft-upload',
  'shorts-prep', 'shorts-fill', 'shorts-fill-codex', 'batch-create', 'blog-add', 'blog-add-codex',
  'youtube-dry-run', 'youtube-upload',
  'generate-mobile-caption',
  'service-status', 'start-n8n-main', 'start-n8n-worker', 'start-renderer', 'renderer-health',
]);

// Actions that don't require a slug parameter
const NO_SLUG_ACTIONS = new Set([
  'blog-add', 'blog-add-codex', 'service-status', 'start-n8n-main', 'start-n8n-worker', 'start-renderer', 'renderer-health',
]);

// ── File helpers ──────────────────────────────────────────────────────────

function readJson(filePath) {
  try { return JSON.parse(fs.readFileSync(filePath, 'utf8')); } catch { return null; }
}
function readText(filePath) {
  try { return fs.readFileSync(filePath, 'utf8'); } catch { return null; }
}
function exists(filePath)  { return fs.existsSync(filePath); }
function fileMtime(p)      { try { return fs.statSync(p).mtime.toISOString(); } catch { return null; } }
function toRelPath(p)      { return path.relative(ROOT, p).split(path.sep).join('/'); }
function maskId(id)        {
  if (!id || typeof id !== 'string' || id.length < 10) return '…';
  return id.slice(0, 4) + '…' + id.slice(-4);
}

function normalizeDayNumber(value) {
  if (Number.isInteger(value)) return value > 0 && value <= 999 ? value : null;
  if (typeof value === 'number') {
    const n = Math.trunc(value);
    return n > 0 && n <= 999 ? n : null;
  }
  const raw = String(value ?? '').trim();
  if (!raw) return null;
  const exact = raw.match(/^(?:day-?|)(\d{1,3})$/i);
  if (exact) {
    const n = parseInt(exact[1], 10);
    return n > 0 && n <= 999 ? n : null;
  }
  const embedded = raw.match(/\bday-?(\d{1,3})\b/i);
  if (!embedded) return null;
  const n = parseInt(embedded[1], 10);
  return n > 0 && n <= 999 ? n : null;
}

function normalizeRunId(runId, day) {
  const dayNum = normalizeDayNumber(day) || 1;
  const raw = String(runId ?? '').trim();
  if (!raw) return `day${dayNum}-batch-a`;
  const normalized = raw
    .replace(/^dayday-?(\d{1,3})(?=$|-)/i, 'day$1')
    .replace(/^day-(\d{1,3})(?=$|-)/i, 'day$1');
  return /^[a-zA-Z0-9_-]+$/.test(normalized) ? normalized : `day${dayNum}-batch-a`;
}

// ── Background job helpers ────────────────────────────────────────────────

function writeJobStatus(jobId, data) {
  try { fs.writeFileSync(path.join(JOBS_DIR, `${jobId}.json`), JSON.stringify(data, null, 2), 'utf8'); } catch {}
}

function readJobStatus(jobId) {
  const status = readJson(path.join(JOBS_DIR, `${jobId}.json`));
  if (!status) return null;
  // If marked running, verify PID is still alive (handles server-restart case)
  if (status.status === 'running' && status.pid) {
    try { process.kill(status.pid, 0); }
    catch (e) { if (e.code === 'ESRCH') status.status = 'unknown_completed'; }
  }
  return status;
}

function startBackgroundJob(args, env, jobId, executable = process.execPath) {
  const logPath = path.join(JOBS_DIR, `${jobId}.log`);
  const initial = {
    job_id:    jobId,
    status:    'starting',
    pid:       null,
    started:   new Date().toISOString(),
    finished:  null,
    exit_code: null,
    signal:    null,
  };
  writeJobStatus(jobId, initial);

  let logFd;
  try { logFd = fs.openSync(logPath, 'w'); }
  catch (err) { return { error: err.message }; }

  let child;
  try {
    child = spawn(executable, args, {
      cwd:      ROOT,
      env:      env || process.env,
      detached: true,
      stdio:    ['ignore', logFd, logFd],
    });
  } catch (err) {
    try { fs.closeSync(logFd); } catch {}
    writeJobStatus(jobId, { ...initial, status: 'failed', finished: new Date().toISOString() });
    return { error: err.message };
  }

  child.on('spawn', () => {
    try { fs.closeSync(logFd); } catch {}  // parent closes its fd copy; child keeps its own
    writeJobStatus(jobId, { ...initial, status: 'running', pid: child.pid });
  });

  child.on('error', () => {
    try { fs.closeSync(logFd); } catch {}
    writeJobStatus(jobId, { ...initial, status: 'failed', finished: new Date().toISOString() });
  });

  child.on('close', (code, signal) => {
    const prev = readJobStatus(jobId) || initial;
    writeJobStatus(jobId, {
      ...prev,
      status:    signal ? 'killed' : (code === 0 ? 'done' : 'failed'),
      exit_code: code,
      signal:    signal || null,
      finished:  new Date().toISOString(),
    });
  });

  child.unref();
  return { job_id: jobId, pid: child.pid };
}

// ── YouTube schedule hint ─────────────────────────────────────────────────

function apiYoutubeScheduleHint() {
  return computeYoutubeScheduleHint(EXPORT_ROOT);
}

function apiWorkflowHints() {
  return {
    day: apiDayHint(),
    youtube: apiYoutubeScheduleHint(),
  };
}

// ── Shorts prep day hint ──────────────────────────────────────────────────

function apiDayHint() {
  const candidates = [];

  function isTestCandidate(data, filePath) {
    const haystack = [
      filePath,
      data?.slug,
      data?.title,
      data?.runId,
      data?.run_id,
      data?.failedCommand,
      data?.source?.blog_post,
      data?.source?.title,
    ].filter(Boolean).join(' ').toLowerCase();
    return /\btest\b/.test(haystack)
        || /test-soz/.test(haystack)
        || /test-guard/.test(haystack)
        || /guard-dry/.test(haystack);
  }

  function addCandidate(day, filePath, data, reason) {
    const dayNum = normalizeDayNumber(day);
    if (!dayNum || isTestCandidate(data, filePath)) return;
    const priority = reason === 'pipeline_status' ? 0 : reason === 'package_metadata' ? 1 : 2;
    candidates.push({
      day: dayNum,
      source: toRelPath(filePath),
      source_slug: data?.slug
        || data?.source?.blog_post
        || data?.source
        || path.basename(filePath)
          .replace(/-shorts-pipeline-status.*\.json$/, '')
          .replace(/-pipeline-status.*\.json$/, '')
          .replace(/-shorts-package\.json$/, '')
          .replace(/-landscape-metadata\.json$/, ''),
      reason,
      priority,
      mtime: fileMtime(filePath),
    });
  }

  function addJsonDays(filePath, data, reason) {
    if (!data || typeof data !== 'object') return;
    addCandidate(data.day, filePath, data, reason);
    addCandidate(data.test_day, filePath, data, reason);
    addCandidate(data.dayTag, filePath, data, reason);
    addCandidate(data.runId, filePath, data, 'run_id');
    addCandidate(data.run_id, filePath, data, 'run_id');
  }

  try {
    const reportFiles = exists(REPORTS_DIR) ? fs.readdirSync(REPORTS_DIR) : [];
    for (const name of reportFiles) {
      if (!/\.json$/.test(name)) continue;
      if (!/-shorts-pipeline-status\.json$/.test(name) && !/pipeline-status/i.test(name)) continue;
      const filePath = path.join(REPORTS_DIR, name);
      addJsonDays(filePath, readJson(filePath), 'pipeline_status');
    }
  } catch {}

  function scanJsonFiles(dir, matcher, reason) {
    let entries;
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) { scanJsonFiles(p, matcher, reason); continue; }
      if (!matcher(e.name, p)) continue;
      addJsonDays(p, readJson(p), reason);
    }
  }

  scanJsonFiles(SHORTS_DIR, name => /-shorts-package\.json$/.test(name) || /-shorts-metadata\.json$/.test(name), 'package_metadata');
  scanJsonFiles(path.join(ROOT, 'docs', 'video-tests', 'metadata'), name => /-metadata\.json$/.test(name), 'video_metadata');

  if (!candidates.length) {
    return {
      last_day: null,
      next_day: 1,
      source: null,
      source_slug: null,
      note: 'Önerilen gün: önceki video paketi bulunamadı',
    };
  }

  candidates.sort((a, b) => (b.day - a.day)
    || (a.priority - b.priority)
    || String(b.mtime || '').localeCompare(String(a.mtime || '')));
  const best = candidates[0];
  return {
    last_day: best.day,
    next_day: best.day + 1,
    source: best.source,
    source_slug: best.source_slug,
    note: `Önerilen gün: son video paketinden sonraki gün (son: day-${best.day})`,
  };
}

// ── Service helpers ───────────────────────────────────────────────────────

function checkPortOpen(port, host = '127.0.0.1', timeoutMs = 1500) {
  return new Promise(resolve => {
    const socket = net.createConnection({ port, host });
    socket.setTimeout(timeoutMs);
    socket.on('connect', () => { socket.destroy(); resolve(true); });
    socket.on('error',   () => resolve(false));
    socket.on('timeout', () => { socket.destroy(); resolve(false); });
  });
}

function checkRendererHealth() {
  return new Promise(resolve => {
    const req = http.get(`http://127.0.0.1:${RENDERER_PORT}/health`, res => {
      let body = '';
      res.on('data', d => { body += d; });
      res.on('end', () => resolve({ ok: res.statusCode === 200, status: res.statusCode, body: body.slice(0, 500) }));
    });
    req.setTimeout(2000, () => { req.destroy(); resolve({ ok: false, error: 'timeout' }); });
    req.on('error', e => resolve({ ok: false, error: e.message }));
  });
}

async function apiServicesStatus() {
  // Postgres: pg_isready (read-only check, no sudo)
  const pgResult  = spawnSync('pg_isready', ['-h', '127.0.0.1', '-p', '5432', '-q'], { timeout: 2000, encoding: 'utf8' });
  const pgUp      = pgResult.status === 0;

  // Redis: redis-cli ping (read-only check, no sudo)
  const rdResult  = spawnSync('redis-cli', ['-h', '127.0.0.1', '-p', '6379', 'ping'], { timeout: 2000, encoding: 'utf8' });
  const redisUp   = rdResult.status === 0 && (rdResult.stdout || '').trim() === 'PONG';

  // n8n main: port 5678
  const n8nUp     = await checkPortOpen(N8N_PORT);

  // n8n worker: tracked via job file + PID check
  const workerJob = readJobStatus(SERVICE_JOBS['n8n-worker']);
  const workerRunning = workerJob?.status === 'running';

  // renderer: port 8000
  const rendUp    = await checkPortOpen(RENDERER_PORT);

  return {
    postgres:   { status: pgUp       ? 'up'      : 'down',    manual_start: pgUp    ? null : 'sudo service postgresql start'  },
    redis:      { status: redisUp    ? 'up'      : 'down',    manual_start: redisUp ? null : 'sudo service redis-server start' },
    n8n_main:   { status: n8nUp      ? 'up'      : 'down',    port: N8N_PORT },
    n8n_worker: { status: workerRunning ? 'running' : 'stopped', pid: workerJob?.pid ?? null },
    renderer:   { status: rendUp     ? 'up'      : 'down',    port: RENDERER_PORT },
  };
}

// ── Export-folder naming (must match build-publish-manifest.mjs exactly) ─

function sanitizeFolderName(name) {
  return (name
    .replace(/ *: */g, ' - ')
    .replace(/[<>"/\\|?*]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/[. ]+$/g, '')) || 'folder';
}

function resolveExportFolder(slug) {
  const pkg   = readJson(path.join(SHORTS_DIR, slug, `${slug}-shorts-package.json`));
  const title = pkg?.source?.title || slug;
  return path.join(EXPORT_ROOT, sanitizeFolderName(title));
}

// ── Validation report summary ─────────────────────────────────────────────

function extractValidationSummary(text) {
  const m = text.match(/## Summary\s*\n([\s\S]*?)(?=\n##|$)/);
  if (!m) return null;
  return m[1].trim()
    .split('\n')
    .map(l => l.trim())
    .filter(l => l.startsWith('-'))
    .map(l => l.slice(1).trim());
}

// ── Blog-post existence ───────────────────────────────────────────────────

function findBlogPath(slug, pkg) {
  for (const ext of ['.md', '.mdx']) {
    const p = path.join(BLOG_DIR, slug + ext);
    if (exists(p)) return `src/content/blog/${slug}${ext}`;
  }
  for (const sf of (pkg?.source?.source_files ?? [])) {
    if (exists(path.join(ROOT, sf))) return sf;
  }
  return null;
}

// ── Draft workflow helpers ────────────────────────────────────────────────

function readDraftLinks() { return readJson(DRAFT_LINKS_PATH) || {}; }

// Writes a minimal pipeline status JSON when the pipeline script failed to do so.
// Mirrors the structure expected by run-shorts-fill-with-claude.mjs.
function ensurePipelineStatus(slug, title, day, runId) {
  const statusPath = path.join(REPORTS_DIR, `${slug}-shorts-pipeline-status.json`);
  if (exists(statusPath)) return;  // already present — don't overwrite

  const pkgPath = path.join(SHORTS_DIR, slug, `${slug}-shorts-package.json`);
  if (!exists(pkgPath)) return;  // no scaffold yet — nothing to ensure

  const dayNum = normalizeDayNumber(day) || 1;
  const dayTag = `day-${String(dayNum).padStart(2, '0')}`;

  function toRel(...parts) { return path.relative(ROOT, path.join(ROOT, ...parts)); }

  const status = {
    slug,
    title:         title || slug,
    day:           dayNum,
    dayTag,
    runId,
    timestamp:     new Date().toISOString(),
    status:        'scaffold_only',
    failedCommand: null,
    paths: {
      promptPath:         toRel('docs', 'video-tests', 'prompts',  `${slug}-fill-video-package-prompt.md`),
      metadataPath:       toRel('docs', 'video-tests', 'metadata', `${slug}-landscape-metadata.json`),
      batchLoadInputPath: toRel('docs', 'video-tests', 'batches',  `${slug}-shorts-batch-load-input.js`),
      expectedExportFolder: '',
    },
  };
  try {
    fs.mkdirSync(REPORTS_DIR, { recursive: true });
    fs.writeFileSync(statusPath, JSON.stringify(status, null, 2), 'utf8');
  } catch {}
}

function saveDraftLink(draftFile, blogSlug) {
  const links = readDraftLinks();
  links[draftFile] = blogSlug;
  try { fs.writeFileSync(DRAFT_LINKS_PATH, JSON.stringify(links, null, 2), 'utf8'); } catch {}
}

function slugifyDraftName(filename) {
  const withoutExt = filename.replace(/\.(txt|md|mdx)$/, '');
  return withoutExt
    .replace(/[ğĞ]/g, 'g').replace(/[üÜ]/g, 'u').replace(/[şŞ]/g, 's')
    .replace(/[ıİ]/g, 'i').replace(/[öÖ]/g, 'o').replace(/[çÇ]/g, 'c')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Tries to find a blog slug for an unlinked draft and saves the link if confident.
// Returns the slug if found, null otherwise.
function autoRepairDraftLink(filename) {
  const links = readDraftLinks();
  if (links[filename]) return links[filename];
  if (!exists(BLOG_DIR)) return null;

  const candidate = slugifyDraftName(filename);

  // Exact match — fully confident
  for (const ext of ['.md', '.mdx']) {
    if (exists(path.join(BLOG_DIR, candidate + ext))) {
      saveDraftLink(filename, candidate);
      return candidate;
    }
  }

  // Prefix match — confident only when exactly one file matches
  try {
    const matches = fs.readdirSync(BLOG_DIR)
      .filter(f => /\.(md|mdx)$/.test(f) && f.startsWith(candidate + '-'));
    if (matches.length === 1) {
      const slug = matches[0].replace(/\.(md|mdx)$/, '');
      saveDraftLink(filename, slug);
      return slug;
    }
  } catch {}

  return null;
}

function getDraftStatus(blogSlug) {
  if (!blogSlug) return 'draft';
  const pkg = readJson(path.join(SHORTS_DIR, blogSlug, `${blogSlug}-shorts-package.json`));
  if (!pkg) return 'blog_created';
  if (pkg.content_generation_status !== 'filled') return 'prep_ready';
  if (!exists(path.join(BATCHES_DIR, `${blogSlug}-shorts-batch-load-input.js`))) return 'filled';
  const expFolder = resolveExportFolder(blogSlug);
  let mp4s = 0;
  try { if (exists(expFolder)) mp4s = fs.readdirSync(expFolder).filter(f => f.endsWith('.mp4')).length; } catch {}
  if (!mp4s) return 'batch_ready';
  return exists(path.join(expFolder, 'youtube-upload-result.json')) ? 'youtube_uploaded' : 'exported';
}

// apiDrafts — returns bare paths for <datalist> use
function apiDrafts() {
  if (!exists(DRAFTS_DIR)) return [];
  try {
    return fs.readdirSync(DRAFTS_DIR)
      .filter(f => /\.(txt|md|mdx)$/.test(f))
      .sort()
      .map(f => `docs/drafts/${f}`);
  } catch { return []; }
}

// apiDraftsList — rich list for the Taslaklar tab
function apiDraftsList() {
  if (!exists(DRAFTS_DIR)) return [];
  return fs.readdirSync(DRAFTS_DIR)
    .filter(f => /\.(txt|md|mdx)$/.test(f))
    .sort()
    .map(filename => {
      try {
        const stat     = fs.statSync(path.join(DRAFTS_DIR, filename));
        const blogSlug = autoRepairDraftLink(filename);
        return {
          filename,
          mtime:     stat.mtime.toISOString(),
          size:      stat.size,
          blog_slug: blogSlug,
          status:    getDraftStatus(blogSlug),
        };
      } catch { return null; }
    })
    .filter(Boolean);
}

// apiDraft — full detail for one draft file
function apiDraft(filename) {
  if (!filename || filename.includes('/') || filename.includes('\\') || filename.includes('..'))
    return null;
  if (!/\.(txt|md|mdx)$/.test(filename)) return null;
  const absPath = path.join(DRAFTS_DIR, filename);
  if (!exists(absPath)) return null;
  let stat;
  try { stat = fs.statSync(absPath); } catch { return null; }

  const blogSlug = autoRepairDraftLink(filename);

  // Detect multiple ambiguous candidates (not confident → surface hint to UI)
  let orphanedBlogHint = null;
  if (!blogSlug && exists(BLOG_DIR)) {
    const candidate = slugifyDraftName(filename);
    try {
      const ambiguous = fs.readdirSync(BLOG_DIR)
        .filter(f => /\.(md|mdx)$/.test(f) && f.startsWith(candidate));
      if (ambiguous.length > 1) orphanedBlogHint = candidate;
    } catch {}
  }

  const status     = getDraftStatus(blogSlug);
  const slugDetail = (blogSlug && /^[a-zA-Z0-9_-]+$/.test(blogSlug)) ? apiSlug(blogSlug) : null;

  return {
    filename,
    draft_path: `docs/drafts/${filename}`,
    mtime:      stat.mtime.toISOString(),
    size:       stat.size,
    blog_slug:  blogSlug,
    orphaned_blog_hint: orphanedBlogHint,
    status,
    slug_detail: slugDetail,
  };
}

// ── API handlers ──────────────────────────────────────────────────────────

function apiConfig() {
  const providerStatus = resolver => {
    try { return { available: true, bin: resolver() }; }
    catch (error) { return { available: false, error: error.message }; }
  };
  return {
    n8n_url: N8N_URL,
    cwd: ROOT,
    claude: providerStatus(resolveClaudeBin),
    codex: providerStatus(resolveCodexBin),
  };
}

function apiTokenStatus() {
  if (!exists(TOKEN_PATH)) return { exists: false };
  const token = readJson(TOKEN_PATH);
  if (!token) return { exists: false, error: 'parse_failed' };
  const expiresAt = token.expires_at ? new Date(token.expires_at) : null;
  return {
    exists:         true,
    expires_at:     token.expires_at    ?? null,
    obtained_at:    token.obtained_at   ?? null,
    scope:          token.scope         ?? null,
    open_id_masked: maskId(token.open_id ?? ''),
    is_expired:     expiresAt ? new Date() > expiresAt : null,
  };
}

function apiSlugs() {
  if (!exists(SHORTS_DIR)) return [];
  return fs.readdirSync(SHORTS_DIR)
    .filter(n => { try { return fs.statSync(path.join(SHORTS_DIR, n)).isDirectory(); } catch { return false; } })
    .sort()
    .map(slug => {
      const pkgPath      = path.join(SHORTS_DIR, slug, `${slug}-shorts-package.json`);
      const pipelinePath = path.join(REPORTS_DIR, `${slug}-shorts-pipeline-status.json`);
      const pkg          = readJson(pkgPath);
      const pipeline     = readJson(pipelinePath);
      const batchExists  = exists(path.join(BATCHES_DIR, `${slug}-shorts-batch-load-input.js`));
      const isStale      = pipeline?.status === 'failed'
                        && pkg?.content_generation_status === 'filled'
                        && batchExists;
      const valText      = readText(path.join(REPORTS_DIR, `${slug}-validation-result.md`));
      const valSummary   = valText ? extractValidationSummary(valText) : null;
      const valPassed    = valSummary?.some(l => /^Status:.*PASS/i.test(l)) ?? false;
      return {
        slug,
        package_status:    pkg ? (pkg.content_generation_status ?? 'unknown') : 'missing',
        batch:             batchExists,
        pipeline_status:   pipeline?.status ?? null,
        pipeline_mtime:    fileMtime(pipelinePath),
        is_stale_failed:   isStale,
        validation_passed: valPassed,
        publish:           exists(path.join(PUBLISH_DIR, slug)),
      };
    });
}

function apiSlug(slug) {
  if (!/^[a-zA-Z0-9_-]+$/.test(slug)) return null;
  const slugDir = path.join(SHORTS_DIR, slug);
  if (!exists(slugDir)) return null;

  const pkgPath       = path.join(slugDir, `${slug}-shorts-package.json`);
  const metaPath      = path.join(slugDir, 'metadata', `${slug}-shorts-metadata.json`);
  const pipelinePath  = path.join(REPORTS_DIR, `${slug}-shorts-pipeline-status.json`);
  const batchPath     = path.join(BATCHES_DIR, `${slug}-shorts-batch-load-input.js`);
  const valPath       = path.join(REPORTS_DIR, `${slug}-validation-result.md`);

  const pkg      = readJson(pkgPath);
  const metadata = readJson(metaPath);
  const pipeline = readJson(pipelinePath);
  const valText    = readText(valPath);
  const valSummary = valText ? extractValidationSummary(valText) : null;
  const valPassed  = valSummary?.some(l => /^Status:.*PASS/i.test(l)) ?? false;
  const batchExists = exists(batchPath);

  // Load inputs
  const loadInputDir = path.join(slugDir, 'load-inputs');
  let loadInputs = [];
  if (exists(loadInputDir)) {
    loadInputs = fs.readdirSync(loadInputDir)
      .filter(f => f.endsWith('-load-input.js'))
      .sort();
  }

  // Blog post
  const blogPath = findBlogPath(slug, pkg);

  // Pipeline staleness
  const isStale = pipeline?.status === 'failed'
               && pkg?.content_generation_status === 'filled'
               && batchExists;

  // Export folder + artifacts
  const exportFolder  = resolveExportFolder(slug);
  const exportExists  = exists(exportFolder);
  let mp4Count = 0;
  if (exportExists) {
    try { mp4Count = fs.readdirSync(exportFolder).filter(f => f.endsWith('.mp4')).length; } catch {}
  }

  const manifestPath        = path.join(exportFolder, 'publish-manifest.json');
  const ytResultPath        = path.join(exportFolder, 'youtube-upload-result.json');
  const tiktokPlanPath      = path.join(exportFolder, 'tiktok-upload-plan.json');
  const tiktokResultPath    = path.join(exportFolder, 'tiktok-upload-result.json');
  const tiktokCaptionDir    = path.join(exportFolder, 'tiktok-captions');
  const mobileLinkPath      = path.join(exportFolder, 'mobile-caption-link.json');

  const tiktokResult = readJson(tiktokResultPath);
  const ytResult     = readJson(ytResultPath);

  const testDay = normalizeDayNumber(pkg?.test_day)
    ?? normalizeDayNumber(pipeline?.day)
    ?? normalizeDayNumber(pipeline?.dayTag)
    ?? null;

  return {
    slug,
    // Source / package meta
    source_title:  pkg?.source?.title ?? null,
    test_day:      testDay,
    // Blog
    blog_exists:   !!blogPath,
    blog_path:     blogPath,
    // Package
    package_status:  pkg ? (pkg.content_generation_status ?? 'unknown') : 'missing',
    shorts_count:    pkg?.shorts?.length ?? 0,
    shorts:          pkg?.shorts ?? [],
    // Metadata
    metadata_exists: !!metadata,
    metadata_status: metadata?.content_generation_status ?? null,
    // Load inputs
    load_inputs:     loadInputs,
    // Batch
    batch_exists:    batchExists,
    // Validation
    validation_exists:  !!valText,
    validation_path:    valText ? path.relative(ROOT, valPath) : null,
    validation_summary: valSummary,
    validation_passed:  valPassed,
    // Pipeline
    pipeline,
    pipeline_mtime:   fileMtime(pipelinePath),
    is_stale_failed:  isStale,
    // Export folder
    export_folder:         exportFolder,
    export_folder_exists:  exportExists,
    exported_mp4_count:    mp4Count,
    // Upload artifacts
    publish_manifest_exists:       exists(manifestPath),
    youtube_upload_result_exists:  exists(ytResultPath),
    tiktok_upload_plan_exists:     exists(tiktokPlanPath),
    tiktok_upload_result_exists:   exists(tiktokResultPath),
    tiktok_caption_export_exists:  exists(tiktokCaptionDir),
    // TikTok readiness summary (token check stays client-side)
    tiktok_export_ready:  exists(manifestPath) && exportExists && mp4Count > 0,
    tiktok_upload_ready:  exists(tiktokPlanPath),
    tiktok_disabled_reason: !exists(tiktokPlanPath)
      ? 'Önce Export TikTok Captions çalıştırılmalı.' : null,
    // Upload result summaries (no tokens)
    tiktok_upload_result: tiktokResult ? {
      mode:  tiktokResult.mode,
      items: (tiktokResult.items ?? []).map(it => ({
        short_id:    it.short_id,
        status:      it.status,
        publish_id:  it.publish_id,
        uploaded_at: it.uploaded_at,
      })),
    } : null,
    youtube_upload_result: ytResult ? (
      ytResult.mode === 'youtube_upload_batch'
        ? {
            mode:         'batch',
            uploaded:     ytResult.summary?.uploaded  ?? 0,
            total:        ytResult.summary?.total     ?? 0,
            failed:       ytResult.summary?.failed    ?? 0,
            generated_at: ytResult.generated_at       ?? null,
            videos:       (ytResult.videos ?? []).map(v => ({
              id:       v.id,
              title:    v.title,
              status:   v.status,
              video_id: v.youtube_video_id,
              url:      v.youtube_url,
            })),
          }
        : {
            mode:         'single',
            uploaded:     ytResult.video?.youtube?.status === 'uploaded' ? 1 : 0,
            total:        1,
            video_id:     ytResult.video?.youtube?.videoId ?? null,
            url:          ytResult.video?.youtube?.url     ?? null,
            title:        ytResult.video?.title            ?? null,
            generated_at: ytResult.generated_at            ?? null,
          }
    ) : null,
    // Mobile caption static page
    mobile_caption_link: readJson(mobileLinkPath),
    // Publish pack index (docs/)
    publish_exists: exists(path.join(PUBLISH_DIR, slug)),
    publish_index:  readText(path.join(PUBLISH_DIR, slug, 'index.md')),
  };
}

function apiBatchContent(slug) {
  if (!/^[a-zA-Z0-9_-]+$/.test(slug)) return null;
  const content = readText(path.join(BATCHES_DIR, `${slug}-shorts-batch-load-input.js`));
  if (!content) return null;
  return { slug, content };
}

// ── Action runner ─────────────────────────────────────────────────────────

function buildCommand(action, slug, params = {}) {
  if (action === 'validate-shorts') {
    return {
      args: [
        path.join(SCRIPTS_DIR, 'validate-video-package.mjs'),
        '--slug', slug, '--type', 'shorts', '--report',
      ],
      preview: `node scripts/validate-video-package.mjs --slug ${slug} --type shorts --report`,
    };
  }
  if (action === 'export-captions') {
    // Generates tiktok-upload-plan.json from publish-manifest + exports caption .txt files.
    // Does NOT require tiktok-upload-plan.json to already exist.
    const exportFolder = resolveExportFolder(slug);
    if (!exists(exportFolder)) {
      return {
        error:         'export_folder_not_found',
        error_message: `Export klasörü bulunamadı: "${path.basename(exportFolder)}"`,
      };
    }
    const manifestPath = path.join(exportFolder, 'publish-manifest.json');
    if (!exists(manifestPath)) {
      return {
        error:         'publish_manifest_not_found',
        error_message: 'publish-manifest.json bulunamadı — önce n8n export akışını tamamlayın.',
      };
    }
    return {
      args:    [path.join(SCRIPTS_DIR, 'tiktok-export-pipeline.mjs'), '--slug', slug],
      preview: `node scripts/tiktok-export-pipeline.mjs --slug ${slug}`,
    };
  }
  if (action === 'tiktok-dry-run' || action === 'tiktok-draft-upload') {
    const planPath = path.join(resolveExportFolder(slug), 'tiktok-upload-plan.json');
    if (!exists(planPath)) return {
      error:         'tiktok_upload_plan_not_found',
      error_message: 'tiktok-upload-plan.json bulunamadı — önce Export TikTok Captions çalıştırın.',
    };
    if (action === 'tiktok-dry-run') {
      return {
        args: [path.join(SCRIPTS_DIR, 'upload-tiktok-batch-real.mjs'), '--plan', planPath, '--dry-run'],
        preview: `node scripts/upload-tiktok-batch-real.mjs --plan "${planPath}" --dry-run`,
      };
    }
    // tiktok-draft-upload: real upload, requires TIKTOK_REAL_UPLOAD=1
    return {
      args:    [path.join(SCRIPTS_DIR, 'upload-tiktok-batch-real.mjs'), '--plan', planPath],
      env:     { ...process.env, TIKTOK_REAL_UPLOAD: '1' },
      preview: `TIKTOK_REAL_UPLOAD=1 node scripts/upload-tiktok-batch-real.mjs --plan "${planPath}"`,
      longTimeout: true,
    };
  }
  if (action === 'shorts-prep') {
    const { title, day, run_id } = params;
    if (!title || typeof title !== 'string' || !title.trim()) return { error: 'missing_title' };
    const dayNum = normalizeDayNumber(day);
    if (!Number.isInteger(dayNum) || dayNum < 1 || dayNum > 999) return { error: 'invalid_day' };
    const runId = normalizeRunId(run_id, dayNum);

    // Use the slug from the request (blog_slug saved in draft-links.json) if valid.
    // This prevents re-deriving a wrong slug from the title (e.g. "1-2-3-4" vs "1-4").
    const blogSlug = (slug && /^[a-zA-Z0-9_-]+$/.test(slug)) ? slug : null;
    if (blogSlug) {
      const blogFileExists = ['.md', '.mdx'].some(ext =>
        exists(path.join(BLOG_DIR, blogSlug + ext)));
      if (!blogFileExists)
        return { error: 'source_blog_not_found', slug: blogSlug };
    }

    const cmdArgs = [
      path.join(SCRIPTS_DIR, 'run-shorts-prep-pipeline.mjs'),
      '--title',  title.trim(),
      '--day',    String(dayNum),
      '--run-id', runId,
      '--force',
    ];
    if (blogSlug) cmdArgs.push('--slug', blogSlug);

    const slugPart = blogSlug ? ` --slug ${blogSlug}` : '';
    return {
      args:    cmdArgs,
      preview: `node scripts/run-shorts-prep-pipeline.mjs --title "${title.trim()}"${slugPart} --day ${dayNum} --run-id ${runId} --force`,
    };
  }
  if (action === 'shorts-fill' || action === 'shorts-fill-codex') {
    const { run_id } = params;
    if (!run_id || !/^[a-zA-Z0-9_-]+$/.test(run_id)) return { error: 'invalid_run_id' };
    try {
      return {
        ...buildAgentCommand(action === 'shorts-fill' ? 'claude' : 'codex', 'shorts-fill', {
          slug, run_id,
        }),
        fillTimeout: true,
      };
    } catch (error) {
      return { error: action === 'shorts-fill' ? 'claude_not_found' : 'codex_not_found', error_message: error.message };
    }
  }
  if (action === 'batch-create') {
    const { run_id } = params;
    if (!run_id || !/^[a-zA-Z0-9_-]+$/.test(run_id)) return { error: 'invalid_run_id' };
    return {
      args: [
        path.join(SCRIPTS_DIR, 'build-video-batch.mjs'),
        '--slug',   slug,
        '--type',   'shorts',
        '--run-id', run_id,
        '--force',
      ],
      preview: `node scripts/build-video-batch.mjs --slug ${slug} --type shorts --run-id ${run_id} --force`,
    };
  }
  if (action === 'blog-add' || action === 'blog-add-codex') {
    const { draft_path } = params;
    if (!draft_path || typeof draft_path !== 'string') return { error: 'missing_draft_path' };
    if (!/\.(txt|md|mdx)$/i.test(draft_path)) return { error: 'invalid_draft_path' };
    const absPath = path.resolve(ROOT, draft_path);
    if ((!absPath.startsWith(DRAFTS_DIR + path.sep) && absPath !== DRAFTS_DIR) ||
        !draft_path.startsWith('docs/drafts/') || draft_path.includes('..')) return { error: 'invalid_draft_path' };
    if (!exists(absPath)) return { error: 'draft_not_found' };
    let realDraftPath;
    try { realDraftPath = fs.realpathSync(absPath); }
    catch { return { error: 'draft_not_found' }; }
    if (!realDraftPath.startsWith(fs.realpathSync(DRAFTS_DIR) + path.sep) || !fs.statSync(realDraftPath).isFile())
      return { error: 'invalid_draft_path' };
    try {
      return {
        ...buildAgentCommand(action === 'blog-add' ? 'claude' : 'codex', 'blog-add', { draft_path }),
        longTimeout: true,
      };
    } catch (err) {
      return { error: action === 'blog-add' ? 'claude_not_found' : 'codex_not_found', error_message: err.message };
    }
  }
  if (action === 'generate-mobile-caption') {
    return {
      args:    [path.join(SCRIPTS_DIR, 'export-mobile-captions-static.mjs'), '--slug', slug],
      preview: `node scripts/export-mobile-captions-static.mjs --slug ${slug}`,
    };
  }
  if (action === 'youtube-dry-run' || action === 'youtube-upload') {
    const { schedule_date } = params;
    if (!schedule_date || !/^\d{4}-\d{2}-\d{2}$/.test(schedule_date))
      return { error: 'invalid_schedule_date' };

    const exportFolder = resolveExportFolder(slug);
    const manifestPath = path.join(exportFolder, 'publish-manifest.json');

    // Safety: manifest must reside within EXPORT_ROOT
    const safeRoot = path.resolve(EXPORT_ROOT);
    const safeMnft = path.resolve(manifestPath);
    if (!safeMnft.startsWith(safeRoot + path.sep) && safeMnft !== safeRoot)
      return { error: 'invalid_manifest_path' };
    if (!exists(manifestPath)) return { error: 'manifest_not_found', error_message: 'publish-manifest.json bulunamadı — önce n8n export akışını tamamlayın.' };

    const clientSecretPath = path.join(ROOT, '.secrets', 'youtube', 'client_secret.json');
    const tokenPath        = path.join(ROOT, '.secrets', 'youtube', 'token.json');
    const channelId        = 'UCfdDdchpT4rait8RUjzpVGA';
    const folderName       = path.basename(exportFolder);

    if (action === 'youtube-dry-run') {
      return {
        args: [
          path.join(SCRIPTS_DIR, 'upload-youtube-batch.mjs'),
          '--manifest',            manifestPath,
          '--client-secret',       clientSecretPath,
          '--token',               tokenPath,
          '--expected-channel-id', channelId,
          '--scheduled',
          '--schedule-start-date', schedule_date,
          '--dry-run',
        ],
        preview:     `npm run video:youtube:upload-batch -- \\\n  --manifest "${folderName}/publish-manifest.json" \\\n  --scheduled \\\n  --schedule-start-date ${schedule_date} \\\n  --dry-run`,
        longTimeout: true,
      };
    }
    // youtube-upload (real — requires YOUTUBE_REAL_UPLOAD=1)
    return {
      args: [
        path.join(SCRIPTS_DIR, 'upload-youtube-batch.mjs'),
        '--manifest',            manifestPath,
        '--client-secret',       clientSecretPath,
        '--token',               tokenPath,
        '--expected-channel-id', channelId,
        '--scheduled',
        '--schedule-start-date', schedule_date,
        '--force',
      ],
      env:         { ...process.env, YOUTUBE_REAL_UPLOAD: '1' },
      preview:     `YOUTUBE_REAL_UPLOAD=1 npm run video:youtube:upload-batch -- \\\n  --manifest "${folderName}/publish-manifest.json" \\\n  --scheduled \\\n  --schedule-start-date ${schedule_date} \\\n  --force`,
      longTimeout: true,
    };
  }
  return { error: 'unknown_action' };
}

async function handleAction(body) {
  const { action, slug, params } = body ?? {};
  if (!action)                                          return { error: 'missing_action' };
  if (!NO_SLUG_ACTIONS.has(action) && !slug)            return { error: 'missing_slug' };
  if (slug && !/^[a-zA-Z0-9_-]+$/.test(slug))          return { error: 'invalid_slug' };
  if (!ALLOWED_ACTIONS.has(action))                     return { error: 'unknown_action' };

  // ── Service actions (no slug, async port/process checks) ─────────────────
  if (action === 'service-status') {
    return apiServicesStatus();
  }
  if (action === 'renderer-health') {
    const h = await checkRendererHealth();
    return { action, ...h };
  }
  if (action === 'start-n8n-main') {
    if (await checkPortOpen(N8N_PORT)) return { action, already_running: true, port: N8N_PORT };
    const r = startBackgroundJob(
      [path.join(SBV_ROOT, 'scripts', 'start-n8n-queue-main.sh')],
      process.env, SERVICE_JOBS['n8n-main'], 'bash'
    );
    return r.error ? { error: r.error } : { action, job_id: r.job_id, background: true };
  }
  if (action === 'start-n8n-worker') {
    const wj = readJobStatus(SERVICE_JOBS['n8n-worker']);
    if (wj?.status === 'running') return { action, already_running: true };
    const r = startBackgroundJob(
      [path.join(SBV_ROOT, 'scripts', 'start-n8n-queue-worker.sh')],
      process.env, SERVICE_JOBS['n8n-worker'], 'bash'
    );
    return r.error ? { error: r.error } : { action, job_id: r.job_id, background: true };
  }
  if (action === 'start-renderer') {
    if (await checkPortOpen(RENDERER_PORT)) return { action, already_running: true, port: RENDERER_PORT };
    const r = startBackgroundJob(
      [path.join(SBV_ROOT, 'scripts', 'start-renderer.sh')],
      process.env, SERVICE_JOBS['renderer'], 'bash'
    );
    return r.error ? { error: r.error } : { action, job_id: r.job_id, background: true };
  }

  const cmd = buildCommand(action, slug || '', params ?? {});
  if (cmd.error) return cmd;

  // Agent fill runs as a background job so it survives browser disconnect and long runtimes.
  if (action === 'shorts-fill' || action === 'shorts-fill-codex') {
    const provider  = action.endsWith('-codex') ? 'codex' : 'claude';
    const jobId     = `${slug}-fill-${provider}-${Date.now()}`;
    const jobResult = startBackgroundJob(cmd.args, cmd.env, jobId, cmd.executable || process.execPath);
    if (jobResult.error) return { error: jobResult.error };
    return {
      action,
      slug:            slug || '',
      command_preview: cmd.preview,
      job_id:          jobResult.job_id,
      background:      true,
    };
  }

  const executable = cmd.executable || process.execPath;
  const timeout    = cmd.fillTimeout ? 1_800_000  // 30 min fallback for long Claude actions
                   : cmd.longTimeout ? 300_000    // 5 min for blog-add / shorts-prep
                   : 120_000;                     // 2 min default
  const spawnOpts  = { cwd: ROOT, encoding: 'utf8', timeout };
  if (cmd.env) spawnOpts.env = cmd.env;

  // Pre-scan blog dir so we can detect newly created files after blog-add
  let preBlogFiles = new Set();
  if ((action === 'blog-add' || action === 'blog-add-codex') && exists(BLOG_DIR)) {
    try { preBlogFiles = new Set(fs.readdirSync(BLOG_DIR)); } catch {}
  }

  const result = spawnSync(executable, cmd.args, spawnOpts);

  // After successful blog-add: reliably find the new blog slug
  if (result.status === 0 && (action === 'blog-add' || action === 'blog-add-codex') && params?.draft_path) {
    const draftFile = path.basename(params.draft_path);
    let foundSlug   = null;

    // Strategy 1: detect newly created file in BLOG_DIR (most reliable)
    if (exists(BLOG_DIR)) {
      try {
        for (const f of fs.readdirSync(BLOG_DIR)) {
          if (!preBlogFiles.has(f) && /\.(md|mdx)$/.test(f)) {
            foundSlug = f.replace(/\.(md|mdx)$/, '');
            break;
          }
        }
      } catch {}
    }

    // Strategy 2: parse Claude output with multiple patterns
    if (!foundSlug) {
      const output = (result.stdout || '') + (result.stderr || '');
      const patterns = [
        /src\/content\/blog\/([a-z0-9][a-z0-9_ü-]+)\.(md|mdx)/i,
        /^[\s\-*]*\*{0,2}slug\*{0,2}:?\*{0,2}\s+([a-z0-9][a-z0-9_ü-]+)\s*$/im,
        /slug[^\S\n]*[:=][^\S\n]*`?([a-z0-9][a-z0-9_ü-]+)`?/im,
      ];
      for (const re of patterns) {
        const m = output.match(re);
        if (m) { foundSlug = m[1]; break; }
      }
    }

    if (foundSlug) {
      saveDraftLink(draftFile, foundSlug);
    } else {
      // Strategy 3: slugify draft filename and check blog dir
      autoRepairDraftLink(draftFile);
    }
  }

  const response = {
    action,
    slug:            slug || '',
    command_preview: cmd.preview,
    exit_code:       result.status,
    signal:          result.signal  || null,
    timed_out:       result.signal === 'SIGTERM' && result.status === null,
    stdout:          result.stdout  || '',
    stderr:          result.stderr  || '',
  };

  // For generate-mobile-caption: attach the generated link to the response
  if (result.status === 0 && action === 'generate-mobile-caption' && slug) {
    const linkPath = path.join(resolveExportFolder(slug), 'mobile-caption-link.json');
    const link     = readJson(linkPath);
    if (link) response.mobile_caption_link = link;
  }

  // For shorts-prep: ensure pipeline status JSON always exists after the action,
  // even when the pipeline script failed before calling writeStatus().
  // Then report scaffold_ready so the UI doesn't show a red failure screen when
  // the scaffold was actually created (validate failures are expected for fresh scaffolds).
  if (action === 'shorts-prep' && slug && /^[a-zA-Z0-9_-]+$/.test(slug)) {
    const p      = params ?? {};
    const pDay   = normalizeDayNumber(p.day) || 1;
    const pRunId = normalizeRunId(p.run_id, pDay);

    ensurePipelineStatus(slug, p.title || slug, pDay, pRunId);

    if (result.status !== 0) {
      const pkgPath     = path.join(SHORTS_DIR, slug, `${slug}-shorts-package.json`);
      const statusJPath = path.join(REPORTS_DIR, `${slug}-shorts-pipeline-status.json`);
      if (exists(pkgPath) && exists(statusJPath)) response.scaffold_ready = true;
    }
  }

  return response;
}

// ── HTTP helpers ──────────────────────────────────────────────────────────

async function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', c => chunks.push(c));
    req.on('end', () => {
      try { resolve(JSON.parse(Buffer.concat(chunks).toString('utf8'))); }
      catch { reject(new Error('invalid_json')); }
    });
    req.on('error', reject);
  });
}

function sendJson(res, data, status = 200) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  res.end(JSON.stringify(data));
}

function serveStatic(res, reqPath) {
  const rel      = reqPath === '/' ? 'index.html' : reqPath.replace(/^\//, '');
  const filePath = path.resolve(PUBLIC_DIR, rel);
  if (!filePath.startsWith(PUBLIC_DIR + path.sep) && filePath !== PUBLIC_DIR) {
    res.writeHead(403); res.end('Forbidden'); return;
  }
  if (!exists(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404); res.end('Not found'); return;
  }
  const mime = MIME[path.extname(filePath)] || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': mime });
  fs.createReadStream(filePath).pipe(res);
}

// ── Server ────────────────────────────────────────────────────────────────

const server = http.createServer(async (req, res) => {
  const url      = new URL(req.url, `http://${HOST}:${PORT}`);
  const pathname = url.pathname;

  if (req.method === 'POST') {
    if (pathname === '/api/action') {
      try {
        const body   = await readBody(req);
        const result = await handleAction(body);
        return sendJson(res, result, result.error ? 400 : 200);
      } catch (err) {
        return sendJson(res, { error: err.message }, 400);
      }
    }
    res.writeHead(405, { Allow: 'GET' }); res.end('Method Not Allowed'); return;
  }

  if (req.method !== 'GET') {
    res.writeHead(405); res.end('Method Not Allowed'); return;
  }

  if (pathname === '/api/config')           return sendJson(res, apiConfig());
  if (pathname === '/api/slugs')            return sendJson(res, apiSlugs());
  if (pathname === '/api/token-status')     return sendJson(res, apiTokenStatus());
  if (pathname === '/api/drafts')           return sendJson(res, apiDrafts());
  if (pathname === '/api/drafts-list')      return sendJson(res, apiDraftsList());
  if (pathname === '/api/services/status')       return sendJson(res, await apiServicesStatus());
  if (pathname === '/api/youtube-schedule-hint') return sendJson(res, apiYoutubeScheduleHint());
  if (pathname === '/api/day-hint')              return sendJson(res, apiDayHint());
  if (pathname === '/api/workflow-hints')        return sendJson(res, apiWorkflowHints());
  if (pathname === '/api/local-ip') {
    const ifaces = os.networkInterfaces();
    let ip = null;
    for (const addrs of Object.values(ifaces)) {
      for (const a of addrs) {
        if (a.family === 'IPv4' && !a.internal) { ip = a.address; break; }
      }
      if (ip) break;
    }
    return sendJson(res, { ip, caption_url_base: ip ? `http://${ip}:3457` : null });
  }

  const jobLogsMatch = pathname.match(/^\/api\/job\/([^/]+)\/logs$/);
  if (jobLogsMatch) {
    const jobId = decodeURIComponent(jobLogsMatch[1]);
    if (!/^[a-zA-Z0-9_-]+$/.test(jobId)) return sendJson(res, { error: 'invalid_job_id' }, 400);
    const logPath = path.join(JOBS_DIR, `${jobId}.log`);
    const offset  = Math.max(0, parseInt(url.searchParams.get('offset') || '0', 10) || 0);
    try {
      const stat  = fs.statSync(logPath);
      const avail = Math.max(0, stat.size - offset);
      if (avail === 0) return sendJson(res, { job_id: jobId, content: '', offset, length: 0, total: stat.size });
      const buf  = Buffer.allocUnsafe(Math.min(avail, 65_536));
      const fd   = fs.openSync(logPath, 'r');
      const read = fs.readSync(fd, buf, 0, buf.length, offset);
      fs.closeSync(fd);
      return sendJson(res, { job_id: jobId, content: buf.slice(0, read).toString('utf8'), offset, length: read, total: stat.size });
    } catch { return sendJson(res, { error: 'not_found' }, 404); }
  }

  const jobMatch = pathname.match(/^\/api\/job\/([^/]+)$/);
  if (jobMatch) {
    const jobId = decodeURIComponent(jobMatch[1]);
    if (!/^[a-zA-Z0-9_-]+$/.test(jobId)) return sendJson(res, { error: 'invalid_job_id' }, 400);
    const status = readJobStatus(jobId);
    if (!status) return sendJson(res, { error: 'not_found' }, 404);
    return sendJson(res, status);
  }

  const draftMatch = pathname.match(/^\/api\/draft\/([^/]+)$/);
  if (draftMatch) {
    const data = apiDraft(decodeURIComponent(draftMatch[1]));
    if (!data) return sendJson(res, { error: 'not_found' }, 404);
    return sendJson(res, data);
  }

  const batchMatch = pathname.match(/^\/api\/slug\/([^/]+)\/batch-content$/);
  if (batchMatch) {
    const data = apiBatchContent(decodeURIComponent(batchMatch[1]));
    if (!data) return sendJson(res, { error: 'not_found' }, 404);
    return sendJson(res, data);
  }

  const slugMatch = pathname.match(/^\/api\/slug\/([^/]+)$/);
  if (slugMatch) {
    const data = apiSlug(decodeURIComponent(slugMatch[1]));
    if (!data) return sendJson(res, { error: 'not_found' }, 404);
    return sendJson(res, data);
  }

  serveStatic(res, pathname);
});

server.listen(PORT, HOST, () => {
  console.log(`Dashboard: http://${HOST}:${PORT}`);
  console.log('Ctrl+C to stop.');
});
