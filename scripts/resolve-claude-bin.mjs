#!/usr/bin/env node
// resolve-claude-bin.mjs — resolves the Claude CLI executable path
//
// Priority:
//   1. CLAUDE_BIN env var (if set, must exist and be executable)
//   2. PATH lookup via `which claude`
//   3. Error with instructions

import { spawnSync } from 'child_process';
import fs from 'fs';

export function resolveClaude() {
  const envBin = process.env.CLAUDE_BIN;
  if (envBin) {
    if (!fs.existsSync(envBin)) {
      throw new Error(`CLAUDE_BIN="${envBin}" dosyası bulunamadı.`);
    }
    try {
      fs.accessSync(envBin, fs.constants.X_OK);
    } catch {
      throw new Error(`CLAUDE_BIN="${envBin}" çalıştırılabilir değil.`);
    }
    console.log(`[INFO] claude_bin=${envBin}`);
    return envBin;
  }

  const r = spawnSync('which', ['claude'], { encoding: 'utf8' });
  const bin = (r.stdout || '').trim();
  if (r.status === 0 && bin) {
    try {
      fs.accessSync(bin, fs.constants.X_OK);
    } catch {
      throw new Error(`"${bin}" çalıştırılabilir değil.`);
    }
    console.log(`[INFO] claude_bin=${bin}`);
    return bin;
  }

  throw new Error(
    'Claude CLI bulunamadı. `command -v claude` çıktısını kontrol edin veya CLAUDE_BIN tanımlayın.'
  );
}
