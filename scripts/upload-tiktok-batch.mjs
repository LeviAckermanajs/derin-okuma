#!/usr/bin/env node
// upload-tiktok-batch.mjs — TikTok dry-run batch upload planner with caption validation

import fs from 'fs';
import path from 'path';
import process from 'process';

const CAPTION_MAX        = 2200;
const CAPTION_WARN_OVER  = 1800;
const HASHTAG_WARN_MIN   = 3;
const HASHTAG_WARN_MAX   = 10;
const HASHTAG_REC_MIN    = 4;
const HASHTAG_REC_MAX    = 8;
const SUPPORTED_MODES    = new Set(['draft', 'direct_post']);

// ── CLI ───────────────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const args = {
    manifest:  null,
    mode:      'draft',
    dryRun:    false,
    writePlan: false,
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if      (arg === '--manifest'   && argv[i + 1]) args.manifest  = argv[++i];
    else if (arg === '--mode'       && argv[i + 1]) args.mode      = argv[++i];
    else if (arg === '--dry-run')                    args.dryRun    = true;
    else if (arg === '--write-plan')                 args.writePlan = true;
    else {
      fail(`Unknown or incomplete option: ${arg}`);
    }
  }

  return args;
}

// ── Logging ───────────────────────────────────────────────────────────────────

function fail(message)  { console.error(`[FAIL] ${message}`);  process.exit(1); }
function ok(message)    { console.log(`[OK] ${message}`); }
function warn(message)  { console.log(`[WARN] ${message}`); }
function plan(message)  { console.log(`[PLAN] ${message}`); }
function check(message) { console.log(`[CHECK] ${message}`); }
function skip(message)  { console.log(`[SKIP] ${message}`); }

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

// ── Hashtag helpers ───────────────────────────────────────────────────────────

const TURKISH_CHARS = /[çğışöüÇĞİŞÖÜ]/;

function normalizeHashtag(raw) {
  let tag = String(raw).trim().replace(/\s+/g, '');
  if (!tag.startsWith('#')) tag = `#${tag}`;
  const body = tag.slice(1);
  // Lowercase only pure-ASCII hashtags; preserve Turkish characters
  const lowered = TURKISH_CHARS.test(body) ? body : body.toLowerCase();
  return `#${lowered}`;
}

function normalizeHashtags(hashtags) {
  if (!Array.isArray(hashtags)) return [];
  const seen = new Set();
  const result = [];
  const duplicates = [];
  for (const raw of hashtags) {
    if (!isNonEmptyString(raw)) continue;
    const tag = normalizeHashtag(raw);
    const key = tag.toLowerCase();
    if (seen.has(key)) {
      duplicates.push(tag);
    } else {
      seen.add(key);
      result.push(tag);
    }
  }
  return { tags: result, duplicates };
}

