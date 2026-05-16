#!/usr/bin/env node
// export-rendered-videos.mjs - copy rendered videos to a YouTube upload folder

import fs from 'fs';
import path from 'path';
import process from 'process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DEFAULT_JOBS_ROOT = '~/projects/scene-blog-video/output/jobs';

function parseArgs(argv) {
  const args = {
    slug: null,
    type: 'shorts',
    runId: null,
    jobsRoot: DEFAULT_JOBS_ROOT,
    exportRoot: process.env.DERIN_OKUMA_EXPORT_ROOT || null,
    folderName: null,
    force: false,
    dryRun: false
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--slug' && argv[i + 1]) args.slug = argv[++i];
    else if (arg === '--type' && argv[i + 1]) args.type = argv[++i];
    else if (arg === '--run-id' && argv[i + 1]) args.runId = argv[++i];
    else if (arg === '--jobs-root' && argv[i + 1]) args.jobsRoot = argv[++i];
    else if (arg === '--export-root' && argv[i + 1]) args.exportRoot = argv[++i];
    else if (arg === '--folder-name' && argv[i + 1]) args.folderName = argv[++i];
    else if (arg === '--force') args.force = true;
    else if (arg === '--dry-run') args.dryRun = true;
    else fail(`Unknown or incomplete option: ${arg}`);
  }

  return args;
}

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

function rel(filePath) {
  return path.relative(ROOT, filePath);
}

function expandPath(inputPath) {
  if (!inputPath) return inputPath;
  if (inputPath === '~') return process.env.HOME || inputPath;
  if (inputPath.startsWith('~/')) return path.join(process.env.HOME || '~', inputPath.slice(2));
  return inputPath;
}

function readJson(filePath, label) {
  if (!fs.existsSync(filePath)) fail(`${label} not found: ${rel(filePath)}`);
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    fail(`${label} JSON parse failed: ${error.message}`);
  }
}

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

function loadShortsMetadata(slug) {
  const metadataPath = path.join(ROOT, 'docs/video-tests/shorts', slug, 'metadata', `${slug}-shorts-metadata.json`);
  const metadata = readJson(metadataPath, 'Shorts metadata');
  if (!Array.isArray(metadata.shorts) || metadata.shorts.length === 0) {
    fail('Shorts metadata has no shorts');
  }
  for (const short of metadata.shorts) {
    if (!isNonEmptyString(short.short_id)) fail('Shorts metadata item missing short_id');
    if (!isNonEmptyString(titleForShort(short))) fail(`${short.short_id} missing title`);
    if (!isNonEmptyString(short.description)) fail(`${short.short_id} missing description`);
    if (!Array.isArray(short.hashtags) || short.hashtags.length === 0) fail(`${short.short_id} missing hashtags`);
    if (!isNonEmptyString(short.thumbnail_or_cover_text)) fail(`${short.short_id} missing thumbnail_or_cover_text`);
  }
  return metadata;
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

function folderNameFor(args, metadata) {
  return args.folderName
    || metadata.source?.title
    || loadShortsPackageTitle(args.slug)
    || args.slug;
}

function listJobDirs(jobsRoot) {
  if (!fs.existsSync(jobsRoot)) fail(`jobs root not found: ${jobsRoot}`);
  return fs.readdirSync(jobsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => path.join(jobsRoot, entry.name));
}

function newest(paths) {
  return paths
    .map((item) => ({ item, mtimeMs: fs.statSync(item).mtimeMs }))
    .sort((a, b) => b.mtimeMs - a.mtimeMs)[0]?.item || null;
}

function findShortJobDir(allJobDirs, slug, shortId, runId) {
  const matches = allJobDirs.filter((dir) => {
    const base = path.basename(dir);
    return base.startsWith(`job-${slug}-${shortId}-`)
      && (!runId || base.includes(runId));
  });

  if (matches.length === 0) {
    fail(`job folder not found for ${shortId}${runId ? ` with run-id ${runId}` : ''}`);
  }

  if (matches.length > 1) {
    warn(`${shortId} has ${matches.length} matching job folders; using newest`);
  }

  return newest(matches);
}

function findLandscapeJobDir(allJobDirs, slug, runId) {
  const matches = allJobDirs.filter((dir) => {
    const base = path.basename(dir);
    return base.startsWith(`job-${slug}-landscape-`)
      && (!runId || base.includes(runId));
  });
  if (matches.length === 0) fail(`job folder not found for landscape${runId ? ` with run-id ${runId}` : ''}`);
  if (matches.length > 1) warn(`landscape has ${matches.length} matching job folders; using newest`);
  return newest(matches);
}

function walkFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...walkFiles(fullPath));
    else if (entry.isFile()) results.push(fullPath);
  }
  return results;
}

