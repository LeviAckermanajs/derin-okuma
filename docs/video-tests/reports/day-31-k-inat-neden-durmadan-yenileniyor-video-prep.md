# Day-31 — Kâinat Neden Durmadan Yenileniyor? Video Prep

## Amaç

Bu dosya `npm run video:prep` ile oluşturulan video üretim iskeletinin gerçek narration, scene JSON ve metadata ile doldurulmasını belgeler.

## Kaynak Yazı

- Başlık: `Kâinat Neden Durmadan Yenileniyor?`
- Slug: `k-inat-neden-durmadan-yenileniyor`
- Kaynak dosya: `src/content/blog/18-mektup-3-mesele-kainat-neden-durmadan-yenileniyor.md`

## Oluşturulan Dosyalar

### Landscape

- `docs/video-tests/inputs/k-inat-neden-durmadan-yenileniyor-landscape-full-video.json`
- `docs/video-tests/inputs/k-inat-neden-durmadan-yenileniyor-landscape-load-input.js`
- `docs/video-tests/metadata/k-inat-neden-durmadan-yenileniyor-landscape-metadata.json`

### Shorts

- `docs/video-tests/shorts/k-inat-neden-durmadan-yenileniyor/k-inat-neden-durmadan-yenileniyor-shorts-package.json`
- `docs/video-tests/shorts/k-inat-neden-durmadan-yenileniyor/metadata/k-inat-neden-durmadan-yenileniyor-shorts-metadata.json`
- `docs/video-tests/shorts/k-inat-neden-durmadan-yenileniyor/load-inputs/short-001-load-input.js`
- `docs/video-tests/shorts/k-inat-neden-durmadan-yenileniyor/load-inputs/short-002-load-input.js`
- `docs/video-tests/shorts/k-inat-neden-durmadan-yenileniyor/load-inputs/short-003-load-input.js`
- `docs/video-tests/shorts/k-inat-neden-durmadan-yenileniyor/load-inputs/short-004-load-input.js`
- `docs/video-tests/shorts/k-inat-neden-durmadan-yenileniyor/load-inputs/short-005-load-input.js`
- `docs/video-tests/shorts/k-inat-neden-durmadan-yenileniyor/load-inputs/short-006-load-input.js`

### Claude Prompt

- `docs/video-tests/prompts/k-inat-neden-durmadan-yenileniyor-fill-video-package-prompt.md`

## Durum

- Landscape narration üretildi ve 34 sahneye bölündü
- Landscape full video JSON içindeki `scenes` alanı dolduruldu
- Landscape Load Input JS içindeki `job.description`, `scenes` ve `content_generation_status` alanları dolduruldu
- Landscape metadata JSON dosyası dolduruldu
- Aynı içerikten 6 Shorts paketi çıkarıldı
- Shorts package JSON dosyası dolduruldu
- Shorts metadata JSON dosyası dolduruldu
- 6 Shorts Load Input JS dosyasında `job.title`, `job.description`, `scenes` ve `content_generation_status` alanları dolduruldu

## İçerik Özeti

- Landscape sahne sayısı: `34`
- Shorts sayısı: `6`
- Shorts sahne dağılımı: `short-001: 3`, `short-002: 3`, `short-003: 3`, `short-004: 3`, `short-005: 3`, `short-006: 3`
- Landscape mode: `full_video`
- Landscape render_mode: `landscape` (Load Input JS)
- Shorts mode: `shorts`
- Shorts render_mode: `shorts`
- Audio strategy: `single_track`
- Timing strategy: `elevenlabs_timestamps`

## Doğrulama

JSON parse:

```bash
python3 -m json.tool docs/video-tests/inputs/k-inat-neden-durmadan-yenileniyor-landscape-full-video.json > /tmp/k-inat-neden-durmadan-yenileniyor-landscape-json-check.json
python3 -m json.tool docs/video-tests/metadata/k-inat-neden-durmadan-yenileniyor-landscape-metadata.json > /tmp/k-inat-neden-durmadan-yenileniyor-landscape-metadata-check.json
python3 -m json.tool docs/video-tests/shorts/k-inat-neden-durmadan-yenileniyor/k-inat-neden-durmadan-yenileniyor-shorts-package.json > /tmp/k-inat-neden-durmadan-yenileniyor-shorts-package-check.json
python3 -m json.tool docs/video-tests/shorts/k-inat-neden-durmadan-yenileniyor/metadata/k-inat-neden-durmadan-yenileniyor-shorts-metadata.json > /tmp/k-inat-neden-durmadan-yenileniyor-shorts-metadata-check.json
```

Sonuç: başarılı.

JS syntax:

```bash
node -e "new Function(require('fs').readFileSync('docs/video-tests/inputs/k-inat-neden-durmadan-yenileniyor-landscape-load-input.js', 'utf8')); console.log('Landscape JS OK')"
for f in docs/video-tests/shorts/k-inat-neden-durmadan-yenileniyor/load-inputs/*.js; do node -e "new Function(require('fs').readFileSync('$f', 'utf8')); console.log('OK:', '$f')"; done
```

Sonuç:

```text
Landscape JS OK
OK: docs/video-tests/shorts/k-inat-neden-durmadan-yenileniyor/load-inputs/short-001-load-input.js
OK: docs/video-tests/shorts/k-inat-neden-durmadan-yenileniyor/load-inputs/short-002-load-input.js
OK: docs/video-tests/shorts/k-inat-neden-durmadan-yenileniyor/load-inputs/short-003-load-input.js
OK: docs/video-tests/shorts/k-inat-neden-durmadan-yenileniyor/load-inputs/short-004-load-input.js
OK: docs/video-tests/shorts/k-inat-neden-durmadan-yenileniyor/load-inputs/short-005-load-input.js
OK: docs/video-tests/shorts/k-inat-neden-durmadan-yenileniyor/load-inputs/short-006-load-input.js
```

Yasaklı kalıp kontrolü:

```bash
grep -RniE "bu metin|metnin|metinde|metne göre|metnin deyimiyle|bu noktada|şu cümle|verilen cevap|verilen örnek|yazar burada|kitap burada|burada anlatılmak istenen|bu bölüm" docs/video-tests/inputs/k-inat-neden-durmadan-yenileniyor* docs/video-tests/shorts/k-inat-neden-durmadan-yenileniyor || true
```

Sonuç: eşleşme yok.

## n8n Gönderim Sırası

İlk n8n smoke test için verilecek dosya:

`docs/video-tests/inputs/k-inat-neden-durmadan-yenileniyor-landscape-load-input.js`

Shorts için gerçek gönderim dosyaları:

`docs/video-tests/shorts/k-inat-neden-durmadan-yenileniyor/load-inputs/short-001-load-input.js` → `short-006-load-input.js`
