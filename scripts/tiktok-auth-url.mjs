#!/usr/bin/env node
// tiktok-auth-url.mjs — generate TikTok OAuth 2.0 authorization URL with PKCE

import { randomBytes, createHash } from 'crypto';
import { spawnSync }               from 'child_process';
import fs                          from 'fs';
import path                        from 'path';
import process                     from 'process';
import { fileURLToPath }           from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT      = path.resolve(__dirname, '..');

const TIKTOK_AUTH_BASE = 'https://www.tiktok.com/v2/auth/authorize/';
const TIKTOK_SCOPE     = 'video.upload';
const SECRETS_DIR      = path.join(ROOT, '.secrets', 'tiktok');
const CLIENT_JSON      = path.join(SECRETS_DIR, 'client.json');
const AUTH_STATE_FILE  = path.join(SECRETS_DIR, 'auth-state.local.tiktok.json');

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

function readJson(filePath, label) {
  if (!fs.existsSync(filePath)) fail(`${label} not found: ${filePath}`);
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (err) {
    fail(`${label} parse failed: ${err.message}`);
  }
}

// ── PKCE helpers ──────────────────────────────────────────────────────────────

// RFC 7636 unreserved character set: ALPHA / DIGIT / "-" / "." / "_" / "~"
const UNRESERVED = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';

function generateCodeVerifier(length = 64) {
  const bytes = randomBytes(length);
  return Array.from(bytes, b => UNRESERVED[b % UNRESERVED.length]).join('');
}

// TikTok Desktop Login Kit requires hex-encoded SHA256, NOT base64url.
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
    // Linux / WSL2: try xdg-open, fall back to wslview
    const r = spawnSync('xdg-open', [url], { stdio: 'ignore' });
    if (r.status !== 0) spawnSync('wslview', [url], { stdio: 'ignore' });
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────

const args = parseArgs(process.argv.slice(2));

console.log('TikTok Auth URL Generator');
console.log('');

// Load client credentials
const client = readJson(CLIENT_JSON, 'client.json');
if (!isNonEmptyString(client.client_key))   fail('client.json missing client_key');
if (!isNonEmptyString(client.redirect_uri)) fail('client.json missing redirect_uri');
if (client.client_key === 'REPLACE_ME')     fail('client.json still has placeholder values. Fill in real credentials first.');

// Generate PKCE values and CSRF state
const codeVerifier  = generateCodeVerifier();
const codeChallenge = generateCodeChallenge(codeVerifier);
const state         = randomBytes(16).toString('hex');

// Persist auth state for the exchange step
fs.mkdirSync(SECRETS_DIR, { recursive: true });
const authState = {
  code_verifier:  codeVerifier,
  code_challenge: codeChallenge,
  state,
  redirect_uri:   client.redirect_uri,
  created_at:     new Date().toISOString(),
};
fs.writeFileSync(AUTH_STATE_FILE, JSON.stringify(authState, null, 2) + '\n', 'utf8');
ok(`auth_state_saved=${path.relative(ROOT, AUTH_STATE_FILE)}`);
ok(`code_verifier_length=${codeVerifier.length}`);
ok('code_challenge_format=hex_sha256');
ok(`code_challenge_length=${codeChallenge.length}`);

// Build authorization URL
const params = new URLSearchParams({
  client_key:            client.client_key,
  scope:                 TIKTOK_SCOPE,
  response_type:         'code',
  redirect_uri:          client.redirect_uri,
  state,
  code_challenge:        codeChallenge,
  code_challenge_method: 'S256',
});
const authUrl = `${TIKTOK_AUTH_BASE}?${params.toString()}`;

console.log('');
info('Authorization URL:');
console.log('');
console.log(authUrl);
console.log('');
info('1. Open this URL in your browser and authorize the app.');
info('2. Copy the `code` parameter from the callback URL.');
info('3. Run: npm run tiktok:exchange-token -- --code "<YOUR_CODE>"');

if (args.open) {
  openUrl(authUrl);
  info('');
  info('Browser open attempted. If it did not open, use the URL above.');
}

console.log('');
console.log('Done.');
