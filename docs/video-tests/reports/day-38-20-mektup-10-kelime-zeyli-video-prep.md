# Day-38 — Bir Zerre Ne Yapabilir Video Prep Scaffold

## Amaç

Bu dosya `npm run video:prep` ile oluşturulan video üretim iskeletini belgeler.

## Kaynak Yazı

- Başlık: `Bir Zerre Ne Yapabilir`
- Slug: `20-mektup-10-kelime-zeyli`
- Kaynak dosya: `src/content/blog/20-mektup-10-kelime-zeyli.md`

## Oluşturulan Dosyalar

### Landscape

- `docs/video-tests/inputs/20-mektup-10-kelime-zeyli-landscape-full-video.json`
- `docs/video-tests/inputs/20-mektup-10-kelime-zeyli-landscape-load-input.js`
- `docs/video-tests/metadata/20-mektup-10-kelime-zeyli-landscape-metadata.json`

### Shorts

- `docs/video-tests/shorts/20-mektup-10-kelime-zeyli/20-mektup-10-kelime-zeyli-shorts-package.json`
- `docs/video-tests/shorts/20-mektup-10-kelime-zeyli/metadata/20-mektup-10-kelime-zeyli-shorts-metadata.json`
- `docs/video-tests/shorts/20-mektup-10-kelime-zeyli/load-inputs/short-001-load-input.js`
- `docs/video-tests/shorts/20-mektup-10-kelime-zeyli/load-inputs/short-002-load-input.js`
- `docs/video-tests/shorts/20-mektup-10-kelime-zeyli/load-inputs/short-003-load-input.js`
- `docs/video-tests/shorts/20-mektup-10-kelime-zeyli/load-inputs/short-004-load-input.js`
- `docs/video-tests/shorts/20-mektup-10-kelime-zeyli/load-inputs/short-005-load-input.js`
- `docs/video-tests/shorts/20-mektup-10-kelime-zeyli/load-inputs/short-006-load-input.js`

### Claude Prompt

- `docs/video-tests/prompts/20-mektup-10-kelime-zeyli-fill-video-package-prompt.md`

## Durum

İçerik üretimi tamamlandı (2026-06-15).

### Landscape

- 35 sahne üretildi
- JSON parse: OK
- JS syntax: OK
- Yasaklı kalıp kontrolü: TEMİZ

### Shorts

- 6 Short üretildi (short-001 → short-006)
- Short başına 3–4 sahne
- JSON parse: OK (package + metadata)
- JS syntax: OK (tüm 6 load-input)
- Yasaklı kalıp kontrolü: TEMİZ

## Sonraki Adım

n8n smoke test için ilk gönderilecek dosya:

`docs/video-tests/inputs/20-mektup-10-kelime-zeyli-landscape-load-input.js`
