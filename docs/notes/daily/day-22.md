# Day-22 — Video Prep + Batch Smoke Test

## Bugünün Amacı

`23. Söz - 2. Mebhas - 4. Nükte` yazısı için landscape + Shorts üretim dosyalarını doldurmak ve doğrulamak.

## Oluşturulan Dosyalar

- Landscape JSON
- Landscape Load Input JS
- Landscape metadata
- Shorts package
- Shorts metadata
- Shorts Load Input JS dosyaları (6 adet)
- Claude doldurma promptu

## Durum

- Landscape full video için 34 sahnelik narration / scene JSON dolduruldu.
- Landscape Load Input JS aynı sahnelerle dolduruldu.
- Landscape metadata dolduruldu.
- 6 Shorts paketi üretildi; her biri 3 sahne.
- Shorts package, Shorts metadata ve 6 ayrı Shorts Load Input JS dolduruldu.
- JSON parse, JS syntax ve yasaklı kalıp kontrolleri geçti.

## Sonraki Adım

İlk n8n testi için şu dosya Load Input node'una verilecek:

`docs/video-tests/inputs/23-soz-2-mebhas-4-nukte-landscape-load-input.js`

Shorts testleri için:

`docs/video-tests/shorts/23-soz-2-mebhas-4-nukte/load-inputs/short-001-load-input.js` ile başlanacak.

## Day-22 Batch Smoke Test

`video:batch --limit 4` testi başarıyla tamamlandı.

- Kullanılan komut: `npm run video:batch -- --slug 23-soz-2-mebhas-1-nukte --type shorts --limit 4 --run-id day22-limit4-d --force`
- n8n'e 4 item verildi
- `short-001`, `short-002`, `short-003`, `short-004` ayrı job olarak işlendi
- 4 ayrı output/job klasörü oluştu
- 4 Shorts videosu sorunsuz üretildi
- Output çakışması ve içerik karışması görülmedi

## Sonraki Kontrol

6 Shorts tam batch testine geçmeden önce bu sonuç `docs/video-tests/reports/day-22-video-batch-limit-4-n8n-success.md` dosyasında belgelendi.
