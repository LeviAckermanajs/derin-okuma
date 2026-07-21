// Derin Okuma — 2.Şua - 1.Makam - 1.Meyve landscape video
// n8n Load Input Code node payload

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "2.Şua - 1.Makam - 1.Meyve",
    "description": "Tevhid bakışı, dağınık görünen nimetleri, şifayı, güzelliği ve canlıların kıymetini tek bir rahmet ve sahiplik altında okumaya davet eder.",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "2-sua-1-makam-1-meyve-tevhid-daginik-gorunen-hayati-birlestiren-bakis-landscape-day-55"
  },
  "reuse_existing_audio": {
    "enabled": false,
    "audio_mode": "single_track",
    "audio_track": {
      "mode": "single",
      "path": "",
      "duration_seconds": null
    }
  },
  "reuse_existing_video": {
    "enabled": false,
    "visual_mode": "semantic",
    "video_root": "",
    "path_template": "{scene_id}.mp4"
  },
  "visual_mode": "ambient",
  "audio_strategy": {
    "mode": "single_track",
    "timing_strategy": "elevenlabs_timestamps",
    "join_separator": "\n\n"
  },
  "render_preferences": {
    "mode": "full_video",
    "subtitles_enabled": true,
    "render_mode": "landscape",
    "produce_both": false,
    "background_music_enabled": true,
    "target_aspect_ratio": "16:9",
    "target_resolution": "1920x1080",
    "target_fps": 30,
    "voice_language": "tr"
  },
  "scenes": [
    {
      "scene_id": "scene-001",
      "title": "Dağınık Görünen Hayat",
      "narration": "İnsan dünyaya baktığında çoğu zaman dağınık olaylar görür. Bir yerde yavruya süt gelir, başka yerde hasta şifa bulur, bir çiçek açar, bir meyve olgunlaşır. İlk bakışta bunlar birbirinden kopuk hadiseler gibi durur. Fakat kalp daha derin bakınca, hepsinin aynı merhamet dilini konuştuğunu fark eder.",
      "visual_note": "wide landscape of morning valley with scattered light, calm cinematic atmosphere",
      "keywords": [
        "morning valley",
        "soft light",
        "contemplation"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Bakışın Değişmesi",
      "narration": "Aynı hayat, iki ayrı gözle okunabilir. Biri sadece sebepleri, maddeleri ve tesadüf ihtimalini görür. Diğeri sebeplerin ardında hikmeti, ölçüyü ve rahmeti sezer. Fark, gördüğümüz şeylerde değil, onları birbirine bağlayan anlamdadır.",
      "visual_note": "person looking over a city from a quiet hill at sunrise",
      "keywords": [
        "city overlook",
        "sunrise",
        "perspective"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Tevhid Birleştirir",
      "narration": "Tevhid, varlığı tek bir sahiplik altında okumaktır. Bu bakış küçük bir nimeti yalnız bırakmaz; onu bütün nimetlerle aynı kaynağa bağlar. Böylece hayat parçalanmış bir görüntü olmaktan çıkar. Her şey aynı rahmetin farklı yüzleri gibi görünmeye başlar.",
      "visual_note": "river branches joining into one calm stream, aerial nature shot",
      "keywords": [
        "river confluence",
        "unity",
        "nature"
      ]
    },
    {
      "scene_id": "scene-004",
      "title": "Nimetin Söylediği",
      "narration": "Bir nimet yalnızca fayda taşımaz; aynı zamanda bir mesaj taşır. Sofraya gelen lokma, bedene güç verdiği kadar kalbe de şunu hatırlatır: İhtiyaç görülüyor, açlık unutulmuyor, rızık başıboş gelmiyor. Nimetin arkasındaki bu şefkat duyulmadığında, sofranın manası eksik kalır.",
      "visual_note": "simple table with bread and water near a window, warm natural light",
      "keywords": [
        "simple table",
        "bread",
        "gratitude"
      ]
    },
    {
      "scene_id": "scene-005",
      "title": "Yavrunun Sütü",
      "narration": "Bir yavru dünyaya geldiğinde hiçbir ihtiyacını kendi gücüyle karşılayamaz. Ne arayacağını bilir, ne kendini koruyabilir, ne de rızkını hazırlayabilir. Fakat tam o aczin ortasında ona temiz ve besleyici bir süt gönderilir. Annenin şefkati de bu hizmete sevk edilir.",
      "visual_note": "newborn animal with mother in soft farm light, tender natural scene",
      "keywords": [
        "newborn animal",
        "mother care",
        "milk"
      ]
    },
    {
      "scene_id": "scene-006",
      "title": "Aczin İçindeki Rahmet",
      "narration": "Yavrunun zayıflığı, yalnızca korunmasızlık değildir. O zayıflık, rahmetin görünür hâle geldiği bir pencere olur. En muhtaç varlığın en uygun rızıkla karşılanması, soğuk bir tesadüf gibi okunamaz. Kalp, bu denk gelişte bilerek gözeten bir merhameti hisseder.",
      "visual_note": "close up of gentle hands protecting a small life, soft daylight",
      "keywords": [
        "gentle hands",
        "protection",
        "mercy"
      ]
    },
    {
      "scene_id": "scene-007",
      "title": "Sebep ve Sahip",
      "narration": "Sebepler hayatın içinde vardır ve görevlerini yaparlar. Anne şefkat eder, toprak bitkiyi taşır, su canlılara ulaşır. Fakat sebep nimetin sahibi değildir. Sebebi asıl kaynak sanmak, hediyeyi taşıyan eli hediyenin gerçek sahibi zannetmeye benzer.",
      "visual_note": "hands passing a wrapped gift in soft light, meaningful close shot",
      "keywords": [
        "gift",
        "hands",
        "cause"
      ]
    },
    {
      "scene_id": "scene-008",
      "title": "Şifanın Dili",
      "narration": "Hastalık geldiğinde insan aczini daha açık hisseder. Bir ilaç, bir doktor, bir bakım, bir iyileşme süreci hayatına girer. Şifa yalnızca kimyasal bir sonuç gibi görüldüğünde kalp daralır. Rahmet penceresinden bakıldığında ise yeryüzü büyük bir şifa evi gibi açılır.",
      "visual_note": "quiet hospital corridor with sunlight and hopeful atmosphere",
      "keywords": [
        "hospital light",
        "healing",
        "hope"
      ]
    },
    {
      "scene_id": "scene-009",
      "title": "İlaçların Ardındaki Düzen",
      "narration": "Bir bitkinin yaprağında, bir madenin terkibinde, bir bedenin iyileşme kabiliyetinde ince bir düzen vardır. İnsan bunlardan faydalanır, araştırır ve tedavi yolları geliştirir. Fakat bütün bu yollar, daha büyük bir şefkat düzeninin parçalarıdır. Şifa, sebeplerle gelir; fakat sebeplerle sınırlı değildir.",
      "visual_note": "medicinal plants on a wooden table with laboratory glassware, calm natural light",
      "keywords": [
        "medicinal plants",
        "laboratory",
        "healing"
      ]
    },
    {
      "scene_id": "scene-010",
      "title": "Rahmeti Kaybetmek",
      "narration": "Nimet aynı nimet olarak kalabilir; fakat anlamı kaybolabilir. Süt gelir, ilaç tesir eder, yağmur iner, meyve olgunlaşır. Eğer kalp bunları sahipsiz görürse, varlığın içindeki sıcaklık sönükleşir. O zaman insan çok şey aldığı hâlde az şey duyar.",
      "visual_note": "rain on window with a dim room slowly brightening, contemplative mood",
      "keywords": [
        "rain window",
        "dim room",
        "meaning"
      ]
    },
    {
      "scene_id": "scene-011",
      "title": "Küçük Şeylerin Büyümesi",
      "narration": "Tevhid bakışı küçük görünen şeyleri büyütür. Bir meyve artık sadece dalından koparılmış bir yiyecek değildir. Koca yeryüzü sofrasına, güneşe, yağmura, mevsime ve rahmete bağlı bir ikramdır. Küçük lokma, büyük bir düzenin habercisi olur.",
      "visual_note": "ripe fruit hanging on a tree with sunlight through leaves",
      "keywords": [
        "ripe fruit",
        "sunlight",
        "orchard"
      ]
    },
    {
      "scene_id": "scene-012",
      "title": "Çiçeğin Aynası",
      "narration": "Bir çiçek kısa ömürlüdür; sabah açar, zamanla solar. Buna rağmen taşıdığı güzellik tesadüfî bir süs gibi durmaz. Renk, koku, ölçü ve zarafet bir araya gelir. Fani bir güzellik, bâki bir güzelliğe işaret eden küçük bir ayna olur.",
      "visual_note": "single wildflower in meadow, macro shot, golden hour light",
      "keywords": [
        "wildflower",
        "macro",
        "beauty"
      ]
    },
    {
      "scene_id": "scene-013",
      "title": "Güneşe Bakan Ayna",
      "narration": "Küçük bir ayna tek başına sınırlıdır. Fakat güneşe döndüğünde ışığı taşır, parlaklık kazanır ve kendinden büyük bir manayı gösterir. İnsan da varlığa böyle bakınca, sınırlı şeylerin sınırsız bir güzelliğe işaret ettiğini anlar. Tevhid, aynayı ışığa çevirir.",
      "visual_note": "small mirror reflecting sunlight on a quiet wall, cinematic close up",
      "keywords": [
        "mirror",
        "sunlight",
        "reflection"
      ]
    },
    {
      "scene_id": "scene-014",
      "title": "Tek Sözün Lezzeti",
      "narration": "Lâ ilâhe illallah sözü, yalnızca dilde tekrar edilen bir cümle değildir. Dağınık görünen her şeyi tek bir merkeze bağlayan bir anahtardır. Kalp bu manayı tattığında, dünyadaki her nimet aynı kapıdan gelen bir hediye gibi görünür. Bu yüzden o söz, ruh için derin bir ferahlık taşır.",
      "visual_note": "person quietly praying at dawn beside an open window, serene atmosphere",
      "keywords": [
        "prayer",
        "dawn",
        "inner peace"
      ]
    },
    {
      "scene_id": "scene-015",
      "title": "Kâinatın Ortak Dili",
      "narration": "Güneş ışık verir, bulut yağmur taşır, toprak tohumu saklar, ağaç meyve yetiştirir. Ayrı ayrı görünen bu işler, aynı hayatı besleyen ortak bir düzene hizmet eder. Tevhid, bu ortak dili okunur hâle getirir. Varlık sanki tek bir cümle kurar: Her şey bir elden geliyor.",
      "visual_note": "sun, clouds, soil and trees in a wide countryside time lapse",
      "keywords": [
        "countryside",
        "clouds",
        "trees"
      ]
    },
    {
      "scene_id": "scene-016",
      "title": "Sahipsizlik Korkusu",
      "narration": "İnsanı en çok yoran duygulardan biri sahipsizlik hissidir. Kendi gücü yetmez, geleceği göremez, sevdiklerini tam koruyamaz. Varlık da sahipsiz zannedildiğinde bu korku büyür. Tevhid ise kalbe, hiçbir şeyin boşlukta bırakılmadığını söyler.",
      "visual_note": "lonely person on a foggy road with distant warm light",
      "keywords": [
        "foggy road",
        "loneliness",
        "warm light"
      ]
    },
    {
      "scene_id": "scene-017",
      "title": "Canlıların Kıymeti",
      "narration": "Küçük bir canlı kendi başına bakıldığında önemsiz sanılabilir. Fakat bir sahibin mülkü olarak görüldüğünde değeri değişir. Bir karınca, bir kuş, bir yaralı hayvan, bir çocuk aynı rahmetin gözetimi altındadır. Kıymet yalnız güçten değil, ait olunan yerden gelir.",
      "visual_note": "small ant moving across green leaf, macro nature footage",
      "keywords": [
        "ant",
        "green leaf",
        "small life"
      ]
    },
    {
      "scene_id": "scene-018",
      "title": "Genel Kanunlar ve Özel İhsanlar",
      "narration": "Kâinatta geniş kanunlar işler; mevsimler döner, bedenler yaşlanır, canlılar mücadele eder. Fakat bu kanunların içinde özel yardımlar ve ince ihsanlar da görünür. En sert şartların arasında bile bir canlıya yol açılır. Rahmet, sadece geniş düzende değil, tek bir canlının ihtiyacında da belirir.",
      "visual_note": "tiny plant growing through stone crack, close cinematic shot",
      "keywords": [
        "plant crack",
        "resilience",
        "mercy"
      ]
    },
    {
      "scene_id": "scene-019",
      "title": "Dert Dinleyen Sahiplik",
      "narration": "İnsan bazen kendi derdinin bile tam anlaşılmadığını düşünür. Oysa tevhid bakışı her canlının ihtiyacının görüldüğünü, her feryadın işitildiğini hatırlatır. Bu, yüzeysel bir teselli değildir. Varlığın tamamını kuşatan bir sahiplik fikridir.",
      "visual_note": "person sitting quietly near a lake at sunset, reflective mood",
      "keywords": [
        "quiet lake",
        "sunset",
        "reflection"
      ]
    },
    {
      "scene_id": "scene-020",
      "title": "Mazlum ve Muhtaç",
      "narration": "Zayıf, yaralı, küçük ya da musibete uğramış varlıklara bakınca kalp ister istemez sızlar. Bu sızı, dünyada merhametin ne kadar gerekli olduğunu gösterir. Tevhid, bu sızıyı karanlık bir çaresizliğe bırakmaz. Her muhtaçlığın Rahman ismine açılan bir yönü vardır.",
      "visual_note": "injured bird being cared for gently, soft documentary style",
      "keywords": [
        "injured bird",
        "care",
        "compassion"
      ]
    },
    {
      "scene_id": "scene-021",
      "title": "Gücün Ölçüsü",
      "narration": "İnsan çoğu zaman değeri güçle ölçer. Daha büyük, daha görünür ve daha baskın olanı daha kıymetli sanır. Fakat hakiki değer, yalnız dış kuvvetle anlaşılmaz. Allah'a bağlılık, en küçük varlığa bile büyük bir şeref kazandırır.",
      "visual_note": "small candle glowing in a large dark hall, quiet cinematic mood",
      "keywords": [
        "candle",
        "dark hall",
        "dignity"
      ]
    },
    {
      "scene_id": "scene-022",
      "title": "Karınca ve Gurur",
      "narration": "Kendini her şeyin sahibi zanneden bir gurur, insanı içten küçültür. Aczini bilen küçük bir canlı ise ait olduğu rahmet düzeniyle değer kazanır. Ölçü tersine döner: Büyüklük iddia etmekte değil, hakiki sahibini bilmektedir. Tevhid, gururu indirir ve aczi şereflendirir.",
      "visual_note": "macro ant beside a large shadow, symbolic contrast, natural ground",
      "keywords": [
        "ant macro",
        "shadow",
        "humility"
      ]
    },
    {
      "scene_id": "scene-023",
      "title": "Emanet Olarak Dünya",
      "narration": "Bir şeyin sahibi değişince ona bakış da değişir. Emanet bilinci, insana varlığı hor kullanmamayı öğretir. Çiçek yalnız süs, hayvan yalnız araç, insan yalnız beden değildir. Her biri ilahî sahipliğin içinde korunması gereken bir değerdir.",
      "visual_note": "hands gently holding soil and a small seedling, environmental care mood",
      "keywords": [
        "seedling",
        "hands",
        "stewardship"
      ]
    },
    {
      "scene_id": "scene-024",
      "title": "Şirkin Ağırlığı",
      "narration": "Şirk yalnız yanlış bir düşünce olarak kalmaz; varlığın hakkını da örter. Nimetin sahibini sebeplere vermek, nimetin taşıdığı rahmet manasını susturur. Canlıların Allah'a mensubiyetinden gelen şeref perdelenir. Bu yüzden mesele sadece fikir değil, adalet meselesidir.",
      "visual_note": "beautiful landscape partially covered by dark shadow then opening to light",
      "keywords": [
        "shadow",
        "light",
        "truth"
      ]
    },
    {
      "scene_id": "scene-025",
      "title": "Nimeti Sahipsiz Bırakmamak",
      "narration": "Bir yavruya gelen sütü yalnız biyolojik süreç diye okumak mümkündür. Fakat o okuma, yavrunun aczine denk gelen şefkati açıklamakta eksik kalır. Bir hasta şifa bulduğunda yalnız maddeyi görmek de aynı eksikliği taşır. Tevhid, nimeti sahibine bağlayarak anlamını korur.",
      "visual_note": "mother and child silhouette by bright window, quiet tender scene",
      "keywords": [
        "mother child",
        "silhouette",
        "care"
      ]
    },
    {
      "scene_id": "scene-026",
      "title": "Perdeler Kalkınca",
      "narration": "Hayatın yüzeyinde sebepler görünür; derininde ise hikmet ve rahmet okunur. Yağmur buluttan gelir, ama rahmeti yalnız buluta sığdırmak mümkün değildir. Meyve ağaçtan gelir, ama ikramı yalnız ağaca vermek kalbi daraltır. Perdeler kalkınca her sebep kendi sınırını gösterir.",
      "visual_note": "rain clouds clearing over an orchard, wide cinematic landscape",
      "keywords": [
        "rain clouds",
        "orchard",
        "clearing sky"
      ]
    },
    {
      "scene_id": "scene-027",
      "title": "Tevhid ve Ferahlık",
      "narration": "İnsan parçalanmış bir dünyada yaşadığını sandığında zihni yorulur. Her ihtiyacı ayrı kapıya, her güzelliği ayrı kaynağa, her şifayı ayrı güce bağlamak kalbi dağıtır. Tevhid bu dağınıklığı toplar. Kalp tek bir rahmete yöneldiğinde ferahlık bulur.",
      "visual_note": "wide open plain after storm with sunlight breaking through clouds",
      "keywords": [
        "open plain",
        "after storm",
        "relief"
      ]
    },
    {
      "scene_id": "scene-028",
      "title": "Dünyanın Aynı Kalması",
      "narration": "Tevhid dünyayı fiziksel olarak değiştirmez. Süt yine süttür, ilaç yine ilaçtır, çiçek yine çiçektir. Değişen, onların kalpte açtığı anlamdır. Aynı eşya, sahipsiz bir tesadüf olmaktan çıkar ve rahmetin işareti hâline gelir.",
      "visual_note": "ordinary objects on a table transformed by warm morning light",
      "keywords": [
        "ordinary objects",
        "morning light",
        "meaning"
      ]
    },
    {
      "scene_id": "scene-029",
      "title": "Güzelliğin Kaynağı",
      "narration": "Güzellik yalnız göze hoş gelen bir düzen değildir. Kalp, güzelliğin arkasında sevdiren ve kendini tanıttıran bir cemal sezer. Bir çiçeğin rengi, bir çocuğun tebessümü, bir sabahın ışığı aynı hakikate işaret eder. Güzellik, sahibini hatırlattığında derinleşir.",
      "visual_note": "child smiling in morning garden with flowers and sunlight",
      "keywords": [
        "child smile",
        "garden",
        "beauty"
      ]
    },
    {
      "scene_id": "scene-030",
      "title": "İnsan İçin Okuma Biçimi",
      "narration": "Tevhid yalnız kâinata dair bir bilgi değildir; insanın iç dünyasını da düzenler. Şükür daha bilinçli olur, dua daha canlı olur, tevekkül daha sağlam olur. Çünkü insan kime muhtaç olduğunu ve kimden geldiğini bilir. Bu bilgi kalbe yön verir.",
      "visual_note": "person writing in a journal beside a window with prayer beads nearby",
      "keywords": [
        "journal",
        "prayer beads",
        "gratitude"
      ]
    },
    {
      "scene_id": "scene-031",
      "title": "Duanın Zemini",
      "narration": "Her şeyi bir rahmetin içinde gören insan, duasında yalnız kalmaz. Çünkü ihtiyacını işiten bir Rabbin huzurunda olduğunu bilir. Küçük bir isteği bile küçümsemez; büyük bir derdi de ümitsiz görmez. Tevhid, duaya geniş bir ufuk açar.",
      "visual_note": "hands raised in prayer under a vast evening sky, peaceful mood",
      "keywords": [
        "prayer hands",
        "evening sky",
        "hope"
      ]
    },
    {
      "scene_id": "scene-032",
      "title": "Varlığın Hakkı",
      "narration": "Her varlığı Allah'ın mülkü olarak görmek, ona saygıyla bakmayı gerektirir. İnsan tabiatı tüketilecek bir yığın, canlıları değersiz ayrıntılar, nimetleri sıradan nesneler gibi göremez. Sahiplik bilinci, ahlakı da derinleştirir. Tevhid, bakışı düzelttiği gibi davranışı da düzeltir.",
      "visual_note": "person walking carefully through a lush forest, respectful nature mood",
      "keywords": [
        "forest walk",
        "respect",
        "stewardship"
      ]
    },
    {
      "scene_id": "scene-033",
      "title": "Hiçbir Şey Unutulmuş Değil",
      "narration": "Dünyanın kalabalığı içinde insan bazen küçük ihtiyaçların kaybolduğunu sanır. Fakat bir tohumun toprağı bulması, bir yavrunun rızka kavuşması, bir yaranın iyileşmesi başka bir şey söyler. İnce ihtiyaçlar ince ihsanlarla karşılanır. Hiçbir canlı mutlak sahipsizliğe terk edilmiş değildir.",
      "visual_note": "seed sprouting from soil with dew drops in early morning macro shot",
      "keywords": [
        "sprouting seed",
        "dew",
        "new life"
      ]
    },
    {
      "scene_id": "scene-034",
      "title": "Birleştiren Bakış",
      "narration": "Tevhid, insanın kalbine dağınık görünen hayatı birleştiren bir bakış verir. Nimet rahmete, şifa şefkate, güzellik cemale, canlılar sahipliğe bağlanır. Böylece dünya aynı kalır, fakat anlamı genişler. Kalp şunu hisseder: Hiçbir nimet sahipsiz değil, hiçbir canlı unutulmuş değil.",
      "visual_note": "sunrise over wide landscape with river, trees and open sky, concluding cinematic shot",
      "keywords": [
        "sunrise landscape",
        "river",
        "unity"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "2-sua-1-makam-1-meyve-tevhid-daginik-gorunen-hayati-birlestiren-bakis",
    "test_day": "day-55",
    "workflow": "manual_scene_json_single_track_landscape_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
