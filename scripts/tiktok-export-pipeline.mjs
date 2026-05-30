#!/usr/bin/env node
// scripts/tiktok-export-pipeline.mjs
// Builds tiktok-upload-plan.json from publish-manifest.json,
// then exports per-short caption .txt files + markdown copy list.
// Replaces the two-step: build-plan + export-tiktok-captions.
//
// Usage:
//   node scripts/tiktok-export-pipeline.mjs --slug <slug>
//   node scripts/tiktok-export-pipeline.mjs --manifest <abs-path-to-publish-manifest.json>

import fs   from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname   = path.dirname(fileURLToPath(import.meta.url));
const ROOT        = path.resolve(__dirname, '..');
const EXPORT_ROOT = process.env.DERIN_OKUMA_EXPORT_ROOT
  || '/mnt/c/Users/MUHAMMET/Desktop/Derin Okuma YT';
const SHORTS_DIR  = path.join(ROOT, 'docs', 'video-tests', 'shorts');

// ── Helpers ───────────────────────────────────────────────────────────────────

function readJson(p)  { try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return null; } }
function readText(p)  { try { return fs.readFileSync(p, 'utf8').trim(); }     catch { return null; } }
function exists(p)    { return fs.existsSync(p); }

function fail(msg) { console.error(`[FAIL] ${msg}`); process.exit(1); }
function ok(msg)   { console.log(`[OK] ${msg}`); }
function info(msg) { console.log(`[INFO] ${msg}`); }
function warn(msg) { console.log(`[WARN] ${msg}`); }

function sanitizeFolderName(name) {
  return (name
    .replace(/ *: */g, ' - ')
    .replace(/[<>"/\\|?*]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/[. ]+$/g, '')) || 'folder';
}

// ── CLI ───────────────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const a = { slug: null, manifest: null };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--slug'     && argv[i+1]) { a.slug     = argv[++i]; continue; }
    if (argv[i] === '--manifest' && argv[i+1]) { a.manifest = argv[++i]; continue; }
    if (argv[i].startsWith('--')) fail(`Unknown option: ${argv[i]}`);
  }
  return a;
}

// ── Export folder resolution ──────────────────────────────────────────────────

function resolveExportFolderBySlug(slug) {
  const pkgPath = path.join(SHORTS_DIR, slug, `${slug}-shorts-package.json`);
  const pkg     = readJson(pkgPath);
  if (pkg) {
    const title = pkg.source?.title || slug;
    return path.join(EXPORT_ROOT, sanitizeFolderName(title));
  }
  // Fallback: scan EXPORT_ROOT for a manifest with matching slug
  if (!exists(EXPORT_ROOT)) return null;
  function scan(dir, depth) {
    if (depth > 2) return null;
    let entries;
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return null; }
    for (const e of entries) {
      if (!e.isDirectory()) continue;
      const sub = path.join(dir, e.name);
      const mf  = readJson(path.join(sub, 'publish-manifest.json'));
      if (mf?.slug === slug) return sub;
      const found = scan(sub, depth + 1);
      if (found) return found;
    }
    return null;
  }
  return scan(EXPORT_ROOT, 0);
}

// ── Caption extraction (same priority as static export) ───────────────────────

function extractCaption(video) {
  // Priority 1: description (YouTube Shorts description)
  if (video.description?.trim())
    return { caption: video.description.trim(), source: 'publish_manifest_description' };
  // Priority 2: tiktok.caption from manifest
  if (video.tiktok?.caption?.trim())
    return { caption: video.tiktok.caption.trim(), source: 'manifest_tiktok_caption' };
  // Priority 3: title + hashtags fallback
  const tags = (video.hashtags ?? []).join(' ');
  const cap  = `${video.title ?? video.id}${tags ? ' ' + tags : ''}`;
  return { caption: cap, source: 'fallback_title_hashtags' };
}

// ── Plan generation ───────────────────────────────────────────────────────────

function buildPlan(manifest, exportFolder) {
  const slug  = manifest.slug || path.basename(exportFolder);
  const items = (manifest.videos ?? []).map(v => {
    const { caption, source } = extractCaption(v);
    const isFallback = source === 'fallback_title_hashtags';
    if (isFallback) warn(`${v.id ?? '?'}: caption from fallback (title+hashtags)`);
    return {
      short_id:       v.id    ?? `short-${String((manifest.videos?.indexOf(v) ?? 0) + 1).padStart(3,'0')}`,
      title:          v.title ?? v.id ?? '',
      video_path:     v.path  ?? '',
      caption,
      caption_source: source,
      privacy_level:  v.tiktok?.privacy_level ?? 'SELF_ONLY',
      is_aigc:        true,   // required by upload-tiktok-batch-real.mjs
      errors:         [],
    };
  });

  return {
    schema_version: '1',
    slug,
    generated_at:   new Date().toISOString(),
    source:         'publish_manifest',
    items,
  };
}

