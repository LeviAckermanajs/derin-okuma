# Day-35 — 20. Mektup - 2. Makam - 5-7. kelime Video Prep Scaffold

## Amaç

Bu dosya `npm run video:prep` ile oluşturulan video üretim iskeletini belgeler.

## Kaynak Yazı

- Başlık: `20. Mektup - 2. Makam - 5-7. kelime`
- Slug: `20-mektup-2-makam-5-7-kelime`
- Kaynak dosya: `src/content/blog/20-mektup-2-makam-5-7-kelime.md`

## Oluşturulan Dosyalar

### Landscape

- `docs/video-tests/inputs/20-mektup-2-makam-5-7-kelime-landscape-full-video.json`
- `docs/video-tests/inputs/20-mektup-2-makam-5-7-kelime-landscape-load-input.js`
- `docs/video-tests/metadata/20-mektup-2-makam-5-7-kelime-landscape-metadata.json`

### Shorts

- `docs/video-tests/shorts/20-mektup-2-makam-5-7-kelime/20-mektup-2-makam-5-7-kelime-shorts-package.json`
- `docs/video-tests/shorts/20-mektup-2-makam-5-7-kelime/metadata/20-mektup-2-makam-5-7-kelime-shorts-metadata.json`
- `docs/video-tests/shorts/20-mektup-2-makam-5-7-kelime/load-inputs/short-001-load-input.js`
- `docs/video-tests/shorts/20-mektup-2-makam-5-7-kelime/load-inputs/short-002-load-input.js`
- `docs/video-tests/shorts/20-mektup-2-makam-5-7-kelime/load-inputs/short-003-load-input.js`
- `docs/video-tests/shorts/20-mektup-2-makam-5-7-kelime/load-inputs/short-004-load-input.js`
- `docs/video-tests/shorts/20-mektup-2-makam-5-7-kelime/load-inputs/short-005-load-input.js`
- `docs/video-tests/shorts/20-mektup-2-makam-5-7-kelime/load-inputs/short-006-load-input.js`

### Claude Prompt

- `docs/video-tests/prompts/20-mektup-2-makam-5-7-kelime-fill-video-package-prompt.md`

## Durum

- Scaffold oluşturuldu
- İçerik dolduruldu (Claude tarafından, 2026-06-04)
- Landscape: 35 sahne
- Shorts: 6 Shorts paketi (her biri 3-4 sahne)
- Tüm JSON ve JS dosyaları doğrulandı

## Doğrulama Sonuçları (2026-06-04)

| Kontrol | Sonuç |
|---|---|
| Landscape JSON parse | OK |
| Landscape Metadata JSON parse | OK |
| Shorts Package JSON parse | OK |
| Shorts Metadata JSON parse | OK |
| Landscape Load Input JS syntax | OK |
| short-001 JS syntax | OK |
| short-002 JS syntax | OK |
| short-003 JS syntax | OK |
| short-004 JS syntax | OK |
| short-005 JS syntax | OK |
| short-006 JS syntax | OK |
| Yasaklı kalıp kontrolü | Temiz |

## n8n'e İlk Gönderilecek Dosya

`docs/video-tests/inputs/20-mektup-2-makam-5-7-kelime-landscape-load-input.js`

## Sonraki Adım

n8n pipeline'ına landscape load-input dosyası verilecek ve üretim başlayacak.
