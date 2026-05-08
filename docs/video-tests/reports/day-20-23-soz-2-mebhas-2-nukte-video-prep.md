# Day-20 — 23. Söz - 2. Mebhas - 2. Nükte Video Prep Scaffold

## Amaç

Bu dosya `npm run video:prep` ile oluşturulan video üretim iskeletini belgeler.

## Kaynak Yazı

- Başlık: `23. Söz - 2. Mebhas - 2. Nükte`
- Slug: `23-soz-2-mebhas-2-nukte`
- Kaynak dosya: `src/content/blog/23-soz-2-mebhas-2-nükte.md`

## Oluşturulan Dosyalar

### Landscape

- `docs/video-tests/inputs/23-soz-2-mebhas-2-nukte-landscape-full-video.json`
- `docs/video-tests/inputs/23-soz-2-mebhas-2-nukte-landscape-load-input.js`
- `docs/video-tests/metadata/23-soz-2-mebhas-2-nukte-landscape-metadata.json`

### Shorts

- `docs/video-tests/shorts/23-soz-2-mebhas-2-nukte/23-soz-2-mebhas-2-nukte-shorts-package.json`
- `docs/video-tests/shorts/23-soz-2-mebhas-2-nukte/metadata/23-soz-2-mebhas-2-nukte-shorts-metadata.json`
- `docs/video-tests/shorts/23-soz-2-mebhas-2-nukte/load-inputs/short-001-load-input.js`
- `docs/video-tests/shorts/23-soz-2-mebhas-2-nukte/load-inputs/short-002-load-input.js`
- `docs/video-tests/shorts/23-soz-2-mebhas-2-nukte/load-inputs/short-003-load-input.js`
- `docs/video-tests/shorts/23-soz-2-mebhas-2-nukte/load-inputs/short-004-load-input.js`
- `docs/video-tests/shorts/23-soz-2-mebhas-2-nukte/load-inputs/short-005-load-input.js`
- `docs/video-tests/shorts/23-soz-2-mebhas-2-nukte/load-inputs/short-006-load-input.js`

### Claude Prompt

- `docs/video-tests/prompts/23-soz-2-mebhas-2-nukte-fill-video-package-prompt.md`

## Durum — İçerik Dolduruldu (2026-05-08)

### Landscape
- **36 sahne** üretildi (scene-001 — scene-036)
- Ton: sakin, tefekkürî, bağımsız video anlatısı
- `visual_note` ve `keywords` İngilizce
- JSON parse: **OK**
- JS syntax: **OK**
- Yasaklı kalıp taraması: **TEMİZ**
- n8n'e verilecek dosya: `23-soz-2-mebhas-2-nukte-landscape-load-input.js`

### Shorts
- **6 Shorts** üretildi
- short-001: İnsan Neden Hem Küçük Hem Büyüktür? (3 sahne)
- short-002: Acizlik Nasıl İnsanı Büyütür? (3 sahne)
- short-003: Çekirdek Nasıl Ağaç Olur? (3 sahne)
- short-004: Latifelerini Nereye Harcıyorsun? (3 sahne)
- short-005: Hakiki İlerleme Nedir? (4 sahne)
- short-006: Sarayını Kim Yönetiyor? (3 sahne)
- Tüm JS syntax: **OK**
- Shorts package JSON: **OK**

## Seçilen Landscape Başlığı

**İnsan Neden Hem Küçük Hem Büyüktür?**

## Sonraki Adım

n8n smoke test için:
1. `23-soz-2-mebhas-2-nukte-landscape-load-input.js` → Landscape smoke test
2. `short-001-load-input.js` → İlk Shorts smoke test
