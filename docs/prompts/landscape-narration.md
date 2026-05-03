# Landscape Narration Prompt Şablonu

Bu şablon, Derin Okuma blog yazısından 8–12 dakikalık landscape video narration üretmek için kullanılır.

---

## Kullanım

1. Aşağıdaki promptu ChatGPT veya Claude'a ver
2. `[BLOG YAZISI]` bölümüne blog yazısını yapıştır
3. Çıktıyı scene-blog-video `manual_scene_json` formatında al
4. `input_version`, `input_type`, `job`, `render_preferences` wrapper'ını ekle
5. n8n'e gönder

---

## Prompt

```
Sana bir blog yazısı vereceğim. Bu blog yazısını, YouTube için yaklaşık 8–12 dakikalık bir landscape video narration'ına dönüştür. Çıktı, belirtilen JSON formatında olmalı.

Uyulması gereken kurallar:

1. ANLATIM DİLİ
   - Dinleyici, metnin kaynağını (yazar adını, eseri) bilmiyor olabilir.
   - Kitaptan doğrudan alıntı gibi yazma.
   - Herkese hitap eden, anlaşılır bir açıklama dili kullan.
   - Sakin, derin ve tefekkürî bir ton koru.
   - Dramatik veya aşırı duygusal bir dil kullanma.

2. SAHNE YAPISI
   - Toplam 30 ile 40 arasında sahne üret.
   - Her sahne akıcı, bağımsız okunabilir bir anlatım birimi olmalı.
   - Tek cümlelik çok kısa sahneler yazma.
   - Çok uzun paragraflar da yazma — sahne başına 2–5 cümle idealdir.
   - Sahneler anlatım bütünlüğünü korumalı; birinden diğerine geçiş doğal hissettirmeli.

3. visual_note ALANI
   - Her sahne için kısa bir görsel yönlendirme yaz.
   - Bu alan Pexels'tan stok video seçimi için kullanılıyor.
   - İngilizce yaz (Pexels API arama sorgusu için).
   - Doğa, mimari, insan, soyut gibi kategorilerden seç.
   - Somut ve aranabilir kelimeler kullan.
   - Örnek: "quiet forest path, soft morning light, slow camera movement"

4. keywords ALANI
   - Her sahne için 2–4 anahtar kelime.
   - İngilizce yaz.
   - Sahnenin görsel temasını desteklemeli.
   - Örnek: ["forest path", "morning light", "calm nature"]

5. ÇIKTI KURALLARI
   - Sadece geçerli JSON döndür; açıklama, yorum veya ek metin yazma.
   - Türkçe karakterleri koru (ş, ğ, ü, ö, ı, ç).
   - `narration` alanını kullan, `text` alanını kullanma.
   - `scene_id` string formatında olsun: "scene-001", "scene-002" ...
   - JSON içine yorum satırı yazma.

Çıktı formatı:

[
  {
    "scene_id": "scene-001",
    "title": "Sahne Başlığı",
    "narration": "Anlatım metni buraya gelecek. Doğal, akıcı ve anlaşılır bir Türkçeyle yazılmış olmalı.",
    "visual_note": "Descriptive English phrase for stock video search.",
    "keywords": ["keyword1", "keyword2", "keyword3"]
  },
  ...
]

Blog yazısı:

[BLOG YAZISI]
```

---

## Çıktıya Eklenmesi Gereken Wrapper

ChatGPT'den gelen sahne dizisini n8n'e göndermeden önce şu wrapper içine al:

```json
{
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "job": {
    "title": "BAŞLIK",
    "description": "KISA AÇIKLAMA",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "slug-tarzı-kısa-isim"
  },
  "render_preferences": {
    "mode": "full_video",
    "subtitles_enabled": true,
    "target_aspect_ratio": "16:9",
    "target_resolution": "1920x1080",
    "target_fps": 30,
    "voice_language": "tr"
  },
  "scenes": [
    ... ChatGPT çıktısı buraya ...
  ]
}
```

---

## Kontrol Listesi (Göndermeden Önce)

- [ ] Sahne sayısı 30–40 arasında
- [ ] Her sahnede `scene_id`, `narration`, `visual_note`, `keywords` var
- [ ] `visual_note` İngilizce
- [ ] `keywords` İngilizce
- [ ] `narration` Türkçe ve okunabilir
- [ ] JSON geçerli (validator ile kontrol et)
- [ ] Türkçe karakterler korunmuş
- [ ] `job.title`, `job.job_id_hint` doldurulmuş
