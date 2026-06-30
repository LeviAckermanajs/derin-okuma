# Day-46 — 26.Söz - 3.Mebhas Video Paketi

## Amaç

Bu dosya `npm run video:prep` ile oluşturulan iskeletin gerçek içerikle doldurulmasını ve doğrulama sonucunu belgeler.

## Kaynak Yazı

- Başlık: `26.Söz - 3.Mebhas`
- Slug: `26-soz-3-mebhas-her-sey-yaziliysa-insan-neden-rahatlar`
- Kaynak dosya: `src/content/blog/26-soz-3-mebhas-her-sey-yaziliysa-insan-neden-rahatlar.md`

## Doldurulan Dosyalar

### Landscape

- `docs/video-tests/inputs/26-soz-3-mebhas-her-sey-yaziliysa-insan-neden-rahatlar-landscape-full-video.json`
- `docs/video-tests/inputs/26-soz-3-mebhas-her-sey-yaziliysa-insan-neden-rahatlar-landscape-load-input.js`
- `docs/video-tests/metadata/26-soz-3-mebhas-her-sey-yaziliysa-insan-neden-rahatlar-landscape-metadata.json`

### Shorts

- `docs/video-tests/shorts/26-soz-3-mebhas-her-sey-yaziliysa-insan-neden-rahatlar/26-soz-3-mebhas-her-sey-yaziliysa-insan-neden-rahatlar-shorts-package.json`
- `docs/video-tests/shorts/26-soz-3-mebhas-her-sey-yaziliysa-insan-neden-rahatlar/metadata/26-soz-3-mebhas-her-sey-yaziliysa-insan-neden-rahatlar-shorts-metadata.json`
- `docs/video-tests/shorts/26-soz-3-mebhas-her-sey-yaziliysa-insan-neden-rahatlar/load-inputs/short-001-load-input.js`
- `docs/video-tests/shorts/26-soz-3-mebhas-her-sey-yaziliysa-insan-neden-rahatlar/load-inputs/short-002-load-input.js`
- `docs/video-tests/shorts/26-soz-3-mebhas-her-sey-yaziliysa-insan-neden-rahatlar/load-inputs/short-003-load-input.js`
- `docs/video-tests/shorts/26-soz-3-mebhas-her-sey-yaziliysa-insan-neden-rahatlar/load-inputs/short-004-load-input.js`
- `docs/video-tests/shorts/26-soz-3-mebhas-her-sey-yaziliysa-insan-neden-rahatlar/load-inputs/short-005-load-input.js`
- `docs/video-tests/shorts/26-soz-3-mebhas-her-sey-yaziliysa-insan-neden-rahatlar/load-inputs/short-006-load-input.js`

## Üretim Özeti

- Landscape narration: 36 sahne
- Shorts: 6 adet, her biri 3 sahne
- Landscape ve Shorts metadata: dolduruldu
- Tüm `content_generation_status` alanları: `filled`
- Landscape `mode`: `full_video`
- Landscape `render_mode`: `landscape`
- Shorts `mode`: `shorts`
- Shorts `render_mode`: `shorts`
- Audio stratejisi: `single_track` + `elevenlabs_timestamps`
- Package, metadata ve Load Input içerikleri: birbiriyle eşleşiyor

## Doğrulama

- `npm run video:validate -- --slug 26-soz-3-mebhas-her-sey-yaziliysa-insan-neden-rahatlar --report`: PASS
- JSON parse: 4/4 başarılı
- JS syntax: 7/7 başarılı
- Package / metadata / Load Input çapraz tutarlılığı: başarılı
- Yasaklı kalıp taraması: 0 eşleşme

Detaylı sonuç:

`docs/video-tests/reports/26-soz-3-mebhas-her-sey-yaziliysa-insan-neden-rahatlar-validation-result.md`

## Sonraki Adım

İlk n8n smoke test için landscape Load Input JS dosyası kullanılabilir:

`docs/video-tests/inputs/26-soz-3-mebhas-her-sey-yaziliysa-insan-neden-rahatlar-landscape-load-input.js`

