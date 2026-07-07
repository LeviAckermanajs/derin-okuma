# Day-51 — 30.Söz - 1.Maksad Video Paketi

## Amaç

Bu dosya `npm run video:prep` ile oluşturulan iskeletin içerikle doldurulmasını ve doğrulama sonucunu belgeler.

## Kaynak Yazı

- Başlık: `30.Söz - 1.Maksad`
- Slug: `30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur`
- Kaynak dosya: `src/content/blog/30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur.md`

## Oluşturulan Dosyalar

### Landscape

- `docs/video-tests/inputs/30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur-landscape-full-video.json`
- `docs/video-tests/inputs/30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur-landscape-load-input.js`
- `docs/video-tests/metadata/30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur-landscape-metadata.json`

### Shorts

- `docs/video-tests/shorts/30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur/30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur-shorts-package.json`
- `docs/video-tests/shorts/30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur/metadata/30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur-shorts-metadata.json`
- `docs/video-tests/shorts/30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur/load-inputs/short-001-load-input.js`
- `docs/video-tests/shorts/30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur/load-inputs/short-002-load-input.js`
- `docs/video-tests/shorts/30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur/load-inputs/short-003-load-input.js`
- `docs/video-tests/shorts/30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur/load-inputs/short-004-load-input.js`
- `docs/video-tests/shorts/30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur/load-inputs/short-005-load-input.js`
- `docs/video-tests/shorts/30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur/load-inputs/short-006-load-input.js`

### Üretim Promptu

- `docs/video-tests/prompts/30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur-fill-video-package-prompt.md`

## İçerik Özeti

- Landscape: 36 sahne
- Shorts: 6 paket, her biri 3 sahne
- Landscape ve Shorts için `single_track` ses stratejisi
- Zamanlama: `elevenlabs_timestamps`
- Tüm `visual_note` ve `keywords` alanları İngilizce
- Tüm `content_generation_status` alanları `filled`

## Doğrulama

- `video:validate`: PASS
- Dört JSON dosyası: parse başarılı
- Landscape Load Input ve 6 Shorts Load Input: JS syntax başarılı
- Package, metadata ve Load Input içerik eşitliği: başarılı
- Description sonundaki hashtag blokları: metadata array'leriyle birebir uyumlu
- Yasaklı kalıp taraması: 0 eşleşme

Detaylı sonuç:

`docs/video-tests/reports/30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur-validation-result.md`

## Sonraki Adım

İlk n8n smoke test için landscape Load Input dosyasını kullan:

`docs/video-tests/inputs/30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur-landscape-load-input.js`
