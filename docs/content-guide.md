# İçerik Yazım Rehberi — Derin Okuma

## Genel İlkeler

- Her yazı bir metni ya da metnin belirli bir bölümünü ele alır.
- Yazı yorum değil, açıklama niteliğindedir: metnin ne söylediğini, neden söylediğini ve nasıl söylediğini aktarır.
- Günümüz örnekleri metni anlayışlı okuyuculara somutlaştırmak için kullanılır.
- Yazı sade, akıcı ve yoğun olmalıdır. Uzun ama boş cümleler tercih edilmez.

---

## Frontmatter Şeması

```yaml
---
title: "Söz Adı veya Konu Başlığı"
description: "Bir cümlelik özet — arama motoru ve liste görünümü için"
pubDate: YYYY-MM-DD
updatedDate: YYYY-MM-DD   # opsiyonel, güncelleme yapıldıysa
heroImage: "./gorsel.jpg"  # opsiyonel
---
```

### Zorunlu alanlar

| Alan | Açıklama |
|---|---|
| `title` | Yazının başlığı. Net ve tanımlayıcı olmalı. |
| `description` | Tek cümle. Yazının konusunu ve içeriğini özetler. |
| `pubDate` | Yayın tarihi. `YYYY-MM-DD` formatında. |

### Opsiyonel alanlar

| Alan | Açıklama |
|---|---|
| `updatedDate` | Yazı güncellendiyse. |
| `heroImage` | Kapak görseli. `src/assets/` veya dış URL. |

---

## Dosya Adlandırma

Dosya adları küçük harf, Türkçe karakter içermeden, tire ile ayrılmış olmalı:

```
10-soz-hasir-risalesi-1-5-suret.md
21-soz-1-makam.md
23-soz-2-mebhas-3-nukte.md
```

---

## İçerik Formatı

Şu an iki format kullanılıyor:

**HTML tabanlı** (`<section>`, `<p>`, `<h1>`, `<blockquote>`, `<ul>`):
```html
<section class="risale-article">
  <p>...</p>
  <blockquote><p>...</p></blockquote>
  <h1>...</h1>
</section>
```

**Markdown tabanlı** (`##`, `>`, `-`):
```markdown
## Bölüm Başlığı

> Alıntı metni

- madde 1
- madde 2
```

Her iki format da destekleniyor. Yeni yazılarda Markdown tercih edilebilir; mevcut HTML içerikler değiştirilmeyecek.

---

## Videoya Dönüştürülebilir İçerik Standardı

Her blog yazısı ileride şu alanlara dönüştürülebilir olmalıdır:

- **Landscape video narration** — ana anlatım metni
- **Shorts hook** — ilk 3-5 saniyeyi kapan dikkat çekici giriş
- **Shorts narration** — kısa format için özet anlatım
- **YouTube başlık / açıklama** — SEO odaklı
- **Sahne bazlı JSON** — n8n pipeline için sahne dizisi
- **Visual note / ambient visual direction** — arka plan görsel yönlendirmesi

**Bu alanlar ilk aşamada zorunlu değildir.** Blog yazısının kalitesi ve netliği önce gelir. Dönüştürme şablonları hazır olduğunda mevcut yazılar geriye dönük olarak işlenebilir.

---

## Yayın Akışı

1. Yazıyı `src/content/blog/` altına `.md` dosyası olarak ekle
2. Frontmatter'ı eksiksiz doldur
3. `git add . && git commit -m "..." && git push`
4. Vercel otomatik deploy eder (~1-2 dakika)
5. Yazı n8n pipeline için hazırsa akışa al
