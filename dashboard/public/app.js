// dashboard/public/app.js — Phase 2

// ── Global state ───────────────────────────────────────────────────────────

let config        = { n8n_url: 'http://localhost:5678', cwd: '' };
let currentSlug   = null;   // slug shown in detail view
let modalAction   = null;
let modalSlug     = null;
let modalNeedsRefresh = false;

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
  if (row.is_stale_failed) return pill('stale', 'stale failed');
  if (!row.pipeline_status) return pill('no', '—');
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

  const staleNote = d.is_stale_failed
    ? `<div class="stale-note">⚠ Paket filled + batch mevcut → bu hata muhtemelen eski bir çalışmadan kaldı.</div>`
    : '';

  const failRow = pl.failedCommand
    ? kv('Hata komutu', `<code class="inline small">${esc(pl.failedCommand)}</code>`)
    : '';

  return `
    <div class="detail-card">
      <h3>Pipeline${d.is_stale_failed ? ' <span class="pill pill-stale" style="font-size:10px">stale</span>' : ''}</h3>
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
  const ttPlanOk = d.tiktok_upload_plan_exists;
  const batchOk  = d.batch_exists;

  return `
    <div class="detail-card full-width">
      <h3>Aksiyonlar</h3>
      <div class="action-bar">
        <button class="btn-action" data-action="validate-shorts"
          title="node scripts/validate-video-package.mjs --slug ${esc(d.slug)} --type shorts --report">
          ✓ Validate Shorts
        </button>
        <button class="btn-action ${batchOk ? '' : 'btn-disabled'}"
          data-action="copy-batch" ${batchOk ? '' : 'disabled'}
          title="Batch load input içeriğini panoya kopyala">
          ⎘ Copy Batch Load Input
        </button>
        <button class="btn-action" data-action="open-n8n"
          title="n8n arayüzünü aç">
          ↗ Open n8n
        </button>
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
        <button class="btn-action" data-action="refresh"
          title="Detay panelini yenile">
          ↻ Refresh
        </button>
      </div>
    </div>`;
}

// ── Detail button wiring ───────────────────────────────────────────────────

function wireDetailButtons(d) {
  // Fill token card
  fillTokenCard();

  // Action buttons
  document.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const action = btn.dataset.action;

      if (action === 'refresh') {
        showDetail(d.slug); return;
      }

      if (action === 'open-n8n') {
        window.open(config.n8n_url, '_blank'); return;
      }

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

      // Server-side actions: build canonical spec and open preview modal
      const tiktokPlan = d.tiktok_upload_plan_exists
        ? `${d.export_folder}/tiktok-upload-plan.json`
        : null;

      const ACTION_SPECS = {
        'validate-shorts': {
          title:   'Validate Shorts',
          label:   'Doğrulama komutu',
          command: `node scripts/validate-video-package.mjs --slug ${d.slug} --type shorts --report`,
          cwd:     config.cwd || '.',
        },
        'export-captions': {
          title:   'Export TikTok Captions',
          label:   'TikTok altyazı dışa aktarma',
          command: tiktokPlan
            ? `node scripts/export-tiktok-captions.mjs --plan "${tiktokPlan}"`
            : null,
          cwd:     config.cwd || '.',
        },
        'tiktok-dry-run': {
          title:   'TikTok Upload Dry Run',
          label:   'TikTok yükleme önizlemesi (--dry-run)',
          command: tiktokPlan
            ? `node scripts/upload-tiktok-batch-real.mjs --plan "${tiktokPlan}" --dry-run`
            : null,
          cwd:     config.cwd || '.',
        },
      };

      const spec = ACTION_SPECS[action];
      if (spec) openModal({ ...spec, action, slug: d.slug });
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

// ── Modal ─────────────────────────────────────────────────────────────────

// spec: { title, label, command, cwd, action, slug }
function openModal(spec) {
  modalAction       = spec.action;
  modalSlug         = spec.slug;
  modalNeedsRefresh = false;

  const hasCommand = typeof spec.command === 'string' && spec.command.trim().length > 0;

  // Set title
  document.getElementById('modal-title').textContent = spec.title || spec.action;

  // Build structured preview — always renders regardless of display: flex elsewhere
  const cwdLine = spec.cwd
    ? `<div class="modal-meta"><span class="modal-meta-key">cwd:</span> ${esc(spec.cwd)}</div>`
    : '';
  const labelLine = spec.label
    ? `<div class="modal-meta modal-meta-label">${esc(spec.label)}</div>`
    : '';
  const commandBlock = hasCommand
    ? `<pre class="modal-code">${esc(spec.command)}</pre>`
    : `<div class="modal-no-command">⚠ Komut üretilemedi — plan dosyası bulunamadı.</div>`;

  document.getElementById('modal-preview-wrap').innerHTML =
    `${labelLine}${cwdLine}${commandBlock}`;

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
  document.getElementById('modal-overlay').classList.add('hidden');
  if (modalNeedsRefresh && currentSlug) showDetail(currentSlug, true);
  modalAction       = null;
  modalSlug         = null;
  modalNeedsRefresh = false;
}

async function runModal() {
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
      body:    JSON.stringify({ action: modalAction, slug: modalSlug }),
    });
    const data = await res.json();

    const out = [data.stdout, data.stderr].filter(Boolean).join('\n').trim();
    outputEl.textContent = out || '(no output)';

    if (data.error) {
      statusEl.className   = 'modal-status fail';
      statusEl.textContent = `Hata: ${data.error}`;
    } else if (data.exit_code === 0) {
      statusEl.className   = 'modal-status ok';
      statusEl.textContent = 'Başarılı (exit 0)';
      modalNeedsRefresh = true;
    } else {
      statusEl.className   = 'modal-status fail';
      statusEl.textContent = `Başarısız (exit ${data.exit_code})`;
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
  loadOverview();
  refreshTokenBadge();
});
document.getElementById('detail-close').addEventListener('click', hideDetail);
document.getElementById('modal-run-btn').addEventListener('click', runModal);
document.getElementById('modal-cancel-btn').addEventListener('click', closeModal);
document.getElementById('modal-x').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
});

// ── Init ───────────────────────────────────────────────────────────────────

(async () => {
  try { config = await apiFetch('/api/config'); } catch {}
  loadOverview();
  refreshTokenBadge();
})();

setInterval(() => {
  loadOverview();
  refreshTokenBadge();
}, 30_000);
