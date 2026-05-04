# Day-14 — 2026-05-04

## Bugünün Amacı

YouTube metadata üretim standardına soru/merak odaklı başlık kuralı eklemek. Bu küçük ama kalıcı bir prompt standardı güncellemesidir.

---

## Yapılan Güncelleme

`docs/prompts/youtube-metadata.md` dosyasına üç ekleme yapıldı:

1. **Yeni bölüm:** "Başlık Stratejisi — Soru ve Merak Odaklı Yapı" — genel kural açıklaması ve örnek soru kalıpları
2. **Landscape prompt güncellemesi:** Başlık kuralına "en az yarısı neden/nasıl/ne olur yapısında olsun" talimatı eklendi, örnek kalıplar verildi
3. **Shorts prompt güncellemesi:** Her Shorts için "en az 1–2 seçenek soru/merak yapısında olsun" talimatı eklendi

`docs/video-workflow.md` YouTube Metadata bölümüne kısa not eklendi.

---

## Neden Gerekli Olduğu

Soru temelli başlıklar ("Neden?", "Nasıl?") izleyicinin kendi sorusunu başlıkta görmesini sağlar. Bu tıklanma ihtimalini artırır. Derin Okuma içeriği zaten bu soruları cevaplıyor; başlıkta bunu açıkça taşımak organik keşfi güçlendirebilir.

---

## Etkilenen Dosyalar

- `docs/prompts/youtube-metadata.md` — kural güncellendi
- `docs/video-workflow.md` — kısa not eklendi
- `docs/backlog.md` — tamamlandı maddesi eklendi

---

## Eski Metadata Dosyalarına Dokunulmadı

Bu güncelleme sadece bundan sonraki üretimler için geçerli. Daha önce oluşturulmuş tüm metadata JSON dosyaları olduğu gibi kaldı.

---

## Sonraki Gün Önerisi

**Day-15:** `23-soz-1-mebhas-4-nokta-landscape-load-input.js` ile landscape smoke test yapmak.
