# Day-15 — 23. Söz 1. Mebhas 4. Nokta Landscape Smoke Test Sonucu

## Test Edilen Input

| Alan | Değer |
|---|---|
| Dosya | `docs/video-tests/inputs/23-soz-1-mebhas-4-nokta-landscape-load-input.js` |
| İçerik | `23. Söz - 1. Mebhas - 4. Nokta` |
| Mode | `full_video` |
| Render mode | `landscape` |
| Produce both | `false` |
| Audio strategy | `single_track` |
| Timing strategy | `elevenlabs_timestamps` |
| Scene count | 33 |

## Test Amacı

Bu testin amacı:

- Day-11’de hazırlanan landscape Load Input JS dosyasının n8n tarafından kabul edilip edilmediğini görmek
- 16:9 landscape video üretimini doğrulamak
- `single_track` TTS akışının uzun video için çalıştığını doğrulamak
- Output dosyasının oluşup oluşmadığını kontrol etmek
- Video yayın sürecine geçmeden önce temel üretim akışını kapatmak

## Test Sonucu

| Kontrol | Sonuç | Not |
|---|---|---|
| n8n input kabulü | Başarılı | Load Input JS kabul edildi |
| Landscape render | Başarılı | Video oluştu |
| TTS single_track | Başarılı | Tek track akış çalıştı |
| Output dosyası | Başarılı | Çıktı oluştu |
| Hata | Yok | Ciddi sorun görülmedi |

**Output yolu:** sonradan eklenecek

## Başarılı Noktalar

- Landscape Load Input JS n8n tarafından kabul edildi
- `raw_input` wrapper doğru çalıştı
- `audio_strategy.single_track` uzun video için çalıştı
- Landscape video output oluştu
- Hata alınmadı
- `23-soz-1-mebhas-4-nokta` için hem Shorts hem landscape üretim akışı başarılı biçimde doğrulandı

## YouTube Metadata Son Kontrol Notu

Day-14’te YouTube başlık standardına soru/merak odaklı başlık kuralı eklendi.

Bu landscape video için mevcut metadata ayrıca yayın öncesi kontrol edilmeli:

- Başlık soru/merak yapısı taşıyor mu?
- Açıklama doğrudan YouTube’a yapıştırılabilir mi?
- Hashtag bloğu `hashtags` array ile aynı mı?
- Thumbnail metni okunabilir ve kısa mı?
- Playlist doğru mu?

Mevcut metadata dosyasında seçili başlık soru/merak yapısı taşıyor: `Muhtaçlık Bir Yük Mü, Kanat Mı?` Bu görevde metadata değiştirilmedi. Daha iyi bir “neden / nasıl / ne olur” başlığı gerekiyorsa Day-16’da yayın öncesi metadata final düzenlemesi yapılabilir.

## Karar

- `23-soz-1-mebhas-4-nokta` landscape smoke test başarılı kabul edildi.
- Bu içerik için Shorts tarafı Day-13’te, landscape tarafı Day-15’te doğrulandı.
- Derin Okuma tarafında bu içerik video üretim açısından tamamlanmış sayılabilir.
- Sıradaki adım YouTube landscape yayın öncesi metadata ve thumbnail son kontrolüdür.

## Sonraki Adım

- Landscape video için YouTube yayın öncesi son kontrol
- Metadata / title / description / thumbnail metni son kontrolü
- Uygunsa landscape videoyu YouTube’da yayınlamak
- Sonrasında performansı 24–48 saat izlemek
