#!/usr/bin/env node
// upload-tiktok-one.mjs — single TikTok draft upload for sandbox testing

import fs      from 'fs';
import path    from 'path';
import process from 'process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT      = path.resolve(__dirname, '..');

const TIKTOK_INIT_URL = 'https://open.tiktokapis.com/v2/post/publish/inbox/video/init/';
const SECRETS_DIR     = path.join(ROOT, '.secrets', 'tiktok');
const TOKEN_FILE      = path.join(SECRETS_DIR, 'token.json');

// ── CLI ───────────────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const args = { plan: null, shortId: null, dryRun: false };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if      (arg === '--plan'     && argv[i + 1]) args.plan    = argv[++i];
    else if (arg === '--short-id' && argv[i + 1]) args.shortId = argv[++i];
    else if (arg === '--dry-run')                  args.dryRun  = true;
    else fail(`Unknown or incomplete option: ${arg}`);
  }
  return args;
}

// ── Logging ───────────────────────────────────────────────────────────────────

function fail(message) { console.error(`[FAIL] ${message}`); process.exit(1); }
function ok(message)   { console.log(`[OK] ${message}`); }
function skip(message) { console.log(`[SKIP] ${message}`); }
function info(message) { console.log(`[INFO] ${message}`); }

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function readJson(filePath, label) {
  if (!fs.existsSync(filePath)) fail(`${label} not found: ${filePath}`);
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (err) {
    fail(`${label} parse failed: ${err.message}`);
  }
}

function maskUrl(url) {
  try {
    const u = new URL(url);
    return `${u.protocol}//${u.host}/***`;
  } catch {
    return '***';
  }
}

// ── Token validation ──────────────────────────────────────────────────────────

function loadAndValidateToken() {
  const token = readJson(TOKEN_FILE, 'token.json');
  if (!isNonEmptyString(token.access_token)) fail('token.json missing access_token');
  if (!isNonEmptyString(token.expires_at))   fail('token.json missing expires_at');

  const expiresAt = new Date(token.expires_at);
  if (isNaN(expiresAt.getTime())) fail(`token.json expires_at is not a valid date: "${token.expires_at}"`);
  if (expiresAt.getTime() <= Date.now()) fail('access_token is expired — re-authorize');

  if (!token.scope?.includes('video.upload')) {
    fail('token scope does not include video.upload — re-authorize with correct scopes');
  }

  ok('token_valid=true');
  return token;
}

// ── Upload result file helpers ────────────────────────────────────────────────

function loadOrInitResult(resultPath, planPath) {
  if (fs.existsSync(resultPath)) {
    try {
      return JSON.parse(fs.readFileSync(resultPath, 'utf8'));
    } catch {
      // Corrupted file — start fresh
    }
  }
  return {
    platform:    'tiktok',
    mode:        'draft',
    environment: 'sandbox',
    plan_path:   planPath,
    items:       [],
  };
}

function upsertResultItem(result, item) {
  const idx = result.items.findIndex(i => i.short_id === item.short_id);
  if (idx >= 0) result.items[idx] = item;
  else result.items.push(item);
}

// ── Main ──────────────────────────────────────────────────────────────────────

const args = parseArgs(process.argv.slice(2));

if (!args.plan)    fail('Missing required --plan <path-to-tiktok-upload-plan.json>');
if (!args.shortId) fail('Missing required --short-id <id>');

console.log('TikTok Single Draft Upload');
console.log('');

// ── Load token ────────────────────────────────────────────────────────────────

const token = loadAndValidateToken();

// ── Load plan and find item ───────────────────────────────────────────────────

const planPath = path.resolve(args.plan);
const plan     = readJson(planPath, 'tiktok-upload-plan.json');

if (!Array.isArray(plan.items) || plan.items.length === 0) {
  fail('tiktok-upload-plan.json has no items array');
}

const item = plan.items.find(i => i.short_id === args.shortId);
if (!item) {
  const ids = plan.items.map(i => i.short_id).join(', ');
  fail(`short_id "${args.shortId}" not found in plan. Available: ${ids}`);
}

ok(`short_id=${item.short_id}`);

// ── Validate item ─────────────────────────────────────────────────────────────

