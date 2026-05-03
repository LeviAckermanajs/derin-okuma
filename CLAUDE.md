# CLAUDE.md — Derin Okuma Projesi

Bu dosya, Claude Code'un bu repo üzerinde çalışırken uyması gereken bağlamı ve kuralları tanımlar.

---

## Proje Nedir?

Derin Okuma; Risale-i Nur külliyatını katmanlı ve dikkatli okumalarla günümüze taşıyan bir Astro blog sitesidir.

**Canlı site:** https://derin-okuma.vercel.app/
**Deployment:** Vercel — main branch'e push = otomatik production deploy

---

## Stack

- **Framework:** Astro 6.x
- **İçerik:** Markdown + MDX (src/content/blog/)
- **Deployment:** Vercel
- **Node:** >=22.12.0

---

## Temel Kurallar

### Uygulama koduna dokunma
- `src/` altındaki `.astro`, `.ts`, `.js`, `.css` dosyalarını kullanıcı açıkça istemeden değiştirme.
- `package.json`'a bağımlılık ekleme veya silme.
- `astro.config.mjs` değiştirme.
- Vercel ayarlarına dokunma.

### İçerik dosyalarına dokunma
- `src/content/blog/` altındaki mevcut yazıları değiştirme.
- Yeni blog yazısı oluşturmak için kullanıcı açıkça istemelidir.

### Dokümantasyon — serbest
- `docs/` altındaki dosyalar eklenebilir ve güncellenebilir.
- `CLAUDE.md`, `AGENTS.md`, `README.md` güncellenebilir.

---

## İçerik Şeması

Blog yazılarının frontmatter alanları:

```yaml
title: string          # zorunlu
description: string    # zorunlu
pubDate: date          # zorunlu (YYYY-MM-DD)
updatedDate: date      # opsiyonel
heroImage: image       # opsiyonel
```

---

## Video Workflow Bağlamı

Kullanıcı mevcut blog yazılarını n8n pipeline üzerinden landscape ve shorts videolarına dönüştürüyor.
Narration şu an manuel olarak ChatGPT ile hazırlanıp n8n input'una ekleniyor.
Bu iş akışına destek dokümantasyonu `docs/ai-workflow.md` içinde tutulur.

---

## Commit Mesajları

Şu an repo commit mesajları kısa tutulmuş ("güncelleme"). Yeni commit'lerde daha açıklayıcı mesaj önerilir.

---

## Dokümanlar

| Dosya | Amaç |
|---|---|
| `docs/project-brief.md` | Proje amacı ve hedef kitle |
| `docs/content-guide.md` | İçerik yazım rehberi |
| `docs/ai-workflow.md` | AI / n8n video üretim akışı |
| `docs/architecture-notes.md` | Mimari notlar |
| `docs/backlog.md` | Yapılacaklar |
| `docs/decisions/` | ADR dosyaları |
| `docs/notes/daily/` | Günlük çalışma notları |
