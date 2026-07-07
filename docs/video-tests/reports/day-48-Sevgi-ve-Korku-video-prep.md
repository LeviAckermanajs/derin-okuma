# Day-48 — 30.Söz - 1.Maksad - Mukaddime Video Prep Scaffold

## Amaç

Bu dosya `npm run video:prep` ile oluşturulan video üretim iskeletini belgeler.

## Kaynak Yazı

- Başlık: `30.Söz - 1.Maksad - Mukaddime`
- Slug: `Sevgi-ve-Korku`
- Kaynak dosya: `docs/drafts/30.Söz - 1.Maksad - Mukaddime.txt`

## Oluşturulan Dosyalar

### Landscape

- `docs/video-tests/inputs/Sevgi-ve-Korku-landscape-full-video.json`
- `docs/video-tests/inputs/Sevgi-ve-Korku-landscape-load-input.js`
- `docs/video-tests/metadata/Sevgi-ve-Korku-landscape-metadata.json`

### Shorts

- `docs/video-tests/shorts/Sevgi-ve-Korku/Sevgi-ve-Korku-shorts-package.json`
- `docs/video-tests/shorts/Sevgi-ve-Korku/metadata/Sevgi-ve-Korku-shorts-metadata.json`
- `docs/video-tests/shorts/Sevgi-ve-Korku/load-inputs/short-001-load-input.js`
- `docs/video-tests/shorts/Sevgi-ve-Korku/load-inputs/short-002-load-input.js`
- `docs/video-tests/shorts/Sevgi-ve-Korku/load-inputs/short-003-load-input.js`
- `docs/video-tests/shorts/Sevgi-ve-Korku/load-inputs/short-004-load-input.js`
- `docs/video-tests/shorts/Sevgi-ve-Korku/load-inputs/short-005-load-input.js`
- `docs/video-tests/shorts/Sevgi-ve-Korku/load-inputs/short-006-load-input.js`

### Claude Prompt

- `docs/video-tests/prompts/Sevgi-ve-Korku-fill-video-package-prompt.md`

## Durum

- Landscape narration: 30 sahne, `filled`
- Shorts: 6 paket, her biri 3 sahne, `filled`
- Landscape ve Shorts metadata: tamamlandı
- Tüm Load Input JS dosyaları gerçek içerikle dolduruldu
- Slug ile eşleşen blog dosyası hedef başlıkla uyuşmadığından başlıkla birebir eşleşen draft kaynak alındı

## Doğrulama

- JSON parse: PASS
- JS syntax: PASS
- Yasaklı kalıp kontrolü: PASS
- `video:validate --report`: PASS

## Sonraki Adım

Landscape üretimi için n8n'e ilk olarak `docs/video-tests/inputs/Sevgi-ve-Korku-landscape-load-input.js` verilmelidir. Shorts üretiminde ilgili `short-XXX-load-input.js` dosyaları kullanılmalıdır; package JSON doğrudan n8n girdisi değildir.
