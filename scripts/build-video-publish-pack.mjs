#!/usr/bin/env node
// build-video-publish-pack.mjs - create YouTube copy/paste upload files from metadata JSON

import fs from 'fs';
import path from 'path';
import process from 'process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

function parseArgs(argv) {
  const args = { slug: null, type: 'all', force: false };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--slug' && argv[i + 1]) args.slug = argv[++i];
    else if (arg === '--type' && argv[i + 1]) args.type = argv[++i];
    else if (arg === '--force') args.force = true;
    else fail(`Unknown or incomplete option: ${arg}`);
  }
  return args;
}

function fail(message) {
  console.error(`[FAIL] ${message}`);
  process.exit(1);
}

function ok(message) {
  console.log(`[OK] ${message}`);
}

function rel(filePath) {
  return path.relative(ROOT, filePath);
}

function p(...parts) {
  return path.join(ROOT, ...parts);
}

function readJson(filePath, label) {
  if (!fs.existsSync(filePath)) fail(`${label} metadata not found: ${rel(filePath)}`);
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    fail(`${label} metadata JSON parse failed: ${error.message}`);
  }
}

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
}

function hasTodo(value) {
  return typeof value === 'string' && /\bTODO\b/i.test(value);
}

function hashtagLine(hashtags) {
  return hashtags.join(' ');
}

function validateText(value, label) {
  if (!isNonEmptyString(value)) fail(`${label} is empty`);
  if (hasTodo(value)) fail(`${label} still contains TODO`);
}

function validateHashtags(hashtags, label) {
  if (!isNonEmptyArray(hashtags)) fail(`${label} hashtags array is empty`);
  hashtags.forEach((tag, index) => validateText(tag, `${label} hashtags[${index}]`));
}

function validateDescriptionHashtags(description, hashtags, label) {
  validateText(description, `${label} description`);
  validateHashtags(hashtags, label);
  if (!description.trim().endsWith(hashtagLine(hashtags))) {
    fail(`${label} description hashtag line does not match hashtags array`);
  }
}

function ensureCanWrite(filePath, force) {
  if (fs.existsSync(filePath) && !force) {
    fail(`${rel(filePath)} already exists. Use --force to overwrite.`);
  }
}

function writeFile(filePath, content, force, label) {
  ensureCanWrite(filePath, force);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
  ok(label || rel(filePath));
}

function writeOptionalFile(filePath, content, force, label) {
  if (!isNonEmptyString(content)) return false;
  writeFile(filePath, `${content.trim()}\n`, force, label);
  return true;
}

function writeRequiredText(filePath, content, force, label) {
  writeFile(filePath, `${content.trim()}\n`, force, label);
}

function loadLandscapeMetadata(slug) {
  const finalPath = p('docs/video-tests/metadata', `${slug}-landscape-publish-final.json`);
  const fallbackPath = p('docs/video-tests/metadata', `${slug}-landscape-metadata.json`);
  const sourcePath = fs.existsSync(finalPath) ? finalPath : fallbackPath;
  const metadata = readJson(sourcePath, 'Landscape');
  ok(`Loaded landscape metadata: ${rel(sourcePath)}`);
  return { metadata, sourcePath };
}

function loadShortsMetadata(slug) {
  const sourcePath = p('docs/video-tests/shorts', slug, 'metadata', `${slug}-shorts-metadata.json`);
  const metadata = readJson(sourcePath, 'Shorts');
  ok('Loaded shorts metadata');
  return { metadata, sourcePath };
}

function thumbnailTextForLandscape(metadata) {
  return metadata.selected_thumbnail_text
    || (Array.isArray(metadata.thumbnail_text_options) ? metadata.thumbnail_text_options[0] : '');
}

