# Day-21 — 23. Söz - 2. Mebhas - 3. Nükte Video Paketi

## Bugünün Amacı

`23. Söz - 2. Mebhas - 3. Nükte` yazısı için landscape + Shorts üretim dosyalarını doldurmak.

## Tamamlanan

- Landscape: 38 sahne narration ile dolduruldu
- Landscape metadata dolduruldu
- 6 Shorts paketi üretildi ve dolduruldu
- Shorts metadata dolduruldu
- Tüm Load Input JS dosyaları dolduruldu (1 landscape + 6 shorts)

## Doğrulama Sonuçları

- JSON parse: 4/4 PASS
- JS syntax: 7/7 PASS
- Yasaklı kalıp: TEMİZ

## n8n İçin Sıradaki

Landscape: `docs/video-tests/inputs/23-soz-2-mebhas-3-nukte-landscape-load-input.js`

Shorts: `docs/video-tests/shorts/23-soz-2-mebhas-3-nukte/load-inputs/short-001-load-input.js`

## Seçilen Başlıklar

- Landscape: "İnsan Neden Hiçbir Zaman Tam Dolu Olamaz?"
- short-001: İnsan Neden Hiçbir Zaman Tam Dolu Olamaz?
- short-002: Bin Altını Bir Kat Elbiseye Vermek Ne Demektir?
- short-003: Aziz Misafir: Dünyaya Nasıl Bakmalısın?
- short-004: İnsan Neden Hayvandan Daha Dertlidir?
- short-005: Dua Neden İnsanın Asıl Silahıdır?
- short-006: Ahsen-i Takvim'den Serçeye Düşmek Ne Demektir?

---

## video:batch --limit 2 n8n Smoke Test Sonucu

Day-20'de üretilen batch dosyası (`23-soz-2-mebhas-1-nukte-shorts-batch-load-input.js`) Day-21'de n8n'de test edildi.

### İlk Deneme

- Sadece `short-001` üretildi
- Sebep: `scene-blog-video` workflow Code node'ları `items[0]` / `return [{ json: ... }]` ile tek item varsayımıyla yazılmıştı

### Düzeltme

`scene-blog-video/workflows/day-12-reuse-audio-workflow.json` içinde 18 Code node güncellendi:
- `items[0]` → `items.map()` / `items.flatMap()`
- `job_id_hint` desteği eklendi (her batch item ayrı job ID alıyor)
- Polling loop context node'ları `.first()` → `.all()[idx]`

### Tekrar Test

- `short-001` ve `short-002` ayrı job olarak işlendi
- İki video ayrı output dosyası olarak oluştu
- Output çakışması yok, içerik karışması yok

**Karar: `video:batch --limit 2` n8n smoke test başarılı.**

Bkz: `docs/video-tests/reports/day-21-video-batch-limit-2-n8n-success.md`
