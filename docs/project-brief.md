# Proje Brief — Derin Okuma

## Proje Nedir?

Derin Okuma, Risale-i Nur külliyatını günümüz insanına anlamlı biçimde açıklamayı hedefleyen bir blog ve içerik platformudur.

Her yazı:
- Bir metni bölüm bölüm ele alır
- Katman katman açar
- Günümüz örnekleriyle somutlaştırır
- Bugünkü hayata taşır

---

## Hedef Kitle

- Risale-i Nur'u okumak isteyip nereden başlayacağını bilemeyen okuyucular
- Metni okumuş ama derinlemesine anlamlandırmak isteyen okuyucular
- Gençler: günümüz psikolojisi, felsefesi ve sosyolojisi çerçevesinden Risale'ye bakmak isteyenler

---

## İçerik Odağı

Mevcut içerikler ağırlıklı olarak şu eserleri kapsıyor:
- 10. Söz (Haşir Risalesi)
- 21. Söz
- 23. Söz
- 24. Söz (Sevgi ve Korku bölümü)

---

## Platform ve Deployment

- **Site:** https://derin-okuma.vercel.app/
- **GitHub:** LeviAckermanajs/derin-okuma
- **Deployment:** Vercel, main branch üzerinden otomatik

---

## İçerik Üretim Akışı (Mevcut Durum)

1. Metin okunur ve analiz edilir
2. Blog yazısı hazırlanır (`src/content/blog/`)
3. Git push → Vercel otomatik deploy
4. Blog yazısı n8n pipeline'a alınır
5. Landscape ve shorts video üretilir
6. Narration şu an manuel: ChatGPT ile hazırlanıp n8n'e ekleniyor

---

## Uzun Vadeli Vizyon

- Blog yazılarından otomatik narration üretimi
- Sahne bazlı JSON üretimi (video pipeline için)
- YouTube başlık / açıklama üretimi
- Shorts hook üretimi

Bkz: `docs/ai-workflow.md`
