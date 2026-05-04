# Day-14 YouTube Başlık Standardı Güncellemesi

**Tarih:** 2026-05-04
**Tür:** Prompt standardı güncellemesi (uygulama kodu değişikliği yok)

---

## Amaç

Bundan sonraki YouTube metadata üretimlerinde başlık seçeneklerini daha merak uyandırıcı hale getirmek. "Neden?", "Nasıl?", "Ne olur?" gibi soru yapıları izleyicinin kendi sorusunu başlıkta görmesini sağlar; bu da organik tıklanma ihtimalini artırabilir.

---

## Güncellenen Kural

`docs/prompts/youtube-metadata.md` üç noktada güncellendi:

**Yeni bölüm — "Başlık Stratejisi — Soru ve Merak Odaklı Yapı":**
- Neden/nasıl/ne olur/niçin yapıları özellikle değerlendirilecek
- Zorunlu değil; anlamı bozuyorsa kullanılmayacak
- Clickbait yasak; başlık videonun gerçekten cevapladığı soruyu taşıyacak

**Landscape prompt başlık kuralı güncellemesi:**
- 5–8 alternatiften en az yarısı soru/merak yapısında olacak
- `selected_title` seçilirken güçlü soru başlığına öncelik verilecek

**Shorts prompt başlık kuralı güncellemesi:**
- 3–5 alternatiften en az 1–2 tanesi soru/merak yapısında olacak
- Hook ile uyumlu, soru başlığı güçlü değilse kısa vurucu başlık tercih edilecek

---

## Örnek Başlık Kalıpları

Landscape için:
- `İnsan Neden Bu Kadar Muhtaçtır?`
- `İman İnsanı Nasıl Değiştirir?`
- `Dua Neden Zayıflık Değildir?`
- `Kalp Neden Tatmin Olmaz?`
- `Muhtaçlık Neden Bir Yük Değil?`

Shorts için:
- `İnsan Neden Korkar?`
- `Dua Neden Zayıflık Değil?`
- `Kalp Neden Yorulur?`
- `Sevgi Neden Acıtır?`
- `İman İnsanı Nasıl Değiştirir?`

---

## Kapsam Dışı

- Eski metadata JSON dosyaları değiştirilmedi
- Eski YouTube başlıkları değiştirilmedi
- Sadece bundan sonraki üretimler için prompt standardı güncellendi

---

## Sonraki Adım

Day-15: `23-soz-1-mebhas-4-nokta-landscape-load-input.js` ile landscape smoke test.
