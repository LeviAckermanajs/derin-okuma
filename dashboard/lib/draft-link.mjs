export function slugifyDraftName(filename) {
  return String(filename ?? '')
    .replace(/\.(txt|md|mdx)$/i, '')
    .replace(/[ğĞ]/g, 'g').replace(/[üÜ]/g, 'u').replace(/[şŞ]/g, 's')
    .replace(/[ıİ]/g, 'i').replace(/[öÖ]/g, 'o').replace(/[çÇ]/g, 'c')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function leadingWorkNumber(value) {
  const match = String(value ?? '').match(/^(\d{1,3})(?:\D|$)/);
  return match ? Number(match[1]) : null;
}

// Editorial slugs may differ from filenames, but numbered works cannot cross-link.
export function isDraftLinkCompatible(filename, blogSlug) {
  if (typeof blogSlug !== 'string' || !/^[a-zA-Z0-9_-]+$/.test(blogSlug)) return false;
  const draftNumber = leadingWorkNumber(slugifyDraftName(filename));
  const blogNumber = leadingWorkNumber(blogSlug);
  return draftNumber === null || blogNumber === null || draftNumber === blogNumber;
}

export function linkedSlugForDraft(links, filename) {
  if (!links || typeof links !== 'object' || Array.isArray(links)) return null;
  const value = links[filename];
  return isDraftLinkCompatible(filename, value) ? value : null;
}
