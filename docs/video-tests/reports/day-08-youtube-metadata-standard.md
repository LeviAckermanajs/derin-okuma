# Day-08 YouTube Metadata Standardı

**Tarih:** 2026-05-04
**Durum:** Tamamlandı

---

## Amaç

Derin Okuma videoları için YouTube yayın metadata standardı oluşturmak:
- Landscape uzun video başlık, açıklama, hashtag, playlist, thumbnail metni
- Shorts başlık, açıklama, hashtag, kapak metni
- Her iki format için kopyala-yapıştır prompt şablonları
- Hashtag çekirdek standardı
- Playlist/klasör başlığı standardı

---

## Neden Gerekli?

- Day-07 ile landscape single-track Load Input JS standardı doğrulandı; bir sonraki doğal adım yayın aşamasıdır
- Landscape ve Shorts üretimleri artacak; her seferinde sıfırdan başlık/açıklama düşünmek hem zaman kaybettirir hem tutarsızlık yaratır
- YouTube'da kanal kimliği için tutarlı dil gerekiyor
- Manevî içeriğin clickbait'e düşmesi riski gerçek; standart bu riski önler
- Shorts üretimine geçmeden önce metadata standardının hazır olması gerekiyordu

---

## Oluşturulan Şablonlar

| Şablon | Açıklama |
|---|---|
| Landscape metadata promptu | Blog yazısı / narration → landscape yayın bilgileri (JSON) |
| Shorts metadata promptu | Shorts narration paketi → her Shorts için yayın bilgileri (JSON) |
| Hashtag standardı | Sabit çekirdek hashtagler + konuya göre değişenler |
| Playlist/klasör standardı | Derin Okuma içerikleri için playlist başlığı önerileri |
| Thumbnail metni standardı | 2–5 kelime kısa metin kuralları ve örnekleri |

---

## Alınan Kararlar

| Karar | Açıklama |
|---|---|
| Metadata dili | Sakin, derin, vurucu ama clickbait olmayan çizgide tutulacak |
| Çıktı formatı | JSON — doğrudan YouTube Studio'ya kopyalanabilir şekilde |
| Landscape ve Shorts promptları | Ayrı tutuldu; ihtiyaçlar ve kural setleri farklı |
| Sabit hashtagler | `#derinokuma`, `#tefekkür`, `#iman`, `#risaleinur`, `#maneviyat` landscape için; `#derinokuma`, `#shorts` Shorts için |
| Referans dosya | `docs/prompts/youtube-metadata.md` tek referans kabul edildi |

---

## Kapsam Dışında Tutulanlar

Bu günde gerçek video için metadata üretimi yapılmadı; sadece standart ve şablonlar oluşturuldu.  
Gerçek metadata üretim testi Day-09'da yapılabilir.

---

## Sonraki Adım

- **Day-09 önerisi:** `Sevgi ve Korku` landscape videosu için gerçek YouTube metadata üretim testi — landscape metadata promptunu kullanarak başlık, açıklama, hashtag, playlist ve thumbnail metni üret
- **Alternatif:** Shorts üretim testine geçmek — `Sevgi ve Korku`'dan 5–6 Shorts paketi çıkarma
