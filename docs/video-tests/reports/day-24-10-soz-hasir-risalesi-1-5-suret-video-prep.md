# Day-24 - 10. Soz Hasir Risalesi Video Package Fill

Bu dosya `npm run video:prep` ile olusturulan video uretim iskeletinin doldurulmasini ve dogrulama sonuclarini belgeler.

## Kapsam

- Baslik: `10. Söz - Haşir Risalesi - 1-5. Suret`
- Slug: `10-soz-hasir-risalesi-1-5-suret`
- Kaynak: `src/content/blog/10-soz-hasir-risalesi-1-5-suret.md`
- Gun: `day-24`

## Uretilen Icerik

- Landscape: 36 sahne
- Shorts: 6 paket
- Her Shorts: 3 sahne
- Landscape ve Shorts Load Input JS dosyalari n8n Code node formatinda dolduruldu
- Metadata JSON dosyalari YouTube yayin hazirligi icin dolduruldu

## Dogrulama

Asagidaki kontroller calistirildi ve gecti:

- Landscape JSON parse: OK
- Landscape metadata JSON parse: OK
- Shorts package JSON parse: OK
- Shorts metadata JSON parse: OK
- Landscape Load Input JS syntax: OK
- 6 Shorts Load Input JS syntax: OK
- Yasakli kalip kontrolu: temiz
- `TODO`, `scaffold_only`, `text` alani kontrolu: temiz
- Hashtag bloklari description sonuyla birebir uyumlu

## n8n Notu

Package JSON arsiv/master iceriktir. n8n'e verilecek gercek dosyalar Load Input JS dosyalaridir.

Ilk gonderilecek dosya:

`docs/video-tests/inputs/10-soz-hasir-risalesi-1-5-suret-landscape-load-input.js`
