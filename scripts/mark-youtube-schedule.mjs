#!/usr/bin/env node
/**
 * mark-youtube-schedule.mjs
 *
 * Patch an already-uploaded video entry in youtube-upload-result.json with
 * schedule metadata (publishAtLocal, publishAt UTC, scheduleSlot, timezone).
 *
 * This does NOT call the YouTube API. It exists purely to record schedule
 * information for videos that were uploaded manually or before scheduled-upload
 * support was added, so that upload-youtube-batch.mjs can detect the correct
 * cursor and continue from the next slot.
 *
 * Usage:
 *   node scripts/mark-youtube-schedule.mjs \
 *     --result "/path/to/youtube-upload-result.json" \
 *     --video-id short-004 \
 *     --publish-at-local "2026-05-24T13:00:00" \
 *     --timezone "Europe/Istanbul"
 */

import fs      from 'fs';
import path    from 'path';
import process from 'process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ── CLI ───────────────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const args = {
    result:         null,
    videoId:        null,
    publishAtLocal: null,
    timezone:       'Europe/Istanbul',
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if      (arg === '--result'           && argv[i + 1]) args.result         = argv[++i];
    else if (arg === '--video-id'         && argv[i + 1]) args.videoId        = argv[++i];
    else if (arg === '--publish-at-local' && argv[i + 1]) args.publishAtLocal = argv[++i];
    else if (arg === '--timezone'         && argv[i + 1]) args.timezone       = argv[++i];
    else {
      fail(`Unknown or incomplete option: ${arg}`);
    }
  }

  return args;
}

// ── Logging ───────────────────────────────────────────────────────────────────

function fail(message) {
  console.error(`[FAIL] ${message}`);
  process.exit(1);
}

function ok(message)   { console.log(`[OK] ${message}`); }
function info(message) { console.log(`[INFO] ${message}`); }

// ── Timezone helper (mirrors upload-youtube-batch.mjs) ────────────────────────

function localToUTC(dateStr, timeStr, timezone) {
  const assumed = new Date(`${dateStr}T${timeStr}:00.000Z`);
  const parts   = new Intl.DateTimeFormat('en-CA', {
    timeZone: timezone,
    year:     'numeric',
    month:    '2-digit',
    day:      '2-digit',
    hour:     '2-digit',
    minute:   '2-digit',
    second:   '2-digit',
    hour12:   false,
  }).formatToParts(assumed);
  const p = {};
  for (const part of parts) p[part.type] = part.value;
  const localAsUTC = new Date(`${p.year}-${p.month}-${p.day}T${p.hour}:${p.minute}:${p.second}.000Z`);
  const offsetMs   = localAsUTC.getTime() - assumed.getTime();
  return new Date(assumed.getTime() - offsetMs);
}

// ── Entry point ───────────────────────────────────────────────────────────────

const args = parseArgs(process.argv.slice(2));

if (!args.result)         fail('Missing required --result <path>');
if (!args.videoId)        fail('Missing required --video-id <id>');
if (!args.publishAtLocal) fail('Missing required --publish-at-local "YYYY-MM-DDTHH:MM:SS"');

const localMatch = args.publishAtLocal.match(/^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2})(?::\d{2})?$/);
if (!localMatch) {
  fail('--publish-at-local must be in format YYYY-MM-DDTHH:MM:SS (e.g. 2026-05-24T13:00:00)');
}

try { new Intl.DateTimeFormat('en', { timeZone: args.timezone }).format(new Date()); }
catch { fail(`Invalid timezone: "${args.timezone}"`); }

const resultPath    = path.isAbsolute(args.result) ? args.result : path.resolve(process.cwd(), args.result);
const slotDate      = localMatch[1];                                      // YYYY-MM-DD
const slotTime      = localMatch[2];                                      // HH:MM
const publishAtFull = `${slotDate}T${slotTime}:00`;
const publishAtUTC  = localToUTC(slotDate, slotTime, args.timezone).toISOString();

info(`result:         ${resultPath}`);
info(`video_id:       ${args.videoId}`);
info(`publishAtLocal: ${publishAtFull}`);
info(`publishAt:      ${publishAtUTC}`);
info(`scheduleSlot:   ${slotTime}`);
info(`timezone:       ${args.timezone}`);

if (!fs.existsSync(resultPath)) fail(`Result file not found: ${resultPath}`);

let raw;
try   { raw = JSON.parse(fs.readFileSync(resultPath, 'utf8')); }
catch (err) { fail(`Failed to parse result file: ${err.message}`); }

if (!Array.isArray(raw.videos)) {
  fail('Result file does not have a "videos" array. Only the batch format (youtube_upload_batch) is supported.');
}

const idx = raw.videos.findIndex((v) => v.id === args.videoId);
if (idx < 0) fail(`Video "${args.videoId}" not found in result file.`);

const entry = raw.videos[idx];
if (!entry.youtube_video_id) {
  fail(`Video "${args.videoId}" has no youtube_video_id — it must be successfully uploaded before marking it as scheduled.`);
}

raw.videos[idx] = {
  ...entry,
  scheduled:        true,
  publishAt:        publishAtUTC,
  publishAtLocal:   publishAtFull,
  scheduleTimezone: args.timezone,
  scheduleSlot:     slotTime,
};

raw.generated_at = new Date().toISOString();

fs.writeFileSync(resultPath, JSON.stringify(raw, null, 2) + '\n', 'utf8');

ok(`marked ${args.videoId} as scheduled`);
ok(`publishAt=${publishAtUTC}`);
ok(`publishAtLocal=${publishAtFull}`);
ok(`slot=${slotTime}  tz=${args.timezone}`);
console.log('Done.');
