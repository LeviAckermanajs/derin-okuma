# Video Workflow — Derin Okuma

Bu doküman, Derin Okuma blog yazılarından video üretimine geçiş akışını tanımlar.

---

## Repo Rolleri

| Repo | Sorumluluk |
|---|---|
| `derin-okuma` | Blog içeriği, narration, prompt şablonları, scene JSON hazırlık standardı |
| `scene-blog-video` | n8n workflow, Python renderer, TTS/video üretimi, Pexels entegrasyonu |

**Bu iki repo şimdilik ayrı kalacak.** `derin-okuma` renderer kodu içermeyecek. Bağ, paylaşılan JSON formatı ve prompt standartları üzerinden kurulmuş.

Bkz. ADR 0003.

---

## Mevcut Manuel Akış

```
1. Blog yazısı veya analiz metni hazırlanır (derin-okuma)
        ↓
2. ChatGPT ile landscape video narration hazırlanır (manuel)
   → ~30-40 sahnelik narration metni
   → Her sahne: narration + visual_note + keywords
        ↓
3. Aynı içerikten 5-6 viral Shorts çıkarılır (manuel)
   → Her Shorts: hook + title + description + 2-5 sahne
        ↓
4. scene-blog-video n8n workflow input'una
   Manual Scene JSON formatında girilir (manuel)
        ↓
5. n8n: input doğrulama → normalizasyon → TTS üretimi
   → Pexels video arama → manifest yazımı
        ↓
6. Python renderer: manifest → video birleştirme → çıktı
        ↓
7. Landscape + Shorts video üretilir
```

---

## Landscape Video Standardı

- **Süre:** Yaklaşık 8–12 dakika
- **Sahne sayısı:** Ortalama 30–40 sahne
- **Aspect ratio:** 16:9 (1920×1080)
- **Ton:** Sakin, derin, tefekkürî
- **Anlatım dili:** Dinleyici kitabı veya yazarı bilmiyor olabilir — herkese hitap eden açıklama diliyle yaz
- **Alıntı değil:** Metinden doğrudan alıntı gibi değil, herkesin anlayabileceği tarzda yaz
- **Sahne uzunluğu:** Tek cümlelik çok kısa olmayacak, çok uzun bloklar da olmayacak

---

## Shorts Standardı

- **Sayı:** 5–6 ayrı kısa parça (her blog yazısından)
- **Süre:** ~45–90 saniye
- **Aspect ratio:** 9:16 (1080×1920)
- **Her Shorts için:**
  - Güçlü hook (ilk 3–5 saniye)
  - Tek ana fikir / tek duygu / tek kırılma noktası
  - YouTube Shorts için uygun başlık (vurucu ama clickbait değil)
  - Hashtagli açıklama
  - 2–5 sahnelik kısa scene JSON
- **Ton:** Manevî içeriği ucuzlaştırma; derinliği kısa formata taşı

---

## n8n'e Manuel Scene JSON Gönderimi

n8n'in kabul ettiği format `manual_scene_json` spesifikasyonudur.

**Zorunlu üst-seviye alanlar:**

```json
{
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "job": {
    "title": "...",
    "description": "...",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "..."
  },
  "render_preferences": {
    "mode": "full_and_shorts",
    "subtitles_enabled": true,
    "target_aspect_ratio": "16:9",
    "target_resolution": "1920x1080",
    "target_fps": 30,
    "voice_language": "tr"
  },
  "scenes": [...]
}
```

**Geçerli `mode` değerleri:**
- `full_video` — sadece landscape
- `shorts` — sadece shorts
- `full_and_shorts` — ikisi birden

**İlk smoke test standardı:** Landscape (`full_video`) ve Shorts (`shorts`) önce ayrı ayrı test edilecek. `full_and_shorts` her iki mod çalışır hâle geldikten sonra kullanılacak.

**Geçerli `target_aspect_ratio` değerleri:**
- `16:9` — landscape
- `9:16` — shorts

**Önemli teknik kurallar:**
- JSON geçerli olmalı; Türkçe karakterler (`ş`, `ğ`, `ü`, `ö`, `ı`, `ç`) korunmalı
- `narration` alanı kullanılacak, `text` alanı değil
- `visual_note` alanı korunmalı
- `scene_id` string olarak tutulacak, format: `"scene-001"`
- JSON içine yorum satırı yazılmayacak
- Landscape ve Shorts çıktıları ayrı job olarak ya da `mode: full_and_shorts` ile birlikte gönderilebilir

---

## scene-blog-video Pipeline Özeti

Pipeline katmanları (read-only referans, `~/projects/scene-blog-video`):

| Katman | Araç | Sorumluluk |
|---|---|---|
| Orchestration | n8n | Input alma, doğrulama, normalizasyon, TTS, Pexels, manifest yazımı |
| Rendering | Python | Manifest okuma, ses/video birleştirme, çıktı üretimi |
| Depolama | Dosya sistemi | `output/jobs/<job_id>/` altında job klasörü |

---

## Gelecek Aşamalar

- Blog frontmatter'a `video_status` alanı eklenerek hangi yazıların videoya hazırlandığı takip edilebilir
- `docs/prompts/` altındaki şablonlar kullanılarak narration/scene JSON üretimi standartlaşacak
- Uzun vadede Claude API ile blog yazısından otomatik narration + scene JSON üretimi

Bkz:
- `docs/prompts/landscape-narration.md`
- `docs/prompts/shorts-narration.md`
- `docs/prompts/scene-json-format.md`
- `docs/ai-workflow.md`
