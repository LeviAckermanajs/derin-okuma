#!/usr/bin/env node
// tiktok-token-status.mjs — inspect TikTok token.json without network calls

import fs      from 'fs';
import path    from 'path';
import process from 'process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT      = path.resolve(__dirname, '..');

const SECRETS_DIR         = path.join(ROOT, '.secrets', 'tiktok');
const TOKEN_FILE          = path.join(SECRETS_DIR, 'token.json');
const WARN_BEFORE_EXPIRY  = 2 * 60 * 60 * 1000; // 2 hours in ms

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

// ── Main ──────────────────────────────────────────────────────────────────────

console.log('TikTok Token Status');
console.log('');

if (!fs.existsSync(TOKEN_FILE)) {
  fail(
    `token.json not found: ${TOKEN_FILE}\n` +
    'Run the auth flow first:\n' +
    '  npm run tiktok:auth-url\n' +
    '  npm run tiktok:exchange-token -- --code "<YOUR_CODE>"'
  );
}

let token;
try {
  token = JSON.parse(fs.readFileSync(TOKEN_FILE, 'utf8'));
} catch (err) {
  fail(`token.json parse failed: ${err.message}`);
}

// Required fields
const REQUIRED = ['access_token', 'refresh_token', 'open_id', 'scope', 'expires_at'];
for (const field of REQUIRED) {
  if (!isNonEmptyString(token[field])) {
    fail(`token.json missing required field: "${field}"`);
  }
}

ok('token_file_found=true');
ok(`access_token=${maskSecret(token.access_token)}`);
ok(`refresh_token=${maskSecret(token.refresh_token)}`);
ok(`open_id=${maskSecret(token.open_id)}`);
ok(`scope=${token.scope}`);

// Scope check
if (!token.scope.includes('video.upload')) {
  warn('video.upload scope is missing — re-authorize with correct scopes');
} else {
  ok('scope_video_upload=true');
}

// Access token expiry
const expiresAt = new Date(token.expires_at);
if (isNaN(expiresAt.getTime())) {
  warn(`expires_at is not a valid ISO date: "${token.expires_at}"`);
} else {
  const msLeft = expiresAt.getTime() - Date.now();
  console.log(`expires_at=${token.expires_at}`);
  if (msLeft <= 0) {
    warn('access_token is EXPIRED — re-authorize or refresh the token');
  } else if (msLeft < WARN_BEFORE_EXPIRY) {
    warn(`access_token expires soon (${(msLeft / 3_600_000).toFixed(1)}h remaining) — consider refreshing`);
  } else {
    ok(`token_valid=true (${(msLeft / 3_600_000).toFixed(1)}h remaining)`);
  }
}

// Refresh token expiry (optional field)
if (isNonEmptyString(token.refresh_expires_at)) {
  const refreshExpiry = new Date(token.refresh_expires_at);
  if (!isNaN(refreshExpiry.getTime())) {
    const msLeft = refreshExpiry.getTime() - Date.now();
    if (msLeft <= 0) {
      warn('refresh_token is also EXPIRED — must re-authorize from scratch');
    } else {
      ok(`refresh_token_valid=true (${(msLeft / 86_400_000).toFixed(0)}d remaining)`);
    }
  }
}

// Informational fields
if (isNonEmptyString(token.obtained_at)) {
  ok(`obtained_at=${token.obtained_at}`);
}

console.log('');
console.log('Done.');
