# Day-01 — Proje Başlangıcı

**Tarih:** 2026-05-03
**Durum:** Tamamlandı (Day-02 notlarıyla birlikte ele alındı)

---

## Amaç

Derin Okuma projesini AI çalışma düzenine hazırlamak. Mevcut repo gerçekliğini anlamak, dokümantasyon temelini oluşturmak.

---

## Başlangıç Durumu

- Repo mevcut (`LeviAckermanajs/derin-okuma`)
- Canlı site: `https://derin-okuma.vercel.app/`
- Stack: Astro 6.x
- İçerik: 15 blog yazısı, hepsi Risale-i Nur üzerine
- Deployment: Vercel, aktif

---

## Tespitler

- Hiçbir dokümantasyon dosyası yoktu (docs/, CLAUDE.md, AGENTS.md)
- README varsayılan Astro başlangıç README'siydi
- `astro.config.mjs` içinde `site: 'https://example.com'` yazıyor (düzeltilmeli)
- `gonder.bat` — Windows'ta tek komutla git push
- `siteyi-ac.bat` — Windows'ta dev server açma
- Blog yazıları iki formatta: bazıları HTML (`<section class="risale-article">`), bazıları Markdown

---

## Yapılanlar

Bkz. Day-02 notları.

---

## Açık Sorular

- n8n pipeline'ın tam detayları?
- ChatGPT prompt'u standarize edilmiş mi?
- `astro.config.mjs` site URL'si ne zaman düzeltilecek?
