# Video Automation Roadmap

Son güncelleme: 2026-05-16

---

## Mevcut Akış

```text
video:prep → Claude fill prompt → load input dosyaları → n8n manuel paste → YouTube manuel upload
```

Adım adım:

1. `npm run video:prep -- --title "..." --day XX` — scaffold dosyaları ve Claude doldurma promptu oluşur
2. Claude fill prompt ile landscape + Shorts Load Input JS dosyaları gerçek içerikle doldurulur
3. Her Shorts için ayrı `short-XXX-load-input.js` hazır olur (6 dosya)
4. Kullanıcı her Shorts dosyasını n8n Load Input Code node'a tek tek yapıştırır
5. n8n her Shorts için ayrı iş çalıştırır (ElevenLabs TTS, Pexels, renderer)
6. Kullanıcı üretilen videoları YouTube'a manuel olarak yükler ve zamanlar

---

## Darboğazlar

- **6 kez yapıştırma:** 6 Shorts için 6 ayrı n8n oturumu açılır; her seferinde dosya seçilip içerik yapıştırılır
- **Manuel dosya seçimi:** `load-inputs/` klasöründen doğru `short-XXX` dosyasını her seferinde manuel bulmak gerekir
- **Dağınık metadata:** Her Short'un başlık/açıklama/hashtag bilgisi farklı dosyalarda; YouTube upload sırasında tek tek toplanması gerekir
- **YouTube upload ritmi:** Başlık, açıklama, hashtag, pinned comment ve thumbnail metni ayrı ayrı kopyalanır; bütüncül bir yayın dosyası yoktur
- **ElevenLabs kredi riski:** Yanlışlıkla tüm 6 Shorts'u hatalı içerikle göndermek gereksiz TTS kredisi yakar; batch öncesi doğrulama ve `--limit 2` ile kademeli test zorunludur

---

## Aşama 1 — Validate Komutu

**Önerilen komut:**

```bash
npm run video:validate -- --slug <slug>
```

**Amaç:**

Dosyaları n8n'e göndermeden önce tüm paket bütünlüğünü kontrol etmek.

**Kontroller:**

