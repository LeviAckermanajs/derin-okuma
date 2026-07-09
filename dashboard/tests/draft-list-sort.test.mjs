import assert from 'node:assert/strict';
import test from 'node:test';

import { buildDraftListItem, compareDraftListItems } from '../server.mjs';

function mockStat(iso, size = 100) {
  const mtime = new Date(iso);
  return {
    mtime,
    mtimeMs: mtime.getTime(),
    size,
  };
}

test('draft list sorts newest modified draft first by raw mtimeMs', () => {
  const older = buildDraftListItem(
    'older.txt',
    mockStat('2026-07-07T09:00:00.000Z'),
    'older-slug',
    'filled',
  );
  const newer = buildDraftListItem(
    'newer.txt',
    mockStat('2026-07-09T09:00:00.000Z'),
    'newer-slug',
    'draft',
  );
  const middle = buildDraftListItem(
    'middle.txt',
    mockStat('2026-07-08T09:00:00.000Z'),
    'middle-slug',
    'blog_created',
  );

  const sorted = [older, newer, middle].sort(compareDraftListItems);

  assert.deepEqual(sorted.map(d => d.filename), ['newer.txt', 'middle.txt', 'older.txt']);
  assert.deepEqual(sorted.map(d => d.mtimeMs), [newer.mtimeMs, middle.mtimeMs, older.mtimeMs]);
});

test('draft list uses filename as stable tie-breaker when mtime is equal', () => {
  const sameTime = '2026-07-09T09:00:00.000Z';
  const beta = buildDraftListItem('beta.txt', mockStat(sameTime), null, 'draft');
  const alpha = buildDraftListItem('alpha.txt', mockStat(sameTime), null, 'draft');

  const sorted = [beta, alpha].sort(compareDraftListItems);

  assert.deepEqual(sorted.map(d => d.filename), ['alpha.txt', 'beta.txt']);
});

test('draft list item keeps slug and status metadata independent of sorting', () => {
  const linked = buildDraftListItem(
    'linked.txt',
    mockStat('2026-07-09T09:00:00.000Z'),
    'linked-slug',
    'prep_ready',
  );
  const unlinked = buildDraftListItem(
    'unlinked.txt',
    mockStat('2026-07-08T09:00:00.000Z'),
    null,
    'draft',
  );

  const sorted = [unlinked, linked].sort(compareDraftListItems);

  assert.equal(sorted[0].filename, 'linked.txt');
  assert.equal(sorted[0].blog_slug, 'linked-slug');
  assert.equal(sorted[0].blogSlug, 'linked-slug');
  assert.equal(sorted[0].status, 'prep_ready');
  assert.equal(sorted[1].filename, 'unlinked.txt');
  assert.equal(sorted[1].blog_slug, null);
  assert.equal(sorted[1].blogSlug, null);
  assert.equal(sorted[1].status, 'draft');
});
