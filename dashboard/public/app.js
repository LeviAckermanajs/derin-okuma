// dashboard/public/app.js — Phase 3

// ── Global state ───────────────────────────────────────────────────────────

let config        = { n8n_url: 'http://localhost:5678', cwd: '', codex: { available: false } };
let activeTab     = 'drafts';
let currentDraft  = null;   // draft filename shown in draft detail
let currentSlug   = null;   // slug shown in shorts detail
let modalAction   = null;
let modalSlug     = null;
let modalParams   = {};
let modalNeedsRefresh = false;

let monitorJobId    = null;
let monitorInterval = null;
let logOffset       = 0;

let ytScheduleHint  = null;  // { suggested_date, note, source }
let dayHint         = { last_day: null, next_day: 1, source: null, source_slug: null };
let dayHintWarning  = null;
let tikTokTokenOk   = false; // true when token is valid and not expired
let localIpCache    = null;  // cached from /api/local-ip
let modalConfirmText = null; // expected confirmation text for current modal
const activeFillJobs = (() => {
  try { return JSON.parse(localStorage.getItem('derin-okuma-active-fill-jobs') || '{}'); }
  catch { return {}; }
})();
const draftParamCache = new Map();
const slugParamCache  = new Map();

// Istanbul is UTC+3 year-round (no DST since 2016)
function istanbulDateStr(offsetDays = 0) {
  const ms = Date.now() + 3 * 3_600_000 + offsetDays * 86_400_000;
  return new Date(ms).toISOString().slice(0, 10);
}

// ── Date formatting helpers ────────────────────────────────────────────────
// UI boundary: input/output to users is always DD/MM/YYYY.
// Internal values, API calls, and CLI arguments always stay YYYY-MM-DD.

function formatDateForDisplay(isoDate) {
  if (!isoDate) return '—';
  const m = String(isoDate).match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return String(isoDate);
  return `${m[3]}/${m[2]}/${m[1]}`;
}

function formatDateTimeForDisplay(isoStr) {
  if (!isoStr) return '—';
  try {
    const d = new Date(isoStr);
    if (isNaN(d.getTime())) return String(isoStr);
    const ist  = new Date(d.getTime() + 3 * 3_600_000);
    const dd   = String(ist.getUTCDate()).padStart(2, '0');
    const mm   = String(ist.getUTCMonth() + 1).padStart(2, '0');
    const yyyy = ist.getUTCFullYear();
    const hh   = String(ist.getUTCHours()).padStart(2, '0');
    const min  = String(ist.getUTCMinutes()).padStart(2, '0');
    const ss   = String(ist.getUTCSeconds()).padStart(2, '0');
    return `${dd}/${mm}/${yyyy} ${hh}:${min}:${ss}`;
  } catch { return String(isoStr); }
}

function parseDisplayDate(displayDate) {
  if (!displayDate) return '';
  const m = String(displayDate).match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (!m) return '';
  const dd = m[1].padStart(2, '0'), mm = m[2].padStart(2, '0'), yyyy = m[3];
  const day = parseInt(dd, 10), month = parseInt(mm, 10), year = parseInt(yyyy, 10);
  if (month < 1 || month > 12 || day < 1 || day > 31) return '';
  const d = new Date(year, month - 1, day);
  if (d.getFullYear() !== year || d.getMonth() !== month - 1 || d.getDate() !== day) return '';
  return `${yyyy}-${mm}-${dd}`;
}

function formatHintDates(hint) {
  if (!hint) return hint;
  return hint.replace(/\b(\d{4})-(\d{2})-(\d{2})\b/g, (_, y, mo, d) => `${d}/${mo}/${y}`);
}

function normalizeDayValue(value) {
  const raw = String(value ?? '').trim();
  if (!raw) return '';
  const m = raw.match(/^(?:day-?)?(\d{1,3})$/i) || raw.match(/\bday-?(\d{1,3})\b/i);
  if (!m) return '';
  const n = parseInt(m[1], 10);
  return n >= 1 && n <= 999 ? String(n) : '';
}

function defaultRunIdForDay(day) {
  const dayNum = normalizeDayValue(day) || '1';
  return `day${dayNum}-batch-a`;
}

function normalizeRunIdValue(runId, day) {
  const raw = String(runId ?? '').trim();
  if (!raw || raw === 'batch-a' || /^day1-batch-a$/i.test(raw)) return defaultRunIdForDay(day);
  return raw
    .replace(/^dayday-?(\d{1,3})(?=$|-)/i, 'day$1')
    .replace(/^day-(\d{1,3})(?=$|-)/i, 'day$1');
}

function dayHintText(existingDay) {
  const day = normalizeDayValue(existingDay);
  if (day) return `Bu paketin mevcut günü: day-${day}`;
  if (dayHintWarning) return `Önerilen gün: fallback day-1 (${dayHintWarning})`;
  if (dayHint?.last_day) return `Önerilen gün: son video paketinden sonraki gün (son: day-${dayHint.last_day})`;
  return 'Önerilen gün: önceki video paketi bulunamadı';
}

function suggestedDayFor(existingDay) {
  const ownDay = normalizeDayValue(existingDay);
  if (ownDay) return ownDay;
  return normalizeDayValue(dayHint?.next_day) || '1';
}

function rememberParams(cache, key, ids) {
  const saved = cache.get(key) || {};
  for (const [name, id] of Object.entries(ids)) saved[name] = document.getElementById(id)?.value ?? '';
  saved.manual = true;
  cache.set(key, saved);
}

function wireDayRunIdInputs(dayId, runIdId, onRemember) {
  const dayInput = document.getElementById(dayId);
  const runInput = document.getElementById(runIdId);
  if (!dayInput || !runInput) return;
  const wasDefaultRunId = () => {
    const v = runInput.value.trim();
    return !v || v === 'batch-a' || /^day-?\d{1,3}-batch-a$/i.test(v) || /^dayday-?\d{1,3}-batch-a$/i.test(v);
  };
  dayInput.addEventListener('input', () => {
    const day = normalizeDayValue(dayInput.value) || dayInput.value;
    if (wasDefaultRunId()) runInput.value = defaultRunIdForDay(day);
    onRemember();
  });
  runInput.addEventListener('blur', () => {
    runInput.value = normalizeRunIdValue(runInput.value, dayInput.value);
    onRemember();
  });
  runInput.addEventListener('input', onRemember);
}

function createDatePicker(id, isoValue, minIso) {
  const display = isoValue ? formatDateForDisplay(isoValue) : '';
  const valAttr = isoValue ? ` value="${esc(isoValue)}"` : '';
  const minAttr = minIso   ? ` min="${esc(minIso)}"`     : '';
  return `<div class="date-input-row" data-picker-id="${esc(id)}">
      <input class="param-input date-display-input" id="${esc(id)}-display"
        type="text" placeholder="GG/AA/YYYY"
        value="${esc(display)}" maxlength="10" autocomplete="off">
      <button type="button" class="date-picker-btn" data-picker-trigger="${esc(id)}"
        title="Takvim aç" aria-label="Takvim aç">📅</button>
      <input type="date" id="${esc(id)}" class="date-hidden-input"${valAttr}${minAttr}>
    </div>
    <span class="date-error" id="${esc(id)}-error"></span>`;
}

function wireDatePickers() {
  document.querySelectorAll('[data-picker-id]').forEach(wrap => {
    const id           = wrap.dataset.pickerId;
    const displayInput = document.getElementById(`${id}-display`);
    const hiddenInput  = document.getElementById(id);
    const errorEl      = document.getElementById(`${id}-error`);
    const btn          = wrap.querySelector(`[data-picker-trigger="${id}"]`);
    if (!displayInput || !hiddenInput) return;

    const openPicker = () => {
      if (typeof hiddenInput.showPicker === 'function') {
        try { hiddenInput.showPicker(); return; } catch {}
      }
      hiddenInput.focus();
    };

    btn?.addEventListener('click', e => { e.preventDefault(); openPicker(); });
    displayInput.addEventListener('click', openPicker);

    hiddenInput.addEventListener('change', () => {
      displayInput.value = hiddenInput.value ? formatDateForDisplay(hiddenInput.value) : '';
      if (errorEl) { errorEl.textContent = ''; errorEl.style.display = 'none'; }
    });

    displayInput.addEventListener('blur', () => {
      const val = displayInput.value.trim();
      if (!val) {
        hiddenInput.value = '';
        if (errorEl) { errorEl.textContent = ''; errorEl.style.display = 'none'; }
        return;
      }
      const iso = parseDisplayDate(val);
      if (!iso) {
        if (errorEl) {
          errorEl.textContent = 'Geçersiz tarih — GG/AA/YYYY formatında girin (örn: 07/06/2026)';
          errorEl.style.display = 'block';
        }
      } else {
        hiddenInput.value  = iso;
        displayInput.value = formatDateForDisplay(iso);
        if (errorEl) { errorEl.textContent = ''; errorEl.style.display = 'none'; }
      }
    });
  });
}

async function refreshYtScheduleHint() {
  try {
    ytScheduleHint = await apiFetch('/api/youtube-schedule-hint');
  } catch { ytScheduleHint = null; }
}

async function refreshDayHint() {
  try {
    dayHint = await apiFetch('/api/day-hint');
    dayHintWarning = null;
  } catch {
    dayHint = { last_day: null, next_day: 1, source: null, source_slug: null };
    dayHintWarning = 'day hint okunamadı';
  }
}

async function getMobileIp() {
  if (localIpCache !== null) return localIpCache;
  try {
    const r    = await apiFetch('/api/local-ip');
    localIpCache = r.ip || null;
  } catch { localIpCache = null; }
  return localIpCache;
}

// ── Utilities ──────────────────────────────────────────────────────────────

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function pill(cls, text) {
  return `<span class="pill pill-${cls}">${esc(text)}</span>`;
}

function pkgPill(status) {
  if (status === 'filled')        return pill('filled',   'filled');
  if (status === 'scaffold_only') return pill('scaffold', 'scaffold');
  if (status === 'missing')       return pill('missing',  'eksik');
  return pill('unknown', status ?? '—');
}

