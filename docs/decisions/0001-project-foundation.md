# ADR 0001 — Proje Temeli

**Tarih:** 2026-05-03
**Durum:** Kabul edildi

---

## Bağlam

Derin Okuma projesi GitHub'da (`LeviAckermanajs/derin-okuma`) ve Vercel'de canlı olarak çalışıyor. Proje Astro ile oluşturulmuş, 15 blog yazısı mevcut, deployment aktif.

Projeye AI destekli geliştirme ortamı hazırlanıyor. Bu ADR, o temelin atılışını kayıt altına alıyor.

---

## Karar

Mevcut repo doğrudan kullanılacak. Sıfırdan başlanmayacak.

Şu adımlar atıldı:

1. Mevcut repo audit'i yapıldı
2. `CLAUDE.md` oluşturuldu — Claude Code kuralları
3. `AGENTS.md` oluşturuldu — Agent sınırları
4. `docs/` klasörü oluşturuldu ve temel dokümanlar eklendi:
   - `project-brief.md`
   - `content-guide.md`
   - `ai-workflow.md`
   - `architecture-notes.md`
   - `backlog.md`
5. `README.md` Derin Okuma projesine göre yeniden yazıldı

---

## Sonuçlar

- Proje dokümantasyonu repo içinde yaşayacak.
- Stack (Astro) korunacak. Bkz. ADR 0002.
- Video workflow entegrasyonu için zemin hazır.

---

## Açık Sorular

- `astro.config.mjs` içindeki `site: 'https://example.com'` düzeltilmeli.
- Mevcut blog yazılarının video üretimi için uygunluk değerlendirmesi yapılmalı.
- n8n pipeline'ın mevcut detayları belgelenmeli.
