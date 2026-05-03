# Day-06 Single Track Load Input Hotfix

**Tarih:** 2026-05-03
**Durum:** Load Input JS hazır, n8n'e gönderim bekleniyor

---

## Sorun

Day-05'te çıplak `manual_scene_json` JSON formatıyla video çıktısı alındı. Ancak TTS sahne sahne çalıştı — her sahne için ayrı ElevenLabs isteği yapıldı. Bu durum ses kalitesinde tutarsızlığa ve uzun videolarda gereksiz gecikmeye yol açtı.

---

## Sebep

Day-05 input'u (`sevgi-ve-korku-landscape-full-video.json`) n8n'e çıplak JSON olarak hazırlanmıştı:

- `audio_strategy` alanı yoktu — pipeline sahne bazlı TTS davranışına düştü
- `raw_input` wrapper kullanılmamıştı
- n8n Load Input Code node formatı uygulanmamıştı

Gerçek n8n Load Input node'u şu yapıyı bekliyor:
```js
return [{ json: { raw_input: rawInput } }]
```

---

## Çözüm

`sevgi-ve-korku-landscape-load-input.js` oluşturuldu.

Day-05'teki 37 sahne aynen aktarıldı. Wrapper ve `audio_strategy` alanları eklendi.

---

## Teknik Fark

| | Day-05 (Önceki) | Day-06 (Yeni) |
|---|---|---|
| Format | Çıplak JSON | n8n Code node JS |
| Wrapper | Yok | `return [{ json: { raw_input: rawInput } }]` |
| `audio_strategy` | Yok | `mode: 'single_track'` |
| `timing_strategy` | — | `'elevenlabs_timestamps'` |
| `join_separator` | — | `'\n\n'` |
| `visual_mode` | Yok | `'ambient'` |
| `render_preferences.render_mode` | Yok | `'landscape'` |
| `produce_both` | Yok | `false` |
| TTS davranışı | Sahne bazlı | Tek track |

---

## Doğrulama

| Kontrol | Sonuç |
|---|---|
| JS syntax (node `new Function`) | OK |
| Sahne sayısı | 37 |
| `audio_strategy` var mı? | Evet |
| `audio_strategy.mode` | `single_track` |
| `timing_strategy` | `elevenlabs_timestamps` |
| `render_preferences.mode` | `full_video` |
| `render_preferences.render_mode` | `landscape` |
| `produce_both` | `false` |
| `visual_mode` | `ambient` |
| `job_id_hint` | `sevgi-ve-korku-landscape-day-06-single-track` |

---

## Üretilen Dosya

`docs/video-tests/inputs/sevgi-ve-korku-landscape-load-input.js`

Day-05 referans dosyası silinmedi: `docs/video-tests/inputs/sevgi-ve-korku-landscape-full-video.json`

---

## Sonraki Test

Bu dosya n8n "Load Input" Code node'una yapıştırılıp smoke test tekrar çalıştırılacak.

**Beklenen pipeline davranışı:**
1. n8n Load Input node `raw_input`'u okur
2. Input validate edilir
3. 37 sahnenin `narration` metni `\n\n` ile birleştirilerek ElevenLabs'e **tek istek** gönderilir
4. ElevenLabs word-level timestamp ile senkronize ses + subtitle üretilir
5. Pexels'tan `visual_note` / `keywords` bazlı ambient video aranır
6. Python renderer manifest'i okuyarak landscape video çıktısı üretir

---

## Açık Sorular

1. `single_track` modunda ElevenLabs timestamp senkronizasyonu doğru mu?
2. 37 sahnelik birleşik narration ElevenLabs limit içinde mi?
3. Subtitle timing bu modda ne kadar başarılı?
4. Render süresi Day-05'e kıyasla nasıl?
