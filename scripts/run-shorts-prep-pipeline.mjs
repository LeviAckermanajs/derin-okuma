#!/usr/bin/env node
// run-shorts-prep-pipeline.mjs — consolidates video:prep + video:validate + video:batch
// Usage: npm run video:shorts:pipeline -- --title "..." --day 31 --run-id day31-export-wait-a [--force]

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
  const args = { title: null, day: null, runId: null, force: false };
  let i = 0;
  while (i < argv.length) {
    const a = argv[i];
    if      (a === '--title'  && argv[i + 1]) { args.title = argv[++i]; }
    else if (a === '--day'    && argv[i + 1]) { args.day   = parseInt(argv[++i], 10); }
    else if (a === '--run-id' && argv[i + 1]) { args.runId = argv[++i]; }
    else if (a === '--force') { args.force = true; }
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

const reportsDir  = p('docs/video-tests/reports');
const statusPath  = path.join(reportsDir, `${slug}-shorts-pipeline-status.json`);

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

// ─── Pipeline ────────────────────────────────────────────────────────────────

console.log('\nDerin Okuma — Shorts Prep Pipeline');
console.log(`  Title  : ${args.title}`);
console.log(`  Slug   : ${slug}`);
console.log(`  Day    : ${dayTag}`);
console.log(`  Run ID : ${args.runId}`);
console.log(`  Force  : ${args.force}`);

writeStatus();

// 1. video:prep
const prepArgs = ['scripts/prepare-video-package.mjs', '--title', args.title, '--day', String(args.day)];
if (args.force) prepArgs.push('--force');

if (!runStep('video:prep', prepArgs)) process.exit(1);

// 2. video:validate
const validateArgs = ['scripts/validate-video-package.mjs', '--slug', slug, '--report'];

if (!runStep('video:validate', validateArgs)) process.exit(1);

// 3. video:batch
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
