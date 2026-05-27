#!/usr/bin/env node
// dashboard/server.mjs — Phase 2: read-only data + action POST endpoints

import http              from 'http';
import fs                from 'fs';
import path              from 'path';
import { spawnSync }     from 'child_process';
import { fileURLToPath } from 'url';

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
const DRAFTS_DIR       = path.join(ROOT, 'docs', 'drafts');
const DRAFT_LINKS_PATH = path.join(ROOT, 'docs', 'drafts', '.draft-links.json');
const TOKEN_PATH       = path.join(ROOT, '.secrets', 'tiktok', 'token.json');
const CLAUDE_BIN   = '/home/muhammet/.nvm/versions/node/v24.15.0/bin/claude';
const EXPORT_ROOT  = process.env.DERIN_OKUMA_EXPORT_ROOT || '/mnt/c/Users/MUHAMMET/Desktop/Derin Okuma YT';
const N8N_URL      = process.env.N8N_URL || 'http://localhost:5678';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
};

const ALLOWED_ACTIONS = new Set([
  'validate-shorts', 'export-captions', 'tiktok-dry-run',
  'shorts-prep', 'shorts-fill', 'batch-create', 'blog-add',
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
function maskId(id)        {
  if (!id || typeof id !== 'string' || id.length < 10) return '…';
  return id.slice(0, 4) + '…' + id.slice(-4);
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

function saveDraftLink(draftFile, blogSlug) {
  const links = readDraftLinks();
  links[draftFile] = blogSlug;
  try { fs.writeFileSync(DRAFT_LINKS_PATH, JSON.stringify(links, null, 2), 'utf8'); } catch {}
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
  const links = readDraftLinks();
  return fs.readdirSync(DRAFTS_DIR)
    .filter(f => /\.(txt|md|mdx)$/.test(f))
    .sort()
    .map(filename => {
      try {
        const stat     = fs.statSync(path.join(DRAFTS_DIR, filename));
        const blogSlug = links[filename] || null;
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

  const links    = readDraftLinks();
  const blogSlug = links[filename] || null;
  const status   = getDraftStatus(blogSlug);
  const slugDetail = (blogSlug && /^[a-zA-Z0-9_-]+$/.test(blogSlug)) ? apiSlug(blogSlug) : null;

  return {
    filename,
    draft_path: `docs/drafts/${filename}`,
    mtime:      stat.mtime.toISOString(),
    size:       stat.size,
    blog_slug:  blogSlug,
    status,
    slug_detail: slugDetail,
  };
}

// ── API handlers ──────────────────────────────────────────────────────────

function apiConfig() {
  return { n8n_url: N8N_URL, cwd: ROOT };
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

  const manifestPath     = path.join(exportFolder, 'publish-manifest.json');
  const ytResultPath     = path.join(exportFolder, 'youtube-upload-result.json');
  const tiktokPlanPath   = path.join(exportFolder, 'tiktok-upload-plan.json');
  const tiktokResultPath = path.join(exportFolder, 'tiktok-upload-result.json');

  const tiktokResult = readJson(tiktokResultPath);
  const ytResult     = readJson(ytResultPath);

  const testDay = pkg?.test_day
    ?? (pipeline?.dayTag ? (parseInt(pipeline.dayTag.replace(/\D/g, ''), 10) || null) : null);

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
  if (action === 'export-captions' || action === 'tiktok-dry-run') {
    const planPath = path.join(resolveExportFolder(slug), 'tiktok-upload-plan.json');
    if (!exists(planPath)) return { error: 'tiktok_upload_plan_not_found' };
    if (action === 'export-captions') {
      return {
        args: [path.join(SCRIPTS_DIR, 'export-tiktok-captions.mjs'), '--plan', planPath],
        preview: `node scripts/export-tiktok-captions.mjs --plan "${planPath}"`,
      };
    }
    return {
      args: [path.join(SCRIPTS_DIR, 'upload-tiktok-batch-real.mjs'), '--plan', planPath, '--dry-run'],
      preview: `node scripts/upload-tiktok-batch-real.mjs --plan "${planPath}" --dry-run`,
    };
  }
  if (action === 'shorts-prep') {
    const { title, day } = params;
    if (!title || typeof title !== 'string' || !title.trim()) return { error: 'missing_title' };
    const dayNum = parseInt(String(day), 10);
    if (!Number.isInteger(dayNum) || dayNum < 1 || dayNum > 999) return { error: 'invalid_day' };
    return {
      args: [
        path.join(SCRIPTS_DIR, 'prepare-video-package.mjs'),
        '--title', title.trim(),
        '--day',   String(dayNum),
        '--slug',  slug,
        '--force',
      ],
      preview: `node scripts/prepare-video-package.mjs --title "${title.trim()}" --day ${dayNum} --slug ${slug} --force`,
    };
  }
  if (action === 'shorts-fill') {
    const { run_id } = params;
    if (!run_id || !/^[a-zA-Z0-9_-]+$/.test(run_id)) return { error: 'invalid_run_id' };
    const fillCmd = process.env.CLAUDE_FILL_COMMAND_TEMPLATE
      || `${CLAUDE_BIN} --print < "$PROMPT_PATH"`;
    return {
      args: [
        path.join(SCRIPTS_DIR, 'run-shorts-fill-with-claude.mjs'),
        '--slug',   slug,
        '--run-id', run_id,
      ],
      env:          { ...process.env, CLAUDE_FILL_COMMAND_TEMPLATE: fillCmd },
      preview:      `node scripts/run-shorts-fill-with-claude.mjs --slug ${slug} --run-id ${run_id}`,
      longTimeout:  true,
    };
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
  if (action === 'blog-add') {
    const { draft_path } = params;
    if (!draft_path || typeof draft_path !== 'string') return { error: 'missing_draft_path' };
    if (!draft_path.startsWith('docs/drafts/') || draft_path.includes('..'))
      return { error: 'invalid_draft_path' };
    const absPath = path.join(ROOT, draft_path);
    if (!exists(absPath)) return { error: 'draft_not_found' };
    return {
      executable:  CLAUDE_BIN,
      args:        ['--permission-mode', 'acceptEdits', '-p', `/add-blog-post ${draft_path}`],
      preview:     `claude --permission-mode acceptEdits -p "/add-blog-post ${draft_path}"`,
      longTimeout: true,
    };
  }
  return { error: 'unknown_action' };
}

function handleAction(body) {
  const { action, slug, params } = body ?? {};
  if (!action)                                       return { error: 'missing_action' };
  if (action !== 'blog-add' && !slug)                return { error: 'missing_slug' };
  if (slug && !/^[a-zA-Z0-9_-]+$/.test(slug))       return { error: 'invalid_slug' };
  if (!ALLOWED_ACTIONS.has(action))                  return { error: 'unknown_action' };

  const cmd = buildCommand(action, slug || '', params ?? {});
  if (cmd.error) return cmd;

  const executable = cmd.executable || process.execPath;
  const timeout    = cmd.longTimeout ? 300_000 : 120_000;
  const spawnOpts  = { cwd: ROOT, encoding: 'utf8', timeout };
  if (cmd.env) spawnOpts.env = cmd.env;

  const result = spawnSync(executable, cmd.args, spawnOpts);

  // After successful blog-add: parse output to save draft→slug link
  if (result.status === 0 && action === 'blog-add' && params?.draft_path) {
    const output = (result.stdout || '') + (result.stderr || '');
    const m      = output.match(/^[\s\-*]*slug:\s*([a-z0-9][a-z0-9_-]*)\s*$/im);
    if (m) saveDraftLink(path.basename(params.draft_path), m[1].trim());
  }

  return {
    action,
    slug:            slug || '',
    command_preview: cmd.preview,
    exit_code:       result.status,
    stdout:          result.stdout || '',
    stderr:          result.stderr || '',
  };
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
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
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
        const result = handleAction(body);
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

  if (pathname === '/api/config')       return sendJson(res, apiConfig());
  if (pathname === '/api/slugs')        return sendJson(res, apiSlugs());
  if (pathname === '/api/token-status') return sendJson(res, apiTokenStatus());
  if (pathname === '/api/drafts')       return sendJson(res, apiDrafts());
  if (pathname === '/api/drafts-list')  return sendJson(res, apiDraftsList());

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
