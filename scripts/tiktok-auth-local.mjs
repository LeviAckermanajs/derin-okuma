#!/usr/bin/env node
// tiktok-auth-local.mjs — local OAuth callback server for TikTok Desktop PKCE flow

import { randomBytes, createHash } from 'crypto';
import http                        from 'http';
import { spawnSync }               from 'child_process';
import fs                          from 'fs';
import path                        from 'path';
import process                     from 'process';
import { fileURLToPath }           from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT      = path.resolve(__dirname, '..');

const TIKTOK_AUTH_BASE = 'https://www.tiktok.com/v2/auth/authorize/';
const TIKTOK_TOKEN_URL = 'https://open.tiktokapis.com/v2/oauth/token/';
const TIKTOK_SCOPE     = 'video.upload';
const LOCAL_PORT       = 3455;
const LOCAL_HOST       = '127.0.0.1';
const REDIRECT_URI     = `http://${LOCAL_HOST}:${LOCAL_PORT}/callback`;

const SECRETS_DIR     = path.join(ROOT, '.secrets', 'tiktok');
const CLIENT_JSON     = path.join(SECRETS_DIR, 'client.json');
const AUTH_STATE_FILE = path.join(SECRETS_DIR, 'auth-state.local.tiktok.json');
const TOKEN_FILE      = path.join(SECRETS_DIR, 'token.json');

// ── CLI ───────────────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const args = { open: false };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--open') args.open = true;
    else fail(`Unknown option: ${arg}`);
  }
  return args;
}

// ── Logging ───────────────────────────────────────────────────────────────────

function fail(message) { console.error(`[FAIL] ${message}`); process.exit(1); }
function ok(message)   { console.log(`[OK] ${message}`); }
function info(message) { console.log(`[INFO] ${message}`); }

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function maskSecret(value) {
  if (!isNonEmptyString(value) || value.length <= 4) return '***';
  return `***${value.slice(-4)}`;
}

function readJson(filePath, label) {
  if (!fs.existsSync(filePath)) fail(`${label} not found: ${filePath}`);
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (err) {
    fail(`${label} parse failed: ${err.message}`);
  }
}

// ── PKCE helpers (TikTok Desktop: hex SHA256) ─────────────────────────────────

const UNRESERVED = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';

function generateCodeVerifier(length = 64) {
  const bytes = randomBytes(length);
  return Array.from(bytes, b => UNRESERVED[b % UNRESERVED.length]).join('');
}

function generateCodeChallenge(verifier) {
  return createHash('sha256').update(verifier).digest('hex');
}

// ── Open URL in browser (best-effort) ────────────────────────────────────────

function openUrl(url) {
  if (process.platform === 'win32') {
    spawnSync('cmd', ['/c', 'start', '', url], { stdio: 'ignore' });
  } else if (process.platform === 'darwin') {
    spawnSync('open', [url], { stdio: 'ignore' });
  } else {
    const r = spawnSync('xdg-open', [url], { stdio: 'ignore' });
    if (r.status !== 0) spawnSync('wslview', [url], { stdio: 'ignore' });
  }
}

// ── Token exchange ────────────────────────────────────────────────────────────

async function exchangeToken(client, code, codeVerifier) {
  const body = new URLSearchParams({
    client_key:    client.client_key,
    client_secret: client.client_secret,
    code,
    grant_type:    'authorization_code',
    redirect_uri:  REDIRECT_URI,
    code_verifier: codeVerifier,
  });

  let response, json;
  try {
    response = await fetch(TIKTOK_TOKEN_URL, {
      method:  'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body:    body.toString(),
    });
    json = await response.json();
  } catch (err) {
    fail(`Token exchange network error: ${err.message}`);
  }

  if (!response.ok || json.error) {
    const detail = json.error_description || json.error || JSON.stringify(json);
    fail(`Token exchange failed (HTTP ${response.status}): ${detail}`);
  }

  return json;
}

// ── Main ──────────────────────────────────────────────────────────────────────

const args = parseArgs(process.argv.slice(2));

console.log('TikTok Local OAuth Server');
console.log('');

const client = readJson(CLIENT_JSON, 'client.json');
if (!isNonEmptyString(client.client_key))    fail('client.json missing client_key');
if (!isNonEmptyString(client.client_secret)) fail('client.json missing client_secret');
if (client.client_key === 'REPLACE_ME')      fail('client.json still has placeholder values.');

// Generate PKCE and state
const codeVerifier  = generateCodeVerifier();
const codeChallenge = generateCodeChallenge(codeVerifier);
const state         = randomBytes(16).toString('hex');

ok(`code_verifier_length=${codeVerifier.length}`);
ok('code_challenge_format=hex_sha256');
ok(`code_challenge_length=${codeChallenge.length}`);

