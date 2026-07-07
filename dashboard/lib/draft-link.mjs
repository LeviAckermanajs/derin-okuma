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
export function isDraftLinkCompatible(filename, blogSlug, blogSource = null) {
  if (typeof blogSlug !== 'string' || !/^[a-zA-Z0-9_-]+$/.test(blogSlug)) return false;
  const draftNumber = leadingWorkNumber(slugifyDraftName(filename));
  const blogNumber = leadingWorkNumber(blogSlug);
  if (draftNumber === null || blogNumber === draftNumber) return true;
  if (blogNumber !== null) return false;
  // Editorial slugs may omit the work number. When source frontmatter is
  // available, use it as the authoritative identity check.
  if (blogSource === null) return true;
  return leadingWorkNumber(slugifyDraftName(blogSource)) === draftNumber;
}

export function linkedSlugForDraft(links, filename, sourceForSlug = null) {
  if (!links || typeof links !== 'object' || Array.isArray(links)) return null;
  const value = links[filename];
  const source = typeof sourceForSlug === 'function' ? sourceForSlug(value) : null;
  return isDraftLinkCompatible(filename, value, source) ? value : null;
}

export function draftLinkState(links, filename, sourceForSlug = null) {
  const raw = links && typeof links === 'object' && !Array.isArray(links)
    ? links[filename]
    : null;
  const slug = linkedSlugForDraft(links, filename, sourceForSlug);
  return {
    slug,
    stale_slug: typeof raw === 'string' && raw !== slug ? raw : null,
    mismatch: typeof raw === 'string' && raw !== slug,
  };
}
