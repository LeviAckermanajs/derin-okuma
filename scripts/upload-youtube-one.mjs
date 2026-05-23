#!/usr/bin/env node
/**
 * upload-youtube-one.mjs
 *
 * Upload a single video from publish-manifest.json to YouTube as PRIVATE.
 * Requires YOUTUBE_REAL_UPLOAD=1 to proceed. Without it, exits immediately.
 *
 * Usage (upload):
 *   YOUTUBE_REAL_UPLOAD=1 node scripts/upload-youtube-one.mjs \
 *     --manifest "/path/to/publish-manifest.json" \
 *     --video-id short-001 \
 *     --client-secret ".secrets/youtube/client_secret.json" \
 *     --token ".secrets/youtube/token.json" \
 *     --expected-channel-id "UCxxxxxxxxxxxxxxxxxxxxxxxxx" \
 *     --force
 *
 * Usage (check which channel the token points to, no upload):
 *   node scripts/upload-youtube-one.mjs \
 *     --check-channel-only \
 *     --client-secret ".secrets/youtube/client_secret.json" \
 *     --token ".secrets/youtube/token.json"
 *
 * Channel ID can also be set via env:
 *   YOUTUBE_EXPECTED_CHANNEL_ID=UCxxxxxxxxxxxxxxxxxxxxxxxxx
 *
 * OAuth redirect URI to register in Google Cloud Console:
 *   http://localhost:8085/oauth2callback
 */

import fs   from 'fs';
import path from 'path';
import http from 'http';
import process from 'process';
import { fileURLToPath } from 'url';
import { google } from 'googleapis';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const SCHEMA_VERSION        = '1';
const OAUTH_REDIRECT_PORT   = 8085;
const OAUTH_REDIRECT_PATH   = '/oauth2callback';
const OAUTH_REDIRECT_URI    = `http://localhost:${OAUTH_REDIRECT_PORT}${OAUTH_REDIRECT_PATH}`;
const OAUTH_SCOPES          = [
  'https://www.googleapis.com/auth/youtube.upload',
  'https://www.googleapis.com/auth/youtube.readonly',
];
const YOUTUBE_CATEGORY_EDUCATION = '27';

// ── CLI ───────────────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const args = {
    manifest:          null,
    videoId:           null,
    clientSecret:      null,
    token:             null,
    expectedChannelId: process.env.YOUTUBE_EXPECTED_CHANNEL_ID || null,
    checkChannelOnly:  false,
    force:             false,
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if      (arg === '--manifest'            && argv[i + 1]) args.manifest          = argv[++i];
    else if (arg === '--video-id'            && argv[i + 1]) args.videoId           = argv[++i];
    else if (arg === '--client-secret'       && argv[i + 1]) args.clientSecret      = argv[++i];
    else if (arg === '--token'               && argv[i + 1]) args.token             = argv[++i];
    else if (arg === '--expected-channel-id' && argv[i + 1]) args.expectedChannelId = argv[++i];
    else if (arg === '--check-channel-only')                  args.checkChannelOnly  = true;
    else if (arg === '--force')                               args.force             = true;
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

function ok(message) {
  console.log(`[OK] ${message}`);
}

function warn(message) {
  console.log(`[WARN] ${message}`);
}

function info(message) {
  console.log(`[INFO] ${message}`);
}

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

// ── Manifest validation ───────────────────────────────────────────────────────

function loadAndValidateManifest(manifestPath, videoId) {
  const manifest = readJson(manifestPath, 'publish-manifest.json');

  if (!Array.isArray(manifest.videos) || manifest.videos.length === 0) {
    fail('manifest.videos is missing or empty');
  }

  const video = manifest.videos.find((v) => v.id === videoId);
  if (!video) {
    const ids = manifest.videos.map((v) => v.id).join(', ');
    fail(`video id "${videoId}" not found in manifest. Available: ${ids}`);
  }

  if (!isNonEmptyString(video.path))  fail(`${videoId}: path is missing`);
  if (!isNonEmptyString(video.title)) fail(`${videoId}: title is missing`);
  if (!isNonEmptyString(video.description)) fail(`${videoId}: description is missing`);
  if (!video.youtube || typeof video.youtube !== 'object') {
    fail(`${videoId}: youtube block is missing`);
  }

  if (!fs.existsSync(video.path)) {
    fail(`${videoId}: file not found on disk: ${video.path}`);
  }

  ok('manifest_found=true');
  ok(`selected_video=${videoId}`);
  ok('file_exists=true');

  return { manifest, video };
}

