# n8n Load Input Migration Raporu

## Özet

Tüm `*-load-input.js` dosyalarına `runtime` bloğu eklendi.
Generator (`scripts/prepare-video-package.mjs`) de güncellendi; artık her yeni üretimde `runtime` otomatik ekleniyor.

---

## Hangi Script Load Input Üretiyor?

**Script:** `scripts/prepare-video-package.mjs`

**Komut:**
```bash
npm run video:prep -- --title "23. Söz - 2. Mebhas - 5. Nükte" --day 23
```

**Çıktı konumları:**
- Landscape: `docs/video-tests/inputs/<slug>-landscape-load-input.js`
- Shorts: `docs/video-tests/shorts/<slug>/load-inputs/short-00N-load-input.js`

**Not:** `*-landscape-full-video.json` dosyaları n8n'e doğrudan verilmez; arşiv/referans dosyasıdır. n8n'e verilen dosya her zaman `*-load-input.js`'dir.

---

## Değiştirilen Dosyalar

### Generator (1 dosya)

| Dosya | Değişiklik |
|---|---|
| `scripts/prepare-video-package.mjs` | `REPO_ROOT` ve `RENDERER_URL` sabitleri + `landscapeLoadInputJS()` ve `shortsLoadInputJS()` template'lerine `runtime` bloğu eklendi |

### Mevcut Load Input dosyaları (49 dosya)

#### Landscape (7 dosya)
- `docs/video-tests/inputs/23-soz-1-mebhas-4-nokta-landscape-load-input.js`
- `docs/video-tests/inputs/23-soz-2-mebhas-1-nukte-landscape-load-input.js`
- `docs/video-tests/inputs/23-soz-2-mebhas-2-nukte-landscape-load-input.js`
- `docs/video-tests/inputs/23-soz-2-mebhas-3-nukte-landscape-load-input.js`
- `docs/video-tests/inputs/23-soz-2-mebhas-4-nukte-landscape-load-input.js`
- `docs/video-tests/inputs/23-soz-2-mebhas-5-nukte-landscape-load-input.js`
- `docs/video-tests/inputs/sevgi-ve-korku-landscape-load-input.js`

#### Shorts (42 dosya — 7 içerik × 6 short)
- `docs/video-tests/shorts/23-soz-1-mebhas-4-nokta/load-inputs/short-{001..006}-load-input.js`
- `docs/video-tests/shorts/23-soz-2-mebhas-1-nukte/load-inputs/short-{001..006}-load-input.js`
- `docs/video-tests/shorts/23-soz-2-mebhas-2-nukte/load-inputs/short-{001..006}-load-input.js`
- `docs/video-tests/shorts/23-soz-2-mebhas-3-nukte/load-inputs/short-{001..006}-load-input.js`
- `docs/video-tests/shorts/23-soz-2-mebhas-4-nukte/load-inputs/short-{001..006}-load-input.js`
- `docs/video-tests/shorts/23-soz-2-mebhas-5-nukte/load-inputs/short-{001..006}-load-input.js`
- `docs/video-tests/shorts/sevgi-ve-korku/load-inputs/short-{001..006}-load-input.js`

---

## Load Input Üretme Komutu

```bash
# Yeni içerik için:
npm run video:prep -- --title "Başlık" --day N

# Ortam değişkeni ile farklı path:
SCENE_BLOG_VIDEO_ROOT=/custom/path npm run video:prep -- --title "Başlık" --day N
```

---

## Üretilen Dosyaların Konumu

```
docs/video-tests/inputs/<slug>-landscape-load-input.js   ← n8n'e verilecek (landscape)
docs/video-tests/shorts/<slug>/load-inputs/short-*.js    ← n8n'e verilecek (shorts)
```

---

## Son Runtime Değerleri

```js
runtime: {
  repo_root: '/home/muhammet/projects/scene-blog-video',
  renderer_url: 'http://127.0.0.1:8000'
}
```

Ortam değişkenleriyle override edilebilir:
```
SCENE_BLOG_VIDEO_ROOT=/home/muhammet/projects/scene-blog-video
SCENE_BLOG_VIDEO_RENDERER_URL=http://127.0.0.1:8000
```

---

## Doğrulama Sonuçları

| Kontrol | Sonuç |
|---|---|
| JS syntax (49 dosya) | ✅ Hepsinde geçerli |
| `runtime` bloğu varlığı (49 dosya) | ✅ Hepsinde mevcut |
| `repo_root` değeri | ✅ `/home/muhammet/projects/scene-blog-video` |
| `renderer_url` değeri | ✅ `http://127.0.0.1:8000` |
| Eski desktop path yokluğu | ✅ Temiz |
| Generator test üretimi | ✅ Doğru `runtime` bloğu üretiyor |

---

## Kalan Manuel Adımlar

1. **Test scaffold dosyalarını temizle** (opsiyonel — `--force` ile üretilen test dosyaları):
   ```
   docs/video-tests/inputs/test-soz-test-mebhas-*
   docs/video-tests/shorts/test-soz-test-mebhas/
   docs/video-tests/metadata/test-soz-test-mebhas-*
   docs/video-tests/prompts/test-soz-test-mebhas-*
   docs/video-tests/reports/day-99-test-soz-test-mebhas-*
   docs/notes/daily/day-99.md
   ```

2. **n8n'de test et:** Herhangi bir load-input JS dosyasını n8n Code node'una yapıştır ve `runtime.repo_root` ile `runtime.renderer_url` değerlerinin workflow tarafından okunduğunu doğrula.

3. **Renderer'ın çalıştığından emin ol:** `http://127.0.0.1:8000` adresine istek atmadan önce `scene-blog-video` projesinin başlatılmış olduğundan emin ol.

---

## git diff Özeti

```
43 dosya değişti, 226 satır eklendi (0 silindi)
 scripts/prepare-video-package.mjs  +16 satır
 42 short load-input JS             her biri +5 satır
 6 landscape load-input JS          her biri +5 satır
```
