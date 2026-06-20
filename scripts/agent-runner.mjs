#!/usr/bin/env node

import path from 'path';
import { fileURLToPath } from 'url';
import { resolveClaude } from './resolve-claude-bin.mjs';
import { resolveCodex } from './resolve-codex-bin.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SECRET_ENV_NAME = /(token|secret|password|passwd|api[_-]?key|credential|client[_-]?id|refresh)/i;

export function resolveClaudeBin() { return resolveClaude(); }
export function resolveCodexBin() { return resolveCodex(); }

export function sanitizedAgentEnv(env = process.env) {
  return Object.fromEntries(Object.entries(env).filter(([name]) => !SECRET_ENV_NAME.test(name)));
}

function codexArgs(prompt) {
  return ['exec', '--cd', ROOT, '--sandbox', 'workspace-write', '--color', 'never', prompt];
}

function blogPrompt(draftPath) {
  return [
    `Run the same workflow as the /add-blog-post command for ${draftPath}.`,
    'Read that draft and follow AGENTS.md, CLAUDE.md, docs/content-guide.md, and existing blog conventions.',
    'Create the blog post under src/content/blog, update docs/drafts/.draft-links.json, and run npm run build.',
    'On success report the created file, title, slug, expected URL, and a suggested commit message.',
    'Do not touch unrelated files. Do not read .secrets, .env files, tokens, credentials, or secret files.',
    'If any step fails, revert only the files you created or changed in this workflow so no partial changes remain, then report a clear error.',
  ].join(' ');
}

export function buildAgentCommand(provider, action, params = {}) {
  if (!['claude', 'codex'].includes(provider)) throw new Error(`Unsupported provider: ${provider}`);
  if (!['blog-add', 'shorts-fill'].includes(action)) throw new Error(`Unsupported action: ${action}`);

  if (action === 'blog-add') {
    const draftPath = params.draft_path;
    if (provider === 'claude') {
      const executable = resolveClaudeBin();
      return {
        executable,
        args: ['--permission-mode', 'acceptEdits', '-p', `/add-blog-post ${draftPath}`],
        preview: `claude --permission-mode acceptEdits -p "/add-blog-post ${draftPath}"`,
      };
    }
    const executable = resolveCodexBin();
    const prompt = blogPrompt(draftPath);
    return {
      executable,
      args: codexArgs(prompt),
      env: sanitizedAgentEnv(),
      preview: `codex exec --cd ${ROOT} --sandbox workspace-write "Run the /add-blog-post workflow for ${draftPath}."`,
    };
  }

  const script = provider === 'claude'
    ? 'run-shorts-fill-with-claude.mjs'
    : 'run-shorts-fill-with-codex.mjs';
  return {
    executable: process.execPath,
    args: [path.join(ROOT, 'scripts', script), '--slug', params.slug, '--run-id', params.run_id],
    env: provider === 'codex' ? sanitizedAgentEnv() : process.env,
    preview: `node scripts/${script} --slug ${params.slug} --run-id ${params.run_id}`,
  };
}
