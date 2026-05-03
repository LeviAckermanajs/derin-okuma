# Day-07 — Single Track Landscape Smoke Test Kapatma

**Tarih:** 2026-05-04
**Durum:** Tamamlandı

---

## Bugünün Amacı

Day-06'da oluşturulan Load Input JS dosyasının n8n smoke test sonucunu Derin Okuma reposu açısından raporlayıp standardı kapatmak.

---

## Test Edilen Dosya

`docs/video-tests/inputs/sevgi-ve-korku-landscape-load-input.js`

37 sahne, `audio_strategy.single_track`, `timing_strategy: elevenlabs_timestamps`, `render_mode: landscape`.

---

## Başarılı Sonuçlar

- Load Input JS formatı n8n Code node'a yapıştırıldı, kabul edildi
- `raw_input` wrapper doğru çalıştı
- ElevenLabs tek istek (single_track) olarak çalıştı
- TTS tonu tüm video boyunca tutarlıydı
- Timestamp timing doğruydu
- Video output oluştu
- Day-05'teki sahne sahne TTS'e kıyasla ses kalitesi farkı açıkça görüldü

---

## Kapsam Dışı Gözlemler

Test sırasında iki konu gözlendi:

1. n8n `Send to Renderer` node'unda timeout davranışı
2. Uzun videoda Pexels görsel çeşitliliğinin az olması

Bu iki konu `scene-blog-video` / n8n pipeline tarafının konusudur. Bu repoda ele alınmayacak; backlog'a detaylı teknik görev olarak eklenmedi.

---

## Alınan Karar

Derin Okuma tarafındaki landscape Load Input JS standardı başarılı kabul edildi.

Bundan sonra:
- Landscape testlerinde `docs/video-tests/inputs/sevgi-ve-korku-landscape-load-input.js` referans örnek alınacak
- Çıplak JSON (`sevgi-ve-korku-landscape-full-video.json`) yalnızca içerik referansı olarak kalacak
- n8n'e aktif gönderim Load Input Code node JS formatıyla yapılacak

---

## Derin Okuma Tarafında Sıradaki Seçenekler

1. Shorts üretim testine geçmek — `Sevgi ve Korku`'dan 5–6 Shorts paketi
2. YouTube başlık/açıklama prompt şablonu oluşturmak
3. Blog frontmatter'a video takip alanları (`video_status` vb.) eklemeyi değerlendirmek
4. Mevcut 15 yazının frontmatter ve video uygunluk audit'i
5. Prompt şablonlarını test sonucuna göre iyileştirmek

---

## Sonraki Gün Önerisi (Day-08)

**Day-08 için öneri:** Shorts üretim testine geçmek veya önce YouTube başlık/açıklama şablonunu oluşturmak.
