# Day-26 — video:export

## Bugünün Amacı

Render edilen Shorts videolarını job klasörlerinden masaüstündeki YouTube hazırlık klasörüne başlıklı şekilde kopyalamak.

## Eklenen Komut

```bash
npm run video:export -- --slug <slug> --type shorts --run-id <run-id> --export-root "<desktop-folder>"
```

## Test Paketi

- Slug: `10-soz-hasir-risalesi-6-12-suret`
- Run id: `day25-full6-b`
- Type: `shorts`

## Yapılanlar

- `scripts/export-rendered-videos.mjs` eklendi
- `package.json` içine `video:export` scripti eklendi
- Dry-run ile 6 Shorts export planı doğrulandı
- Gerçek export ile 6 video masaüstü klasörüne kopyalandı
- `export-index.md` oluşturuldu
- `docs/video-workflow.md`, `docs/backlog.md` ve `docs/video-automation-roadmap.md` güncellendi

## Hedef Klasör

`/mnt/c/Users/MUHAMMET/Desktop/Derin Okuma YT/10. Söz - Haşir Risalesi - 6-12. Suret/`

## Sonraki Adım

Export edilen videoları `video:publish-pack` çıktılarıyla birlikte YouTube Studio upload akışında test etmek.
