#!/usr/bin/env node
// normalize-shorts-metadata-hashtags.mjs
// Strips any trailing hashtag block from each short's description,
// then appends the short's own hashtags array (joined with spaces).
// hashtags array is the source of truth; description is rewritten to match.
// Usage: node scripts/normalize-shorts-metadata-hashtags.mjs --slug <slug>

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const DEFAULT_HASHTAGS = ['#derinokuma', '#shorts', '#tefekkür'];

function parseArgs(argv) {
  const args = { slug: null };
  let i = 0;
  while (i < argv.length) {
    if (argv[i] === '--slug' && argv[i + 1]) args.slug = argv[++i];
    i++;
  }
  return args;
}

function stripTrailingHashtags(text) {
  const words = text.trim().split(/\s+/);
  let cutAt = words.length;
  while (cutAt > 0 && words[cutAt - 1].startsWith('#')) cutAt--;
  return words.slice(0, cutAt).join(' ').trimEnd();
}

const args = parseArgs(process.argv.slice(2));
if (!args.slug) {
  console.error('Error: --slug is required.');
  process.exit(1);
}

const metadataPath = path.join(
  ROOT,
  'docs/video-tests/shorts',
  args.slug,
  'metadata',
  `${args.slug}-shorts-metadata.json`,
);

if (!fs.existsSync(metadataPath)) {
  console.error(`[SKIP] Shorts metadata not found: ${path.relative(ROOT, metadataPath)}`);
  process.exit(0);
}

let metadata;
try {
  metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
} catch (err) {
  console.error(`[FAIL] Could not parse metadata JSON: ${err.message}`);
  process.exit(1);
}

if (!Array.isArray(metadata.shorts)) {
  console.log('[SKIP] No shorts array found in metadata.');
  process.exit(0);
}

let changed = false;

metadata.shorts = metadata.shorts.map((short) => {
  const hashtags =
    Array.isArray(short.hashtags) && short.hashtags.length > 0
      ? short.hashtags
      : DEFAULT_HASHTAGS;

  const hashtagBlock = hashtags.join(' ');
  const textPart = stripTrailingHashtags(short.description || '');
  const normalized = `${textPart} ${hashtagBlock}`;

  if (normalized !== short.description) {
    console.log(`[FIX] ${short.short_id}: description hashtags aligned`);
    changed = true;
    return { ...short, description: normalized };
  }

  return short;
});

if (changed) {
  fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2), 'utf8');
  console.log(`[OK]  Wrote normalized metadata: ${path.relative(ROOT, metadataPath)}`);
} else {
  console.log('[OK]  All hashtags already consistent — no changes needed.');
}
