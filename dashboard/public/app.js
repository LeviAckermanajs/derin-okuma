// dashboard/public/app.js

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

function pipelinePill(status) {
  if (!status)                              return pill('no', '—');
  if (status === 'ok' || status === 'passed') return pill('ok', 'ok');
  return pill('failed', status);
}

function boolPill(value) {
  return value ? pill('yes', 'evet') : pill('no', '—');
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
      el.className = 'badge badge-error';
      el.textContent = 'TikTok: token yok';
      return;
    }
    if (t.is_expired) {
      el.className = 'badge badge-error';
      const exp = t.expires_at ? new Date(t.expires_at).toLocaleString('tr-TR') : '?';
      el.textContent = `TikTok: süresi dolmuş (${exp})`;
      return;
    }
    const exp = t.expires_at ? new Date(t.expires_at).toLocaleString('tr-TR') : '?';
    el.className = 'badge badge-ok';
    el.textContent = `TikTok: geçerli (${t.open_id_masked}) — ${exp} kadar`;
  } catch {
    el.className = 'badge badge-warn';
    el.textContent = 'TikTok: okunamadı';
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
    tbody.innerHTML = slugs.map(s => `
      <tr data-slug="${esc(s.slug)}">
        <td>${esc(s.slug)}</td>
        <td>${pkgPill(s.package_status)}</td>
        <td>${boolPill(s.batch)}</td>
        <td>${pipelinePill(s.pipeline_status)}</td>
        <td>${boolPill(s.publish)}</td>
      </tr>
    `).join('');

    tbody.querySelectorAll('tr[data-slug]').forEach(row => {
      row.addEventListener('click', () => showDetail(row.dataset.slug));
    });
  } catch (err) {
    tbody.innerHTML = `<tr><td colspan="5" class="loading error-msg">Hata: ${esc(err.message)}</td></tr>`;
  }
}

// ── Detail view ────────────────────────────────────────────────────────────

async function showDetail(slug) {
  document.getElementById('overview-section').hidden = true;
  const detailSection = document.getElementById('detail-section');
  detailSection.hidden = false;
  document.getElementById('detail-title').textContent = slug;
  document.getElementById('detail-body').innerHTML = '<div class="loading">Yükleniyor…</div>';

  try {
    const d = await apiFetch(`/api/slug/${encodeURIComponent(slug)}`);
    document.getElementById('detail-body').innerHTML = renderDetail(d);
  } catch (err) {
    document.getElementById('detail-body').innerHTML =
      `<div class="loading error-msg">Hata: ${esc(err.message)}</div>`;
  }
}

function hideDetail() {
  document.getElementById('overview-section').hidden = false;
  document.getElementById('detail-section').hidden = true;
}

function renderDetail(d) {
  const pkg      = d.package;
  const pipeline = d.pipeline;

  // ── Package card
  let pkgCard;
  if (pkg) {
    pkgCard = `
      <div class="detail-card">
        <h3>Shorts Paketi</h3>
        <table class="kv-table">
          <tr><td>Durum</td>       <td>${pkgPill(pkg.content_generation_status)}</td></tr>
          <tr><td>Test Günü</td>   <td>${esc(pkg.test_day ?? '—')}</td></tr>
          <tr><td>Başlık</td>      <td>${esc(pkg.source?.title ?? '—')}</td></tr>
          <tr><td>Short Sayısı</td><td>${pkg.shorts?.length ?? 0}</td></tr>
        </table>
      </div>`;
  } else {
    pkgCard = `
      <div class="detail-card">
        <h3>Shorts Paketi</h3>
        <p class="loading">${pkgPill('missing', 'eksik')} — paket dosyası yok</p>
      </div>`;
  }

  // ── Pipeline card
  let pipelineCard;
  if (pipeline) {
    const failRow = pipeline.failedCommand
      ? `<tr><td>Hata Komutu</td><td><code class="inline">${esc(pipeline.failedCommand)}</code></td></tr>`
      : '';
    const ts = pipeline.timestamp
      ? new Date(pipeline.timestamp).toLocaleString('tr-TR')
      : '—';
    pipelineCard = `
      <div class="detail-card">
        <h3>Pipeline Durumu</h3>
        <table class="kv-table">
          <tr><td>Durum</td>   <td>${pipelinePill(pipeline.status)}</td></tr>
          <tr><td>Run ID</td>  <td>${esc(pipeline.runId ?? '—')}</td></tr>
          <tr><td>Gün</td>     <td>${esc(pipeline.dayTag ?? '—')}</td></tr>
          <tr><td>Zaman</td>   <td>${esc(ts)}</td></tr>
          ${failRow}
        </table>
      </div>`;
  } else {
    pipelineCard = `
      <div class="detail-card">
        <h3>Pipeline Durumu</h3>
        <p class="loading" style="color:var(--muted)">Rapor yok</p>
      </div>`;
  }

  // ── Shorts list card
  let shortsCard = '';
  if (pkg?.shorts?.length) {
    const items = pkg.shorts.map(s => `
      <li>
        <span class="short-id">${esc(s.short_id)}</span>
        <span class="short-title">${esc(s.title)}</span>
        <span class="pill pill-no" style="font-size:10px">${s.scenes?.length ?? 0} sahne</span>
      </li>`).join('');
    shortsCard = `
      <div class="detail-card">
        <h3>Shorts (${pkg.shorts.length})</h3>
        <ul class="shorts-list">${items}</ul>
      </div>`;
  }

  // ── Load inputs card
  const liHtml = d.load_inputs.length
    ? d.load_inputs.map(id => `<li>${esc(id)}-load-input.js</li>`).join('')
    : '<li style="color:var(--muted)">Yok</li>';
  const loadCard = `
    <div class="detail-card">
      <h3>Load Inputs (${d.load_inputs.length})</h3>
      <ul class="load-inputs-list">${liHtml}</ul>
    </div>`;

  // ── Batch card
  const batchCard = `
    <div class="detail-card">
      <h3>Batch Dosyası</h3>
      <p>
        ${boolPill(d.batch_exists)}
        ${d.batch_exists
          ? `&nbsp;<code class="inline">batches/${esc(d.slug)}-shorts-batch-load-input.js</code>`
          : ''}
      </p>
    </div>`;

  // ── Publish card
  let publishCard;
  if (d.publish_exists && d.publish_index) {
    publishCard = `
      <div class="detail-card full-width">
        <h3>Yayın Paketi</h3>
        <pre class="publish-index">${esc(d.publish_index)}</pre>
      </div>`;
  } else {
    publishCard = `
      <div class="detail-card">
        <h3>Yayın Paketi</h3>
        <p>${boolPill(d.publish_exists)}</p>
      </div>`;
  }

  return `
    <div class="detail-grid">
      ${pkgCard}
      ${pipelineCard}
      ${shortsCard}
      ${loadCard}
      ${batchCard}
      ${publishCard}
    </div>`;
}

// ── Event wiring ───────────────────────────────────────────────────────────

document.getElementById('refresh-btn').addEventListener('click', () => {
  loadOverview();
  refreshTokenBadge();
});

document.getElementById('detail-close').addEventListener('click', hideDetail);

// ── Init ───────────────────────────────────────────────────────────────────

loadOverview();
refreshTokenBadge();

setInterval(() => {
  loadOverview();
  refreshTokenBadge();
}, 30_000);
