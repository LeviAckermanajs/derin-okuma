// Unified workflow — Derin Okuma / Sevgi ve Korku landscape smoke test
// Output: landscape, single ElevenLabs narration track
// Paste this into the n8n "Load Input" Code node.
//
// render_mode: 'landscape' | 'shorts'
// produce_both: true -> landscape + shorts in one run
// visual_mode: 'ambient' | 'semantic'

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  job: {
    title: 'Sevgi ve Korku',
    description: 'Derin Okuma blog yazısından üretilen landscape video narration smoke test inputu.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'sevgi-ve-korku-landscape-day-06-single-track'
  },

  reuse_existing_audio: {
    enabled: false,
    audio_mode: 'single_track',
    audio_track: {
      mode: 'single',
      path: '',
      duration_seconds: null
    }
  },

  reuse_existing_video: {
    enabled: false,
    visual_mode: 'semantic',
    video_root: '',
    path_template: '{scene_id}.mp4'
  },

  visual_mode: 'ambient',

  audio_strategy: {
    mode: 'single_track',
    timing_strategy: 'elevenlabs_timestamps',
    join_separator: '\n\n'
  },

  render_preferences: {
    mode: 'full_video',
    subtitles_enabled: true,
    render_mode: 'landscape',
    produce_both: false,
    background_music_enabled: true,
    target_fps: 30
  },

  scenes: [
    {
      "scene_id": "scene-001",
      "title": "Giriş — İki Temel Güç",
      "narration": "İnsan hayatında her şeyi şekillendiren iki temel duygu vardır: sevgi ve korku. Bunlar sadece geçici birer his değildir. İnsanın yaratılışına yerleştirilmiş, hayatını yönlendiren, kararlarını etkileyen iki büyük iç güçtür. Ve bu iki güç her zaman bir yere yönelir.",
      "visual_note": "quiet forest path at dawn, soft golden light filtering through trees, slow cinematic movement",
      "keywords": ["forest path", "dawn light", "calm nature"]
    },
    {
      "scene_id": "scene-002",
      "title": "Muhabbet — Kâinatın Varlık Sebebi",
      "narration": "Sevgi, bu kâinatın var oluşunun sebebidir. Kâinatı salt mekanik ve soğuk bir düzenden ibaret görmek mümkün değildir. Arka planda bir iltifat, bir yöneliş, bir cazibe vardır. Sevgi bu kâinatın varoluşunu anlamlı kılan özüdür.",
      "visual_note": "wide aerial view of misty mountains at sunrise, calm peaceful atmosphere, cinematic nature",
      "keywords": ["misty mountains", "sunrise", "wide landscape"]
    },
    {
      "scene_id": "scene-003",
      "title": "Muhabbet — Kâinatın Rabıtası",
      "narration": "Sevgi aynı zamanda kâinatı bir arada tutan bağdır. Eşyayı, insanları, anlamı bir arada tutan bu bağ olmasa, hayat dağılıp giderdi. İnsan da eşyayla, başkalarıyla, gelecekle bağ kurarak yaşar. Sevgi olmadan bu bağlar çözülür.",
      "visual_note": "intertwining tree roots in a forest, morning mist, serene and grounded atmosphere",
      "keywords": ["tree roots", "forest floor", "connection nature"]
    },
    {
      "scene_id": "scene-004",
      "title": "Muhabbet — Nurudur ve Hayatıdır",
      "narration": "Sevgi, eşyayı aydınlatan bir nurdur. Sevdiğinde bir şeyi sadece nesne olarak görmezsin; onda değer, güzellik, anlam görürsün. Sevgi aynı zamanda hayatın hareketini besler. Sevgi çekilirse insan ruhen donar. Bu yüzden mesele sevgiyi yok etmek değil, onu doğru yere bağlamaktır.",
      "visual_note": "soft sunlight breaking through forest canopy, warm rays of light on leaves, peaceful glow",
      "keywords": ["sunlight", "forest light", "warm glow"]
    },
    {
      "scene_id": "scene-005",
      "title": "İnsan — Kâinatın En Câmi' Meyvesi",
      "narration": "İnsan, kâinattaki pek çok anlamı üzerinde toplayan bir varlıktır. Hayvan sadece belli ihtiyaçlarıyla sınırlı yaşarken insan geçmişi düşünür, geleceği kurar, başkalarının acısıyla üzülür, uzak coğrafyaları merak eder, ölüm ve sonsuzluk gibi soyut şeylerle ilgilenir. İnsanın kalbi dardır denilmez; tersine geniş bir kapasite taşır.",
      "visual_note": "person sitting alone on a hilltop, looking at vast landscape, contemplative mood, golden hour",
      "keywords": ["hilltop", "golden hour", "vast landscape", "contemplation"]
    },
    {
      "scene_id": "scene-006",
      "title": "Kâinatı İstilâ Edecek Bir Muhabbet",
      "narration": "İnsanın içine sadece bir kişiyi veya bir şeyi sevecek kadar küçük bir sevgi konulmamıştır. Her şeyi sevmek, her şeyle bağ kurmak ister insan kalbi. Hep sevecek bir şey arar, hayran olacak bir güzellik, dayanacak bir merkez. Bu arayış, insanın ne kadar geniş bir kapasiteyle yaratıldığının işaretidir.",
      "visual_note": "wide open field under a vast sky, wind moving through tall grass, expansive and open mood",
      "keywords": ["open field", "vast sky", "wind grass"]
    },
    {
      "scene_id": "scene-007",
      "title": "Sınırlı Şeylere Büyük Sevgi",
      "narration": "Ama insan büyük sevme kapasitesini sınırlı nesnelere döktüğünde sorun başlar. Biri ilişkiye, biri kariyere, biri parasına, biri toplumsal onaya bütün varlığını yükler. Niye? Çünkü içindeki sevme kapasitesi büyük. Ama büyük bir kapasiteyi küçük şeylere dökersen, o şey ya kırılır ya da seni kırar.",
      "visual_note": "cracked dry earth in sunlight, abstract texture, sense of something stretched too thin",
      "keywords": ["cracked earth", "dry texture", "abstract nature"]
    },
    {
      "scene_id": "scene-008",
      "title": "Sonsuz Sevgiye Layık Olan",
      "narration": "Eğer sende sonsuza açılan bir sevme kapasitesi varsa, bu kapasite boşuna verilmiş olamaz. O hâlde o sevgiye gerçekten layık olan, sonsuz bir Zât olmalıdır. İnsanın bitmez sevme ihtiyacı, aynı zamanda hakikate işaret eden içsel bir delildir.",
      "visual_note": "night sky full of stars, milky way visible, long exposure, infinite depth",
      "keywords": ["night sky", "stars", "milky way", "infinity"]
    },
    {
      "scene_id": "scene-009",
      "title": "Havf ve Muhabbet — Fıtrata Yerleştirilen İki Cihaz",
      "narration": "Sevgi ve korku, sonradan oluşmuş rastgele duygular değildir. İnsan yaratılışına yerleştirilmiş temel mekanizmalardır. Korku da düşman değildir; yerinde kullanılırsa koruyucu ve yönlendirici bir işlev görür. Sevgi de kendi başına masum değildir; yanlış yere bağlanırsa insanı esir alır.",
      "visual_note": "compass on a wooden surface, soft light, directional and purposeful mood",
      "keywords": ["compass", "direction", "purpose"]
    },
    {
      "scene_id": "scene-010",
      "title": "Bu İki Güç Mutlaka Bir Yere Yönelir",
      "narration": "Sevgi ve korku boşta kalmaz. Mutlaka bir yere yönelir. İnsan sevmeden duramaz; korkmadan da duramaz. Mesele, bu iki gücün yaratılmışlara mı, Yaratıcı'ya mı yöneldiğidir. Bu tercih insanın iç dünyasını ya toplayan ya da dağıtan temel tercih hâline gelir.",
      "visual_note": "a river splitting into two streams in a forest, choice of paths, calm flowing water",
      "keywords": ["river split", "two paths", "flowing water", "forest"]
    },
    {
      "scene_id": "scene-011",
      "title": "Halktan Korku — Elim Bir Belâ",
      "narration": "İnsanlardan veya dış dünyadan korku, içten sızlayan bir belâdır. Çünkü korktuğun şeylerin sana merhamet etmesi, senin istirhamını kabul etmesi garanti değildir. Yaratılmışların elinde mutlak güç yoktur; merhametleri de sınırlıdır. Onlardan nihai korku üretmek insanı perişan eder.",
      "visual_note": "person walking alone in rain on an empty street, reflections on wet pavement, solitary mood",
      "keywords": ["rainy street", "solitude", "reflection", "walking"]
    },
    {
      "scene_id": "scene-012",
      "title": "İnsanların Gözüne Bağlı Yaşamak",
      "narration": "Beni yetersiz bulurlar mı? Bana saygı duymazlarsa ne olur? O kişi beni sevmezse hayatım anlamsız olur. Bu korkular insanı sürekli tetikte tutar. Çünkü insanların gönlü değişkendir, bakışları değişir, yargıları dönüşür. Bu yüzden onlara bağlanan korku asla tam bir güvence üretemez.",
      "visual_note": "abstract blurred crowd in soft focus, single figure in foreground, sense of isolation amid noise",
      "keywords": ["crowd blur", "isolation", "soft focus", "abstract"]
    },
    {
      "scene_id": "scene-013",
      "title": "İş, Statü ve Gelecek Korkuları",
      "narration": "Patronun bakışı, çevrenin yargısı, ekonomik prestij kaybı, toplum içindeki yerini kaybetme korkusu... Bunlar tamamen önemsiz değildir. Ama nihai korku hâline geldiğinde insan ruhunu yer. Çünkü kontrol edemediğin şeylere bağlanan korku güven üretmez, sadece yıpratır.",
      "visual_note": "empty office corridor at night, fluorescent lights, sense of quiet pressure and uncertainty",
      "keywords": ["empty corridor", "office", "night", "uncertainty"]
    },
    {
      "scene_id": "scene-014",
      "title": "Halkı Sevmenin Belâsı",
      "narration": "Sevgi güzeldir ama yanlış yere bağlandığında acı üretir. Fanî bir şeye sonsuz bir bağ kurulduğunda, o şey ya seni tanımaz, ya tahkir eder, ya da ayrılık gelir. Fanî şeyleri sevmek kötü değildir; onları bağımsız ve mutlak bir merkez olarak sevmek sorun yaratır.",
      "visual_note": "autumn leaves falling from trees, slow motion, beauty and impermanence",
      "keywords": ["autumn leaves", "falling", "impermanence", "slow motion"]
    },
    {
      "scene_id": "scene-015",
      "title": "Fanî Şey Seni Tanımaz",
      "narration": "Gençlik seni tanımaz. Para seni tanımaz. Güzellik, şöhret, beden gücü seni tanımaz. Sen onlara gönül bağlarsın ama onlar sana sadakat borçlu değildir. Bu yüzden onlara sonsuzluk yüklemek kaçınılmaz biçimde hayal kırıklığı doğurur.",
      "visual_note": "reflection in still water disturbed by a single ripple, mirror image fading",
      "keywords": ["water reflection", "ripple", "stillness", "fading"]
    },
    {
      "scene_id": "scene-016",
      "title": "Fanî Şey Seni Tahkir Edebilir",
      "narration": "Bazen insan sevdiği şey veya kişi tarafından küçülür. Aşırı bağlılık karşı tarafta şu etkiyi doğurabilir: değersizleşirsin, sıradanlaşırsın, hatta istismar edilirsin. Sevgini merkeze koyduğun şey senin sınırlarını görmeyebilir; çünkü onu bu yüke hazırlamadan yükledin.",
      "visual_note": "dried flower in a forgotten corner, once vivid now faded, quiet sadness",
      "keywords": ["dried flower", "faded", "forgotten", "quiet"]
    },
    {
      "scene_id": "scene-017",
      "title": "Ayrılık Kaçınılmazdır",
      "narration": "Her dünyevî sevginin altına ayrılık ihtimali yazılmıştır. Gençlik gider, sağlık azalır, para biter, insanlar ölür, dostluklar zayıflar. Kalp bunları bilerek sevmeye devam eder. İnsan bu yüzden sürekli yarım bir huzurla yaşar. Çünkü sevdiği şeyin fanîliğini unutamaz.",
      "visual_note": "fog slowly rolling over hills at dusk, disappearing into mist, sense of passing",
      "keywords": ["fog", "dusk", "hills", "mist"]
    },
    {
      "scene_id": "scene-018",
      "title": "Mecazî Aşklarda Şikâyet",
      "narration": "İnsan çoğu zaman sevdiğini olduğu gibi sevmez. Ona kendi sonsuzluk arzusunu yükler. Ondan bekler ki hep anlasın, hiç değişmesin, beni tamamlasın, içimdeki boşluğu kapatsın. Ama bunlar bir insanın taşıyabileceği yükler değildir. Sonra kırılma başlar ve şikâyet aslında sevgiliden değil, yanlış yerleştirilmiş beklentiden doğar.",
      "visual_note": "a heavy stone on a narrow wooden bridge, symbolic weight, sense of strain",
      "keywords": ["stone", "wooden bridge", "weight", "symbolic"]
    },
    {
      "scene_id": "scene-019",
      "title": "Kalp — Samed'in Aynası",
      "narration": "Kalbin derinliği, hiçbir şeye muhtaç olmayan, herkesin kendisine muhtaç olduğu sonsuz bir Zât'a ayna olacak şekilde yaratılmıştır. Bu yüzden kalp sınırlı şeylerle tam olarak doyamaz. Sonsuz dayanak ister, tam vefa ister, bitmeyen rahmet ister. Bu istek onun fıtratının işaretidir.",
      "visual_note": "calm lake reflecting mountains and sky, perfect mirror image, still and deep",
      "keywords": ["lake reflection", "mountains", "mirror", "depth"]
    },
    {
      "scene_id": "scene-020",
      "title": "Modern Putlar",
      "narration": "Putperestlik taş ve heykel ile sınırlı değildir. Kalbin sonsuz yönelişini sınırlı bir nesneye mutlaklaştırmak da aynı kapıya çıkar. İlişki putu, beden putu, para putu, başarı putu, imaj putu, toplum onayı putu... Bir şey seni Allah'tan bağımsız biçimde tanımlayan merkez hâline gelmişse, orada tehlike vardır.",
      "visual_note": "ancient stone idol in overgrown ruins, symbolic and timeless, quiet warning",
      "keywords": ["ancient ruins", "stone", "overgrown", "symbolic"]
    },
    {
      "scene_id": "scene-021",
      "title": "Fıtrat Razı Olmaz",
      "narration": "İnsan bazen yanlış yere bağlandığında sadece dışarıdan değil, içeriden de huzursuz olur. Fıtrat 'bu değil' der. Her istediğine ulaşsa da içinin dolmaması, ilişki olsa da huzur bulamaması, kariyer yükselse de anlamsızlık hissetmesi... Bunlar fıtratın sesinden başka bir şey değildir.",
      "visual_note": "empty modern room with large window, minimal furniture, sense of hollow fullness",
      "keywords": ["empty room", "window", "minimal", "hollow"]
    },
    {
      "scene_id": "scene-022",
      "title": "Sevgiyi ve Korkuyu Doğru Yere Yönelt",
      "narration": "Bu havf ve muhabbeti, öyle birisine tevcih et ki senin havfın lezzetli bir tezellül olsun, muhabbetin zilletsiz bir saadet olsun. Bu cümle bir öğütün ötesinde, insanın iç dünyasını yeniden düzenleme davetidir. Merkezi değiştir; her şey değişir.",
      "visual_note": "compass needle settling to true north, soft light, sense of orientation and peace",
      "keywords": ["compass", "true north", "orientation", "peace"]
    },
    {
      "scene_id": "scene-023",
      "title": "Lezzetli Bir Tezellül",
      "narration": "İnsan yaratılmışlardan korktuğunda küçülür ve ezilir. Ama Allah'a karşı korkuda bu küçülme aşağılayıcı değildir. Yerini bulmuş, kabul edilmiş, güvende olan bir kulluk hâlidir. Kendini aciz kabul eder ama sahipsiz hissetmez. Bu yüzden bu tür bir korku lezzetlidir.",
      "visual_note": "small stream flowing gently beside mossy rocks, soft light, humble and peaceful scene",
      "keywords": ["stream", "mossy rocks", "gentle flow", "humble"]
    },
    {
      "scene_id": "scene-024",
      "title": "Muhabbetin Zilletsiz Saadeti",
      "narration": "Dünyadaki birçok sevgi insana zillet yaşatabilir: aşırı bağımlılık, kendini unutarak sevme, karşılıksızlık, gurur kırılması. Allah sevgisi insana zillet vermez; çünkü o sevgi insanın onurunu ezmez, onu yerli yerine oturtur. Kula kulluğu bitirir, Allah'a kulluğu başlatır.",
      "visual_note": "tall tree standing in open field, rooted and upright, sense of dignity and groundedness",
      "keywords": ["tall tree", "open field", "rooted", "upright"]
    },
    {
      "scene_id": "scene-025",
      "title": "Anne ve Çocuk — Allah Korkusu Metaforu",
      "narration": "Allah korkusu, insanı Allah'tan kaçıran değil, Allah'a sığındıran korkudur. Bir anne çocuğunu korkutup sinesine çektiğinde, o korku çocuğu itmez; tam tersine anneye yaklaştırır. Allah korkusu da böyledir: Ümitsizlik değil, rahmete yöneliş. Ezici dehşet değil, tövbeye sevk eden bir uyarı.",
      "visual_note": "mother and child silhouette at sunset, gentle embrace, warm backlight",
      "keywords": ["silhouette", "sunset", "embrace", "warmth"]
    },
    {
      "scene_id": "scene-026",
      "title": "Allah Korkusunda Dağınık Korkuları Toplamak",
      "narration": "Allah'tan korkan insan başka korkuların esaretinden kurtulmaya başlar. İnsanlardan aşırı korkmaz, rızıktan aşırı korkmaz, kaybetmekten yıkılmaz. Bugün çoğu kaygı dağınık korkudan ibarettir: acaba ne olacak, ya kaybedersem, ya yalnız kalırsam... Allah korkusu bunların üzerine çıkan bir merkez verir.",
      "visual_note": "scattered leaves gathered by a gentle breeze into one pile, organizing from chaos to order",
      "keywords": ["leaves", "breeze", "gathering", "order"]
    },
    {
      "scene_id": "scene-027",
      "title": "Allah Hesabına Muhabbet",
      "narration": "Mahlûkatı sevmek yasaklanmıyor. Sevilen şeyi bağımsız ve nihai merkez görmemek isteniyor. Onu Allah'ın eseri, nimeti, emaneti, tecellisi olarak sevmek... Bu bakış sahiplenmeyi azaltır, ayrılık geldiğinde parçalanmayı hafifletir ve sevgiyi daha temiz kılar.",
      "visual_note": "sunlight shining through a leaf held up to the light, translucent veins visible, wonder and care",
      "keywords": ["leaf", "sunlight", "translucent", "wonder"]
    },
    {
      "scene_id": "scene-028",
      "title": "İnsan Sevgi Daireleri",
      "narration": "İnsan önce kendini, sonra yakınlarını, sonra milletini, sonra canlıları, sonra kâinatı ve dünyayı sever. Bu sevginin genişleme haritasıdır. İnsan sadece kendine kapalı değildir; kalbi sürekli dışa uzanır, bağ kurmak ister, anlam yüklemek ister.",
      "visual_note": "concentric rings on still water from a single raindrop, expanding outward, ripple of connection",
      "keywords": ["water rings", "ripple", "concentric", "expanding"]
    },
    {
      "scene_id": "scene-029",
      "title": "Herc ü Merc Âlemde Kalp Yaralanıyor",
      "narration": "Bu değişken dünyada hiçbir şey kararında kalmaz. İnsan kalbi bağ kurar; o bağ kopar. Bağlandığı şey değişir, gider. Bu yüzden kalp sürekli yaralanır. Ya derin acıyla ıstırap çeker ya da gaflet ve eğlenceyle kendini uyuşturur. Metin bu iki ucu da görür.",
      "visual_note": "stormy sea with calm horizon beyond, contrast of turbulence and distant stillness",
      "keywords": ["stormy sea", "calm horizon", "contrast", "turbulence"]
    },
    {
      "scene_id": "scene-030",
      "title": "Elleri Yapıştığı Şeylerle Bir Gidiş",
      "narration": "Kalp sevdiği şeylere eliyle yapışmış gibidir. Ama o şeyler gidince eli de parçalanarak gider. Biten ilişki, ölen yakın, kaybedilen sağlık, elden giden para, anlam yüklenen işin sönmesi... İnsanın temel ıstırabı sadece kaybetmek değil; bağ kurduğu şeylerin sürekli değişmesidir.",
      "visual_note": "a hand releasing sand that slowly slips through fingers, sunset light, letting go",
      "keywords": ["sand", "letting go", "hand", "loss"]
    },
    {
      "scene_id": "scene-031",
      "title": "Bütün Sevgileri Toplayıp Hakikî Sahibine Ver",
      "narration": "Çözüm sevme kapasiteni küçültmek değildir. Dağınık sevgini merkezileştirmektir. Aileni sev, dostunu sev, tabiatı sev, güzelliği sev, ilmi sev. Ama bunları bağımsız merkezler hâline getirme. Onları asıl mahbubun ayinesi olarak sev. Böyle olunca sevgi azalmaz; arınır.",
      "visual_note": "many small streams converging into one clear river, unity from many sources, calm flow",
      "keywords": ["converging streams", "river", "unity", "clarity"]
    },
    {
      "scene_id": "scene-032",
      "title": "Kâinata Doğrudan Muhabbet Sorunu",
      "narration": "Kâinatı hiç sevme denilmiyor. Doğrudan, nihai, bağımsız, mutlak sevgiyle sevme deniliyor. Çünkü kâinat fanîdir, değişkendir, sınırlıdır, bir emanettir, bir işarettir, bir ayna... Aynayı sev ama aynadaki güzelliği unutma. İşareti sev ama işaret edileni kaybetme.",
      "visual_note": "mirror reflecting a beautiful mountain scene, the reflection as clear as the reality",
      "keywords": ["mirror", "mountain reflection", "clarity", "beyond"]
    },
    {
      "scene_id": "scene-033",
      "title": "Nefsi İlahlaştırma Tehlikesi",
      "narration": "İnsanın kalbindeki putperestlik bazen dışa değil, içe yönelir. Nefsini merkeze koymak, onu memnun etmek için yaşamak, hakikati kendi menfaatine göre bükmek... Modern çağda bu çok yaygındır: 'Ben ne hissediyorsam o doğrudur. Beni mutlu eden her şey meşrudur.' Bu, en gizli put biçimidir.",
      "visual_note": "person's shadow cast large on a wall, ego projected beyond actual size, symbolic",
      "keywords": ["shadow", "wall", "ego", "symbolic scale"]
    },
    {
      "scene_id": "scene-034",
      "title": "Nefsin Mahiyeti — Kendi Başına Merkez Olamaz",
      "narration": "Nefsin kendisi eksik, muhtaç, aciz ve kusurludur. Bu onu nefret edilecek bir şey yapmaz. Ama onu ilahlık makamına oturtmaya da elvermez. İnsan nefsini putlaştırdığında ona aslında iyilik etmez; uzun vadede onu şımartıp mahveder.",
      "visual_note": "small fragile seedling growing through cracked pavement, potential but also vulnerability",
      "keywords": ["seedling", "cracked pavement", "fragile", "growth"]
    },
    {
      "scene_id": "scene-035",
      "title": "Yıldız Böceği Metaforu",
      "narration": "Yıldız böceği minicik bir ışık taşır ama koca geceyi aydınlatamaz. Anlık haz için uzun vadeli huzuru satmak, küçük bir onay için şahsiyeti feda etmek, birkaç dakika zevk için vicdanı zedelemek... Nefsin sunduğu lezzet çoğu zaman zerre hükmündedir. Ama insan onu büyütüp hayatının merkezine koyar.",
      "visual_note": "single firefly glowing in a dark forest at night, tiny but isolated light in darkness",
      "keywords": ["firefly", "dark forest", "glowing", "tiny light"]
    },
    {
      "scene_id": "scene-036",
      "title": "Benliği Yırt, Ötesini Gör",
      "narration": "Sevgide de korkuda da benliği mutlaklaştırma. 'Benim başarım' yerine 'bana verilen imkân.' 'Benim güzelliğim' yerine 'emanet edilen suret.' 'Benim kontrolüm' yerine 'O'nun takdiri.' Bu bakış kalbi yumuşatır, sahiplenmeyi azaltır, bağımlılığı hafifletir.",
      "visual_note": "transparent glass sphere with sky reflected inside, self as a vessel not a source",
      "keywords": ["glass sphere", "transparency", "reflection", "vessel"]
    },
    {
      "scene_id": "scene-037",
      "title": "Son Doruk — Bir Zerre Allah Muhabbeti Kâinata Bedel",
      "narration": "Kâinatta sevdiğin ne varsa onda O'ndan bir yansıma var. Güzellikler güzeldir ama asıl güzelliğin sahibi değiller. Merhametler kıymetlidir ama sonsuz değiller. İnsanlar sevilebilir ama mutlak mahbub değiller. Bu yüzden kalp kaynağa bağlanmadan doyamaz. Bir zerre Allah muhabbeti kâinatın tamamına bedeldir.",
      "visual_note": "sunrise over ocean horizon, vast water and sky, sense of infinite source and beauty",
      "keywords": ["sunrise", "ocean horizon", "infinite", "source"]
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: 'sevgi-ve-korku',
    test_day: 'day-06',
    workflow: 'manual_scene_json_single_track_landscape_load_input'
  }
};

return [{ json: { raw_input: rawInput } }];
