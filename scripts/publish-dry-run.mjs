#!/usr/bin/env node
// publish-dry-run.mjs — validate publish-manifest.json and write a dry-run publish-result.json

import fs from 'fs';
import path from 'path';
import process from 'process';

const SCHEMA_VERSION = '1';
const SUPPORTED_EXPORT_TYPES = new Set(['shorts']);

// ── CLI ───────────────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const args = { manifest: null, force: false };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if      (arg === '--manifest' && argv[i + 1]) args.manifest = argv[++i];
    else if (arg === '--force')                    args.force    = true;
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

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

// ── Manifest validation ───────────────────────────────────────────────────────

function validateManifest(manifest, manifestPath) {
  // Top-level required fields
  if (!isNonEmptyString(manifest.schema_version)) {
    fail('manifest.schema_version is missing or empty');
  }
  if (manifest.schema_version !== SCHEMA_VERSION) {
    warn(`manifest.schema_version is "${manifest.schema_version}", expected "${SCHEMA_VERSION}"`);
  }
  if (!isNonEmptyString(manifest.slug)) {
    fail('manifest.slug is missing or empty');
  }
  if (!isNonEmptyString(manifest.run_id)) {
    fail('manifest.run_id is missing or empty');
  }
  if (!isNonEmptyString(manifest.export_type)) {
    fail('manifest.export_type is missing or empty');
  }
  if (!SUPPORTED_EXPORT_TYPES.has(manifest.export_type)) {
    fail(`manifest.export_type "${manifest.export_type}" is not supported. Supported: ${[...SUPPORTED_EXPORT_TYPES].join(', ')}`);
  }
  if (!Array.isArray(manifest.videos) || manifest.videos.length === 0) {
    fail('manifest.videos is missing or empty');
  }

  ok('manifest_found=true');
  ok(`slug=${manifest.slug}`);
  ok(`run_id=${manifest.run_id}`);
  ok(`export_type=${manifest.export_type}`);
  ok(`videos_count=${manifest.videos.length}`);

  // Per-video validation
  const seenIds = new Set();
  const results = [];
  let failCount = 0;

  for (const video of manifest.videos) {
    const id = video.id || video.short_id || '(unknown)';

    if (!isNonEmptyString(video.id)) {
      fail(`A video entry is missing the "id" field`);
    }

    if (seenIds.has(video.id)) {
      fail(`Duplicate video id in manifest: ${video.id}`);
    }
    seenIds.add(video.id);

    const videoFails = [];

    // Required string fields
    if (!isNonEmptyString(video.path))        videoFails.push('path is missing');
    if (!isNonEmptyString(video.title))       videoFails.push('title is missing');
    if (!isNonEmptyString(video.description)) videoFails.push('description is missing');

    // file_exists must be true in the manifest
    if (video.file_exists !== true) {
      videoFails.push('file_exists is not true in manifest');
    }

    // hashtags
    if (!Array.isArray(video.hashtags) || video.hashtags.length === 0) {
      videoFails.push('hashtags array is missing or empty');
    }

    // platform blocks
    if (!video.youtube || typeof video.youtube !== 'object') {
      videoFails.push('youtube block is missing');
    }
    if (!video.tiktok || typeof video.tiktok !== 'object') {
      videoFails.push('tiktok block is missing');
    }

    // Actual disk check (most important)
    let diskExists = false;
    if (isNonEmptyString(video.path)) {
      diskExists = fs.existsSync(video.path);
      if (!diskExists) {
        videoFails.push(`file not found on disk: ${video.path}`);
      }
    }

    if (videoFails.length > 0) {
      for (const msg of videoFails) {
        console.error(`[FAIL] ${id}: ${msg}`);
      }
      failCount++;
      results.push(buildVideoResult(video, 'validation_failed', videoFails.join('; ')));
    } else {
      ok(`${id} file exists`);
      results.push(buildVideoResult(video, 'dry_run_success', null));
    }
  }

  return { results, failCount };
}

// ── Result builder ────────────────────────────────────────────────────────────

function buildVideoResult(video, status, errorMessage) {
  const entry = {
    id:    video.id,
    path:  video.path  || '',
    title: video.title || '',
    youtube: {
      status,
      privacyStatus: video.youtube?.privacyStatus || 'private',
      categoryId:    video.youtube?.categoryId    || '27',
    },
    tiktok: {
      status,
      mode:          video.tiktok?.mode          || 'draft',
      privacy_level: video.tiktok?.privacy_level || 'SELF_ONLY',
    },
  };

  if (errorMessage) {
    entry.error = errorMessage;
  }

  return entry;
}

// ── Entry point ───────────────────────────────────────────────────────────────

const args = parseArgs(process.argv.slice(2));

if (!args.manifest) fail('Missing required --manifest <path>');

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

console.log(`Publish Dry Run — ${manifest.slug || '(unknown slug)'}`);
console.log('');

const { results, failCount } = validateManifest(manifest, manifestPath);

const totalVideos     = results.length;
const successCount    = results.filter((r) => r.youtube.status === 'dry_run_success').length;
const youtubePlanned  = successCount;
const tiktokPlanned   = successCount;

if (failCount === 0) {
  ok(`youtube_planned=${youtubePlanned}`);
  ok(`tiktok_planned=${tiktokPlanned}`);
}

// ── Write publish-result.json ─────────────────────────────────────────────────

const resultPath = path.join(path.dirname(manifestPath), 'publish-result.json');

if (fs.existsSync(resultPath) && !args.force) {
  fail(
    `publish-result.json already exists: ${resultPath}\n` +
    `Use --force to overwrite.`
  );
}

const publishResult = {
  schema_version: SCHEMA_VERSION,
  generated_at:   new Date().toISOString(),
  mode:           'dry_run',
  slug:           manifest.slug,
  run_id:         manifest.run_id,
  manifest_path:  manifestPath,
  summary: {
    total_videos:     totalVideos,
    youtube_planned:  youtubePlanned,
    tiktok_planned:   tiktokPlanned,
    failed:           failCount,
  },
  videos: results,
};

fs.writeFileSync(resultPath, JSON.stringify(publishResult, null, 2) + '\n', 'utf8');
ok('publish-result.json written');
console.log(`Target: ${resultPath}`);

console.log('');

if (failCount > 0) {
  console.error(`[FAIL] Dry run completed with ${failCount} validation failure(s).`);
  process.exit(1);
}

console.log('Done. All videos passed dry-run validation.');
