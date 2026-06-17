# Day-40 — 22. Mektup 1. Mebhas 1-4. Vecih Video Paketi

## Bugünün Amacı

`22. Mektup - 1. Mebhas - 1-4. Vecih` yazısı için landscape + Shorts üretim dosyalarını scaffold'dan gerçek içerikle doldurmak.

## Yapılanlar

### 1. Kaynak Okuma

Blog yazısı okundu: `src/content/blog/22-mektup-1-mebhas-1-4-vecih.md`

İçerik yapısı: Dört vecih üzerinden kin, haset ve düşmanlığın hem karşı tarafa hem sahibine verdiği zarar işleniyor.
- 1. Vecih: Gemi benzetmesi — bir kusur tüm insanı tanımlamaz
- 2. Vecih: Hikmet — muhabbet ve düşmanlık zıttır; iman birliği kalp birliği ister
- 3. Vecih: Adalet — bir sıfat diğer sıfatları mahkûm edemez
- 4. Vecih: Şahsî zarar — 4 düstur: mesleğim haktır ama yalnız benim değil; her doğruyu söyleme hakkı yok; düşmanlığı içe çevir; haset sahibini yakar

### 2. Landscape Dosyaları

- **35 sahne** üretildi (scene-001 → scene-035)
- `docs/video-tests/inputs/22-mektup-1-mebhas-1-4-vecih-landscape-full-video.json` — dolduruldu
- `docs/video-tests/inputs/22-mektup-1-mebhas-1-4-vecih-landscape-load-input.js` — dolduruldu
- `docs/video-tests/metadata/22-mektup-1-mebhas-1-4-vecih-landscape-metadata.json` — dolduruldu
  - selected_title: "Kin Neden Önce Sahibini Yakar?"
  - 7 başlık alternatifi, 4 thumbnail seçeneği, 10 SEO keyword

### 3. Shorts Dosyaları

- **6 Shorts** üretildi, her biri 3 sahneli
  1. Bir Kusur Bir İnsanı Tanımlar mı? — gemi benzetmesi
  2. İman Birliği Neden Kalp Birliği İster? — tevhid-i kulup
  3. Her Doğruyu Söyleme Hakkın Var mı? — doğru ama zaman/niyet
  4. Asıl Düşman Nerede Gizlidir? — nefse dön
  5. Haset Neden Önce Kendini Yakar? — haset ve geçicilik
  6. Kin Neden Önce Sahibini Yakar? — af ve muhabbet

### 4. Doğrulama Sonuçları

| Kontrol | Sonuç |
|---|---|
| JSON parse (4 dosya) | OK |
| JS syntax (7 dosya) | OK |
| Yasaklı kalıp taraması | OK — 0 eşleşme |
| Validation report | PASS |

### 5. Teknik Not

JS dosyalarında Türkçe curly single quote (`'`) karakterleri single-quoted string içinde JS syntax hatasına yol açıyor. Etkilenen 3 sahnenin narration'ı yeniden yazılarak düzeltildi (quoted dialogue kaldırıldı, paraphrase kullanıldı).

## Sonraki Adım

n8n smoke test:
1. `docs/video-tests/inputs/22-mektup-1-mebhas-1-4-vecih-landscape-load-input.js` — landscape load input n8n'e verilecek
2. Shorts sırayla: `short-001-load-input.js` önce

## Durum

HAZIR — n8n'e gönderilebilir.
