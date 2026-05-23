# Day-30 — Vazifenin İçine Gizlenmiş Lezzet Video Prep

## Amaç

`npm run video:prep` ile oluşturulan scaffold dosyaları gerçek landscape ve Shorts içerikleriyle dolduruldu.

## Kaynak Yazı

- Başlık: `Vazifenin İçine Gizlenmiş Lezzet`
- Slug: `vazifenin-icine-gizlenmis-lezzet`
- Kaynak dosya: `src/content/blog/17-lema-8-nota-vazifenin-icine-gizlenmis-lezzet.md`

## Doldurulan İçerik

- Landscape: 32 sahne
- Shorts: 6 paket
- Her Shorts: 3 sahne
- Landscape ve Shorts Load Input JS dosyalarında `audio_strategy.mode: 'single_track'` ve `timing_strategy: 'elevenlabs_timestamps'` korundu
- `visual_note` ve `keywords` alanları İngilizce yazıldı
- `narration` alanı kullanıldı; `text` alanı eklenmedi

## Doldurulan Dosyalar

### Landscape

- `docs/video-tests/inputs/vazifenin-icine-gizlenmis-lezzet-landscape-full-video.json`
- `docs/video-tests/inputs/vazifenin-icine-gizlenmis-lezzet-landscape-load-input.js`
- `docs/video-tests/metadata/vazifenin-icine-gizlenmis-lezzet-landscape-metadata.json`

### Shorts

- `docs/video-tests/shorts/vazifenin-icine-gizlenmis-lezzet/vazifenin-icine-gizlenmis-lezzet-shorts-package.json`
- `docs/video-tests/shorts/vazifenin-icine-gizlenmis-lezzet/metadata/vazifenin-icine-gizlenmis-lezzet-shorts-metadata.json`
- `docs/video-tests/shorts/vazifenin-icine-gizlenmis-lezzet/load-inputs/short-001-load-input.js`
- `docs/video-tests/shorts/vazifenin-icine-gizlenmis-lezzet/load-inputs/short-002-load-input.js`
- `docs/video-tests/shorts/vazifenin-icine-gizlenmis-lezzet/load-inputs/short-003-load-input.js`
- `docs/video-tests/shorts/vazifenin-icine-gizlenmis-lezzet/load-inputs/short-004-load-input.js`
- `docs/video-tests/shorts/vazifenin-icine-gizlenmis-lezzet/load-inputs/short-005-load-input.js`
- `docs/video-tests/shorts/vazifenin-icine-gizlenmis-lezzet/load-inputs/short-006-load-input.js`

## Metadata Durumu

- Landscape metadata dolduruldu
- Shorts metadata 6 Shorts için dolduruldu
- Açıklama sonlarındaki hashtag blokları ilgili `hashtags` array değerleriyle birebir eşleşecek şekilde yazıldı

## Doğrulama

Doğrulama komutları çalıştırıldıktan sonra sonuç bu rapora eklendi.

- JSON parse: PASS
- JS syntax: PASS
- Yasaklı kalıp kontrolü: PASS

## n8n Girdisi

İlk n8n denemesi için verilecek dosya:

`docs/video-tests/inputs/vazifenin-icine-gizlenmis-lezzet-landscape-load-input.js`

Shorts için her video ayrı gönderilecekse `docs/video-tests/shorts/vazifenin-icine-gizlenmis-lezzet/load-inputs/short-001-load-input.js` ile başlanabilir.