const videoPath = item.video_path;
if (!isNonEmptyString(videoPath)) fail(`item "${args.shortId}" missing video_path`);

if (!fs.existsSync(videoPath)) {
  fail(`video file not found: ${videoPath}`);
}
ok('file_exists=true');

const fileSize = fs.statSync(videoPath).size;
ok(`file_size=${fileSize}`);

if (!isNonEmptyString(item.caption)) fail(`item "${args.shortId}" missing caption`);
ok(`caption_length=${item.caption.length}`);

if (item.is_aigc !== true) fail(`item "${args.shortId}" is_aigc must be true`);
ok('is_aigc=true');

if (item.errors && item.errors.length > 0) {
  fail(`item "${args.shortId}" has plan errors: ${item.errors.join('; ')}`);
}

// ── Dry run ───────────────────────────────────────────────────────────────────

if (args.dryRun) {
  skip('dry_run=true no TikTok API call');
  console.log('');
  console.log('Done. Dry run passed — all validations OK.');
  process.exit(0);
}

// ── Real upload guard ─────────────────────────────────────────────────────────

if (process.env.TIKTOK_REAL_UPLOAD !== '1') {
  fail('Refusing real TikTok upload. Set TIKTOK_REAL_UPLOAD=1.');
}

// ── Step 1: init upload ───────────────────────────────────────────────────────

info('Initialising draft upload…');

let initResponse, initJson;
try {
  initResponse = await fetch(TIKTOK_INIT_URL, {
    method:  'POST',
    headers: {
      'Authorization': `Bearer ${token.access_token}`,
      'Content-Type':  'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      source_info: {
        source:            'FILE_UPLOAD',
        video_size:        fileSize,
        chunk_size:        fileSize,
        total_chunk_count: 1,
      },
    }),
  });
  initJson = await initResponse.json();
} catch (err) {
  fail(`Upload init network error: ${err.message}`);
}

if (!initResponse.ok || initJson.error?.code !== 'ok') {
  const detail = initJson.error?.message || JSON.stringify(initJson);
  fail(`Upload init failed (HTTP ${initResponse.status}): ${detail}`);
}

const publishId = initJson.data?.publish_id;
const uploadUrl = initJson.data?.upload_url;

if (!isNonEmptyString(publishId)) fail('Init response missing data.publish_id');
if (!isNonEmptyString(uploadUrl)) fail('Init response missing data.upload_url');

ok('upload_init=true');
ok(`publish_id=${publishId}`);
info(`upload_url=${maskUrl(uploadUrl)}`);

// ── Step 2: PUT video binary ──────────────────────────────────────────────────

info('Uploading video…');

const videoBuffer = fs.readFileSync(videoPath);

let putResponse;
try {
  putResponse = await fetch(uploadUrl, {
    method:  'PUT',
    headers: {
      'Content-Type':   'video/mp4',
      'Content-Length': String(fileSize),
      'Content-Range':  `bytes 0-${fileSize - 1}/${fileSize}`,
    },
    body: videoBuffer,
  });
} catch (err) {
  fail(`Video PUT network error: ${err.message}`);
}

if (!putResponse.ok) {
  const body = await putResponse.text().catch(() => '');
  fail(`Video PUT failed (HTTP ${putResponse.status}): ${body.slice(0, 200)}`);
}

ok('upload_put=true');
ok('tiktok_draft_uploaded=true');
info('Open TikTok inbox/notifications to continue editing and posting.');

// ── Record result ─────────────────────────────────────────────────────────────

const resultPath = path.join(path.dirname(planPath), 'tiktok-upload-result.json');
const result     = loadOrInitResult(resultPath, planPath);

upsertResultItem(result, {
  short_id:    item.short_id,
  status:      'uploaded',
  publish_id:  publishId,
  uploaded_at: new Date().toISOString(),
  video_path:  videoPath,
  caption:     item.caption,
  is_aigc:     true,
});

fs.writeFileSync(resultPath, JSON.stringify(result, null, 2) + '\n', 'utf8');
ok(`result_saved=${path.relative(ROOT, resultPath)}`);

console.log('');
console.log('Done.');
