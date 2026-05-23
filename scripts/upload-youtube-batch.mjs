#!/usr/bin/env node
/**
 * upload-youtube-batch.mjs
 *
 * Upload all pending videos from publish-manifest.json to YouTube as PRIVATE.
 * Skips videos already recorded as uploaded in youtube-upload-result.json.
 * Writes/updates youtube-upload-result.json after each successful upload.
 * Stops immediately on any upload failure.
 *
 * Requires YOUTUBE_REAL_UPLOAD=1. --force does NOT bypass this gate.
 *
 * Usage:
 *   YOUTUBE_REAL_UPLOAD=1 node scripts/upload-youtube-batch.mjs \
 *     --manifest "/path/to/publish-manifest.json" \
 *     --client-secret ".secrets/youtube/client_secret.json" \
 *     --token ".secrets/youtube/token.json" \
 *     --expected-channel-id "UCfdDchpT4rait8RujzpVGA" \
 *     --force
 *
 * Dry-run (no uploads, validates files + channel):
 *   node scripts/upload-youtube-batch.mjs \
 *     --manifest "/path/to/publish-manifest.json" \
 *     --client-secret ".secrets/youtube/client_secret.json" \
 *     --token ".secrets/youtube/token.json" \
 *     --expected-channel-id "UCfdDchpT4rait8RujzpVGA" \
 *     --dry-run
 *
 * Scheduled publish (videos stay private, publishAt sent to YouTube):
 *   YOUTUBE_REAL_UPLOAD=1 node scripts/upload-youtube-batch.mjs \
 *     --manifest "/path/to/publish-manifest.json" \
 *     --client-secret ".secrets/youtube/client_secret.json" \
 *     --token ".secrets/youtube/token.json" \
 *     --expected-channel-id "UCfdDchpT4rait8RujzpVGA" \
 *     --scheduled \
 *     --schedule-start-date 2026-05-25 \
 *     --schedule-slots "13:00,19:00,22:00" \
 *     --timezone "Europe/Istanbul" \
 *     --force
 *
 * Scheduling rules:
 *   - Slots are assigned only to videos that will actually be uploaded.
 *   - Already-uploaded (skipped) videos do not consume a slot.
 *   - Slots within 60 minutes of now are skipped automatically.
 *   - privacyStatus is always "private"; YouTube publishes at publishAt.
 *
 * Channel ID can also be set via env:
 *   YOUTUBE_EXPECTED_CHANNEL_ID=UCxxxxxxxxxxxxxxxxxxxxxxxxx
 *
 * OAuth redirect URI to register in Google Cloud Console:
 *   http://localhost:8085/oauth2callback
 */

import fs      from 'fs';
import path    from 'path';
import http    from 'http';
import process from 'process';
import { fileURLToPath } from 'url';
import { google } from 'googleapis';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SCHEMA_VERSION             = '1';
const OAUTH_REDIRECT_PORT        = 8085;
const OAUTH_REDIRECT_PATH        = '/oauth2callback';
const OAUTH_REDIRECT_URI         = `http://localhost:${OAUTH_REDIRECT_PORT}${OAUTH_REDIRECT_PATH}`;
const OAUTH_SCOPES               = [
  'https://www.googleapis.com/auth/youtube.upload',
  'https://www.googleapis.com/auth/youtube.readonly',
];
const YOUTUBE_CATEGORY_EDUCATION = '27';
const RESULT_FILENAME            = 'youtube-upload-result.json';

