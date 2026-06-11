#!/usr/bin/env node
// run-shorts-fill-with-claude.mjs — runs Claude fill prompt then re-validates and batches
// Usage: npm run video:shorts:fill-with-claude -- --slug <slug> --run-id <run-id>

import { spawnSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { resolveClaude } from './resolve-claude-bin.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// ─── CLI args ────────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const args = { slug: null, runId: null };
  let i = 0;
  while (i < argv.length) {
    const a = argv[i];
    if      (a === '--slug'   && argv[i + 1]) { args.slug  = argv[++i]; }
    else if (a === '--run-id' && argv[i + 1]) { args.runId = argv[++i]; }
    i++;
  }
  return args;
}

const args = parseArgs(process.argv.slice(2));

if (!args.slug) {
  console.error('Error: --slug is required.');
  console.error('Usage: npm run video:shorts:fill-with-claude -- --slug <slug> --run-id <run-id>');
  process.exit(1);
}
if (!args.runId) {
  console.error('Error: --run-id is required.');
  process.exit(1);
}

// ─── Paths ───────────────────────────────────────────────────────────────────

function p(...parts) { return path.join(ROOT, ...parts); }
function rel(fp)     { return path.relative(ROOT, fp); }

const statusPath = p('docs/video-tests/reports', `${args.slug}-shorts-pipeline-status.json`);

// ─── Read status JSON ────────────────────────────────────────────────────────

if (!fs.existsSync(statusPath)) {
  console.error(`[FAIL] Status file not found: ${rel(statusPath)}`);
  console.error('Run npm run video:shorts:pipeline first.');
  process.exit(1);
}

let pipelineStatus;
try {
  pipelineStatus = JSON.parse(fs.readFileSync(statusPath, 'utf8'));
} catch (err) {
  console.error(`[FAIL] Could not parse status JSON: ${err.message}`);
  process.exit(1);
}

const promptRelPath = pipelineStatus?.paths?.promptPath;
if (!promptRelPath) {
  console.error('[FAIL] Status JSON is missing paths.promptPath.');
  process.exit(1);
}

const promptAbsPath = path.resolve(ROOT, promptRelPath);

if (!fs.existsSync(promptAbsPath)) {
  console.error(`[FAIL] Prompt file not found: ${promptRelPath}`);
  process.exit(1);
}

// ─── Resolve Claude executable ────────────────────────────────────────────────

let claudeBin;
try {
  claudeBin = resolveClaude();
} catch (err) {
  console.error(`[FAIL] ${err.message}`);
  process.exit(1);
}

// ─── Startup info ─────────────────────────────────────────────────────────────

console.log('\nDerin Okuma — Shorts Fill with Claude');
console.log(`  Slug       : ${args.slug}`);
console.log(`  Run ID     : ${args.runId}`);
console.log(`  Status file: ${rel(statusPath)}`);
console.log('');
console.log(`[INFO] prompt_path=${promptRelPath}`);

// ─── Status helpers ───────────────────────────────────────────────────────────

function writeStatus(updates) {
  Object.assign(pipelineStatus, { fillTimestamp: new Date().toISOString(), ...updates });
  fs.writeFileSync(statusPath, JSON.stringify(pipelineStatus, null, 2), 'utf8');
}

function failStep(label, command) {
  console.error(`\n[FAIL] ${label} failed.`);
  console.error(`[FAIL] Command: ${command}`);
  writeStatus({ status: 'failed', failedCommand: command });
  process.exit(1);
}

// ─── Node step runner ─────────────────────────────────────────────────────────

function runNodeStep(label, scriptArgs) {
  const fullCmd = ['node', ...scriptArgs].join(' ');
  console.log(`\n[STEP] ${label}`);
  console.log(`  $ ${fullCmd}`);

  const result = spawnSync('node', scriptArgs, {
    cwd:   ROOT,
    stdio: 'inherit',
    shell: false,
  });

  if (result.status !== 0) failStep(label, fullCmd);
}

// ─── Step 1: Claude CLI ───────────────────────────────────────────────────────

console.log('\n[STEP] Claude fill');
console.log(`  $ ${claudeBin} --permission-mode acceptEdits -p <${promptRelPath}>`);

const promptContent = fs.readFileSync(promptAbsPath, 'utf8');
const claudeResult = spawnSync(claudeBin, [
  '--permission-mode', 'acceptEdits', '-p', promptContent,
], {
  cwd:   ROOT,
  stdio: 'inherit',
  shell: false,
});

if (claudeResult.error) {
  console.error(`\n[FAIL] Could not start Claude CLI: ${claudeResult.error.message}`);
  console.error('Make sure the claude command is installed and on PATH.');
  writeStatus({ status: 'failed', failedCommand: claudeBin });
  process.exit(1);
}

if (claudeResult.status !== 0) {
  failStep('Claude fill', claudeBin);
}

// ─── Step 2: normalize shorts metadata hashtags ───────────────────────────────

runNodeStep('normalize hashtags', [
  'scripts/normalize-shorts-metadata-hashtags.mjs',
  '--slug', args.slug,
]);

// ─── Step 2b: normalize shorts package (sync hashtags + thumbnail_or_cover_text) ─

runNodeStep('normalize package', [
  'scripts/normalize-shorts-package.mjs',
  '--slug', args.slug,
]);

// ─── Step 2c: normalize video package status ─────────────────────────────────

runNodeStep('normalize package status', [
  'scripts/normalize-video-package-status.mjs',
  '--slug', args.slug,
]);

// ─── Step 3: video:validate ───────────────────────────────────────────────────

runNodeStep('video:validate', [
  'scripts/validate-video-package.mjs',
  '--slug', args.slug,
  '--report',
]);

// ─── Step 4: video:batch ──────────────────────────────────────────────────────

runNodeStep('video:batch', [
  'scripts/build-video-batch.mjs',
  '--slug',   args.slug,
  '--type',   'shorts',
  '--run-id', args.runId,
  '--force',
]);

// ─── Done ─────────────────────────────────────────────────────────────────────

writeStatus({ status: 'success', failedCommand: null });

console.log('\n────────────────────────────────────────────────────');
console.log('Fill pipeline complete.');
console.log(`  Status      : success`);
console.log(`  Status file : ${rel(statusPath)}`);
console.log('────────────────────────────────────────────────────\n');
