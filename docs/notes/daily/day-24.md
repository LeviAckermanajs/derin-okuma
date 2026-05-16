# Day-24 — video:publish-pack

## Bugünün Amacı

YouTube upload hazırlığı için metadata JSON dosyalarından kopyala-yapıştır hazır `.txt` dosyaları üretmek.

## Eklenen Komut

```bash
npm run video:publish-pack -- --slug <slug> --type shorts
```

## Test Paketi

- Slug: `23-soz-2-mebhas-1-nukte`
- Type: `shorts`

## Yapılanlar

- `scripts/build-video-publish-pack.mjs` eklendi
- `package.json` içine `video:publish-pack` scripti eklendi
- 6 Shorts için publish pack dosyaları üretildi
- Her Short için `title.txt`, `description.txt`, `hashtags.txt`, `thumbnail_text.txt`, `hook.txt`, `upload-notes.md` oluşturuldu
- `shorts/upload-checklist.md` ve publish pack `index.md` oluşturuldu
- Hashtag consistency, TODO ve boş alan kontrolleri script içinde doğrulandı

## Publish Pack

`docs/video-tests/publish/23-soz-2-mebhas-1-nukte/`

## Sonraki Adım

Oluşan publish pack dosyalarıyla 6 Shorts'un YouTube upload sürecini manuel olarak test etmek.

---

# Önceki Day-24 Notu - 10. Soz Hasir Risalesi Video Paketi

`10. Söz - Haşir Risalesi - 1-5. Suret` yazisi icin video uretim scaffold dosyalari gercek icerikle dolduruldu.

## Yapilanlar

- Kaynak blog yazisi okundu ve bagimsiz video anlatisina donusturuldu
- Landscape icin 36 sahnelik narration/scene yapisi olusturuldu
- Landscape full JSON ve n8n Load Input JS dolduruldu
- Landscape YouTube metadata dosyasi dolduruldu
- Ayni icerikten 6 Shorts uretildi
- Shorts package, Shorts metadata ve 6 ayri Shorts Load Input JS dosyasi dolduruldu
- JSON parse, JS syntax ve yasakli kalip kontrolleri calistirildi

## n8n'e Gonderim

Ilk test icin kullanilacak dosya:

`docs/video-tests/inputs/10-soz-hasir-risalesi-1-5-suret-landscape-load-input.js`

Shorts icin her `short-XXX-load-input.js` dosyasi ayri job olarak gonderilir.
