import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { computeYoutubeScheduleHint } from '../lib/youtube-schedule-hint.mjs';

function writeResult(root, folder, videos) {
  const target = path.join(root, folder);
  fs.mkdirSync(target, { recursive: true });
  fs.writeFileSync(path.join(target, 'youtube-upload-result.json'), JSON.stringify({ videos }));
}

test('02/07/2026 planından sonraki gün 03/07/2026 olur', t => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'youtube-hint-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  writeResult(root, 'day-46', [{ status: 'uploaded', youtube_video_id: 'yt-1', scheduled: true, publishAtLocal: '2026-07-02T22:00:00' }]);

  const hint = computeYoutubeScheduleHint(root);
  assert.equal(hint.last_scheduled, '2026-07-02');
  assert.equal(hint.suggested_date, '2026-07-03');
});

test('yeni plan dosyası eklendiğinde öneri fresh scan ile ilerler', t => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'youtube-hint-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  writeResult(root, 'first', [{ status: 'uploaded', youtube_video_id: 'yt-1', scheduled: true, publishAtLocal: '2026-07-02T22:00:00' }]);
  assert.equal(computeYoutubeScheduleHint(root).suggested_date, '2026-07-03');

  writeResult(root, 'second', [{ status: 'uploaded', youtube_video_id: 'yt-2', scheduled: true, publishAtLocal: '2026-07-04T13:00:00' }]);
  assert.equal(computeYoutubeScheduleHint(root).suggested_date, '2026-07-05');
});

test('planlanmamış upload timestamp alanları plan tarihi sayılmaz', t => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'youtube-hint-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  writeResult(root, 'unscheduled', [{ scheduled: false, uploadedAt: '2026-08-10T10:00:00Z' }]);

  const hint = computeYoutubeScheduleHint(root, { now: new Date('2026-06-30T09:00:00Z') });
  assert.equal(hint.last_scheduled, null);
  assert.equal(hint.suggested_date, '2026-07-01');
});

test('failed/pending publishAtLocal tarihleri plan tarihi sayılmaz', t => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'youtube-hint-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  writeResult(root, 'failed-attempt', [
    { status: 'failed', youtube_video_id: null, scheduled: true, publishAtLocal: '2026-07-26T13:00:00' },
    { status: 'pending', youtube_video_id: null, scheduled: true, publishAtLocal: '2026-07-27T22:00:00' },
  ]);

  const hint = computeYoutubeScheduleHint(root, { now: new Date('2026-07-24T09:00:00Z') });
  assert.equal(hint.last_scheduled, null);
  assert.equal(hint.suggested_date, '2026-07-25');
});

test('başarısız attempt 27/07 içerirken son başarılı 25/07 ise öneri 26/07 olur', t => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'youtube-hint-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  writeResult(root, 'success', [
    { status: 'uploaded', youtube_video_id: 'yt-ok', scheduled: true, publishAtLocal: '2026-07-25T22:00:00' },
  ]);
  writeResult(root, 'failed-attempt', [
    { status: 'failed', youtube_video_id: null, scheduled: true, publishAtLocal: '2026-07-26T13:00:00' },
    { status: 'pending', youtube_video_id: null, scheduled: true, publishAtLocal: '2026-07-27T22:00:00' },
  ]);

  const hint = computeYoutubeScheduleHint(root);
  assert.equal(hint.last_scheduled, '2026-07-25');
  assert.equal(hint.suggested_date, '2026-07-26');
});
