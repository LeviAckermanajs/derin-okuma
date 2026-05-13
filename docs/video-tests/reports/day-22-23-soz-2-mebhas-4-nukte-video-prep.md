# Day-22 — 23. Söz - 2. Mebhas - 4. Nükte Video Prep

## Amaç

Bu dosya `npm run video:prep` ile oluşturulan video üretim iskeletinin doldurulmasını ve doğrulama sonuçlarını belgeler.

## Kaynak Yazı

- Başlık: `23. Söz - 2. Mebhas - 4. Nükte`
- Slug: `23-soz-2-mebhas-4-nukte`
- Kaynak dosya: `src/content/blog/23-soz-2-mebhas-4-nükte.md`

## Oluşturulan Dosyalar

### Landscape

- `docs/video-tests/inputs/23-soz-2-mebhas-4-nukte-landscape-full-video.json`
- `docs/video-tests/inputs/23-soz-2-mebhas-4-nukte-landscape-load-input.js`
- `docs/video-tests/metadata/23-soz-2-mebhas-4-nukte-landscape-metadata.json`

### Shorts

- `docs/video-tests/shorts/23-soz-2-mebhas-4-nukte/23-soz-2-mebhas-4-nukte-shorts-package.json`
- `docs/video-tests/shorts/23-soz-2-mebhas-4-nukte/metadata/23-soz-2-mebhas-4-nukte-shorts-metadata.json`
- `docs/video-tests/shorts/23-soz-2-mebhas-4-nukte/load-inputs/short-001-load-input.js`
- `docs/video-tests/shorts/23-soz-2-mebhas-4-nukte/load-inputs/short-002-load-input.js`
- `docs/video-tests/shorts/23-soz-2-mebhas-4-nukte/load-inputs/short-003-load-input.js`
- `docs/video-tests/shorts/23-soz-2-mebhas-4-nukte/load-inputs/short-004-load-input.js`
- `docs/video-tests/shorts/23-soz-2-mebhas-4-nukte/load-inputs/short-005-load-input.js`
- `docs/video-tests/shorts/23-soz-2-mebhas-4-nukte/load-inputs/short-006-load-input.js`

### Claude Prompt

- `docs/video-tests/prompts/23-soz-2-mebhas-4-nukte-fill-video-package-prompt.md`

## Üretim Özeti

- Landscape sahne sayısı: 34
- Shorts sayısı: 6
- Her Shorts sahne sayısı: 3
- Landscape metadata: dolduruldu
- Shorts metadata: dolduruldu
- Load Input JS dosyaları n8n'e verilecek gerçek input formatında dolduruldu
- Package JSON master içerik/arşiv dosyası olarak dolduruldu

## Doğrulama

### JSON Parse

Çalıştırılan komutlar:

```bash
python3 -m json.tool docs/video-tests/inputs/23-soz-2-mebhas-4-nukte-landscape-full-video.json > /tmp/23-soz-2-mebhas-4-nukte-landscape-json-check.json
python3 -m json.tool docs/video-tests/metadata/23-soz-2-mebhas-4-nukte-landscape-metadata.json > /tmp/23-soz-2-mebhas-4-nukte-landscape-metadata-check.json
python3 -m json.tool docs/video-tests/shorts/23-soz-2-mebhas-4-nukte/23-soz-2-mebhas-4-nukte-shorts-package.json > /tmp/23-soz-2-mebhas-4-nukte-shorts-package-check.json
python3 -m json.tool docs/video-tests/shorts/23-soz-2-mebhas-4-nukte/metadata/23-soz-2-mebhas-4-nukte-shorts-metadata.json > /tmp/23-soz-2-mebhas-4-nukte-shorts-metadata-check.json
```

Sonuç: OK.

### JS Syntax

Çalıştırılan komutlar:

```bash
node -e "new Function(require('fs').readFileSync('docs/video-tests/inputs/23-soz-2-mebhas-4-nukte-landscape-load-input.js', 'utf8')); console.log('Landscape JS OK')"

for f in docs/video-tests/shorts/23-soz-2-mebhas-4-nukte/load-inputs/*.js; do
  node -e "new Function(require('fs').readFileSync('$f', 'utf8')); console.log('OK:', '$f')"
done
```

Sonuç: Landscape JS OK; short-001 ile short-006 arası tüm Load Input JS dosyaları OK.

### Yasaklı Kalıp Kontrolü

Çalıştırılan komut:

```bash
grep -RniE "bu metin|metnin|metinde|metne göre|metnin deyimiyle|bu noktada|şu cümle|verilen cevap|verilen örnek|yazar burada|kitap burada|burada anlatılmak istenen|bu bölüm" docs/video-tests/inputs/23-soz-2-mebhas-4-nukte* docs/video-tests/shorts/23-soz-2-mebhas-4-nukte || true
```

Sonuç: Eşleşme yok.

## n8n İlk Input

İlk olarak şu dosya n8n Load Input node'una verilmelidir:

`docs/video-tests/inputs/23-soz-2-mebhas-4-nukte-landscape-load-input.js`

Shorts için her `short-XXX-load-input.js` ayrı job olarak verilmelidir.
