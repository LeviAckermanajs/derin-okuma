# Day-39 — 21. Mektup Video Prep Scaffold

## Amaç

Bu dosya `npm run video:prep` ile oluşturulan video üretim iskeletini belgeler.

## Kaynak Yazı

- Başlık: `21. Mektup`
- Slug: `21-mektup-evdeki-sessiz-bereket`
- Kaynak dosya: `src/content/blog/21-mektup-evdeki-sessiz-bereket.md`

## Oluşturulan Dosyalar

### Landscape

- `docs/video-tests/inputs/21-mektup-evdeki-sessiz-bereket-landscape-full-video.json`
- `docs/video-tests/inputs/21-mektup-evdeki-sessiz-bereket-landscape-load-input.js`
- `docs/video-tests/metadata/21-mektup-evdeki-sessiz-bereket-landscape-metadata.json`

### Shorts

- `docs/video-tests/shorts/21-mektup-evdeki-sessiz-bereket/21-mektup-evdeki-sessiz-bereket-shorts-package.json`
- `docs/video-tests/shorts/21-mektup-evdeki-sessiz-bereket/metadata/21-mektup-evdeki-sessiz-bereket-shorts-metadata.json`
- `docs/video-tests/shorts/21-mektup-evdeki-sessiz-bereket/load-inputs/short-001-load-input.js`
- `docs/video-tests/shorts/21-mektup-evdeki-sessiz-bereket/load-inputs/short-002-load-input.js`
- `docs/video-tests/shorts/21-mektup-evdeki-sessiz-bereket/load-inputs/short-003-load-input.js`
- `docs/video-tests/shorts/21-mektup-evdeki-sessiz-bereket/load-inputs/short-004-load-input.js`
- `docs/video-tests/shorts/21-mektup-evdeki-sessiz-bereket/load-inputs/short-005-load-input.js`
- `docs/video-tests/shorts/21-mektup-evdeki-sessiz-bereket/load-inputs/short-006-load-input.js`

### Claude Prompt

- `docs/video-tests/prompts/21-mektup-evdeki-sessiz-bereket-fill-video-package-prompt.md`

## Durum (Güncellendi: 2026-06-15)

- Scaffold oluşturuldu
- **Narration içerik doldurma tamamlandı** (Claude, day-39)
- Landscape: 35 sahne, tüm narration/visual_note/keywords dolu
- Shorts: 6 Shorts, her biri 3-4 sahne
- JSON parse: 4 dosya OK
- JS syntax: landscape + 6 short load input = 7 dosya OK
- Yasaklı kalıp kontrolü: TEMİZ

## Doldurulmuş Landscape Sahneleri

| Sahne | Başlık |
|---|---|
| scene-001 | Açılış |
| scene-002 | Bakımın Gerçek Yüzü |
| scene-003 | İçteki Ses |
| scene-004 | Bakışın Gücü |
| scene-005 | Şefkatin Hakikati |
| scene-006 | Zamanın Döngüsü |
| scene-007 | Nankörlüğün Sessiz Biçimi |
| scene-008 | Hayatını Veren Biri |
| scene-009 | Emek Görünmez Olunca |
| scene-010 | Geçim Derdi |
| scene-011 | Bereket Daralıyor mu? |
| scene-012 | Rızkın Kaynağı |
| scene-013 | Sınırlı Ekmek, Yeten Bereket |
| scene-014 | Kim Kime Muhtaç? |
| scene-015 | Sessiz Şükran |
| scene-016 | İlahi Rahmet |
| scene-017 | Görünmez Koruma |
| scene-018 | Zaman Geçer |
| scene-019 | Hayatın Dengesi |
| scene-020 | Evlada Söylenen Söz |
| scene-021 | Mustafa Çavuş Örneği |
| scene-022 | Her İki Dünya için Aynı Kapı |
| scene-023 | Eksik Tanım |
| scene-024 | Bakım İnsanı Büyütür |
| scene-025 | Emanet |
| scene-026 | Niyetin Dönüştürücü Gücü |
| scene-027 | Sessiz Sütun |
| scene-028 | En Az Konuşan |
| scene-029 | Eksildiğini Sananlar |
| scene-030 | Asıl Soru |
| scene-031 | Hizmet İbadet Olunca |
| scene-032 | Merhamet mi, Hesap mı? |
| scene-033 | Bahtiyarlığın Kapısı |
| scene-034 | Evin Gerçek Bereketi |
| scene-035 | Kapanış |

## Shorts Listesi

| Short | Başlık | Sahne |
|---|---|---|
| short-001 | Evin Sessiz Bereketi Nereden Geliyor? | 3 |
| short-002 | Neden Bu Düşünce Vicdanı Kanatıyor? | 3 |
| short-003 | Rızkı Kim Daraltıyor Aslında? | 3 |
| short-004 | Hem Dünyada Hem Ahirette Huzuru Nasıl Bulursun? | 3 |
| short-005 | Neden Ektiğini Biçersin? | 4 |
| short-006 | Bakım Verirken Sorulması Gereken Asıl Soru | 3 |

## n8n'e İlk Gönderilecek Dosya

**Landscape için:**
`docs/video-tests/inputs/21-mektup-evdeki-sessiz-bereket-landscape-load-input.js`

**İlk Shorts için:**
`docs/video-tests/shorts/21-mektup-evdeki-sessiz-bereket/load-inputs/short-001-load-input.js`