// ── OAuth ─────────────────────────────────────────────────────────────────────

function loadClientSecret(clientSecretPath) {
  const raw = readJson(clientSecretPath, 'client_secret.json');
  // Google Cloud Console Desktop App format
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

/**
 * Start a local HTTP server, wait for the OAuth redirect, extract the code.
 * Returns the authorization code.
 */
function waitForOAuthCode() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const url = new URL(req.url, `http://localhost:${OAUTH_REDIRECT_PORT}`);
      if (url.pathname !== OAUTH_REDIRECT_PATH) {
        res.writeHead(404);
        res.end('Not found');
        return;
      }

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

    server.on('error', (err) => {
      reject(new Error(`OAuth local server error: ${err.message}`));
    });

    server.listen(OAUTH_REDIRECT_PORT, 'localhost', () => {
      info(`Listening for OAuth redirect on http://localhost:${OAUTH_REDIRECT_PORT}${OAUTH_REDIRECT_PATH}`);
    });
  });
}

async function buildOAuth2Client(creds, tokenPath) {
  const oauth2Client = new google.auth.OAuth2(
    creds.client_id,
    creds.client_secret,
    OAUTH_REDIRECT_URI
  );

  // Try to load existing token
  if (fs.existsSync(tokenPath)) {
    const savedToken = readJson(tokenPath, 'token.json');
    oauth2Client.setCredentials(savedToken);

    // Refresh if expired or close to expiry
    const expiry = savedToken.expiry_date;
    const nowMs   = Date.now();
    if (expiry && expiry - nowMs < 5 * 60 * 1000) {
      info('Token is near expiry, refreshing...');
      try {
        const { credentials } = await oauth2Client.refreshAccessToken();
        oauth2Client.setCredentials(credentials);
        saveToken(tokenPath, credentials);
        info('Token refreshed and saved.');
      } catch (err) {
        fail(
          `Token refresh failed: ${err.message}\n` +
          `Delete ${tokenPath} and re-run to start a new OAuth flow.`
        );
      }
    }

    ok('oauth_ready=true');
    return oauth2Client;
  }

  // No token — start OAuth flow
  info('No token found. Starting OAuth authorization flow...');
  info(`OAuth redirect URI: ${OAUTH_REDIRECT_URI}`);
  info('Make sure this URI is registered in your Google Cloud Console OAuth client.');
  info('');

  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: OAUTH_SCOPES,
    prompt: 'consent',
  });

  info('Opening authorization URL:');
  info(authUrl);

  // Try to open browser automatically; if it fails, user opens manually
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
  try {
    code = await waitForOAuthCode();
  } catch (err) {
    fail(`OAuth flow failed: ${err.message}`);
  }

  let tokens;
  try {
    const { tokens: exchanged } = await oauth2Client.getToken(code);
    tokens = exchanged;
  } catch (err) {
    fail(`Failed to exchange OAuth code for tokens: ${err.message}`);
  }

  oauth2Client.setCredentials(tokens);
  saveToken(tokenPath, tokens);
  info(`Token saved to: ${tokenPath}`);
  ok('oauth_ready=true');

  return oauth2Client;
}

// ── Channel check ─────────────────────────────────────────────────────────────

