#!/usr/bin/env node
// validate-video-package.mjs - Derin Okuma video package validator

import fs from 'fs';
import path from 'path';
import process from 'process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const FORBIDDEN_PHRASES = [
  'bu metin',
  'metnin',
  'metinde',
  'metne göre',
  'metnin deyimiyle',
  'bu noktada',
  'şu cümle',
  'verilen cevap',
  'verilen örnek',
  'yazar burada',
  'kitap burada',
  'burada anlatılmak istenen',
  'bu bölüm'
];

function parseArgs(argv) {
  const args = { slug: null, type: 'all', report: false };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--slug' && argv[i + 1]) args.slug = argv[++i];
    else if (arg === '--type' && argv[i + 1]) args.type = argv[++i];
    else if (arg === '--report') args.report = true;
    else {
      failAndExit(`Unknown or incomplete option: ${arg}`);
    }
  }
  return args;
}

function failAndExit(message) {
  console.error(`[FAIL] ${message}`);
  process.exit(1);
}

const args = parseArgs(process.argv.slice(2));

if (!args.slug) {
  failAndExit('Missing required --slug <slug>. Example: npm run video:validate -- --slug 23-soz-2-mebhas-1-nukte');
}

if (!['all', 'shorts', 'landscape'].includes(args.type)) {
  failAndExit('--type must be one of: all, shorts, landscape');
}

const checks = [];
const warnings = [];
const summary = {
  landscapeScenes: null,
  shortsCount: null,
  loadInputFiles: 0
};

function rel(filePath) {
  return path.relative(ROOT, filePath);
}

function p(...parts) {
  return path.join(ROOT, ...parts);
}

function addCheck(name, ok, note = '') {
  checks.push({ name, result: ok ? 'OK' : 'FAIL', note });
  if (ok && isDetailedCheck(name)) return;
  const label = ok ? 'OK' : 'FAIL';
  console.log(`[${label}] ${name}${note ? `: ${note}` : ''}`);
}

function isDetailedCheck(name) {
  return /\bscene \d+\b/.test(name)
    || /^short-\d{3} has /.test(name)
    || /^short-\d{3} metadata /.test(name);
}

function addWarn(name, note) {
  warnings.push({ name, note });
  console.log(`[WARN] ${name}: ${note}`);
}

function fileExists(filePath, label) {
  const exists = fs.existsSync(filePath);
  addCheck(`${label} exists`, exists, exists ? rel(filePath) : rel(filePath));
  return exists;
}

function readText(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function parseJsonFile(filePath, label) {
  try {
    const data = JSON.parse(readText(filePath));
    addCheck(`${label} JSON parse`, true);
    return data;
  } catch (error) {
    addCheck(`${label} JSON parse`, false, error.message);
    return null;
  }
}

function checkStatus(value, label) {
  addCheck(`${label} content_generation_status`, value === 'filled', String(value ?? 'missing'));
}

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
}

function checkScene(scene, requiredFields, label) {
  for (const field of requiredFields) {
    addCheck(`${label} has ${field}`, Object.prototype.hasOwnProperty.call(scene, field));
  }
  if ('scene_id' in scene) addCheck(`${label} scene_id string`, typeof scene.scene_id === 'string');
  if ('narration' in scene) addCheck(`${label} narration non-empty`, isNonEmptyString(scene.narration));
  if ('visual_note' in scene) addCheck(`${label} visual_note non-empty`, isNonEmptyString(scene.visual_note));
  if ('keywords' in scene) addCheck(`${label} keywords non-empty array`, isNonEmptyArray(scene.keywords));
}

function hashtagBlock(hashtags) {
  return hashtags.join(' ');
}

function checkHashtagConsistency(description, hashtags, label) {
  const ok = isNonEmptyString(description) && isNonEmptyArray(hashtags) && description.trim().endsWith(hashtagBlock(hashtags));
  addCheck(`${label} hashtag consistency`, ok);
}

function checkJsSyntax(filePath, label) {
  try {
    new Function(readText(filePath));
    addCheck(`${label} JS syntax`, true);
  } catch (error) {
    addCheck(`${label} JS syntax`, false, error.message);
  }
}

function jsContains(content, key, value) {
  const pattern = new RegExp(`${key}\\s*:\\s*['"]${value}['"]`);
  return pattern.test(content);
}

