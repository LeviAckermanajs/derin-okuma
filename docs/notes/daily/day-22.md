# Day-22 — Video Prep

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