function pipelinePill(row) {
  if (row.is_stale_failed && row.validation_passed) return pill('stale-ok', 'stale');
  if (row.is_stale_failed)                          return pill('stale',    'stale failed');
  if (!row.pipeline_status)                         return pill('no',       '—');
  if (row.pipeline_status === 'ok' || row.pipeline_status === 'passed') return pill('ok', 'ok');
  return pill('failed', row.pipeline_status);
}

function boolPill(v, yesLabel = 'evet', noLabel = '—') {
  return v ? pill('yes', yesLabel) : pill('no', noLabel);
}

function relTime(iso) {
  if (!iso) return '—';
  const d   = new Date(iso);
  const sec = Math.round((Date.now() - d) / 1000);
  if (sec < 60)  return `${sec}s önce`;
  if (sec < 3600) return `${Math.round(sec/60)}dk önce`;
  if (sec < 86400) return `${Math.round(sec/3600)}sa önce`;
  return `${Math.round(sec/86400)}g önce`;
}

async function apiFetch(url) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return r.json();
}

// ── Tab switching ─────────────────────────────────────────────────────────

function switchTab(tabId) {
  activeTab = tabId;
  document.querySelectorAll('.tab-btn').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.tab === tabId));
  document.querySelectorAll('.tab-panel').forEach(panel =>
    panel.classList.toggle('hidden', panel.id !== `tab-${tabId}`));
  if (tabId === 'drafts')   loadDrafts();
  if (tabId === 'shorts')   loadOverview();
  if (tabId === 'services') loadServices();
}

// ── Draft list ─────────────────────────────────────────────────────────────

function draftStatusPill(status) {
  const map = {
    draft:            ['no',       'taslak'],
    blog_created:     ['scaffold', 'blog oluştu'],
    prep_ready:       ['scaffold', 'prep hazır'],
    filled:           ['filled',   'dolduruldu'],
    batch_ready:      ['ok',       'batch hazır'],
    exported:         ['ok',       'export edildi'],
    youtube_uploaded: ['yes',      'yüklendi'],
  };
  const [cls, label] = map[status] || ['unknown', status ?? '—'];
  return pill(cls, label);
}

function formatSize(bytes) {
  if (!bytes) return '—';
  if (bytes < 1024) return `${bytes} B`;
  return `${(bytes / 1024).toFixed(1)} KB`;
}

async function loadDrafts() {
  const tbody = document.getElementById('drafts-tbody');
  tbody.innerHTML = '<tr><td colspan="5" class="loading">Yükleniyor…</td></tr>';
  try {
    const drafts = await apiFetch('/api/drafts-list');
    if (!drafts.length) {
      tbody.innerHTML = '<tr><td colspan="5" class="loading">docs/drafts/ boş.</td></tr>';
      return;
    }
    tbody.innerHTML = drafts.map(d => `
      <tr data-draft-file="${esc(d.filename)}">
        <td><code class="inline small">${esc(d.filename)}</code></td>
        <td class="muted-text small">${relTime(d.mtime)}</td>
        <td class="muted-text small">${formatSize(d.size)}</td>
        <td>${d.blog_slug
          ? `<code class="inline small">${esc(d.blog_slug)}</code>`
          : '<span class="muted-text">—</span>'}</td>
        <td>${draftStatusPill(d.status)}</td>
      </tr>`).join('');
    tbody.querySelectorAll('tr[data-draft-file]').forEach(row =>
      row.addEventListener('click', () => showDraftDetail(row.dataset.draftFile)));
  } catch (err) {
    tbody.innerHTML =
      `<tr><td colspan="5" class="loading" style="color:#d05555">Hata: ${esc(err.message)}</td></tr>`;
  }
}

// ── Draft detail ───────────────────────────────────────────────────────────

async function showDraftDetail(filename) {
  currentDraft = filename;
  document.getElementById('drafts-overview').classList.add('hidden');
  document.getElementById('draft-detail-section').classList.remove('hidden');
  document.getElementById('draft-detail-title').textContent = filename;
  document.getElementById('draft-detail-body').innerHTML =
    '<div class="loading">Yükleniyor…</div>';
  try {
    await refreshDayHint();
    const d = await apiFetch(`/api/draft/${encodeURIComponent(filename)}`);
    document.getElementById('draft-detail-body').innerHTML = renderDraftDetail(d);
    wireDraftDetailButtons(d);
  } catch (err) {
    document.getElementById('draft-detail-body').innerHTML =
      `<div class="loading" style="color:#d05555">Hata: ${esc(err.message)}</div>`;
  }
}

function hideDraftDetail() {
  currentDraft = null;
  document.getElementById('drafts-overview').classList.remove('hidden');
  document.getElementById('draft-detail-section').classList.add('hidden');
}

// ── Draft detail rendering ────────────────────────────────────────────────

function statusToLevel(status, slugDetail) {
  if (status === 'youtube_uploaded') return 8;
  if (status === 'exported')         return 7;
  if (status === 'batch_ready')      return 6;
  if (status === 'filled')           return slugDetail?.validation_passed ? 5 : 4;
  if (status === 'prep_ready')       return 3;
  if (status === 'blog_created')     return 2;
  return 1; // draft exists = level 1
}

function stepperHtml(status, slugDetail) {
  const labels = ['Taslak', 'Blog', 'Hazırlık', 'Dolduruldu', 'Doğrulandı', 'Batch', 'Export', 'Upload'];
  const level  = statusToLevel(status, slugDetail);
  const steps  = labels.map((label, i) => {
    let cls  = 'step';
    let icon = String(i + 1);
    if (i < level)       { cls += ' step-done';    icon = '✓'; }
    else if (i === level && level < 8) cls += ' step-current';
    else                   cls += ' step-pending';
    return `<div class="${cls}">
      <div class="step-circle">${icon}</div>
      <div class="step-label">${label}</div>
    </div>`;
  });
  return `<div class="stepper-wrap"><div class="stepper">${
    steps.join('<div class="step-connector"></div>')
  }</div></div>`;
}

function renderDraftDetail(d) {
  const sd = d.slug_detail;
  return `
    ${stepperHtml(d.status, sd)}
    <div class="detail-grid">
      ${cardDraftInfo(d)}
      ${sd ? cardContentPackage(sd) : ''}
      ${sd ? cardPipeline(sd) : ''}
      ${cardDraftWorkflowParams(d)}
      ${cardDraftActions(d)}
    </div>`;
}

function cardDraftInfo(d) {
  const orphanNote = (!d.blog_slug && d.orphaned_blog_hint)
    ? `<div class="stale-note" style="margin-top:10px">
        ⚠ Blog dosyası var ama draft bağlantısı eksik —
        birden fazla aday eşleşti (<code>${esc(d.orphaned_blog_hint)}*</code>).
        Manuel olarak <code>.draft-links.json</code> dosyasına slug ekleyin.
      </div>`
    : '';
  return `
    <div class="detail-card">
      <h3>Taslak Bilgisi</h3>
      <table class="kv-table">
        ${kv('Dosya',        `<code class="inline small">${esc(d.filename)}</code>`)}
        ${kv('Boyut',        esc(formatSize(d.size)))}
        ${kv('Değiştirilme', esc(relTime(d.mtime)))}
        ${kv('Blog slug',    d.blog_slug
          ? `${pill('yes', 'var')} <code class="inline">${esc(d.blog_slug)}</code>`
          : pill('no', 'henüz yok'))}
        ${kv('Durum',        draftStatusPill(d.status))}
      </table>
      ${orphanNote}
    </div>`;
}

function cardDraftWorkflowParams(d) {
  const sd         = d.slug_detail;
  const defTitle   = sd?.source_title ?? d.filename.replace(/\.(txt|md|mdx)$/, '');
  const cached     = draftParamCache.get(d.filename);
  const ownDay     = normalizeDayValue(sd?.test_day);
  const defDay     = cached?.manual ? cached.day : suggestedDayFor(ownDay);
  const baseRunId  = normalizeRunIdValue(sd?.pipeline?.runId, defDay);
  const defRunId   = cached?.manual ? cached.run_id : baseRunId;
  return `
    <div class="detail-card full-width">
      <h3>Workflow Parametreleri</h3>
      <div class="param-grid">
        <div class="param-field">
          <label class="param-label" for="dp-title">Başlık (shorts-prep)</label>
          <input class="param-input" id="dp-title" type="text"
            value="${esc(defTitle)}" placeholder="Blog yazısı başlığı">
        </div>
        <div class="param-field">
          <label class="param-label" for="dp-day">Gün (shorts-prep)</label>
          <input class="param-input" id="dp-day" type="number" min="1" max="999"
            value="${esc(String(defDay))}" placeholder="1">
          <span class="param-hint">${esc(dayHintText(ownDay))}</span>
        </div>
        <div class="param-field">
          <label class="param-label" for="dp-run-id">Run ID (fill / batch)</label>
          <input class="param-input" id="dp-run-id" type="text"
            value="${esc(defRunId)}" placeholder="day1-batch-a">
        </div>
        <div class="param-field">
          <label class="param-label" for="dp-yt-date-display">YouTube Takvim Tarihi</label>
          ${createDatePicker('dp-yt-date', ytScheduleHint?.suggested_date || istanbulDateStr(1), istanbulDateStr(0))}
          <span class="param-hint">${esc(formatHintDates(ytScheduleHint?.note) || 'Hint yükleniyor…')}</span>
        </div>
      </div>
    </div>`;
}

