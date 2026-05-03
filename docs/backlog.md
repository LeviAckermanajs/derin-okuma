# Backlog — Derin Okuma

Son güncelleme: 2026-05-03

---

## Foundation

- [x] Mevcut Astro repo'nun audit'i
- [x] AI dokümantasyonunun repo içine eklenmesi (CLAUDE.md, AGENTS.md, docs/)
- [ ] ADR 0002: Astro stack kararının resmileştirilmesi ← bu dosyada yapıldı
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

**Aşama 1 — Manuel akış belgeleme (şimdiki):**
- [ ] Mevcut ChatGPT → n8n narration akışının adım adım belgelenmesi (`docs/ai-workflow.md`)
- [ ] Narration prompt şablonunun oluşturulması (landscape + shorts için ayrı)
- [ ] Shorts hook yazım rehberi

**Aşama 2 — Şablon sistemi:**
- [ ] Blog yazısından narration üretim şablonu (landscape)
- [ ] Blog yazısından narration üretim şablonu (shorts)
- [ ] Blog yazısından YouTube başlık/açıklama şablonu
- [ ] Sahne bazlı JSON formatının tanımlanması

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
