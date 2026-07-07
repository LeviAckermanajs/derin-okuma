# Day-50 — 26.Söz - Zeyl - Hatime Video Paketi

## Amaç

`npm run video:prep` ile oluşturulan iskeletleri gerçek içerikle doldurmak ve paketi n8n smoke testine hazırlamak.

## Kaynak Yazı

- Başlık: `26.Söz - Zeyl - Hatime`
- Slug: `26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak`
- Kaynak dosya: `src/content/blog/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak.md`

## Oluşturulan Dosyalar

### Landscape

- `docs/video-tests/inputs/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak-landscape-full-video.json`
- `docs/video-tests/inputs/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak-landscape-load-input.js`
- `docs/video-tests/metadata/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak-landscape-metadata.json`

### Shorts

- `docs/video-tests/shorts/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak-shorts-package.json`
- `docs/video-tests/shorts/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak/metadata/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak-shorts-metadata.json`
- `docs/video-tests/shorts/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak/load-inputs/short-001-load-input.js`
- `docs/video-tests/shorts/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak/load-inputs/short-002-load-input.js`
- `docs/video-tests/shorts/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak/load-inputs/short-003-load-input.js`
- `docs/video-tests/shorts/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak/load-inputs/short-004-load-input.js`
- `docs/video-tests/shorts/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak/load-inputs/short-005-load-input.js`
- `docs/video-tests/shorts/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak/load-inputs/short-006-load-input.js`

### Üretim Özeti

- Landscape sahne sayısı: 36
- Shorts sayısı: 6
- Her Shorts için sahne sayısı: 3
- Landscape modu: `full_video` / `landscape`
- Shorts modu: `shorts` / `shorts`
- Ses stratejisi: `single_track`
- Zamanlama stratejisi: `elevenlabs_timestamps`

## Durum

- Landscape JSON, landscape metadata, Shorts package ve Shorts metadata geçerli JSON olarak parse edildi.
- Landscape ve 6 Shorts Load Input dosyasının JavaScript syntax kontrolü geçti.
- Landscape JSON ile Landscape Load Input sahneleri birebir eşleşiyor.
- Her Shorts package sahnesi ilgili Load Input JS sahneleriyle birebir eşleşiyor.
- Yasaklı kalıp taraması 0 eşleşme verdi.
- Repo validator sonucu: PASS.
- Tüm içerik durumları: `filled`.

## Sonraki Adım

Landscape smoke testi için önce şu dosyayı n8n Load Input Code node'una ver:

`docs/video-tests/inputs/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak-landscape-load-input.js`

Shorts smoke testlerinde package JSON yerine `load-inputs/short-XXX-load-input.js` dosyaları kullanılmalıdır.
