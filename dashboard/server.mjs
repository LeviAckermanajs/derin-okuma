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
const TOKEN_PATH   = path.join(ROOT, '.secrets', 'tiktok', 'token.json');
const EXPORT_ROOT  = process.env.DERIN_OKUMA_EXPORT_ROOT || '/mnt/c/Users/MUHAMMET/Desktop/Derin Okuma YT';
const N8N_URL      = process.env.N8N_URL || 'http://localhost:5678';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
};

const ALLOWED_ACTIONS = new Set(['validate-shorts', 'export-captions', 'tiktok-dry-run']);

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
      return {
        slug,
        package_status:  pkg ? (pkg.content_generation_status ?? 'unknown') : 'missing',
        batch:           batchExists,
        pipeline_status: pipeline?.status ?? null,
        pipeline_mtime:  fileMtime(pipelinePath),
        is_stale_failed: isStale,
        publish:         exists(path.join(PUBLISH_DIR, slug)),
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
  const valText  = readText(valPath);
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

  return {
    slug,
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
    validation_summary: valText ? extractValidationSummary(valText) : null,
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

function buildCommand(action, slug) {
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
  return { error: 'unknown_action' };
}

function handleAction(body) {
  const { action, slug } = body ?? {};
  if (!action || !slug)                return { error: 'missing_action_or_slug' };
  if (!/^[a-zA-Z0-9_-]+$/.test(slug)) return { error: 'invalid_slug' };
  if (!ALLOWED_ACTIONS.has(action))    return { error: 'unknown_action' };

  const cmd = buildCommand(action, slug);
  if (cmd.error) return cmd;

  const result = spawnSync(process.execPath, cmd.args, {
    cwd: ROOT, encoding: 'utf8', timeout: 120_000,
  });

  return {
    action,
    slug,
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