function extractHashtagsFromText(text) {
  return (text.match(/#\S+/g) || []);
}

// ── Caption builder ───────────────────────────────────────────────────────────

// TikTok has no separate title field visible to users.
// Caption = title line + hashtags. Description body is omitted for brevity;
// the title already carries the core message.
function buildCaption(video, normalizedTags) {
  // Prefer the pre-built manifest caption if present
  if (isNonEmptyString(video.tiktok?.caption)) {
    return video.tiktok.caption;
  }
  const hashtagStr = normalizedTags.join(' ');
  return [video.title, hashtagStr].filter(Boolean).join('\n').slice(0, CAPTION_MAX);
}

// ── Caption validation ────────────────────────────────────────────────────────

function validateCaption(id, caption, normalizedTags, duplicates) {
  const warnings = [];
  const errors   = [];

  if (!isNonEmptyString(caption)) {
    errors.push('caption is empty');
    return { warnings, errors };
  }

  // Length in UTF-16 code units (JS string.length)
  const len = caption.length;
  if (len > CAPTION_MAX) {
    errors.push(`caption exceeds ${CAPTION_MAX} characters (${len})`);
  } else if (len > CAPTION_WARN_OVER) {
    warnings.push(`caption length ${len} exceeds ${CAPTION_WARN_OVER} — consider shortening`);
  }

  // Hashtag count
  const count = normalizedTags.length;
  if (count === 0) {
    warnings.push('caption has no hashtags');
  } else if (count < HASHTAG_WARN_MIN) {
    warnings.push(`fewer than ${HASHTAG_WARN_MIN} hashtags (${count}) — recommended ${HASHTAG_REC_MIN}–${HASHTAG_REC_MAX}`);
  } else if (count > HASHTAG_WARN_MAX) {
    warnings.push(`more than ${HASHTAG_WARN_MAX} hashtags (${count}) — may look spammy`);
  }

  // Duplicate hashtags
  if (duplicates.length > 0) {
    warnings.push(`duplicate hashtags removed: ${duplicates.join(', ')}`);
  }

  // Check if caption is mostly hashtags with no meaningful text
  const strippedOfHashtags = caption.replace(/#\S+/g, '').trim();
  if (strippedOfHashtags.length === 0 && count > 0) {
    warnings.push('caption contains only hashtags — add meaningful text before hashtags');
  }

  return { warnings, errors };
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

// ── Validate manifest structure ───────────────────────────────────────────────

if (!isNonEmptyString(manifest.slug)) {
  fail('manifest.slug is missing or empty');
}
if (!Array.isArray(manifest.videos) || manifest.videos.length === 0) {
  fail('manifest.videos is missing or empty');
}

ok('manifest_found=true');
ok(`videos_count=${manifest.videos.length}`);

// ── Validate file existence ───────────────────────────────────────────────────

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

// ── Build plan items and run caption validation ───────────────────────────────

console.log('');

const planItems = [];
let totalErrors   = 0;
let totalWarnings = 0;

for (const video of manifest.videos) {
  const { tags: normalizedTags, duplicates } = normalizeHashtags(video.hashtags);
  const caption      = buildCaption(video, normalizedTags);
  const captionLen   = caption.length;
  const { warnings, errors } = validateCaption(video.id, caption, normalizedTags, duplicates);

  const captionPreview = captionLen > 80 ? `${caption.slice(0, 80)}…` : caption;
  const privacyLevel   = video.tiktok?.privacy_level || 'SELF_ONLY';

  plan(`${video.id} -> TikTok ${args.mode}`);
  plan(`  caption="${captionPreview}"`);
  plan(`  privacy_level=${privacyLevel}`);
  plan(`  file=${path.basename(video.path)}`);
  check(`caption_length=${captionLen}`);
  check(`hashtags_count=${normalizedTags.length}`);

  for (const w of warnings) {
    warn(`${video.id}: ${w}`);
  }
  for (const e of errors) {
    console.error(`[FAIL] ${video.id}: ${e}`);
  }

  if (warnings.length === 0 && errors.length === 0) {
    ok('caption_quality=pass');
  }

  console.log('');

  totalErrors   += errors.length;
  totalWarnings += warnings.length;

  planItems.push({
    short_id:       video.id,
    video_path:     video.path,
    file_exists:    true,
    caption,
    caption_length: captionLen,
    hashtags:       normalizedTags,
    hashtags_count: normalizedTags.length,
    privacy_level:  privacyLevel,
    mode:           args.mode,
    warnings,
    errors,
    status:         errors.length > 0 ? 'has_errors' : 'ready_for_dry_run',
  });
}

// ── Write tiktok-upload-plan.json if requested ────────────────────────────────

if (args.writePlan) {
  const planPath = path.join(path.dirname(manifestPath), 'tiktok-upload-plan.json');
  const readyCount   = planItems.filter((i) => i.status === 'ready_for_dry_run').length;
  const warningCount = planItems.reduce((n, i) => n + i.warnings.length, 0);
  const errorCount   = planItems.reduce((n, i) => n + i.errors.length, 0);

  const planJson = {
    platform:      'tiktok',
    mode:          args.mode,
    dry_run:       true,
    created_at:    new Date().toISOString(),
    manifest_path: manifestPath,
    videos_count:  planItems.length,
    all_files_exist: allExist,
    caption_policy: {
      max_length:            CAPTION_MAX,
      warn_over:             CAPTION_WARN_OVER,
      recommended_hashtags:  `${HASHTAG_REC_MIN}-${HASHTAG_REC_MAX}`,
    },
    items: planItems,
    summary: {
      ready_count:   readyCount,
      warning_count: warningCount,
      error_count:   errorCount,
    },
  };

  fs.writeFileSync(planPath, JSON.stringify(planJson, null, 2) + '\n', 'utf8');
  ok(`tiktok-upload-plan.json written`);
  console.log(`Target: ${planPath}`);
  console.log('');
}

// ── Final status ──────────────────────────────────────────────────────────────

skip(`dry_run=true  no TikTok API call`);

if (totalWarnings > 0) {
  console.log(`\n[WARN] ${totalWarnings} caption warning(s). Review before real upload.`);
}

if (totalErrors > 0) {
  console.error(`\n[FAIL] ${totalErrors} caption error(s). Fix before upload.`);
  process.exit(1);
}

console.log('');
console.log('Done. All videos passed dry-run validation.');
