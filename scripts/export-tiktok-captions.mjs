#!/usr/bin/env node
// export-tiktok-captions.mjs — export copy-ready caption files from tiktok-upload-plan.json

import fs      from 'fs';
import path    from 'path';
import process from 'process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT      = path.resolve(__dirname, '..');

// ── CLI ───────────────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const args = { plan: null };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--plan' && argv[i + 1]) args.plan = argv[++i];
    else fail(`Unknown or incomplete option: ${arg}`);
  }
  return args;
}

// ── Logging ───────────────────────────────────────────────────────────────────

function fail(message) { console.error(`[FAIL] ${message}`); process.exit(1); }
function ok(message)   { console.log(`[OK] ${message}`); }
function info(message) { console.log(`[INFO] ${message}`); }

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function readJson(filePath, label) {
  if (!fs.existsSync(filePath)) fail(`${label} not found: ${filePath}`);
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (err) {
    fail(`${label} parse failed: ${err.message}`);
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────

const args = parseArgs(process.argv.slice(2));

if (!args.plan) fail('Missing required --plan <path-to-tiktok-upload-plan.json>');

console.log('TikTok Caption Exporter');
console.log('');

const planPath  = path.resolve(args.plan);
const plan      = readJson(planPath, 'tiktok-upload-plan.json');
const planDir   = path.dirname(planPath);
const captionDir = path.join(planDir, 'tiktok-captions');
const copyListPath = path.join(planDir, 'tiktok-caption-copy-list.md');

if (!Array.isArray(plan.items) || plan.items.length === 0) {
  fail('tiktok-upload-plan.json has no items array');
}

ok(`plan_items=${plan.items.length}`);

// Validate all items have required fields
for (const item of plan.items) {
  const id = item.short_id || '(unknown)';
  if (!isNonEmptyString(item.short_id)) fail(`An item is missing short_id`);
  if (!isNonEmptyString(item.caption))  fail(`${id}: missing caption`);
}

// Create output folder
fs.mkdirSync(captionDir, { recursive: true });
ok(`caption_dir=${path.relative(planDir, captionDir)}/`);
console.log('');

// Write per-item txt files and collect markdown entries
const mdLines = [
  `# TikTok Caption Copy List`,
  ``,
  `Plan: \`${path.basename(planPath)}\`  `,
  `Generated: ${new Date().toISOString()}`,
  ``,
  `---`,
  ``,
];

for (const item of plan.items) {
  const txtPath    = path.join(captionDir, `${item.short_id}.txt`);
  const videoName  = isNonEmptyString(item.video_path)
    ? path.basename(item.video_path)
    : '(unknown)';

  // Plain caption file — exactly what gets pasted into TikTok
  fs.writeFileSync(txtPath, item.caption, 'utf8');
  ok(`written ${item.short_id}.txt  (${item.caption.length} chars)`);

  // Markdown entry
  const sourceLabel = item.caption_source || 'unknown';
  mdLines.push(
    `## ${item.short_id}`,
    ``,
    `**Video:** \`${videoName}\`  `,
    `**Caption source:** \`${sourceLabel}\``,
    ``,
    `\`\`\``,
    item.caption,
    `\`\`\``,
    ``,
    `---`,
    ``,
  );
}

// Write markdown copy list
fs.writeFileSync(copyListPath, mdLines.join('\n'), 'utf8');
ok(`written tiktok-caption-copy-list.md`);

console.log('');
info(`Caption files: ${captionDir}`);
info(`Copy list:     ${copyListPath}`);
console.log('');
console.log('Done.');
