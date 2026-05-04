# Day-09 Sevgi ve Korku Shorts Üretim Hazırlığı

**Tarih:** 2026-05-04
**Durum:** Tamamlandı — n8n testi bekleniyor

---

## Amaç

`Sevgi ve Korku` blog yazısından 6 bağımsız YouTube Shorts üretmek için:
- Shorts narration paketi hazırlamak
- Her Shorts için n8n Load Input JS dosyası oluşturmak
- YouTube metadata standartına uygun başlık, açıklama, hashtag üretmek

---

## Kaynaklar

| Kaynak | Kullanım |
|---|---|
| `src/content/blog/Sevgi-ve-Korku.md` | Ana içerik — tema, narration malzemesi |
| `docs/video-tests/inputs/sevgi-ve-korku-landscape-load-input.js` | Load Input JS format referansı |
| `docs/prompts/youtube-metadata.md` | Day-08 metadata standardı |
| `docs/prompts/shorts-narration.md` | Shorts içerik kuralları |

---

## Üretilen Shorts Paketi

| Short ID | Tema | Hook | Sahne Sayısı | Tahmini Süre |
|---|---|---|---|---|
| short-001 | Kalbin kapasitesi — büyük sevme gücünü küçük şeylere dökmek onu kırar | "İnsan bazen doğru insanı değil, yanlış yere yüklediği sevgiyi kaybeder." | 3 | ~60 sn |
| short-002 | Halktan korku neden yorar — merhametleri sınırlı | "İnsanların gözünden bu kadar korkmak seni neden yoruyor? Çünkü onlar sana merhamet etmez." | 3 | ~55 sn |
| short-003 | Fanîye bağlanan kalbin yaralanması | "Kalp sevdiği şeylere elleriyle yapışır. Ama o şeyler gidince, elini de parçalayarak gider." | 3 | ~65 sn |
| short-004 | Allah korkusunda lezzet — dağınık korkular tek merkeze toplanır | "Allah'tan korkan insan, başka korkuların esaretinden kurtulmaya başlar." | 3 | ~70 sn |
| short-005 | Allah hesabına sevmek — dünyayı terk değil, yerli yerine koymak | "Allah hesabına sevmek dünyayı terk etmek değil. Dünyayı yerli yerine koymaktır." | 3 | ~65 sn |
| short-006 | Mecazî aşkın şikâyeti — sonsuzluk arzunu fanîye yüklemek | "Neden mecazî aşklarda çoğunlukla şikâyet var? Çünkü sen sonsuzluk arzunu fanî birine yükledin." | 3 | ~60 sn |

---

## Üretilen Dosyalar

| Dosya | Açıklama |
|---|---|
| `docs/video-tests/shorts/sevgi-ve-korku/sevgi-ve-korku-shorts-package.json` | Tüm Shorts paketi — 6 Shorts, sahne detaylarıyla |
| `docs/video-tests/shorts/sevgi-ve-korku/metadata/sevgi-ve-korku-shorts-metadata.json` | YouTube metadata — başlık alternatifleri, açıklama, hashtagler |
| `docs/video-tests/shorts/sevgi-ve-korku/load-inputs/short-001-load-input.js` | n8n Load Input — short-001 |
| `docs/video-tests/shorts/sevgi-ve-korku/load-inputs/short-002-load-input.js` | n8n Load Input — short-002 |
| `docs/video-tests/shorts/sevgi-ve-korku/load-inputs/short-003-load-input.js` | n8n Load Input — short-003 |
| `docs/video-tests/shorts/sevgi-ve-korku/load-inputs/short-004-load-input.js` | n8n Load Input — short-004 |
| `docs/video-tests/shorts/sevgi-ve-korku/load-inputs/short-005-load-input.js` | n8n Load Input — short-005 |
| `docs/video-tests/shorts/sevgi-ve-korku/load-inputs/short-006-load-input.js` | n8n Load Input — short-006 |

---

## Format Doğrulama Sonucu

| Kontrol | Sonuç |
|---|---|
| Package JSON parse edildi (`python3 -m json.tool`) | Geçti |
| Metadata JSON parse edildi (`python3 -m json.tool`) | Geçti |
| short-001-load-input.js syntax (`node -e "new Function(..."`) | Geçti |
| short-002-load-input.js syntax | Geçti |
| short-003-load-input.js syntax | Geçti |
| short-004-load-input.js syntax | Geçti |
| short-005-load-input.js syntax | Geçti |
| short-006-load-input.js syntax | Geçti |

### Manuel Format Kontrolleri

- [x] 6 Shorts üretildi
- [x] Her Shorts'ta hook var
- [x] Her Shorts'ta title/description/hashtags var
- [x] Her Shorts 3 sahneden oluşuyor (2–5 arası kural karşılandı)
- [x] Her sahnede `scene_id`, `narration`, `visual_note`, `keywords` var
- [x] `visual_note` İngilizce
- [x] `keywords` İngilizce
- [x] `text` alanı kullanılmadı — sadece `narration` kullanıldı
- [x] Her Load Input JS `raw_input` wrapper içeriyor
- [x] Her Load Input JS `mode: 'shorts'`
- [x] Her Load Input JS `render_mode: 'shorts'`
- [x] Her Load Input JS `produce_both: false`
- [x] `#derinokuma` ve `#shorts` her Shorts'ta var

---

## n8n'e Gönderme Notu

Bu dosyalar henüz n8n'de çalıştırılmadı. İçerik ve format hazır; smoke test bekleniyor.

**İlk test için:** `short-001-load-input.js` dosyasını n8n Load Input Code node'a yapıştır.

İlk test başarılıysa diğer Shorts'lar sırayla gönderilebilir.

---

## Açık Sorular

- İlk Shorts n8n tarafından kabul edilecek mi?
- Shorts TTS timing, landscape'e kıyasla nasıl olacak? (3 sahne, daha kısa narration)
- Dikey video (9:16) renderer tarafından doğru üretilecek mi?
- Subtitle konumu Shorts ekranında okunabilir mi?
- Görsel seçim kısa ve dikey formata uygun mu?

---

## Sonraki Adım

**Day-10 önerisi:** `short-001-load-input.js` ile n8n Shorts smoke test — başarılıysa tüm Shorts paketi gönderilir.
