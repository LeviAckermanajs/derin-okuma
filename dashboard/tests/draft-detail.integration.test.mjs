import assert from 'node:assert/strict';
import test from 'node:test';

import { apiDraft } from '../server.mjs';

test('draft detail never inherits another slug package or pipeline state', () => {
  const filename = '30.Söz - 1.Maksad - Mukaddime.txt';
  const detail = apiDraft(filename);

  assert.ok(detail);
  assert.equal(detail.blog_slug, '30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur');
  assert.equal(
    detail.slug_detail.blog_path,
    'src/content/blog/30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur.md',
  );
  assert.equal(detail.slug_detail.package_status, 'missing');
  assert.equal(detail.slug_detail.pipeline, null);
  assert.equal(detail.slug_detail.validation_exists, false);
  assert.notEqual(detail.blog_slug, 'Sevgi-ve-Korku');
});
