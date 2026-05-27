#!/usr/bin/env node
// upload-tiktok-batch-real.mjs — sequential TikTok batch draft upload

import fs      from 'fs';
import path    from 'path';
import process from 'process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT      = path.resolve(__dirname, '..');

const TIKTOK_INIT_URL    = 'https://open.tiktokapis.com/v2/post/publish/inbox/video/init/';
const SECRETS_DIR        = path.join(ROOT, '.secrets', 'tiktok');
const TOKEN_FILE         = path.join(SECRETS_DIR, 'token.json');
const DELAY_BETWEEN_MS   = 5_000;

// ── CLI ───────────────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const args = { plan: null, dryRun: false };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if      (arg === '--plan'    && argv[i + 1]) args.plan   = argv[++i];
    else if (arg === '--dry-run')                 args.dryRun = true;
    else fail(`Unknown or incomplete option: ${arg}`);
  }
  return args;
}

// ── Logging ───────────────────────────────────────────────────────────────────

function fail(message) { console.error(`[FAIL] ${message}`); process.exit(1); }
function ok(message)   { console.log(`[OK] ${message}`); }
function skip(message) { console.log(`[SKIP] ${message}`); }
function info(message) { console.log(`[INFO] ${message}`); }
function warn(message) { console.log(`[WARN] ${message}`); }

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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
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

// ── Result file helpers ───────────────────────────────────────────────────────

