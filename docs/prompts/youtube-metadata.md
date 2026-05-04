# YouTube Metadata Prompt Şablonları — Derin Okuma

## Amaç

Bu doküman, Derin Okuma blog yazılarından, landscape narration metinlerinden veya Shorts narration çıktılarından YouTube yayın metadata'sı üretmek için kullanılır.

Her yayın öncesi bu şablonlardan biri veya ikisi birden kullanılır:
- **Landscape metadata promptu** — uzun video yayın bilgileri için
- **Shorts metadata promptu** — her Shorts paketi için ayrı metadata üretimi

Çıktılar JSON formatında alınır ve doğrudan YouTube Studio'ya kopyalanabilir.

---

## Genel Ton Kuralları

Derin Okuma'nın sesi, içeriğin ağırlığını taşımalı.

- Vurucu ama clickbait olmayan başlık
- Manevî içeriği ucuzlaştırmayan, sıradanlaştırmayan dil
- Sakin, derin ve merak uyandırıcı ifade
- Abartılı vaatlerden kaçınma
- "Bunu izleyince hayatın değişecek", "Herkes bunu yanlış biliyor" gibi ucuz kalıplardan kaçınma
- Başlıkta mümkünse ana duygu veya ana soru öne çıksın
- Açıklama hem SEO hem izleyiciyi içeriğe davet işlevi görsün
- Hashtagler doğal ve sınırlı olsun — kalabalık hashtag listesi özensizlik göstergesidir

---

## Landscape Video Metadata Standardı

### Çıktı Alanları

```json
{
  "video_type": "landscape",
  "title_options": [
    "...",
    "...",
    "...",
    "...",
    "..."
  ],
  "selected_title": "...",
  "description": "...",
  "hashtags": ["#derinokuma", "#tefekkür", "#iman"],
  "playlist_or_folder": "...",
  "thumbnail_text_options": [
    "...",
    "...",
    "..."
  ],
  "seo_keywords": [
    "...",
    "..."
  ],
  "pinned_comment": "..."
}
```

### Alan Kuralları

| Alan | Kural |
|---|---|
| `title_options` | 5–8 alternatif başlık üretilir |
| `selected_title` | En güçlü başlık seçilip öne çıkarılır |
| `description` | 2–4 paragraf; videonun ana fikrini anlatır, izleyiciyi davet eder |
| `hashtags` | 5–10 adet; sabit çekirdek + konuya uygun değişken hashtagler |
| `playlist_or_folder` | Videonun ait olduğu playlist/klasör önerisi |
| `thumbnail_text_options` | 2–5 kelimelik 3–5 alternatif kısa metin |
| `seo_keywords` | 5–10 adet; YouTube arama için doğal ifadeler |
| `pinned_comment` | İzleyiciyi düşünmeye veya kanalı keşfetmeye davet eden 1–2 cümle |

---

## Landscape Metadata Promptu

Aşağıdaki promptu ChatGPT veya Claude'a kopyala-yapıştır yap.  
`[LANDSCAPE NARRATION VEYA BLOG YAZISI]` bölümüne içeriği yapıştır.

