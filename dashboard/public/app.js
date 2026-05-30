// dashboard/public/app.js — Phase 3

// ── Global state ───────────────────────────────────────────────────────────

let config        = { n8n_url: 'http://localhost:5678', cwd: '' };
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
  const defDay     = sd?.test_day     ?? '';
  const defRunId   = sd?.pipeline?.runId
    ?? (sd?.test_day ? `day${sd.test_day}-batch-a` : 'batch-a');
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
        </div>
        <div class="param-field">
          <label class="param-label" for="dp-run-id">Run ID (fill / batch)</label>
          <input class="param-input" id="dp-run-id" type="text"
            value="${esc(defRunId)}" placeholder="day1-batch-a">
        </div>
      </div>
    </div>`;
}

function cardDraftActions(d) {
  const status           = d.status;
  const sd               = d.slug_detail;
  const slug             = d.blog_slug || '';
  const hasBlog          = !!slug;
  const hasPrep          = ['prep_ready','filled','batch_ready','exported','youtube_uploaded'].includes(status);
  const hasFilled        = ['filled','batch_ready','exported','youtube_uploaded'].includes(status);
  const hasBatch         = !!sd?.batch_exists;
  const isFilled         = sd?.package_status === 'filled';
  const hasPipelineStatus = !!sd?.pipeline;

  const actionBtn = (action, label, enabled, warn = false, hint = '') => {
    const dis       = enabled ? '' : ' disabled';
    const cls       = !enabled ? ' btn-disabled' : warn ? ' btn-warn' : '';
    const titleAttr = hint ? ` title="${esc(hint)}"` : '';
    return `<button class="btn-action${cls}" data-draft-action="${action}"${dis}${titleAttr}>${label}</button>`;
  };

  const fillEnabled = hasPrep && hasPipelineStatus;
  const fillHint    = (hasPrep && !hasPipelineStatus)
    ? 'Pipeline status eksik — önce Shorts Prep Oluştur\'u çalıştırın.'
    : '';

  return `
    <div class="detail-card full-width">
      <h3>Workflow Aksiyonları</h3>
      <div class="action-bar">
        ${actionBtn('blog-add',       '+ Blog Yazısını Ekle',         !hasBlog)}
        ${actionBtn('shorts-prep',    '⊕ Shorts Prep Oluştur' + (isFilled ? ' ⚠' : ''), hasBlog, isFilled)}
        ${actionBtn('shorts-fill',    '◇ Claude ile Paketi Doldur',   fillEnabled, false, fillHint)}
        ${actionBtn('validate-shorts','✓ Validate Shorts',            hasPrep)}
        ${actionBtn('batch-create',   '⊞ Batch Oluştur',              hasFilled)}
        ${actionBtn('copy-batch',     '⎘ Copy Batch Load Input',      hasBatch)}
      </div>
      ${(hasPrep && !hasPipelineStatus) ? `<div class="stale-note" style="margin-top:10px">⚠ Pipeline status dosyası bulunamadı — "Shorts Prep Oluştur" çalıştırarak oluşturun.</div>` : ''}
    </div>`;
}

function collectDraftParams(d) {
  return {
    title:      (document.getElementById('dp-title')?.value  ?? '').trim(),
    day:         document.getElementById('dp-day')?.value    ?? '',
    run_id:     (document.getElementById('dp-run-id')?.value ?? '').trim(),
    draft_path: d.draft_path,
  };
}

function wireDraftDetailButtons(d) {
  document.querySelectorAll('[data-draft-action]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const action = btn.dataset.draftAction;
      const slug   = d.blog_slug || '';
      const p      = collectDraftParams(d);
      const cwd    = config.cwd || '.';
      const sd     = d.slug_detail;

      if (action === 'copy-batch') {
        if (!slug) return;
        try {
          const res = await apiFetch(`/api/slug/${encodeURIComponent(slug)}/batch-content`);
          await navigator.clipboard.writeText(res.content);
          flashBtn(btn, '✓ Kopyalandı');
        } catch { flashBtn(btn, '✗ Hata', true); }
        return;
      }

      const SPECS = {
        'blog-add': {
          title:   'Blog Yazısını Ekle',
          label:   'Taslaktan blog yazısı oluşturma',
          command: `claude -p "/add-blog-post ${d.draft_path}"`,
          cwd,
        },
        'shorts-prep': {
          title:   'Shorts Prep Oluştur',
          label:   'Shorts pipeline (prep → validate → batch)',
          command: p.title && p.day
            ? `node scripts/run-shorts-prep-pipeline.mjs --title "${p.title}" --day ${p.day} --run-id ${p.run_id || ('day' + p.day + '-batch-a')} --force`
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
      };

      const spec = SPECS[action];
      if (spec) openModal({ ...spec, action, slug, params: p });
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
      el.className = 'badge badge-error'; el.textContent = 'TikTok: token yok'; return;
    }
    if (t.is_expired) {
      el.className = 'badge badge-error';
      el.textContent = `TikTok: süresi dolmuş (${new Date(t.expires_at).toLocaleString('tr-TR')})`;
      return;
    }
    el.className = 'badge badge-ok';
    el.textContent = `TikTok: geçerli (${t.open_id_masked}) — ${new Date(t.expires_at).toLocaleString('tr-TR')} kadar`;
  } catch {
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
        ? ` title="${new Date(s.pipeline_mtime).toLocaleString('tr-TR')} — ${relTime(s.pipeline_mtime)}"`
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
  const defaultRunId = d.pipeline?.runId
    || (d.test_day ? `day${d.test_day}-batch-a` : 'batch-a');
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
            value="${esc(String(d.test_day ?? ''))}"
            placeholder="1">
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
    ? `${new Date(d.pipeline_mtime).toLocaleString('tr-TR')} (${relTime(d.pipeline_mtime)})`
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
  const ttPlanOk  = d.tiktok_upload_plan_exists;
  const batchOk   = d.batch_exists;
  const pkgFilled = d.package_status === 'filled';

  return `
    <div class="detail-card full-width">
      <h3>Aksiyonlar</h3>
      <div class="action-bar">
        <button class="btn-action" data-action="blog-add"
          title="claude -p /add-blog-post &lt;draft_path&gt;">
          + Blog Yazısını Ekle
        </button>
        <button class="btn-action${pkgFilled ? ' btn-warn' : ''}" data-action="shorts-prep"
          title="node scripts/prepare-video-package.mjs --title ... --day ... --slug ${esc(d.slug)} --force">
          ⊕ Shorts Prep Oluştur${pkgFilled ? ' ⚠' : ''}
        </button>
        <button class="btn-action" data-action="shorts-fill"
          title="node scripts/run-shorts-fill-with-claude.mjs --slug ${esc(d.slug)} --run-id ...">
          ◇ Claude ile Paketi Doldur
        </button>
        <button class="btn-action" data-action="validate-shorts"
          title="node scripts/validate-video-package.mjs --slug ${esc(d.slug)} --type shorts --report">
          ✓ Validate Shorts
        </button>
        <button class="btn-action" data-action="batch-create"
          title="node scripts/build-video-batch.mjs --slug ${esc(d.slug)} --type shorts --run-id ... --force">
          ⊞ Batch Oluştur
        </button>
        <button class="btn-action ${batchOk ? '' : 'btn-disabled'}"
          data-action="copy-batch" ${batchOk ? '' : 'disabled'}
          title="Batch load input içeriğini panoya kopyala">
          ⎘ Copy Batch Load Input
        </button>
      </div>
      <div class="action-bar action-bar-secondary">
        <button class="btn-action ${ttPlanOk ? '' : 'btn-disabled'}"
          data-action="export-captions" ${ttPlanOk ? '' : 'disabled'}
          title="node scripts/export-tiktok-captions.mjs --plan ...">
          ⬇ Export TikTok Captions
        </button>
        <button class="btn-action ${ttPlanOk ? '' : 'btn-disabled'}"
          data-action="tiktok-dry-run" ${ttPlanOk ? '' : 'disabled'}
          title="node scripts/upload-tiktok-batch-real.mjs --plan ... --dry-run">
          ⬡ TikTok Upload Dry Run
        </button>
        <button class="btn-action" data-action="open-n8n"
          title="n8n arayüzünü aç">
          ↗ Open n8n
        </button>
        <button class="btn-action" data-action="refresh"
          title="Detay panelini yenile">
          ↻ Refresh
        </button>
      </div>
    </div>`;
}

// ── Detail button wiring ───────────────────────────────────────────────────

function collectParams() {
  return {
    title:      (document.getElementById('param-title')?.value      ?? '').trim(),
    day:         document.getElementById('param-day')?.value        ?? '',
    run_id:     (document.getElementById('param-run-id')?.value     ?? '').trim(),
    draft_path: (document.getElementById('param-draft-path')?.value ?? '').trim(),
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

      const p = collectParams();
      const cwd = config.cwd || '.';

      const tiktokPlan = d.tiktok_upload_plan_exists
        ? `${d.export_folder}/tiktok-upload-plan.json`
        : null;

      const ACTION_SPECS = {
        'validate-shorts': {
          title:   'Validate Shorts',
          label:   'Doğrulama komutu',
          command: `node scripts/validate-video-package.mjs --slug ${d.slug} --type shorts --report`,
          cwd,
        },
        'export-captions': {
          title:   'Export TikTok Captions',
          label:   'TikTok altyazı dışa aktarma',
          command: tiktokPlan
            ? `node scripts/export-tiktok-captions.mjs --plan "${tiktokPlan}"`
            : null,
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
            ? `node scripts/run-shorts-prep-pipeline.mjs --title "${p.title}" --day ${p.day} --run-id ${p.run_id || ('day' + p.day + '-batch-a')} --force`
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
      };

      const spec = ACTION_SPECS[action];
      if (spec) openModal({ ...spec, action, slug: d.slug, params: p });
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
    const exp     = t.expires_at  ? new Date(t.expires_at).toLocaleString('tr-TR')  : '—';
    const obt     = t.obtained_at ? new Date(t.obtained_at).toLocaleString('tr-TR') : '—';
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

function stopJobMonitor() {
  if (monitorInterval) { clearInterval(monitorInterval); monitorInterval = null; }
  monitorJobId = null;
  logOffset    = 0;
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

  document.getElementById('modal-preview-wrap').innerHTML =
    `${labelLine}${cwdLine}${warningLine}${commandBlock}`;

  // Reset output section
  document.getElementById('modal-output-section').classList.add('hidden');
  document.getElementById('modal-output').textContent    = '';
  document.getElementById('modal-status-bar').textContent = '';
  document.getElementById('modal-status-bar').className  = 'modal-status';

  // Enable run button only when command is valid
  const runBtn = document.getElementById('modal-run-btn');
  runBtn.disabled    = !hasCommand;
  runBtn.textContent = 'Çalıştır';

  document.getElementById('modal-overlay').classList.remove('hidden');
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
      statusEl.className   = 'modal-status';
      statusEl.textContent = `Arka plan işi başlatıldı: ${data.job_id}`;
      monitorJob(data.job_id);
      return;
    }

    const out = [data.stdout, data.stderr].filter(Boolean).join('\n').trim();
    outputEl.textContent = out || '(no output)';

    if (data.error) {
      statusEl.className   = 'modal-status fail';
      statusEl.textContent = `Hata: ${data.error}`;
    } else if (data.exit_code === 0) {
      statusEl.className   = 'modal-status ok';
      statusEl.textContent = 'Başarılı (exit 0)';
      modalNeedsRefresh = true;
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

document.getElementById('refresh-btn').addEventListener('click', () => {
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
  loadDrafts();      // default active tab
  refreshTokenBadge();
})();

setInterval(() => {
  if      (activeTab === 'drafts'   && !currentDraft) loadDrafts();
  else if (activeTab === 'shorts'   && !currentSlug)  loadOverview();
  else if (activeTab === 'services')                  loadServices();
  refreshTokenBadge();
}, 30_000);