function loadOrInitResult(resultPath, planPath) {
  if (fs.existsSync(resultPath)) {
    try {
      return JSON.parse(fs.readFileSync(resultPath, 'utf8'));
    } catch {
      // Corrupted — start fresh
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

function isAlreadyUploaded(result, shortId) {
  return result.items.some(i => i.short_id === shortId && i.status === 'uploaded');
}

function upsertResultItem(result, item) {
  const idx = result.items.findIndex(i => i.short_id === item.short_id);
  if (idx >= 0) result.items[idx] = item;
  else result.items.push(item);
}

function saveResult(resultPath, result) {
  fs.writeFileSync(resultPath, JSON.stringify(result, null, 2) + '\n', 'utf8');
}

// ── Single item upload ────────────────────────────────────────────────────────

async function uploadItem(token, item) {
  const videoPath = item.video_path;
  const fileSize  = fs.statSync(videoPath).size;

  // Step 1: init
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
    throw new Error(`Upload init network error: ${err.message}`);
  }

  if (!initResponse.ok || initJson.error?.code !== 'ok') {
    const detail = initJson.error?.message || JSON.stringify(initJson);
    throw new Error(`Upload init failed (HTTP ${initResponse.status}): ${detail}`);
  }

  const publishId = initJson.data?.publish_id;
  const uploadUrl = initJson.data?.upload_url;

  if (!isNonEmptyString(publishId)) throw new Error('Init response missing data.publish_id');
  if (!isNonEmptyString(uploadUrl)) throw new Error('Init response missing data.upload_url');

  ok(`  upload_init=true`);
  ok(`  publish_id=${publishId}`);
  info(`  upload_url=${maskUrl(uploadUrl)}`);

  // Step 2: PUT binary
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
    throw new Error(`Video PUT network error: ${err.message}`);
  }

  if (!putResponse.ok) {
    const body = await putResponse.text().catch(() => '');
    throw new Error(`Video PUT failed (HTTP ${putResponse.status}): ${body.slice(0, 200)}`);
  }

  ok(`  upload_put=true`);

  return publishId;
}

// ── Main ──────────────────────────────────────────────────────────────────────

const args = parseArgs(process.argv.slice(2));

if (!args.plan) fail('Missing required --plan <path-to-tiktok-upload-plan.json>');

console.log('TikTok Batch Draft Upload');
console.log('');

// ── Load and validate token ───────────────────────────────────────────────────

const token = loadAndValidateToken();

// ── Load plan ─────────────────────────────────────────────────────────────────

const planPath = path.resolve(args.plan);
const plan     = readJson(planPath, 'tiktok-upload-plan.json');

if (!Array.isArray(plan.items) || plan.items.length === 0) {
  fail('tiktok-upload-plan.json has no items array');
}

ok(`plan_items_total=${plan.items.length}`);

// ── Validate all items up-front ───────────────────────────────────────────────

for (const item of plan.items) {
  const id = item.short_id || '(unknown)';
  if (!isNonEmptyString(item.short_id))   fail(`An item is missing short_id`);
  if (!isNonEmptyString(item.video_path)) fail(`${id}: missing video_path`);
  if (!isNonEmptyString(item.caption))    fail(`${id}: missing caption`);
  if (item.is_aigc !== true)              fail(`${id}: is_aigc must be true`);
  if (!fs.existsSync(item.video_path))    fail(`${id}: file not found: ${item.video_path}`);
  if (item.errors?.length > 0)            fail(`${id}: plan errors: ${item.errors.join('; ')}`);
}

ok('all_items_validated=true');
console.log('');

// ── Load result file and identify pending items ───────────────────────────────

const resultPath = path.join(path.dirname(planPath), 'tiktok-upload-result.json');
const result     = loadOrInitResult(resultPath, planPath);

const pending  = plan.items.filter(i => !isAlreadyUploaded(result, i.short_id));
const skipped  = plan.items.length - pending.length;

if (skipped > 0) {
  skip(`already_uploaded=${skipped} item(s) — skipping`);
}

if (pending.length === 0) {
  ok('all_items_already_uploaded=true');
  console.log('');
  console.log('Nothing to do. Done.');
  process.exit(0);
}

ok(`pending_uploads=${pending.length}`);
console.log('');

// ── Dry run ───────────────────────────────────────────────────────────────────

if (args.dryRun) {
  for (const item of pending) {
    const fileSize = fs.statSync(item.video_path).size;
    info(`would upload: ${item.short_id}  file_size=${fileSize}  caption_length=${item.caption.length}`);
  }
  console.log('');
  skip(`dry_run=true no TikTok API call`);
  console.log('');
  console.log('Done. Dry run passed — all validations OK.');
  process.exit(0);
}

// ── Real upload guard ─────────────────────────────────────────────────────────

if (process.env.TIKTOK_REAL_UPLOAD !== '1') {
  fail('Refusing real TikTok upload. Set TIKTOK_REAL_UPLOAD=1.');
}

// ── Sequential batch upload ───────────────────────────────────────────────────

let uploadedCount = 0;

for (let i = 0; i < pending.length; i++) {
  const item = pending[i];

  info(`[${i + 1}/${pending.length}] Uploading ${item.short_id}…`);
  info(`  file=${path.basename(item.video_path)}`);
  info(`  caption_length=${item.caption.length}`);

  let publishId;
  try {
    publishId = await uploadItem(token, item);
  } catch (err) {
    console.error(`[FAIL] ${item.short_id}: ${err.message}`);
    if (uploadedCount > 0) {
      warn(`Stopped after ${uploadedCount} successful upload(s). Re-run to continue — already-uploaded items will be skipped.`);
    }
    process.exit(1);
  }

  ok(`  tiktok_draft_uploaded=true`);

  upsertResultItem(result, {
    short_id:    item.short_id,
    status:      'uploaded',
    publish_id:  publishId,
    uploaded_at: new Date().toISOString(),
    video_path:  item.video_path,
    caption:     item.caption,
    is_aigc:     true,
  });
  saveResult(resultPath, result);
  ok(`  result_saved short_id=${item.short_id}`);

  uploadedCount++;
  console.log('');

  if (i < pending.length - 1) {
    info(`Waiting ${DELAY_BETWEEN_MS / 1000}s before next upload…`);
    await sleep(DELAY_BETWEEN_MS);
    console.log('');
  }
}

// ── Summary ───────────────────────────────────────────────────────────────────

ok(`batch_complete=true uploaded=${uploadedCount}/${plan.items.length}`);
info('Open TikTok inbox/notifications to review and post your drafts.');
console.log('');
console.log('Done.');
