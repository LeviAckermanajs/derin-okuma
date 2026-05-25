#!/usr/bin/env node
// tiktok-exchange-token.mjs — exchange TikTok auth code for access/refresh tokens

import fs      from 'fs';
import path    from 'path';
import process from 'process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT      = path.resolve(__dirname, '..');

const TIKTOK_TOKEN_URL = 'https://open.tiktokapis.com/v2/oauth/token/';
const SECRETS_DIR      = path.join(ROOT, '.secrets', 'tiktok');
const CLIENT_JSON      = path.join(SECRETS_DIR, 'client.json');
const AUTH_STATE_FILE  = path.join(SECRETS_DIR, 'auth-state.local.tiktok.json');
const TOKEN_FILE       = path.join(SECRETS_DIR, 'token.json');

// ── CLI ───────────────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const args = { code: null };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--code' && argv[i + 1]) args.code = argv[++i];
    else fail(`Unknown or incomplete option: ${arg}`);
  }
  return args;
}

// ── Logging ───────────────────────────────────────────────────────────────────

function fail(message) { console.error(`[FAIL] ${message}`); process.exit(1); }
function ok(message)   { console.log(`[OK] ${message}`); }
function warn(message) { console.log(`[WARN] ${message}`); }

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

// ── Main ──────────────────────────────────────────────────────────────────────

const args = parseArgs(process.argv.slice(2));

if (!args.code) fail('Missing required --code <auth_code>');

console.log('TikTok Token Exchange');
console.log('');

// Load client credentials
const client = readJson(CLIENT_JSON, 'client.json');
if (!isNonEmptyString(client.client_key))    fail('client.json missing client_key');
if (!isNonEmptyString(client.client_secret)) fail('client.json missing client_secret');
if (!isNonEmptyString(client.redirect_uri))  fail('client.json missing redirect_uri');

// Load PKCE verifier from auth state
let codeVerifier = null;
if (fs.existsSync(AUTH_STATE_FILE)) {
  const authState = readJson(AUTH_STATE_FILE, 'auth-state.local.tiktok.json');
  if (isNonEmptyString(authState.code_verifier)) {
    codeVerifier = authState.code_verifier;
    ok('pkce_verifier_found=true');
  }
} else {
  warn('auth-state.local.tiktok.json not found — proceeding without PKCE code_verifier');
}

// Build token request body
const body = new URLSearchParams({
  client_key:    client.client_key,
  client_secret: client.client_secret,
  code:          args.code,
  grant_type:    'authorization_code',
  redirect_uri:  client.redirect_uri,
});
if (codeVerifier) body.set('code_verifier', codeVerifier);

// Exchange code for token
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

// Validate required response fields
if (!isNonEmptyString(json.access_token))  fail('Response missing access_token');
if (!isNonEmptyString(json.refresh_token)) fail('Response missing refresh_token');
if (!isNonEmptyString(json.open_id))       fail('Response missing open_id');

// Compute absolute expiry timestamps
const expiresInSeconds  = Number(json.expires_in)         || 86400;
const refreshExpiresIn  = Number(json.refresh_expires_in) || null;
const expiresAt         = new Date(Date.now() + expiresInSeconds * 1000).toISOString();
const refreshExpiresAt  = refreshExpiresIn
  ? new Date(Date.now() + refreshExpiresIn * 1000).toISOString()
  : null;

// Write token.json — only store what we need
const token = {
  access_token:       json.access_token,
  refresh_token:      json.refresh_token,
  open_id:            json.open_id,
  scope:              json.scope          || '',
  token_type:         json.token_type     || 'Bearer',
  expires_in:         expiresInSeconds,
  expires_at:         expiresAt,
  refresh_expires_in: refreshExpiresIn,
  refresh_expires_at: refreshExpiresAt,
  obtained_at:        new Date().toISOString(),
};

fs.mkdirSync(SECRETS_DIR, { recursive: true });
fs.writeFileSync(TOKEN_FILE, JSON.stringify(token, null, 2) + '\n', 'utf8');

// Print safe summary — never log full token values
ok('token_saved=true');
ok(`open_id=${maskSecret(token.open_id)}`);
ok(`scope=${token.scope}`);
console.log(`expires_at=${expiresAt}`);

if (!token.scope.includes('video.upload')) {
  warn('video.upload scope is missing — check app permissions in TikTok Developer Console');
} else {
  ok('scope includes video.upload=true');
}

// Clean up one-time auth state
if (fs.existsSync(AUTH_STATE_FILE)) {
  fs.unlinkSync(AUTH_STATE_FILE);
  ok('auth_state_cleaned_up=true');
}

console.log('');
console.log('Next: npm run tiktok:token-status');
console.log('Done.');
