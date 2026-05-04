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

## n8n'e Gönderim Yöntemi — Load Input Code Node

n8n'de input pratikte **JavaScript Code node** aracılığıyla verilir. `manual_scene_json` pipeline'ın iç formatıdır; n8n Load Input node'u bu formatı `raw_input` wrapper içinde bekler.

### Load Input JS formatı

```js
const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  job: { ... },
  audio_strategy: { ... },
  render_preferences: { ... },
  scenes: [...]
};

return [{ json: { raw_input: rawInput } }];
```

Bu dosya geçerli JSON değil, n8n Code node JavaScript'idir. Doğrudan n8n "Load Input" node'una yapıştırılır.

### Landscape için TTS stratejisi — `single_track`

Uzun landscape videolarda (30+ sahne) TTS için önerilen strateji:

```js
audio_strategy: {
  mode: 'single_track',
  timing_strategy: 'elevenlabs_timestamps',
  join_separator: '\n\n'
}
```

- `mode: 'single_track'` — tüm sahnelerin narration'ı birleştirilip ElevenLabs'e tek istek olarak gönderilir
- `timing_strategy: 'elevenlabs_timestamps'` — ElevenLabs word-level timestamp çıktısıyla sahne senkronizasyonu yapılır
- `join_separator: '\n\n'` — sahneler arası doğal nefes boşluğu

Sahne sahne TTS yerine bu strateji daha tutarlı ses kalitesi ve doğal geçişler sağlar.

### Landscape render tercihleri

```js
render_preferences: {
  mode: 'full_video',
  subtitles_enabled: true,
  render_mode: 'landscape',
  produce_both: false,
  background_music_enabled: true,
  target_fps: 30
}
```

**Geçerli `mode` değerleri:**
- `full_video` — sadece landscape
- `shorts` — sadece shorts
- `full_and_shorts` — ikisi birden

**İlk smoke test standardı:** Landscape (`full_video`) ve Shorts (`shorts`) önce ayrı ayrı test edilecek. `full_and_shorts` her iki mod çalışır hâle geldikten sonra kullanılacak.

**Önemli teknik kurallar:**
- `narration` alanı kullanılacak, `text` alanı değil
- `visual_note` İngilizce — Pexels arama sorgusunda kullanılır
- `scene_id` string olarak tutulacak, format: `"scene-001"`
- Türkçe karakterler (`ş`, `ğ`, `ü`, `ö`, `ı`, `ç`) korunmalı
- Landscape ve Shorts çıktıları ayrı job olarak gönderilir

**Day-06'dan itibaren:** Landscape smoke testlerde Load Input JS formatı (`sevgi-ve-korku-landscape-load-input.js` örneği) kullanılacak. Çıplak JSON formatı referans olarak korunmakta, aktif gönderim Load Input JS ile yapılmaktadır.

---

## scene-blog-video Pipeline Özeti

Pipeline katmanları (read-only referans, `~/projects/scene-blog-video`):

| Katman | Araç | Sorumluluk |
|---|---|---|
| Orchestration | n8n | Input alma, doğrulama, normalizasyon, TTS, Pexels, manifest yazımı |
| Rendering | Python | Manifest okuma, ses/video birleştirme, çıktı üretimi |
| Depolama | Dosya sistemi | `output/jobs/<job_id>/` altında job klasörü |

---

## YouTube Metadata Aşaması

Blog yazısı, narration veya scene JSON üretildikten sonra yayın için metadata hazırlanır.

Metadata üretim adımları:

- Landscape başlık (5–8 alternatif, en iyisi seçilir)
- Landscape açıklama (2–4 paragraf, YouTube'a doğrudan yapıştırılabilir)
- Hashtagler (sabit çekirdek + konuya uygun)
- Playlist / klasör önerisi
- Thumbnail kısa metni (2–5 kelime)
- Shorts başlık / açıklama / hashtag (her Shorts için ayrı)

Referans: `docs/prompts/youtube-metadata.md`

---

## Shorts n8n Gönderim Notu

- İlk Shorts smoke test `short-001-load-input.js` ile başarıyla tamamlandı (Day-10)
- Shorts için aktif n8n gönderim formatı Load Input JS'dir
- Her Shorts ayrı job olarak gönderilir — package JSON doğrudan n8n'e verilmez
- Package JSON (`sevgi-ve-korku-shorts-package.json`) master içerik / arşiv dosyasıdır
- n8n'e her Shorts için ayrı `short-XXX-load-input.js` dosyası yapıştırılır

## 23. Söz Shorts Test Notu

- `short-001` Day-12'de başarılı oldu
- `short-002` → `short-006` Day-13'te başarılı oldu
- 6 Shorts'un tamamı YouTube'da paylaşıldı
- Bu içerik üzerinde Shorts Load Input JS standardı tam paket olarak doğrulandı
- Package JSON master arşiv, Load Input JS dosyaları ise gerçek n8n gönderim formatıdır

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
