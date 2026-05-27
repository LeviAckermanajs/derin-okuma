#!/usr/bin/env node
// restore-shorts-from-batch.mjs — reconstruct filled shorts package from batch load input

import fs           from 'fs';
import path         from 'path';
import process      from 'process';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT      = path.resolve(__dirname, '..');

const SHORTS_DIR  = path.join(ROOT, 'docs', 'video-tests', 'shorts');
const BATCHES_DIR = path.join(ROOT, 'docs', 'video-tests', 'batches');
const BACKUPS_DIR = path.join(ROOT, 'docs', 'video-tests', 'backups');

// ── CLI ───────────────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const args = { slug: null, runId: null, dryRun: false, write: false, repair: false };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if      (arg === '--slug'   && argv[i + 1]) args.slug   = argv[++i];
    else if (arg === '--run-id' && argv[i + 1]) args.runId  = argv[++i];
    else if (arg === '--dry-run')                args.dryRun = true;
    else if (arg === '--write')                  args.write  = true;
    else if (arg === '--repair')                 args.repair = true;
    else fail(`Unknown or incomplete option: ${arg}`);
  }
  return args;
}

// ── Logging ───────────────────────────────────────────────────────────────────

function fail(message) { console.error(`[FAIL] ${message}`); process.exit(1); }
function ok(message)   { console.log(`[OK] ${message}`); }
function info(message) { console.log(`[INFO] ${message}`); }
function warn(message) { console.log(`[WARN] ${message}`); }
function plan(message) { console.log(`[PLAN] ${message}`); }

function isNonEmptyString(v) { return typeof v === 'string' && v.trim().length > 0; }
function isNonEmptyArray(v)  { return Array.isArray(v) && v.length > 0; }

// ── Batch file parser (no eval — JSON extraction via bracket matching) ────────

function extractJsonObject(text, fromIndex) {
  let depth = 0;
  let start = -1;
  for (let i = fromIndex; i < text.length; i++) {
    const ch = text[i];
    if (ch === '{') {
      if (start === -1) start = i;
      depth++;
    } else if (ch === '}') {
      depth--;
      if (depth === 0 && start !== -1) {
        return text.slice(start, i + 1);
      }
    }
  }
  return null;
}

function parseBatchFile(batchPath) {
  const text = fs.readFileSync(batchPath, 'utf8');

  // Find each named const: const short001RawInput = { ... }
  const varPattern = /const\s+short(\d+)RawInput\s*=/g;
  const items = [];
  let match;

  while ((match = varPattern.exec(text)) !== null) {
    const afterEquals = match.index + match[0].length;
    const jsonStr = extractJsonObject(text, afterEquals);
    if (!jsonStr) fail(`Could not extract object for short${match[1]}RawInput at offset ${match.index}`);

    let obj;
    try {
      obj = JSON.parse(jsonStr);
    } catch (err) {
      fail(`JSON.parse failed for short${match[1]}RawInput: ${err.message}`);
    }
    items.push(obj);
  }

  return items;
}

// ── Validation ────────────────────────────────────────────────────────────────

function validateItems(items) {
  if (items.length !== 6) fail(`Expected exactly 6 shorts, found ${items.length}`);

  for (const item of items) {
    const id = item.metadata?.short_id || '(unknown)';

    if (item.metadata?.content_generation_status !== 'filled')
      fail(`${id}: content_generation_status is not "filled" (got "${item.metadata?.content_generation_status}")`);

    if (!isNonEmptyString(item.job?.title))
      fail(`${id}: missing job.title`);

    if (!Array.isArray(item.scenes) || item.scenes.length === 0)
      fail(`${id}: scenes is empty or missing`);

    if (item.render_preferences?.render_mode !== 'shorts')
      fail(`${id}: render_mode is not "shorts"`);

    if (item.audio_strategy?.mode !== 'single_track')
      fail(`${id}: audio_strategy.mode is not "single_track"`);

    ok(`validated ${id}  title="${item.job.title}"  scenes=${item.scenes.length}`);
  }
}

// ── Metadata field helpers ────────────────────────────────────────────────────

const DEFAULT_HASHTAGS = ['#derinokuma', '#shorts', '#tefekkür', '#iman'];

function resolveHashtags(item) {
  if (isNonEmptyArray(item.publish?.youtube?.hashtags)) return item.publish.youtube.hashtags;
  if (isNonEmptyArray(item.hashtags))                   return item.hashtags;
  return DEFAULT_HASHTAGS;
}

