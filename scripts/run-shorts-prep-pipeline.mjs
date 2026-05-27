#!/usr/bin/env node
// run-shorts-prep-pipeline.mjs — consolidates video:prep + video:validate + video:batch
//
// Usage:
//   npm run video:shorts:pipeline -- --title "..." --day 31 --run-id <id>
//
// Flags:
//   --force                 Force-overwrite the batch output only (prep is never forced by default).
//   --force-prep            Force video:prep to regenerate scaffold files.
//                           If any package file is already filled, also requires --confirm-overwrite-filled.
//   --confirm-overwrite-filled  Required together with --force-prep when filled files exist.
//                               Acknowledges that previously rendered/uploaded content may be overwritten.

import { spawnSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// ─── Slug logic — mirrors prepare-video-package.mjs exactly ─────────────────

function toSlug(title) {
  const map = { ç:'c', Ç:'c', ğ:'g', Ğ:'g', ı:'i', İ:'i', ö:'o', Ö:'o', ş:'s', Ş:'s', ü:'u', Ü:'u' };
  return title
    .split('').map(c => map[c] ?? c).join('')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// ─── CLI args ────────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const args = {
    title: null, day: null, runId: null,
    force: false, forcePrep: false, confirmOverwriteFilled: false,
  };
  let i = 0;
  while (i < argv.length) {
    const a = argv[i];
    if      (a === '--title'                   && argv[i + 1]) { args.title = argv[++i]; }
    else if (a === '--day'                     && argv[i + 1]) { args.day   = parseInt(argv[++i], 10); }
    else if (a === '--run-id'                  && argv[i + 1]) { args.runId = argv[++i]; }
    else if (a === '--force')                  { args.force = true; }
    else if (a === '--force-prep')             { args.forcePrep = true; }
    else if (a === '--confirm-overwrite-filled') { args.confirmOverwriteFilled = true; }
    i++;
  }
  return args;
}

const args = parseArgs(process.argv.slice(2));

if (!args.title) {
  console.error('Error: --title is required.');
  console.error('Usage: npm run video:shorts:pipeline -- --title "..." --day 31 --run-id day31-export-wait-a');
  process.exit(1);
}
if (!args.day) {
  console.error('Error: --day is required.');
  process.exit(1);
}
if (!args.runId) {
  console.error('Error: --run-id is required.');
  process.exit(1);
}

const slug   = toSlug(args.title);
const dayTag = `day-${String(args.day).padStart(2, '0')}`;

// ─── Paths ───────────────────────────────────────────────────────────────────

const SCENE_BLOG_VIDEO_ROOT = process.env.SCENE_BLOG_VIDEO_ROOT ?? '/home/muhammet/projects/scene-blog-video';

function p(...parts) { return path.join(ROOT, ...parts); }
function rel(fp)     { return path.relative(ROOT, fp); }

const promptPath          = rel(p('docs/video-tests/prompts',  `${slug}-fill-video-package-prompt.md`));
const metadataPath        = rel(p('docs/video-tests/metadata', `${slug}-landscape-metadata.json`));
const batchLoadInputPath  = rel(p('docs/video-tests/batches',  `${slug}-shorts-batch-load-input.js`));
const expectedExportFolder = path.join(SCENE_BLOG_VIDEO_ROOT, 'output', 'jobs', `job-${slug}-short-*-${args.runId}`);

const reportsDir = p('docs/video-tests/reports');
const statusPath = path.join(reportsDir, `${slug}-shorts-pipeline-status.json`);

// ─── Status file helpers ─────────────────────────────────────────────────────

const pipelineStatus = {
  slug,
  title:   args.title,
  day:     args.day,
  dayTag,
  runId:   args.runId,
  timestamp: new Date().toISOString(),
  status:  'in_progress',
  failedCommand: null,
  paths: {
    promptPath,
    metadataPath,
    batchLoadInputPath,
    expectedExportFolder,
  }
};

function writeStatus() {
  fs.mkdirSync(reportsDir, { recursive: true });
  fs.writeFileSync(statusPath, JSON.stringify(pipelineStatus, null, 2), 'utf8');
}

// ─── Step runner ─────────────────────────────────────────────────────────────

