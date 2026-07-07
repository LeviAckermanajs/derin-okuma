# Görev: 26.Söz - Zeyl - Hatime video üretim scaffold dosyalarını doldur

Bu görevde daha önce `npm run video:prep` ile oluşturulmuş scaffold dosyaları gerçek içerikle doldurulacak.

## Hedef Yazı

- Başlık: `26.Söz - Zeyl - Hatime`
- Slug: `26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak`
- Kaynak dosya: `src/content/blog/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak.md`
- Gün: `day-50`

## Amaç

Bu yazı için:

1. Kaynak blog yazısını oku
2. Landscape için 30–40 sahnelik narration / scene JSON oluştur
3. Landscape full video JSON içindeki `scenes` alanını doldur
4. Landscape Load Input JS içindeki `scenes` alanını aynı sahnelerle doldur
5. Landscape metadata JSON dosyasını doldur
6. Aynı içerikten 6 Shorts paketi çıkar
7. Shorts package JSON dosyasını doldur
8. Shorts metadata JSON dosyasını doldur
9. Her Shorts için ilgili `short-XXX-load-input.js` içindeki `job.title`, `job.description` ve `scenes` alanlarını doldur
10. JSON / JS doğrulamalarını yap
11. Rapor ve günlük notu güncelle

## Doldurulacak Dosyalar

### Landscape

- `docs/video-tests/inputs/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak-landscape-full-video.json`
- `docs/video-tests/inputs/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak-landscape-load-input.js`
- `docs/video-tests/metadata/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak-landscape-metadata.json`

### Shorts

- `docs/video-tests/shorts/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak-shorts-package.json`
- `docs/video-tests/shorts/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak/metadata/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak-shorts-metadata.json`
- `docs/video-tests/shorts/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak/load-inputs/short-001-load-input.js`
- `docs/video-tests/shorts/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak/load-inputs/short-002-load-input.js`
- `docs/video-tests/shorts/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak/load-inputs/short-003-load-input.js`
- `docs/video-tests/shorts/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak/load-inputs/short-004-load-input.js`
- `docs/video-tests/shorts/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak/load-inputs/short-005-load-input.js`
- `docs/video-tests/shorts/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak/load-inputs/short-006-load-input.js`

## Önce Oku

- `docs/prompts/landscape-narration.md`
- `docs/prompts/shorts-narration.md`
- `docs/prompts/youtube-metadata.md`
- `docs/prompts/scene-json-format.md`
- `docs/video-workflow.md`
- Kaynak blog yazısı

## Kritik Kurallar

- Dinleyici kaynak metni görmüyor kabul edilecek.
- Narration kaynak metni açıklıyor gibi değil, bağımsız video anlatısı gibi yazılacak.
- "bu metin", "metnin deyimiyle", "yazar burada", "verilen cevap" gibi kalıplar kullanılmayacak.
- `narration` kullanılacak, `text` alanı kullanılmayacak.
- `visual_note` İngilizce olacak.
- `keywords` İngilizce olacak.
- `scene_id` string olacak: `"scene-001"`.
- Landscape için `mode: 'full_video'`, `render_mode: 'landscape'`.
- Shorts için `mode: 'shorts'`, `render_mode: 'shorts'`.
- `audio_strategy.mode: 'single_track'`.
- `timing_strategy: 'elevenlabs_timestamps'`.
- Description sonundaki hashtag bloğu, `hashtags` array ile birebir aynı olacak.
- Başlık seçeneklerinde "neden / nasıl / ne olur / niçin" yapıları önceliklendirilecek.
- n8n'e verilecek gerçek dosyalar Load Input JS dosyalarıdır.
- Package JSON doğrudan n8n'e verilmez; master içerik/arşiv dosyasıdır.

## Landscape Kuralları

- 30–40 sahne üret.
- Her sahnede:
  - `scene_id`
  - `title`
  - `narration`
  - `visual_note`
  - `keywords`
- Sahne başına 2–5 cümle ideal.
- Ton sakin, derin, tefekkürî.
- Doğrudan alıntı gibi yazma.

## Shorts Kuralları

- 6 Shorts üret.
- Her Shorts tek ana fikir taşısın.
- Her Shorts 2–5 sahne olsun.
- Hook ilk 3–5 saniyede merak uyandırsın.
- Clickbait yapma.
- Manevî içeriği ucuzlaştırma.
- shorts-package.json içindeki her short nesnesi şu alanları içermelidir:
  - `short_id`
  - `hook`
  - `title`
  - `description` ← metadata'daki description ile aynı veya uyumlu olmalıdır; sadece metadata dosyasına bırakılmamalıdır
  - `hashtags`
  - `thumbnail_or_cover_text`
  - `scenes`
- Her Shorts için metadata dosyasına da aynı alanları yaz:
  - title / title_options / selected_title
  - description
  - hashtags
  - thumbnail_or_cover_text

## Doğrulama

JSON dosyaları için:

```bash
python3 -m json.tool docs/video-tests/inputs/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak-landscape-full-video.json > /tmp/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak-landscape-json-check.json
python3 -m json.tool docs/video-tests/metadata/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak-landscape-metadata.json > /tmp/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak-landscape-metadata-check.json
python3 -m json.tool docs/video-tests/shorts/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak-shorts-package.json > /tmp/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak-shorts-package-check.json
python3 -m json.tool docs/video-tests/shorts/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak/metadata/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak-shorts-metadata.json > /tmp/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak-shorts-metadata-check.json
```

JS syntax için:

```bash
node -e "new Function(require('fs').readFileSync('docs/video-tests/inputs/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak-landscape-load-input.js', 'utf8')); console.log('Landscape JS OK')"

for f in docs/video-tests/shorts/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak/load-inputs/*.js; do
  node -e "new Function(require('fs').readFileSync('$f', 'utf8')); console.log('OK:', '$f')"
done
```

Yasaklı kalıp kontrolü:

```bash
grep -RniE "bu metin|metnin|metinde|metne göre|metnin deyimiyle|bu noktada|şu cümle|verilen cevap|verilen örnek|yazar burada|kitap burada|burada anlatılmak istenen|bu bölüm" docs/video-tests/inputs/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak* docs/video-tests/shorts/26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak || true
```

## Çıktı Sonunda Raporla

1. Landscape sahne sayısı
2. Kaç Shorts üretildi?
3. Doldurulan dosyalar
4. Metadata durumu
5. JSON parse sonucu
6. JS syntax sonucu
7. Yasaklı kalıp kontrol sonucu
8. n8n'e ilk hangi dosya verilmeli?
9. Commit mesajı önerisi
