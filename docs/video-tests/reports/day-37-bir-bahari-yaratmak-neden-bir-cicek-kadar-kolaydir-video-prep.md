# Day-37 — 20. Mektup - 2. Makam - 10. Kelime Video Prep

## Amaç

Bu dosya `npm run video:prep` ile oluşturulan video üretim iskeletini ve içerik doldurma sürecini belgeler.

## Kaynak Yazı

- Başlık: `20. Mektup - 2. Makam - 10. Kelime`
- Slug: `bir-bahari-yaratmak-neden-bir-cicek-kadar-kolaydir`
- Kaynak dosya: `src/content/blog/bir-bahari-yaratmak-neden-bir-cicek-kadar-kolaydir.md`

## Oluşturulan Dosyalar

### Landscape

- `docs/video-tests/inputs/bir-bahari-yaratmak-neden-bir-cicek-kadar-kolaydir-landscape-full-video.json`
- `docs/video-tests/inputs/bir-bahari-yaratmak-neden-bir-cicek-kadar-kolaydir-landscape-load-input.js`
- `docs/video-tests/metadata/bir-bahari-yaratmak-neden-bir-cicek-kadar-kolaydir-landscape-metadata.json`

### Shorts

- `docs/video-tests/shorts/bir-bahari-yaratmak-neden-bir-cicek-kadar-kolaydir/bir-bahari-yaratmak-neden-bir-cicek-kadar-kolaydir-shorts-package.json`
- `docs/video-tests/shorts/bir-bahari-yaratmak-neden-bir-cicek-kadar-kolaydir/metadata/bir-bahari-yaratmak-neden-bir-cicek-kadar-kolaydir-shorts-metadata.json`
- `docs/video-tests/shorts/bir-bahari-yaratmak-neden-bir-cicek-kadar-kolaydir/load-inputs/short-001-load-input.js`
- `docs/video-tests/shorts/bir-bahari-yaratmak-neden-bir-cicek-kadar-kolaydir/load-inputs/short-002-load-input.js`
- `docs/video-tests/shorts/bir-bahari-yaratmak-neden-bir-cicek-kadar-kolaydir/load-inputs/short-003-load-input.js`
- `docs/video-tests/shorts/bir-bahari-yaratmak-neden-bir-cicek-kadar-kolaydir/load-inputs/short-004-load-input.js`
- `docs/video-tests/shorts/bir-bahari-yaratmak-neden-bir-cicek-kadar-kolaydir/load-inputs/short-005-load-input.js`
- `docs/video-tests/shorts/bir-bahari-yaratmak-neden-bir-cicek-kadar-kolaydir/load-inputs/short-006-load-input.js`

### Claude Prompt

- `docs/video-tests/prompts/bir-bahari-yaratmak-neden-bir-cicek-kadar-kolaydir-fill-video-package-prompt.md`

## İçerik Durumu

- Scaffold oluşturuldu ✓
- Gerçek narration dolduruldu ✓ (Claude ile)
- Landscape: 35 sahne, `content_generation_status: ready`
- Shorts: 6 adet, toplamda 19 sahne, `content_generation_status: ready`
- JSON parse: 4/4 geçti ✓
- JS syntax: 7/7 geçti ✓
- Yasaklı kalıp kontrolü: TEMİZ ✓

## Landscape Özeti

| Alan | Değer |
|---|---|
| Sahne sayısı | 35 |
| Seçilen başlık | Bir Baharı Yaratmak Neden Bir Çiçek Kadar Kolaydır? |
| Playlist | Risale-i Nur Okumaları |
| mode | full_video |
| render_mode | landscape |
| audio_strategy | single_track / elevenlabs_timestamps |

## Shorts Özeti

| Short ID | Başlık | Sahne |
|---|---|---|
| short-001 | İnsan Neden Büyüğü Zor Sanır? | 3 |
| short-002 | Bir Çiçek mi Zor, Bir Bahar mı? | 3 |
| short-003 | Birlik Çokluğu Nasıl Kolaylaştırır? | 3 |
| short-004 | Bir Ağaç Bin Meyveyi Neden Yorulmadan Verir? | 3 |
| short-005 | Güneş Neden Milyonlarca Yüzeyde Aynıdır? | 3 |
| short-006 | Haşir Neden Mümkündür? | 4 |

## n8n'e Gönderilecek Dosyalar

Landscape için:
```
docs/video-tests/inputs/bir-bahari-yaratmak-neden-bir-cicek-kadar-kolaydir-landscape-load-input.js
```

Her Shorts için:
```
docs/video-tests/shorts/bir-bahari-yaratmak-neden-bir-cicek-kadar-kolaydir/load-inputs/short-XXX-load-input.js
```

## Sonraki Adım

1. Landscape Load Input JS'i n8n pipeline'a ver
2. Smoke test: ilk 3–5 sahneyle render test et
3. Shorts için sırayla short-001'den başla
