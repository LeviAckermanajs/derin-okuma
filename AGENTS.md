# AGENTS.md — Derin Okuma Projesi

Bu dosya, otonom AI agent'larının (Claude Code, Copilot, vs.) bu repo üzerinde nasıl davranması gerektiğini tanımlar.

---

## Proje Özeti

**Derin Okuma**, Risale-i Nur metinlerini katmanlı okumalarla açıklayan bir Astro blog sitesidir.

- Canlı site: https://derin-okuma.vercel.app/
- Stack: Astro 6.x, MDX, Vercel
- İçerik: `src/content/blog/` altında Markdown dosyaları

---

## Agent Sınırları

### Yapmaması gerekenler (kullanıcı açıkça istemeden)

- `src/` altındaki uygulama dosyalarını değiştirme
- `package.json` bağımlılıklarını değiştirme
- `astro.config.mjs` değiştirme
- Mevcut blog yazılarını (`src/content/blog/`) değiştirme veya silme
- Vercel veya deployment konfigürasyonuna dokunma
- `git push` yapma (kullanıcı onayı olmadan)

### Yapabilecekleri

- `docs/` altına yeni dosya ekleme veya güncelleme
- `CLAUDE.md`, `AGENTS.md`, `README.md` güncelleme
- Yeni blog yazısı taslağı oluşturma (kullanıcı isterse)
- İçerik analizi yapma
- Frontmatter kontrolü yapma

---

## İçerik Bağlamı

Tüm blog yazıları Türkçedir ve Risale-i Nur külliyatına aittir.
Yazıların frontmatter şeması:

```yaml
title: string
description: string
pubDate: YYYY-MM-DD
updatedDate: YYYY-MM-DD  # opsiyonel
heroImage: image          # opsiyonel
```

---

## Video Üretim Bağlamı

Kullanıcı blog yazılarını n8n pipeline üzerinden landscape + shorts video formatına dönüştürüyor.
Narration şu an manuel (ChatGPT → n8n input).
İlgili dokümantasyon: `docs/ai-workflow.md`

---

## Referans Dokümanlar

- `CLAUDE.md` — Claude Code özel kurallar
- `docs/project-brief.md` — Proje amacı
- `docs/content-guide.md` — İçerik yazım rehberi
- `docs/ai-workflow.md` — AI iş akışı
- `docs/backlog.md` — Yapılacaklar
- `docs/decisions/` — Mimari kararlar (ADR)