function cardDraftActions(d) {
  const status      = d.status;
  const sd          = d.slug_detail;
  const slug        = d.blog_slug || '';
  const hasBlog     = !!slug;
  const hasPrep     = ['prep_ready','filled','batch_ready','exported','youtube_uploaded'].includes(status);
  const hasBatch    = !!sd?.batch_exists;
  const isFilled    = sd?.package_status === 'filled';
  const hasPipeline = !!sd?.pipeline;
  const valPass     = !!sd?.validation_passed;
  const hasManifest = !!sd?.publish_manifest_exists;
  const ttExportOk  = !!sd?.tiktok_export_ready;   // publish_manifest + mp4 exist
  const ttPlanOk    = !!sd?.tiktok_upload_ready;   // plan JSON exists
  const ttUploadOk  = ttPlanOk && tikTokTokenOk;
  const ttDryHint   = sd?.tiktok_disabled_reason || (!tikTokTokenOk ? 'TikTok token geçersiz.' : '');
  const ttUploadHint = !ttPlanOk ? (sd?.tiktok_disabled_reason || 'Önce Export TikTok Captions çalıştırılmalı.')
                     : !tikTokTokenOk ? 'TikTok token geçersiz veya süresi dolmuş.' : '';

  const ab = (action, label, enabled, warn=false, hint='') => {
    const dis = enabled ? '' : ' disabled';
    const cls = !enabled ? ' btn-disabled' : warn ? ' btn-warn' : '';
    const ta  = hint ? ` title="${esc(hint)}"` : '';
    return `<button class="btn-action${cls}" data-draft-action="${action}"${dis}${ta}>${label}</button>`;
  };

  const fillEnabled = hasPrep && hasPipeline;
  const fillHint    = (hasPrep && !hasPipeline)
    ? 'Pipeline status eksik — önce Shorts Prep Oluştur\'u çalıştırın.' : '';
  const codexOk     = config.codex?.available === true;
  const codexHint   = codexOk ? fillHint : 'Codex CLI bulunamadı; terminalde codex --version kontrol edin';
  const ytHint      = !hasManifest
    ? 'publish-manifest.json bulunamadı. Önce n8n export akışını tamamla.' : '';

  return `
    <div class="detail-card full-width">
      <h3>Workflow Aksiyonları</h3>
      <div class="action-bar">
        ${ab('blog-add',        '+ Blog Yazısını Ekle',         !hasBlog)}
        ${ab('blog-add-codex',  '+ Blog Yazısını Ekle — Codex', !hasBlog && codexOk, false,
             !codexOk ? 'Codex CLI bulunamadı; terminalde codex --version kontrol edin' : '')}
        ${ab('shorts-prep',     '⊕ Shorts Prep Oluştur' + (isFilled ? ' ⚠' : ''), hasBlog, isFilled,
             !hasBlog ? 'Önce Blog Yazısını Ekle.' : '')}
        ${ab('shorts-fill',     '◇ Claude ile Paketi Doldur',   fillEnabled,          false,  fillHint)}
        ${ab('shorts-fill-codex','◇ Codex ile Paketi Doldur',   fillEnabled && codexOk, false, codexHint)}
        ${ab('validate-shorts', '✓ Validate Shorts',            hasPrep)}
        ${ab('batch-create',    '⊞ Batch Oluştur',              valPass)}
        ${ab('copy-batch',      '⎘ Copy Batch Load Input',      hasBatch)}
        ${ab('open-n8n',        '↗ Open n8n',                   hasBlog)}
        ${ab('youtube-dry-run', '▷ YouTube Dry Run',            hasBlog && hasManifest, false, ytHint)}
        ${ab('youtube-upload',  '▲ Planlı YouTube Upload',      hasBlog && hasManifest, false, ytHint)}
        ${ab('export-captions',     '⬇ Export TikTok Captions',    ttExportOk,
             false, !ttExportOk ? 'publish-manifest.json veya mp4 bulunamadı.' : '')}
        ${ab('tiktok-dry-run',      '⬡ TikTok Upload Dry Run',     ttUploadOk, false, ttDryHint)}
        ${ab('tiktok-draft-upload', '⬡ TikTok Draft Upload',       ttUploadOk, false, ttUploadHint)}
        ${ab('mobile-caption',          '📱 Telefon Caption',            hasBlog)}
        ${ab('generate-mobile-caption',
             sd?.mobile_caption_link ? '📱 Caption Sayfasını Güncelle' : '📱 Mobil Caption Sayfası Oluştur',
             hasBlog && hasManifest,
             false,
             !hasBlog ? 'Önce blog yazısı oluştur.'
             : !hasManifest ? 'publish-manifest.json bulunamadı.' : '')}
      </div>
      ${(hasPrep && !hasPipeline)
        ? `<div class="stale-note" style="margin-top:10px">⚠ Pipeline status dosyası bulunamadı — "Shorts Prep Oluştur" çalıştırarak oluşturun.</div>` : ''}
      ${(hasBlog && !hasManifest)
        ? `<div class="stale-note" style="margin-top:10px">⚠ publish-manifest.json bulunamadı — YouTube upload için önce n8n export akışını tamamla.</div>` : ''}
    </div>`;
}

function collectDraftParams(d) {
  const day = normalizeDayValue(document.getElementById('dp-day')?.value) || '';
  return {
    title:         (document.getElementById('dp-title')?.value   ?? '').trim(),
    day,
    run_id:        normalizeRunIdValue(document.getElementById('dp-run-id')?.value, day),
    schedule_date: (document.getElementById('dp-yt-date')?.value ?? '').trim(),
    draft_path:    d.draft_path,
  };
}

function wireDraftDetailButtons(d) {
  const codexOk = config.codex?.available === true;
  wireDatePickers();
  wireDayRunIdInputs('dp-day', 'dp-run-id', () =>
    rememberParams(draftParamCache, d.filename, { day: 'dp-day', run_id: 'dp-run-id' }));
  document.querySelectorAll('[data-draft-action]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const action = btn.dataset.draftAction;
      const slug   = d.blog_slug || '';
      const p      = collectDraftParams(d);
      const cwd    = config.cwd || '.';
      const sd     = d.slug_detail;

      if (action === 'open-n8n') { window.open(config.n8n_url, '_blank'); return; }

      if (action === 'copy-batch') {
        if (!slug) return;
        try {
          const res = await apiFetch(`/api/slug/${encodeURIComponent(slug)}/batch-content`);
          await navigator.clipboard.writeText(res.content);
          flashBtn(btn, '✓ Kopyalandı');
        } catch { flashBtn(btn, '✗ Hata', true); }
        return;
      }

      if (action === 'mobile-caption') {
        const ip  = await getMobileIp();
        const url = ip
          ? `http://${ip}:3457/p/${encodeURIComponent(slug)}`
          : `http://127.0.0.1:3457/p/${encodeURIComponent(slug)}`;
        openModal({
          title:   '📱 Telefon Caption Sayfası',
          label:   ip ? `Bu adresi telefonda açın (${ip})` : 'Aynı ağda olduğunuzdan emin olun',
          command: url,
          cwd:     null,
          action:  'mobile-caption',
          slug,
          params:  { url },
        });
        const runBtn = document.getElementById('modal-run-btn');
        runBtn.textContent = '⎘ URL\'yi Kopyala';
        runBtn.disabled    = false;
        return;
      }

      const tiktokPlan  = sd?.tiktok_upload_plan_exists
        ? `${sd.export_folder}/tiktok-upload-plan.json` : null;
      const ytDate      = p.schedule_date || ytScheduleHint?.suggested_date || istanbulDateStr(1);
      const folderName  = sd?.export_folder ? sd.export_folder.split('/').filter(Boolean).pop() : '<export>';
      const isPastDate  = ytDate && ytDate < istanbulDateStr(0);
      const pastWarning = isPastDate
        ? '⚠ Seçilen tarih geçmiş bir tarihtir. Upload planı hatalı olabilir.' : null;

      const SPECS = {
        'blog-add': {
          title:   'Blog Yazısını Ekle',
          label:   'Taslaktan blog yazısı oluşturma',
          command: `claude -p "/add-blog-post ${d.draft_path}"`,
          cwd,
        },
        'blog-add-codex': {
          title:   'Blog Yazısını Ekle — Codex',
          label:   'Codex ile taslaktan blog yazısı oluşturma',
          command: codexOk
            ? `codex exec --cd ${cwd} --sandbox workspace-write "<blog-add prompt for ${d.draft_path}>"`
            : null,
          cwd,
          warning: codexOk ? null : 'Codex bulunamadı. Terminalde codex --version ile kurulumu kontrol edin.',
        },
        'shorts-prep': {
          title:   'Shorts Prep Oluştur',
          label:   'Shorts pipeline (prep → validate → batch)',
          command: p.title && p.day && slug
            ? `node scripts/run-shorts-prep-pipeline.mjs --title "${p.title}" --slug ${slug} --day ${p.day} --run-id ${p.run_id || defaultRunIdForDay(p.day)} --force`
            : null,
          cwd,
          warning: pkgFilled(sd)
            ? '⚠ Bu paket zaten filled. Prep tekrar çalıştırmak dolu dosyaları bozabilir.'
            : null,
        },
        'shorts-fill': {
          title:   'Claude ile Paketi Doldur',
          label:   'Claude ile içerik doldurma',
          command: p.run_id && slug
            ? `node scripts/run-shorts-fill-with-claude.mjs --slug ${slug} --run-id ${p.run_id}`
            : null,
          cwd,
        },
        'shorts-fill-codex': {
          title:   'Codex ile Paketi Doldur',
          label:   'Codex ile içerik doldurma',
          command: codexOk && p.run_id && slug
            ? `node scripts/run-shorts-fill-with-codex.mjs --slug ${slug} --run-id ${p.run_id}`
            : null,
          cwd,
          warning: codexOk ? null : 'Codex bulunamadı. Terminalde codex --version ile kurulumu kontrol edin.',
        },
        'validate-shorts': {
          title:   'Validate Shorts',
          label:   'Doğrulama komutu',
          command: slug
            ? `node scripts/validate-video-package.mjs --slug ${slug} --type shorts --report`
            : null,
          cwd,
        },
        'batch-create': {
          title:   'Batch Oluştur',
          label:   'Video batch oluşturma',
          command: p.run_id && slug
            ? `node scripts/build-video-batch.mjs --slug ${slug} --type shorts --run-id ${p.run_id} --force`
            : null,
          cwd,
        },
        'export-captions': {
          title:   'Export TikTok Captions',
          label:   'TikTok altyazı dışa aktarma (tiktok-upload-plan.json + caption .txt dosyaları üretir)',
          command: slug ? `node scripts/tiktok-export-pipeline.mjs --slug ${slug}` : null,
          cwd,
        },
        'tiktok-dry-run': {
          title:   'TikTok Upload Dry Run',
          label:   'TikTok yükleme önizlemesi (--dry-run)',
          command: tiktokPlan
            ? `node scripts/upload-tiktok-batch-real.mjs --plan "${tiktokPlan}" --dry-run`
            : null,
          cwd,
        },
        'tiktok-draft-upload': {
          title:          'TikTok Draft Upload',
          label:          'TikTok\'a draft video yükleme (TIKTOK_REAL_UPLOAD=1)\nNot: TikTok API draft yükler. Yayınlama ve açıklama ekleme telefonda manuel yapılır.',
          command:        tiktokPlan
            ? `TIKTOK_REAL_UPLOAD=1 node scripts/upload-tiktok-batch-real.mjs --plan "${tiktokPlan}"`
            : null,
          cwd,
          warning:        '⚠ Bu işlem TikTok\'a gerçek draft video yükler.',
          requireConfirm: true,
          confirmLabel:   'Bunun TikTok\'a draft video yükleyeceğimi anlıyorum',
          confirmText:    'TIKTOK DRAFT',
        },
        'youtube-dry-run': {
          title:   'YouTube Dry Run',
          label:   'YouTube yükleme önizlemesi (--dry-run)',
          command: sd?.publish_manifest_exists
            ? `npm run video:youtube:upload-batch -- \\\n  --manifest "${folderName}/publish-manifest.json" \\\n  --scheduled --schedule-start-date ${ytDate} --dry-run`
            : null,
          cwd,
          warning: pastWarning,
        },
        'youtube-upload': {
          title:          'Planlı YouTube Upload',
          label:          'YouTube\'a gerçek planlı video yükleme',
          command:        sd?.publish_manifest_exists
            ? `YOUTUBE_REAL_UPLOAD=1 npm run video:youtube:upload-batch -- \\\n  --manifest "${folderName}/publish-manifest.json" \\\n  --scheduled --schedule-start-date ${ytDate} --force`
            : null,
          cwd,
          warning:        pastWarning || '⚠ Bu işlem YouTube\'a gerçek video yükler. Geri alınamaz.',
          requireConfirm: true,
        },
        'generate-mobile-caption': {
          title:      sd?.mobile_caption_link ? '📱 Caption Sayfasını Güncelle' : '📱 Mobil Caption Sayfası Oluştur',
          label:      'Statik HTML caption sayfası oluştur (Vercel üzerinden erişilebilir)',
          command:    slug ? `node scripts/export-mobile-captions-static.mjs --slug ${slug}` : null,
          cwd,
          existingUrl: sd?.mobile_caption_link?.url || null,
        },
      };

      const spec = SPECS[action];
      if (spec) {
        if (action === 'generate-mobile-caption' && spec.existingUrl) {
          spec.label += `\n\nMevcut URL: ${spec.existingUrl}`;
        }
        openModal({ ...spec, action, slug, params: p });
      }
    });
  });
}

