# AI Destekli İçerik ve Video Üretim Akışı

## Mevcut Durum (2026-05-03)

Kullanıcı şu an aşağıdaki akışı manuel olarak yürütüyor:

```
Blog Yazısı
    ↓
ChatGPT → Narration hazırlama (manuel)
    ↓
n8n pipeline input
    ↓
Landscape video üretimi
    +
Shorts video üretimi
```

Bu bir hayal değil, **aktif kullanım**dır. n8n bağlantısı kurulu ve çalışıyor.

---

## Aşama 1 — Mevcut Akışın Belgelenmesi

### Narration hazırlama (manuel, şu anki)

1. Blog yazısı okunur
2. ChatGPT'ye şu bilgiler verilir:
   - Blog yazısının tam metni
   - Video türü: landscape veya shorts
   - Ton: sakin, düşündürücü, Türkçe
3. Narration metni alınır
4. n8n'e input olarak girilir

**Prompt şablonları Day-04'te oluşturuldu.** Bkz. `docs/prompts/`.

---

## Aşama 2 — Narration Şablonları (Day-04'te tamamlandı)

Blog yazısından üretilebilecek çıktılar ve şablonları:

- **Landscape narration** (30–40 sahne) → `docs/prompts/landscape-narration.md`
- **Shorts** (5–6 parça, hook + title + description + sahneler) → `docs/prompts/shorts-narration.md`
- **YouTube başlık/açıklama** → backlog'da planlanıyor

### Sahne Bazlı JSON
n8n pipeline için (Manual Scene JSON standardı — tam spesifikasyon için bkz. `docs/prompts/scene-json-format.md`):
```json
{
  "scene_id": "scene-001",
  "narration": "Türkçe anlatım metni.",
  "visual_note": "quiet forest path, soft morning light",
  "keywords": ["forest path", "morning light"]
}
```

- `narration` kullanılır — `text` kullanılmaz
- `scene_id` string olur: `"scene-001"`
- `visual_note` ve `keywords` İngilizce olur (Pexels API arama için)

---

## Aşama 3 — Otomatik Dönüştürme (Uzun Vade)

Blog yazısından bu çıktıları üretecek bir Claude API entegrasyonu düşünülebilir:

```
Blog yazısı (Markdown) → Claude API → Narration + Scene JSON + Başlık
```

Bu aşama için:
- Blog frontmatter'a `video_ready: true` gibi bir alan eklenebilir
- Narration ve scene JSON blog yazısıyla aynı klasörde tutulabilir
- n8n bu dosyaları otomatik alabilir

**Not:** Bu aşama şu an planlanıyor, henüz implemente edilmedi.

---

## Blogdan Videoya AI Akışı (Güncel Özet)

1. Blog yazısı veya analiz metni hazırlanır (`derin-okuma`)
2. `docs/prompts/landscape-narration.md` şablonu ile ChatGPT/Claude'dan landscape narration üretilir
3. `docs/prompts/shorts-narration.md` şablonu ile 5–6 Shorts varyasyonu çıkarılır
4. Çıktılar `docs/prompts/scene-json-format.md` standardına göre Manual Scene JSON'a dönüştürülür
5. JSON `scene-blog-video` n8n workflow'una manuel olarak girilir
6. `scene-blog-video` pipeline'ı: TTS → Pexels → manifest → Python renderer → video çıktısı

İki repo ayrı kalır. Bkz. ADR 0003.

---

## Referanslar

- `docs/content-guide.md` — İçerik yazım rehberi ve videoya dönüştürülebilir içerik standardı
- `docs/video-workflow.md` — Tam video workflow dokümantasyonu
- `docs/prompts/landscape-narration.md` — Landscape narration prompt şablonu
- `docs/prompts/shorts-narration.md` — Shorts prompt şablonu
- `docs/prompts/scene-json-format.md` — Manual Scene JSON format spesifikasyonu
- `docs/backlog.md` — Video workflow backlog items
