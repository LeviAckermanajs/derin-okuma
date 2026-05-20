# Day-28 — 21. Söz - 1. Makam Video Prep

## Kaynak Yazı

- Başlık: `21. Söz - 1. Makam`
- Slug: `21-soz-1-makam`
- Kaynak dosya: `src/content/blog/21-soz-1-makam.md`
- Konu: Namaz neden ağır gelir? Nefsin beş büyük aldanışı.

## Doldurulan Dosyalar

### Landscape

- `docs/video-tests/inputs/21-soz-1-makam-landscape-full-video.json` — 40 sahne
- `docs/video-tests/inputs/21-soz-1-makam-landscape-load-input.js` — n8n'e verilecek dosya
- `docs/video-tests/metadata/21-soz-1-makam-landscape-metadata.json` — YouTube metadata

### Shorts

- `docs/video-tests/shorts/21-soz-1-makam/21-soz-1-makam-shorts-package.json` — 6 Shorts
- `docs/video-tests/shorts/21-soz-1-makam/metadata/21-soz-1-makam-shorts-metadata.json`
- `docs/video-tests/shorts/21-soz-1-makam/load-inputs/short-001-load-input.js` — Ebediyet vehmi (3 sahne)
- `docs/video-tests/shorts/21-soz-1-makam/load-inputs/short-002-load-input.js` — Tekrar ve ihtiyaç (3 sahne)
- `docs/video-tests/shorts/21-soz-1-makam/load-inputs/short-003-load-input.js` — Sabır ve zaman (4 sahne)
- `docs/video-tests/shorts/21-soz-1-makam/load-inputs/short-004-load-input.js` — İbadetin neticesi (3 sahne)
- `docs/video-tests/shorts/21-soz-1-makam/load-inputs/short-005-load-input.js` — Dünya meşgalesi (3 sahne)
- `docs/video-tests/shorts/21-soz-1-makam/load-inputs/short-006-load-input.js` — Kusurlu namaz (3 sahne)

## İçerik Yapısı

### Landscape — 40 sahne

| Bölüm | Sahneler | Konu |
|---|---|---|
| Açılış | 1–6 | Genel çerçeve, namaz ve vakit |
| Birinci İkaz | 7–11 | Ebediyet vehmi |
| İkinci İkaz | 12–17 | Tekrar anlamsızlık değil, ihtiyaç |
| Üçüncü İkaz | 18–21 | Sabır ve zaman yönetimi |
| Dördüncü İkaz | 22–25 | İbadetin görünmez neticesi |
| Beşinci İkaz | 26–30 | Dünya meşgalesi bahanesi |
| İki maden | 31–32 | Emek ve niyet |
| Kapanış | 33–40 | Gerçek ömür, her yeni gün, kusurlu namaz |

### Shorts — 6 adet

| Short | Başlık | Odak |
|---|---|---|
| short-001 | Namaz Neden Ağır Gelir? Asıl Sebep Bu | Birinci İkaz: ebediyet vehmi |
| short-002 | Namaz Neden Her Gün Kılınır? | İkinci İkaz: tekrar ihtiyacın işareti |
| short-003 | Sabrını Nerede Harcıyorsun? | Üçüncü İkaz: sabır ve bugün |
| short-004 | İbadetin Karşılığı Neden Görünmüyor? | Dördüncü İkaz: ebedî netice |
| short-005 | Dünya İşleri Çok mu, Yoksa Öncelikler mi Kayboldu? | Beşinci İkaz: tali meşguliyetler |
| short-006 | Kusurlu Namaz Bırakılır mı? | Hurma çekirdeği misali |

## Doğrulama Sonuçları

- JSON parse: 4/4 dosya OK
- JS syntax: 7/7 dosya OK (landscape + 6 shorts)
- Yasaklı kalıp: Bulunamadı — TEMIZ

## n8n'e İlk Verilecek Dosya

```
docs/video-tests/inputs/21-soz-1-makam-landscape-load-input.js
```

Ardından sırasıyla short-001 ile short-006.

## Seçilen Başlık

**Landscape:** Namaz Neden Ağır Gelir? Nefsin Beş Büyük Aldanışı

## Durum

- Scaffold oluşturuldu: day-28
- İçerik dolduruldu: day-28
- n8n testi: bekliyor