function buildLandscape(slug, baseDir, force) {
  const { metadata } = loadLandscapeMetadata(slug);
  const title = metadata.selected_title;
  const description = metadata.description;
  const hashtags = metadata.hashtags;
  const thumbnailText = thumbnailTextForLandscape(metadata);
  const playlist = metadata.playlist_or_folder || '';
  const seoKeywords = Array.isArray(metadata.seo_keywords) ? metadata.seo_keywords : [];
  const pinnedComment = metadata.pinned_comment || '';

  validateText(title, 'Landscape title');
  validateDescriptionHashtags(description, hashtags, 'Landscape');
  validateText(thumbnailText, 'Landscape thumbnail text');
  if (playlist) validateText(playlist, 'Landscape playlist');
  seoKeywords.forEach((keyword, index) => validateText(keyword, `Landscape seo_keywords[${index}]`));

  const outDir = path.join(baseDir, 'landscape');
  writeRequiredText(path.join(outDir, 'title.txt'), title, force, 'landscape/title.txt');
  writeRequiredText(path.join(outDir, 'description.txt'), description, force, 'landscape/description.txt');
  writeRequiredText(path.join(outDir, 'hashtags.txt'), hashtags.join('\n'), force, 'landscape/hashtags.txt');
  writeRequiredText(path.join(outDir, 'thumbnail_text.txt'), thumbnailText, force, 'landscape/thumbnail_text.txt');
  writeRequiredText(path.join(outDir, 'playlist.txt'), playlist, force, 'landscape/playlist.txt');
  writeRequiredText(path.join(outDir, 'seo_keywords.txt'), seoKeywords.join('\n'), force, 'landscape/seo_keywords.txt');
  const hasPinnedComment = writeOptionalFile(path.join(outDir, 'pinned_comment.txt'), pinnedComment, force, 'landscape/pinned_comment.txt');

  const notes = [
    `# Landscape Upload Notes - ${slug}`,
    '',
    '## Title',
    '',
    title,
    '',
    '## Thumbnail Text',
    '',
    thumbnailText,
    '',
    '## Playlist',
    '',
    playlist || 'Playlist yok.',
    '',
    '## Pinned Comment',
    '',
    hasPinnedComment ? 'pinned_comment.txt dosyası oluşturuldu.' : 'pinned comment yok.',
    '',
    '## Checklist',
    '',
    '- [ ] Video dosyası seçildi',
    '- [ ] Başlık yapıştırıldı',
    '- [ ] Açıklama yapıştırıldı',
    '- [ ] Hashtagler kontrol edildi',
    '- [ ] Thumbnail metni kontrol edildi',
    '- [ ] Playlist seçildi',
    '- [ ] Pinned comment kontrol edildi',
    ''
  ].join('\n');
  writeFile(path.join(outDir, 'upload-notes.md'), notes, force, 'landscape/upload-notes.md');

  return { title, playlist, folder: rel(outDir) };
}

function titleForShort(short) {
  return short.selected_title || short.title || '';
}

function validateShort(short) {
  const id = short.short_id || 'short';
  const title = titleForShort(short);
  validateText(short.short_id, `${id} short_id`);
  validateText(title, `${id} title`);
  validateDescriptionHashtags(short.description, short.hashtags, id);
  validateText(short.thumbnail_or_cover_text, `${id} thumbnail_or_cover_text`);
  if (short.hook !== undefined) validateText(short.hook, `${id} hook`);
}

function buildShortUploadNotes(short) {
  const id = short.short_id;
  return [
    `# ${id} Upload Notes`,
    '',
    '## Title',
    '',
    titleForShort(short),
    '',
    '## Thumbnail Text',
    '',
    short.thumbnail_or_cover_text,
    '',
    '## Checklist',
    '',
    '- [ ] Video dosyası seçildi',
    '- [ ] Başlık yapıştırıldı',
    '- [ ] Açıklama yapıştırıldı',
    '- [ ] Hashtagler kontrol edildi',
    '- [ ] Thumbnail/cover metni kontrol edildi',
    '- [ ] Yayın zamanı ayarlandı',
    ''
  ].join('\n');
}

