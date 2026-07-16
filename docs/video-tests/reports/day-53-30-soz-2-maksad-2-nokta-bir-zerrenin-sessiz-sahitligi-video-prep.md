# Day-53 — 30.Söz - 2.Maksad - 2.Nokta Video Package

## Amaç

Bu dosya, `npm run video:prep` ile oluşturulan scaffold dosyalarının gerçek içerikle doldurulma durumunu belgeler.

## Kaynak Yazı

- Başlık: `30.Söz - 2.Maksad - 2.Nokta`
- Slug: `30-soz-2-maksad-2-nokta-bir-zerrenin-sessiz-sahitligi`
- Kaynak dosya: `src/content/blog/30-soz-2-maksad-2-nokta-bir-zerrenin-sessiz-sahitligi.md`

## Üretilen İçerik

- Landscape: 34 sahne
- Shorts: 6 paket
- Her Shorts: 3 sahne
- TTS stratejisi: `single_track` + `elevenlabs_timestamps`
- Landscape mode: `full_video` / render mode: `landscape`
- Shorts mode: `shorts` / render mode: `shorts`

## Doldurulan Dosyalar

### Landscape

- `docs/video-tests/inputs/30-soz-2-maksad-2-nokta-bir-zerrenin-sessiz-sahitligi-landscape-full-video.json`
- `docs/video-tests/inputs/30-soz-2-maksad-2-nokta-bir-zerrenin-sessiz-sahitligi-landscape-load-input.js`
- `docs/video-tests/metadata/30-soz-2-maksad-2-nokta-bir-zerrenin-sessiz-sahitligi-landscape-metadata.json`

### Shorts

- `docs/video-tests/shorts/30-soz-2-maksad-2-nokta-bir-zerrenin-sessiz-sahitligi/30-soz-2-maksad-2-nokta-bir-zerrenin-sessiz-sahitligi-shorts-package.json`
- `docs/video-tests/shorts/30-soz-2-maksad-2-nokta-bir-zerrenin-sessiz-sahitligi/metadata/30-soz-2-maksad-2-nokta-bir-zerrenin-sessiz-sahitligi-shorts-metadata.json`
- `docs/video-tests/shorts/30-soz-2-maksad-2-nokta-bir-zerrenin-sessiz-sahitligi/load-inputs/short-001-load-input.js`
- `docs/video-tests/shorts/30-soz-2-maksad-2-nokta-bir-zerrenin-sessiz-sahitligi/load-inputs/short-002-load-input.js`
- `docs/video-tests/shorts/30-soz-2-maksad-2-nokta-bir-zerrenin-sessiz-sahitligi/load-inputs/short-003-load-input.js`
- `docs/video-tests/shorts/30-soz-2-maksad-2-nokta-bir-zerrenin-sessiz-sahitligi/load-inputs/short-004-load-input.js`
- `docs/video-tests/shorts/30-soz-2-maksad-2-nokta-bir-zerrenin-sessiz-sahitligi/load-inputs/short-005-load-input.js`
- `docs/video-tests/shorts/30-soz-2-maksad-2-nokta-bir-zerrenin-sessiz-sahitligi/load-inputs/short-006-load-input.js`

## Metadata Durumu

- Landscape metadata dolduruldu; seçili başlık, açıklama, hashtagler, thumbnail seçenekleri, SEO ifadeleri ve pinned comment hazır.
- Shorts metadata dolduruldu; her short için `selected_title`, `description`, `hashtags` ve `thumbnail_or_cover_text` hazır.
- Package JSON içindeki Shorts açıklamaları metadata açıklamalarıyla aynı tutuldu.
- Tüm ilgili `content_generation_status` değerleri `filled` yapıldı.

## Doğrulama

- JSON parse, JS syntax, validator ve yasaklı kalıp kontrolleri çalıştırıldı.
- Sonuç: PASS.
- Güncel sonuç için bkz: `docs/video-tests/reports/30-soz-2-maksad-2-nokta-bir-zerrenin-sessiz-sahitligi-validation-result.md`.

## n8n Notu

- Landscape için n8n'e ilk verilecek gerçek dosya: `docs/video-tests/inputs/30-soz-2-maksad-2-nokta-bir-zerrenin-sessiz-sahitligi-landscape-load-input.js`
- Shorts için n8n'e verilecek dosyalar: `docs/video-tests/shorts/30-soz-2-maksad-2-nokta-bir-zerrenin-sessiz-sahitligi/load-inputs/short-001-load-input.js` ile `short-006-load-input.js` arasıdır.
- `shorts-package.json` master içerik/arşiv dosyasıdır; doğrudan n8n'e verilmez.
