# Mimari Notlar — Derin Okuma

## Mevcut Stack (Kesinleşmiş)

| Katman | Araç | Versiyon |
|---|---|---|
| Framework | Astro | ^6.0.4 |
| İçerik | Markdown + MDX | @astrojs/mdx ^5.0.0 |
| Feed | RSS | @astrojs/rss ^4.0.17 |
| SEO | Sitemap | @astrojs/sitemap ^3.7.1 |
| Görseller | sharp | ^0.34.3 |
| Deployment | Vercel | — |
| Node | — | >=22.12.0 |

**Durum:** Astro stack korunacak. Migration planlanmıyor. Bkz. ADR 0002.

---

## İçerik Mimarisi

İçerik, Astro Content Collections API üzerinden yönetiliyor:

```
src/content/blog/        ← Markdown dosyaları burada
src/content.config.ts    ← Koleksiyon şeması (Zod ile type-check)
```

Şema:
```ts
z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.optional(image()),
})
```

---

## Sayfa Yapısı

| Route | Dosya | Amaç |
|---|---|---|
| `/` | `src/pages/index.astro` | Ana sayfa |
| `/about` | `src/pages/about.astro` | Hakkında |
| `/blog` | `src/pages/blog/index.astro` | Blog listesi |
| `/blog/[slug]` | `src/pages/blog/[...slug].astro` | Yazı detayı |
| `/rss.xml` | `src/pages/rss.xml.js` | RSS feed |

---

## Bileşenler

| Bileşen | Amaç |
|---|---|
| `BaseHead.astro` | Meta taglar, OG, SEO |
| `Header.astro` | Site üst menüsü |
| `Footer.astro` | Alt bilgi |
| `HeaderLink.astro` | Menü linkleri |
| `FormattedDate.astro` | Tarih formatı |
| `BlogPost.astro` (layout) | Yazı sayfası düzeni |

---

## Bilinen Teknik Not

`astro.config.mjs` içinde `site: 'https://example.com'` yazıyor. Bu, sitemap ve canonical URL üretimi için gerçek site URL'sine (`https://derin-okuma.vercel.app`) güncellenmeli.

Bu, kritik bir bug değil ama sitemap ve RSS'te yanlış URL üretilmesine yol açar. Vercel Environment Variables üzerinden ya da config dosyasında düzeltilebilir.

---

## Mimari Karar Kaydı

- [ADR 0001 — Proje Temeli](decisions/0001-project-foundation.md)
- [ADR 0002 — Astro Stack Korunuyor](decisions/0002-keep-astro-stack.md)

---

## Alternatifler (değerlendirildi, seçilmedi)

### Next.js
- Daha büyük ekosistem, React tabanlı
- Blog için overkill; SSR ve API routes bu projede gerekmiyor
- Astro'dan migration maliyet yaratır, somut kazanım yok
- Bkz. ADR 0002

### SvelteKit
- Değerlendirilmedi. Astro zaten çalışıyor.

### Hugo / Jekyll
- Astro'dan geriye gitmek anlamlı değil.