- Landscape JSON parse (geçerli JSON mu?)
- Landscape Load Input JS syntax (`new Function(...)` ile)
- Shorts package JSON parse
- Shorts metadata JSON parse
- Tüm Shorts Load Input JS syntax (6 dosya)
- Yasaklı kalıp grep (`bu metin`, `metnin deyimiyle`, `yazar burada` vb.)
- Hashtag / description eşleşme kontrolü (description'daki hashtag bloğu, `hashtags` array ile örtüşüyor mu?)
- `content_generation_status: filled` kontrolü (scaffold mı, dolu mu?)
- `scenes` alanı boş değil mi kontrolü (en az 1 sahne var mı?)

**Beklenen çıktı:**

```text
docs/video-tests/reports/<slug>-validation-result.md
```

Başarılı ve başarısız kontroller ayrı ayrı listelenir; geçilen kontroller `[OK]`, başarısızlar `[FAIL]` prefix'iyle gösterilir.

---

## Aşama 2 — Shorts Batch Load Input

**Önerilen komut:**

```bash
npm run video:batch -- --slug <slug> --type shorts
```

**Amaç:**

6 ayrı `short-XXX-load-input.js` dosyasını tek bir n8n Code node dosyasında birleştirmek; böylece n8n'e 6 kez değil 1 kez yapıştırma yapılır.

**n8n'e verilen çıktı formatı:**

```js
// Derin Okuma — <slug> Shorts Batch Load Input
// Üretildi: npm run video:batch

const short001RawInput = { /* short-001 rawInput içeriği */ };
const short002RawInput = { /* short-002 rawInput içeriği */ };
// ...

return [
  { json: { raw_input: short001RawInput } },
  { json: { raw_input: short002RawInput } },
  // ...
];
```

n8n bu formatı item array olarak algılar ve her Short'u sırayla ayrı bir iş olarak işler.

**Önerilen seçenekler:**

```bash
--slug <slug>          # zorunlu
--type shorts          # şimdilik sadece shorts
--limit 2              # ilk N Short'u batch'e al (test için)
--force                # var olan batch dosyasının üstüne yaz
```

**Beklenen çıktı:**

```text
docs/video-tests/batches/<slug>-shorts-batch-load-input.js
```

---

## Aşama 3 — Batch Smoke Test

`video:batch` implement edildikten sonra kademeli test sırası:

1. `--limit 2` ile sadece `short-001` ve `short-002` batch dosyası üret
2. Batch dosyasını n8n'e yapıştır, ikisini birden işlet
3. n8n output'unda iki ayrı item çıktığını ve `job_id` çakışması olmadığını doğrula
4. ElevenLabs'in her Short için ayrı TTS isteği açtığını doğrula (tek job değil iki ayrı job)
5. Renderer output klasörlerini (`output/jobs/`) kontrol et — `short-001` ve `short-002` ayrı klasörde mi?
6. Başarılı olursa `--limit 4` ara testiyle devam et, ardından `--limit 6` ile tam batch

**ElevenLabs kredi koruması:** `--limit 2` adımı atlanmamalı; tüm 6 Short'u hatalı formatta göndermek bütçe israfına yol açar.

### Day-21 Sonuçları

- `--limit 2` testi başarılı (Day-21)
- `short-001` ve `short-002` ayrı job olarak işlendi; output çakışması yok
- n8n item array davranışı 2 item için doğrulandı
- `scene-blog-video` workflow Code node'ları batch-safe hale getirildi
- Sonraki kontrollü adım: `--limit 4` ile ara smoke test

### Day-22 Sonuçları

- `--limit 4` testi başarılı (Day-22)
- Dört item için n8n item handling, async context ve render polling doğrulandı
- `short-001`, `short-002`, `short-003`, `short-004` ayrı job/output olarak üretildi
- Output çakışması ve içerik karışması görülmedi
- Sonraki kontrollü adım: `--limit 6` ile tam Shorts batch

---

## Aşama 4 — n8n Webhook Gönderimi

**Önerilen komut:**

```bash
npm run video:send -- --slug <slug> --type shorts
```

**Amaç:**

Batch dosyasını n8n Webhook'a POST ederek kopyala-yapıştır adımını tamamen kaldırmak.

**Gerekenler:**

- `scene-blog-video` n8n workflow'unda Webhook trigger node eklenmesi
- Basit token doğrulama (Bearer veya secret query param)
- `.env` içinde `N8N_SHORTS_WEBHOOK_URL` tanımı
- `video:send` script'i batch dosyasını okur, Webhook'a POST eder, yanıtı loglar
- Hata durumunda net hata mesajı ve exit code

**İlk aşamada:** Yalnızca local veya private (şifreli) Webhook ile test edilecek; public endpoint açılmaz.

---

## Aşama 5 — YouTube Publish Pack

**Önerilen komut:**

```bash
npm run video:publish-pack -- --slug <slug>
```

**Amaç:**

Her video için YouTube yayın hazırlık dosyalarını tek klasörde toplamak; manuel upload'u hızlandırmak ama tam otomasyona geçmeden önce insan kontrolü katmanını korumak.

**Beklenen klasör:**

```text
docs/video-tests/publish/<slug>/
```

**İçerik:**

```text
landscape/
  title.txt          ← selected_title
  description.txt    ← açıklama + hashtag bloğu
  hashtags.txt       ← satır satır hashtag listesi
  thumbnail_text.txt ← 2–5 kelime thumbnail metni
  pinned_comment.txt ← pinned comment taslağı

shorts/
  short-001/
    title.txt
    description.txt
    hashtags.txt
    thumbnail_text.txt
  short-002/
  ...
  short-006/
```

**Kaynaklar:**

- Landscape: `docs/video-tests/metadata/<slug>-landscape-metadata.json`
- Shorts: `docs/video-tests/shorts/<slug>/metadata/<slug>-shorts-metadata.json`

Her dosya doğrudan YouTube'a yapıştırılabilir formatta olacak; hiç JSON editlemesi gerekmeyecek.

---

## Aşama 6 — YouTube API / n8n YouTube Node

Bu aşama kasıtlı olarak ileri bırakılmıştır.

**Neden erken değil:**

- OAuth kurulumu gerektirir (YouTube Data API v3)
- Yanlış başlık veya yanlış video yükleme riski var
- Zamanlama hataları geri alınamaz
- Önce `video:publish-pack` ile manuel kontrol alışkanlığı oturmalı

**Olgunlaştıktan sonra:**

- n8n YouTube node ile scheduled upload
- Her Short için ayrı yayın zamanlaması
- Başlık/açıklama/thumbnail tam otomatik dolumu

---

## Önerilen Day Planı

| Gün | Hedef |
|---|---|
| Day-20 | `video:validate` tasarımı + `video:batch` tasarımı; mevcut `23-soz-2-mebhas-2-nukte` paketi üzerinde manuel doğrulama |
| Day-21 | `video:batch --limit 2` implementasyonu + `23-soz-2-mebhas-2-nukte` üzerinde smoke test |
| Day-22 | `video:batch --limit 4` ara smoke test |
| Day-23 | 6 Shorts batch smoke test; n8n item array davranışı ve job_id doğrulaması |
| Day-24 | `video:validate` implementasyonu; doğrulama raporu çıktısı testi |
| Day-25 | n8n Webhook tasarımı; `video:send` implementasyonu değerlendirmesi |
| Day-26 | `video:publish-pack` implementasyonu |
| Day-27+ | YouTube API otomasyonu değerlendirmesi |

---

## Riskler

| Risk | Açıklama | Azaltma |
|---|---|---|
| ElevenLabs kredi israfı | 6 Short hatalı içerikle gönderilirse TTS bütçesi yanar | `--limit 2` ile kademeli test; `video:validate` zorunlu ön adım |
| n8n item array uyumsuzluğu | Mevcut workflow item array'i beklemeyebilir; her item yerine tüm array tek iş sayılabilir | `--limit 2` ile 2 item davranışını önce doğrula |
| job_id çakışması | Aynı slug için birden fazla job çalışırsa output klasörleri çakışabilir | Batch dosyasında `job_id_hint` unique mi kontrol et |
| Tüm Shorts aynı anda hata | 6 Short aynı anda başarısız olursa debug zorlaşır | `--limit 2` → `--limit 4` → 6 kademeli artış |
| YouTube yanlış yayın | API otomasyonunda yanlış başlık/video yüklenebilir | Aşama 6'ya geçmeden önce `publish-pack` ile en az 2 döngü manuel kontrol yapılmalı |
| Webhook güvenliği | Public endpoint saldırıya açık olabilir | Token doğrulama zorunlu; local/private test önce |

---

## Tavsiye Edilen İlk Uygulama

**İlk gerçek patch şu ikili olmalı:**

```bash
video:validate + video:batch --limit 2
```

**Sıra:**

1. `video:validate` — mevcut `23-soz-2-mebhas-2-nukte` paketinin dosya bütünlüğünü kontrol et
2. `video:batch --limit 2` — sadece `short-001` ve `short-002` ile batch dosyası üret
3. Batch dosyasını n8n'e yapıştır, 2 item davranışını doğrula
4. Başarılı olursa 6 Short batch testine geç

Bu sıra hem riski minimize eder hem de n8n item array davranışını gerçek koşullarda öğrenmeyi sağlar.
