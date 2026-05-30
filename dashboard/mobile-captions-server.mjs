#!/usr/bin/env node
// dashboard/mobile-captions-server.mjs
// Read-only mobile caption viewer. No subprocess, no secrets, no POST endpoints.

import http from 'http';
import fs   from 'fs';
import path from 'path';
import os   from 'os';
import { fileURLToPath } from 'url';

const __dirname   = path.dirname(fileURLToPath(import.meta.url));
const HOST        = '0.0.0.0';
const PORT        = 3457;
const EXPORT_ROOT = process.env.DERIN_OKUMA_EXPORT_ROOT
  || '/mnt/c/Users/MUHAMMET/Desktop/Derin Okuma YT';

// ── Helpers ───────────────────────────────────────────────────────────────────

function readJson(p)  { try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return null; } }
function readText(p)  { try { return fs.readFileSync(p, 'utf8').trim(); }     catch { return null; } }
function exists(p)    { return fs.existsSync(p); }

function esc(s) {
  return String(s ?? '')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

function getLocalIp() {
  for (const addrs of Object.values(os.networkInterfaces())) {
    for (const a of addrs) {
      if (a.family === 'IPv4' && !a.internal) return a.address;
    }
  }
  return null;
}

// ── Package scanning ──────────────────────────────────────────────────────────

function scanForPackages(dir, depth = 0) {
  const found = [];
  if (depth > 2) return found;
  let entries;
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return found; }

  for (const e of entries) {
    if (!e.isDirectory()) continue;
    const subDir  = path.join(dir, e.name);
    const mfPath  = path.join(subDir, 'publish-manifest.json');
    if (exists(mfPath)) {
      const mf = readJson(mfPath);
      if (mf) {
        found.push({
          folder:      path.relative(EXPORT_ROOT, subDir).replace(/\\/g, '/'),
          slug:        mf.slug || '',
          folder_name: e.name,
          video_count: mf.videos?.length ?? 0,
        });
        continue; // don't recurse into folders that already have a manifest
      }
    }
    found.push(...scanForPackages(subDir, depth + 1));
  }
  return found;
}

function listPackages() {
  if (!exists(EXPORT_ROOT)) return [];
  return scanForPackages(EXPORT_ROOT).sort((a, b) =>
    a.folder.localeCompare(b.folder, 'tr'));
}

function findPackage(query) {
  const all = listPackages();
  return (
    all.find(p => p.slug === query) ||
    all.find(p => p.folder_name === query) ||
    all.find(p => p.folder === query) ||
    null
  );
}

// ── Caption extraction ────────────────────────────────────────────────────────

