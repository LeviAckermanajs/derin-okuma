#!/usr/bin/env node
// Resolves the Codex CLI executable without invoking an interactive shell/TUI.

import { spawnSync } from 'child_process';
import fs from 'fs';

const NOT_FOUND = 'Codex bulunamadı. Terminalde codex --version ile kurulumu kontrol edin.';

function assertExecutable(bin, source) {
  if (!fs.existsSync(bin)) throw new Error(`${source}="${bin}" dosyası bulunamadı. ${NOT_FOUND}`);
  try { fs.accessSync(bin, fs.constants.X_OK); }
  catch { throw new Error(`${source}="${bin}" çalıştırılabilir değil. ${NOT_FOUND}`); }
  return bin;
}

export function resolveCodex() {
  const envBin = process.env.CODEX_BIN?.trim();
  if (envBin) return assertExecutable(envBin, 'CODEX_BIN');

  // `command` is a POSIX shell builtin; no user-controlled value is interpolated.
  const result = spawnSync('/bin/sh', ['-c', 'command -v codex'], { encoding: 'utf8' });
  const bin = (result.stdout || '').trim().split('\n')[0];
  if (result.status === 0 && bin) return assertExecutable(bin, 'codex');
  throw new Error(NOT_FOUND);
}

