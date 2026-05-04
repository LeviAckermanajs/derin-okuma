# Day-08 — YouTube Metadata Standardı

**Tarih:** 2026-05-04
**Durum:** Tamamlandı

---

## Bugünün Amacı

Day-07'de landscape single-track Load Input JS standardı doğrulandı. Bu günün amacı, bir sonraki üretim aşaması olan YouTube yayını için metadata standartlarını ve kopyala-yapıştır prompt şablonlarını oluşturmak.

---

## Önceki Durum

- Day-07: `sevgi-ve-korku-landscape-load-input.js` n8n'e gönderildi, video üretildi, single-track standardı başarılı kabul edildi
- Landscape Load Input JS formatı artık Derin Okuma standardı olarak resmileşti
- Bir sonraki açık adımlar: Shorts üretimi veya YouTube metadata standardı

---

## Yapılanlar

1. Mevcut dokümantasyon incelendi:
   - `docs/content-guide.md`
   - `docs/video-workflow.md`
   - `docs/prompts/landscape-narration.md`
   - `docs/prompts/shorts-narration.md`
   - `docs/video-tests/reports/day-07-single-track-smoke-result.md`
   - `docs/backlog.md`

2. YouTube metadata standardı ve prompt şablonları oluşturuldu

3. Backlog güncellendi

4. `docs/video-workflow.md` güncellendi

---

## Oluşturulan / Güncellenen Dosyalar

| Dosya | İşlem |
|---|---|
| `docs/prompts/youtube-metadata.md` | Yeni oluşturuldu — ana standart ve prompt şablonları |
| `docs/video-tests/reports/day-08-youtube-metadata-standard.md` | Yeni oluşturuldu — günlük rapor |
| `docs/notes/daily/day-08.md` | Bu dosya |
| `docs/backlog.md` | Güncellendi |
| `docs/video-workflow.md` | YouTube Metadata Aşaması bölümü eklendi |

---

## Alınan Kararlar

- Derin Okuma YouTube metadata dili sakin, derin, vurucu ama clickbait olmayan çizgide tutulacak
- Landscape ve Shorts metadata promptları ayrı kullanılacak — ihtiyaçlar farklı
- Metadata çıktıları JSON formatında alınacak
- `docs/prompts/youtube-metadata.md` referans dosya kabul edildi
- Sabit çekirdek hashtagler: `#derinokuma`, `#tefekkür`, `#iman`, `#risaleinur`, `#maneviyat`

---

## Açık Sorular

- Shorts üretimine mi geçsek, yoksa önce `Sevgi ve Korku` landscape için gerçek metadata testi mi?
- Thumbnail metni üretimini de aynı prompt içine mi alalım yoksa ayrı adım olarak mı bıraksalım?
- Pinned comment şablonu standart mı olsun, yoksa her video için ayrı mı üretilsin?

---

## Sonraki Gün Önerisi

**Day-09 seçenek 1 (öncelikli):**
`Sevgi ve Korku` landscape videosu için gerçek YouTube metadata üretim testi — `docs/prompts/youtube-metadata.md` içindeki landscape promptunu kullan, gerçek JSON çıktısı al.

**Day-09 seçenek 2 (alternatif):**
`Sevgi ve Korku`'dan 5–6 Shorts paketi çıkarma — `docs/prompts/shorts-narration.md` şablonuyla Shorts narration + Shorts metadata üretimi.
