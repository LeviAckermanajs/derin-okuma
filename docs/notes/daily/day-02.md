# Day-02 — Mevcut Durum Audit ve Dokümantasyon Hizalaması

**Tarih:** 2026-05-03
**Durum:** Tamamlandı

---

## Bugünün Amacı

Derin Okuma projesini AI çalışma düzenine hazırlamak. Bunun için:

1. Mevcut repo gerçekliğini okumak
2. Dokümantasyonu bu gerçekliğe göre yazmak
3. Stack kararını kayıt altına almak
4. Video workflow akışını belgelemek

---

## Mevcut Durum Tespiti

### Stack
- Astro 6.0.4 + MDX + RSS + Sitemap
- Node >=22.12.0
- Deployment: Vercel (main branch → otomatik production)

### İçerik
- 15 blog yazısı mevcut, hepsi Risale-i Nur üzerine:
  - 10. Söz (Haşir Risalesi) — 2 yazı
  - 21. Söz — 2 yazı
  - 23. Söz — 9 yazı (1. ve 2. Mebhas)
  - 24. Söz — Sevgi ve Korku — 1 yazı
- Frontmatter: `title`, `description`, `pubDate` (zorunlu), `updatedDate`, `heroImage` (opsiyonel)
- Hiçbir yazıda `heroImage` kullanılmamış
- Format: bazı yazılar HTML (`<section class="risale-article">`), bazıları Markdown başlıklı

### Dosyalar
- `gonder.bat` — Windows git push script (commit mesajı her zaman "güncelleme")
- `siteyi-ac.bat` — Windows dev server script
- `.vscode/` — VS Code ayarları mevcut

### Eksikler
- `astro.config.mjs` içinde `site: 'https://example.com'` yazıyor (gerçek URL değil)
- Hiçbir dokümantasyon dosyası yoktu

---

## Yapılan Dokümantasyon Hizalaması

Oluşturulan dosyalar:

| Dosya | Açıklama |
|---|---|
| `README.md` | Derin Okuma projesine göre yeniden yazıldı |
| `CLAUDE.md` | Claude Code kuralları ve bağlam |
| `AGENTS.md` | Agent sınırları |
| `docs/project-brief.md` | Proje amacı ve hedef kitle |
| `docs/content-guide.md` | İçerik yazım rehberi + videoya dönüştürme standardı |
| `docs/ai-workflow.md` | n8n video üretim akışı belgelendi |
| `docs/architecture-notes.md` | Stack kararları ve mimari |
| `docs/backlog.md` | Yapılacaklar (gerçeğe göre düzenlendi) |
| `docs/decisions/0001-project-foundation.md` | Temel kuruluş ADR'si |
| `docs/decisions/0002-keep-astro-stack.md` | Astro stack korunuyor ADR'si |
| `docs/notes/daily/day-01.md` | Day-01 notu |
| `docs/notes/daily/day-02.md` | Bu dosya |

---

## Alınan Kararlar

### Ana Karar: Astro stack korunacak
Mevcut site çalışıyor, Astro içerik odaklı blog için uygun, migration maliyeti somut kazanım yok. Bkz. ADR 0002.

### Video workflow aktif kullanım
Blog → n8n → video akışı bir gelecek planı değil, şu an kullanılıyor. Dokümantasyona bu gerçeklikle yazıldı.

### Sıfırdan değil, mevcut repo üzerinden
Proje temelden yeniden kurulmayacak. Mevcut deployment ve içerik korunacak, üzerine inşa edilecek.

---

## Açık Sorular

1. `astro.config.mjs` içindeki site URL'si ne zaman düzeltilecek? (Sitemap ve canonical URL'yi etkiliyor)
2. n8n pipeline'ın detayları belgelenmeli — hangi node'lar var, input formatı tam olarak ne?
3. ChatGPT narration prompt'u standarize edilmiş mi?
4. Blog yazılarındaki HTML/Markdown format karışıklığı tutarlı hale getirilecek mi?
5. About sayfası güncellenecek mi? (Şu an varsayılan Astro içeriği)

---

## Sonraki Gün Önerisi (Day-03)

**Öncelik 1:** `astro.config.mjs` site URL düzeltmesi (küçük, yüksek etki)

**Öncelik 2:** n8n pipeline'ının adım adım belgelenmesi — `docs/ai-workflow.md` genişletilmesi

**Öncelik 3:** Narration prompt şablonunun taslağının oluşturulması (landscape + shorts için ayrı)

**Öncelik 4:** Mevcut 15 yazının video üretimi için uygunluk sıralaması
