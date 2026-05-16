# Day-23 — 6 Shorts Full Batch n8n Smoke Test

## Batch Test Sonucu

`23-soz-2-mebhas-1-nukte` paketi için 6 Shorts videosu tek batch dosyasıyla n8n'de üretildi.

- 6 item n8n'e verildi
- 6 Shorts ayrı job olarak işlendi
- 6 ayrı output oluştu
- 6 Shorts videosu sorunsuz üretildi
- Output çakışması görülmedi
- İçerik karışması görülmedi
- Batch pipeline full Shorts paketi için başarılı kabul edildi

## Kullanılan Komut

```bash
npm run video:batch -- --slug 23-soz-2-mebhas-1-nukte --type shorts --run-id day23-full6-a --force
```

## Karar

- Shorts batch pipeline doğrulandı
- Manuel n8n paste sayısı 6'dan 1'e düştü
- Önerilen akış: `video:validate` → `video:batch` → tek n8n paste
- Sonraki güvenli otomasyon adımı: `video:publish-pack`

## Rapor

Detaylı rapor:

`docs/video-tests/reports/day-23-video-batch-full-6-n8n-success.md`

---

# Önceki Day-23 Notu — 2026-05-15

## Scaffold → Doldurma

`23. Söz - 2. Mebhas - 5. Nükte` yazısı için landscape + Shorts üretim paketi scaffold olarak oluşturuldu, ardından içerikle dolduruldu.

## Yapılan İş

- Landscape: 38 sahne, ~10–13 dakika tahmini süre
- Shorts: 6 adet, hepsi soru yapısında başlıklı
- Tüm JSON ve JS dosyaları doğrulandı (parse OK, syntax OK)
- Yasaklı kalıp kontrolü: TEMİZ

## Kapsanan İçerik

Bu nükte, insanın kâinat karşısındaki rolünü ve ubudiyetinin iki boyutunu işliyor:
- Memur ve misafir kimliği; istidat
- Gaibane ubudiyet (tefekkür yolu) ve hazırane ubudiyet (münacat)
- Dellâllık, idrak terazisi, kalbin kıymetşinaslığı
- Kâinat kitabı metaforu, mütalaa
- Allah'ın tecellilerine kulluk cevapları: iman, marifet, muhabbet, şükür, zikir, dua, secde, tevhid
- Hakiki insan olmanın manevî anlamı; halife-i arz

## Shorts Başlıkları

| ID | Başlık |
|---|---|
| short-001 | İnsan Neden Memur ve Misafir? |
| short-002 | İbadet Neden Marifetten Doğar? |
| short-003 | İnsan Neden Dellâl Olmak Zorunda? |
| short-004 | Bilgi Neden Yetmez? |
| short-005 | Dua Neden Kulluktur? |
| short-006 | Tevhidin Son Halkası Nedir? |

## Sonraki Adım

n8n'e ilk verilecek dosya:
`docs/video-tests/inputs/23-soz-2-mebhas-5-nukte-landscape-load-input.js`