function pkgFilled(sd) { return sd?.package_status === 'filled'; }

// ── Token badge ────────────────────────────────────────────────────────────

async function refreshTokenBadge() {
  const el = document.getElementById('token-badge');
  try {
    const t = await apiFetch('/api/token-status');
    if (!t.exists) {
      tikTokTokenOk = false;
      el.className = 'badge badge-error'; el.textContent = 'TikTok: token yok'; return;
    }
    if (t.is_expired) {
      tikTokTokenOk = false;
      el.className = 'badge badge-error';
      el.textContent = `TikTok: süresi dolmuş (${formatDateTimeForDisplay(t.expires_at)})`;
      return;
    }
    tikTokTokenOk = true;
    el.className = 'badge badge-ok';
    el.textContent = `TikTok: geçerli (${t.open_id_masked}) — ${formatDateTimeForDisplay(t.expires_at)} kadar`;
  } catch {
    tikTokTokenOk = false;
    el.className = 'badge badge-warn'; el.textContent = 'TikTok: okunamadı';
  }
}

// ── Overview table ─────────────────────────────────────────────────────────

async function loadOverview() {
  const tbody = document.getElementById('slugs-tbody');
  tbody.innerHTML = '<tr><td colspan="5" class="loading">Yükleniyor…</td></tr>';
  try {
    const slugs = await apiFetch('/api/slugs');
    if (!slugs.length) {
      tbody.innerHTML = '<tr><td colspan="5" class="loading">Slug bulunamadı.</td></tr>';
      return;
    }
    tbody.innerHTML = slugs.map(s => {
      const mtimeHint = s.pipeline_mtime
        ? ` title="${formatDateTimeForDisplay(s.pipeline_mtime)} — ${relTime(s.pipeline_mtime)}"`
        : '';
      return `<tr data-slug="${esc(s.slug)}">
        <td>${esc(s.slug)}</td>
        <td>${pkgPill(s.package_status)}</td>
        <td>${boolPill(s.batch)}</td>
        <td${mtimeHint}>${pipelinePill(s)}</td>
        <td>${boolPill(s.publish)}</td>
      </tr>`;
    }).join('');

    tbody.querySelectorAll('tr[data-slug]').forEach(row => {
      row.addEventListener('click', () => showDetail(row.dataset.slug));
    });
  } catch (err) {
    tbody.innerHTML = `<tr><td colspan="5" class="loading" style="color:#d05555">Hata: ${esc(err.message)}</td></tr>`;
  }
}

// ── Detail view ────────────────────────────────────────────────────────────

async function showDetail(slug, silent = false) {
  currentSlug = slug;
  if (!silent) {
    document.getElementById('overview-section').classList.add('hidden');
    document.getElementById('detail-section').classList.remove('hidden');
    document.getElementById('detail-title').textContent = slug;
    document.getElementById('detail-body').innerHTML    = '<div class="loading">Yükleniyor…</div>';
  }
  try {
    await refreshDayHint();
    const d = await apiFetch(`/api/slug/${encodeURIComponent(slug)}`);
    document.getElementById('detail-title').textContent = slug;
    document.getElementById('detail-body').innerHTML    = renderDetail(d);
    wireDetailButtons(d);
  } catch (err) {
    if (!silent)
      document.getElementById('detail-body').innerHTML =
        `<div class="loading" style="color:#d05555">Hata: ${esc(err.message)}</div>`;
  }
}

function hideDetail() {
  currentSlug = null;
  document.getElementById('overview-section').classList.remove('hidden');
  document.getElementById('detail-section').classList.add('hidden');
}

// ── Detail rendering ───────────────────────────────────────────────────────

function renderDetail(d) {
  return `
    <div class="detail-grid">
      ${cardWorkflowParams(d)}
      ${cardContentPackage(d)}
      ${cardPipeline(d)}
      ${cardExportArtifacts(d)}
      ${cardTikTokToken()}
      ${cardLoadInputs(d)}
      ${cardShorts(d)}
      ${cardActions(d)}
    </div>`;
}

function kv(label, valueHtml) {
  return `<tr><td>${esc(label)}</td><td>${valueHtml}</td></tr>`;
}

function cardWorkflowParams(d) {
  const cached = slugParamCache.get(d.slug);
  const ownDay = normalizeDayValue(d.test_day);
  const defDay = cached?.manual ? cached.day : suggestedDayFor(ownDay);
  const defaultRunId = cached?.manual
    ? cached.run_id
    : normalizeRunIdValue(d.pipeline?.runId, defDay);
  return `
    <div class="detail-card full-width">
      <h3>Workflow Parametreleri</h3>
      <div class="param-grid">
        <div class="param-field">
          <label class="param-label" for="param-title">Başlık (shorts-prep)</label>
          <input class="param-input" id="param-title" type="text"
            value="${esc(d.source_title ?? '')}"
            placeholder="Blog yazısı başlığı">
        </div>
        <div class="param-field">
          <label class="param-label" for="param-day">Gün (shorts-prep)</label>
          <input class="param-input" id="param-day" type="number" min="1" max="999"
            value="${esc(String(defDay))}"
            placeholder="1">
          <span class="param-hint">${esc(dayHintText(ownDay))}</span>
        </div>
        <div class="param-field">
          <label class="param-label" for="param-run-id">Run ID (fill / batch)</label>
          <input class="param-input" id="param-run-id" type="text"
            value="${esc(defaultRunId)}"
            placeholder="day1-batch-a">
        </div>
        <div class="param-field">
          <label class="param-label" for="param-draft-path">Taslak dosya (blog-add)</label>
          <input class="param-input" id="param-draft-path" type="text"
            placeholder="docs/drafts/filename.txt" list="drafts-datalist">
          <datalist id="drafts-datalist"></datalist>
        </div>
        <div class="param-field">
          <label class="param-label" for="param-yt-date-display">YouTube Takvim Tarihi</label>
          ${createDatePicker('param-yt-date', ytScheduleHint?.suggested_date || istanbulDateStr(1), istanbulDateStr(0))}
          <span class="param-hint">${esc(formatHintDates(ytScheduleHint?.note) || 'Hint yükleniyor…')}</span>
        </div>
      </div>
    </div>`;
}

function cardContentPackage(d) {
  const blogRow = kv('Blog yazısı',
    d.blog_exists
      ? `${pill('yes', 'var')} <code class="inline">${esc(d.blog_path)}</code>`
      : pill('missing', 'yok'));

  const valRow = d.validation_exists
    ? kv('Son doğrulama',
        `<code class="inline">${esc(d.validation_path)}</code>`)
    : kv('Son doğrulama', pill('no', 'yok'));

  const valSummary = d.validation_summary
    ? d.validation_summary.map(line => {
        const isStatus = line.startsWith('Status:');
        const ok = line.includes('PASS');
        const fail = line.includes('FAIL');
        let cls = '';
        if (isStatus && ok)   cls = ' style="color:#4caf86"';
        if (isStatus && fail) cls = ' style="color:#d05555"';
        return `<div${cls}>${esc(line)}</div>`;
      }).join('')
    : '';

  return `
    <div class="detail-card">
      <h3>İçerik &amp; Paket</h3>
      <table class="kv-table">
        ${blogRow}
        ${kv('Paket durumu', pkgPill(d.package_status))}
        ${kv('Short sayısı', String(d.shorts_count))}
        ${kv('Metadata', d.metadata_exists
          ? `${pill('yes', 'var')} ${pkgPill(d.metadata_status)}`
          : pill('missing', 'yok'))}
        ${kv('Load input', `${d.load_inputs.length} dosya`)}
        ${kv('Batch dosyası', boolPill(d.batch_exists))}
        ${valRow}
      </table>
      ${valSummary ? `<div class="val-summary">${valSummary}</div>` : ''}
    </div>`;
}

