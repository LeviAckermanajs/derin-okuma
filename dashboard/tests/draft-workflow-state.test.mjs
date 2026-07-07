import assert from 'node:assert/strict';
import test from 'node:test';

import { draftWorkflowDefaults } from '../public/draft-workflow-state.js';

const hints = {
  day: { next_day: 48 },
  youtube: { suggested_date: '2026-07-08' },
};

test('switching from draft A to draft B does not carry workflow fields', () => {
  const cache = new Map();
  cache.set('A.txt', {
    manual: true,
    title: 'A manuel başlık',
    day: '43',
    run_id: 'day43-batch-a',
    youtubeDateManual: true,
    schedule_date: '2026-07-01',
  });

  const a = draftWorkflowDefaults({ filename: 'A.txt', slug_detail: null }, cache.get('A.txt'), hints, '2026-07-07');
  const b = draftWorkflowDefaults({ filename: '30.Söz - 1.Maksad - Mukaddime.txt', slug_detail: null }, cache.get('30.Söz - 1.Maksad - Mukaddime.txt'), hints, '2026-07-07');

  assert.deepEqual(a, {
    title: 'A manuel başlık', day: '43', runId: 'day43-batch-a', youtubeDate: '2026-07-01',
  });
  assert.deepEqual(b, {
    title: '30.Söz - 1.Maksad - Mukaddime', day: '48', runId: 'day48-batch-a', youtubeDate: '2026-07-08',
  });
});

test('the same draft keeps its manual values', () => {
  const cached = { manual: true, title: 'Manuel', day: '52', run_id: 'custom-52', youtubeDateManual: true, schedule_date: '2026-07-20' };
  assert.deepEqual(
    draftWorkflowDefaults({ filename: 'B.txt', slug_detail: null }, cached, hints, '2026-07-07'),
    { title: 'Manuel', day: '52', runId: 'custom-52', youtubeDate: '2026-07-20' },
  );
});