// Returns a description that ends with hashtags.join(' ') (required by validator).
function resolveDescription(item, hashtags) {
  const hashStr = hashtags.join(' ');
  const base = item.publish?.youtube?.description
    || item.job?.description
    || item.description
    || item.job?.title
    || '';
  if (isNonEmptyString(base) && base.trim().endsWith(hashStr)) return base.trim();
  return `${base.trim()} ${hashStr}`.trim();
}

// ── File generators ───────────────────────────────────────────────────────────

function generateLoadInputJs(item, postTitle, testDay) {
  const shortId = item.metadata.short_id;
  const title   = item.job.title;
  const runId   = item.metadata.batch_run_id || '';

  const rawInput = {
    input_version:        item.input_version,
    input_type:           item.input_type,
    runtime:              item.runtime,
    job:                  item.job,
    reuse_existing_audio: item.reuse_existing_audio,
    reuse_existing_video: item.reuse_existing_video,
    visual_mode:          item.visual_mode,
    audio_strategy:       item.audio_strategy,
    render_preferences:   item.render_preferences,
    scenes:               item.scenes,
    metadata:             item.metadata,
    ...(item.publish ? { publish: item.publish } : {}),
  };

  // Use JSON.stringify so all Turkish chars, apostrophes, and newlines are
  // safely escaped. JSON object literals are valid JS, so new Function() works.
  const runIdLabel = runId ? ` — ${runId}` : '';
  return [
    `// Derin Okuma — ${postTitle} Shorts`,
    `// Short: ${shortId} — ${title}`,
    `// ${testDay}${runIdLabel} — filled`,
    ``,
    `const rawInput = ${JSON.stringify(rawInput, null, 2)};`,
    ``,
    `return [{ json: { raw_input: rawInput } }];`,
    ``,
  ].join('\n');
}

function buildPackageShorts(items) {
  return items.map(item => {
    const hashtags   = resolveHashtags(item);
    const description = resolveDescription(item, hashtags);
    return {
      short_id:               item.metadata.short_id,
      hook:                   item.job.description || '',
      title:                  item.job.title,
      description,
      hashtags,
      thumbnail_or_cover_text: '',
      scenes: item.scenes.map(s => ({
        scene_id:    s.scene_id,
        narration:   s.narration,
        visual_note: s.visual_note,
        keywords:    s.keywords || [],
      })),
    };
  });
}

function buildMetadataShorts(items) {
  return items.map(item => {
    const hashtags    = resolveHashtags(item);
    const description = resolveDescription(item, hashtags);
    if (!isNonEmptyString(item.job?.description)) {
      warn(`${item.metadata?.short_id}: job.description missing — using title as description base`);
    }
    return {
      short_id:               item.metadata.short_id,
      hook:                   item.job.description || '',
      selected_title:         item.job.title,
      description,
      hashtags,
      thumbnail_or_cover_text: '',
    };
  });
}

// ── Backup helper ─────────────────────────────────────────────────────────────

function backupExistingFiles(slug, filePaths) {
  const timestamp  = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const backupRoot = path.join(BACKUPS_DIR, slug, timestamp);
  fs.mkdirSync(backupRoot, { recursive: true });

  for (const src of filePaths) {
    if (!fs.existsSync(src)) continue;
    const rel  = path.relative(path.join(ROOT, 'docs', 'video-tests', 'shorts', slug), src);
    const dest = path.join(backupRoot, rel);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
    info(`  backed up ${path.relative(ROOT, src)}`);
  }

  ok(`backup_dir=${path.relative(ROOT, backupRoot)}`);
}

// ── Main ──────────────────────────────────────────────────────────────────────

const args = parseArgs(process.argv.slice(2));

if (!args.slug)  fail('Missing required --slug <slug>');
if (!args.runId) fail('Missing required --run-id <run-id>');

if (!args.dryRun && !args.write) {
  fail('Specify --dry-run to preview or --write (optionally with --repair) to apply changes.');
}
if (args.repair) {
  info('restore_target=shorts_only');
  warn('landscape_still_scaffold=true (landscape files are not touched by this script)');
}

console.log('Shorts Package Recovery from Batch');
console.log('');

const batchFile   = path.join(BATCHES_DIR, `${args.slug}-shorts-batch-load-input.js`);
const packageDir  = path.join(SHORTS_DIR, args.slug);
const loadInputDir = path.join(packageDir, 'load-inputs');
const metadataDir  = path.join(packageDir, 'metadata');
const packageFile  = path.join(packageDir, `${args.slug}-shorts-package.json`);
const metadataFile = path.join(metadataDir, `${args.slug}-shorts-metadata.json`);

