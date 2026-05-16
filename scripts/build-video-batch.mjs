#!/usr/bin/env node
// build-video-batch.mjs - combine Shorts Load Input JS files into one n8n Code node file

import fs from 'fs';
import path from 'path';
import process from 'process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

function parseArgs(argv) {
  const args = { slug: null, type: 'shorts', limit: null, force: false, runId: null };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--slug' && argv[i + 1]) args.slug = argv[++i];
    else if (arg === '--type' && argv[i + 1]) args.type = argv[++i];
    else if (arg === '--limit' && argv[i + 1]) args.limit = Number.parseInt(argv[++i], 10);
    else if (arg === '--run-id' && argv[i + 1]) args.runId = argv[++i];
    else if (arg === '--force') args.force = true;
    else {
      fail(`Unknown or incomplete option: ${arg}`);
    }
  }
  return args;
}

function fail(message) {
  console.error(`[FAIL] ${message}`);
  process.exit(1);
}

function rel(filePath) {
  return path.relative(ROOT, filePath);
}

function p(...parts) {
  return path.join(ROOT, ...parts);
}

function ok(message) {
  console.log(`[OK] ${message}`);
}

function readText(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function checkSyntax(content, label) {
  try {
    new Function(content);
    ok(`${label} syntax`);
  } catch (error) {
    fail(`${label} JS syntax failed: ${error.message}`);
  }
}

function jsContains(content, key, value) {
  const pattern = new RegExp(`${key}\\s*:\\s*['"]${value}['"]`);
  return pattern.test(content);
}

function validateShortLoadInput(filePath) {
  const content = readText(filePath);
  const label = path.basename(filePath);
  checkSyntax(content, label);
  if (!jsContains(content, 'render_mode', 'shorts')) fail(`${label} missing render_mode: 'shorts'`);
  if (!jsContains(content, 'mode', 'shorts')) fail(`${label} missing mode: 'shorts'`);
  if (!/single_track/.test(content)) fail(`${label} missing single_track`);
  if (/scenes\s*:\s*\[\s*\]/.test(content)) fail(`${label} still has empty scenes: []`);
  if (!/content_generation_status\s*:\s*['"]filled['"]/.test(content)) {
    fail(`${label} missing content_generation_status: 'filled'`);
  }
  return content;
}

function listShortLoadInputs(slug) {
  const dir = p('docs/video-tests/shorts', slug, 'load-inputs');
  if (!fs.existsSync(dir)) fail(`Shorts load input directory not found: ${rel(dir)}`);
  return fs.readdirSync(dir)
    .filter((file) => /^short-\d{3}-load-input\.js$/.test(file))
    .sort((a, b) => Number(a.match(/\d{3}/)[0]) - Number(b.match(/\d{3}/)[0]))
    .map((file) => path.join(dir, file));
}

const RUN_ID_PATTERN = /^[a-zA-Z0-9_-]+$/;

function applyRunId(objectSource, runId, label) {
  const replaced = objectSource.replace(
    /(job_id_hint\s*:\s*['"])([^'"]+)(['"])/,
    (_, prefix, value, suffix) => `${prefix}${value}-${runId}${suffix}`
  );
  if (replaced === objectSource) {
    fail(`${label}: --run-id provided but no job_id_hint field found to suffix`);
  }
  return replaced.replace(
    /(metadata\s*:\s*\{)/,
    `$1\n    batch_run_id: '${runId}',`
  );
}

function extractRawInputObject(content, label) {
  const marker = 'const rawInput =';
  const start = content.indexOf(marker);
  if (start === -1) fail(`${label} missing "const rawInput ="`);
  const afterMarker = start + marker.length;
  const returnIndex = content.indexOf('\nreturn ', afterMarker);
  if (returnIndex === -1) fail(`${label} missing return statement after rawInput`);
  const rawObject = content.slice(afterMarker, returnIndex).trim();
  if (!rawObject.startsWith('{')) fail(`${label} rawInput object extraction failed`);
  if (!rawObject.endsWith(';')) fail(`${label} rawInput object must end with semicolon`);
  return rawObject;
}

function varNameFor(filePath) {
  const match = path.basename(filePath).match(/short-(\d{3})-load-input\.js$/);
  if (!match) fail(`Unexpected short file name: ${path.basename(filePath)}`);
  return `short${match[1]}RawInput`;
}

function shortIdFor(filePath) {
  const match = path.basename(filePath).match(/(short-\d{3})-load-input\.js$/);
  if (!match) fail(`Unexpected short file name: ${path.basename(filePath)}`);
  return match[1];
}

const args = parseArgs(process.argv.slice(2));

if (!args.slug) {
  fail('Missing required --slug <slug>. Example: npm run video:batch -- --slug 23-soz-2-mebhas-1-nukte --type shorts --limit 2');
}

if (args.type !== 'shorts') {
  fail('Only --type shorts is supported in Day-20.');
}

if (args.limit !== null && (!Number.isInteger(args.limit) || args.limit < 1)) {
  fail('--limit must be a positive integer');
}

if (args.runId !== null) {
  if (!args.runId || !RUN_ID_PATTERN.test(args.runId)) {
    fail('--run-id must only contain letters, digits, hyphens, or underscores (e.g. day22-limit4-a)');
  }
}

console.log(`Video Batch Builder - ${args.slug}`);
console.log('');

const allFiles = listShortLoadInputs(args.slug);
ok(`Found ${allFiles.length} short load input files`);

const selectedFiles = args.limit ? allFiles.slice(0, args.limit) : allFiles;
if (args.limit) ok(`Selected ${selectedFiles.length} files because --limit ${args.limit}`);
else ok(`Selected ${selectedFiles.length} files`);

if (selectedFiles.length === 0) fail('No short load input files selected');

const outputPath = p('docs/video-tests/batches', `${args.slug}-shorts-batch-load-input.js`);
if (fs.existsSync(outputPath) && !args.force) {
  console.log('[SKIP] Batch file already exists. Use --force to overwrite.');
  process.exit(0);
}

const rawInputs = selectedFiles.map((filePath) => {
  const content = validateShortLoadInput(filePath);
  const label = path.basename(filePath);
  let objectSource = extractRawInputObject(content, label);
  if (args.runId) objectSource = applyRunId(objectSource, args.runId, label);
  return {
    filePath,
    shortId: shortIdFor(filePath),
    variableName: varNameFor(filePath),
    objectSource
  };
});

ok('Extracted rawInput objects');

const limitLabel = args.limit ? String(args.limit) : 'all';
const contains = rawInputs.map((item) => item.shortId).join(', ');
const declarations = rawInputs
  .map((item) => `const ${item.variableName} = ${item.objectSource}`)
  .join('\n\n');
const rawInputArray = rawInputs.map((item) => `  ${item.variableName}`).join(',\n');
const runIdLine = args.runId ? `// Run ID: ${args.runId}\n` : '';

const output = `// Derin Okuma - ${args.slug} Shorts Batch Load Input
// Generated by npm run video:batch
// Type: shorts
// Limit: ${limitLabel}
${runIdLine}// Contains: ${contains}
// Paste this into the n8n Load Input Code node.

${declarations}

const rawInputs = [
${rawInputArray}
];

return rawInputs.map((rawInput) => ({
  json: {
    raw_input: rawInput
  }
}));
`;

checkSyntax(output, 'Batch output');

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, output, 'utf8');
ok(`Wrote ${rel(outputPath)}`);

console.log('');
console.log('Next:');
console.log('Paste this batch file into n8n Load Input Code node.');
console.log(`Expected n8n items: ${rawInputs.length}`);