```
Sana bir Derin Okuma landscape video narration metni veya blog yazısı vereceğim.
Bu içerik için YouTube yayın metadata'sı üret.

Derin Okuma, Risale-i Nur külliyatını katmanlı ve dikkatli okumalarla günümüze taşıyan bir kanaldır.
Ton: sakin, derin, tefekkürî. Clickbait yasak. Manevî içerik ucuzlaştırılamaz.

Uyulması gereken kurallar:

1. BAŞLIK KURALI
   - 5 ila 8 arasında alternatif başlık yaz.
   - YouTube uzun video için uygun uzunlukta olsun (40–70 karakter arası idealdir).
   - Başlıklar vurucu ama saygılı olsun.
   - Ana duygu, ana soru veya kırılma noktası öne çıksın.
   - Clickbait yapma. "Bunu bilmek seni değiştirecek" gibi kalıpları kullanma.
   - En iyi başlığı `selected_title` alanında belirt.

2. AÇIKLAMA KURALI
   - 2 ila 4 paragraf yaz.
   - İlk paragraf videonun ana fikrini aktarsın.
   - İkinci paragraf izleyiciyi içeriğe davet etsin.
   - Üçüncü paragraf (varsa) kanal veya seri bağlamı verebilir.
   - Türkçe yaz. YouTube'a doğrudan yapıştırılabilir formatta olsun.
   - Hashtagleri açıklamanın sonuna ekle.

3. HASHTAG KURALI
   - 5 ile 10 arasında hashtag yaz.
   - Sabit çekirdek hashtagleri her zaman dahil et: #derinokuma #tefekkür #iman #risaleinur #maneviyat
   - Konuya göre ek hashtagler ekle.
   - Doğal ve uygun olsun. Aşırı şişirme.

4. THUMBNAIL METNİ KURALI
   - 3 ila 5 arasında alternatif kısa metin yaz.
   - Her metin 2–5 kelime olsun.
   - Büyük harf. Tek fikir. Abartı yok.
   - Duygu veya soru taşıyabilir.

5. PLAYLİST / KLASÖR KURALI
   - İçeriğe en uygun playlist veya klasör başlığını öner.

6. SEO ANAHTAR KELİMELERİ
   - 5 ila 10 arasında YouTube arama için doğal ifade yaz.
   - Türkçe olsun. Aramanın gerçek olduğunu düşün.

7. PINNED COMMENT KURALI
   - İzleyiciyi düşünmeye davet eden 1–2 cümle yaz.
   - Soru formatı çalışır.

8. ÇIKTI KURALI
   - Sadece geçerli JSON döndür. Açıklama veya ek metin yazma.
   - Türkçe karakterleri koru (ş, ğ, ü, ö, ı, ç).
   - JSON içine yorum satırı yazma.

Çıktı formatı:

{
  "video_type": "landscape",
  "title_options": [
    "Başlık alternatifi 1",
    "Başlık alternatifi 2",
    "Başlık alternatifi 3",
    "Başlık alternatifi 4",
    "Başlık alternatifi 5"
  ],
  "selected_title": "En iyi başlık",
  "description": "Paragraf 1.\n\nParagraf 2.\n\nParagraf 3.\n\n#derinokuma #tefekkür #iman",
  "hashtags": ["#derinokuma", "#tefekkür", "#iman", "#risaleinur", "#maneviyat"],
  "playlist_or_folder": "Playlist/Klasör Adı",
  "thumbnail_text_options": [
    "KISA METİN 1",
    "KISA METİN 2",
    "KISA METİN 3"
  ],
  "seo_keywords": [
    "risale-i nur açıklama",
    "tefekkür videoları",
    "maneviyat"
  ],
  "pinned_comment": "İzleyiciyi düşünmeye davet eden cümle."
}

İçerik:

[LANDSCAPE NARRATION VEYA BLOG YAZISI]
```

---

## Shorts Metadata Standardı

### Çıktı Alanları

```json
{
  "video_type": "shorts",
  "shorts": [
    {
      "short_id": "short-001",
      "hook": "...",
      "title_options": [
        "...",
        "...",
        "..."
      ],
      "selected_title": "...",
      "description": "...",
      "hashtags": ["#derinokuma", "#shorts", "#tefekkür"],
      "thumbnail_or_cover_text": "..."
    }
  ]
}
```

### Alan Kuralları

| Alan | Kural |
|---|---|
| `short_id` | `short-001`, `short-002` formatında |
| `hook` | Shorts'un ilk 3–5 saniyesindeki cümle (narration'dan alınır veya buna uyumlu olur) |
| `title_options` | Her Shorts için 3–5 başlık alternatifi |
| `selected_title` | En iyi başlık seçilip öne çıkarılır |
| `description` | 1–2 cümle + hashtagler |
| `hashtags` | 5–8 adet; `#shorts` sabit, diğerleri konuya göre |
| `thumbnail_or_cover_text` | 2–4 kelime kapak metni |

---

## Shorts Metadata Promptu

Aşağıdaki promptu ChatGPT veya Claude'a kopyala-yapıştır yap.  
`[SHORTS NARRATION JSON VEYA SHORTS METİNLERİ]` bölümüne içeriği yapıştır.

```
Sana bir Derin Okuma Shorts paketi vereceğim (5–6 Shorts, hook ve narration bilgileriyle).
Her Shorts için YouTube yayın metadata'sı üret.

Derin Okuma, Risale-i Nur külliyatını katmanlı ve dikkatli okumalarla günümüze taşıyan bir kanaldır.
Ton: sakin, derin, tefekkürî. Clickbait yasak. Manevî içerik ucuzlaştırılamaz.

Uyulması gereken kurallar:

1. BAŞLIK KURALI
   - Her Shorts için 3 ila 5 arasında alternatif başlık yaz.
   - Başlıklar kısa ve vurucu olsun (5–8 kelime idealdir).
   - Hook cümlesiyle uyumlu olsun.
   - Clickbait yapma; merak uyandır ama dürüst ol.
   - En iyi başlığı `selected_title` alanında belirt.

2. AÇIKLAMA KURALI
   - Her Shorts için 1–2 cümle açıklama yaz.
   - Hashtagleri sonuna ekle.
   - Türkçe yaz.

3. HASHTAG KURALI
   - 5 ile 8 arasında hashtag yaz.
   - `#derinokuma` ve `#shorts` her Shorts'ta sabit olsun.
   - Konuya uygun ek hashtagler ekle.

4. KAPAK METNİ KURALI
   - 2–4 kelimelik kapak/thumbnail metni yaz.
   - Büyük harf. Tek fikir.