if (!fs.existsSync(batchFile)) fail(`Batch file not found: ${batchFile}`);
ok(`batch_file=${path.relative(ROOT, batchFile)}`);

// ── Parse batch ───────────────────────────────────────────────────────────────

info('Parsing batch file (no eval — bracket-match JSON extraction)…');
const items = parseBatchFile(batchFile);
ok(`items_extracted=${items.length}`);
console.log('');

// ── Validate ──────────────────────────────────────────────────────────────────

info('Validating items…');
validateItems(items);
ok('all_items_valid=true');
console.log('');

// ── Read existing package for source metadata ─────────────────────────────────

let existingPackage = null;
if (fs.existsSync(packageFile)) {
  try {
    existingPackage = JSON.parse(fs.readFileSync(packageFile, 'utf8'));
  } catch { /* handled below */ }
}

const postTitle = existingPackage?.source?.title || args.slug;
const testDay   = items[0].metadata.test_day || existingPackage?.test_day || 'day-31';

// ── Build output content ──────────────────────────────────────────────────────

const newPackageJson = {
  ...(existingPackage || {
    source: {
      blog_post:    args.slug,
      title:        postTitle,
      source_files: [],
    },
  }),
  test_day:                   testDay,
  video_type:                 'shorts_package',
  content_generation_status:  'filled',
  shorts:                     buildPackageShorts(items),
};

const newMetadataJson = {
  video_type:                'shorts',
  source:                    args.slug,
  test_day:                  testDay,
  content_generation_status: 'filled',
  shorts:                    buildMetadataShorts(items),
};

const loadInputFiles = items.map(item => ({
  dest:    path.join(loadInputDir, `${item.metadata.short_id}-load-input.js`),
  content: generateLoadInputJs(item, postTitle, testDay),
  shortId: item.metadata.short_id,
}));

// ── Print targets ─────────────────────────────────────────────────────────────

console.log('Target files:');
plan(`  ${path.relative(ROOT, packageFile)}`);
plan(`  ${path.relative(ROOT, metadataFile)}`);
for (const f of loadInputFiles) {
  plan(`  ${path.relative(ROOT, f.dest)}`);
}
console.log('');

// ── Dry run ───────────────────────────────────────────────────────────────────

if (args.dryRun) {
  console.log('--- package.json preview (first short) ---');
  console.log(JSON.stringify({ ...newPackageJson, shorts: [newPackageJson.shorts[0]] }, null, 2));
  console.log('');
  console.log('--- load-input preview: short-001 ---');
  console.log(loadInputFiles[0].content.slice(0, 600) + '\n…');
  console.log('');
  info('dry_run=true — no files written');
  console.log('');
  console.log('Done. Run with --write to apply.');
  process.exit(0);
}

// ── Write ─────────────────────────────────────────────────────────────────────

// Backup first
info('Backing up existing files…');
const existingToBackup = [packageFile, metadataFile, ...loadInputFiles.map(f => f.dest)];
backupExistingFiles(args.slug, existingToBackup);
console.log('');

// Write package.json
fs.mkdirSync(packageDir, { recursive: true });
fs.writeFileSync(packageFile, JSON.stringify(newPackageJson, null, 2) + '\n', 'utf8');
ok(`written ${path.relative(ROOT, packageFile)}`);

// Write metadata.json
fs.mkdirSync(metadataDir, { recursive: true });
fs.writeFileSync(metadataFile, JSON.stringify(newMetadataJson, null, 2) + '\n', 'utf8');
ok(`written ${path.relative(ROOT, metadataFile)}`);

// Write load-input files
fs.mkdirSync(loadInputDir, { recursive: true });
for (const f of loadInputFiles) {
  fs.writeFileSync(f.dest, f.content, 'utf8');
  ok(`written ${f.shortId}-load-input.js`);
}

console.log('');
ok('all_files_written=true');

// ── Post-write validation ─────────────────────────────────────────────────────

console.log('');
info('Running video:validate --type shorts…');
warn('landscape_still_scaffold=true');
info('restore_target=shorts_only');
const result = spawnSync(
  process.execPath,
  [path.join(ROOT, 'scripts', 'validate-video-package.mjs'), '--slug', args.slug, '--type', 'shorts', '--report'],
  { cwd: ROOT, stdio: 'inherit' }
);

if (result.status !== 0) {
  warn('video:validate exited non-zero — review output above');
} else {
  ok('video:validate passed');
}

console.log('');
console.log('Done.');
