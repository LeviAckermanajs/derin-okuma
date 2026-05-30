#!/usr/bin/env node
// scripts/export-mobile-captions-static.mjs
// Generates a static mobile-friendly caption page for a slug/export package.
// Output: public/mobile-captions/<slug>-<token>/index.html + mobile-caption-link.json

import fs     from 'fs';
import path   from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __dirname   = path.dirname(fileURLToPath(import.meta.url));
const ROOT        = path.resolve(__dirname, '..');
const EXPORT_ROOT = process.env.DERIN_OKUMA_EXPORT_ROOT
  || '/mnt/c/Users/MUHAMMET/Desktop/Derin Okuma YT';
const SITE_BASE   = process.env.SITE_BASE_URL || 'https://derin-okuma.vercel.app';
const SHORTS_DIR  = path.join(ROOT, 'docs', 'video-tests', 'shorts');

// ── Helpers ───────────────────────────────────────────────────────────────────

function readJson(p)  { try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return null; } }
function readText(p)  { try { return fs.readFileSync(p, 'utf8').trim(); }     catch { return null; } }
function exists(p)    { return fs.existsSync(p); }

function esc(s) {
  return String(s ?? '')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

function sanitizeFolderName(name) {
  return (name
    .replace(/ *: */g, ' - ')
    .replace(/[<>"/\\|?*]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/[. ]+$/g, '')) || 'folder';
}

function fail(msg) { console.error(`[FAIL] ${msg}`); process.exit(1); }
function ok(msg)   { console.log(`[OK] ${msg}`); }
function info(msg) { console.log(`[INFO] ${msg}`); }

// ── CLI ───────────────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const a = { slug: null, manifest: null };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--slug'     && argv[i+1]) { a.slug     = argv[++i]; continue; }
    if (argv[i] === '--manifest' && argv[i+1]) { a.manifest = argv[++i]; continue; }
    if (argv[i].startsWith('--')) fail(`Unknown option: ${argv[i]}`);
  }
  return a;
}

// ── Export folder resolution ──────────────────────────────────────────────────

function resolveExportFolderBySlug(slug) {
  const pkgPath = path.join(SHORTS_DIR, slug, `${slug}-shorts-package.json`);
  const pkg     = readJson(pkgPath);
  if (pkg) {
    const title = pkg.source?.title || slug;
    return path.join(EXPORT_ROOT, sanitizeFolderName(title));
  }
  // Fallback: scan EXPORT_ROOT for a manifest with matching slug
  if (!exists(EXPORT_ROOT)) return null;
  function scan(dir, depth) {
    if (depth > 2) return null;
    let entries;
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return null; }
    for (const e of entries) {
      if (!e.isDirectory()) continue;
      const sub = path.join(dir, e.name);
      const mf  = readJson(path.join(sub, 'publish-manifest.json'));
      if (mf?.slug === slug) return sub;
      const found = scan(sub, depth + 1);
      if (found) return found;
    }
    return null;
  }
  return scan(EXPORT_ROOT, 0);
}

// ── Caption extraction ────────────────────────────────────────────────────────

function extractCaptions(manifest, exportFolder) {
  const tiktokPlan = readJson(path.join(exportFolder, 'tiktok-upload-plan.json'));

  return (manifest.videos ?? []).map((v, i) => {
    const shortId = v.id || `short-${String(i + 1).padStart(3, '0')}`;
    const num     = i + 1;

    let caption    = null;
    let captionSrc = null;

    // Priority 1: publish-manifest description (YouTube Shorts description)
    if (v.description?.trim()) {
      caption    = v.description.trim();
      captionSrc = 'publish_manifest';

    // Priority 2: publish-manifest tiktok.caption
    } else if (v.tiktok?.caption?.trim()) {
      caption    = v.tiktok.caption.trim();
      captionSrc = 'manifest_tiktok';

    } else {
      // Priority 3: tiktok-upload-plan caption
      const planItem = (tiktokPlan?.items ?? []).find(
        it => it.id === shortId || it.short_id === shortId);
      if (planItem?.caption?.trim()) {
        caption    = planItem.caption.trim();
        captionSrc = 'tiktok_plan';

      } else {
        // Priority 4: tiktok-captions text file
        const txtFile = path.join(exportFolder, 'tiktok-captions', `${shortId}.txt`);
        const txt     = readText(txtFile);
        if (txt) {
          caption    = txt;
          captionSrc = 'caption_file';

        } else {
          // Priority 5: fallback — title + hashtags
          const tags = (v.hashtags ?? []).join(' ');
          caption    = `${v.title ?? shortId}${tags ? ' ' + tags : ''}`;
          captionSrc = 'fallback';
        }
      }
    }

    return {
      id:          shortId,
      num,
      title:       v.title ?? shortId,
      caption,
      caption_src: captionSrc,
      is_fallback: captionSrc === 'fallback',
      filename:    v.path ? path.basename(v.path) : null,
    };
  });
}

// ── Static HTML generation ────────────────────────────────────────────────────

const PAGE_CSS = `
:root{--bg:#f8f7f2;--card:#fff;--border:#e0ddd4;--text:#1a1a1a;--muted:#888;--green:#2c6e49;--blue:#1a4a7a;--warn-bg:#fdecea;--warn-c:#c0392b}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:var(--bg);color:var(--text);font-size:16px;line-height:1.5;-webkit-text-size-adjust:100%}
.page{max-width:640px;margin:0 auto;padding:16px 14px 48px}
h1{font-size:21px;font-weight:700;margin-bottom:4px}
.sub{font-size:13px;color:var(--muted);margin-bottom:18px}
.card{background:var(--card);border:1px solid var(--border);border-radius:12px;margin-bottom:16px;overflow:hidden}
.ch{padding:12px 14px 10px;border-bottom:1px solid var(--border)}
.cn{font-size:11px;color:var(--muted);font-weight:700;letter-spacing:.06em;text-transform:uppercase}
.ct{font-size:18px;font-weight:700;margin-top:3px}
.cb{padding:12px 14px}
.cap{font-size:15px;white-space:pre-wrap;word-break:break-word;background:#f3f1ea;border-radius:8px;padding:10px 12px;margin-bottom:12px}
.warn{color:var(--warn-c);font-size:12px;background:var(--warn-bg);border-radius:6px;padding:6px 10px;margin-bottom:10px}
.btns{display:flex;gap:8px;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;gap:5px;padding:10px 16px;border:none;border-radius:8px;font-size:15px;font-weight:600;cursor:pointer;-webkit-tap-highlight-color:transparent}
.bc{background:var(--green);color:#fff}
.bt{background:var(--blue);color:#fff}
.btn:active{opacity:.8}
.fi{font-size:12px;color:var(--muted);margin-top:8px}
.toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:var(--green);color:#fff;padding:10px 22px;border-radius:20px;font-size:14px;font-weight:600;opacity:0;transition:opacity .2s;pointer-events:none;z-index:99;white-space:nowrap}
.toast.on{opacity:1}
`;

const PAGE_JS = `
function toast(m){const e=document.getElementById('t');e.textContent=m;e.classList.add('on');clearTimeout(e._);e._=setTimeout(()=>e.classList.remove('on'),1800)}
function cp(text){if(navigator.clipboard){navigator.clipboard.writeText(text).then(()=>toast('Kopyalandı ✓')).catch(()=>fb(text))}else{fb(text)}}
function fb(text){const ta=document.createElement('textarea');ta.value=text;ta.style.cssText='position:fixed;opacity:0;top:0;left:0';document.body.appendChild(ta);ta.focus();ta.select();try{document.execCommand('copy');toast('Kopyalandı ✓')}catch{toast('Hata')}document.body.removeChild(ta)}
`;

function generateHtml({ title, slug, generatedAt, videos }) {
  const genDate = generatedAt
    ? new Date(generatedAt).toLocaleDateString('tr-TR') : '';
  const subtitle = [slug, genDate].filter(Boolean).join(' · ');

  const cards = videos.map(v => {
    const capId      = `c${v.num}`;
    const titleJson  = JSON.stringify(v.title);
    const fallback   = v.is_fallback
      ? `<div class="warn">⚠ Bu açıklama fallback kaynaktan üretildi.</div>` : '';
    const fileInfo   = v.filename
      ? `<div class="fi">📁 ${esc(v.filename)}</div>` : '';
    return `<div class="card">
<div class="ch"><div class="cn">Short ${v.num}</div><div class="ct">${esc(v.title)}</div></div>
<div class="cb">
${fallback}
<div class="cap" id="${capId}">${esc(v.caption)}</div>
<div class="btns">
<button class="btn bc" onclick="cp(document.getElementById('${capId}').textContent.trim())">📋 Açıklamayı Kopyala</button>
<button class="btn bt" onclick="cp(${titleJson})">📌 Başlığı Kopyala</button>
</div>
${fileInfo}
</div>
</div>`;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
<meta name="theme-color" content="#f8f7f2">
<title>${esc(title)} — Caption'lar</title>
<style>${PAGE_CSS}</style>
</head>
<body>
<div class="page">
<h1>${esc(title)}</h1>
<p class="sub">${esc(subtitle)}</p>
${cards}
</div>
<div class="toast" id="t"></div>
<script>${PAGE_JS}</script>
</body>
</html>`;
}

// ── Main ──────────────────────────────────────────────────────────────────────

function main() {
  const args = parseArgs(process.argv.slice(2));

  if (!args.slug && !args.manifest) {
    fail('Usage: --slug <slug>  or  --manifest <path-to-publish-manifest.json>');
  }

  let slug         = args.slug;
  let exportFolder = null;
  let manifestPath = null;

  if (args.manifest) {
    manifestPath = path.resolve(args.manifest);
    // Security: must be within EXPORT_ROOT
    const safeRoot = path.resolve(EXPORT_ROOT);
    if (!manifestPath.startsWith(safeRoot + path.sep) && manifestPath !== safeRoot) {
      fail('manifest path must be within EXPORT_ROOT');
    }
    if (!exists(manifestPath)) fail(`Manifest not found: ${manifestPath}`);
    exportFolder = path.dirname(manifestPath);
    const mf     = readJson(manifestPath);
    if (!mf)     fail('Cannot parse manifest JSON');
    slug         = slug || mf.slug;

  } else {
    if (!/^[a-zA-Z0-9_-]+$/.test(slug)) fail(`Invalid slug: ${slug}`);
    exportFolder = resolveExportFolderBySlug(slug);
    if (!exportFolder || !exists(exportFolder)) fail(`Export folder not found for slug: ${slug}`);
    manifestPath = path.join(exportFolder, 'publish-manifest.json');
    if (!exists(manifestPath)) fail(`publish-manifest.json not found in: ${exportFolder}`);
  }

  if (!slug || !/^[a-zA-Z0-9_-]+$/.test(slug)) fail(`Cannot determine valid slug`);

  const manifest = readJson(manifestPath);
  if (!manifest) fail('Cannot parse publish-manifest.json');

  // Check existing link
  const linkPath     = path.join(exportFolder, 'mobile-caption-link.json');
  const existingLink = readJson(linkPath);
  if (existingLink) {
    info(`Mevcut sayfa: ${existingLink.url}`);
    info(`Yeni sayfa oluşturuluyor...`);
  }

  // Extract captions
  const videos = extractCaptions(manifest, exportFolder);
  const title  = path.basename(exportFolder);
  const hasFallback = videos.some(v => v.is_fallback);
  if (hasFallback) info('Uyarı: Bazı açıklamalar fallback kaynaktan üretildi.');

  // Generate random token (8 hex chars)
  const token      = crypto.randomBytes(4).toString('hex');
  const dirName    = `${slug}-${token}`;
  const outputDir  = path.join(ROOT, 'public', 'mobile-captions', dirName);
  const outputFile = path.join(outputDir, 'index.html');
  const urlPath    = `/mobile-captions/${dirName}/`;
  const fullUrl    = `${SITE_BASE}${urlPath}`;
  const localPath  = `public/mobile-captions/${dirName}/index.html`;

  // Generate HTML (no local paths, no secrets, no tokens)
  const html = generateHtml({
    title,
    slug,
    generatedAt: manifest.generated_at,
    videos,
  });

  // Write output
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(outputFile, html, 'utf8');
  ok(`HTML yazıldı: ${localPath}`);

  // Caption source summary
  const srcSet    = new Set(videos.map(v => v.caption_src));
  const primarySrc = videos.find(v => !v.is_fallback)?.caption_src || 'fallback';

  // Write link file to export folder
  const linkData = {
    slug,
    url:        fullUrl,
    local_path: localPath,
    created_at: new Date().toISOString(),
    source:     primarySrc,
    caption_sources: [...srcSet],
  };
  fs.writeFileSync(linkPath, JSON.stringify(linkData, null, 2), 'utf8');
  ok(`Link dosyası yazıldı: ${path.relative(ROOT, linkPath)}`);

  ok(`Vercel URL: ${fullUrl}`);
  info('Bu linkin telefondan açılması için değişikliklerin Vercel\'e deploy edilmesi gerekir.');
}

main();
