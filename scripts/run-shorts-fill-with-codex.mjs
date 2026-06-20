#!/usr/bin/env node
// Runs the generated fill prompt with Codex, then normalizes, validates, and batches.

import { spawnSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { resolveCodexBin, sanitizedAgentEnv } from './agent-runner.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SLUG_RE = /^[a-zA-Z0-9_-]+$/;

function parseArgs(argv) {
  const args = { slug: null, runId: null };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--slug' && argv[i + 1]) args.slug = argv[++i];
    else if (argv[i] === '--run-id' && argv[i + 1]) args.runId = argv[++i];
  }
  return args;
}

const args = parseArgs(process.argv.slice(2));
if (!args.slug || !SLUG_RE.test(args.slug)) { console.error('[FAIL] Geçerli --slug gerekli.'); process.exit(1); }
if (!args.runId || !SLUG_RE.test(args.runId)) { console.error('[FAIL] Geçerli --run-id gerekli.'); process.exit(1); }

const statusPath = path.join(ROOT, 'docs/video-tests/reports', `${args.slug}-shorts-pipeline-status.json`);
const defaultPromptRelPath = `docs/video-tests/prompts/${args.slug}-fill-video-package-prompt.md`;
let pipelineStatus;
try { pipelineStatus = JSON.parse(fs.readFileSync(statusPath, 'utf8')); }
catch { console.error(`[FAIL] Status dosyası bulunamadı veya geçersiz: ${path.relative(ROOT, statusPath)}`); process.exit(1); }

const promptRelPath = pipelineStatus?.paths?.promptPath || defaultPromptRelPath;
const promptAbsPath = path.resolve(ROOT, promptRelPath);
const promptsRoot = path.join(ROOT, 'docs/video-tests/prompts');
let realPromptPath;
try { realPromptPath = fs.realpathSync(promptAbsPath); } catch {}
if (!realPromptPath || !realPromptPath.startsWith(fs.realpathSync(promptsRoot) + path.sep) || !fs.statSync(realPromptPath).isFile()) {
  console.error(`[FAIL] Güvenli prompt dosyası bulunamadı: ${promptRelPath}`); process.exit(1);
}

function writeStatus(updates) {
  Object.assign(pipelineStatus, { fillTimestamp: new Date().toISOString(), ...updates });
  fs.writeFileSync(statusPath, JSON.stringify(pipelineStatus, null, 2), 'utf8');
}

function fail(label, command) {
  console.error(`\n[FAIL] ${label} başarısız.`);
  writeStatus({ status: 'failed', failedCommand: command });
  process.exit(1);
}

function runNode(label, scriptArgs) {
  const command = ['node', ...scriptArgs].join(' ');
  console.log(`\n[STEP] ${label}\n  $ ${command}`);
  const result = spawnSync(process.execPath, scriptArgs, { cwd: ROOT, stdio: 'inherit', shell: false });
  if (result.status !== 0) fail(label, command);
}

let codexBin;
try { codexBin = resolveCodexBin(); }
catch (error) { console.error(`[FAIL] ${error.message}`); process.exit(1); }

const sourcePrompt = fs.readFileSync(realPromptPath, 'utf8');
const prompt = `${sourcePrompt}\n\nMandatory Codex constraints:\n- Complete all video package files: shorts package, shorts metadata, landscape metadata, and load-input.\n- Every short must include description in the shorts package and it must agree with metadata description.\n- Do not leave selected_title, hashtags, thumbnail_or_cover_text, content_generation_status, or status incomplete.\n- Finish with the package in the state expected by the validator; the following validator must PASS.\n- Do not touch unrelated files. Do not read .secrets, .env files, tokens, credentials, or secret files.`;

console.log('\nDerin Okuma — Shorts Fill with Codex');
console.log(`  Slug       : ${args.slug}`);
console.log(`  Run ID     : ${args.runId}`);
console.log(`[INFO] codex_bin=${codexBin}`);
console.log(`[INFO] prompt_path=${promptRelPath}`);
console.log('\n[STEP] Codex fill');
console.log(`  $ codex exec --cd ${ROOT} --sandbox workspace-write "<prompt>"`);

const codexResult = spawnSync(codexBin, [
  'exec', '--cd', ROOT, '--sandbox', 'workspace-write', '--color', 'never', prompt,
], { cwd: ROOT, env: sanitizedAgentEnv(), stdio: 'inherit', shell: false });
if (codexResult.error) { console.error(`[FAIL] Codex başlatılamadı: ${codexResult.error.message}`); fail('Codex fill', 'codex exec'); }
if (codexResult.status !== 0) fail('Codex fill', 'codex exec');

runNode('normalize hashtags', ['scripts/normalize-shorts-metadata-hashtags.mjs', '--slug', args.slug]);
runNode('normalize package', ['scripts/normalize-shorts-package.mjs', '--slug', args.slug]);
runNode('normalize package status', ['scripts/normalize-video-package-status.mjs', '--slug', args.slug]);
runNode('video:validate', ['scripts/validate-video-package.mjs', '--slug', args.slug, '--report']);
runNode('video:batch', ['scripts/build-video-batch.mjs', '--slug', args.slug, '--type', 'shorts', '--run-id', args.runId, '--force']);

writeStatus({ status: 'success', failedCommand: null });
console.log('\nFill pipeline complete. Status: success');
