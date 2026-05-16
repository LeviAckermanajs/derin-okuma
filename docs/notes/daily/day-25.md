# Day-25 — 10. Söz Haşir Risalesi 6-12 Video Paketi

`10. Söz - Haşir Risalesi - 6-12. Suret` yazısı için video üretim scaffold dosyaları gerçek içerikle dolduruldu.

## Yapılanlar

- Kaynak blog yazısı okundu ve bağımsız video anlatısına dönüştürüldü
- Landscape için 36 sahnelik narration/scene yapısı oluşturuldu
- Landscape full JSON ve n8n Load Input JS dolduruldu
- Landscape YouTube metadata dosyası dolduruldu
- Aynı içerikten 6 Shorts üretildi
- Shorts package, Shorts metadata ve 6 ayrı Shorts Load Input JS dosyası dolduruldu
- JSON parse, JS syntax ve yasaklı kalıp kontrolleri çalıştırıldı

## n8n’e Gönderim

İlk test için kullanılacak dosya:

`docs/video-tests/inputs/10-soz-hasir-risalesi-6-12-suret-landscape-load-input.js`

Shorts için her `short-XXX-load-input.js` dosyası ayrı job olarak gönderilir.
