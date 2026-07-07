import assert from 'node:assert/strict';
import test from 'node:test';

import { linkedSlugForDraft } from '../lib/draft-link.mjs';

const DRAFT_30 = '30.Söz - 1.Maksad - Mukaddime.txt';

test('rejects a stale link to a different numbered work', () => {
  assert.equal(linkedSlugForDraft({ [DRAFT_30]: '21-soz-2-makam' }, DRAFT_30), null);
});

test('accepts an editorial slug belonging to the same numbered work', () => {
  assert.equal(
    linkedSlugForDraft({ [DRAFT_30]: '30-soz-1-maksad-mukaddime-insanin-yolculugu' }, DRAFT_30),
    '30-soz-1-maksad-mukaddime-insanin-yolculugu',
  );
});

test('does not reuse a value when links state is missing or malformed', () => {
  assert.equal(linkedSlugForDraft(null, DRAFT_30), null);
  assert.equal(linkedSlugForDraft([], DRAFT_30), null);
  assert.equal(linkedSlugForDraft({ [DRAFT_30]: { slug: '21-soz-2-makam' } }, DRAFT_30), null);
});

test('an unlinked new draft has no package slug', () => {
  assert.equal(linkedSlugForDraft({}, DRAFT_30), null);
});
