# Day-05 Video Smoke Test Hazırlığı — Sevgi ve Korku

**Tarih:** 2026-05-03
**Durum:** Input hazır, n8n'e gönderim bekleniyor

---

## Amaç

Derin Okuma blog yazısından ilk gerçek landscape video workflow testi için `manual_scene_json` input dosyası hazırlamak. Narration standartlarını ve JSON formatını pratikte doğrulamak.

---

## Kaynak Yazı

| Alan | Değer |
|---|---|
| Dosya yolu | `src/content/blog/Sevgi-ve-Korku.md` |
| Blog başlığı | Sevgi ve Korku |
| Frontmatter açıklaması | 24. Söz - 5. Dal - 1. Meyve |
| Yayın tarihi | 2026-03-26 |
| Kısa özet | Risale-i Nur'un 24. Söz'ünden; insanın kalbine yerleştirilen sevgi ve korku kapasitesinin yanlış yönlendirildiğinde musibete, doğru yönlendirildiğinde saadete nasıl dönüştüğü. 27 bölümlü kapsamlı bir metin açıklaması. |

---

## Üretilen Input

| Alan | Değer |
|---|---|
| Dosya yolu | `docs/video-tests/inputs/sevgi-ve-korku-landscape-full-video.json` |
| Mode | `full_video` |
| Aspect ratio | `16:9` |
| Resolution | `1920x1080` |
| FPS | 30 |
| Dil | `tr` |
| Sahne sayısı | **37** |
| `job_id_hint` | `sevgi-ve-korku-landscape-day-05` |

---

## Format Kontrolü

- [x] JSON parse edildi — geçerli
- [x] `manual_scene_json` formatı kullanıldı
- [x] `mode: "full_video"` — `full_and_shorts` kullanılmadı
- [x] `scene_id` string (`"scene-001"` ... `"scene-037"`)
- [x] `narration` alanı kullanıldı
- [x] `text` alanı hiç kullanılmadı
- [x] `visual_note` İngilizce (tüm sahnelerde)
- [x] `keywords` İngilizce (tüm sahnelerde, 2–4 kelime)
- [x] Sahne sayısı 30–40 aralığında (37 sahne)
- [x] Türkçe karakterler korunmuş (ş, ğ, ü, ö, ı, ç)
- [x] Her sahnede `scene_id`, `title`, `narration`, `visual_note`, `keywords` var
- [x] Astro build hatasız tamamlandı

---

## Narration Yaklaşımı

- Yazının 27 bölümü 37 sahneye dönüştürüldü
- Her sahne yaklaşık 2–4 cümle; çok kısa veya çok uzun tutulmadı
- Ton: sakin, tefekkürî, herkese hitap eden
- Kitap/yazar adı doğrudan geçmiyor; herkesin anlayacağı açıklama diliyle yazıldı
- Görsel yönlendirme: ambient nature, calm cinematic — şehir kalabalığı, romantik sahne yok
- `visual_note` örnekleri: forest path, misty mountains, still water, sunrise, autumn leaves

---

## n8n'e Gönderme Notu

Dosya n8n `manual_scene_json` input formatında hazırlanmıştır. Kullanıcı bu dosyanın içeriğini `scene-blog-video` n8n workflow'una manuel olarak girmelidir.

**Gönderim öncesi yapılacaklar:**
1. `docs/video-tests/inputs/sevgi-ve-korku-landscape-full-video.json` dosyasını aç
2. Tüm içeriği kopyala
3. n8n workflow başlangıç node'una JSON olarak gir
4. Workflow'u başlat

**Beklenen pipeline davranışı:**
- n8n input'u validate edecek
- Her sahne için Türkçe TTS sesi üretecek
- Pexels'tan `visual_note` / `keywords` bazlı video arayacak
- Manifest yazacak
- Python renderer'ı tetikleyecek
- `renders/` altında `full-main.mp4` üretecek

---

## Açık Sorular (n8n smoke test sonrası netleşecek)

- n8n input'u kabul etti mi? Validation hatası var mı?
- Türkçe TTS sesi kaliteli çıktı mı? Edge TTS veya farklı provider kullanılıyor mu?
- Pexels sonuçları `visual_note` ile yeterince örtüşüyor mu? Nature/ambient arama başarılı mı?
- Subtitle timing doğru mu? Uzun narration sahneleri sorun yaratıyor mu?
- Görsel kalite yeterli mi? 37 sahnenin tamamı için video bulunabiliyor mu?
- Render süresi ne kadar?

---

## Sonraki Adım

n8n smoke test sonucu Day-06 günlük notunda raporlanacak. Eğer sorun çıkarsa ilgili sahneler ve format düzeltmesi de o raporla belgelenecek.
