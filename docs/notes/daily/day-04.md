# Day-04 — Video Workflow Dokümantasyonu

**Tarih:** 2026-05-03
**Durum:** Tamamlandı

---

## Bugünün Amacı

`scene-blog-video` reposunu read-only referans olarak inceleyip Derin Okuma ile video pipeline arasındaki bağı dokümante etmek. Narration ve scene JSON üretimi için standart prompt şablonları oluşturmak.

---

## İncelenen Referans Repo

`~/projects/scene-blog-video` — read-only, değiştirilmedi.

**İncelenen dosyalar:**

| Dosya | Notlar |
|---|---|
| `logic/manual-scene-json-spec.md` | n8n giriş formatının tam spesifikasyonu |
| `examples/manual-scene-input.example.json` | Türkçe gerçek örnek — Sevgi ve Korku içeriği |
| `inputs/sample-manual-scene-input.json` | Minimal test girişi |
| `examples/scene-manifest.example.json` | n8n → Python arasındaki manifest formatı |
| `logic/n8n-to-python-handoff.md` | Katman ayrımı ve handoff sözleşmesi |
| `logic/architecture.md` | Sistem mimarisi: n8n orchestrates, Python renders |
| `workflows/archive/day-12-shorts-workflow.json` | Shorts için 9:16 workflow örneği |

---

## Tespit Edilen Workflow Gerçekliği

### n8n Input Formatı

Format adı: `manual_scene_json`, versiyon `0.1.0`

Zorunlu üst-seviye alanlar:
- `input_version`, `input_type`, `job`, `render_preferences`, `scenes`

Her sahne için zorunlu:
- `scene_id` (string: `"scene-001"`), `narration`

Her sahne için önerilen:
- `visual_note` (İngilizce — Pexels arama için), `keywords` (İngilizce)

### Geçerli Render Modları

| `mode` | Boyut |
|---|---|
| `full_video` | 16:9, 1920×1080 |
| `shorts` | 9:16, 1080×1920 |
| `full_and_shorts` | her ikisi |

### Önemli Bağlantı Noktası

`examples/manual-scene-input.example.json` içinde **Sevgi ve Korku** blog yazısından alınmış Türkçe sahne örneği zaten var. İki proje daha önce örtük olarak bağlanmış; bu dokümantasyon o bağı resmileştiriyor.

### Mimari Kural

n8n orchestrates (input → validate → normalize → TTS → Pexels → manifest)
Python renders (manifest → video birleştirme → çıktı)

---

## Oluşturulan Dosyalar

| Dosya | Açıklama |
|---|---|
| `docs/video-workflow.md` | Mevcut manuel akış + n8n formatı + landscape/shorts standardı |
| `docs/prompts/landscape-narration.md` | 30–40 sahnelik landscape narration prompt şablonu |
| `docs/prompts/shorts-narration.md` | 5–6 Shorts üretim prompt şablonu |
| `docs/prompts/scene-json-format.md` | Manual Scene JSON tam spesifikasyonu + örnekler |
| `docs/decisions/0003-video-workflow-reference.md` | ADR: video pipeline ayrı repoda kalıyor |
| `docs/notes/daily/day-04.md` | Bu dosya |
| `docs/ai-workflow.md` | Blogdan videoya akış bölümü eklendi |
| `docs/backlog.md` | Day-04 tamamlanan işler işaretlendi, yeni maddeler eklendi |

---

## Alınan Kararlar

1. **`scene-blog-video` reposu read-only referans olarak incelendi; hiçbir dosya değiştirilmedi.**

2. **Video üretim kodu `derin-okuma` reposuna taşınmadı.** İki repo ayrı kalacak. Bkz. ADR 0003.

3. **`derin-okuma` reposunda sadece prompt şablonları ve format standardı oluşturuldu.** Teknik pipeline kodu bu repoda yer almayacak.

4. **`visual_note` İngilizce yazılacak.** Pexels API arama sorgusunda kullanıldığı için İngilizce olması gerekiyor.

5. **`keywords` de İngilizce yazılacak.** Aynı nedenle.

6. **`narration` alanı kullanılacak, `text` değil.** Pipeline `narration` alanını bekliyor.

---

## Codex Follow-up

- Codex incelemesinde kritik bulgu çıkmadı.
- Shorts prompt şablonunda `keywords` alanı eksikti — landscape ile tutarsızlık giderildi. Her sahneye İngilizce 2–4 anahtar kelime eklendi.
- `full_and_shorts` modu teknik olarak destekleniyor ancak Derin Okuma üretim standardında önce `full_video` ve `shorts` ayrı ayrı smoke test edilecek; `full_and_shorts` ikisi geçtikten sonra kullanıma alınacak.
- Day-05 için ilk test planı: `Sevgi ve Korku` → landscape narration → `mode: "full_video"`.

---

## Cleanup (Day-04 Sonrası)

- `docs/ai-workflow.md` içindeki eski sahne JSON örneği (`id`, `duration`, `text_overlay`) yeni `manual_scene_json` standardına hizalandı: `scene_id`, `narration`, `visual_note`, `keywords`.
- Aşama 2 başlığı "Planlanıyor" yerine "Day-04'te tamamlandı" olarak güncellendi; prompt şablonlarına referans eklendi.
- Çift `---` ayırıcı giderildi.
- `scene-json-format.md` içindeki gerçek Sevgi ve Korku örneğinde `visual_note` ve `keywords`'ün Türkçe olduğu, yeni üretim standardının İngilizce gerektirdiği açıkça not edildi.

---

## Açık Sorular

1. Yeni blog yazılarında `visual_note` için doğa mı, şehir mi, insan mı tercih edilmeli? Pipeline'ın döndürdüğü sonuçlara bakılarak belirlenecek.
2. Shorts sayısı her blog yazısı için 5–6 mı sabit mi, yoksa yazının uzunluğuna göre mi değişmeli?
3. `full_and_shorts` modunda n8n her ikisini aynı anda mı yoksa sırayla mı üretiyor? (scene-blog-video loglarından bakılacak)
4. Pexels API'nin Türkçe `visual_note` girdisine tepkisi nasıl? İngilizce tercih edildi ama doğrulanmadı.

---

## Sonraki Gün Önerisi (Day-05)

**Öncelik 1:** İlk gerçek test — `Sevgi ve Korku` blog yazısını landscape narration prompt şablonuyla ChatGPT'ye ver, çıktıyı al

**Öncelik 2:** Çıktıyı n8n'e gönder ve smoke test yap

**Öncelik 3:** Sonuçları `docs/notes/daily/day-05.md` içinde raporla