// ── CLI ───────────────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const args = {
    manifest:          null,
    clientSecret:      null,
    token:             null,
    expectedChannelId: process.env.YOUTUBE_EXPECTED_CHANNEL_ID || null,
    force:             false,
    dryRun:            false,
    scheduled:         false,
    scheduleStartDate: null,
    scheduleSlots:     ['13:00', '19:00', '22:00'],
    timezone:          'Europe/Istanbul',
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if      (arg === '--manifest'             && argv[i + 1]) args.manifest          = argv[++i];
    else if (arg === '--client-secret'        && argv[i + 1]) args.clientSecret      = argv[++i];
    else if (arg === '--token'                && argv[i + 1]) args.token             = argv[++i];
    else if (arg === '--expected-channel-id'  && argv[i + 1]) args.expectedChannelId = argv[++i];
    else if (arg === '--schedule-start-date'  && argv[i + 1]) args.scheduleStartDate = argv[++i];
    else if (arg === '--schedule-slots'       && argv[i + 1]) args.scheduleSlots     = argv[++i].split(',').map((s) => s.trim());
    else if (arg === '--timezone'             && argv[i + 1]) args.timezone          = argv[++i];
    else if (arg === '--force')                                args.force             = true;
    else if (arg === '--dry-run')                              args.dryRun            = true;
    else if (arg === '--scheduled')                            args.scheduled         = true;
    else {
      fail(`Unknown or incomplete option: ${arg}`);
    }
  }

  return args;
}

// ── Logging ───────────────────────────────────────────────────────────────────

function fail(message) {
  console.error(`[FAIL] ${message}`);
  process.exit(1);
}

function ok(message)   { console.log(`[OK] ${message}`); }
function warn(message) { console.log(`[WARN] ${message}`); }
function info(message) { console.log(`[INFO] ${message}`); }
function skip(message) { console.log(`[SKIP] ${message}`); }
function plan(message) { console.log(`[PLAN] ${message}`); }

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

// ── Safety gate ───────────────────────────────────────────────────────────────

function assertRealUploadEnabled() {
  if (process.env.YOUTUBE_REAL_UPLOAD !== '1') {
    fail('Refusing real YouTube upload. Set YOUTUBE_REAL_UPLOAD=1 to continue.');
  }
}

// ── Path helpers ──────────────────────────────────────────────────────────────

function resolveFromCwd(inputPath) {
  if (path.isAbsolute(inputPath)) return inputPath;
  return path.resolve(process.cwd(), inputPath);
}

function readJson(filePath, label) {
  if (!fs.existsSync(filePath)) fail(`${label} not found: ${filePath}`);
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (err) {
    fail(`${label} JSON parse failed: ${err.message}`);
  }
}

function tryReadJson(filePath) {
  if (!fs.existsSync(filePath)) return null;
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return null;
  }
}

// ── Idempotency: load already-uploaded video ids ──────────────────────────────

/**
 * Read youtube-upload-result.json if present.
 * Returns a Map<videoId, resultEntry> of previously uploaded videos.
 * Handles both the single-upload format (video: {...}) and the batch format
 * (videos: [...]) so the batch script can pick up after upload-youtube-one.mjs.
 */
function loadPreviousResults(resultPath) {
  const uploaded = new Map();
  const raw = tryReadJson(resultPath);
  if (!raw) return uploaded;

  // Batch format: videos array
  if (Array.isArray(raw.videos)) {
    for (const entry of raw.videos) {
      if (entry.id && entry.status === 'uploaded' && entry.youtube_video_id) {
        uploaded.set(entry.id, entry);
      }
    }
    return uploaded;
  }

  // Single-upload format (upload-youtube-one.mjs): video singular
  if (raw.video && raw.video.id && raw.video.youtube?.status === 'uploaded' && raw.video.youtube?.videoId) {
    uploaded.set(raw.video.id, {
      id:                       raw.video.id,
      title:                    raw.video.title     || '',
      path:                     raw.video.path      || '',
      status:                   'uploaded',
      youtube_video_id:         raw.video.youtube.videoId,
      youtube_url:              raw.video.youtube.url          || `https://www.youtube.com/watch?v=${raw.video.youtube.videoId}`,
      privacy_status:           raw.video.youtube.privacyStatus || 'private',
      authenticated_channel_id: '',
      authenticated_channel_title: '',
      uploaded_at:              raw.generated_at    || '',
    });
  }

  return uploaded;
}

// ── Result writer (called after every upload) ─────────────────────────────────

