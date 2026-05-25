#!/usr/bin/env node
// upload-tiktok-batch.mjs — TikTok dry-run batch upload planner

import fs from 'fs';
import path from 'path';
import process from 'process';

const TIKTOK_CAPTION_MAX = 2200;
const SUPPORTED_MODES = new Set(['draft', 'direct_post']);

// ── CLI ───────────────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const args = {
    manifest: null,
    mode:     'draft',
    dryRun:   false,
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if      (arg === '--manifest' && argv[i + 1]) args.manifest = argv[++i];
    else if (arg === '--mode'     && argv[i + 1]) args.mode     = argv[++i];
    else if (arg === '--dry-run')                  args.dryRun   = true;
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
function plan(message) { console.log(`[PLAN] ${message}`); }
function skip(message) { console.log(`[SKIP] ${message}`); }

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

// ── Caption builder ───────────────────────────────────────────────────────────

function buildCaption(video) {
  if (isNonEmptyString(video.tiktok?.caption)) {
    return video.tiktok.caption.slice(0, TIKTOK_CAPTION_MAX);
  }
  const hashtagPart = Array.isArray(video.hashtags) ? video.hashtags.join(' ') : '';
  return [video.title, hashtagPart].filter(Boolean).join(' ').slice(0, TIKTOK_CAPTION_MAX);
}

// ── Entry point ───────────────────────────────────────────────────────────────

const args = parseArgs(process.argv.slice(2));

if (!args.dryRun) {
  fail('TikTok API upload is not implemented yet. Use --dry-run.');
}

if (!args.manifest) {
  fail('Missing required --manifest <path>');
}

if (!SUPPORTED_MODES.has(args.mode)) {
  fail(`--mode must be one of: ${[...SUPPORTED_MODES].join(', ')}`);
}

const manifestPath = path.resolve(args.manifest);

if (!fs.existsSync(manifestPath)) {
  fail(`publish-manifest.json not found: ${manifestPath}`);
}

let manifest;
try {
  manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
} catch (err) {
  fail(`Failed to parse publish-manifest.json: ${err.message}`);
}

console.log(`TikTok Batch Upload Planner — ${manifest.slug || '(unknown slug)'}`);
console.log(`mode: ${args.mode}  dry_run: true`);
console.log('');

// ── Validate manifest ─────────────────────────────────────────────────────────

if (!isNonEmptyString(manifest.slug)) {
  fail('manifest.slug is missing or empty');
}
if (!Array.isArray(manifest.videos) || manifest.videos.length === 0) {
  fail('manifest.videos is missing or empty');
}

ok('manifest_found=true');
ok(`videos_count=${manifest.videos.length}`);

// ── Validate per-video fields and file existence ──────────────────────────────

let allExist = true;

for (const video of manifest.videos) {
  const id = video.id || '(unknown)';
  if (!isNonEmptyString(video.id))    fail(`A video entry is missing "id"`);
  if (!isNonEmptyString(video.path))  fail(`${id}: path is missing`);
  if (!isNonEmptyString(video.title)) fail(`${id}: title is missing`);
  if (!fs.existsSync(video.path)) {
    console.error(`[FAIL] ${id}: file not found on disk: ${video.path}`);
    allExist = false;
  }
}

if (!allExist) {
  fail('One or more video files are missing. Run video:export first.');
}

ok('all_files_exist=true');

// ── Build and print TikTok plan ───────────────────────────────────────────────

console.log('');

for (const video of manifest.videos) {
  const caption      = buildCaption(video);
  const captionShort = caption.length > 80 ? `${caption.slice(0, 80)}…` : caption;
  const privacyLevel = video.tiktok?.privacy_level || 'SELF_ONLY';

  plan(`${video.id} -> TikTok ${args.mode}`);
  plan(`  caption="${captionShort}"`);
  plan(`  privacy_level=${privacyLevel}`);
  plan(`  file=${path.basename(video.path)}`);
  console.log('');
}

skip(`dry_run=true  no TikTok API call`);

console.log('');
console.log('Done. All videos passed dry-run validation.');
