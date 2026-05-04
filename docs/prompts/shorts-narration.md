# Shorts Narration Prompt Şablonu

Bu şablon, Derin Okuma blog yazısından veya landscape narration metninden 5–6 adet viral Shorts üretmek için kullanılır.

---

## Kullanım

1. Aşağıdaki promptu ChatGPT veya Claude'a ver
2. `[KAYNAK METİN]` bölümüne blog yazısını veya landscape narration'ı yapıştır
3. Çıktıyı her Shorts için ayrı bir blok olarak al
4. Her Shorts için scene JSON'ı scene-blog-video'ya gönder

---

## Prompt

```
Sana bir içerik metni vereceğim. Bu metinden 5 ila 6 adet YouTube Shorts üret. Her Shorts bağımsız ve kendi başına anlamlı olmalı.

Uyulması gereken kurallar:

1. HOOK KURALI
   - Hook, ilk 3–5 saniyede izleyicinin dikkatini çekmeli.
   - Soru, tespit veya çarpıcı bir cümle olabilir.
   - Clickbait yapma; içeriğe dürüst bir giriş yap.
   - Manevî veya felsefi içeriği ucuzlaştırma.
   - Örnek (iyi): "İnsan bazen doğru insanı değil, yanlış yerden tuttuğu sevgiyi kaybeder."
   - Örnek (kötü): "Bunu bilmek seni değiştirecek!"

2. İÇERİK KURALI
   - Her Shorts tek bir ana fikre, tek bir duyguya veya tek bir kırılma noktasına odaklanmalı.
   - Sakin, derin ve tefekkürî ton korunsun.
   - 45 ile 90 saniye arasında bir uzunluk hedefle.

3. BAŞLIK KURALI
   - YouTube Shorts için uygun bir başlık yaz.
   - Vurucu ama clickbait olmayan tarzda.
   - 5–8 kelime civarı.

4. AÇIKLAMA KURALI
   - 1–2 cümle açıklama.
   - Hashtagler ekle: #derinokuma #tefekkür #iman ve içeriğe uygun diğerleri.

5. SAHNE KURALI
   - Her Shorts için 2 ila 5 sahne yaz.
   - Her sahnede narration, visual_note ve keywords alanları zorunlu.
   - `visual_note` İngilizce olsun (Pexels arama için).
   - `keywords` İngilizce, 2–4 kısa anahtar kelime içersin (Pexels arama kalitesini destekler).
   - Sahneler akıcı ve doğal geçişli olsun.

6. ÇIKTI KURALLARI
   - Sadece geçerli JSON döndür; açıklama veya ek metin yazma.
   - Türkçe karakterleri koru (ş, ğ, ü, ö, ı, ç).
   - `narration` alanını kullan.
   - `scene_id` string: "scene-001", "scene-002" ...
   - JSON içine yorum satırı yazma.

Çıktı formatı:

[
  {
    "short_id": "short-001",
    "hook": "Hook cümlesi — izleyicinin dikkatini ilk saniyede çekecek.",
    "title": "YouTube Shorts başlığı",
    "description": "Kısa açıklama. #derinokuma #tefekkür #iman",
    "scenes": [
      {
        "scene_id": "scene-001",
        "narration": "Türkçe anlatım metni.",
        "visual_note": "calm forest path, soft morning light, cinematic mood",
        "keywords": ["forest path", "morning light", "calm nature"]
      },
      {
        "scene_id": "scene-002",
        "narration": "Devam eden anlatım.",
        "visual_note": "gentle light through clouds, slow movement.",
        "keywords": ["soft light", "nature", "peaceful"]
      }
    ]
  },
  ...
]

Kaynak metin:

[KAYNAK METİN]
```

---

## Her Shorts için n8n Wrapper

Her Shorts'u ayrı bir n8n job olarak göndermek için:

```json
{
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "job": {
    "title": "SHORTS BAŞLIĞI",
    "description": "HOOK CÜMLESİ",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "shorts-slug-001"
  },
  "render_preferences": {
    "mode": "shorts",
    "subtitles_enabled": true,
    "target_aspect_ratio": "9:16",
    "target_resolution": "1080x1920",
    "target_fps": 30,
    "voice_language": "tr"
  },
  "scenes": [
    ... Shorts'un scene dizisi buraya ...
  ]
}
```

---

## Kaynak Metni Bağımsız Anlatıya Çevirme Kuralı

Kaynak yazı doğrudan açıklanmaz; anlamı bağımsız video narration'a dönüştürülür.

**İzleyici kaynak metni görmüyor kabul edilir.** Hook, narration ve description, dinleyicinin kitabı veya yazarı bilmediği varsayımıyla yazılır.

Narration ve hook içinde şu kalıplardan kaçınılır:
- "bu metin", "metnin dediği", "metnin deyimiyle"
- "bu noktada", "bu bölüm"
- "verilen cevap", "verilen örnek"
- "şu cümle", "yazar burada", "kitap burada"
- "burada anlatılmak istenen"

Bunun yerine doğrudan anlatım kullanılır:
- "İnsan çoğu zaman..."
- "Bazen şunu fark ederiz..."
- "İman insana sadece bilgi vermez..."
- "Kalp, ancak doğru merkeze bağlandığında..."

**Örnek dönüşüm:**

Sorunlu hook:
```
Zayıflık ve muhtaçlık birer yük mü? Hayır. Metnin deyimiyle bunlar birer kanat.
```

Düzeltilmiş hook:
```
Zayıflık ve muhtaçlık birer yük mü? Hayır. Bunlar aslında birer kanat.
```

Sorunlu narration:
```
Ve bu yüzden metnin deyimiyle iman insanı hem insan eder, hem sultan.
```

Düzeltilmiş narration:
```
Ve bu yüzden iman insanı hem gerçek anlamda insan eder, hem de içten sultan kılar.
```

---

## Kontrol Listesi (Göndermeden Önce)

- [ ] 5–6 Shorts üretildi
- [ ] Her Shorts'ta hook, title, description, scenes var
- [ ] Her sahnede narration, visual_note ve keywords var
- [ ] visual_note İngilizce
- [ ] keywords İngilizce (2–4 anahtar kelime)
- [ ] Narration Türkçe ve okunabilir
- [ ] Hook ve narration kaynak metin açıklaması dili içermiyor ("metnin deyimiyle" vb. yok)
- [ ] Başlıklar clickbait değil
- [ ] Hashtagler doğal ve uygun
- [ ] JSON geçerli
- [ ] Türkçe karakterler korunmuş