function buildResultFile(manifest, manifestPath, channel, videoResults) {
  const uploaded = videoResults.filter((r) => r.status === 'uploaded').length;
  const skipped  = videoResults.filter((r) => r.status === 'skipped').length;
  const failed   = videoResults.filter((r) => r.status === 'failed').length;

  return {
    schema_version:               SCHEMA_VERSION,
    generated_at:                 new Date().toISOString(),
    mode:                         'youtube_upload_batch',
    slug:                         manifest.slug,
    run_id:                       manifest.run_id,
    manifest_path:                manifestPath,
    authenticated_channel_id:     channel?.id            || '',
    authenticated_channel_title:  channel?.snippet?.title || '',
    summary: {
      total:    videoResults.length,
      uploaded,
      skipped,
      failed,
    },
    videos: videoResults,
  };
}

function writeResultFile(resultPath, manifest, manifestPath, channel, videoResults) {
  const result = buildResultFile(manifest, manifestPath, channel, videoResults);
  fs.writeFileSync(resultPath, JSON.stringify(result, null, 2) + '\n', 'utf8');
  return result;
}

// ── OAuth (same as upload-youtube-one.mjs) ────────────────────────────────────

function loadClientSecret(clientSecretPath) {
  const raw = readJson(clientSecretPath, 'client_secret.json');
  const creds = raw.installed || raw.web;
  if (!creds) {
    fail('client_secret.json does not contain an "installed" or "web" key. Download a Desktop App credential from Google Cloud Console.');
  }
  if (!creds.client_id || !creds.client_secret) {
    fail('client_secret.json is missing client_id or client_secret');
  }
  return creds;
}

function saveToken(tokenPath, tokens) {
  const dir = path.dirname(tokenPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(tokenPath, JSON.stringify(tokens, null, 2) + '\n', 'utf8');
}

function waitForOAuthCode() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const url = new URL(req.url, `http://localhost:${OAUTH_REDIRECT_PORT}`);
      if (url.pathname !== OAUTH_REDIRECT_PATH) { res.writeHead(404); res.end('Not found'); return; }

      const code  = url.searchParams.get('code');
      const error = url.searchParams.get('error');

      if (error) {
        res.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`<html><body><h2>OAuth error: ${error}</h2><p>You can close this tab.</p></body></html>`);
        server.close();
        reject(new Error(`OAuth authorization denied: ${error}`));
        return;
      }
      if (!code) {
        res.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<html><body><h2>No code received.</h2><p>You can close this tab.</p></body></html>');
        server.close();
        reject(new Error('OAuth redirect received no code'));
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<html><body><h2>Authorized. You can close this tab.</h2></body></html>');
      server.close();
      resolve(code);
    });

    server.on('error', (err) => reject(new Error(`OAuth local server error: ${err.message}`)));
    server.listen(OAUTH_REDIRECT_PORT, 'localhost', () => {
      info(`Listening for OAuth redirect on http://localhost:${OAUTH_REDIRECT_PORT}${OAUTH_REDIRECT_PATH}`);
    });
  });
}

