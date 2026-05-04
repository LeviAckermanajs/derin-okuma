# Day-09 — Sevgi ve Korku Shorts Üretim Hazırlığı

**Tarih:** 2026-05-04
**Durum:** Tamamlandı — n8n smoke test bekleniyor

---

## Bugünün Amacı

Day-08'de YouTube metadata standardı oluşturuldu. Bugün Derin Okuma tarafında ilk gerçek Shorts üretim hazırlığı yapıldı. `Sevgi ve Korku` içeriğinden 6 bağımsız Shorts üretmek, her Shorts için Load Input JS hazırlamak ve metadata standartına uygun yayın bilgilerini üretmek.

---

## Kullanılan Kaynaklar

- `src/content/blog/Sevgi-ve-Korku.md` — kaynak blog yazısı
- `docs/video-tests/inputs/sevgi-ve-korku-landscape-load-input.js` — Load Input JS format referansı
- `docs/prompts/youtube-metadata.md` — Day-08 metadata standardı
- `docs/prompts/shorts-narration.md` — Shorts içerik kuralları
- `docs/prompts/scene-json-format.md` — sahne format spesifikasyonu

---

## Shorts Temaları

Blog yazısından çıkarılan 6 Shorts teması:

1. **Kalbin kapasitesi** — büyük sevme gücünü küçük şeylere dökmek onu kırar
2. **Halktan korku neden yorar** — merhametleri sınırlı, güçleri geçici
3. **Fanîye bağlanan kalbin yaralanması** — ellerin yapıştığı şeyler gidince eli de parçalıyor
4. **Allah korkusunda lezzet** — dağınık korkular tek merkeze toplanır
5. **Allah hesabına sevmek** — dünyayı terk değil, yerli yerine koymak
6. **Mecazî aşkın şikâyeti** — sonsuzluk arzunu fanîye yüklemenin bedeli

---

## Üretilen Shorts Sayısı

6 Shorts. Her biri 3 sahne, tahmini 55–70 saniye.

---

## Oluşturulan Dosyalar

| Dosya | Tür |
|---|---|
| `docs/video-tests/shorts/sevgi-ve-korku/sevgi-ve-korku-shorts-package.json` | Shorts paketi JSON |
| `docs/video-tests/shorts/sevgi-ve-korku/metadata/sevgi-ve-korku-shorts-metadata.json` | YouTube metadata JSON |
| `docs/video-tests/shorts/sevgi-ve-korku/load-inputs/short-001-load-input.js` | n8n Load Input JS |
| `docs/video-tests/shorts/sevgi-ve-korku/load-inputs/short-002-load-input.js` | n8n Load Input JS |
| `docs/video-tests/shorts/sevgi-ve-korku/load-inputs/short-003-load-input.js` | n8n Load Input JS |
| `docs/video-tests/shorts/sevgi-ve-korku/load-inputs/short-004-load-input.js` | n8n Load Input JS |
| `docs/video-tests/shorts/sevgi-ve-korku/load-inputs/short-005-load-input.js` | n8n Load Input JS |
| `docs/video-tests/shorts/sevgi-ve-korku/load-inputs/short-006-load-input.js` | n8n Load Input JS |
| `docs/video-tests/reports/day-09-sevgi-ve-korku-shorts-prep.md` | Günlük rapor |
| `docs/notes/daily/day-09.md` | Bu dosya |
| `docs/backlog.md` | Güncellendi |

---

## Doğrulama Sonucu

- Package JSON: geçerli (`python3 -m json.tool`)
- Metadata JSON: geçerli (`python3 -m json.tool`)
- 6 Load Input JS: hepsi geçerli (`node -e "new Function(..."`)
- Manuel format kontrolleri: tüm checklistler geçti

---

## n8n'e Gönderme Durumu

Henüz gönderilmedi. Dosyalar hazır.

İlk test için `short-001-load-input.js` n8n Load Input Code node'a yapıştırılacak.

---

## Açık Sorular

- Shorts TTS timing, landscape'e kıyasla nasıl çalışacak? (daha kısa narration)
- 9:16 dikey video renderer tarafından doğru üretilecek mi?
- Subtitle konumu Shorts ekranında okunabilir mi?
- Görsel seçim kısa formata uygun mu? (her sahne ~15–25 saniye)

---

## Sonraki Gün Önerisi

**Day-10:** `short-001-load-input.js` ile n8n Shorts smoke test.
- Beklenen: video üretildi, 9:16 format doğru, TTS timing doğru, subtitle okunabilir
- Başarı kriteri landscape smoke testine benzer şekilde belirlenecek
- Kapsam dışı gözlemler (renderer tarafı) yine `scene-blog-video` reposuna bırakılacak