function cardPipeline(d) {
  const pl = d.pipeline;
  if (!pl) return `<div class="detail-card"><h3>Pipeline</h3><p class="muted-text">Rapor yok</p></div>`;

  const mtime = d.pipeline_mtime
    ? `${formatDateTimeForDisplay(d.pipeline_mtime)} (${relTime(d.pipeline_mtime)})`
    : '—';

  const staleResolved = d.is_stale_failed && d.validation_passed;
  const staleUnknown  = d.is_stale_failed && !d.validation_passed;

  let staleNote = '';
  if (staleResolved) {
    staleNote = `<div class="stale-note stale-note-ok">✓ Son doğrulama PASS — bu hata eski bir çalışmadan kalmış.</div>`;
  } else if (staleUnknown) {
    staleNote = `<div class="stale-note">⚠ Paket filled + batch mevcut → bu hata muhtemelen eski bir çalışmadan kaldı.</div>`;
  }

  const failRow = pl.failedCommand
    ? kv('Hata komutu', `<code class="inline small">${esc(pl.failedCommand)}</code>`)
    : '';

  const cardClass = staleResolved ? 'detail-card detail-card-muted' : 'detail-card';
  const h3badge   = d.is_stale_failed
    ? ` <span class="pill ${staleResolved ? 'pill-stale-ok' : 'pill-stale'}" style="font-size:10px">stale</span>`
    : '';

  return `
    <div class="${cardClass}">
      <h3>Pipeline${h3badge}</h3>
      <table class="kv-table">
        ${kv('Durum', pipelinePill(d))}
        ${kv('Run ID', esc(pl.runId ?? '—'))}
        ${kv('Gün', esc(pl.dayTag ?? '—'))}
        ${kv('Güncelleme', esc(mtime))}
        ${failRow}
      </table>
      ${staleNote}
    </div>`;
}

function cardExportArtifacts(d) {
  const ytResult = d.youtube_upload_result;
  const ttResult = d.tiktok_upload_result;

  const ytRow = ytResult
    ? kv('YouTube yükleme',
        ytResult.mode === 'batch'
          ? `${pill('yes', `${ytResult.uploaded}/${ytResult.total} yüklendi`)}${ytResult.failed ? ` ${pill('failed', ytResult.failed + ' hata')}` : ''}`
          : `${pill('yes', 'uploaded')} <a href="${esc(ytResult.url ?? '#')}" target="_blank" class="result-link">${esc(ytResult.title ?? ytResult.video_id ?? '')}</a>`)
    : kv('YouTube yükleme', boolPill(d.youtube_upload_result_exists));

  const ttRow = ttResult
    ? kv('TikTok yükleme',
        `${pill('yes', `${ttResult.items.length} draft`)}&nbsp;${pill(ttResult.mode === 'draft' ? 'scaffold' : 'ok', ttResult.mode ?? '')}`)
    : kv('TikTok yükleme', boolPill(d.tiktok_upload_result_exists));

  return `
    <div class="detail-card">
      <h3>Export &amp; Yükleme</h3>
      <table class="kv-table">
        ${kv('Export klasörü',
          d.export_folder_exists
            ? `${pill('yes', 'var')} <span class="muted-text small">${esc(d.export_folder)}</span>`
            : `${pill('missing', 'yok')} <span class="muted-text small">${esc(d.export_folder)}</span>`)}
        ${kv('MP4 dosyaları', d.export_folder_exists ? `${d.exported_mp4_count} dosya` : '—')}
        ${kv('publish-manifest', boolPill(d.publish_manifest_exists))}
        ${ytRow}
        ${kv('TikTok plan', boolPill(d.tiktok_upload_plan_exists))}
        ${ttRow}
      </table>
    </div>`;
}

function cardTikTokToken() {
  return `<div class="detail-card" id="token-card">
    <h3>TikTok Token</h3>
    <div id="token-detail-content"><span class="muted-text">Yükleniyor…</span></div>
  </div>`;
}

function cardLoadInputs(d) {
  const items = d.load_inputs.length
    ? d.load_inputs.map(f => `<li>${esc(f)}</li>`).join('')
    : '<li class="muted-text">Yok</li>';
  return `
    <div class="detail-card">
      <h3>Load Inputs (${d.load_inputs.length})</h3>
      <ul class="file-list">${items}</ul>
    </div>`;
}

function cardShorts(d) {
  if (!d.shorts?.length) return '';
  const items = d.shorts.map(s => `
    <li>
      <span class="short-id">${esc(s.short_id)}</span>
      <span class="short-title">${esc(s.title)}</span>
      <span class="pill pill-no small">${s.scenes?.length ?? 0} sahne</span>
    </li>`).join('');
  return `
    <div class="detail-card full-width">
      <h3>Shorts (${d.shorts.length})</h3>
      <ul class="shorts-list">${items}</ul>
    </div>`;
}

function cardActions(d) {
  const ttExportOk2  = !!d.tiktok_export_ready;
  const ttUploadOk2  = !!d.tiktok_upload_ready && tikTokTokenOk;
  const ttDryHint2   = d.tiktok_disabled_reason || (!tikTokTokenOk ? 'TikTok token geçersiz.' : '');
  const ttUploadHint2 = !d.tiktok_upload_ready
    ? (d.tiktok_disabled_reason || 'Önce Export TikTok Captions çalıştırılmalı.')
    : !tikTokTokenOk ? 'TikTok token geçersiz veya süresi dolmuş.' : '';
  const batchOk     = d.batch_exists;
  const pkgFilled   = d.package_status === 'filled';
  const hasPipeline = !!d.pipeline;
  const valPass     = !!d.validation_passed;
  const hasManifest = !!d.publish_manifest_exists;
  const hasPkg      = d.package_status !== 'missing';

  const fillEnabled = hasPkg && hasPipeline;
  const fillHint    = (hasPkg && !hasPipeline)
    ? 'Pipeline status eksik — önce Shorts Prep Oluştur\'u çalıştırın.' : '';
  const codexOk     = config.codex?.available === true;
  const codexHint   = codexOk ? fillHint : 'Codex CLI bulunamadı; terminalde codex --version kontrol edin';
  const ytHint      = !hasManifest
    ? 'publish-manifest.json bulunamadı. Önce n8n export akışını tamamla.' : '';

  const ab = (action, label, enabled, warn=false, hint='') => {
    const dis = enabled ? '' : ' disabled';
    const cls = !enabled ? ' btn-disabled' : warn ? ' btn-warn' : '';
    const ta  = hint ? ` title="${esc(hint)}"` : '';
    return `<button class="btn-action${cls}" data-action="${action}"${dis}${ta}>${label}</button>`;
  };

  return `
    <div class="detail-card full-width">
      <h3>Aksiyonlar</h3>
      <div class="action-bar">
        ${ab('blog-add',        '+ Blog Yazısını Ekle',         !d.blog_exists)}
        ${ab('blog-add-codex',  '+ Blog Yazısını Ekle — Codex', !d.blog_exists && codexOk, false,
             !codexOk ? 'Codex CLI bulunamadı; terminalde codex --version kontrol edin' : '')}
        ${ab('shorts-prep',     '⊕ Shorts Prep Oluştur' + (pkgFilled ? ' ⚠' : ''), true,          pkgFilled)}
        ${ab('shorts-fill',     '◇ Claude ile Paketi Doldur',   fillEnabled,         false, fillHint)}
        ${ab('shorts-fill-codex','◇ Codex ile Paketi Doldur',   fillEnabled && codexOk, false, codexHint)}
        ${ab('validate-shorts', '✓ Validate Shorts',            hasPkg)}
        ${ab('batch-create',    '⊞ Batch Oluştur',              valPass)}
        ${ab('copy-batch',      '⎘ Copy Batch Load Input',      batchOk)}
        ${ab('open-n8n',        '↗ Open n8n',                   true)}
        ${ab('youtube-dry-run', '▷ YouTube Dry Run',            hasManifest,         false, ytHint)}
        ${ab('youtube-upload',  '▲ Planlı YouTube Upload',      hasManifest,         false, ytHint)}
        ${ab('export-captions',     '⬇ Export TikTok Captions',    ttExportOk2,
             false, !ttExportOk2 ? 'publish-manifest.json veya mp4 bulunamadı.' : '')}
        ${ab('tiktok-dry-run',      '⬡ TikTok Upload Dry Run',     ttUploadOk2, false, ttDryHint2)}
        ${ab('tiktok-draft-upload', '⬡ TikTok Draft Upload',       ttUploadOk2, false, ttUploadHint2)}
        ${ab('mobile-caption',          '📱 Telefon Caption',            true)}
        ${ab('generate-mobile-caption',
             d.mobile_caption_link ? '📱 Caption Sayfasını Güncelle' : '📱 Mobil Caption Sayfası Oluştur',
             d.publish_manifest_exists,
             false,
             !d.publish_manifest_exists ? 'publish-manifest.json bulunamadı.' : '')}
        ${ab('refresh',                 '↻ Refresh',                    true)}
      </div>
      ${!hasManifest ? `<div class="stale-note" style="margin-top:10px">⚠ publish-manifest.json bulunamadı — YouTube upload için önce n8n export akışını tamamla.</div>` : ''}
    </div>`;
}

// ── Detail button wiring ───────────────────────────────────────────────────

function collectParams() {
  const day = normalizeDayValue(document.getElementById('param-day')?.value) || '';
  return {
    title:         (document.getElementById('param-title')?.value      ?? '').trim(),
    day,
    run_id:        normalizeRunIdValue(document.getElementById('param-run-id')?.value, day),
    schedule_date: (document.getElementById('param-yt-date')?.value    ?? '').trim(),
    draft_path:    (document.getElementById('param-draft-path')?.value ?? '').trim(),
  };
}