function findRenderedVideo(jobDir, type) {
  const preferred = type === 'shorts'
    ? path.join(jobDir, 'renders', 'shorts-main.mp4')
    : path.join(jobDir, 'renders', 'landscape-main.mp4');
  if (fs.existsSync(preferred)) return preferred;

  const fallbackPreferred = type === 'landscape'
    ? path.join(jobDir, 'renders', 'full-main.mp4')
    : null;
  if (fallbackPreferred && fs.existsSync(fallbackPreferred)) return fallbackPreferred;

  const mp4s = walkFiles(jobDir).filter((filePath) => filePath.toLowerCase().endsWith('.mp4'));
  if (mp4s.length === 0) fail(`rendered .mp4 not found in ${jobDir}`);
  if (mp4s.length > 1) warn(`${path.basename(jobDir)} has ${mp4s.length} .mp4 files; using newest`);
  return newest(mp4s);
}

function writeExportIndex(targetDir, folderName, rows, dryRun, force) {
  const indexPath = path.join(targetDir, 'export-index.md');
  const content = [
    `# Export Index — ${folderName}`,
    '',
    '## Shorts Summary',
    '',
    '| Short | Title | File |',
    '|---|---|---|',
    ...rows.map((row) => `| ${row.shortId} | ${row.title} | ${row.fileName} |`),
    '',
    '---',
    '',
    '## Upload Metadata',
    '',
    ...rows.flatMap((row) => buildShortMetadataSection(row)),
    ''
  ].join('\n');

  if (dryRun) {
    ok(`[dry-run] export-index.md`);
    return;
  }

  if (fs.existsSync(indexPath) && !force) {
    fail(`target already exists: export-index.md\nUse --force to overwrite.`);
  }
  fs.writeFileSync(indexPath, content, 'utf8');
  ok('export-index.md');
}

function buildShortMetadataSection(row) {
  const lines = [
    `### ${row.shortId} — ${row.title}`,
    '',
    `**File:** \`${row.fileName}\``,
    ''
  ];

  if (isNonEmptyString(row.hook)) {
    lines.push(
      '**Hook:**',
      '',
      '```text',
      row.hook.trim(),
      '```',
      ''
    );
  } else {
    lines.push('**Hook:** Yok', '');
  }

  lines.push(
    '**Description:**',
    '',
    '```text',
    row.description.trim(),
    '```',
    '',
    '**Hashtags:**',
    '',
    '```text',
    row.hashtags.join('\n'),
    '```',
    '',
    '**Thumbnail Text:**',
    '',
    '```text',
    row.thumbnailText.trim(),
    '```',
    ''
  );

  return lines;
}

function copyVideo(source, target, dryRun, force) {
  if (dryRun) return;
  if (fs.existsSync(target) && !force) {
    fail(`target already exists: ${path.basename(target)}\nUse --force to overwrite.`);
  }
  fs.copyFileSync(source, target);
}

