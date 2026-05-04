# Day-11 Hazırlık Raporu — 23. Söz 1. Mebhas 4. Nokta

**Tarih:** 2026-05-04
**İçerik:** `23-soz-1-mebhas-4-nokta`
**Aşama:** Üretim hazırlığı (smoke test öncesi)

---

## Üretilen Dosyalar

### Landscape

| Dosya | Durum |
|---|---|
| `docs/video-tests/inputs/23-soz-1-mebhas-4-nokta-landscape-full-video.json` | ✓ Oluşturuldu |
| `docs/video-tests/inputs/23-soz-1-mebhas-4-nokta-landscape-load-input.js` | ✓ Oluşturuldu |
| `docs/video-tests/metadata/23-soz-1-mebhas-4-nokta-landscape-metadata.json` | ✓ Oluşturuldu |

**Landscape özeti:**
- 33 sahne, `render_mode: 'landscape'`, `audio_strategy: single_track`
- Başlık: "Muhtaçlık Bir Yük Mü, Kanat Mı?"
- `job_id_hint: '23-soz-1-mebhas-4-nokta-landscape-day-11'`

### Shorts

| Dosya | Durum |
|---|---|
| `docs/video-tests/shorts/23-soz-1-mebhas-4-nokta/23-soz-1-mebhas-4-nokta-shorts-package.json` | ✓ Oluşturuldu |
| `docs/video-tests/shorts/23-soz-1-mebhas-4-nokta/metadata/23-soz-1-mebhas-4-nokta-shorts-metadata.json` | ✓ Oluşturuldu |
| `load-inputs/short-001-load-input.js` — İman İnsanı Sultan Eder | ✓ Oluşturuldu |
| `load-inputs/short-002-load-input.js` — Neden Cahil Doğarız? | ✓ Oluşturuldu |
| `load-inputs/short-003-load-input.js` — Muhtaçlık Bir Kanat | ✓ Oluşturuldu |
| `load-inputs/short-004-load-input.js` — Dua Zayıflık Değil | ✓ Oluşturuldu |
| `load-inputs/short-005-load-input.js` — Ben Yapıyorum Yanılgısı | ✓ Oluşturuldu |
| `load-inputs/short-006-load-input.js` — Muhtaç Olduğu İçin Değerlidir | ✓ Oluşturuldu |

**Shorts özeti:**
- 6 Short, her biri 3 sahne, tahmini 55–65 saniye
- `render_mode: 'shorts'`, `audio_strategy: single_track`, `produce_both: false`
- Hashtag tutarlılığı: `description` sonundaki hashtag bloğu `hashtags` dizisiyle eşleşiyor

---

## Doğrulama Sonuçları

### JSON Doğrulama (python3 -m json.tool)

| Dosya | Sonuç |
|---|---|
| `landscape-full-video.json` | ✓ Geçerli |
| `landscape-metadata.json` | ✓ Geçerli |
| `shorts-package.json` | ✓ Geçerli |
| `shorts-metadata.json` | ✓ Geçerli |

### JS Sözdizimi Doğrulama (node -e "new Function(...)")

| Dosya | Sonuç |
|---|---|
| `landscape-load-input.js` | ✓ Geçerli |
| `short-001-load-input.js` | ✓ Geçerli |
| `short-002-load-input.js` | ✓ Geçerli |
| `short-003-load-input.js` | ✓ Geçerli |
| `short-004-load-input.js` | ✓ Geçerli |
| `short-005-load-input.js` | ✓ Geçerli |
| `short-006-load-input.js` | ✓ Geçerli |

### Astro Build

`npm run build` → 18 sayfa, hata yok. ✓

---

## Narration Dili Düzeltmesi (Day-11 ek)

Tüm Day-11 üretim dosyalarında narration dili bağımsız video anlatısına çevrildi.

**Düzeltilen kalıplar:**
- "bu metnin yaklaşımı farklı" → doğrudan anlatım
- "Bu noktanın en güçlü argümanı" → "Hayvan ile insan arasındaki fark çarpıcıdır"
- "metnin bakışı tersinedir" → "işin aslı tersinedir" (landscape + short-003)
- "bu metnin öğretisi farklı" → cümle kaldırıldı, anlam korundu
- "Metnin formülü net" → "Cevap açık"
- "Bu metnin cevabı net" → "Cevap açık" (sahne başlığı da düzeltildi)
- "metnin deyimiyle iman insanı... sultan" → "iman insanı... sultan kılar" (short-001)
- short-003 hook: "Metnin deyimiyle bunlar birer kanat" → "Bunlar aslında birer kanat"

**Güncellenen dosyalar:**
- `landscape-full-video.json` — 6 sahne narration düzeltildi
- `landscape-load-input.js` — eşleşen 6 sahne narration düzeltildi
- `shorts-package.json` — short-001 scene-003, short-003 scene-001 narration ve short-003 hook düzeltildi
- `shorts-metadata.json` — short-003 hook düzeltildi
- `short-001-load-input.js` — scene-003 narration düzeltildi
- `short-003-load-input.js` — scene-001 narration ve job.description düzeltildi

**Prompt şablonları güncellendi:**
- `docs/prompts/landscape-narration.md` — "Kaynak Metni Bağımsız Anlatıya Çevirme Kuralı" eklendi
- `docs/prompts/shorts-narration.md` — aynı kural eklendi

**Grep kontrolü:** sıfır eşleşme. Tüm yasaklı kalıplar temizlendi.

**Final cleanup (ek düzeltmeler):**
- scene-001: "Bu soruya verilen cevaplar..." → "İnsan çoğu zaman kendini biyolojiyle..." (JSON + JS)
- scene-011: "birinci vazifeyi" → "birinci vazifesi" (JSON + JS)
- scene-013: "ikinci vazifeyi" → "ikinci vazifesi" (JSON + JS)
- scene-028: "Verilen şeyi veren kabul etmemek" → "Verilen nimetin kaynağını kabul etmemek" (JSON + JS)
- landscape-metadata.json thumbnail: "ZAYIFLIĞINı" → "ZAYIFLIĞINI"
- shorts-package.json + shorts-metadata.json: "DUA FITTRAT" → "DUA FITRATTIR"

---

## Sonraki Adım

Landscape için smoke test: `23-soz-1-mebhas-4-nokta-landscape-load-input.js` n8n'e yüklenip çalıştırılacak.
Shorts smoke test: `short-001-load-input.js` ile başlanacak (Day-10 standardına göre).
