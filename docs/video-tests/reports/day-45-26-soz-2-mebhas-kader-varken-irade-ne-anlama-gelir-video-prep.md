# Day-45 — 26.Söz - 2.Makam Video Paketi

## Amaç

Bu dosya `npm run video:prep` ile oluşturulan iskeletin gerçek içerikle doldurulmasını ve doğrulama sonucunu belgeler.

## Kaynak Yazı

- Başlık: `26.Söz - 2.Makam`
- Slug: `26-soz-2-mebhas-kader-varken-irade-ne-anlama-gelir`
- Kaynak dosya: `src/content/blog/26-soz-2-mebhas-kader-varken-irade-ne-anlama-gelir.md`

## Oluşturulan Dosyalar

### Landscape

- `docs/video-tests/inputs/26-soz-2-mebhas-kader-varken-irade-ne-anlama-gelir-landscape-full-video.json`
- `docs/video-tests/inputs/26-soz-2-mebhas-kader-varken-irade-ne-anlama-gelir-landscape-load-input.js`
- `docs/video-tests/metadata/26-soz-2-mebhas-kader-varken-irade-ne-anlama-gelir-landscape-metadata.json`

### Shorts

- `docs/video-tests/shorts/26-soz-2-mebhas-kader-varken-irade-ne-anlama-gelir/26-soz-2-mebhas-kader-varken-irade-ne-anlama-gelir-shorts-package.json`
- `docs/video-tests/shorts/26-soz-2-mebhas-kader-varken-irade-ne-anlama-gelir/metadata/26-soz-2-mebhas-kader-varken-irade-ne-anlama-gelir-shorts-metadata.json`
- `docs/video-tests/shorts/26-soz-2-mebhas-kader-varken-irade-ne-anlama-gelir/load-inputs/short-001-load-input.js`
- `docs/video-tests/shorts/26-soz-2-mebhas-kader-varken-irade-ne-anlama-gelir/load-inputs/short-002-load-input.js`
- `docs/video-tests/shorts/26-soz-2-mebhas-kader-varken-irade-ne-anlama-gelir/load-inputs/short-003-load-input.js`
- `docs/video-tests/shorts/26-soz-2-mebhas-kader-varken-irade-ne-anlama-gelir/load-inputs/short-004-load-input.js`
- `docs/video-tests/shorts/26-soz-2-mebhas-kader-varken-irade-ne-anlama-gelir/load-inputs/short-005-load-input.js`
- `docs/video-tests/shorts/26-soz-2-mebhas-kader-varken-irade-ne-anlama-gelir/load-inputs/short-006-load-input.js`

### Claude Prompt

- `docs/video-tests/prompts/26-soz-2-mebhas-kader-varken-irade-ne-anlama-gelir-fill-video-package-prompt.md`

## Üretim Özeti

- Landscape narration: 36 sahne
- Shorts: 6 adet, her biri 3 sahne
- Landscape ve Shorts metadata: dolduruldu
- Tüm `content_generation_status` alanları: `filled`
- Landscape `mode`: `full_video`
- Shorts `mode`: `shorts`
- Audio stratejisi: `single_track` + `elevenlabs_timestamps`

## Doğrulama

- `npm run video:validate -- --slug 26-soz-2-mebhas-kader-varken-irade-ne-anlama-gelir --report`: PASS
- JSON parse: 4/4 başarılı
- JS syntax: 7/7 başarılı
- Package / metadata / Load Input çapraz tutarlılığı: başarılı
- Yasaklı kalıp taraması: 0 eşleşme

Detaylı sonuç:

`docs/video-tests/reports/26-soz-2-mebhas-kader-varken-irade-ne-anlama-gelir-validation-result.md`

## Sonraki Adım

İlk n8n smoke test için landscape Load Input JS dosyası kullanılabilir:

`docs/video-tests/inputs/26-soz-2-mebhas-kader-varken-irade-ne-anlama-gelir-landscape-load-input.js`