async function buildOAuth2Client(creds, tokenPath) {
  const oauth2Client = new google.auth.OAuth2(creds.client_id, creds.client_secret, OAUTH_REDIRECT_URI);

  if (fs.existsSync(tokenPath)) {
    const savedToken = readJson(tokenPath, 'token.json');
    oauth2Client.setCredentials(savedToken);

    const expiry = savedToken.expiry_date;
    if (expiry && expiry - Date.now() < 5 * 60 * 1000) {
      info('Token is near expiry, refreshing...');
      try {
        const { credentials } = await oauth2Client.refreshAccessToken();
        oauth2Client.setCredentials(credentials);
        saveToken(tokenPath, credentials);
        info('Token refreshed and saved.');
      } catch (err) {
        fail(`Token refresh failed: ${err.message}\nDelete ${tokenPath} and re-run to start a new OAuth flow.`);
      }
    }

    ok('oauth_ready=true');
    return oauth2Client;
  }

  info('No token found. Starting OAuth authorization flow...');
  info(`OAuth redirect URI: ${OAUTH_REDIRECT_URI}`);
  info('Make sure this URI is registered in your Google Cloud Console OAuth client.');
  info('');

  const authUrl = oauth2Client.generateAuthUrl({ access_type: 'offline', scope: OAUTH_SCOPES, prompt: 'consent' });
  info('Opening authorization URL:');
  info(authUrl);

  try {
    const { execSync } = await import('child_process');
    const openCmd = process.platform === 'win32'
      ? `start "" "${authUrl}"`
      : process.platform === 'darwin'
        ? `open "${authUrl}"`
        : `xdg-open "${authUrl}" 2>/dev/null || true`;
    execSync(openCmd, { stdio: 'ignore' });
    info('Browser opened (or try opening the URL above manually).');
  } catch {
    info('Could not open browser automatically. Please open the URL above manually.');
  }

  info('Waiting for you to authorize in the browser...');

  let code;
  try   { code = await waitForOAuthCode(); }
  catch (err) { fail(`OAuth flow failed: ${err.message}`); }

  let tokens;
  try   { const { tokens: exchanged } = await oauth2Client.getToken(code); tokens = exchanged; }
  catch (err) { fail(`Failed to exchange OAuth code for tokens: ${err.message}`); }

  oauth2Client.setCredentials(tokens);
  saveToken(tokenPath, tokens);
  info(`Token saved to: ${tokenPath}`);
  ok('oauth_ready=true');

  return oauth2Client;
}

// ── Channel check (same as upload-youtube-one.mjs) ────────────────────────────

async function checkChannel(oauth2Client, expectedChannelId) {
  const youtube = google.youtube({ version: 'v3', auth: oauth2Client });

  let response;
  try {
    response = await youtube.channels.list({ part: ['snippet'], mine: true });
  } catch (err) {
    const detail = err?.errors?.[0]?.message || err?.message || String(err);
    const isScope = /insufficient.*scope|forbidden|403/i.test(detail);
    if (isScope) {
      console.error('[FAIL] Token does not include required channel-read scope.');
      console.error('       Delete .secrets/youtube/token.json and re-authorize.');
      console.error(`       (API error: ${detail})`);
      process.exit(1);
    }
    fail(`channels.list API call failed: ${detail}`);
  }

  const channels = response.data.items || [];
  ok(`authenticated_channel_count=${channels.length}`);

  if (channels.length === 0) {
    fail('channels.list returned no channels. The token may belong to a Google account with no YouTube channel.');
  }

  for (const ch of channels) {
    ok(`authenticated_channel_title=${ch.snippet?.title || '(no title)'}`);
    ok(`authenticated_channel_id=${ch.id || '(no id)'}`);
  }

  if (isNonEmptyString(expectedChannelId)) {
    const match = channels.find((ch) => ch.id === expectedChannelId);
    if (!match) {
      const actualId    = channels[0]?.id             || '(unknown)';
      const actualTitle = channels[0]?.snippet?.title || '(unknown)';
      console.error('[FAIL] Authenticated YouTube channel mismatch.');
      console.error(`       expected: ${expectedChannelId}`);
      console.error(`       actual:   ${actualId}`);
      console.error(`       title:    ${actualTitle}`);
      console.error('       Delete/rename the token file, revoke app access, and authorize the correct channel.');
      process.exit(1);
    }
    ok(`channel_match=true (${match.snippet?.title || match.id})`);
  }

  return channels[0];
}

// ── Schedule helpers ──────────────────────────────────────────────────────────

/**
 * Convert a local date+time in the given IANA timezone to a UTC Date.
 * Uses only Node.js built-in Intl APIs — no external dependencies.
 *
 * Strategy: temporarily treat the local wall-clock time as if it were UTC,
 * ask Intl what that UTC moment looks like in the target timezone, measure
 * the offset, then subtract it to find the real UTC instant.
 */
function localToUTC(dateStr, timeStr, timezone) {
  const assumed = new Date(`${dateStr}T${timeStr}:00.000Z`);
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone:  timezone,
    year:      'numeric',
    month:     '2-digit',
    day:       '2-digit',
    hour:      '2-digit',
    minute:    '2-digit',
    second:    '2-digit',
    hour12:    false,
  }).formatToParts(assumed);
  const p = {};
  for (const part of parts) p[part.type] = part.value;
  const localAsUTC = new Date(`${p.year}-${p.month}-${p.day}T${p.hour}:${p.minute}:${p.second}.000Z`);
  const offsetMs   = localAsUTC.getTime() - assumed.getTime();
  return new Date(assumed.getTime() - offsetMs);
}