function checkLoadInputJs(filePath, label, mode, renderMode, requireFilled) {
  const content = readText(filePath);
  checkJsSyntax(filePath, label);

  let rawInput;
  try {
    const result = new Function(content)();
    const itemJson = result?.[0]?.json ?? {};
    rawInput = itemJson.raw_input ?? itemJson;
  } catch (err) {
    addCheck(`${label} JS evaluate`, false, err.message);
    return;
  }

  addCheck(`${label} mode ${mode}`, rawInput?.render_preferences?.mode === mode);
  addCheck(`${label} render_mode ${renderMode}`, rawInput?.render_preferences?.render_mode === renderMode);
  addCheck(`${label} single_track`, rawInput?.audio_strategy?.mode === 'single_track');
  addCheck(`${label} scenes filled`, Array.isArray(rawInput?.scenes) && rawInput.scenes.length > 0);
  if (requireFilled) {
    addCheck(`${label} status filled`, rawInput?.metadata?.content_generation_status === 'filled');
  }
}

function listShortLoadInputs(slug) {
  const dir = p('docs/video-tests/shorts', slug, 'load-inputs');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter((file) => /^short-\d{3}-load-input\.js$/.test(file))
    .sort((a, b) => Number(a.match(/\d{3}/)[0]) - Number(b.match(/\d{3}/)[0]))
    .map((file) => path.join(dir, file));
}

function validateLandscape(slug) {
  const fullJsonPath = p('docs/video-tests/inputs', `${slug}-landscape-full-video.json`);
  if (fileExists(fullJsonPath, 'Landscape full video')) {
    const json = parseJsonFile(fullJsonPath, 'Landscape full video');
    if (json) {
      checkStatus(json.metadata?.content_generation_status, 'Landscape full video');
      addCheck('Landscape scenes non-empty', isNonEmptyArray(json.scenes));
      summary.landscapeScenes = Array.isArray(json.scenes) ? json.scenes.length : 0;
      if (Array.isArray(json.scenes)) {
        json.scenes.forEach((scene, index) => {
          checkScene(scene, ['scene_id', 'title', 'narration', 'visual_note', 'keywords'], `Landscape scene ${index + 1}`);
        });
        addCheck('Landscape scenes', json.scenes.length > 0, String(json.scenes.length));
      }
    }
  }

  const loadInputPath = p('docs/video-tests/inputs', `${slug}-landscape-load-input.js`);
  if (fileExists(loadInputPath, 'Landscape Load Input JS')) {
    checkLoadInputJs(loadInputPath, 'Landscape Load Input', 'full_video', 'landscape', false);
  }

  const metadataPath = p('docs/video-tests/metadata', `${slug}-landscape-metadata.json`);
  if (fileExists(metadataPath, 'Landscape metadata')) {
    const metadata = parseJsonFile(metadataPath, 'Landscape metadata');
    if (metadata) {
      checkStatus(metadata.content_generation_status, 'Landscape metadata');
      addCheck('Landscape metadata selected_title', isNonEmptyString(metadata.selected_title));
      addCheck('Landscape metadata description', isNonEmptyString(metadata.description));
      addCheck('Landscape metadata hashtags', isNonEmptyArray(metadata.hashtags));
      checkHashtagConsistency(metadata.description, metadata.hashtags, 'Landscape metadata');
    }
  }
}

function validateShorts(slug) {
  const packagePath = p('docs/video-tests/shorts', slug, `${slug}-shorts-package.json`);
  if (fileExists(packagePath, 'Shorts package')) {
    const pkg = parseJsonFile(packagePath, 'Shorts package');
    if (pkg) {
      checkStatus(pkg.content_generation_status, 'Shorts package');
      addCheck('Shorts package non-empty', isNonEmptyArray(pkg.shorts));
      summary.shortsCount = Array.isArray(pkg.shorts) ? pkg.shorts.length : 0;
      if (Array.isArray(pkg.shorts)) {
        pkg.shorts.forEach((short, shortIndex) => {
          const label = short.short_id || `short index ${shortIndex + 1}`;
          for (const field of ['short_id', 'hook', 'title', 'description', 'hashtags', 'thumbnail_or_cover_text', 'scenes']) {
            addCheck(`${label} has ${field}`, Object.prototype.hasOwnProperty.call(short, field));
          }
          addCheck(`${label} scenes non-empty`, isNonEmptyArray(short.scenes));
          if (Array.isArray(short.scenes)) {
            short.scenes.forEach((scene, sceneIndex) => {
              checkScene(scene, ['scene_id', 'narration', 'visual_note', 'keywords'], `${label} scene ${sceneIndex + 1}`);
            });
          }
        });
        addCheck('Shorts package', pkg.shorts.length > 0, `${pkg.shorts.length} shorts`);
      }
    }
  }

  const metadataPath = p('docs/video-tests/shorts', slug, 'metadata', `${slug}-shorts-metadata.json`);
  if (fileExists(metadataPath, 'Shorts metadata')) {
    const metadata = parseJsonFile(metadataPath, 'Shorts metadata');
    if (metadata) {
      checkStatus(metadata.content_generation_status, 'Shorts metadata');
      if (Array.isArray(metadata.shorts)) {
        metadata.shorts.forEach((short) => {
          const label = short.short_id || 'Short metadata item';
          addCheck(`${label} metadata selected_title`, isNonEmptyString(short.selected_title));
          addCheck(`${label} metadata description`, isNonEmptyString(short.description));
          addCheck(`${label} metadata hashtags`, isNonEmptyArray(short.hashtags));
          checkHashtagConsistency(short.description, short.hashtags, `${label} metadata`);
        });
        addCheck('Shorts metadata', metadata.shorts.length > 0, `${metadata.shorts.length} shorts`);
      } else {
        addCheck('Shorts metadata shorts array', false);
      }
    }
  }

  const files = listShortLoadInputs(slug);
  summary.loadInputFiles = files.length;
  addCheck('Shorts load inputs found', files.length > 0, `${files.length} files`);
  files.forEach((filePath) => {
    checkLoadInputJs(filePath, `Shorts ${path.basename(filePath)}`, 'shorts', 'shorts', true);
  });
  if (files.length > 0) addCheck('Shorts load inputs', true, `${files.length} files`);
}

