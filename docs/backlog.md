# Backlog — Derin Okuma

Son güncelleme: 2026-05-03

---

## Foundation

- [x] Mevcut Astro repo'nun audit'i
- [x] AI dokümantasyonunun repo içine eklenmesi (CLAUDE.md, AGENTS.md, docs/)
- [x] ADR 0002: Astro stack kararının resmileştirilmesi
- [ ] Mevcut içerik yapısının tam çıkarılması (15 yazı, frontmatter analizi)
- [ ] İçerik metadata modelinin standardize edilmesi (video_ready alanı?)
- [x] `astro.config.mjs` site URL'sinin `https://derin-okuma.vercel.app` olarak güncellenmesi

**Vercel bağlantısı:** Mevcut ve çalışıyor. Doğrulama yapılacak (deployment logs kontrol).

---

## İçerik

- [ ] Mevcut 15 yazının video üretimi için uygunluk değerlendirmesi
- [ ] Yeni yazılar için frontmatter standardının netleştirilmesi
- [ ] `heroImage` kullanımına başlanması (şu an hiçbir yazıda yok)
- [ ] About sayfasının güncellenmesi (şu an varsayılan Astro içeriği)

---

## Video Workflow Entegrasyonu

Bu kısım uzak gelecek değil, aktif kullanım ihtiyacıdır.

**Aşama 1 — Manuel akış belgeleme (Day-04'te tamamlandı):**
- [x] Mevcut ChatGPT → n8n narration akışının üst seviye belgelenmesi (`docs/ai-workflow.md`, `docs/video-workflow.md`)
- [x] Landscape narration prompt şablonu oluşturulması (`docs/prompts/landscape-narration.md`)
- [x] Shorts narration prompt şablonu oluşturulması (`docs/prompts/shorts-narration.md`)
- [x] Scene JSON formatının ilk versiyonunun belgelenmesi (`docs/prompts/scene-json-format.md`)
- [x] Video pipeline'ın ayrı repo olarak kalması kararının ADR ile kaydedilmesi (ADR 0003)

**Aşama 1 — Açık kalanlar:**
- [ ] `scene-blog-video` içindeki gerçek n8n input JSON örneğiyle format doğrulaması (smoke test)
- [ ] İlk gerçek blog yazısını (`Sevgi ve Korku`) yeni prompt şablonuyla landscape narration'a çevirme
- [ ] İlk gerçek blog yazısından 5–6 Shorts paketi çıkarma
- [ ] Prompt çıktılarını n8n input'una elle verip smoke test yapma

**Aşama 2 — Şablon sistemi:**
- [ ] YouTube başlık/açıklama üretim şablonu oluşturulması
- [ ] Prompt çıktılarının `scene-blog-video` spesifikasyonuyla karşılaştırılması ve gerekirse güncellenmesi

**Aşama 3 — Yarı otomatik pipeline:**
- [ ] Claude API entegrasyonu: Markdown → narration + scene JSON
- [ ] Frontmatter'a `video_ready` veya `video_status` alanı eklenmesi
- [ ] n8n otomatik input alma

---

## Teknik Borç

- [ ] `gonder.bat` commit mesajını "güncelleme" yerine daha açıklayıcı yapmak için güncelleme
- [ ] Mevcut blog yazılarındaki format tutarsızlığı (bazıları HTML, bazıları Markdown)

---

## Fikir Havuzu

- Yazılara okuma süresi eklenmesi
- Etiket / kategori sistemi (Söz bazında filtreleme)
- Arama fonksiyonu
- Yazılar arası ilgili yazılar bölümü