function getPackageCaptions(folderRelative) {
  // Path traversal guard
  const resolved = path.resolve(EXPORT_ROOT, folderRelative);
  if (!resolved.startsWith(path.resolve(EXPORT_ROOT) + path.sep) &&
      resolved !== path.resolve(EXPORT_ROOT)) return null;

  if (!exists(resolved)) return null;

  const manifest   = readJson(path.join(resolved, 'publish-manifest.json'));
  const tiktokPlan = readJson(path.join(resolved, 'tiktok-upload-plan.json'));
  if (!manifest) return null;

  const videos = (manifest.videos ?? []).map((v, i) => {
    const shortId = v.id || `short-${String(i + 1).padStart(3, '0')}`;
    const num     = i + 1;

    // Caption priority:
    // 1. publish-manifest: description (YouTube shorts description)
    // 2. publish-manifest: tiktok.caption
    // 3. tiktok-upload-plan: items[].caption
    // 4. tiktok-captions/<shortId>.txt
    // 5. title + hashtags (fallback, shows warning)

    let caption    = null;
    let captionSrc = null;

    if (v.description?.trim()) {
      caption    = v.description.trim();
      captionSrc = 'manifest_description';
    } else if (v.tiktok?.caption?.trim()) {
      caption    = v.tiktok.caption.trim();
      captionSrc = 'manifest_tiktok';
    } else {
      const planItem = (tiktokPlan?.items ?? []).find(
        it => it.id === shortId || it.short_id === shortId);
      if (planItem?.caption?.trim()) {
        caption    = planItem.caption.trim();
        captionSrc = 'tiktok_plan';
      } else {
        const txtFile = path.join(resolved, 'tiktok-captions', `${shortId}.txt`);
        const txt     = readText(txtFile);
        if (txt) {
          caption    = txt;
          captionSrc = 'caption_file';
        } else {
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
      hashtags:    v.hashtags ?? [],
      filename:    v.path ? path.basename(v.path) : null,
    };
  });

  return {
    folder:       folderRelative,
    folder_name:  path.basename(folderRelative),
    slug:         manifest.slug ?? '',
    generated_at: manifest.generated_at ?? null,
    videos,
  };
}

// ── Inline styles ─────────────────────────────────────────────────────────────

const CSS = `
:root { --bg:#f8f7f2; --card:#fff; --border:#e0ddd4; --text:#1a1a1a; --muted:#888; --green:#2c6e49; --blue:#1a4a7a; --warn-bg:#fdecea; --warn-c:#c0392b; }
* { box-sizing:border-box; margin:0; padding:0; }
body { font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif; background:var(--bg); color:var(--text); font-size:16px; line-height:1.5; -webkit-text-size-adjust:100%; }
.page { max-width:640px; margin:0 auto; padding:16px 14px 40px; }
h1 { font-size:21px; font-weight:700; margin-bottom:4px; }
.page-sub { font-size:13px; color:var(--muted); margin-bottom:16px; }
.back { display:inline-block; margin-bottom:14px; color:var(--green); font-weight:600; text-decoration:none; font-size:15px; }
.pkg-list { list-style:none; }
.pkg-item a { display:block; background:var(--card); border:1px solid var(--border); border-radius:12px; padding:14px 16px; margin-bottom:10px; text-decoration:none; color:var(--text); }
.pkg-item a:active { background:#f0ede4; }
.pkg-meta { font-size:13px; color:var(--muted); margin-top:3px; }
.card { background:var(--card); border:1px solid var(--border); border-radius:12px; margin-bottom:16px; overflow:hidden; }
.card-head { padding:12px 14px 10px; border-bottom:1px solid var(--border); }
.card-num { font-size:12px; color:var(--muted); font-weight:700; letter-spacing:.05em; text-transform:uppercase; }
.card-title { font-size:18px; font-weight:700; margin-top:2px; }
.card-body { padding:12px 14px; }
.caption-box { font-size:15px; white-space:pre-wrap; word-break:break-word; background:#f3f1ea; border-radius:8px; padding:10px 12px; margin-bottom:12px; }
.fallback-note { color:var(--warn-c); font-size:12px; background:var(--warn-bg); border-radius:6px; padding:6px 10px; margin-bottom:10px; }
.btn-row { display:flex; gap:8px; flex-wrap:wrap; }
.btn { display:inline-flex; align-items:center; gap:5px; padding:10px 16px; border:none; border-radius:8px; font-size:15px; font-weight:600; cursor:pointer; -webkit-tap-highlight-color:transparent; }
.btn-cap  { background:var(--green); color:#fff; }
.btn-ttl  { background:var(--blue);  color:#fff; }
.btn:active { opacity:.8; }
.file-info { font-size:12px; color:var(--muted); margin-top:8px; }
.toast { position:fixed; bottom:24px; left:50%; transform:translateX(-50%); background:var(--green); color:#fff; padding:10px 22px; border-radius:20px; font-size:14px; font-weight:600; opacity:0; transition:opacity .2s; pointer-events:none; z-index:99; white-space:nowrap; }
.toast.on { opacity:1; }
.empty { color:var(--muted); padding:32px; text-align:center; }
`;

const JS = `
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('on');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('on'), 1800);
}
function cp(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => toast('Kopyalandı ✓')).catch(() => fb(text));
  } else { fb(text); }
}
function fb(text) {
  const ta = document.createElement('textarea');
  ta.value = text; ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0';
  document.body.appendChild(ta); ta.focus(); ta.select();
  try { document.execCommand('copy'); toast('Kopyalandı ✓'); } catch { toast('Hata'); }
  document.body.removeChild(ta);
}
`;

// ── HTML rendering ────────────────────────────────────────────────────────────

function html(title, body) {
  return `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
<meta name="theme-color" content="#f8f7f2">
<title>${esc(title)}</title>
<style>${CSS}</style>
</head>
<body>
<div class="page">${body}</div>
<div class="toast" id="toast"></div>
<script>${JS}</script>
</body>
</html>`;
}

function renderIndex(packages) {
  const items = packages.length
    ? packages.map(p => `<li class="pkg-item">
        <a href="/p/${esc(encodeURIComponent(p.slug || p.folder))}">
          <div>${esc(p.folder_name)}</div>
          <div class="pkg-meta">${p.video_count} video${p.slug ? ` · <code>${esc(p.slug)}</code>` : ''}</div>
        </a>
      </li>`).join('')
    : '<li class="empty">Export klasörü bulunamadı.</li>';

  return html('Derin Okuma — Caption\'lar', `
<h1>📱 Caption\'lar</h1>
<p class="page-sub">Paket seçin</p>
<ul class="pkg-list">${items}</ul>`);
}

function renderCaptionPage(data) {
  const cards = data.videos.map(v => {
    const fallbackNote = v.is_fallback
      ? `<div class="fallback-note">⚠ Bu açıklama fallback kaynaktan üretildi.</div>` : '';
    const fileInfo = v.filename
      ? `<div class="file-info">📁 ${esc(v.filename)}</div>` : '';
    const capId = `c${v.num}`;
    return `<div class="card">
  <div class="card-head">
    <div class="card-num">Short ${v.num}</div>
    <div class="card-title">${esc(v.title)}</div>
  </div>
  <div class="card-body">
    ${fallbackNote}
    <div class="caption-box" id="${capId}">${esc(v.caption)}</div>
    <div class="btn-row">
      <button class="btn btn-cap" onclick="cp(document.getElementById('${capId}').textContent.trim())">📋 Açıklamayı Kopyala</button>
      <button class="btn btn-ttl" onclick="cp(${JSON.stringify(v.title)})">📌 Başlığı Kopyala</button>
    </div>
    ${fileInfo}
  </div>
</div>`;
  }).join('');

  const subtitle = data.generated_at
    ? `${esc(data.slug)} · ${new Date(data.generated_at).toLocaleDateString('tr-TR')}` : esc(data.slug);

  return html(`${data.folder_name} — Caption\'lar`, `
<a class="back" href="/">← Geri</a>
<h1>${esc(data.folder_name)}</h1>
<p class="page-sub">${subtitle}</p>
${cards}`);
}

// ── HTTP server ───────────────────────────────────────────────────────────────

const server = http.createServer((req, res) => {
  if (req.method !== 'GET') {
    res.writeHead(405); res.end('Method Not Allowed'); return;
  }

  const url      = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = url.pathname;

  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(renderIndex(listPackages()));
    return;
  }

  const m = pathname.match(/^\/p\/([^/]+)$/);
  if (m) {
    const query = decodeURIComponent(m[1]);
    // Security: reject path traversal characters
    if (/[.]{2}|[/\\]/.test(query)) {
      res.writeHead(400); res.end('Bad Request'); return;
    }
    const pkg = findPackage(query);
    if (!pkg) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(html('Bulunamadı', `<a class="back" href="/">← Geri</a><h1>Paket bulunamadı: ${esc(query)}</h1>`));
      return;
    }
    const data = getPackageCaptions(pkg.folder);
    if (!data) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(html('Hata', `<a class="back" href="/">← Geri</a><h1>Manifest okunamadı.</h1>`));
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(renderCaptionPage(data));
    return;
  }

  res.writeHead(404); res.end('Not Found');
});

const localIp = getLocalIp();
server.listen(PORT, HOST, () => {
  console.log(`Mobile captions: http://127.0.0.1:${PORT}`);
  if (localIp) console.log(`Mobil erişim:    http://${localIp}:${PORT}`);
  console.log('Ctrl+C to stop.');
});
