# Day-57 — 2.Şua - 1.Makam - 3.Meyve Video Paketi

## Amaç

Bu dosya `npm run video:prep` ile oluşturulan video üretim iskeletinin içerikle doldurulmasını ve doğrulama sonucunu belgeler.

## Kaynak Yazı

- Başlık: `2.Şua - 1.Makam - 3.Meyve`
- Slug: `2-sua-1-makam-3-meyve-insan-tevhidle-neden-kainat-kadar-genisler`
- Kaynak dosya: `src/content/blog/2-sua-1-makam-3-meyve-insan-tevhidle-neden-kainat-kadar-genisler.md`

## Doldurulan Dosyalar

### Landscape

- `docs/video-tests/inputs/2-sua-1-makam-3-meyve-insan-tevhidle-neden-kainat-kadar-genisler-landscape-full-video.json`
- `docs/video-tests/inputs/2-sua-1-makam-3-meyve-insan-tevhidle-neden-kainat-kadar-genisler-landscape-load-input.js`
- `docs/video-tests/metadata/2-sua-1-makam-3-meyve-insan-tevhidle-neden-kainat-kadar-genisler-landscape-metadata.json`

### Shorts

- `docs/video-tests/shorts/2-sua-1-makam-3-meyve-insan-tevhidle-neden-kainat-kadar-genisler/2-sua-1-makam-3-meyve-insan-tevhidle-neden-kainat-kadar-genisler-shorts-package.json`
- `docs/video-tests/shorts/2-sua-1-makam-3-meyve-insan-tevhidle-neden-kainat-kadar-genisler/metadata/2-sua-1-makam-3-meyve-insan-tevhidle-neden-kainat-kadar-genisler-shorts-metadata.json`
- `docs/video-tests/shorts/2-sua-1-makam-3-meyve-insan-tevhidle-neden-kainat-kadar-genisler/load-inputs/short-001-load-input.js`
- `docs/video-tests/shorts/2-sua-1-makam-3-meyve-insan-tevhidle-neden-kainat-kadar-genisler/load-inputs/short-002-load-input.js`
- `docs/video-tests/shorts/2-sua-1-makam-3-meyve-insan-tevhidle-neden-kainat-kadar-genisler/load-inputs/short-003-load-input.js`
- `docs/video-tests/shorts/2-sua-1-makam-3-meyve-insan-tevhidle-neden-kainat-kadar-genisler/load-inputs/short-004-load-input.js`
- `docs/video-tests/shorts/2-sua-1-makam-3-meyve-insan-tevhidle-neden-kainat-kadar-genisler/load-inputs/short-005-load-input.js`
- `docs/video-tests/shorts/2-sua-1-makam-3-meyve-insan-tevhidle-neden-kainat-kadar-genisler/load-inputs/short-006-load-input.js`

## İçerik Özeti

- Landscape: 34 sahne
- Shorts: 6 paket, her biri 3 sahne
- Landscape ve Shorts için `single_track` ses stratejisi
- Zamanlama: `elevenlabs_timestamps`
- Tüm `visual_note` ve `keywords` alanları İngilizce
- Tüm `content_generation_status` alanları `filled`
- Load Input metadata `status` alanları `ready_for_n8n`

## Metadata

- Landscape metadata dolduruldu
- Shorts metadata içinde 6 Shorts için `selected_title`, `description`, `hashtags` ve `thumbnail_or_cover_text` alanları dolduruldu
- Description sonundaki hashtag blokları `hashtags` array'leriyle uyumlu

## Doğrulama

- `video:validate`: PASS
- Dört JSON dosyası: parse başarılı
- Landscape Load Input ve 6 Shorts Load Input: JS syntax başarılı
- Package, metadata ve Load Input dosyaları dolu
- Yasaklı kalıp taraması: 0 eşleşme

Detaylı sonuç:

`docs/video-tests/reports/2-sua-1-makam-3-meyve-insan-tevhidle-neden-kainat-kadar-genisler-validation-result.md`

## Durum

Paket dolduruldu ve n8n smoke testine hazır.

## Sonraki Adım

İlk n8n smoke test için landscape Load Input dosyasını kullan:

`docs/video-tests/inputs/2-sua-1-makam-3-meyve-insan-tevhidle-neden-kainat-kadar-genisler-landscape-load-input.js`