function addDays(dateStr, days) {
  const d = new Date(`${dateStr}T12:00:00.000Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

/**
 * Build an ordered list of `count` ISO publish timestamps by cycling through
 * `slots` (e.g. ['13:00','19:00','22:00']) across calendar days starting at
 * `startDateStr`, skipping any slot within 60 minutes of now.
 *
 * `startSlotIndex` controls which slot to begin with on the first day (0 = first
 * slot as usual). When resuming from a cursor, pass the index *after* the last
 * known slot so the same day continues without repeating already-used slots.
 */
function buildSchedule(startDateStr, slots, timezone, count, startSlotIndex = 0) {
  const schedule  = [];
  const BUFFER_MS = 60 * 60 * 1000;
  const now       = Date.now();
  let dayOffset   = 0;

  while (schedule.length < count) {
    if (dayOffset > 365) fail('Cannot find enough valid schedule slots within 1 year. Check --schedule-start-date.');
    const dateStr   = addDays(startDateStr, dayOffset);
    const slotStart = dayOffset === 0 ? startSlotIndex : 0;
    for (let si = slotStart; si < slots.length; si++) {
      if (schedule.length >= count) break;
      const slotStr = slots[si];
      const utcDate = localToUTC(dateStr, slotStr, timezone);
      if (utcDate.getTime() - now >= BUFFER_MS) {
        schedule.push({
          publishAt:      utcDate.toISOString(),
          publishAtLocal: `${dateStr}T${slotStr}:00`,
          scheduleSlot:   slotStr,
        });
      }
    }
    dayOffset++;
  }

  return schedule;
}

/**
 * Scan the existing result file for uploaded entries that carry schedule data
 * (publishAtLocal). Returns the entry with the latest local publish time so the
 * next pending upload can continue from the following slot.
 *
 * Returns { id, slotDate, slotStr, slotIdx } or null if no scheduled entry found.
 */
function detectScheduleCursor(resultPath, slots) {
  const raw = tryReadJson(resultPath);
  if (!raw) return null;

  const candidates = [];
  if (Array.isArray(raw.videos)) {
    for (const v of raw.videos) {
      if (v.youtube_video_id && v.publishAtLocal) candidates.push(v);
    }
  }
  if (candidates.length === 0) return null;

  // ISO date-time strings sort lexicographically — no Date parsing needed.
  let latest = candidates[0];
  for (const c of candidates) {
    if (c.publishAtLocal > latest.publishAtLocal) latest = c;
  }

  const slotStr  = latest.scheduleSlot || latest.publishAtLocal.slice(11, 16); // HH:MM
  const slotDate = latest.publishAtLocal.slice(0, 10);                          // YYYY-MM-DD
  const slotIdx  = slots.indexOf(slotStr);

  return { id: latest.id, slotDate, slotStr, slotIdx };
}

// ── Single video upload ───────────────────────────────────────────────────────

async function uploadOneVideo(oauth2Client, video, index, total, publishAt) {
  const youtube = google.youtube({ version: 'v3', auth: oauth2Client });

  const tags = Array.isArray(video.youtube.tags) && video.youtube.tags.length > 0
    ? video.youtube.tags
    : (Array.isArray(video.hashtags) ? video.hashtags.map((h) => h.replace(/^#/, '')).filter(Boolean) : []);

  const categoryId = isNonEmptyString(video.youtube.categoryId)
    ? video.youtube.categoryId
    : YOUTUBE_CATEGORY_EDUCATION;

  const fileSize    = fs.statSync(video.path).size;
  const fileSizeMB  = (fileSize / 1024 / 1024).toFixed(1);
  info(`[${index}/${total}] Uploading: ${path.basename(video.path)} (${fileSizeMB} MB)`);
  if (publishAt) info(`[${index}/${total}] publishAt: ${publishAt}`);

  let lastLoggedPercent = -1;

  const statusBlock = {
    privacyStatus:           'private',
    selfDeclaredMadeForKids: false,
  };
  if (publishAt) statusBlock.publishAt = publishAt;

  const response = await youtube.videos.insert(
    {
      part: ['snippet', 'status'],
      requestBody: {
        snippet: {
          title:           video.title,
          description:     video.description,
          tags,
          categoryId,
          defaultLanguage: video.youtube.defaultLanguage || 'tr',
        },
        status: statusBlock,
      },
      media: {
        mimeType: 'video/mp4',
        body:     fs.createReadStream(video.path),
      },
    },
    {
      onUploadProgress: (evt) => {
        if (!fileSize) return;
        const pct = Math.floor((evt.bytesRead / fileSize) * 100);
        if (pct !== lastLoggedPercent && pct % 10 === 0) {
          lastLoggedPercent = pct;
          process.stdout.write(`\r[INFO] Upload progress: ${pct}%   `);
        }
      },
    }
  );

  process.stdout.write('\n');
  return response.data;
}

// ── Entry point ───────────────────────────────────────────────────────────────

const args = parseArgs(process.argv.slice(2));

// Dry-run does not require YOUTUBE_REAL_UPLOAD=1, but real upload does.
if (!args.dryRun) {
  assertRealUploadEnabled();
}

if (!args.manifest)     fail('Missing required --manifest <path>');
if (!args.clientSecret) fail('Missing required --client-secret <path>');
if (!args.token)        fail('Missing required --token <path>');

if (args.scheduled) {
  // scheduleStartDate is optional when a cursor can be detected from the result file;
  // if provided, validate its format here.
  if (args.scheduleStartDate && !/^\d{4}-\d{2}-\d{2}$/.test(args.scheduleStartDate)) {
    fail('--schedule-start-date must be in YYYY-MM-DD format');
  }
  for (const slot of args.scheduleSlots) {
    if (!/^\d{2}:\d{2}$/.test(slot)) {
      fail(`Invalid slot format "${slot}" — expected HH:MM (e.g. 13:00)`);
    }
  }
  try { new Intl.DateTimeFormat('en', { timeZone: args.timezone }).format(new Date()); }
  catch { fail(`Invalid timezone: "${args.timezone}"`); }
}

const manifestPath     = resolveFromCwd(args.manifest);
const clientSecretPath = resolveFromCwd(args.clientSecret);
const tokenPath        = resolveFromCwd(args.token);
const resultPath       = path.join(path.dirname(manifestPath), RESULT_FILENAME);

const mode = args.dryRun ? 'DRY RUN' : 'UPLOAD';
console.log(`YouTube Batch Upload (${mode})`);
console.log('');

// ── Load and validate manifest ────────────────────────────────────────────────

const manifest = readJson(manifestPath, 'publish-manifest.json');

if (!Array.isArray(manifest.videos) || manifest.videos.length === 0) {
  fail('manifest.videos is missing or empty');
}
ok(`manifest_found=true`);
ok(`videos_count=${manifest.videos.length}`);

// Validate all video fields and file existence before touching the API
for (const video of manifest.videos) {
  if (!isNonEmptyString(video.id))          fail(`A video entry is missing "id"`);
  if (!isNonEmptyString(video.path))        fail(`${video.id}: path is missing`);
  if (!isNonEmptyString(video.title))       fail(`${video.id}: title is missing`);
  if (!isNonEmptyString(video.description)) fail(`${video.id}: description is missing`);
  if (!video.youtube || typeof video.youtube !== 'object') {
    fail(`${video.id}: youtube block is missing`);
  }
  if (!fs.existsSync(video.path)) {
    fail(`${video.id}: file not found on disk: ${video.path}`);
  }
}
ok('all_files_exist=true');

// ── Load previous results for idempotency ─────────────────────────────────────

const previousUploads = loadPreviousResults(resultPath);
if (previousUploads.size > 0) {
  info(`Found ${previousUploads.size} previously uploaded video(s) in ${RESULT_FILENAME}`);
}

// ── OAuth + channel check ─────────────────────────────────────────────────────

const creds        = loadClientSecret(clientSecretPath);
const oauth2Client = await buildOAuth2Client(creds, tokenPath);
const channel      = await checkChannel(oauth2Client, args.expectedChannelId);

const channelId    = channel?.id             || '';
const channelTitle = channel?.snippet?.title || '';

// ── Build upload plan ─────────────────────────────────────────────────────────

console.log('');
info('Upload plan:');

const toUpload = [];
const initialResults = [];

for (const video of manifest.videos) {
  const prev = previousUploads.get(video.id);

  if (prev) {
    skip(`${video.id} already uploaded  youtube_video_id=${prev.youtube_video_id}`);
    initialResults.push({ ...prev, status: 'skipped' });
  } else {
    info(`  → ${video.id} pending upload: ${video.title}`);
    toUpload.push(video);
    initialResults.push({
      id:                       video.id,
      title:                    video.title,
      path:                     video.path,
      status:                   'pending',
      youtube_video_id:         null,
      youtube_url:              null,
      privacy_status:           'private',
      authenticated_channel_id: channelId,
      authenticated_channel_title: channelTitle,
      uploaded_at:              null,
    });
  }
}

// ── Schedule assignment (pending videos only) ─────────────────────────────────

if (args.scheduled && toUpload.length > 0) {
  let startDateStr   = args.scheduleStartDate;
  let startSlotIndex = 0;

  const cursor = detectScheduleCursor(resultPath, args.scheduleSlots);
  if (cursor) {
    info(`schedule_cursor latest=${cursor.id} local=${cursor.slotDate}T${cursor.slotStr}:00 slot=${cursor.slotStr}`);
    if (cursor.slotIdx < 0) {
      warn(`Cursor slot "${cursor.slotStr}" not found in schedule slots [${args.scheduleSlots.join(',')}]. Falling back to --schedule-start-date.`);
      if (!startDateStr) fail(`--scheduled requires --schedule-start-date when cursor slot cannot be matched against [${args.scheduleSlots.join(',')}]`);
    } else if (cursor.slotIdx === args.scheduleSlots.length - 1) {
      // Last slot → roll over to next day, first slot
      startDateStr   = addDays(cursor.slotDate, 1);
      startSlotIndex = 0;
    } else {
      // Same day, next slot
      startDateStr   = cursor.slotDate;
      startSlotIndex = cursor.slotIdx + 1;
    }
  } else if (!startDateStr) {
    fail('--scheduled requires --schedule-start-date YYYY-MM-DD (no existing schedule cursor found in youtube-upload-result.json)');
  }

  info(`Building schedule: start=${startDateStr}[slot_index=${startSlotIndex}]  slots=${args.scheduleSlots.join(',')}  tz=${args.timezone}`);
  const schedule = buildSchedule(startDateStr, args.scheduleSlots, args.timezone, toUpload.length, startSlotIndex);
  let schedIdx = 0;
  for (const r of initialResults) {
    if (r.status === 'pending') {
      const s            = schedule[schedIdx++];
      r.scheduled        = true;
      r.publishAt        = s.publishAt;
      r.publishAtLocal   = s.publishAtLocal;
      r.scheduleTimezone = args.timezone;
      r.scheduleSlot     = s.scheduleSlot;
    }
  }
}

console.log('');
info(`To upload: ${toUpload.length}  |  Already uploaded (skip): ${previousUploads.size}`);

if (args.scheduled && toUpload.length > 0) {
  console.log('');
  for (const r of initialResults) {
    if (r.status === 'pending') {
      plan(`${r.id}  publishAtLocal=${r.publishAtLocal}  slot=${r.scheduleSlot}`);
    }
  }
}

if (args.dryRun) {
  console.log('');
  ok(`dry_run=true — no videos.insert calls will be made`);
  console.log('Done.');
  process.exit(0);
}

if (toUpload.length === 0) {
  console.log('');
  ok('All videos are already uploaded. Nothing to do.');
  console.log('Done.');
  process.exit(0);
}

// ── Guard: result file overwrite ──────────────────────────────────────────────
// Only block if result file exists AND has a different mode (i.e. not our own
// batch format) — we always overwrite our own batch result after each upload.
if (fs.existsSync(resultPath) && !args.force) {
  const existing = tryReadJson(resultPath);
  if (existing && existing.mode !== 'youtube_upload_batch') {
    fail(
      `${RESULT_FILENAME} exists from a previous run in a different mode ("${existing.mode}").\n` +
      `Use --force to allow the batch script to take over this result file.`
    );
  }
}

// ── Run uploads ───────────────────────────────────────────────────────────────

// Working copy of results — updated after each upload and flushed to disk
const videoResults = [...initialResults];

const total = toUpload.length;
console.log('');

for (let i = 0; i < toUpload.length; i++) {
  const video       = toUpload[i];
  const resultIndex = videoResults.findIndex((r) => r.id === video.id);

  warn(`This may create a duplicate upload if ${video.id} was already uploaded outside this script.`);
  ok(`upload_started  ${video.id} [${i + 1}/${total}]`);

  const prevResult  = videoResults[resultIndex];
  const publishAt   = prevResult.publishAt || null;

  let uploadData;
  try {
    uploadData = await uploadOneVideo(oauth2Client, video, i + 1, total, publishAt);
  } catch (err) {
    const detail = err?.errors?.[0]?.message || err?.message || String(err);

    // Record failure and flush before exiting
    videoResults[resultIndex] = {
      id:                          video.id,
      title:                       video.title,
      path:                        video.path,
      status:                      'failed',
      error:                       detail,
      youtube_video_id:            null,
      youtube_url:                 null,
      privacy_status:              'private',
      scheduled:                   prevResult.scheduled     || false,
      publishAt:                   prevResult.publishAt     || null,
      publishAtLocal:              prevResult.publishAtLocal   || null,
      scheduleTimezone:            prevResult.scheduleTimezone || null,
      scheduleSlot:                prevResult.scheduleSlot     || null,
      authenticated_channel_id:    channelId,
      authenticated_channel_title: channelTitle,
      failed_at:                   new Date().toISOString(),
    };
    writeResultFile(resultPath, manifest, manifestPath, channel, videoResults);
    console.error(`[FAIL] ${video.id} upload failed: ${detail}`);
    console.error(`[FAIL] Stopping batch. Fix the error and re-run — completed uploads will be skipped.`);
    process.exit(1);
  }

  const ytVideoId = uploadData.id;
  videoResults[resultIndex] = {
    id:                          video.id,
    title:                       video.title,
    path:                        video.path,
    status:                      'uploaded',
    youtube_video_id:            ytVideoId,
    youtube_url:                 `https://www.youtube.com/watch?v=${ytVideoId}`,
    privacy_status:              'private',
    scheduled:                   prevResult.scheduled     || false,
    publishAt:                   prevResult.publishAt     || null,
    publishAtLocal:              prevResult.publishAtLocal   || null,
    scheduleTimezone:            prevResult.scheduleTimezone || null,
    scheduleSlot:                prevResult.scheduleSlot     || null,
    authenticated_channel_id:    channelId,
    authenticated_channel_title: channelTitle,
    uploaded_at:                 new Date().toISOString(),
  };

  // Flush result to disk immediately — safe to interrupt after this point
  writeResultFile(resultPath, manifest, manifestPath, channel, videoResults);

  ok(`upload_completed  ${video.id}  youtube_video_id=${ytVideoId}`);
  ok(`url=https://www.youtube.com/watch?v=${ytVideoId}`);
  console.log('');
}

// ── Final summary ─────────────────────────────────────────────────────────────

const finalUploaded = videoResults.filter((r) => r.status === 'uploaded').length;
const finalSkipped  = videoResults.filter((r) => r.status === 'skipped').length;

ok(`batch_complete  uploaded=${finalUploaded}  skipped=${finalSkipped}  failed=0`);
ok(`${RESULT_FILENAME} written`);
console.log(`Target: ${resultPath}`);
console.log('');
console.log('Done.');
