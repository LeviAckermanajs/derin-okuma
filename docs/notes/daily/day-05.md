# Day-05 — Sevgi ve Korku Landscape Narration Smoke Test Hazırlığı

**Tarih:** 2026-05-03
**Durum:** Input hazır, n8n'e gönderim bekleniyor

---

## Bugünün Amacı

`Sevgi ve Korku` blog yazısını landscape narration standartlarına göre 37 sahneye dönüştürüp `manual_scene_json` formatında geçerli bir n8n input dosyası üretmek. JSON formatını ve Astro build'i doğrulamak.

---

## Kullanılan Kaynak Yazı

- **Dosya:** `src/content/blog/Sevgi-ve-Korku.md`
- **Konu:** 24. Söz - 5. Dal - 1. Meyve — İnsanın kalbindeki sevgi ve korku kapasitesi
- **Uzunluk:** 27 bölümlü kapsamlı metin analizi
- **Yazı dili:** Türkçe

---

## Oluşturulan Dosyalar

| Dosya | Açıklama |
|---|---|
| `docs/video-tests/inputs/sevgi-ve-korku-landscape-full-video.json` | n8n'e verilecek 37 sahnelik landscape input |
| `docs/video-tests/reports/day-05-sevgi-ve-korku-landscape.md` | Smoke test hazırlık raporu |
| `docs/notes/daily/day-05.md` | Bu dosya |

---

## JSON Format Doğrulama Sonucu

Python ile `json.tool` parse kontrolü yapıldı.

| Kontrol | Sonuç |
|---|---|
| JSON sözdizimi | Geçerli |
| `input_type` | `manual_scene_json` |
| `mode` | `full_video` |
| `target_aspect_ratio` | `16:9` |
| `target_resolution` | `1920x1080` |
| `voice_language` | `tr` |
| Sahne sayısı | 37 (30–40 aralığında) |
| Zorunlu alan eksikliği | YOK |
| `text` alanı kullanımı | YOK |
| `scene_id` string formatı | Tüm sahnelerde doğru |
| Türkçe karakter | Korunmuş |

---

## Build Sonucu

`npm run build` hatasız tamamlandı — 18 sayfa, 2.83 saniye. `docs/video-tests/` dosyaları Astro build'ini etkilemiyor.

---

## n8n'e Gönderme Durumu

Input dosyası hazır. Kullanıcı `docs/video-tests/inputs/sevgi-ve-korku-landscape-full-video.json` içeriğini `scene-blog-video` n8n workflow'una manuel olarak girecek.

---

## Açık Sorular (smoke test sonrası netleşecek)

1. n8n validation hatası verecek mi?
2. Türkçe TTS kalitesi yeterli mi?
3. Pexels nature/ambient arama sonuçları uygun mu?
4. 37 sahne için Pexels video bulunuyor mu?
5. Subtitle timing doğru mu?
6. Render süresi ne kadar?

---

## Sonraki Gün Önerisi (Day-06)

**Öncelik 1:** n8n smoke test sonucunu raporla — başarı veya hata, her iki durumda da belge

**Öncelik 2:** Pexels görsel kalitesi değerlendir; gerekirse `visual_note` yazım stilini güncelle

**Öncelik 3:** Eğer ilk test başarılıysa Shorts aşamasına geç