5. ÇIKTI KURALI
   - Sadece geçerli JSON döndür. Açıklama veya ek metin yazma.
   - Türkçe karakterleri koru (ş, ğ, ü, ö, ı, ç).
   - JSON içine yorum satırı yazma.
   - Girdi sırasına göre short_id ver: short-001, short-002 ...

Çıktı formatı:

{
  "video_type": "shorts",
  "shorts": [
    {
      "short_id": "short-001",
      "hook": "Shorts'un hook cümlesi (narrasyondan alınmış veya uyumlu)",
      "title_options": [
        "Başlık 1",
        "Başlık 2",
        "Başlık 3"
      ],
      "selected_title": "En iyi başlık",
      "description": "1–2 cümle açıklama. #derinokuma #shorts #tefekkür",
      "hashtags": ["#derinokuma", "#shorts", "#tefekkür", "#iman"],
      "thumbnail_or_cover_text": "KAPAK METNİ"
    }
  ]
}

Shorts içeriği:

[SHORTS NARRATION JSON VEYA SHORTS METİNLERİ]
```

---

## Hashtag Standardı

### Sabit Çekirdek Hashtagler

Her landscape videoda bu hashtagler mutlaka yer alır:

```
#derinokuma
#tefekkür
#iman
#risaleinur
#maneviyat
```

Her Shorts'ta bu ikisi mutlaka yer alır:

```
#derinokuma
#shorts
```

### Konuya Göre Değişen Hashtagler

| Konu | Önerilen Hashtagler |
|---|---|
| Sevgi, aşk, muhabbet | `#sevgi` `#muhabbet` `#kalp` |
| Korku, haşyet | `#korku` `#haşyet` `#kulluk` |
| Dua, ibadet | `#dua` `#namaz` `#ibadet` |
| Sabır, tevekkül | `#sabır` `#tevekkül` |
| Hayat anlamı | `#hayat` `#anlam` `#varoluş` |
| Ölüm, ahiret | `#ölüm` `#ahiret` `#iman` |
| İnsan, fıtrat | `#insan` `#fıtrat` |
| Kâinat, tefekkür | `#kâinat` `#tefekkür` `#varlık` |

### Kurallar

- Hashtag sayısı fazla şişirilmemeli — landscape için 5–10, Shorts için 5–8 yeterli
- Aynı hashtagler her videoda körlemesine kullanılmamalı; konuya uygunluk gözetilmeli
- Hashtagleri açıklamanın sonuna ekle, ayrı satıra yazabilirsin

---

## Playlist / Klasör Başlığı Standardı

Derin Okuma içerikleri için önerilen playlist ve klasör başlıkları:

| İçerik Türü | Playlist / Klasör Önerisi |
|---|---|
| Genel landscape okumalar | `Risale-i Nur Okumaları` |
| 23. Söz içerikleri | `23. Söz Okumaları` |
| 24. Söz içerikleri | `24. Söz Okumaları` |
| Sevgi ve duygu temalı | `Sevgi, Korku ve Kalp` |
| Dua ve ibadet temalı | `Dua ve Tevekkül` |
| İman ve anlam temalı | `İman ve İnsan` |
| Kısa tefekkür Shorts | `Derin Okuma Shorts` |
| Kısa tefekkür Shorts | `Kısa Tefekkürler` |

---

## Thumbnail Metni Standardı

Landscape video thumbnail'ı için kısa metin kuralları:

- 2–5 kelime
- Büyük harf — okunabilirlik için
- Tek fikir — birden fazla cümle sığdırma
- Abartı yok — "ŞOK GERÇEKLERİ" gibi başlıklar yasak
- Duygu veya soru taşıyabilir

### Örnekler

```
SEVGİ NEREYE BAĞLANIR?
KORKU NEDEN YORAR?
KALBİN GERÇEK YÖNÜ
DUA NEDEN DEĞİŞTİRİR?
İNSAN NEDEN SEVER?
ANLAM NEREDE SAKLI?
İMAN NEYİ TAŞIR?
TEVEKKÜL NEDİR?
```

---

## Kontrol Listesi

Yayın öncesi aşağıdakileri doğrula:

**Başlık**
- [ ] Clickbait değil
- [ ] Ana fikri veya ana soruyu taşıyor
- [ ] 40–70 karakter arası (landscape için)

**Açıklama**
- [ ] Videonun içeriğiyle uyumlu
- [ ] 2–4 paragraf (landscape), 1–2 cümle (Shorts)
- [ ] Hashtagler sonda

**Hashtagler**
- [ ] Sabit çekirdek hashtagler dahil
- [ ] Konuya uygun
- [ ] Sayı makul (5–10 landscape, 5–8 Shorts)

**Thumbnail**
- [ ] 2–5 kelime
- [ ] Tek fikir
- [ ] Abartı yok

**Genel**
- [ ] Playlist/klasör önerisi var
- [ ] Manevî içerik ucuzlaştırılmadı
- [ ] JSON geçerli (üretim sırasında)
