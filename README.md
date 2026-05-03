# Derin Okuma

Risale-i Nur metinleri üzerine dikkatli, katmanlı okumalar.

**Canlı site:** https://derin-okuma.vercel.app/
**GitHub:** LeviAckermanajs/derin-okuma
**Deployment:** Vercel (otomatik, `main` branch üzerinden)

---

## Proje Hakkında

Derin Okuma; Risale-i Nur külliyatını günümüz insanına anlamlı bir şekilde açıklamayı hedefleyen bir blog projesidir. Her yazı bir metni bölüm bölüm ele alır, katman katman açar ve bugünkü hayata taşır.

Site başlığı: **Derin Okuma**
Site açıklaması: *Hakikat arayışında dikkatli okumalar.*

---

## Stack

| Araç | Versiyon | Amaç |
|---|---|---|
| Astro | ^6.0.4 | Statik site üretimi |
| @astrojs/mdx | ^5.0.0 | MDX desteği |
| @astrojs/rss | ^4.0.17 | RSS feed |
| @astrojs/sitemap | ^3.7.1 | Sitemap üretimi |
| sharp | ^0.34.3 | Görsel optimizasyonu |

Node.js: `>=22.12.0`

---

## Proje Yapısı

```
derin-okuma/
├── public/
│   ├── favicon.ico / favicon.svg
│   └── fonts/             # Atkinson fontu (regular + bold)
├── src/
│   ├── assets/            # Blog placeholder görselleri
│   ├── components/        # BaseHead, Header, Footer, FormattedDate, HeaderLink
│   ├── content/
│   │   └── blog/          # Markdown blog yazıları (Risale-i Nur açıklamaları)
│   ├── layouts/
│   │   └── BlogPost.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   └── rss.xml.js
│   ├── styles/
│   │   └── global.css
│   ├── consts.ts          # Site başlığı ve açıklaması
│   └── content.config.ts  # Blog koleksiyon şeması
├── docs/                  # Proje dokümantasyonu
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## Geliştirme Komutları

```bash
npm install          # Bağımlılıkları kur
npm run dev          # Geliştirme sunucusu → localhost:4321
npm run build        # Production build → ./dist/
npm run preview      # Build önizlemesi
npm run astro        # Astro CLI komutları
```

---

## İçerik

Blog yazıları `src/content/blog/` altında Markdown dosyaları olarak tutulur.

Her yazının frontmatter alanları:

```yaml
---
title: "Yazı Başlığı"
description: "Kısa açıklama"
pubDate: YYYY-MM-DD
updatedDate: YYYY-MM-DD   # opsiyonel
heroImage: "./gorsel.jpg"  # opsiyonel
---
```

Şu an **15 blog yazısı** mevcut. Konular: 10. Söz, 21. Söz, 23. Söz, 24. Söz (Sevgi ve Korku).

---

## Deployment

- Main branch'e push yapıldığında Vercel otomatik olarak production'a deploy eder.
- `gonder.bat` dosyası Windows ortamında `git add . && git commit -m "güncelleme" && git push` işlemini tek komutla çalıştırır.

---

## Dokümantasyon

- [`docs/project-brief.md`](docs/project-brief.md) — Proje amacı ve hedef kitle
- [`docs/content-guide.md`](docs/content-guide.md) — İçerik yazım rehberi
- [`docs/ai-workflow.md`](docs/ai-workflow.md) — AI destekli içerik ve video üretim akışı
- [`docs/architecture-notes.md`](docs/architecture-notes.md) — Mimari kararlar ve notlar
- [`docs/backlog.md`](docs/backlog.md) — Yapılacaklar listesi
- [`docs/decisions/`](docs/decisions/) — Architectural Decision Records (ADR)