function buildShorts(slug, baseDir, force) {
  const { metadata } = loadShortsMetadata(slug);
  if (!Array.isArray(metadata.shorts) || metadata.shorts.length === 0) fail('Shorts metadata has no shorts');
  ok(`Shorts count: ${metadata.shorts.length}`);

  const outDir = path.join(baseDir, 'shorts');
  const rows = [];

  for (const short of metadata.shorts) {
    validateShort(short);
    const id = short.short_id;
    const title = titleForShort(short);
    const shortDir = path.join(outDir, id);
    writeRequiredText(path.join(shortDir, 'title.txt'), title, force, `${id} title.txt`);
    writeRequiredText(path.join(shortDir, 'description.txt'), short.description, force, `${id} description.txt`);
    writeRequiredText(path.join(shortDir, 'hashtags.txt'), short.hashtags.join('\n'), force, `${id} hashtags.txt`);
    writeRequiredText(path.join(shortDir, 'thumbnail_text.txt'), short.thumbnail_or_cover_text, force, `${id} thumbnail_text.txt`);
    writeOptionalFile(path.join(shortDir, 'hook.txt'), short.hook || '', force, `${id} hook.txt`);
    writeFile(path.join(shortDir, 'upload-notes.md'), buildShortUploadNotes(short), force, `${id} upload-notes.md`);
    rows.push({ id, title, folder: rel(shortDir) });
  }

  const checklist = [
    `# Shorts Upload Checklist - ${slug}`,
    '',
    '## Upload Order',
    '',
    '| Short | Title | Video File | Uploaded? |',
    '|---|---|---|---|',
    ...rows.map((row) => `| ${row.id} | ${row.title} | TODO | [ ] |`),
    '',
    '## Notes',
    '',
    '- Her Short için ilgili klasörde title/description/hashtag/thumbnail text dosyaları var.',
    '- Upload öncesi video dosyası doğru Short ile eşleştirilmeli.',
    '- Description sonundaki hashtag satırı metadata ile tutarlı olmalı.',
    ''
  ].join('\n');
  writeFile(path.join(outDir, 'upload-checklist.md'), checklist, force, `Wrote ${rel(path.join(outDir, 'upload-checklist.md'))}`);

  return { rows, folder: rel(outDir) };
}

function buildIndex(slug, type, baseDir, force, shortsResult, landscapeResult) {
  const lines = [
    `# Publish Pack - ${slug}`,
    '',
    '## Generated',
    '',
    `- Type: ${type}`,
    `- Source slug: \`${slug}\``,
    '',
    '## Shorts',
    ''
  ];

  if (shortsResult) {
    lines.push('| Short | Title | Folder |', '|---|---|---|');
    lines.push(...shortsResult.rows.map((row) => `| ${row.id} | ${row.title} | \`${row.folder}\` |`));
  } else {
    lines.push('- Not generated.');
  }

  lines.push('', '## Landscape', '');
  if (landscapeResult) {
    lines.push(`- Title: ${landscapeResult.title}`);
    lines.push(`- Playlist: ${landscapeResult.playlist || ''}`);
    lines.push(`- Folder: \`${landscapeResult.folder}\``);
  } else {
    lines.push('- Not generated.');
  }

  lines.push(
    '',
    '## Next Step',
    '',
    'YouTube Studio’da ilgili video yüklenirken bu klasördeki `.txt` dosyaları kopyala-yapıştır için kullanılacak.',
    ''
  );

  writeFile(path.join(baseDir, 'index.md'), lines.join('\n'), force, `Wrote ${rel(path.join(baseDir, 'index.md'))}`);
}

const args = parseArgs(process.argv.slice(2));

if (!args.slug) {
  fail('Missing required --slug <slug>. Example: npm run video:publish-pack -- --slug 23-soz-2-mebhas-1-nukte --type shorts');
}

if (!['shorts', 'landscape', 'all'].includes(args.type)) {
  fail('--type must be one of: shorts, landscape, all');
}

console.log(`Video Publish Pack - ${args.slug}`);
console.log('');

const baseDir = p('docs/video-tests/publish', args.slug);
let shortsResult = null;
let landscapeResult = null;

if (args.type === 'shorts' || args.type === 'all') {
  shortsResult = buildShorts(args.slug, baseDir, args.force);
}

if (args.type === 'landscape' || args.type === 'all') {
  landscapeResult = buildLandscape(args.slug, baseDir, args.force);
}

buildIndex(args.slug, args.type, baseDir, args.force, shortsResult, landscapeResult);

console.log('');
console.log('Next:');
if (shortsResult) {
  console.log(`Open ${shortsResult.folder}/`);
  console.log('Use each short folder while uploading to YouTube.');
}
if (landscapeResult) {
  console.log(`Open ${landscapeResult.folder}/`);
  console.log('Use landscape text files while uploading to YouTube.');
}
