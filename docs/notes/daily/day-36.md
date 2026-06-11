# Day-36 — Video Prep & İçerik Üretimi

## Bugünün Amacı

`20. Mektup - 2. Makam - 8-9. Kelime` yazısı için landscape + Shorts üretim dosya iskeletleri oluşturmak ve içerikleri doldurmak.

## Tamamlanan İşler

### Scaffold (Önceki Oturum)
- Landscape JSON
- Landscape Load Input JS
- Landscape metadata
- Shorts package
- Shorts metadata
- Shorts Load Input JS dosyaları (6 adet)
- Claude doldurma promptu

### İçerik Üretimi (Bu Oturum)
- 35 sahnelik landscape narration yazıldı
- Landscape full video JSON dolduruldu
- Landscape Load Input JS dolduruldu
- Landscape metadata JSON dolduruldu (7 başlık seçeneği, seçilen başlık, açıklama, hashtag, thumbnail metni, SEO keyword, pinned comment)
- 6 Shorts içeriği yazıldı (her biri 3 sahne)
- Shorts package JSON dolduruldu
- Shorts metadata JSON dolduruldu
- short-001 → short-006 load input JS dosyaları dolduruldu

## Doğrulama Sonuçları

| Kontrol | Sonuç |
|---|---|
| Landscape JSON parse | OK |
| Landscape metadata JSON parse | OK |
| Shorts package JSON parse | OK |
| Shorts metadata JSON parse | OK |
| Landscape Load Input JS syntax | OK |
| short-001 JS syntax | OK |
| short-002 JS syntax | OK |
| short-003 JS syntax | OK |
| short-004 JS syntax | OK |
| short-005 JS syntax | OK |
| short-006 JS syntax | OK |
| Yasaklı kalıp taraması | YOK |

## İçerik Özeti

**Landscape:** 35 sahne — `Ölümün İçinden Okunan Daimî Hayat`
- Değişim → sabitliğin habercisi
- Kabarcık ve güneş metaforu
- Eksiklik kudrete, geçicilik kalıcıya ayna
- Kış/bahar analoji
- İnsanın iç yönelişi
- Bütün hayırların kaynağı (9. kelime)
- Hikmet ve ilim delili
- İrade delili (özel suret)
- Hayat vahdet verir

**Shorts (6 adet):**
1. Ölüm Neden Hayatın Sonu Değil?
2. Geçicilik Neden Boş Değildir?
3. Neden O'nun Hayatı Sonsuz?
4. Güçsüzlük Neden Yük Değildir?
5. Bütün Hayır O'nun Elindedir
6. Kâinattaki Düzen Rastgele mi?

## Seçilen Landscape Başlığı

`Ölüm Neden Hayatın Sonu Değildir?`

## Sonraki Adım

n8n smoke test için önce landscape load input:
`docs/video-tests/inputs/20-mektup-2-makam-8-9-kelime-landscape-load-input.js`
