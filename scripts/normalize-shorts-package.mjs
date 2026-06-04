#!/usr/bin/env node
// normalize-shorts-package.mjs
// Ensures each short in shorts-package.json has non-empty `hashtags` and
// `thumbnail_or_cover_text`. Sources from the metadata file if available,
// then falls back to safe defaults. Non-destructive — only fills
// missing/empty fields; existing non-empty values are never overwritten.
// Usage: node scripts/normalize-shorts-package.mjs --slug <slug>

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const DEFAULT_HASHTAGS = ['#derinokuma', '#shorts', '#tefekkür', '#iman'];

function parseArgs(argv) {
  const args = { slug: null };
  let i = 0;
  while (i < argv.length) {
    if (argv[i] === '--slug' && argv[i + 1]) args.slug = argv[++i];
    i++;
  }
  return args;
}

function isNonEmptyString(v) { return typeof v === 'string' && v.trim().length > 0; }
function isNonEmptyArray(v)  { return Array.isArray(v) && v.length > 0; }

function titleToThumbnailText(title) {
  if (!isNonEmptyString(title)) return 'DERİN OKUMA';
  return title.replace(/[?!.,;:]+$/g, '').trim().toUpperCase();
}

const args = parseArgs(process.argv.slice(2));
if (!args.slug) {
  console.error('Error: --slug is required.');
  process.exit(1);
}

const packagePath = path.join(
  ROOT, 'docs/video-tests/shorts', args.slug, `${args.slug}-shorts-package.json`,
);
const metadataPath = path.join(
  ROOT, 'docs/video-tests/shorts', args.slug, 'metadata', `${args.slug}-shorts-metadata.json`,
);

if (!fs.existsSync(packagePath)) {
  console.log(`[SKIP] Shorts package not found: ${path.relative(ROOT, packagePath)}`);
  process.exit(0);
}

let pkg;
try {
  pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
} catch (err) {
  console.error(`[FAIL] Could not parse package JSON: ${err.message}`);
  process.exit(1);
}

if (!Array.isArray(pkg.shorts)) {
  console.log('[SKIP] No shorts array found in package.');
  process.exit(0);
}

// Build a metadata lookup keyed by short_id for fallback values.
const metaById = {};
if (fs.existsSync(metadataPath)) {
  try {
    const meta = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
    if (Array.isArray(meta.shorts)) {
      for (const s of meta.shorts) {
        if (s.short_id) metaById[s.short_id] = s;
      }
    }
  } catch { /* metadata is optional — ignore parse errors */ }
}

let changed = false;

pkg.shorts = pkg.shorts.map((short) => {
  const meta    = metaById[short.short_id] || {};
  const updated = { ...short };
  let shortChanged = false;

  // ── hashtags ────────────────────────────────────────────────────────────────
  if (!isNonEmptyArray(updated.hashtags)) {
    const source = isNonEmptyArray(meta.hashtags) ? 'metadata' : 'default';
    updated.hashtags = isNonEmptyArray(meta.hashtags) ? meta.hashtags : DEFAULT_HASHTAGS;
    console.log(`[FIX] ${short.short_id}: hashtags filled from ${source}`);
    shortChanged = true;
  }

  // ── thumbnail_or_cover_text ─────────────────────────────────────────────────
  if (!isNonEmptyString(updated.thumbnail_or_cover_text)) {
    if (isNonEmptyString(meta.thumbnail_or_cover_text)) {
      updated.thumbnail_or_cover_text = meta.thumbnail_or_cover_text;
      console.log(`[FIX] ${short.short_id}: thumbnail_or_cover_text filled from metadata → "${updated.thumbnail_or_cover_text}"`);
    } else {
      updated.thumbnail_or_cover_text = titleToThumbnailText(short.title);
      console.log(`[FIX] ${short.short_id}: thumbnail_or_cover_text generated from title → "${updated.thumbnail_or_cover_text}"`);
    }
    shortChanged = true;
  }

  if (shortChanged) changed = true;
  return updated;
});

if (changed) {
  fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
  console.log(`[OK]  Wrote normalized package: ${path.relative(ROOT, packagePath)}`);
} else {
  console.log('[OK]  All fields already present — no changes needed.');
}