async function fillDraftsList() {
  const datalist = document.getElementById('drafts-datalist');
  if (!datalist) return;
  try {
    const drafts = await apiFetch('/api/drafts');
    datalist.innerHTML = drafts.map(p => `<option value="${esc(p)}">`).join('');
  } catch {}
}

function wireDetailButtons(d) {
  const codexOk = config.codex?.available === true;
  wireDatePickers();
  wireDayRunIdInputs('param-day', 'param-run-id', () =>
    rememberParams(slugParamCache, d.slug, { day: 'param-day', run_id: 'param-run-id' }));
  fillTokenCard();
  fillDraftsList();

  document.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const action = btn.dataset.action;

      if (action === 'refresh') { showDetail(d.slug); return; }
      if (action === 'open-n8n') { window.open(config.n8n_url, '_blank'); return; }

      if (action === 'copy-batch') {
        try {
          const res = await apiFetch(`/api/slug/${encodeURIComponent(d.slug)}/batch-content`);
          await navigator.clipboard.writeText(res.content);
          flashBtn(btn, '✓ Kopyalandı');
        } catch {
          flashBtn(btn, '✗ Hata', true);
        }
        return;
      }

      if (action === 'mobile-caption') {
        const ip  = await getMobileIp();
        const url = ip
          ? `http://${ip}:3457/p/${encodeURIComponent(d.slug)}`
          : `http://127.0.0.1:3457/p/${encodeURIComponent(d.slug)}`;
        openModal({
          title:   '📱 Telefon Caption Sayfası',
          label:   ip ? `Bu adresi telefonda açın (${ip})` : 'Aynı ağda olduğunuzdan emin olun',
          command: url,
          cwd:     null,
          action:  'mobile-caption',
          slug:    d.slug,
          params:  { url },
        });
        const runBtn = document.getElementById('modal-run-btn');
        runBtn.textContent = '⎘ URL\'yi Kopyala';
        runBtn.disabled    = false;
        return;
      }

      const p = collectParams();
      const cwd = config.cwd || '.';

      const tiktokPlan  = d.tiktok_upload_plan_exists
        ? `${d.export_folder}/tiktok-upload-plan.json` : null;
      const ytDate      = p.schedule_date || ytScheduleHint?.suggested_date || istanbulDateStr(1);
      const folderName  = d.export_folder ? d.export_folder.split('/').filter(Boolean).pop() : '<export>';
      const isPastDate  = ytDate && ytDate < istanbulDateStr(0);
      const pastWarning = isPastDate
        ? '⚠ Seçilen tarih geçmiş bir tarihtir. Upload planı hatalı olabilir.' : null;

      const ACTION_SPECS = {
        'validate-shorts': {
          title:   'Validate Shorts',
          label:   'Doğrulama komutu',
          command: `node scripts/validate-video-package.mjs --slug ${d.slug} --type shorts --report`,
          cwd,
        },
        'export-captions': {
          title:   'Export TikTok Captions',
          label:   'TikTok altyazı dışa aktarma (tiktok-upload-plan.json + caption .txt dosyaları üretir)',
          command: `node scripts/tiktok-export-pipeline.mjs --slug ${d.slug}`,
          cwd,
        },
        'tiktok-dry-run': {
          title:   'TikTok Upload Dry Run',
          label:   'TikTok yükleme önizlemesi (--dry-run)',
          command: tiktokPlan
            ? `node scripts/upload-tiktok-batch-real.mjs --plan "${tiktokPlan}" --dry-run`
            : null,
          cwd,
        },
        'shorts-prep': {
          title:   'Shorts Prep Oluştur',
          label:   'Shorts pipeline (prep → validate → batch)',
          command: p.title && p.day
            ? `node scripts/run-shorts-prep-pipeline.mjs --title "${p.title}" --slug ${d.slug} --day ${p.day} --run-id ${p.run_id || defaultRunIdForDay(p.day)} --force`
            : null,
          cwd,
          warning: d.package_status === 'filled'
            ? '⚠ Bu slug için zaten dolu bir paket mevcut. Çalıştırılırsa mevcut içerik üzerine yazılır.'
            : null,
        },
        'shorts-fill': {
          title:   'Claude ile Paketi Doldur',
          label:   'Claude ile içerik doldurma',
          command: p.run_id
            ? `node scripts/run-shorts-fill-with-claude.mjs --slug ${d.slug} --run-id ${p.run_id}`
            : null,
          cwd,
        },
        'shorts-fill-codex': {
          title:   'Codex ile Paketi Doldur',
          label:   'Codex ile içerik doldurma',
          command: codexOk && p.run_id
            ? `node scripts/run-shorts-fill-with-codex.mjs --slug ${d.slug} --run-id ${p.run_id}`
            : null,
          cwd,
          warning: codexOk ? null : 'Codex bulunamadı. Terminalde codex --version ile kurulumu kontrol edin.',
        },
        'batch-create': {
          title:   'Batch Oluştur',
          label:   'Video batch oluşturma',
          command: p.run_id
            ? `node scripts/build-video-batch.mjs --slug ${d.slug} --type shorts --run-id ${p.run_id} --force`
            : null,
          cwd,
        },
        'blog-add': {
          title:   'Blog Yazısını Ekle',
          label:   'Taslaktan blog yazısı oluşturma',
          command: p.draft_path
            ? `claude -p "/add-blog-post ${p.draft_path}"`
            : null,
          cwd,
        },
        'blog-add-codex': {
          title:   'Blog Yazısını Ekle — Codex',
          label:   'Codex ile taslaktan blog yazısı oluşturma',
          command: codexOk && p.draft_path
            ? `codex exec --cd ${cwd} --sandbox workspace-write "<blog-add prompt for ${p.draft_path}>"`
            : null,
          cwd,
          warning: codexOk ? null : 'Codex bulunamadı. Terminalde codex --version ile kurulumu kontrol edin.',
        },
        'tiktok-draft-upload': {
          title:          'TikTok Draft Upload',
          label:          'TikTok\'a draft video yükleme (TIKTOK_REAL_UPLOAD=1)\nNot: TikTok API draft yükler. Yayınlama ve açıklama ekleme telefonda manuel yapılır.',
          command:        tiktokPlan
            ? `TIKTOK_REAL_UPLOAD=1 node scripts/upload-tiktok-batch-real.mjs --plan "${tiktokPlan}"`
            : null,
          cwd,
          warning:        '⚠ Bu işlem TikTok\'a gerçek draft video yükler.',
          requireConfirm: true,
          confirmLabel:   'Bunun TikTok\'a draft video yükleyeceğimi anlıyorum',
          confirmText:    'TIKTOK DRAFT',
        },
        'youtube-dry-run': {
          title:   'YouTube Dry Run',
          label:   'YouTube yükleme önizlemesi (--dry-run)',
          command: d.publish_manifest_exists
            ? `npm run video:youtube:upload-batch -- \\\n  --manifest "${folderName}/publish-manifest.json" \\\n  --scheduled --schedule-start-date ${ytDate} --dry-run`
            : null,
          cwd,
          warning: pastWarning,
        },
        'youtube-upload': {
          title:          'Planlı YouTube Upload',
          label:          'YouTube\'a gerçek planlı video yükleme',
          command:        d.publish_manifest_exists
            ? `YOUTUBE_REAL_UPLOAD=1 npm run video:youtube:upload-batch -- \\\n  --manifest "${folderName}/publish-manifest.json" \\\n  --scheduled --schedule-start-date ${ytDate} --force`
            : null,
          cwd,
          warning:        pastWarning || '⚠ Bu işlem YouTube\'a gerçek video yükler. Geri alınamaz.',
          requireConfirm: true,
        },
        'generate-mobile-caption': {
          title:   d.mobile_caption_link ? '📱 Caption Sayfasını Güncelle' : '📱 Mobil Caption Sayfası Oluştur',
          label:   'Statik HTML caption sayfası oluştur (Vercel üzerinden erişilebilir)',
          command: `node scripts/export-mobile-captions-static.mjs --slug ${d.slug}`,
          cwd,
          existingUrl: d.mobile_caption_link?.url || null,
        },
      };

      const spec = ACTION_SPECS[action];
      if (spec) {
        // If we already have a mobile caption link, show it before opening the modal
        if (action === 'generate-mobile-caption' && spec.existingUrl) {
          spec.label += `\n\nMevcut URL: ${spec.existingUrl}`;
        }
        openModal({ ...spec, action, slug: d.slug, params: p });
      }
    });
  });
}

function flashBtn(btn, text, isError = false) {
  const orig = btn.textContent;
  btn.textContent = text;
  btn.style.color = isError ? '#d05555' : '#4caf86';
  setTimeout(() => { btn.textContent = orig; btn.style.color = ''; }, 2000);
}

async function fillTokenCard() {
  const el = document.getElementById('token-detail-content');
  if (!el) return;
  try {
    const t = await apiFetch('/api/token-status');
    if (!t.exists) { el.innerHTML = pill('missing', 'token yok'); return; }
    const exp     = formatDateTimeForDisplay(t.expires_at);
    const obt     = formatDateTimeForDisplay(t.obtained_at);
    const status  = t.is_expired  ? pill('failed', 'süresi dolmuş') : pill('ok', 'geçerli');
    el.innerHTML = `
      <table class="kv-table">
        ${kv('Durum',       status)}
        ${kv('open_id',     esc(t.open_id_masked))}
        ${kv('Scope',       esc(t.scope ?? '—'))}
        ${kv('Alındı',      esc(obt))}
        ${kv('Geçerlilik',  esc(exp))}
      </table>`;
  } catch {
    el.innerHTML = '<span class="muted-text">Okunamadı</span>';
  }
}

// ── Services tab ─────────────────────────────────────────────────────────

function svcIndicator(status) {
  const cls = {
    up: 'svc-indicator-up', down: 'svc-indicator-down',
    running: 'svc-indicator-running', stopped: 'svc-indicator-stopped',
  }[status] || 'svc-indicator-unknown';
  return `<span class="svc-indicator ${cls}"></span>`;
}

function svcLabel(status) {
  const map = { up: 'çalışıyor', down: 'kapalı', running: 'running', stopped: 'durduruldu' };
  return map[status] ?? status ?? '—';
}

