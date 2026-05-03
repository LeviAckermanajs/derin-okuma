# ADR 0003 — Video Pipeline Ayrı Repoda Kalıyor

**Tarih:** 2026-05-03
**Durum:** Kabul edildi

---

## Bağlam

Derin Okuma blog yazıları n8n tabanlı bir video üretim pipeline'ına besleniyor. Bu pipeline `scene-blog-video` adlı ayrı bir repoda barınıyor ve şu bileşenleri içeriyor:

- n8n workflow JSON dosyaları
- Python renderer (TTS, Pexels video, FFmpeg birleştirme)
- `manual_scene_json` giriş spesifikasyonu
- İş akışı dokümantasyonu

Soru: Video üretim kodu `derin-okuma` reposuna taşınmalı mı?

---

## Karar

**Video üretim pipeline'ı `scene-blog-video` reposunda kalacak.**

`derin-okuma` reposu şunları içerecek:
- Blog içeriği (`src/content/blog/`)
- Narration prompt şablonları (`docs/prompts/`)
- Scene JSON format standardı
- Workflow dokümantasyonu (`docs/video-workflow.md`)

`derin-okuma` reposu şunları **içermeyecek:**
- n8n workflow JSON dosyaları
- Python renderer kodu
- FFmpeg veya TTS entegrasyon kodu
- `output/` job klasörleri

İki repo, paylaşılan `manual_scene_json` formatı ve `docs/prompts/` şablonları üzerinden bağlı tutulacak.

---

## Gerekçe

**1. Sorumluluk ayrımı nettir.**
- `derin-okuma`: içerik üretimi, narration hazırlığı
- `scene-blog-video`: teknik üretim, render

**2. `scene-blog-video` bağımsız gelişiyor.**
Renderer, TTS, Pexels entegrasyonu bu projede bağımsız evrimleşiyor. `derin-okuma` o teknik evrimden etkilenmemeli.

**3. Deployment sınırı korunuyor.**
`derin-okuma` Vercel'de çalışan bir Astro sitesi. Renderer kodu orada çalışamaz ve çalışmamalı.

**4. İçerik üretimi teknik üretimden bağımsız olmalı.**
Blog yazısı, narration ve scene JSON hazırlığı; render pipeline'dan bağımsız, temiz bir süreçtir.

---

## Alternatiflerin Değerlendirmesi

### Alternatif 1: Video pipeline kodunu `derin-okuma`'ya taşımak
- **Neden reddedildi:** Repo sorumluluklarını karıştırır; Vercel deployment'ı ile çatışır; `scene-blog-video`'nun bağımsız evrimi engellenir.

### Alternatif 2: İki repoyu tamamen bağlantısız tutmak
- **Neden reddedildi:** Format standardı paylaşılmadan iki taraf arasında sessiz sürüm kayması oluşur. `derin-okuma`'da prompt şablonu ve format dokümanı olmadan narration üretimi tutarsız kalır.

### Seçilen yaklaşım: Ayrı repo, standart dokümantasyonla bağlı
- İki repo ayrı kalır.
- `derin-okuma` içinde `docs/prompts/` ve `docs/video-workflow.md` üzerinden format ve akış standartlaşır.
- `scene-blog-video/logic/manual-scene-json-spec.md` bu standartın teknik referansıdır.

---

## Sonuçlar

- `derin-okuma` sadece içerik ve prompt şablonlarını yönetir.
- Herhangi bir blog yazısını videoya çevirmek için `docs/prompts/` şablonları kullanılır.
- Pipeline değişikliği olduğunda yalnızca `scene-blog-video` güncellenir; `derin-okuma` etkilenmez.
- Format kırılması olursa `docs/prompts/scene-json-format.md` güncellenir.

---

## Sonraki Adımlar

- `docs/prompts/` altındaki şablonlar gerçek blog yazısıyla test edilecek
- İlk smoke test: `Sevgi ve Korku` yazısından landscape narration üretilecek
- `scene-blog-video` formatı değişirse bu ADR ve `scene-json-format.md` güncellenecek