function exportShorts(args) {
  const metadata = loadShortsMetadata(args.slug);
  ok(`Loaded shorts metadata: ${metadata.shorts.length} shorts`);

  const jobsRoot = path.resolve(expandPath(args.jobsRoot));
  const exportRoot = path.resolve(expandPath(args.exportRoot));
  const folderName = folderNameFor(args, metadata);
  const targetDir = path.join(exportRoot, folderName);

  ok(`Jobs root: ${jobsRoot}`);
  ok(`Export root: ${exportRoot}`);
  ok(`Target folder: ${folderName}`);
  if (args.dryRun) ok('Dry run: no files will be copied');

  const jobDirs = listJobDirs(jobsRoot);
  const plan = [];
  const usedTargets = new Set();

  for (const short of metadata.shorts) {
    const title = titleForShort(short);
    const description = short.description || '';
    const thumbnailText = short.thumbnail_or_cover_text || '';
    if (!isNonEmptyString(description)) warn(`${short.short_id} description is empty`);
    if (!isNonEmptyString(thumbnailText)) warn(`${short.short_id} thumbnail_or_cover_text is empty`);
    const fileName = `${sanitizeFileName(title)}.mp4`;
    if (usedTargets.has(fileName)) fail(`duplicate target file name in export plan: ${fileName}`);
    usedTargets.add(fileName);

    const jobDir = findShortJobDir(jobDirs, args.slug, short.short_id, args.runId);
    const source = findRenderedVideo(jobDir, 'shorts');
    const target = path.join(targetDir, fileName);
    plan.push({
      shortId: short.short_id,
      title,
      fileName,
      description,
      hashtags: Array.isArray(short.hashtags) ? short.hashtags : [],
      thumbnailText,
      hook: short.hook || '',
      source,
      target
    });
  }

  if (!args.dryRun) fs.mkdirSync(targetDir, { recursive: true });

  for (const item of plan) {
    copyVideo(item.source, item.target, args.dryRun, args.force);
    ok(`${item.shortId} -> ${item.fileName}`);
  }

  writeExportIndex(targetDir, folderName, plan, args.dryRun, args.force);
  return { count: plan.length, copied: args.dryRun ? 0 : plan.length, targetDir, folderName, plan };
}

function exportLandscape(args) {
  const metadataPath = path.join(ROOT, 'docs/video-tests/metadata', `${args.slug}-landscape-metadata.json`);
  const metadata = readJson(metadataPath, 'Landscape metadata');
  const title = metadata.selected_title || metadata.job?.title || args.slug;
  if (!isNonEmptyString(title)) fail('Landscape title missing');

  const jobsRoot = path.resolve(expandPath(args.jobsRoot));
  const exportRoot = path.resolve(expandPath(args.exportRoot));
  const folderName = args.folderName || title || args.slug;
  const targetDir = path.join(exportRoot, folderName);
  const jobDir = findLandscapeJobDir(listJobDirs(jobsRoot), args.slug, args.runId);
  const source = findRenderedVideo(jobDir, 'landscape');
  const fileName = `${sanitizeFileName(title)}.mp4`;
  const target = path.join(targetDir, fileName);

  ok(`Jobs root: ${jobsRoot}`);
  ok(`Export root: ${exportRoot}`);
  ok(`Target folder: ${folderName}`);
  if (args.dryRun) ok('Dry run: no files will be copied');
  if (!args.dryRun) fs.mkdirSync(targetDir, { recursive: true });
  copyVideo(source, target, args.dryRun, args.force);
  ok(`landscape -> ${fileName}`);
  writeLandscapeExportIndex(targetDir, folderName, { title, fileName }, args.dryRun, args.force);
  return { count: 1, copied: args.dryRun ? 0 : 1, targetDir, folderName, plan: [{ shortId: 'landscape', title, fileName, source, target }] };
}

function writeLandscapeExportIndex(targetDir, folderName, row, dryRun, force) {
  const indexPath = path.join(targetDir, 'export-index.md');
  const content = [
    `# Export Index - ${folderName}`,
    '',
    '## Landscape',
    '',
    '| Title | File |',
    '|---|---|',
    `| ${row.title} | ${row.fileName} |`,
    ''
  ].join('\n');

  if (dryRun) {
    ok('[dry-run] export-index.md');
    return;
  }

  if (fs.existsSync(indexPath) && !force) {
    fail(`target already exists: export-index.md\nUse --force to overwrite.`);
  }
  fs.writeFileSync(indexPath, content, 'utf8');
  ok('export-index.md');
}

const args = parseArgs(process.argv.slice(2));

if (!args.slug) fail('Missing required --slug <slug>');
if (!['shorts', 'landscape'].includes(args.type)) fail('--type must be one of: shorts, landscape');
if (!args.exportRoot) fail('Missing --export-root <path> or DERIN_OKUMA_EXPORT_ROOT env var');
if (args.type === 'shorts' && !args.runId) warn('--run-id is recommended for batch exports');

console.log(`Video Export - ${args.slug}`);
console.log('');

const result = args.type === 'shorts' ? exportShorts(args) : exportLandscape(args);

console.log('');
console.log('Done.');
console.log(`Found videos: ${result.count}`);
console.log(`Copied videos: ${result.copied}`);
console.log(`Target folder: ${result.targetDir}`);
