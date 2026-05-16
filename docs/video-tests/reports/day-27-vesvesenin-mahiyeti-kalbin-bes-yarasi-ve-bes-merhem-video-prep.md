# Day-27 — Vesvesenin Mahiyeti, Kalbin Beş Yarası ve Beş Merhem Video Package Fill

## Amaç

`npm run video:prep` ile oluşturulan video üretim scaffold dosyaları gerçek narration, scene JSON ve metadata içeriğiyle dolduruldu.

## Kapsam

- Başlık: `Vesvesenin Mahiyeti, Kalbin Beş Yarası ve Beş Merhem`
- Slug: `vesvesenin-mahiyeti-kalbin-bes-yarasi-ve-bes-merhem`
- Kaynak: `src/content/blog/21-soz-2-makam.md`
- Gün: `day-27`

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
- `video:validate --report`: PASS
- Hashtag blokları description sonuyla birebir uyumlu

## n8n Notu

Package JSON arşiv/master içeriktir. n8n’e verilecek gerçek dosyalar Load Input JS dosyalarıdır.

İlk gönderilecek dosya:

`docs/video-tests/inputs/vesvesenin-mahiyeti-kalbin-bes-yarasi-ve-bes-merhem-landscape-load-input.js`
