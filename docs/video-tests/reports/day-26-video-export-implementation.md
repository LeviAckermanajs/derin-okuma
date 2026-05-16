# Day-26 — video:export Implementation

## Amaç

Render edilen Shorts videolarını `scene-blog-video/output/jobs` altından alıp YouTube upload için masaüstündeki blog klasörüne metadata başlıklarıyla kopyalamak.

## Eklenen Komut

```bash
npm run video:export -- --slug <slug> --type shorts --run-id <run-id> --export-root "<desktop-folder>"
```

## Test Edilen Paket

- Slug: `10-soz-hasir-risalesi-6-12-suret`
- Type: `shorts`
- Run id: `day25-full6-b`

## Hedef Klasör

`/mnt/c/Users/MUHAMMET/Desktop/Derin Okuma YT/10. Söz - Haşir Risalesi - 6-12. Suret/`

## Dry-run Sonucu

- 6 job klasörü bulundu
- 6 `renders/shorts-main.mp4` dosyası bulundu
- Kopyalama planı başarıyla üretildi
- Dry-run modunda dosya kopyalanmadı

## Gerçek Export Sonucu

- 6 video kopyalandı
- Dosyalar Shorts metadata başlıklarına göre adlandırıldı
- `export-index.md` oluşturuldu

## Kopyalanan Dosyalar

- `Dünya Neden Son Yurt Değil.mp4`
- `Kayıt Varsa Hesap Neden Var.mp4`
- `Bahar Haşri Nasıl Gösterir.mp4`
- `Merhamet Neden Tamamlanır.mp4`
- `İnsan Neden Ebediyet İster.mp4`
- `Dünya Neden Tarla Gibidir.mp4`

## Karar

`video:export`, render sonrası YouTube upload dosya hazırlığını hızlandırmak için kullanılabilir.

## Sonraki Adım

- Export edilen videoları publish pack dosyalarıyla birlikte YouTube Studio upload akışında test etmek
- `video:export` komutunu n8n final step olarak otomatik çağırmayı değerlendirmek
