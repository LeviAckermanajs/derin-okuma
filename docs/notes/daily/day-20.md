# Day-20 — video:validate + video:batch

## Bugünün Amacı

Video üretim akışında n8n öncesi yerel doğrulama ve Shorts batch Load Input üretimini başlatmak.

## Eklenen Komutlar

- `npm run video:validate -- --slug <slug>`
- `npm run video:batch -- --slug <slug> --type shorts --limit 2`

## Test Paketi

- Slug: `23-soz-2-mebhas-1-nukte`
- Not: Bu görevde `23-soz-2-mebhas-2-nukte` test hedefi olarak kullanılmadı.

## Yapılanlar

- `scripts/validate-video-package.mjs` eklendi
- `scripts/build-video-batch.mjs` eklendi
- `package.json` içine `video:validate` ve `video:batch` scriptleri eklendi
- `video:validate --report` ile aktif paket doğrulandı
- `video:batch --limit 2` ile `short-001` ve `short-002` batch dosyasına alındı
- Batch JS syntax kontrolü yapıldı
- `npm run build` başarılı tamamlandı
- `docs/video-workflow.md` ve `docs/backlog.md` güncellendi

## n8n Notu

Bu görevde n8n çalıştırılmadı. Sonraki testte şu dosya n8n Load Input Code node'a yapıştırılacak:

`docs/video-tests/batches/23-soz-2-mebhas-1-nukte-shorts-batch-load-input.js`

## Sonraki Adım

Day-21: `video:batch --limit 2` ile n8n batch smoke test.
