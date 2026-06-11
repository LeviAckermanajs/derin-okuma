#!/usr/bin/env node
// normalize-video-package-status.mjs
// Promotes content_generation_status from "ready" to "filled" for all
// video package files belonging to a slug, but ONLY when every required
// content field is verified to be non-empty.
//
// Fail-closed: all content checks run first; files are written only after
// every check passes. A single empty field aborts the entire run.
// Idempotent: files already set to "filled" are skipped.
//
// Usage: node scripts/normalize-video-package-status.mjs --slug <slug>

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// ── Args ─────────────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const args = { slug: null };
  let i = 0;
  while (i < argv.length) {
    if (argv[i] === '--slug' && argv[i + 1]) args.slug = argv[++i];
    i++;
  }
  return args;
}

const args = parseArgs(process.argv.slice(2));
if (!args.slug) {
  console.error('Error: --slug is required.');
  console.error('Usage: node scripts/normalize-video-package-status.mjs --slug <slug>');
  process.exit(1);
}

const SLUG = args.slug;
const FILLED = 'filled';
const BLOCKED = new Set(['failed', 'error']);

// ── Helpers ───────────────────────────────────────────────────────────────────

function p(...parts) { return path.join(ROOT, ...parts); }
function rel(fp) { return path.relative(ROOT, fp); }
function isStr(v) { return typeof v === 'string' && v.trim().length > 0; }
function isArr(v) { return Array.isArray(v) && v.length > 0; }

// ── Validation state ──────────────────────────────────────────────────────────

const errors = [];
const plans = [];

function addError(msg) { errors.push(msg); }

function requireFile(filePath, label) {
  if (!fs.existsSync(filePath)) {
    addError(`${label}: file not found: ${rel(filePath)}`);
    return false;
  }
  return true;
}

function parseJsonFile(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    addError(`${rel(filePath)}: JSON parse failed: ${e.message}`);
    return null;
  }
}

function evalJsFile(filePath) {
  let content;
  try { content = fs.readFileSync(filePath, 'utf8'); }
  catch (e) { addError(`${rel(filePath)}: read error: ${e.message}`); return null; }

  try { new Function(content); }
  catch (e) { addError(`${rel(filePath)}: JS syntax error: ${e.message}`); return null; }

  try {
    const result = (new Function(content))();
    const raw = result?.[0]?.json?.raw_input ?? result?.[0]?.json ?? {};
    return { content, raw };
  } catch (e) {
    addError(`${rel(filePath)}: JS evaluate error: ${e.message}`);
    return null;
  }
}