function renderServicesPage(st) {
  const { postgres, redis, n8n_main, n8n_worker, renderer } = st;

  function row(name, status, meta = '') {
    return `<div class="svc-status-row">
      ${svcIndicator(status)}
      <span class="svc-name">${name}</span>
      <span>${svcLabel(status)}</span>
      ${meta ? `<span class="svc-meta">${meta}</span>` : ''}
    </div>`;
  }

  const pgNote = postgres.manual_start
    ? `<div class="svc-manual-note">⚠ PostgreSQL kapalı — terminalde çalıştırın:<br><code>${esc(postgres.manual_start)}</code></div>` : '';
  const rdNote = redis.manual_start
    ? `<div class="svc-manual-note">⚠ Redis kapalı — terminalde çalıştırın:<br><code>${esc(redis.manual_start)}</code></div>` : '';

  return `
    <div class="detail-grid" style="max-width:860px;margin:0 auto">
      <div class="detail-card full-width">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
          <h3 style="margin:0">Servis Durumu</h3>
          <button class="btn-ghost" id="svc-refresh-btn">↻ Durumu Kontrol Et</button>
        </div>
        ${row('PostgreSQL', postgres.status)}
        ${row('Redis',      redis.status)}
        ${row('n8n Main',  n8n_main.status,   `port ${n8n_main.port}`)}
        ${row('n8n Worker', n8n_worker.status, n8n_worker.pid ? `PID ${n8n_worker.pid}` : '')}
        ${row('Renderer',  renderer.status,   `port ${renderer.port}`)}
        ${pgNote}${rdNote}
      </div>

      <div class="detail-card full-width">
        <h3>Servis Başlatma</h3>
        <div class="action-bar" style="margin-top:10px">
          <button class="btn-action" id="svc-start-n8n-main"
            title="bash scripts/start-n8n-queue-main.sh (scene-blog-video)">⊕ N8N Main Başlat</button>
          <button class="btn-action" id="svc-start-n8n-worker"
            title="bash scripts/start-n8n-queue-worker.sh (scene-blog-video)">⊕ N8N Worker Başlat</button>
          <button class="btn-action" id="svc-start-renderer"
            title="bash scripts/start-renderer.sh (scene-blog-video)">⊕ Renderer Başlat</button>
        </div>
        <div class="action-bar action-bar-secondary" style="margin-top:8px">
          <button class="btn-action" id="svc-open-n8n"
            title="http://127.0.0.1:5678">↗ N8N'i Aç</button>
          <button class="btn-action" id="svc-renderer-health"
            title="GET http://127.0.0.1:8000/health">♥ Renderer Health Check</button>
        </div>
        <p class="muted-text small" style="margin-top:12px">
          Not: PostgreSQL ve Redis sudo gerektirir —
          <code>sudo service postgresql start</code> /
          <code>sudo service redis-server start</code>
          komutlarını terminalde çalıştırın.
        </p>
      </div>
    </div>`;
}

function wireServicesButtons() {
  document.getElementById('svc-refresh-btn')?.addEventListener('click', loadServices);

  document.getElementById('svc-open-n8n')?.addEventListener('click', () => {
    window.open('http://127.0.0.1:5678', '_blank');
  });

  document.getElementById('svc-renderer-health')?.addEventListener('click', async () => {
    const btn = document.getElementById('svc-renderer-health');
    const origText = btn.textContent;
    btn.disabled = true;
    btn.textContent = '…';
    try {
      const res  = await fetch('/api/action', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'renderer-health' }),
      });
      const data = await res.json();
      if (data.ok) {
        btn.textContent = `✓ ${data.status ?? 200}`;
        btn.style.color = '#4caf86';
      } else {
        btn.textContent = `✗ ${data.error ?? data.status ?? 'hata'}`;
        btn.style.color = '#d05555';
      }
    } catch (e) {
      btn.textContent = `✗ ${e.message}`;
      btn.style.color = '#d05555';
    }
    setTimeout(() => { btn.textContent = origText; btn.style.color = ''; btn.disabled = false; }, 3000);
  });

  for (const [btnId, action, label] of [
    ['svc-start-n8n-main',   'start-n8n-main',   'N8N Main Başlat'],
    ['svc-start-n8n-worker', 'start-n8n-worker', 'N8N Worker Başlat'],
    ['svc-start-renderer',   'start-renderer',   'Renderer Başlat'],
  ]) {
    const cmdMap = {
      'start-n8n-main':   'bash scripts/start-n8n-queue-main.sh\n# Dizin: ~/projects/scene-blog-video',
      'start-n8n-worker': 'bash scripts/start-n8n-queue-worker.sh\n# Dizin: ~/projects/scene-blog-video',
      'start-renderer':   'bash scripts/start-renderer.sh\n# Dizin: ~/projects/scene-blog-video',
    };
    document.getElementById(btnId)?.addEventListener('click', () => {
      openModal({
        title:   label,
        label:   `${label} — arka planda başlatılır`,
        command: cmdMap[action],
        cwd:     '~/projects/scene-blog-video',
        action,
        slug:    '',
        params:  {},
      });
    });
  }
}

async function loadServices() {
  const el = document.getElementById('services-content');
  if (!el) return;
  el.innerHTML = '<div class="loading" style="padding:32px">Servis durumu kontrol ediliyor…</div>';
  try {
    const st = await apiFetch('/api/services/status');
    el.innerHTML = renderServicesPage(st);
    wireServicesButtons();
  } catch (err) {
    el.innerHTML = `<div class="loading" style="padding:32px;color:#d05555">Hata: ${esc(err.message)}</div>`;
  }
}

// ── Modal ─────────────────────────────────────────────────────────────────

// ── Modal URL display (static mobile caption) ─────────────────────────────

function showModalUrl(url, indexUrl = null) {
  const section = document.getElementById('modal-url-section');
  if (!section) return;

  // Primary URL with copy button
  document.getElementById('modal-url-text').textContent = url;
  const copyBtn = document.getElementById('modal-url-copy');
  copyBtn.textContent = '⎘ Kopyala';
  copyBtn.onclick = () => {
    navigator.clipboard.writeText(url)
      .then(() => { copyBtn.textContent = '✓ Kopyalandı'; setTimeout(() => copyBtn.textContent = '⎘ Kopyala', 2000); })
      .catch(() => {});
  };

  // Index URL row (optional)
  const indexRow  = document.getElementById('modal-url-index-row');
  if (indexRow) {
    if (indexUrl) {
      document.getElementById('modal-url-index-text').textContent = indexUrl;
      const indexLink = document.getElementById('modal-url-index-link');
      if (indexLink) indexLink.href = indexUrl;
      indexRow.classList.remove('hidden');
    } else {
      indexRow.classList.add('hidden');
    }
  }

  section.classList.remove('hidden');
}

function hideModalUrl() {
  document.getElementById('modal-url-section')?.classList.add('hidden');
  document.getElementById('modal-url-index-row')?.classList.add('hidden');
}

function stopJobMonitor() {
  if (monitorInterval) { clearInterval(monitorInterval); monitorInterval = null; }
  monitorJobId = null;
  logOffset    = 0;
}

function fillJobKey(action, slug) { return `${action}:${slug}`; }
function saveActiveFillJobs() {
  localStorage.setItem('derin-okuma-active-fill-jobs', JSON.stringify(activeFillJobs));
}

async function monitorJob(jobId) {
  stopJobMonitor();
  monitorJobId = jobId;
  logOffset    = 0;

  const outputEl = document.getElementById('modal-output');
  const statusEl = document.getElementById('modal-status-bar');
  const runBtn   = document.getElementById('modal-run-btn');

  statusEl.className   = 'modal-status';
  statusEl.textContent = `Arka plan işi: ${jobId} — başlatılıyor…`;

  async function poll() {
    try {
      const logsRes = await fetch(`/api/job/${encodeURIComponent(jobId)}/logs?offset=${logOffset}`);
      if (logsRes.ok) {
        const logs = await logsRes.json();
        if (logs.content) {
          outputEl.textContent += logs.content;
          logOffset = logs.offset + logs.length;
          outputEl.scrollTop = outputEl.scrollHeight;
        }
      }

      const stRes = await fetch(`/api/job/${encodeURIComponent(jobId)}`);
      if (!stRes.ok) { statusEl.textContent = `İş bulunamadı: ${jobId}`; return; }
      const st = await stRes.json();

      if (['done', 'failed', 'killed', 'unknown_completed'].includes(st.status)) {
        for (const [key, value] of Object.entries(activeFillJobs)) {
          if (value === jobId) delete activeFillJobs[key];
        }
        saveActiveFillJobs();
        stopJobMonitor();
        if (st.status === 'done') {
          statusEl.className   = 'modal-status ok';
          statusEl.textContent = 'Başarılı ✓';
          modalNeedsRefresh = true;
        } else if (st.status === 'killed') {
          statusEl.className   = 'modal-status fail';
          statusEl.textContent = `Claude işlemi zaman aşımına uğradı. İşlem yarıda kesildi${st.signal ? ` (${st.signal})` : ''}.`;
        } else if (st.status === 'unknown_completed') {
          statusEl.className   = 'modal-status';
          statusEl.textContent = 'İşlem tamamlandı (sunucu yeniden başlatıldı — sonuç bilinmiyor, dosyaları kontrol edin).';
          modalNeedsRefresh = true;
        } else {
          statusEl.className   = 'modal-status fail';
          statusEl.textContent = `Başarısız (exit ${st.exit_code ?? 'null'})${st.signal ? `, sinyal: ${st.signal}` : ''}.`;
        }
        runBtn.disabled    = false;
        runBtn.textContent = 'Tekrar Çalıştır';
      } else {
        const phase = st.status === 'starting' ? 'başlatılıyor…' : `PID: ${st.pid ?? '?'}`;
        statusEl.textContent = `Çalışıyor (${phase})`;
      }
    } catch (err) {
      statusEl.textContent = `İzleme hatası: ${err.message}`;
    }
  }

  poll();
  monitorInterval = setInterval(poll, 2000);
}

