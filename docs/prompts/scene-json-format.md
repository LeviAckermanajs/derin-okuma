# Scene JSON Format — Derin Okuma

Bu doküman, Derin Okuma için `scene-blog-video` n8n pipeline'ına gönderilen Manual Scene JSON formatının tam spesifikasyonunu tanımlar.

Format `scene-blog-video/logic/manual-scene-json-spec.md` ile hizalıdır.

---

## Tam Yapı

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
  "scenes": [...],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "..."
  }
}
```

---

## Landscape Scene JSON

Her sahne için önerilen tam format:

```json
{
  "scene_id": "scene-001",
  "title": "Açılış",
  "narration": "İnsan bazen hayatın yükünü sadece omuzlarında değil, kalbinin içinde de taşır.",
  "visual_note": "A quiet morning forest path, soft light, slow cinematic movement.",
  "keywords": ["forest path", "morning light", "calm nature"],
  "media_hints": {
    "preferred_visual_style": "cinematic",
    "avoid": ["cartoon", "bright comedy tone"]
  },
  "emphasis": "calm_but_serious"
}
```

Minimal geçerli format (zorunlu alanlar yeterli):

```json
{
  "scene_id": "scene-001",
  "narration": "İnsan bazen hayatın yükünü sadece omuzlarında değil, kalbinin içinde de taşır.",
  "visual_note": "A quiet morning forest path, soft morning light.",
  "keywords": ["forest path", "morning light"]
}
```

---

## Gerçek Örnek — Sevgi ve Korku Landscape

`scene-blog-video/examples/manual-scene-input.example.json` dosyasından (okuma izniyle referans alındı).

> **Not:** Bu örnekte `visual_note` ve `keywords` Türkçe yazılmış. Bu, pipeline'ın ilk el yapımı örneğidir. Yeni Derin Okuma üretim standardında `visual_note` ve `keywords` alanları Pexels arama kalitesi için **İngilizce** yazılmalıdır. Örnek referans amaçlı korunmuştur.

```json
{
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "job": {
    "title": "Sevgi ve Korku Açıklaması",
    "description": "Sevgi ve korkunun insan kararlarını nasıl şekillendirdiğini anlatan sahne bazlı açıklayıcı video içeriği.",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "sevgi-korku-001"
  },
  "render_preferences": {
    "mode": "full_and_shorts",
    "subtitles_enabled": true,
    "target_aspect_ratio": "16:9",
    "target_resolution": "1920x1080",
    "target_fps": 30,
    "voice_language": "tr"
  },
  "scenes": [
    {
      "scene_id": "scene-001",
      "title": "Açılış",
      "narration": "Sevgi ve korku, insan davranışlarını çoğu zaman akıldan daha fazla yönlendirir.",
      "visual_note": "Düşünceli insan yüzleri ve yavaş şehir görüntüleri kullan.",
      "keywords": ["duygu", "korku", "insan davranışı"],
      "media_hints": {
        "preferred_visual_style": "cinematic",
        "avoid": ["cartoon"]
      },
      "emphasis": "calm_but_serious"
    }
  ]
}
```

---

## Shorts Scene JSON

Shorts için ayrı bir yapı kullanılır. Her Shorts `mode: "shorts"` ve `target_aspect_ratio: "9:16"` ile gönderilir:

```json
{
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "job": {
    "title": "Hayata Bakışın Değişirse...",
    "description": "Bazen insanı yoran şey hayat değil, hayata yanlış yerden bakmasıdır.",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "shorts-bakis-001"
  },
  "render_preferences": {
    "mode": "shorts",
    "subtitles_enabled": true,
    "target_aspect_ratio": "9:16",
    "target_resolution": "1080x1920",
    "target_fps": 30,
    "voice_language": "tr"
  },
  "scenes": [
    {
      "scene_id": "scene-001",
      "narration": "Bazen insanı yoran şey hayat değil, hayata yanlış yerden bakmasıdır.",
      "visual_note": "A lonely road at sunrise, calm cinematic nature mood."
    },
    {
      "scene_id": "scene-002",
      "narration": "Bakış açısı değişince, yük aynı kalsa bile taşımak daha kolaylaşır.",
      "visual_note": "Gentle light breaking through clouds over a mountain path."
    }
  ]
}
```

---

## Alan Açıklamaları

| Alan | Tip | Zorunlu | Açıklama |
|---|---|---|---|
| `input_version` | string | Evet | Her zaman `"0.1.0"` |
| `input_type` | string | Evet | Her zaman `"manual_scene_json"` |
| `job.title` | string | Evet | Video başlığı |
| `job.description` | string | Önerilen | Kısa açıklama |
| `job.language` | string | Önerilen | `"tr"` |
| `job.author` | string | Opsiyonel | Bilgi amaçlı |
| `job.job_id_hint` | string | Opsiyonel | `kebab-case-kısa-isim` |
| `render_preferences.mode` | string | Evet | `full_video` / `shorts` / `full_and_shorts` |
| `render_preferences.subtitles_enabled` | boolean | Evet | `true` / `false` |
| `render_preferences.target_aspect_ratio` | string | Önerilen | `"16:9"` veya `"9:16"` |
| `render_preferences.target_resolution` | string | Opsiyonel | `"1920x1080"` veya `"1080x1920"` |
| `render_preferences.target_fps` | number | Opsiyonel | `30` |
| `render_preferences.voice_language` | string | Opsiyonel | `"tr"` |
| `scenes` | array | Evet | En az 1 sahne |
| `scene_id` | string | Evet | Benzersiz, format: `"scene-001"` |
| `title` | string | Önerilen | Sahne başlığı |
| `narration` | string | Evet | Türkçe anlatım metni, temiz düz metin |
| `visual_note` | string | Önerilen | İngilizce, Pexels arama yönlendirmesi |
| `keywords` | string[] | Opsiyonel | İngilizce, görsel tema anahtar kelimeleri |
| `media_hints.preferred_visual_style` | string | Opsiyonel | `"cinematic"`, `"slow_cinematic"` |
| `media_hints.avoid` | string[] | Opsiyonel | Kaçınılacak görsel stiller |
| `emphasis` | string | Opsiyonel | `"calm_but_serious"` |
| `metadata` | object | Opsiyonel | İzleme ve kaynak bilgisi |

---

## Kurallar

1. `scene_id` string olarak yazılır: `"scene-001"`, sayı değil
2. `narration` alanı kullanılır — `text` alanı kullanılmaz
3. `visual_note` korunur — n8n Pexels sorgusunda kullanır
4. JSON içine `//` yorum satırı yazılmaz — geçersiz JSON olur
5. Türkçe karakterler korunur: `ş`, `ğ`, `ü`, `ö`, `ı`, `ç`
6. Landscape ve Shorts çıktıları ayrı JSON olarak gönderilir
7. `narration` temiz düz metin olmalı — HTML tag içermemeli

---

## Geçerli `mode` Değerleri

| Değer | Açıklama |
|---|---|
| `full_video` | Sadece landscape (16:9) üretilir |
| `shorts` | Sadece shorts (9:16) üretilir |
| `full_and_shorts` | Her ikisi de üretilir |

**Derin Okuma üretim standardı — ilk aşama:**
Landscape (`full_video`) ve Shorts (`shorts`) önce **ayrı ayrı** test edilecek. `full_and_shorts` teknik olarak destekleniyor ancak her iki smoke test geçtikten sonra kullanıma alınacak.

---

## Geçerli `preferred_visual_style` Değerleri

(scene-blog-video projesinde test edilmiş olanlar)

| Değer | Açıklama |
|---|---|
| `cinematic` | Sinematik, düşündürücü görüntüler |
| `slow_cinematic` | Yavaş tempolu, içe dönük |
| *(tanımsız)* | Pipeline varsayılan sorgusunu kullanır |
