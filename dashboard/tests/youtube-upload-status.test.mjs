import assert from 'node:assert/strict';
import test from 'node:test';

import {
  isYoutubeUploadSuccess,
  summarizeYoutubeUploadResult,
} from '../lib/youtube-upload-status.mjs';

function video(id, status, overrides = {}) {
  return {
    id,
    status,
    youtube_video_id: overrides.youtube_video_id ?? null,
    youtube_url: overrides.youtube_url ?? null,
    publishAtLocal: overrides.publishAtLocal ?? null,
  };
}

test('result exists with uploaded=0 failed=1 is not completed', () => {
  const summary = summarizeYoutubeUploadResult({
    summary: { total: 6, uploaded: 0, skipped: 0, failed: 1 },
    videos: [
      video('short-001', 'failed', { publishAtLocal: '2026-07-26T13:00:00' }),
      video('short-002', 'pending', { publishAtLocal: '2026-07-26T19:00:00' }),
      video('short-003', 'pending', { publishAtLocal: '2026-07-26T22:00:00' }),
      video('short-004', 'pending', { publishAtLocal: '2026-07-27T13:00:00' }),
      video('short-005', 'pending', { publishAtLocal: '2026-07-27T19:00:00' }),
      video('short-006', 'pending', { publishAtLocal: '2026-07-27T22:00:00' }),
    ],
  });

  assert.equal(summary.overall_status, 'failed');
  assert.equal(summary.completed, false);
  assert.equal(summary.successful, 0);
  assert.equal(summary.failed, 1);
  assert.equal(summary.pending, 5);
});

test('one failed and five pending is failed overall', () => {
  const summary = summarizeYoutubeUploadResult({
    videos: [
      video('short-001', 'failed'),
      video('short-002', 'pending'),
      video('short-003', 'pending'),
      video('short-004', 'pending'),
      video('short-005', 'pending'),
      video('short-006', 'pending'),
    ],
  });

  assert.equal(summary.overall_status, 'failed');
  assert.equal(summary.successful, 0);
  assert.equal(summary.pending, 5);
});

test('three uploaded and three pending is partial', () => {
  const summary = summarizeYoutubeUploadResult({
    videos: [
      video('short-001', 'uploaded', { youtube_video_id: 'yt-1', publishAtLocal: '2026-07-23T13:00:00' }),
      video('short-002', 'uploaded', { youtube_video_id: 'yt-2', publishAtLocal: '2026-07-23T19:00:00' }),
      video('short-003', 'uploaded', { youtube_video_id: 'yt-3', publishAtLocal: '2026-07-23T22:00:00' }),
      video('short-004', 'pending'),
      video('short-005', 'pending'),
      video('short-006', 'pending'),
    ],
  });

  assert.equal(summary.overall_status, 'partial');
  assert.equal(summary.successful, 3);
  assert.equal(summary.pending, 3);
});

test('six uploaded with youtube ids is completed', () => {
  const summary = summarizeYoutubeUploadResult({
    videos: Array.from({ length: 6 }, (_, index) => video(`short-00${index + 1}`, 'uploaded', { youtube_video_id: `yt-${index + 1}` })),
  });

  assert.equal(summary.overall_status, 'completed');
  assert.equal(summary.completed, true);
  assert.equal(summary.successful, 6);
});

test('status uploaded with null youtube_video_id is not success', () => {
  const entry = video('short-001', 'uploaded', { youtube_video_id: null });
  const summary = summarizeYoutubeUploadResult({ videos: [entry] });

  assert.equal(isYoutubeUploadSuccess(entry), false);
  assert.equal(summary.overall_status, 'failed');
  assert.equal(summary.completed, false);
  assert.equal(summary.failed, 1);
});

test('retry candidates are entries without youtube video proof', () => {
  const entries = [
    video('short-001', 'uploaded', { youtube_video_id: 'yt-1' }),
    video('short-002', 'skipped', { youtube_video_id: 'yt-2' }),
    video('short-003', 'pending'),
    video('short-004', 'failed'),
  ];

  const retryIds = entries.filter((entry) => !isYoutubeUploadSuccess(entry)).map((entry) => entry.id);
  assert.deepEqual(retryIds, ['short-003', 'short-004']);
});