// spec: { title, label, command, cwd, action, slug, params?, warning? }
function openModal(spec) {
  modalAction       = spec.action;
  modalSlug         = spec.slug;
  modalParams       = spec.params || {};
  modalNeedsRefresh = false;

  const hasCommand = typeof spec.command === 'string' && spec.command.trim().length > 0;

  document.getElementById('modal-title').textContent = spec.title || spec.action;

  const cwdLine = spec.cwd
    ? `<div class="modal-meta"><span class="modal-meta-key">cwd:</span> ${esc(spec.cwd)}</div>`
    : '';
  const labelLine = spec.label
    ? `<div class="modal-meta modal-meta-label">${esc(spec.label)}</div>`
    : '';
  const warningLine = spec.warning
    ? `<div class="modal-warning">${esc(spec.warning)}</div>`
    : '';
  const commandBlock = hasCommand
    ? `<pre class="modal-code">${esc(spec.command)}</pre>`
    : `<div class="modal-no-command">⚠ Komut üretilemedi — gerekli parametre eksik veya dosya bulunamadı.</div>`;

  const confirmLabel = spec.confirmLabel || 'Bunun gerçek bir işlem olduğunu anlıyorum';
  const confirmText  = spec.confirmText  || 'ONAYLA';
  modalConfirmText   = spec.requireConfirm ? confirmText : null;

  const confirmBlock = spec.requireConfirm ? `
    <div class="modal-confirm" id="modal-confirm">
      <label class="modal-confirm-check">
        <input type="checkbox" id="modal-confirm-checkbox">
        ${esc(confirmLabel)}
      </label>
      <div class="modal-confirm-type">
        <span>Onaylamak için <code>${esc(confirmText)}</code> yazın:</span>
        <input type="text" id="modal-confirm-input" class="param-input"
          placeholder="${esc(confirmText)}" autocomplete="off" style="margin-top:6px;width:200px">
      </div>
    </div>` : '';

  document.getElementById('modal-preview-wrap').innerHTML =
    `${labelLine}${cwdLine}${warningLine}${commandBlock}${confirmBlock}`;

  // Reset output section
  document.getElementById('modal-output-section').classList.add('hidden');
  document.getElementById('modal-output').textContent    = '';
  document.getElementById('modal-status-bar').textContent = '';
  document.getElementById('modal-status-bar').className  = 'modal-status';
  hideModalUrl();

  // Enable run button only when command is valid (and confirm satisfied if required)
  const runBtn = document.getElementById('modal-run-btn');
  runBtn.disabled    = !hasCommand || !!spec.requireConfirm;
  runBtn.textContent = 'Çalıştır';

  if (spec.requireConfirm) {
    const checkConfirm = () => {
      const cb  = document.getElementById('modal-confirm-checkbox');
      const inp = document.getElementById('modal-confirm-input');
      runBtn.disabled = !(hasCommand && cb?.checked && inp?.value === confirmText);
    };
    setTimeout(() => {
      document.getElementById('modal-confirm-checkbox')?.addEventListener('change', checkConfirm);
      document.getElementById('modal-confirm-input')?.addEventListener('input', checkConfirm);
    }, 0);
  }

  document.getElementById('modal-overlay').classList.remove('hidden');

  const existingJob = activeFillJobs[fillJobKey(spec.action, spec.slug)];
  if (existingJob) {
    document.getElementById('modal-output-section').classList.remove('hidden');
    runBtn.disabled = true;
    runBtn.textContent = 'Çalışıyor…';
    monitorJob(existingJob);
  }
}

function closeModal() {
  stopJobMonitor();
  document.getElementById('modal-overlay').classList.add('hidden');
  if (modalNeedsRefresh) {
    if (currentDraft) showDraftDetail(currentDraft);
    else if (currentSlug) showDetail(currentSlug, true);
  }
  modalAction       = null;
  modalSlug         = null;
  modalParams       = {};
  modalNeedsRefresh = false;
  modalConfirmText  = null;
}

async function runModal() {
  stopJobMonitor();

  const runBtn   = document.getElementById('modal-run-btn');
  const statusEl = document.getElementById('modal-status-bar');
  const outputEl = document.getElementById('modal-output');

  runBtn.disabled    = true;
  runBtn.textContent = 'Çalışıyor…';
  document.getElementById('modal-output-section').classList.remove('hidden');
  statusEl.className   = 'modal-status';
  statusEl.textContent = '…';
  outputEl.textContent = '';

  // Defense-in-depth: verify modal confirmation before sending (any action with requireConfirm)
  if (modalAction === 'mobile-caption') {
    document.getElementById('modal-output-section').classList.remove('hidden');
    try {
      await navigator.clipboard.writeText(modalParams.url || '');
      statusEl.className   = 'modal-status ok';
      statusEl.textContent = 'URL kopyalandı ✓';
      outputEl.textContent = modalParams.url || '';
    } catch {
      statusEl.className   = 'modal-status fail';
      statusEl.textContent = 'Kopyalama başarısız — URL\'yi manuel kopyalayın.';
    }
    runBtn.disabled    = false;
    runBtn.textContent = '⎘ Tekrar Kopyala';
    return;
  }
  if (modalConfirmText) {
    const cb  = document.getElementById('modal-confirm-checkbox');
    const inp = document.getElementById('modal-confirm-input');
    if (!cb?.checked || inp?.value !== modalConfirmText) {
      statusEl.className   = 'modal-status fail';
      statusEl.textContent = `Onay tamamlanmadı — checkbox işaretlenmeli ve "${modalConfirmText}" yazılmalı.`;
      runBtn.disabled    = false;
      runBtn.textContent = 'Tekrar Çalıştır';
      return;
    }
  }

  try {
    const res  = await fetch('/api/action', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ action: modalAction, slug: modalSlug, params: modalParams }),
    });
    const data = await res.json();

    // Already running (service check returned without starting)
    if (data.already_running) {
      statusEl.className   = 'modal-status ok';
      statusEl.textContent = data.port
        ? `Zaten çalışıyor (port ${data.port}).`
        : 'Zaten çalışıyor.';
      outputEl.textContent = '(no output)';
      runBtn.disabled    = false;
      runBtn.textContent = 'Tekrar Çalıştır';
      loadServices();  // refresh services tab if open
      return;
    }

    // Background job — stream logs via polling; button re-enabled when job ends
    if (data.job_id) {
      if (modalAction === 'shorts-fill' || modalAction === 'shorts-fill-codex') {
        activeFillJobs[fillJobKey(modalAction, modalSlug)] = data.job_id;
        saveActiveFillJobs();
      }
      statusEl.className   = 'modal-status';
      statusEl.textContent = `Arka plan işi başlatıldı: ${data.job_id}`;
      monitorJob(data.job_id);
      return;
    }

    const out = [data.stdout, data.stderr].filter(Boolean).join('\n').trim();
    outputEl.textContent = out || '(no output)';

    if (data.error) {
      statusEl.className   = 'modal-status fail';
      statusEl.textContent = `Hata: ${data.error_message || data.error}`;
    } else if (data.exit_code === 0) {
      statusEl.className   = 'modal-status ok';
      statusEl.textContent = 'Başarılı (exit 0)';
      modalNeedsRefresh = true;
      if (data.mobile_caption_link?.url)
        showModalUrl(data.mobile_caption_link.url, data.mobile_caption_link.index_url || null);
    } else if (data.scaffold_ready) {
      statusEl.className   = 'modal-status ok';
      statusEl.textContent = 'Scaffold hazır ✓ — validate/batch adımı başarısız olsa da scaffold dosyaları oluştu. "Claude ile Paketi Doldur" artık aktif.';
      modalNeedsRefresh = true;
    } else if (data.timed_out) {
      statusEl.className   = 'modal-status fail';
      statusEl.textContent = `Claude işlemi zaman aşımına uğradı. İşlem yarıda kesildi${data.signal ? ` (${data.signal})` : ''}.`;
    } else if (data.signal) {
      statusEl.className   = 'modal-status fail';
      statusEl.textContent = `Sinyal ile sonlandırıldı: ${data.signal}${data.exit_code != null ? ` (exit ${data.exit_code})` : ''}.`;
    } else {
      statusEl.className   = 'modal-status fail';
      statusEl.textContent = `Başarısız (exit ${data.exit_code ?? 'null'}).`;
    }
    runBtn.disabled    = false;
    runBtn.textContent = 'Tekrar Çalıştır';
  } catch (err) {
    statusEl.className   = 'modal-status fail';
    statusEl.textContent = `Ağ hatası: ${err.message}`;
    runBtn.disabled    = false;
    runBtn.textContent = 'Tekrar Çalıştır';
  }
}

// ── Event wiring ───────────────────────────────────────────────────────────

document.getElementById('refresh-btn').addEventListener('click', async () => {
  await refreshDayHint();
  if (activeTab === 'drafts') {
    if (currentDraft) showDraftDetail(currentDraft);
    else loadDrafts();
  } else if (activeTab === 'shorts') {
    if (currentSlug) showDetail(currentSlug);
    else loadOverview();
  } else if (activeTab === 'services') {
    loadServices();
  }
  refreshTokenBadge();
});

document.getElementById('detail-close').addEventListener('click', hideDetail);
document.getElementById('draft-detail-close').addEventListener('click', hideDraftDetail);
document.getElementById('modal-run-btn').addEventListener('click', runModal);
document.getElementById('modal-cancel-btn').addEventListener('click', closeModal);
document.getElementById('modal-x').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
});

document.querySelectorAll('.tab-btn').forEach(btn =>
  btn.addEventListener('click', () => switchTab(btn.dataset.tab)));

// ── Init ───────────────────────────────────────────────────────────────────

(async () => {
  try { config = await apiFetch('/api/config'); } catch {}
  await Promise.all([refreshYtScheduleHint(), refreshDayHint()]);
  getMobileIp();            // pre-fetch local IP for mobile caption URLs
  loadDrafts();             // default active tab
  refreshTokenBadge();
})();

setInterval(() => {
  if      (activeTab === 'drafts'   && !currentDraft) loadDrafts();
  else if (activeTab === 'shorts'   && !currentSlug)  loadOverview();
  else if (activeTab === 'services')                  loadServices();
  refreshTokenBadge();
}, 30_000);
