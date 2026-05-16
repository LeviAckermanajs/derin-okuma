# Day-20 — video:validate + video:batch Implementation

## Amaç

Video üretim paketlerini n8n'e göndermeden önce yerel olarak doğrulamak ve Shorts Load Input JS dosyalarını tek bir batch dosyasında birleştirmek.

## Eklenen Komutlar

- `npm run video:validate -- --slug <slug>`
- `npm run video:batch -- --slug <slug> --type shorts --limit 2`

## Test Edilen Paket

- Slug: `23-soz-2-mebhas-1-nukte`

## video:validate Sonucu

`npm run video:validate -- --slug 23-soz-2-mebhas-1-nukte --report` komutu PASS sonucu verdi.

Kontroller:

- Landscape JSON parse
- Landscape Load Input JS syntax
- Landscape metadata ve hashtag tutarlılığı
- Shorts package ve metadata kontrolleri
- 6 Shorts Load Input JS syntax ve filled kontrolü
- Yasaklı kalıp taraması

## video:batch --limit 2 Sonucu

`npm run video:batch -- --slug 23-soz-2-mebhas-1-nukte --type shorts --limit 2` komutu `short-001` ve `short-002` için batch Load Input JS dosyası üretti.

Batch dosyası `new Function(...)` ile syntax kontrolünden geçti.

## Oluşturulan Batch Dosyası

`docs/video-tests/batches/23-soz-2-mebhas-1-nukte-shorts-batch-load-input.js`

## n8n Test Notu

Bu görevde n8n çalıştırılmadı. Sonraki adım batch dosyasını n8n Load Input Code node'a yapıştırıp 2 item davranışını test etmektir.

## Build

`npm run build` başarılı tamamlandı.

## Sonraki Adım

Day-21: `video:batch --limit 2` ile n8n batch smoke test.
