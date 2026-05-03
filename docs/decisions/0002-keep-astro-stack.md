# ADR 0002 — Astro Stack Korunuyor

**Tarih:** 2026-05-03
**Durum:** Kabul edildi

---

## Bağlam

Derin Okuma sitesi Astro 6.x ile oluşturulmuş ve Vercel'de aktif olarak çalışıyor. Proje büyüdükçe framework seçimi yeniden değerlendirilmeli miydi sorusu gündeme geldi.

---

## Karar

**Astro stack korunacak. Next.js'e veya başka bir framework'e migration yapılmayacak.**

---

## Gerekçe

1. **Mevcut deployment çalışıyor.** Site `https://derin-okuma.vercel.app/` adresinde production'da çalışıyor. Gereksiz yere bozulmamalı.

2. **Astro bu kullanım için uygun.** Derin Okuma içerik odaklı bir blog. Astro, statik içerik için tasarlanmış ve bu konuda mükemmel performans sunuyor (100/100 Lighthouse, minimal JS).

3. **Migration maliyeti somut kazanım yok.** Next.js API routes, SSR, React ekosistemi bu projede gerekmiyor. Migration süresi içerik üretimine harcanabilir.

4. **Vercel + Astro entegrasyonu zaten kurulu.** Yeniden bağlamaya gerek yok.

5. **n8n video pipeline blog içeriğine dayalı.** Stack değişikliği içerik formatını etkilemez ama geliştirme sürecini yavaşlatır.

---

## Alternatifler Değerlendirildi

### Next.js
- **Artı:** Büyük ekosistem, React, API routes, SSR
- **Eksi:** Bu proje için overkill; migration maliyeti var; somut kazanım yok
- **Karar:** Reddedildi (kısa ve orta vadede)

### SvelteKit
- Değerlendirilmedi. Mevcut stack çalışıyor.

---

## Sonuçlar

- Tüm geliştirme Astro üzerinde sürecek.
- Framework migration konusu ADR olmadan açılmayacak.
- Astro ekosistemi içindeki geliştirmeler (yeni integrasyon, content collection şema güncellemesi) bu ADR'yi değiştirmez.

---

## Sonraki Adımlar

- `astro.config.mjs` içindeki `site: 'https://example.com'` → `https://derin-okuma.vercel.app` olarak düzeltilmeli.
- Bu karar `docs/architecture-notes.md` içinde de referanslandı.
