#!/usr/bin/env node
// build-publish-manifest.mjs — build publish-manifest.json from an existing export folder

import fs from 'fs';
import path from 'path';
import process from 'process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DEFAULT_EXPORT_ROOT = '/mnt/c/Users/MUHAMMET/Desktop/Derin Okuma YT';
const SCHEMA_VERSION = '1';

// ── CLI ───────────────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const args = {
    slug:       null,
    runId:      null,
    type:       'shorts',
    exportRoot: process.env.DERIN_OKUMA_EXPORT_ROOT || DEFAULT_EXPORT_ROOT,
    force:      false,
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if      (arg === '--slug'        && argv[i + 1]) args.slug       = argv[++i];
    else if (arg === '--run-id'      && argv[i + 1]) args.runId      = argv[++i];
    else if (arg === '--type'        && argv[i + 1]) args.type       = argv[++i];
    else if (arg === '--export-root' && argv[i + 1]) args.exportRoot = argv[++i];
    else if (arg === '--force')                       args.force      = true;
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

// ── Path helpers ──────────────────────────────────────────────────────────────

function expandHome(inputPath) {
  if (!inputPath) return inputPath;
  if (inputPath === '~') return process.env.HOME || inputPath;
  if (inputPath.startsWith('~/')) return path.join(process.env.HOME || '~', inputPath.slice(2));
  return inputPath;
}

function readJson(filePath, label) {
  if (!fs.existsSync(filePath)) fail(`${label} not found: ${filePath}`);
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (err) {
    fail(`${label} JSON parse failed: ${err.message}`);
  }
}

// ── Naming helpers — must match export-rendered-videos.mjs exactly ─────────

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function titleForShort(short) {
  return short.selected_title || short.title || '';
}