// Returns { newContent } on success, { already: true } if already filled,
// or null on error (addError called internally).
function prepareJsReplacement(filePath, content) {
  const filledRe = /content_generation_status\s*:\s*(['"])filled\1/;
  if (filledRe.test(content)) return { already: true };

  const readyRe = /content_generation_status\s*:\s*(['"])ready\1/g;
  const matches = [...content.matchAll(readyRe)];

  if (matches.length === 0) {
    addError(`${rel(filePath)}: content_generation_status 'ready' not found`);
    return null;
  }
  if (matches.length > 1) {
    addError(`${rel(filePath)}: ${matches.length} occurrences of content_generation_status — ambiguous`);
    return null;
  }

  const newContent = content.replace(readyRe, `content_generation_status: '${FILLED}'`);
  return { newContent };
}

function verifySyntax(filePath, content) {
  // These JS files use bare `return` (valid inside new Function but not as scripts),
  // so new Function is the correct syntax checker — same as the validator uses.
  try { new Function(content); }
  catch (e) {
    console.error(`[FAIL] ${rel(filePath)}: replacement broke JS syntax: ${e.message}`);
    process.exit(1);
  }
}

// ── Phase 1: Landscape full-video JSON ───────────────────────────────────────

console.log(`\n[STEP] normalize package status — ${SLUG}`);

{
  const filePath = p('docs/video-tests/inputs', `${SLUG}-landscape-full-video.json`);
  if (requireFile(filePath, 'Landscape full-video')) {
    const json = parseJsonFile(filePath);
    if (json) {
      const current = json.metadata?.content_generation_status;
      if (BLOCKED.has(current)) {
        addError(`Landscape full-video: status is "${current}" — will not override a failed file`);
      } else if (current === FILLED) {
        console.log('[OK]  Landscape full-video status: already filled');
      } else {
        const before = errors.length;
        if (!isArr(json.scenes)) {
          addError('Landscape full-video: scenes is empty or missing');
        } else {
          json.scenes.forEach((scene, i) => {
            const lbl = `Landscape scene ${i + 1}`;
            for (const f of ['scene_id', 'title', 'narration', 'visual_note', 'keywords']) {
              if (!Object.prototype.hasOwnProperty.call(scene, f))
                addError(`${lbl}: missing field "${f}"`);
            }
            if (!isStr(scene.narration))  addError(`${lbl}: narration is empty`);
            if (!isStr(scene.visual_note)) addError(`${lbl}: visual_note is empty`);
            if (!isArr(scene.keywords))   addError(`${lbl}: keywords is empty`);
          });
        }
        if (errors.length === before) {
          plans.push(() => {
            if (!json.metadata) json.metadata = {};
            json.metadata.content_generation_status = FILLED;
            fs.writeFileSync(filePath, JSON.stringify(json, null, 2) + '\n', 'utf8');
            console.log('[OK]  Landscape full-video status: filled');
          });
        }
      }
    }
  }
}

// ── Phase 2: Landscape metadata JSON ─────────────────────────────────────────

{
  const filePath = p('docs/video-tests/metadata', `${SLUG}-landscape-metadata.json`);
  if (requireFile(filePath, 'Landscape metadata')) {
    const json = parseJsonFile(filePath);
    if (json) {
      const current = json.content_generation_status;
      if (BLOCKED.has(current)) {
        addError(`Landscape metadata: status is "${current}" — will not override a failed file`);
      } else if (current === FILLED) {
        console.log('[OK]  Landscape metadata status: already filled');
      } else {
        const before = errors.length;
        if (!isStr(json.selected_title)) addError('Landscape metadata: selected_title is empty');
        if (!isStr(json.description))    addError('Landscape metadata: description is empty');
        if (!isArr(json.hashtags))       addError('Landscape metadata: hashtags is empty');
        if (errors.length === before) {
          plans.push(() => {
            json.content_generation_status = FILLED;
            fs.writeFileSync(filePath, JSON.stringify(json, null, 2) + '\n', 'utf8');
            console.log('[OK]  Landscape metadata status: filled');
          });
        }
      }
    }
  }
}

// ── Phase 3: Shorts package JSON ─────────────────────────────────────────────

{
  const filePath = p('docs/video-tests/shorts', SLUG, `${SLUG}-shorts-package.json`);
  if (requireFile(filePath, 'Shorts package')) {
    const json = parseJsonFile(filePath);
    if (json) {
      const current = json.content_generation_status;
      if (BLOCKED.has(current)) {
        addError(`Shorts package: status is "${current}" — will not override a failed file`);
      } else if (current === FILLED) {
        console.log('[OK]  Shorts package status: already filled');
      } else {
        const before = errors.length;
        if (!isArr(json.shorts)) {
          addError('Shorts package: shorts array is empty or missing');
        } else {
          json.shorts.forEach((short, i) => {
            const sid = short.short_id || `shorts[${i}]`;
            for (const f of ['short_id', 'hook', 'title', 'description', 'hashtags', 'thumbnail_or_cover_text', 'scenes']) {
              if (!Object.prototype.hasOwnProperty.call(short, f))
                addError(`Shorts package ${sid}: missing field "${f}"`);
            }
            if (!isStr(short.hook))  addError(`Shorts package ${sid}: hook is empty`);
            if (!isStr(short.title)) addError(`Shorts package ${sid}: title is empty`);
            if (!isArr(short.scenes)) {
              addError(`Shorts package ${sid}: scenes is empty or missing`);
            } else {
              short.scenes.forEach((scene, si) => {
                const slbl = `${sid} scene ${si + 1}`;
                if (!isStr(scene.narration))  addError(`${slbl}: narration is empty`);
                if (!isStr(scene.visual_note)) addError(`${slbl}: visual_note is empty`);
                if (!isArr(scene.keywords))   addError(`${slbl}: keywords is empty`);
              });
            }
          });
        }
        if (errors.length === before) {
          plans.push(() => {
            json.content_generation_status = FILLED;
            fs.writeFileSync(filePath, JSON.stringify(json, null, 2) + '\n', 'utf8');
            console.log('[OK]  Shorts package status: filled');
          });
        }
      }
    }
  }
}

// ── Phase 4: Shorts metadata JSON ────────────────────────────────────────────

{
  const filePath = p('docs/video-tests/shorts', SLUG, 'metadata', `${SLUG}-shorts-metadata.json`);
  if (requireFile(filePath, 'Shorts metadata')) {
    const json = parseJsonFile(filePath);
    if (json) {
      const current = json.content_generation_status;
      if (BLOCKED.has(current)) {
        addError(`Shorts metadata: status is "${current}" — will not override a failed file`);
      } else if (current === FILLED) {
        console.log('[OK]  Shorts metadata status: already filled');
      } else {
        const before = errors.length;
        if (!isArr(json.shorts)) {
          addError('Shorts metadata: shorts array is empty or missing');
        } else {
          json.shorts.forEach((short) => {
            const sid = short.short_id || 'metadata short';
            if (!isStr(short.selected_title)) addError(`Shorts metadata ${sid}: selected_title is empty`);
            if (!isStr(short.description))    addError(`Shorts metadata ${sid}: description is empty`);
            if (!isArr(short.hashtags))       addError(`Shorts metadata ${sid}: hashtags is empty`);
          });
        }
        if (errors.length === before) {
          plans.push(() => {
            json.content_generation_status = FILLED;
            fs.writeFileSync(filePath, JSON.stringify(json, null, 2) + '\n', 'utf8');
            console.log('[OK]  Shorts metadata status: filled');
          });
        }
      }
    }
  }
}

// ── Phase 5: Short load-input JS files ───────────────────────────────────────

{
  const loadInputDir = p('docs/video-tests/shorts', SLUG, 'load-inputs');
  if (!fs.existsSync(loadInputDir)) {
    addError(`Load-inputs directory not found: ${rel(loadInputDir)}`);
  } else {
    const files = fs.readdirSync(loadInputDir)
      .filter(f => /^short-\d{3}-load-input\.js$/.test(f))
      .sort()
      .map(f => path.join(loadInputDir, f));

    if (files.length === 0) {
      addError('No short-NNN-load-input.js files found in load-inputs/');
    }

    let alreadyCount = 0;
    const jsWrites = [];

    for (const filePath of files) {
      const parsed = evalJsFile(filePath);
      if (!parsed) continue;

      const { content, raw } = parsed;
      const current = raw?.metadata?.content_generation_status;

      if (BLOCKED.has(current)) {
        addError(`${rel(filePath)}: status is "${current}" — will not override a failed file`);
        continue;
      }

      if (current === FILLED) {
        alreadyCount++;
        continue;
      }

      const before = errors.length;

      if (raw?.render_preferences?.mode !== 'shorts')
        addError(`${rel(filePath)}: render_preferences.mode is not "shorts"`);
      if (raw?.render_preferences?.render_mode !== 'shorts')
        addError(`${rel(filePath)}: render_preferences.render_mode is not "shorts"`);
      if (raw?.audio_strategy?.mode !== 'single_track')
        addError(`${rel(filePath)}: audio_strategy.mode is not "single_track"`);
      if (!isArr(raw?.scenes)) {
        addError(`${rel(filePath)}: scenes is empty or missing`);
      } else {
        raw.scenes.forEach((scene, i) => {
          if (!isStr(scene.narration))
            addError(`${rel(filePath)} scene ${i + 1}: narration is empty`);
        });
      }

      if (errors.length === before) {
        const prepared = prepareJsReplacement(filePath, content);
        if (prepared?.newContent) {
          jsWrites.push({ filePath, newContent: prepared.newContent });
        } else if (prepared?.already) {
          alreadyCount++;
        }
      }
    }

    if (alreadyCount > 0 && jsWrites.length === 0 && errors.length === 0) {
      console.log(`[OK]  Short load inputs: already filled (${alreadyCount})`);
    }

    if (jsWrites.length > 0) {
      const before = errors.length;
      plans.push(() => {
        for (const { filePath, newContent } of jsWrites) {
          verifySyntax(filePath, newContent);
          fs.writeFileSync(filePath, newContent, 'utf8');
        }
        console.log(`[OK]  Short load inputs normalized: ${jsWrites.length}`);
      });
    }
  }
}

// ── Guard: abort if any check failed ─────────────────────────────────────────

if (errors.length > 0) {
  console.error(`\n[FAIL] ${errors.length} content check(s) failed — no files were written.`);
  errors.forEach(e => console.error(`  • ${e}`));
  process.exit(1);
}

// ── Apply all plans ───────────────────────────────────────────────────────────

if (plans.length === 0) {
  console.log('\n[OK] Package status normalization completed (nothing to change).');
  process.exit(0);
}

for (const apply of plans) apply();

console.log('\n[OK] Package status normalization completed.');
