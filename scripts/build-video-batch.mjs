#!/usr/bin/env node
// build-video-batch.mjs - combine Shorts Load Input JS files into one n8n Code node file

import fs from 'fs';
import path from 'path';
import process from 'process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

function parseArgs(argv) {
  const args = { slug: null, type: 'shorts', limit: null, force: false, runId: null, reuseAssetsFromRun: null };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--slug' && argv[i + 1]) args.slug = argv[++i];
    else if (arg === '--type' && argv[i + 1]) args.type = argv[++i];
    else if (arg === '--limit' && argv[i + 1]) args.limit = Number.parseInt(argv[++i], 10);
    else if (arg === '--run-id' && argv[i + 1]) args.runId = argv[++i];
    else if (arg === '--reuse-assets-from-run' && argv[i + 1]) args.reuseAssetsFromRun = argv[++i];
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

  let rawInput;
  try {
    const result = new Function(content)();
    const itemJson = result?.[0]?.json ?? {};
    rawInput = itemJson.raw_input ?? itemJson;
  } catch (err) {
    fail(`${label} JS evaluate failed: ${err.message}`);
  }

  if (rawInput?.render_preferences?.render_mode !== 'shorts') fail(`${label} missing render_mode: 'shorts'`);
  if (rawInput?.render_preferences?.mode !== 'shorts') fail(`${label} missing mode: 'shorts'`);
  if (rawInput?.audio_strategy?.mode !== 'single_track') fail(`${label} missing single_track`);
  if (!Array.isArray(rawInput?.scenes) || rawInput.scenes.length === 0) fail(`${label} still has empty scenes: []`);
  if (rawInput?.metadata?.content_generation_status !== 'filled') {
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

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function listJobDirs(jobsRoot) {
  if (!fs.existsSync(jobsRoot)) {
    fail(`Jobs output directory not found: ${rel(jobsRoot)}`);
  }

  return fs.readdirSync(jobsRoot)
    .map((entry) => path.join(jobsRoot, entry))
    .filter((entryPath) => fs.existsSync(entryPath) && fs.statSync(entryPath).isDirectory());
}

function findShortJobDir(jobDirs, slug, shortId, sourceRunId) {
  const slugPattern = escapeRegExp(slug);
  const shortPattern = escapeRegExp(shortId);
  const runPattern = escapeRegExp(sourceRunId);
  const pattern = new RegExp(`^job-${slugPattern}-${shortPattern}-.*-${runPattern}$`);

  const matches = jobDirs.filter((dirPath) => pattern.test(path.basename(dirPath)));
  if (matches.length === 0) {
    fail(`Missing reuse fixture job dir for ${shortId}: sourceRunId=${sourceRunId}`);
  }

  matches.sort((a, b) => {
    const aStat = fs.statSync(a);
    const bStat = fs.statSync(b);
    if (bStat.mtimeMs !== aStat.mtimeMs) return bStat.mtimeMs - aStat.mtimeMs;
    return b.localeCompare(a);
  });

  return matches[0];
}

const RUN_ID_PATTERN = /^[a-zA-Z0-9_-]+$/;

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

function toPosixPath(filePath) {
  return String(filePath).replace(/\\/g, '/');
}

function readJson(filePath, label) {
  if (!fs.existsSync(filePath)) fail(`${label} not found: ${rel(filePath)}`);
  try {
    return JSON.parse(readText(filePath));
  } catch (error) {
    fail(`${label} JSON parse failed: ${error.message}`);
  }
}

function parseRawInputObject(objectSource, label) {
  const trimmed = objectSource.trim().replace(/;$/, '');
  try {
    return new Function(`return (${trimmed});`)();
  } catch (error) {
    fail(`${label} rawInput object parse failed: ${error.message}`);
  }
}

function normalizeMetadata(rawInput, runId, sourceRunId) {
  if (!rawInput.metadata || typeof rawInput.metadata !== 'object') rawInput.metadata = {};
  if (runId) rawInput.metadata.batch_run_id = runId;
  if (sourceRunId) {
    rawInput.metadata.test_mode = 'no_external';
    rawInput.metadata.reuse_assets_from_run = sourceRunId;
  }
  return rawInput;
}

function applyRunId(rawInput, runId, label) {
  if (!runId) return rawInput;
  if (!rawInput.job || !rawInput.job.job_id_hint) {
    fail(`${label}: --run-id provided but no job_id_hint field found to suffix`);
  }
  rawInput.job.job_id_hint = `${rawInput.job.job_id_hint}-${runId}`;
  return rawInput;
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

if (args.reuseAssetsFromRun && !args.runId) {
  fail('--reuse-assets-from-run requires --run-id so the generated batch has a fresh target run id');
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

const parsedInputs = selectedFiles.map((filePath) => {
  const content = validateShortLoadInput(filePath);
  const label = path.basename(filePath);
  const objectSource = extractRawInputObject(content, label);
  const rawInput = parseRawInputObject(objectSource, label);
  if (!rawInput.runtime || !rawInput.runtime.repo_root) {
    fail(`${label} missing runtime.repo_root`);
  }
  if (!rawInput.job || !rawInput.job.job_id_hint) {
    fail(`${label} missing job.job_id_hint`);
  }
  if (!Array.isArray(rawInput.scenes) || rawInput.scenes.length === 0) {
    fail(`${label} has no scenes`);
  }
  return {
    filePath,
    shortId: shortIdFor(filePath),
    variableName: varNameFor(filePath),
    label,
    rawInput
  };
});

const repoRoots = Array.from(new Set(parsedInputs.map((item) => item.rawInput.runtime.repo_root)));
if (repoRoots.length !== 1) {
  fail(`Expected exactly one runtime.repo_root across selected files, got: ${JSON.stringify(repoRoots)}`);
}

const sourceRepoRoot = repoRoots[0];
const jobsRoot = path.join(sourceRepoRoot, 'output', 'jobs');
const jobDirs = args.reuseAssetsFromRun ? listJobDirs(jobsRoot) : [];

function validateReuseFixture(sourceJobDir, shortId, sceneIds) {
  const audioDir = path.join(sourceJobDir, 'assets', 'audio');
  const videoDir = path.join(sourceJobDir, 'assets', 'video');
  const audioTrackPath = path.join(audioDir, 'full-narration.mp3');
  const audioTrackJsonPath = path.join(audioDir, 'audio-track.json');
  const audioAssetsJsonPath = path.join(audioDir, 'audio-assets.json');

  if (!fs.existsSync(audioTrackPath)) {
    fail(`Missing reuse fixture asset for ${shortId}: assets/audio/full-narration.mp3`);
  }
  if (!fs.existsSync(audioTrackJsonPath)) {
    fail(`Missing reuse fixture asset for ${shortId}: assets/audio/audio-track.json`);
  }
  if (!fs.existsSync(audioAssetsJsonPath)) {
    fail(`Missing reuse fixture asset for ${shortId}: assets/audio/audio-assets.json`);
  }

  const audioTrack = readJson(audioTrackJsonPath, `${shortId} audio track`);
  if (typeof audioTrack.duration_seconds !== 'number' || audioTrack.duration_seconds <= 0) {
    fail(`Missing reuse fixture asset for ${shortId}: assets/audio/audio-track.json duration_seconds`);
  }

  const audioAssets = readJson(audioAssetsJsonPath, `${shortId} audio assets`);
  if (!Array.isArray(audioAssets) || audioAssets.length !== sceneIds.length) {
    fail(`Missing reuse fixture asset for ${shortId}: assets/audio/audio-assets.json`);
  }

  audioAssets.forEach((asset, idx) => {
    if (asset.scene_id !== sceneIds[idx]) {
      fail(`Missing reuse fixture asset for ${shortId}: assets/audio/audio-assets.json`);
    }
    if (asset.track_ref !== 'single') {
      fail(`Missing reuse fixture asset for ${shortId}: assets/audio/audio-assets.json`);
    }
    if (typeof asset.duration_seconds !== 'number' || asset.duration_seconds <= 0) {
      fail(`Missing reuse fixture asset for ${shortId}: assets/audio/audio-assets.json`);
    }
  });

  const videoAssets = sceneIds.map((sceneId) => {
    const videoPath = path.join(videoDir, `${sceneId}.mp4`);
    if (!fs.existsSync(videoPath)) {
      fail(`Missing reuse fixture asset for ${shortId}: assets/video/${sceneId}.mp4`);
    }
    return {
      scene_id: sceneId,
      path: toPosixPath(videoPath)
    };
  });

  return {
    audioTrack: {
      mode: 'single',
      path: toPosixPath(audioTrackPath),
      duration_seconds: audioTrack.duration_seconds
    },
    audioAssets,
    videoRoot: toPosixPath(videoDir),
    videoAssets
  };
}

const rawInputs = parsedInputs.map((item) => {
  const rawInput = item.rawInput;
  if (args.runId) applyRunId(rawInput, args.runId, item.label);
  normalizeMetadata(rawInput, args.runId, args.reuseAssetsFromRun);

  if (args.reuseAssetsFromRun) {
    rawInput.test_mode = 'no_external';
    rawInput.reuse_existing_audio = {
      enabled: true,
      audio_mode: 'single_track',
      audio_track: {
        mode: 'single',
        path: '',
        duration_seconds: null
      },
      audio_assets: []
    };
    rawInput.reuse_existing_video = {
      enabled: true,
      visual_mode: 'semantic',
      video_root: '',
      path_template: '{scene_id}.mp4',
      video_assets: []
    };

    const sceneIds = rawInput.scenes.map((scene) => scene.scene_id);
    const sourceJobDir = findShortJobDir(jobDirs, args.slug, item.shortId, args.reuseAssetsFromRun);
    const reuse = validateReuseFixture(sourceJobDir, item.shortId, sceneIds);

    rawInput.reuse_existing_audio.audio_track = reuse.audioTrack;
    rawInput.reuse_existing_audio.audio_assets = reuse.audioAssets;
    rawInput.reuse_existing_video.video_root = reuse.videoRoot;
    rawInput.reuse_existing_video.video_assets = reuse.videoAssets;
  } else {
    rawInput.publish = {
      youtube: {
        enabled: true,
        dry_run: true,
        scheduled: true,
        schedule_slots: ['13:00', '19:00', '22:00'],
        timezone: 'Europe/Istanbul',
        expected_channel_id: 'UCfdDdchpT4rait8RUjzpVGA'
      }
    };
  }

  return {
    filePath: item.filePath,
    shortId: item.shortId,
    variableName: item.variableName,
    objectSource: JSON.stringify(rawInput, null, 2)
  };
});

ok('Extracted rawInput objects');
if (args.reuseAssetsFromRun) {
  ok(`Reuse assets from run: ${args.reuseAssetsFromRun}`);
}

const limitLabel = args.limit ? String(args.limit) : 'all';
const contains = rawInputs.map((item) => item.shortId).join(', ');
const declarations = rawInputs
  .map((item) => `const ${item.variableName} = ${item.objectSource}`)
  .join('\n\n');
const rawInputArray = rawInputs.map((item) => `  ${item.variableName}`).join(',\n');
const runIdLine = args.runId ? `// Run ID: ${args.runId}\n` : '';
const reuseLine = args.reuseAssetsFromRun ? `// Reuse assets from run: ${args.reuseAssetsFromRun}\n` : '';

const output = `// Derin Okuma - ${args.slug} Shorts Batch Load Input
// Generated by npm run video:batch
// Type: shorts
// Limit: ${limitLabel}
${runIdLine}${reuseLine}// Contains: ${contains}
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
