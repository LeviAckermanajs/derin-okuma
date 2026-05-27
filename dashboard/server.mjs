#!/usr/bin/env node
// dashboard/server.mjs — read-only local status dashboard for Derin Okuma video workflow

import http           from 'http';
import fs             from 'fs';
import path           from 'path';
import { fileURLToPath } from 'url';

const __dirname  = path.dirname(fileURLToPath(import.meta.url));
const ROOT       = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(__dirname, 'public');

const HOST = '127.0.0.1';
const PORT = 3456;

const SHORTS_DIR  = path.join(ROOT, 'docs', 'video-tests', 'shorts');
const BATCHES_DIR = path.join(ROOT, 'docs', 'video-tests', 'batches');
const REPORTS_DIR = path.join(ROOT, 'docs', 'video-tests', 'reports');
const PUBLISH_DIR = path.join(ROOT, 'docs', 'video-tests', 'publish');
const TOKEN_PATH  = path.join(ROOT, '.secrets', 'tiktok', 'token.json');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
};

// ── Safe file helpers ─────────────────────────────────────────────────────

function readJson(filePath) {
  try { return JSON.parse(fs.readFileSync(filePath, 'utf8')); } catch { return null; }
}

function readText(filePath) {
  try { return fs.readFileSync(filePath, 'utf8'); } catch { return null; }
}

function exists(filePath) {
  return fs.existsSync(filePath);
}

function maskId(id) {
  if (!id || typeof id !== 'string' || id.length < 10) return '…';
  return id.slice(0, 4) + '…' + id.slice(-4);
}

// ── API handlers ──────────────────────────────────────────────────────────

function apiSlugs() {
  if (!exists(SHORTS_DIR)) return [];

  return fs.readdirSync(SHORTS_DIR)
    .filter(name => fs.statSync(path.join(SHORTS_DIR, name)).isDirectory())
    .sort()
    .map(slug => {
      const pkg      = readJson(path.join(SHORTS_DIR, slug, `${slug}-shorts-package.json`));
      const pipeline = readJson(path.join(REPORTS_DIR, `${slug}-shorts-pipeline-status.json`));
      return {
        slug,
        package_status: pkg ? (pkg.content_generation_status ?? 'unknown') : 'missing',
        batch:          exists(path.join(BATCHES_DIR, `${slug}-shorts-batch-load-input.js`)),
        pipeline_status: pipeline ? pipeline.status : null,
        publish:        exists(path.join(PUBLISH_DIR, slug)),
      };
    });
}

function apiSlug(slug) {
  // Prevent path traversal — allow only slug-safe chars
  if (!/^[a-zA-Z0-9_-]+$/.test(slug)) return null;

  const slugDir = path.join(SHORTS_DIR, slug);
  if (!exists(slugDir)) return null;

  const loadInputDir = path.join(slugDir, 'load-inputs');
  const pkg      = readJson(path.join(slugDir, `${slug}-shorts-package.json`));
  const metadata = readJson(path.join(slugDir, 'metadata', `${slug}-shorts-metadata.json`));
  const pipeline = readJson(path.join(REPORTS_DIR, `${slug}-shorts-pipeline-status.json`));
  const publishExists = exists(path.join(PUBLISH_DIR, slug));

  let loadInputs = [];
  if (exists(loadInputDir)) {
    loadInputs = fs.readdirSync(loadInputDir)
      .filter(f => f.endsWith('-load-input.js'))
      .map(f => f.replace('-load-input.js', ''))
      .sort();
  }

  return {
    slug,
    package:        pkg,
    metadata,
    load_inputs:    loadInputs,
    batch_exists:   exists(path.join(BATCHES_DIR, `${slug}-shorts-batch-load-input.js`)),
    pipeline,
    publish_exists: publishExists,
    publish_index:  publishExists ? readText(path.join(PUBLISH_DIR, slug, 'index.md')) : null,
    shorts_count:   pkg?.shorts?.length ?? 0,
  };
}

function apiTokenStatus() {
  if (!exists(TOKEN_PATH)) return { exists: false };

  const token = readJson(TOKEN_PATH);
  if (!token) return { exists: false, error: 'parse_failed' };

  const now       = new Date();
  const expiresAt = token.expires_at ? new Date(token.expires_at) : null;

  // Only return safe fields — never access_token or refresh_token
  return {
    exists:         true,
    expires_at:     token.expires_at     ?? null,
    obtained_at:    token.obtained_at    ?? null,
    scope:          token.scope          ?? null,
    open_id_masked: maskId(token.open_id ?? ''),
    is_expired:     expiresAt ? now > expiresAt : null,
  };
}

// ── HTTP helpers ──────────────────────────────────────────────────────────

function sendJson(res, data, status = 200) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(data));
}

function serveStatic(res, reqPath) {
  const rel      = reqPath === '/' ? 'index.html' : reqPath.replace(/^\//, '');
  const filePath = path.resolve(PUBLIC_DIR, rel);

  // Prevent path traversal
  if (!filePath.startsWith(PUBLIC_DIR + path.sep) && filePath !== PUBLIC_DIR) {
    res.writeHead(403); res.end('Forbidden'); return;
  }

  if (!exists(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404); res.end('Not found'); return;
  }

  const ext  = path.extname(filePath);
  const mime = MIME[ext] || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': mime });
  fs.createReadStream(filePath).pipe(res);
}

// ── Server ────────────────────────────────────────────────────────────────

const server = http.createServer((req, res) => {
  const url      = new URL(req.url, `http://${HOST}:${PORT}`);
  const pathname = url.pathname;

  if (req.method !== 'GET') {
    res.writeHead(405, { Allow: 'GET' });
    res.end('Method Not Allowed');
    return;
  }

  if (pathname === '/api/slugs') {
    return sendJson(res, apiSlugs());
  }

  if (pathname === '/api/token-status') {
    return sendJson(res, apiTokenStatus());
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
