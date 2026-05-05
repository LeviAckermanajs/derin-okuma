# Day-19 — 23. Söz - 2. Mebhas - 1. Nükte Video Prep Scaffold

## Amaç

Bu dosya `npm run video:prep` ile oluşturulan video üretim iskeletini belgeler.

## Kaynak Yazı

- Başlık: `23. Söz - 2. Mebhas - 1. Nükte`
- Slug: `23-soz-2-mebhas-1-nukte`
- Kaynak dosya: `src/content/blog/23-soz-2-mebhas-1-nükte.md`

## Oluşturulan Dosyalar

### Landscape

- `docs/video-tests/inputs/23-soz-2-mebhas-1-nukte-landscape-full-video.json`
- `docs/video-tests/inputs/23-soz-2-mebhas-1-nukte-landscape-load-input.js`
- `docs/video-tests/metadata/23-soz-2-mebhas-1-nukte-landscape-metadata.json`

### Shorts

- `docs/video-tests/shorts/23-soz-2-mebhas-1-nukte/23-soz-2-mebhas-1-nukte-shorts-package.json`
- `docs/video-tests/shorts/23-soz-2-mebhas-1-nukte/metadata/23-soz-2-mebhas-1-nukte-shorts-metadata.json`
- `docs/video-tests/shorts/23-soz-2-mebhas-1-nukte/load-inputs/short-001-load-input.js`
- `docs/video-tests/shorts/23-soz-2-mebhas-1-nukte/load-inputs/short-002-load-input.js`
- `docs/video-tests/shorts/23-soz-2-mebhas-1-nukte/load-inputs/short-003-load-input.js`
- `docs/video-tests/shorts/23-soz-2-mebhas-1-nukte/load-inputs/short-004-load-input.js`
- `docs/video-tests/shorts/23-soz-2-mebhas-1-nukte/load-inputs/short-005-load-input.js`
- `docs/video-tests/shorts/23-soz-2-mebhas-1-nukte/load-inputs/short-006-load-input.js`

### Claude Prompt

- `docs/video-tests/prompts/23-soz-2-mebhas-1-nukte-fill-video-package-prompt.md`

## Durum

- Scaffold oluşturuldu (Day-19, `npm run video:prep`)
- İçerik Claude tarafından dolduruldu (Day-19)
- Landscape: 35 sahne
- Shorts: 6 adet, her biri 3–4 sahne
- JSON parse: tümü OK
- JS syntax: tümü OK
- Yasaklı kalıp taraması: temiz

## Landscape Sahneleri Özeti

İnsanın genişliği (1–12) → Çiçekten Cennete, ahbaplar, ahiret talebi (13–18) → Sonsuz mercii zorunluluğu (19–21) → Kulluk paradoksu (22–25) → İki cihet, şer genişliği, küfür (26–31) → Haneyi bir günde harap, enaniyeti bırakmak, dönüşüm (32–35)

## Shorts Özeti

| ID | Başlık |
|---|---|
| short-001 | Kalp Neden Tatmin Olmaz? |
| short-002 | Allah'a Kul Olmak Neden Yükseltir? |
| short-003 | Küçük Arzular Büyük Hakikatin Tohumu |
| short-004 | İnsan Neden Hem Zayıf Hem Tehlikeli? |
| short-005 | Kalp Bu Dünyaya Sığmaz |
| short-006 | Kötülükler İyiliklere Nasıl Dönüşür? |

## Sonraki Adım

n8n'e ilk verilecek dosya:

`docs/video-tests/inputs/23-soz-2-mebhas-1-nukte-landscape-load-input.js`

Ardından Shorts için short-001'den başlanır:

`docs/video-tests/shorts/23-soz-2-mebhas-1-nukte/load-inputs/short-001-load-input.js`
