# Day-21 — video:batch --limit 2 n8n Smoke Test Başarısı

Tarih: 2026-05-16

---

## Test Edilen Dosya

`docs/video-tests/batches/23-soz-2-mebhas-1-nukte-shorts-batch-load-input.js`

## Test Edilen Shorts

| Short | Başlık | Sonuç |
|---|---|---|
| short-001 | Kalp Neden Tatmin Olmaz? | Başarılı |
| short-002 | Allah'a Kul Olmak Neden Yükseltir? | Başarılı |

## Beklenen Davranış

- Tek batch Load Input JS dosyası n8n Load Input Code node'a yapıştırılacak
- n8n 2 item alacak
- Her item ayrı job olarak çalışacak
- İki ayrı output dosyası oluşacak
- Output klasörleri ve job ID'leri çakışmayacak

## Gerçek Davranış

- 2 item n8n'e iletildi
- `short-001` ve `short-002` ayrı job olarak çalıştı
- İki video ayrı output dosyası olarak oluştu
- Output klasörleri çakışmadı
- İçerik karışması görülmedi

## Önceki Sorun

İlk denemede yalnızca `short-001` oluşmuştu. Bunun sebebi `scene-blog-video` n8n workflow'unda `Validate Input Structure` başta olmak üzere tüm Code node'ların `items[0]` ile sabit tek item varsayımıyla yazılmış olmasıydı. `items[0]` + `return [{ json: ... }]` kombinasyonu kaç item gelirse gelsin her zaman 1 item çıktısı üretiyordu.

## Düzeltme Notu

`scene-blog-video` workflow tarafında 18 Code node güncellendi:

- Tüm Code node'lar `items.map()` / `items.flatMap()` mantığına geçirildi
- `Generate Job Metadata` node'u `job_id_hint` alanını okuyacak şekilde güncellendi — batch'teki her item kendi benzersiz `job_id`'siyle oluşuyor
- Polling loop context node'ları (Evaluate Job Status, Evaluate Render Job Status) `.first()` yerine `.all()[idx]` ile doğru item bağlamını kullanıyor
- Tek item çalışma davranışı bozulmadı

Değiştirilen workflow: `scene-blog-video/workflows/day-12-reuse-audio-workflow.json`

## Karar

- `video:batch --limit 2` n8n smoke test başarılı kabul edildi
- Batch dosyası formatı ve yapısı doğrulandı
- n8n workflow artık en az 2 Shorts item'ını ayrı job olarak işleyebiliyor
- 6 Shorts batch testine geçmeden önce güvenli ara adım: `--limit 4`

## Sonraki Adım

Day-22 önerisi:

```bash
npm run video:batch -- --slug 23-soz-2-mebhas-1-nukte --type shorts --limit 4 --force
```

Ardından n8n'de 4 item smoke test yapılmalı.

4 item da başarılı olursa sonraki adım 6 Shorts batch testidir.
