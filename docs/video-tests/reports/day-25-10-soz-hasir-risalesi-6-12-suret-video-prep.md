# Day-25 — 10. Söz - Haşir Risalesi - 6-12. Suret Video Package Fill

## Amaç

`npm run video:prep` ile oluşturulan video üretim scaffold dosyaları gerçek narration, scene JSON ve metadata içeriğiyle dolduruldu.

## Kapsam

- Başlık: `10. Söz - Haşir Risalesi - 6-12. Suret`
- Slug: `10-soz-hasir-risalesi-6-12-suret`
- Kaynak: `src/content/blog/10-soz-hasir-risalesi-6-12-suret.md`
- Gün: `day-25`

## Üretilen İçerik

- Landscape: 36 sahne
- Shorts: 6 paket
- Her Shorts: 3 sahne
- Landscape ve Shorts Load Input JS dosyaları n8n Code node formatında dolduruldu
- Metadata JSON dosyaları YouTube yayın hazırlığı için dolduruldu

## Doğrulama

- Landscape JSON parse: OK
- Landscape metadata JSON parse: OK
- Shorts package JSON parse: OK
- Shorts metadata JSON parse: OK
- Landscape Load Input JS syntax: OK
- 6 Shorts Load Input JS syntax: OK
- Yasaklı kalıp kontrolü: temiz
- `TODO`, `scaffold_only`, `text` alanı kontrolü: temiz
- Hashtag blokları description sonuyla birebir uyumlu

## n8n Notu

Package JSON arşiv/master içeriktir. n8n’e verilecek gerçek dosyalar Load Input JS dosyalarıdır.

İlk gönderilecek dosya:

`docs/video-tests/inputs/10-soz-hasir-risalesi-6-12-suret-landscape-load-input.js`