// Persist auth state
fs.mkdirSync(SECRETS_DIR, { recursive: true });
const authState = {
  code_verifier:  codeVerifier,
  code_challenge: codeChallenge,
  state,
  redirect_uri:   REDIRECT_URI,
  created_at:     new Date().toISOString(),
};
fs.writeFileSync(AUTH_STATE_FILE, JSON.stringify(authState, null, 2) + '\n', 'utf8');

// Build authorization URL
const params = new URLSearchParams({
  client_key:            client.client_key,
  scope:                 TIKTOK_SCOPE,
  response_type:         'code',
  redirect_uri:          REDIRECT_URI,
  state,
  code_challenge:        codeChallenge,
  code_challenge_method: 'S256',
});
const authUrl = `${TIKTOK_AUTH_BASE}?${params.toString()}`;

info('');
info('Authorization URL:');
console.log('');
console.log(authUrl);
console.log('');
info(`Waiting for callback on http://${LOCAL_HOST}:${LOCAL_PORT}/callback`);
info('Open the URL above in your browser to authorize.');

if (args.open) {
  openUrl(authUrl);
  info('Browser open attempted.');
}

// Start local callback server
const server = http.createServer(async (req, res) => {
  const reqUrl = new URL(req.url, `http://${LOCAL_HOST}:${LOCAL_PORT}`);

  if (reqUrl.pathname !== '/callback') {
    res.writeHead(404);
    res.end('Not found');
    return;
  }

  const returnedState = reqUrl.searchParams.get('state');
  const returnedCode  = reqUrl.searchParams.get('code');
  const errorParam    = reqUrl.searchParams.get('error');

  if (errorParam) {
    const desc = reqUrl.searchParams.get('error_description') || '';
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end(`TikTok authorization error: ${errorParam} — ${desc}`);
    server.close();
    fail(`TikTok returned error: ${errorParam} — ${desc}`);
    return;
  }

  if (!returnedCode) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Missing code parameter in callback.');
    server.close();
    fail('Callback missing code parameter.');
    return;
  }

  if (returnedState !== state) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('State mismatch — possible CSRF. Aborting.');
    server.close();
    fail('State mismatch in callback — aborting for security.');
    return;
  }

  ok('state_validated=true');

  // Decode code if URL-encoded
  const code = returnedCode.includes('%') ? decodeURIComponent(returnedCode) : returnedCode;

  info('Exchanging authorization code for tokens…');

  let json;
  try {
    json = await exchangeToken(client, code, codeVerifier);
  } catch {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Token exchange failed. Check console for details.');
    server.close();
    return;
  }

  if (!isNonEmptyString(json.access_token))  { server.close(); fail('Response missing access_token'); }
  if (!isNonEmptyString(json.refresh_token)) { server.close(); fail('Response missing refresh_token'); }
  if (!isNonEmptyString(json.open_id))       { server.close(); fail('Response missing open_id'); }

  const expiresInSeconds = Number(json.expires_in)         || 86400;
  const refreshExpiresIn = Number(json.refresh_expires_in) || null;
  const expiresAt        = new Date(Date.now() + expiresInSeconds * 1000).toISOString();
  const refreshExpiresAt = refreshExpiresIn
    ? new Date(Date.now() + refreshExpiresIn * 1000).toISOString()
    : null;

  const token = {
    access_token:       json.access_token,
    refresh_token:      json.refresh_token,
    open_id:            json.open_id,
    scope:              json.scope      || '',
    token_type:         json.token_type || 'Bearer',
    expires_in:         expiresInSeconds,
    expires_at:         expiresAt,
    refresh_expires_in: refreshExpiresIn,
    refresh_expires_at: refreshExpiresAt,
    obtained_at:        new Date().toISOString(),
  };

  fs.writeFileSync(TOKEN_FILE, JSON.stringify(token, null, 2) + '\n', 'utf8');

  ok('token_saved=true');
  ok(`open_id=${maskSecret(token.open_id)}`);
  ok(`scope=${token.scope}`);
  console.log(`expires_at=${expiresAt}`);

  if (!token.scope.includes('video.upload')) {
    console.log('[WARN] video.upload scope is missing — check app permissions in TikTok Developer Console');
  } else {
    ok('scope_includes_video_upload=true');
  }

  if (fs.existsSync(AUTH_STATE_FILE)) {
    fs.unlinkSync(AUTH_STATE_FILE);
    ok('auth_state_cleaned_up=true');
  }

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<html><body><h2>Authorization successful.</h2><p>You may close this tab.</p></body></html>');

  server.close();
  console.log('');
  console.log('Next: npm run tiktok:token-status');
  console.log('Done.');
});

server.listen(LOCAL_PORT, LOCAL_HOST, () => {
  ok(`local_server_listening=http://${LOCAL_HOST}:${LOCAL_PORT}/callback`);
});

server.on('error', err => {
  fail(`Local server error: ${err.message}`);
});
