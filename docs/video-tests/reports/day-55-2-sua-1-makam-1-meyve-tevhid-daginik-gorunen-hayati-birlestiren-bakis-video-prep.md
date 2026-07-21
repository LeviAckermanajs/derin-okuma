# Day-55 — 2.Şua - 1.Makam - 1.Meyve Video Paketi

## Amaç

Bu dosya `npm run video:prep` ile oluşturulan video üretim iskeletinin içerikle doldurulmasını ve doğrulama sonucunu belgeler.

## Kaynak Yazı

- Başlık: `2.Şua - 1.Makam - 1.Meyve`
- Slug: `2-sua-1-makam-1-meyve-tevhid-daginik-gorunen-hayati-birlestiren-bakis`
- Kaynak dosya: `src/content/blog/2-sua-1-makam-1-meyve-tevhid-daginik-gorunen-hayati-birlestiren-bakis.md`

## Oluşturulan Dosyalar

### Landscape

- `docs/video-tests/inputs/2-sua-1-makam-1-meyve-tevhid-daginik-gorunen-hayati-birlestiren-bakis-landscape-full-video.json`
- `docs/video-tests/inputs/2-sua-1-makam-1-meyve-tevhid-daginik-gorunen-hayati-birlestiren-bakis-landscape-load-input.js`
- `docs/video-tests/metadata/2-sua-1-makam-1-meyve-tevhid-daginik-gorunen-hayati-birlestiren-bakis-landscape-metadata.json`

### Shorts

- `docs/video-tests/shorts/2-sua-1-makam-1-meyve-tevhid-daginik-gorunen-hayati-birlestiren-bakis/2-sua-1-makam-1-meyve-tevhid-daginik-gorunen-hayati-birlestiren-bakis-shorts-package.json`
- `docs/video-tests/shorts/2-sua-1-makam-1-meyve-tevhid-daginik-gorunen-hayati-birlestiren-bakis/metadata/2-sua-1-makam-1-meyve-tevhid-daginik-gorunen-hayati-birlestiren-bakis-shorts-metadata.json`
- `docs/video-tests/shorts/2-sua-1-makam-1-meyve-tevhid-daginik-gorunen-hayati-birlestiren-bakis/load-inputs/short-001-load-input.js`
- `docs/video-tests/shorts/2-sua-1-makam-1-meyve-tevhid-daginik-gorunen-hayati-birlestiren-bakis/load-inputs/short-002-load-input.js`
- `docs/video-tests/shorts/2-sua-1-makam-1-meyve-tevhid-daginik-gorunen-hayati-birlestiren-bakis/load-inputs/short-003-load-input.js`
- `docs/video-tests/shorts/2-sua-1-makam-1-meyve-tevhid-daginik-gorunen-hayati-birlestiren-bakis/load-inputs/short-004-load-input.js`
- `docs/video-tests/shorts/2-sua-1-makam-1-meyve-tevhid-daginik-gorunen-hayati-birlestiren-bakis/load-inputs/short-005-load-input.js`
- `docs/video-tests/shorts/2-sua-1-makam-1-meyve-tevhid-daginik-gorunen-hayati-birlestiren-bakis/load-inputs/short-006-load-input.js`

### Claude Prompt

- `docs/video-tests/prompts/2-sua-1-makam-1-meyve-tevhid-daginik-gorunen-hayati-birlestiren-bakis-fill-video-package-prompt.md`

## İçerik Özeti

- Landscape: 34 sahne
- Shorts: 6 paket, her biri 3 sahne
- Landscape ve Shorts için `single_track` ses stratejisi
- Zamanlama: `elevenlabs_timestamps`
- Tüm `visual_note` ve `keywords` alanları İngilizce
- Tüm `content_generation_status` alanları `filled`

## Doğrulama

- `video:validate`: PASS
- Dört JSON dosyası: parse başarılı
- Landscape Load Input ve 6 Shorts Load Input: JS syntax başarılı
- Package, metadata ve Load Input dosyaları dolu
- Description sonundaki hashtag blokları metadata array'leriyle uyumlu
- Yasaklı kalıp taraması: 0 eşleşme

Detaylı sonuç:

`docs/video-tests/reports/2-sua-1-makam-1-meyve-tevhid-daginik-gorunen-hayati-birlestiren-bakis-validation-result.md`

## Durum

Paket dolduruldu ve n8n smoke testine hazır.

## Sonraki Adım

İlk n8n smoke test için landscape Load Input dosyasını kullan:

`docs/video-tests/inputs/2-sua-1-makam-1-meyve-tevhid-daginik-gorunen-hayati-birlestiren-bakis-landscape-load-input.js`
