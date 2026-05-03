# Day-07 Single Track Smoke Test Sonucu

**Tarih:** 2026-05-04
**Durum:** Başarılı — Derin Okuma tarafı tamamlandı

---

## Test Edilen Input

| Alan | Değer |
|---|---|
| Dosya | `docs/video-tests/inputs/sevgi-ve-korku-landscape-load-input.js` |
| Mode | `full_video` |
| Render mode | `landscape` |
| Audio strategy | `single_track` |
| Timing strategy | `elevenlabs_timestamps` |
| Scene count | 37 |
| Job ID hint | `sevgi-ve-korku-landscape-day-06-single-track` |

---

## Derin Okuma Açısından Başarılı Sonuçlar

- Load Input JS formatı n8n tarafından kabul edildi
- `raw_input` wrapper doğru çalıştı
- `audio_strategy.single_track` aktif çalıştı
- ElevenLabs tek istek olarak çalıştı
- TTS tonu video boyunca tutarlıydı
- Timestamp timing doğruydu
- Video output oluştu
- Sahne sahne TTS'e kıyasla ses kalitesi farkı barizdi

---

## Kapsam Dışı Gözlemler

Test sırasında iki konu gözlendi; ancak bunlar `scene-blog-video` / n8n pipeline tarafının konusudur, bu repoda ele alınmayacak:

1. n8n `Send to Renderer` node'unda timeout davranışı
2. Uzun videoda Pexels görsel çeşitliliğinin az olması

Bu iki konu `scene-blog-video` tarafında ayrı çalışma olarak ele alınacak.

---

## Karar

- Derin Okuma tarafındaki landscape Load Input JS standardı **başarılı kabul edildi.**
- `docs/video-tests/inputs/sevgi-ve-korku-landscape-load-input.js` bundan sonraki landscape testleri için referans örnek olarak kabul edildi.
- Çıplak JSON formatı (`sevgi-ve-korku-landscape-full-video.json`) yalnızca içerik/scene referansı olarak kalacak; aktif n8n gönderimi Load Input Code node JS formatıyla yapılacak.

---

## Sonraki Derin Okuma Aksiyonları

Öncelik sırasına göre seçenekler:

1. **Shorts üretim testine geçmek**
   - `Sevgi ve Korku` yazısından 5–6 Shorts paketi üretmek
   - Her Shorts için `mode: "shorts"`, `render_mode: "shorts"` Load Input JS oluşturmak

2. **YouTube başlık/açıklama şablonu oluşturmak**
   - Landscape video için başlık, açıklama, hashtag standardı
   - Shorts için ayrı başlık/açıklama standardı

3. **Blog frontmatter'a video takip alanları eklemeyi değerlendirmek**
   - `video_status`, `landscape_video_status`, `shorts_status`, `last_video_tested_at`

4. **İçerik metadata standardını netleştirmek**
   - Mevcut 15 yazının frontmatter analizi
   - Kategori, seri, kaynak, video üretim durumu alanları

5. **Prompt şablonlarını test sonucuna göre iyileştirmek**
   - Landscape narration promptu
   - Shorts narration promptu
   - Scene JSON format standardı
