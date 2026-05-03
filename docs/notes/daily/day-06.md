# Day-06 — Single Track Load Input Hotfix

**Tarih:** 2026-05-03
**Durum:** Load Input JS hazır, n8n'e gönderim bekleniyor

---

## Bugünün Amacı

Day-05 smoke testinde tespit edilen TTS sorununu gidermek: çıplak JSON formatını n8n Load Input Code node formatına dönüştürmek ve `audio_strategy.single_track` stratejisini eklemek.

---

## Day-05'te Görülen Sorun

Day-05 input'u (`sevgi-ve-korku-landscape-full-video.json`) çıplak `manual_scene_json` JSON olarak hazırlanmıştı. Pipeline bu formatta `audio_strategy` alanı göremediği için her sahneyi ayrı ayrı TTS yaptırdı. Uzun landscape videolarda istenmeyen bu davranış ses tutarsızlığına yol açtı.

Gerçek n8n Load Input node'u şunu bekliyor:
```js
return [{ json: { raw_input: rawInput } }]
```

---

## Yapılan Hotfix

Day-05 JSON'undaki 37 sahne aynen aktarılarak n8n Code node JS formatında yeni bir input dosyası oluşturuldu.

Eklenen alanlar:
- `audio_strategy.mode: 'single_track'`
- `audio_strategy.timing_strategy: 'elevenlabs_timestamps'`
- `audio_strategy.join_separator: '\n\n'`
- `visual_mode: 'ambient'`
- `render_preferences.render_mode: 'landscape'`
- `render_preferences.produce_both: false`
- `reuse_existing_audio` / `reuse_existing_video` (disabled)
- `return [{ json: { raw_input: rawInput } }]` wrapper

---

## Oluşturulan Dosya

| Dosya | Açıklama |
|---|---|
| `docs/video-tests/inputs/sevgi-ve-korku-landscape-load-input.js` | n8n Load Input Code node'a yapıştırılacak JS dosyası |
| `docs/video-tests/reports/day-06-single-track-load-input.md` | Hotfix raporu |
| `docs/notes/daily/day-06.md` | Bu dosya |

Güncellenen dosyalar:

| Dosya | Değişiklik |
|---|---|
| `docs/video-workflow.md` | Load Input JS formatı ve single_track TTS stratejisi bölümü eklendi |
| `docs/prompts/scene-json-format.md` | n8n Load Input Code Node Formatı bölümü eklendi |
| `docs/backlog.md` | Day-06 maddeleri güncellendi |

---

## Doğrulama Sonucu

| Kontrol | Sonuç |
|---|---|
| JS syntax | OK |
| Sahne sayısı | 37 |
| `audio_strategy.mode` | `single_track` |
| `timing_strategy` | `elevenlabs_timestamps` |
| `render_mode` | `landscape` |
| `produce_both` | `false` |

---

## n8n'e Gönderme Durumu

`docs/video-tests/inputs/sevgi-ve-korku-landscape-load-input.js` dosyası hazır.

**Gönderim adımları:**
1. Dosyayı aç
2. Tüm içeriği kopyala
3. n8n "Load Input" Code node'una yapıştır
4. Workflow'u başlat

---

## Açık Sorular

1. `single_track` modunda ElevenLabs timestamp senkronizasyonu doğru mu?
2. 37 sahnelik birleşik narration ElevenLabs karakter/süre limitine takılıyor mu?
3. Subtitle timing bu modda ne kadar başarılı?
4. Render süresi Day-05'e kıyasla nasıl değişti?

---

## Sonraki Gün Önerisi (Day-07)

**Öncelik 1:** Day-06 Load Input JS ile n8n smoke test yap — başarı veya hata, her iki durumda da belge

**Öncelik 2:** ElevenLabs tek track TTS kalitesini ve subtitle timing'ini değerlendir

**Öncelik 3:** Test başarılıysa Shorts aşamasına geç
