# AI Destekli İçerik ve Video Üretim Akışı

## Mevcut Durum (2026-05-03)

Kullanıcı şu an aşağıdaki akışı manuel olarak yürütüyor:

```
Blog Yazısı
    ↓
ChatGPT → Narration hazırlama (manuel)
    ↓
n8n pipeline input
    ↓
Landscape video üretimi
    +
Shorts video üretimi
```

Bu bir hayal değil, **aktif kullanım**dır. n8n bağlantısı kurulu ve çalışıyor.

---

## Aşama 1 — Mevcut Akışın Belgelenmesi

### Narration hazırlama (manuel, şu anki)

1. Blog yazısı okunur
2. ChatGPT'ye şu bilgiler verilir:
   - Blog yazısının tam metni
   - Video türü: landscape veya shorts
   - Ton: sakin, düşündürücü, Türkçe
3. Narration metni alınır
4. n8n'e input olarak girilir

**Açık soru:** ChatGPT prompt'u standarize edilmiş mi? Eğer değilse `docs/` altında prompt şablonu oluşturulabilir.

---

## Aşama 2 — Narration Şablonları (Planlanıyor)

Blog yazısından aşağıdaki çıktılar üretilebilir:

### Landscape Narration
- Tam metni kapsayan, sakin ve derin bir ses tonu
- ~5-10 dakika
- Başlangıç, gelişme, kapanış yapısı

### Shorts Hook
- İlk 3-5 saniye
- Dikkat çekici soru veya tespit
- Örnek: "İnsan niçin bu kadar çok sever? Risale buna çok farklı bir cevap veriyor."

### Shorts Narration
- ~45-60 saniye
- Tek ana fikri aktarır
- Basit, net, vurucu

### YouTube Başlık / Açıklama
- SEO odaklı başlık
- 150-200 kelime açıklama
- Hashtagler

### Sahne Bazlı JSON
n8n pipeline için:
```json
{
  "scenes": [
    {
      "id": 1,
      "duration": 8,
      "narration": "...",
      "visual_note": "karanlık gökyüzü, yıldızlar",
      "text_overlay": null
    }
  ]
}
```

---

## Aşama 3 — Otomatik Dönüştürme (Uzun Vade)

Blog yazısından bu çıktıları üretecek bir Claude API entegrasyonu düşünülebilir:

```
Blog yazısı (Markdown) → Claude API → Narration + Scene JSON + Başlık
```

Bu aşama için:
- Blog frontmatter'a `video_ready: true` gibi bir alan eklenebilir
- Narration ve scene JSON blog yazısıyla aynı klasörde tutulabilir
- n8n bu dosyaları otomatik alabilir

**Not:** Bu aşama şu an planlanıyor, henüz implemente edilmedi.

---

## Referanslar

- `docs/content-guide.md` — İçerik yazım rehberi ve videoya dönüştürülebilir içerik standardı
- `docs/backlog.md` — Video workflow backlog items