/**
 * Call channels.list(mine: true), print every returned channel, and enforce
 * the expected channel ID when one is provided.
 * Returns the first channel in the response (the active channel for the token).
 */
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
    const chId    = ch.id || '(no id)';
    const chTitle = ch.snippet?.title || '(no title)';
    ok(`authenticated_channel_title=${chTitle}`);
    ok(`authenticated_channel_id=${chId}`);
  }

  if (isNonEmptyString(expectedChannelId)) {
    const match = channels.find((ch) => ch.id === expectedChannelId);
    if (!match) {
      const actualId    = channels[0]?.id            || '(unknown)';
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

// ── Upload ────────────────────────────────────────────────────────────────────

async function uploadVideo(oauth2Client, video) {
  const youtube = google.youtube({ version: 'v3', auth: oauth2Client });

  const tags = Array.isArray(video.youtube.tags) && video.youtube.tags.length > 0
    ? video.youtube.tags
    : (Array.isArray(video.hashtags)
        ? video.hashtags.map((h) => h.replace(/^#/, '')).filter(Boolean)
        : []);

  const categoryId = isNonEmptyString(video.youtube.categoryId)
    ? video.youtube.categoryId
    : YOUTUBE_CATEGORY_EDUCATION;

  const fileSize = fs.statSync(video.path).size;
  const fileSizeMB = (fileSize / 1024 / 1024).toFixed(1);
  info(`File: ${path.basename(video.path)} (${fileSizeMB} MB)`);

  warn('This may create a duplicate upload if the same video was already uploaded.');

  ok('upload_started');

  let lastLoggedPercent = -1;

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
        status: {
          privacyStatus:           'private',
          selfDeclaredMadeForKids: false,
        },
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

  // Ensure the progress line is cleared
  process.stdout.write('\n');

  return response.data;
}

// ── Result writer ─────────────────────────────────────────────────────────────

function writeUploadResult(manifestPath, manifest, video, uploadData, force) {
  const resultPath = path.join(path.dirname(manifestPath), 'youtube-upload-result.json');

  if (fs.existsSync(resultPath) && !force) {
    fail(
      `youtube-upload-result.json already exists: ${resultPath}\n` +
      `Use --force to overwrite.`
    );
  }

  const videoId = uploadData.id;
  const result = {
    schema_version: SCHEMA_VERSION,
    generated_at:  new Date().toISOString(),
    mode:          'youtube_upload_one',
    slug:          manifest.slug,
    run_id:        manifest.run_id,
    manifest_path: manifestPath,
    video: {
      id:    video.id,
      path:  video.path,
      title: video.title,
      youtube: {
        status:       'uploaded',
        videoId,
        url:          `https://www.youtube.com/watch?v=${videoId}`,
        privacyStatus: 'private',
        categoryId:   video.youtube.categoryId || YOUTUBE_CATEGORY_EDUCATION,
      },
    },
  };

  fs.writeFileSync(resultPath, JSON.stringify(result, null, 2) + '\n', 'utf8');

  ok(`upload_completed`);
  ok(`youtube_video_id=${videoId}`);
  ok('privacyStatus=private');
  ok('youtube-upload-result.json written');
  console.log(`Target: ${resultPath}`);

  return result;
}

// ── Entry point ───────────────────────────────────────────────────────────────

const args = parseArgs(process.argv.slice(2));

// --check-channel-only: authenticate and report the active channel, then exit.
// Does not require YOUTUBE_REAL_UPLOAD=1 (read-only API call, no upload).
if (args.checkChannelOnly) {
  if (!args.clientSecret) fail('--check-channel-only requires --client-secret <path>');
  if (!args.token)        fail('--check-channel-only requires --token <path>');

  const clientSecretPath = resolveFromCwd(args.clientSecret);
  const tokenPath        = resolveFromCwd(args.token);

  console.log('YouTube Channel Check');
  console.log('');

  const creds        = loadClientSecret(clientSecretPath);
  const oauth2Client = await buildOAuth2Client(creds, tokenPath);
  await checkChannel(oauth2Client, args.expectedChannelId);

  console.log('');
  console.log('Done.');
  process.exit(0);
}

// Upload path — safety gate required.
assertRealUploadEnabled();

if (!args.manifest)     fail('Missing required --manifest <path>');
if (!args.videoId)      fail('Missing required --video-id <id>');
if (!args.clientSecret) fail('Missing required --client-secret <path>');
if (!args.token)        fail('Missing required --token <path>');

const manifestPath     = resolveFromCwd(args.manifest);
const clientSecretPath = resolveFromCwd(args.clientSecret);
const tokenPath        = resolveFromCwd(args.token);

console.log(`YouTube Upload (one) — ${args.videoId}`);
console.log('');

// Load manifest and validate selected video
const { manifest, video } = loadAndValidateManifest(manifestPath, args.videoId);

// Load OAuth credentials and build client
const creds        = loadClientSecret(clientSecretPath);
const oauth2Client = await buildOAuth2Client(creds, tokenPath);

// Channel check — always runs before any upload
await checkChannel(oauth2Client, args.expectedChannelId);

// Upload
let uploadData;
try {
  uploadData = await uploadVideo(oauth2Client, video);
} catch (err) {
  const detail = err?.errors?.[0]?.message || err?.message || String(err);
  fail(`Upload failed: ${detail}`);
}

// Write result
writeUploadResult(manifestPath, manifest, video, uploadData, args.force);

console.log('');
console.log('Done.');
