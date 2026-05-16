# Day-22 — video:batch --limit 4 n8n Smoke Test Başarısı

Tarih: 2026-05-16

---

## Test Edilen Batch

- Slug: `23-soz-2-mebhas-1-nukte`
- Type: `shorts`
- Limit: `4`
- Run ID: `day22-limit4-d`

## Kullanılan Komut

```bash
npm run video:batch -- --slug 23-soz-2-mebhas-1-nukte --type shorts --limit 4 --run-id day22-limit4-d --force
```

## Test Edilen Shorts

| Short | Sonuç |
|---|---|
| short-001 | Başarılı |
| short-002 | Başarılı |
| short-003 | Başarılı |
| short-004 | Başarılı |

## Beklenen Davranış

- Tek batch dosyası n8n'e yapıştırılacak
- n8n 4 item alacak
- Her item ayrı job olarak çalışacak
- 4 ayrı output dosyası oluşacak

## Gerçek Davranış

- 4 item işlendi
- 4 ayrı job oluştu
- 4 Shorts videosu üretildi
- Output çakışması olmadı
- İçerik karışması olmadı

## Çözülen Teknik Sorunlar

- `--run-id` ile job_id çakışması önlendi
- n8n workflow item handling batch-safe hale getirildi
- `source_job_id`, `job_id`, `prepare_video_async_job_id` ve `render_job_id` ayrımları netleştirildi
- Render polling `render_job_id` üzerinden çalışacak hale getirildi
- Source job root korunurken async polling kimliği ayrı tutuldu

## Karar

- `video:batch --limit 4` n8n smoke test başarılı kabul edildi
- Batch pipeline 4 Shorts'a kadar doğrulandı
- 6 Shorts full batch testine geçilebilir

## Sonraki Adım

Day-23 önerisi:

```bash
npm run video:batch -- --slug 23-soz-2-mebhas-1-nukte --type shorts --limit 6 --run-id day23-full6-a --force
```

veya `--limit` vermeden:

```bash
npm run video:batch -- --slug 23-soz-2-mebhas-1-nukte --type shorts --run-id day23-full6-a --force
```

Sonra n8n'de tam 6 Shorts batch test yapılmalı.