function sanitizeFileName(name) {
  const cleaned = name
    .replace(/[<>:"/\\|?*]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/[. ]+$/g, '');
  return cleaned || 'video';
}

function loadShortsPackageTitle(slug) {
  const packagePath = path.join(ROOT, 'docs/video-tests/shorts', slug, `${slug}-shorts-package.json`);
  if (!fs.existsSync(packagePath)) return null;
  try {
    const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    return pkg.source?.title || null;
  } catch {
    return null;
  }
}

function resolveFolderName(slug, metadata) {
  return (
    metadata.source?.title ||   // only works when source is an object (not used in shorts-metadata)
    (typeof metadata.source === 'string' ? null : null) ||
    metadata.slug ||
    loadShortsPackageTitle(slug) ||
    slug
  );
}

// ── YouTube helpers ───────────────────────────────────────────────────────────

function hashtagsToTags(hashtags) {
  if (!Array.isArray(hashtags)) return [];
  return hashtags.map((h) => (typeof h === 'string' ? h.replace(/^#/, '') : '')).filter(Boolean);
}

// ── TikTok caption ────────────────────────────────────────────────────────────

function buildTikTokCaption(title, hashtags) {
  const hashtagPart = Array.isArray(hashtags) ? hashtags.join(' ') : '';
  const caption = [title, hashtagPart].filter(Boolean).join(' ');
  return caption.slice(0, 2200); // TikTok caption limit
}

// ── Shorts manifest builder ───────────────────────────────────────────────────

function buildShortsManifest(args) {
  // 1. Resolve paths
  const metadataPath = path.join(
    ROOT,
    'docs/video-tests/shorts',
    args.slug,
    'metadata',
    `${args.slug}-shorts-metadata.json`
  );
  const exportRoot  = path.resolve(expandHome(args.exportRoot));
  const metadata    = readJson(metadataPath, 'Shorts metadata');
  const folderName  = resolveFolderName(args.slug, metadata);
  const targetDir   = path.join(exportRoot, folderName);
  const indexPath   = path.join(targetDir, 'export-index.md');
  const manifestPath = path.join(targetDir, 'publish-manifest.json');

  // 2. Validate metadata content
  if (!Array.isArray(metadata.shorts) || metadata.shorts.length === 0) {
    fail('Shorts metadata has no shorts array or it is empty');
  }

  ok('metadata_found=true');
  ok(`metadata_path=${metadataPath}`);

  // 3. Validate export folder exists
  if (!fs.existsSync(targetDir)) {
    fail(`Export folder not found: ${targetDir}\nRun video:export first.`);
  }
  ok('export_folder_found=true');
  ok(`export_folder=${targetDir}`);

  // 4. Validate export-index.md exists
  if (!fs.existsSync(indexPath)) {
    fail(`export-index.md not found: ${indexPath}\nRun video:export first.`);
  }
  ok('export_index_found=true');

  // 5. Validate manifest does not already exist unless --force
  if (fs.existsSync(manifestPath) && !args.force) {
    fail(`publish-manifest.json already exists: ${manifestPath}\nUse --force to overwrite.`);
  }

  ok(`export_items_count=${metadata.shorts.length}`);

  // 6. Build videos array — check each MP4 exists
  const usedPaths = new Set();
  const videos = [];

  for (const short of metadata.shorts) {
    const shortId = short.short_id;
    if (!isNonEmptyString(shortId)) {
      fail('A shorts metadata item is missing short_id');
    }

    const title = titleForShort(short);
    if (!isNonEmptyString(title)) {
      fail(`${shortId} is missing title (checked selected_title and title fields)`);
    }

    if (!isNonEmptyString(short.description)) {
      fail(`${shortId} is missing description`);
    }

    if (!Array.isArray(short.hashtags) || short.hashtags.length === 0) {
      fail(`${shortId} is missing hashtags`);
    }

    const fileName = `${sanitizeFileName(title)}.mp4`;
    const filePath = path.join(targetDir, fileName);

    if (usedPaths.has(filePath)) {
      fail(`Duplicate resolved path for ${shortId}: ${filePath}`);
    }
    usedPaths.add(filePath);

    const fileExists = fs.existsSync(filePath);
    if (!fileExists) {
      fail(`MP4 not found for ${shortId}: ${filePath}\nRun video:export first, or check that the export folder is correct.`);
    }

    ok(`${shortId} path exists: ${fileName}`);

    const hook          = isNonEmptyString(short.hook) ? short.hook.trim() : null;
    const thumbnailText = isNonEmptyString(short.thumbnail_or_cover_text)
      ? short.thumbnail_or_cover_text.trim()
      : null;
    const tags          = hashtagsToTags(short.hashtags);
    const tiktokCaption = buildTikTokCaption(title, short.hashtags);

    const videoEntry = {
      id:            shortId,
      path:          filePath,
      file_exists:   true,
      title,
      description:   short.description.trim(),
      hashtags:      short.hashtags,
      upload_status: 'pending',
      youtube: {
        privacyStatus:   'private',
        categoryId:      '27',
        madeForKids:     false,
        tags,
        defaultLanguage: 'tr',
      },
      tiktok: {
        mode:          'draft',
        caption:       tiktokCaption,
        privacy_level: 'SELF_ONLY',
      },
    };

    if (hook !== null)          videoEntry.hook           = hook;
    if (thumbnailText !== null) videoEntry.thumbnail_text = thumbnailText;

    videos.push(videoEntry);
  }

  if (videos.length === 0) {
    fail('No videos could be resolved from metadata');
  }

  // 7. Build manifest object
  const manifest = {
    schema_version:      SCHEMA_VERSION,
    generated_at:        new Date().toISOString(),
    slug:                args.slug,
    run_id:              args.runId,
    export_type:         args.type,
    target_folder:       targetDir,
    source_export_index: indexPath,
    source_metadata:     path.relative(ROOT, metadataPath),
    videos,
  };

  // 8. Write manifest
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
  ok('publish-manifest.json written');
  console.log(`Target: ${manifestPath}`);

  return manifest;
}

// ── Entry point ───────────────────────────────────────────────────────────────

const args = parseArgs(process.argv.slice(2));

if (!args.slug)  fail('Missing required --slug <slug>');
if (!args.runId) fail('Missing required --run-id <run-id>');

if (!['shorts', 'landscape'].includes(args.type)) {
  fail('--type must be one of: shorts, landscape (landscape not yet supported)');
}
if (args.type === 'landscape') {
  fail('--type landscape is not yet supported by this script');
}

console.log(`Build Publish Manifest — ${args.slug}`);
console.log(`run-id: ${args.runId}  type: ${args.type}`);
console.log('');

buildShortsManifest(args);

console.log('');
console.log('Done.');
