# Day-41 — 22. Mektup - 2. Mebhas Video Paketi

## Amaç

Bu dosya, `npm run video:prep` ile oluşturulan iskeletin gerçek içerikle doldurulmasını ve doğrulanmasını belgeler.

## Kaynak Yazı

- Başlık: `22. Mektup - 2. Mebhas`
- Slug: `22-mektup-2-mebhas-hirs-kanaat-ve-zekat`
- Kaynak dosya: `src/content/blog/22-mektup-2-mebhas-hirs-kanaat-ve-zekat.md`

## Oluşturulan Dosyalar

### Landscape

- `docs/video-tests/inputs/22-mektup-2-mebhas-hirs-kanaat-ve-zekat-landscape-full-video.json`
- `docs/video-tests/inputs/22-mektup-2-mebhas-hirs-kanaat-ve-zekat-landscape-load-input.js`
- `docs/video-tests/metadata/22-mektup-2-mebhas-hirs-kanaat-ve-zekat-landscape-metadata.json`

### Shorts

- `docs/video-tests/shorts/22-mektup-2-mebhas-hirs-kanaat-ve-zekat/22-mektup-2-mebhas-hirs-kanaat-ve-zekat-shorts-package.json`
- `docs/video-tests/shorts/22-mektup-2-mebhas-hirs-kanaat-ve-zekat/metadata/22-mektup-2-mebhas-hirs-kanaat-ve-zekat-shorts-metadata.json`
- `docs/video-tests/shorts/22-mektup-2-mebhas-hirs-kanaat-ve-zekat/load-inputs/short-001-load-input.js`
- `docs/video-tests/shorts/22-mektup-2-mebhas-hirs-kanaat-ve-zekat/load-inputs/short-002-load-input.js`
- `docs/video-tests/shorts/22-mektup-2-mebhas-hirs-kanaat-ve-zekat/load-inputs/short-003-load-input.js`
- `docs/video-tests/shorts/22-mektup-2-mebhas-hirs-kanaat-ve-zekat/load-inputs/short-004-load-input.js`
- `docs/video-tests/shorts/22-mektup-2-mebhas-hirs-kanaat-ve-zekat/load-inputs/short-005-load-input.js`
- `docs/video-tests/shorts/22-mektup-2-mebhas-hirs-kanaat-ve-zekat/load-inputs/short-006-load-input.js`

### Doldurma Promptu

- `docs/video-tests/prompts/22-mektup-2-mebhas-hirs-kanaat-ve-zekat-fill-video-package-prompt.md`

## Tamamlanan İçerik

- Landscape: 30 sahne
- Shorts: 6 paket, her biri 3 sahne
- Landscape ve Shorts metadata: dolduruldu
- Tüm `content_generation_status` alanları: `filled`
- Package, metadata ve Load Input sahne/açıklama uyumu: doğrulandı

## Doğrulama

- Dört JSON dosyası parse edildi: PASS
- Landscape ve altı Shorts Load Input JS syntax kontrolü: PASS
- Landscape JSON ile Load Input sahneleri birebir aynı: PASS
- Shorts package, metadata ve Load Input tutarlılığı: PASS
- Yasaklı kalıp taraması: 0 eşleşme
- `video:validate --report`: PASS

Validator çıktısı:

`docs/video-tests/reports/22-mektup-2-mebhas-hirs-kanaat-ve-zekat-validation-result.md`

## Sonraki Adım

n8n landscape smoke test için ilk olarak şu dosyanın içeriği Load Input Code node'una verilmelidir:

`docs/video-tests/inputs/22-mektup-2-mebhas-hirs-kanaat-ve-zekat-landscape-load-input.js`