function scanForbiddenPhrases(slug, includeLandscape, includeShorts) {
  const files = [];
  if (includeLandscape) {
    files.push(
      p('docs/video-tests/inputs', `${slug}-landscape-full-video.json`),
      p('docs/video-tests/inputs', `${slug}-landscape-load-input.js`)
    );
  }
  if (includeShorts) {
    files.push(
      p('docs/video-tests/shorts', slug, `${slug}-shorts-package.json`),
      p('docs/video-tests/shorts', slug, 'metadata', `${slug}-shorts-metadata.json`),
      ...listShortLoadInputs(slug)
    );
  }

  const matches = [];
  const loweredPhrases = FORBIDDEN_PHRASES.map((phrase) => phrase.toLocaleLowerCase('tr'));
  for (const filePath of files.filter((item) => fs.existsSync(item))) {
    const lines = readText(filePath).split(/\r?\n/);
    lines.forEach((line, index) => {
      const loweredLine = line.toLocaleLowerCase('tr');
      loweredPhrases.forEach((phrase, phraseIndex) => {
        if (loweredLine.includes(phrase)) {
          matches.push({ filePath, line: index + 1, phrase: FORBIDDEN_PHRASES[phraseIndex] });
        }
      });
    });
  }

  if (matches.length > 0) {
    addWarn('Forbidden phrase scan', `${matches.length} matches`);
    matches.slice(0, 20).forEach((match) => {
      console.log(`  ${rel(match.filePath)}:${match.line} - ${match.phrase}`);
    });
  } else {
    addCheck('Forbidden phrase scan', true, '0 matches');
  }
}

function writeReport(slug) {
  const reportPath = p('docs/video-tests/reports', `${slug}-validation-result.md`);
  const hasFailures = checks.some((check) => check.result === 'FAIL');
  const lines = [
    `# Video Package Validation - ${slug}`,
    '',
    '## Summary',
    '',
    `- Status: ${hasFailures ? 'FAIL' : 'PASS'}`,
    `- Landscape scenes: ${summary.landscapeScenes ?? 'n/a'}`,
    `- Shorts count: ${summary.shortsCount ?? 'n/a'}`,
    `- Load input files: ${summary.loadInputFiles}`,
    '',
    '## Checks',
    '',
    '| Check | Result | Note |',
    '|---|---|---|',
    ...checks.map((check) => `| ${check.name} | ${check.result} | ${check.note || ''} |`),
    '',
    '## Warnings',
    '',
    ...(warnings.length ? warnings.map((warning) => `- ${warning.name}: ${warning.note}`) : ['- None']),
    '',
    '## Next Step',
    '',
    hasFailures ? '- Fix failed checks before n8n smoke test.' : '- Package is ready for n8n smoke test.',
    ''
  ];
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, lines.join('\n'), 'utf8');
  console.log(`[OK] Wrote validation report: ${rel(reportPath)}`);
}

console.log(`Video Package Validation - ${args.slug}`);
console.log('');

const includeLandscape = args.type === 'all' || args.type === 'landscape';
const includeShorts = args.type === 'all' || args.type === 'shorts';

if (includeLandscape) validateLandscape(args.slug);
if (includeShorts) validateShorts(args.slug);
scanForbiddenPhrases(args.slug, includeLandscape, includeShorts);

const hasFailures = checks.some((check) => check.result === 'FAIL');

if (args.report) writeReport(args.slug);

console.log('');
if (hasFailures) {
  console.log('[FAIL] Package is not ready for n8n smoke test');
  process.exit(1);
}

console.log('[PASS] Package is ready for n8n smoke test');
process.exit(0);
