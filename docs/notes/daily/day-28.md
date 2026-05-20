# Day-28 — 21. Söz - 1. Makam Video Paketi

## Bugünün Amacı

`21. Söz - 1. Makam` yazısı için landscape + Shorts video üretim paketini doldurmak.

## Yapılanlar

1. Scaffold oluşturuldu (npm run video:prep)
2. Kaynak blog yazısı okundu
3. 40 sahnelik landscape narration üretildi
4. 6 Shorts üretildi (her biri ayrı bir ikaz/fikir üzerine)
5. Landscape metadata ve Shorts metadata dolduruldu
6. Tüm Load Input JS dosyaları dolduruldu
7. JSON ve JS doğrulamaları geçti

## Landscape

- Sahne sayısı: 40
- Başlık: Namaz Neden Ağır Gelir? Nefsin Beş Büyük Aldanışı
- Yapı: Açılış → 5 İkaz → İki Maden → Kapanış

## Shorts

| Short | Başlık | Odak |
|---|---|---|
| short-001 | Namaz Neden Ağır Gelir? Asıl Sebep Bu | Ebediyet vehmi |
| short-002 | Namaz Neden Her Gün Kılınır? | Tekrar = ihtiyaç |
| short-003 | Sabrını Nerede Harcıyorsun? | Sabır ve bugün |
| short-004 | İbadetin Karşılığı Neden Görünmüyor? | Ebedî netice |
| short-005 | Dünya İşleri Çok mu, Öncelikler mi Kayboldu? | Tali meşguliyetler |
| short-006 | Kusurlu Namaz Bırakılır mı? | Devam ve çekirdek misali |

## Doğrulama

- JSON parse: 4/4 OK
- JS syntax: 7/7 OK
- Yasaklı kalıp: Temiz

## Sonraki Adım

n8n'e landscape Load Input JS verilecek:
`docs/video-tests/inputs/21-soz-1-makam-landscape-load-input.js`