function runStep(label, cmdArgs) {
  const full = ['node', ...cmdArgs].join(' ');
  console.log(`\n[STEP] ${label}`);
  console.log(`  $ node ${cmdArgs.join(' ')}`);

  const result = spawnSync('node', cmdArgs, {
    cwd:   ROOT,
    stdio: 'inherit',
    shell: false,
  });

  if (result.status !== 0) {
    console.error(`\n[FAIL] Command failed (exit ${result.status}): ${full}`);
    pipelineStatus.status        = 'failed';
    pipelineStatus.failedCommand = full;
    writeStatus();
    return false;
  }
  return true;
}

// ─── Filled-package detection ─────────────────────────────────────────────────
// Returns relative paths of any package files whose content_generation_status is "filled".

function detectFilledPackages(slug) {
  const candidates = [
    p('docs/video-tests/shorts', slug, `${slug}-shorts-package.json`),
    p('docs/video-tests/shorts', slug, 'metadata', `${slug}-shorts-metadata.json`),
    p('docs/video-tests/inputs', `${slug}-landscape-full-video.json`),
  ];

  const filled = [];
  for (const filePath of candidates) {
    if (!fs.existsSync(filePath)) continue;
    try {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      if (data.content_generation_status === 'filled') filled.push(rel(filePath));
    } catch {
      // unparseable → not treated as filled
    }
  }
  return filled;
}

// ─── Pipeline ────────────────────────────────────────────────────────────────

console.log('\nDerin Okuma — Shorts Prep Pipeline');
console.log(`  Title      : ${args.title}`);
console.log(`  Slug       : ${slug}`);
console.log(`  Day        : ${dayTag}`);
console.log(`  Run ID     : ${args.runId}`);
console.log(`  force-prep : ${args.forcePrep}`);

writeStatus();

// 1. video:prep — guarded against overwriting filled packages
const filledFiles = detectFilledPackages(slug);
const hasFilledPackage = filledFiles.length > 0;

if (hasFilledPackage) {
  console.log('\n[OK] existing_filled_package=true');
  filledFiles.forEach(f => console.log(`  filled: ${f}`));
}

if (hasFilledPackage && args.forcePrep && !args.confirmOverwriteFilled) {
  console.error('\n[FAIL] --force-prep was passed but filled package files exist.');
  console.error('       These files have content_generation_status="filled" and may have been rendered or uploaded:');
  filledFiles.forEach(f => console.error(`         ${f}`));
  console.error('\n       If you are certain you want to overwrite them, re-run with both flags:');
  console.error('         --force-prep --confirm-overwrite-filled');
  pipelineStatus.status        = 'failed';
  pipelineStatus.failedCommand = '--force-prep without --confirm-overwrite-filled';
  writeStatus();
  process.exit(1);
}

if (hasFilledPackage && !args.forcePrep) {
  console.log('[SKIP] video_prep_not_needed=true');
  console.log('\n[STEP] video:prep');
  console.log('  (skipped — existing filled package detected)');
} else {
  const prepArgs = ['scripts/prepare-video-package.mjs', '--title', args.title, '--day', String(args.day)];
  if (args.forcePrep) prepArgs.push('--force');
  if (!runStep('video:prep', prepArgs)) process.exit(1);
}

// 2. video:validate
const validateArgs = ['scripts/validate-video-package.mjs', '--slug', slug, '--report'];
if (!runStep('video:validate', validateArgs)) process.exit(1);

// 3. video:batch (always --force so repeated runs with the same run-id overwrite cleanly)
const batchArgs = ['scripts/build-video-batch.mjs', '--slug', slug, '--type', 'shorts', '--run-id', args.runId, '--force'];
if (!runStep('video:batch', batchArgs)) process.exit(1);

// ─── Summary ─────────────────────────────────────────────────────────────────

pipelineStatus.status = 'success';
writeStatus();

console.log('\n────────────────────────────────────────────────────');
console.log('Pipeline complete.');
console.log('');
console.log(`  Prompt path       : ${promptPath}`);
console.log(`  Metadata path     : ${metadataPath}`);
console.log(`  Batch load input  : ${batchLoadInputPath}`);
console.log(`  Expected export   : ${expectedExportFolder}`);
console.log(`  Status file       : ${rel(statusPath)}`);
console.log('────────────────────────────────────────────────────\n');
