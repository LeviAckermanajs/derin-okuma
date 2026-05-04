# Backlog — Derin Okuma

Son güncelleme: 2026-05-04 (Day-16 — 23. Söz landscape yayın metadata son kontrolü)

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
- [x] `scene-blog-video` içindeki gerçek n8n input JSON örneğiyle format doğrulaması (smoke test input hazırlandı, Day-05)
- [x] İlk gerçek blog yazısını (`Sevgi ve Korku`) yeni prompt şablonuyla landscape narration'a çevirme (37 sahne, Day-05)
- [x] Landscape input'un n8n Load Input JS / `raw_input` wrapper formatına dönüştürülmesi (Day-06)
- [x] Uzun video TTS için `audio_strategy.single_track` standardının belgelenmesi (Day-06)
- [x] Day-06 single-track Load Input JS ile n8n smoke test (Day-07)
- [x] ElevenLabs tek track TTS ve timestamp davranışını doğrulama (Day-07)
- [x] Smoke test sonucunu raporlama (Day-07)
- [x] Landscape Load Input JS formatının Derin Okuma standardı olarak doğrulanması (Day-07)

**Aşama 2 — Şablon sistemi:**
- [x] YouTube başlık/açıklama prompt şablonu oluşturma (landscape + shorts ayrı) (Day-08)
- [x] YouTube başlık standardına "neden / nasıl" odaklı soru başlığı kuralı eklendi (Day-14)
- [ ] `Sevgi ve Korku` landscape videosu için gerçek YouTube metadata üretim testi
- [x] İlk gerçek blog yazısından 5–6 Shorts paketi çıkarma (Day-09 — 6 Shorts)
- [x] Shorts için n8n Load Input JS örneği oluşturma (Day-09 — 6 adet)
- [x] Shorts metadata üretim testi (Day-09 — metadata JSON hazır)
- [ ] Thumbnail metni üretim testi
- [x] İlk Shorts Load Input JS ile n8n smoke test — short-001 (Day-10)
- [x] short-001 Shorts formatının n8n tarafından kabul edildiğini doğrulama (Day-10)
- [x] 23-soz-1-mebhas-4-nokta için landscape + 6 Shorts tam üretim paketi hazırlanması (Day-11)
- [ ] Kalan Shorts Load Input JS dosyalarını sırayla test etme (`short-002` → `short-006`)
- [ ] Shorts subtitle konumu ve okunabilirlik standardını belgelemek
- [ ] Başarılı Shorts formatını Derin Okuma standardı olarak belgelemek
- [ ] Mevcut 15 yazının frontmatter ve video uygunluk audit'i
- [ ] Blog yazıları için `video_status` frontmatter alanını değerlendirme
- [x] 23-soz-1-mebhas-4-nokta Shorts smoke test — short-001 başarılı (Day-12)
- [x] 23-soz-1-mebhas-4-nokta short-002 → short-006 Load Input JS dosyalarını sırayla test etme (Day-13)
- [x] 23-soz-1-mebhas-4-nokta tüm Shorts paketi için yayın öncesi son kontrol (Day-13)
- [x] 23-soz-1-mebhas-4-nokta Shorts paketinin YouTube'da paylaşılması (Day-13)
- [x] 23-soz-1-mebhas-4-nokta landscape Load Input JS ile n8n smoke test
- [x] 23-soz-1-mebhas-4-nokta landscape video output oluşumu doğrulandı (Day-15)
- [x] Üretilen landscape video için YouTube yayın öncesi son kontrol
- [ ] 23-soz-1-mebhas-4-nokta landscape videosunun YouTube’da paylaşılması
- [ ] Shorts ve landscape performansını 24–48 saat sonra manuel değerlendirme
- [ ] Yayınlanan landscape video linkini dokümantasyona ekleme
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
