import assert from 'node:assert/strict';
import test from 'node:test';

import { draftLinkState, linkedSlugForDraft } from '../lib/draft-link.mjs';

const DRAFT_30 = '30.Söz - 1.Maksad - Mukaddime.txt';

test('rejects a stale link to a different numbered work', () => {
  assert.equal(linkedSlugForDraft({ [DRAFT_30]: '21-soz-2-makam' }, DRAFT_30), null);
});

test('rejects a generic legacy slug for a numbered draft', () => {
  const source = () => '24. Söz';
  assert.equal(linkedSlugForDraft({ [DRAFT_30]: 'Sevgi-ve-Korku' }, DRAFT_30, source), null);
  assert.deepEqual(draftLinkState({ [DRAFT_30]: 'Sevgi-ve-Korku' }, DRAFT_30, source), {
    slug: null,
    stale_slug: 'Sevgi-ve-Korku',
    mismatch: true,
  });
});

test('accepts a numberless editorial slug when source frontmatter matches', () => {
  assert.equal(
    linkedSlugForDraft(
      { '20. Mektup - 2. Makam - 10. Kelime.txt': 'bir-bahari-yaratmak-neden-bir-cicek-kadar-kolaydir' },
      '20. Mektup - 2. Makam - 10. Kelime.txt',
      () => '20. Mektup',
    ),
    'bir-bahari-yaratmak-neden-bir-cicek-kadar-kolaydir',
  );
});

test('resolves the real blog slug only for the selected draft', () => {
  const links = {
    'Sevgi ve Korku.txt': 'Sevgi-ve-Korku',
    [DRAFT_30]: '30-soz-1-maksad-mukaddime-benlik-kainati-acan-anahtar',
  };
  assert.equal(
    linkedSlugForDraft(links, DRAFT_30),
    '30-soz-1-maksad-mukaddime-benlik-kainati-acan-anahtar',
  );
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