// ── Caption file export ───────────────────────────────────────────────────────

function exportCaptions(plan, exportFolder) {
  const captionDir   = path.join(exportFolder, 'tiktok-captions');
  const copyListPath = path.join(exportFolder, 'tiktok-caption-copy-list.md');

  fs.mkdirSync(captionDir, { recursive: true });
  ok(`caption_dir=tiktok-captions/`);

  const mdLines = [
    `# TikTok Caption Copy List`,
    ``,
    `Slug: \`${plan.slug}\`  `,
    `Generated: ${plan.generated_at}`,
    ``,
    `---`,
    ``,
  ];

  for (const item of plan.items) {
    const txtPath = path.join(captionDir, `${item.short_id}.txt`);
    fs.writeFileSync(txtPath, item.caption, 'utf8');
    ok(`written ${item.short_id}.txt  (${item.caption.length} chars)`);

    const videoName = item.video_path ? path.basename(item.video_path) : '(unknown)';
    mdLines.push(
      `## ${item.short_id}`,
      ``,
      `**Video:** \`${videoName}\`  `,
      `**Caption source:** \`${item.caption_source}\``,
      ``,
      `\`\`\``,
      item.caption,
      `\`\`\``,
      ``,
      `---`,
      ``,
    );
  }

  fs.writeFileSync(copyListPath, mdLines.join('\n'), 'utf8');
  ok(`written tiktok-caption-copy-list.md`);
  return plan.items.length;
}

// ── Main ──────────────────────────────────────────────────────────────────────

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.slug && !args.manifest)
    fail('Usage: --slug <slug>  or  --manifest <path-to-publish-manifest.json>');

  let slug = args.slug, exportFolder = null, manifestPath = null;

  if (args.manifest) {
    manifestPath = path.resolve(args.manifest);
    const safeRoot = path.resolve(EXPORT_ROOT);
    if (!manifestPath.startsWith(safeRoot + path.sep) && manifestPath !== safeRoot)
      fail('manifest path must be within EXPORT_ROOT');
    if (!exists(manifestPath)) fail(`Manifest not found: ${manifestPath}`);
    exportFolder = path.dirname(manifestPath);
    const mf = readJson(manifestPath);
    if (!mf) fail('Cannot parse manifest JSON');
    slug = slug || mf.slug;
  } else {
    if (!/^[a-zA-Z0-9_-]+$/.test(slug)) fail(`Invalid slug: ${slug}`);
    exportFolder = resolveExportFolderBySlug(slug);
    if (!exportFolder || !exists(exportFolder)) fail(`Export folder not found for slug: ${slug}`);
    manifestPath = path.join(exportFolder, 'publish-manifest.json');
    if (!exists(manifestPath)) fail(`publish-manifest.json not found in: ${exportFolder}`);
  }

  if (!slug || !/^[a-zA-Z0-9_-]+$/.test(slug)) fail('Cannot determine valid slug');

  const manifest = readJson(manifestPath);
  if (!manifest) fail('Cannot parse publish-manifest.json');
  if (!Array.isArray(manifest.videos) || manifest.videos.length === 0)
    fail('publish-manifest.json has no videos array');

  console.log('TikTok Export Pipeline');
  console.log(`Slug: ${slug}`);
  console.log('');

  // Build plan
  const plan     = buildPlan(manifest, exportFolder);
  const planPath = path.join(exportFolder, 'tiktok-upload-plan.json');
  fs.writeFileSync(planPath, JSON.stringify(plan, null, 2), 'utf8');
  ok(`tiktok-upload-plan.json  (${plan.items.length} items)`);
  console.log('');

  // Export caption files
  const count = exportCaptions(plan, exportFolder);
  console.log('');
  info(`Plan:          ${planPath}`);
  info(`Caption files: ${path.join(exportFolder, 'tiktok-captions')}/`);
  info(`Items ready:   ${count}`);
  console.log('Done.');
}

main();
