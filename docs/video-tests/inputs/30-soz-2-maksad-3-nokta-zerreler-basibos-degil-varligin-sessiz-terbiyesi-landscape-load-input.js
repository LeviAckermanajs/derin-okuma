// Derin Okuma - 30.Soz - 2.Maksad - 3.Nokta landscape video
// Filled Day-54 package. Paste this file into the n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Zerreler Neden Başıboş Değil?",
    "description": "Zerrelerin başıboş olmadığını; hikmet, rahmet, adalet ve ilim içinde vazife gördüğünü anlatan tefekkürî landscape video.",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "30-soz-2-maksad-3-nokta-zerreler-basibos-degil-varligin-sessiz-terbiyesi-landscape-day-54"
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
    "target_fps": 30
  },
  "scenes": [
    {
      "scene_id": "scene-001",
      "title": "Küçük Şeylerin Büyük Sessizliği",
      "narration": "İnsan çoğu zaman büyük olaylara bakar; dağlara, denizlere, yıldızlara hayret eder. Fakat varlığın en küçük parçalarında da derin bir düzen saklıdır. Gözle zor fark edilen bir zerre bile, sessizce büyük bir terbiyenin içinde hareket eder.",
      "visual_note": "macro dust particles in sunbeam, quiet room, slow cinematic light",
      "keywords": [
        "dust particles",
        "sunbeam",
        "macro detail"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Başıboşluk Zannı",
      "narration": "Dışarıdan bakınca her şey dağılıyor, değişiyor ve kayboluyor gibi görünür. Toprak bitkiye karışır, bitki canlıya geçer, canlı tekrar toprağa döner. Bu devri sadece kör bir dolaşım sanmak, varlığın içindeki hikmeti fark edememektir.",
      "visual_note": "soil turning into green sprout, time lapse nature, soft daylight",
      "keywords": [
        "soil",
        "sprout",
        "cycle of life"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Hareketin İçindeki Vazife",
      "narration": "Bir zerre yer değiştirirken yalnızca mekan değiştirmiş olmaz. Girdiği her varlıkta başka bir vazifeye temas eder. Bazen bir yaprağın yeşilliğine, bazen bir çiçeğin kokusuna, bazen bir bedenin hayatına hizmet eder.",
      "visual_note": "close up green leaves, flower blooming, gentle natural motion",
      "keywords": [
        "green leaves",
        "flower bloom",
        "natural motion"
      ]
    },
    {
      "scene_id": "scene-004",
      "title": "Dünya Bir Mektep Gibi",
      "narration": "Canlı bedenler, gelip geçen zerreler için sanki bir eğitim alanı gibidir. Her giriş, her çıkış ve her dönüş yeni bir hizmete kapı açar. Varlığın en küçük unsurları bile, bu alemde vazife görerek anlam kazanır.",
      "visual_note": "quiet old classroom with sunlight, empty desks, contemplative mood",
      "keywords": [
        "old classroom",
        "sunlight",
        "learning"
      ]
    },
    {
      "scene_id": "scene-005",
      "title": "Terbiye Kanunu",
      "narration": "Rububiyet, her varlığa kendisine uygun bir gelişme yolu açar. Bir çekirdek toprak altında karanlıkta kalır, sonra dal olur, yaprak olur, meyve verir. Aynı ilahi terbiye, küçükten büyüğe bütün varlık tabakalarında işler.",
      "visual_note": "seedling emerging from dark soil, close up, hopeful natural light",
      "keywords": [
        "seedling",
        "dark soil",
        "growth"
      ]
    },
    {
      "scene_id": "scene-006",
      "title": "Toprağın Yükselişi",
      "narration": "Toprak sıradan görünür; ayak altında kalır, sessizdir, renksizdir. Fakat aynı toprak, bir çiçeğin rengine, bir meyvenin tadına, bir canlının bedenine kaynak olabilir. Demek ki aşağı görünen şey, hikmet eliyle yüksek neticelere taşınabilir.",
      "visual_note": "hands holding rich soil with young plant, garden morning light",
      "keywords": [
        "rich soil",
        "young plant",
        "garden"
      ]
    },
    {
      "scene_id": "scene-007",
      "title": "Kemal Yolculuğu",
      "narration": "Kemal, bir şeyin kendisine uygun tamamlanmaya doğru götürülmesidir. Zerreler de rastgele savrulmaz; hangi vazifeye elverişliyse o daireye sevk edilir. Bu yüzden hareket, sadece fiziksel bir akış değil, anlamlı bir yolculuktur.",
      "visual_note": "winding mountain path at sunrise, slow forward camera movement",
      "keywords": [
        "mountain path",
        "sunrise",
        "journey"
      ]
    },
    {
      "scene_id": "scene-008",
      "title": "Keremin Verdiği Lezzet",
      "narration": "Vazife gören canlılara yalnızca yük verilmez; onların hizmetine uygun bir lezzet de ihsan edilir. Arının çiçekler arasında çalışması, bülbülün ötüşü, hayatın içinde saklı bir şevki gösterir. Kerem, hizmeti kuru bir mecburiyet olmaktan çıkarır.",
      "visual_note": "bee moving between flowers, warm meadow light, gentle macro shot",
      "keywords": [
        "bee",
        "flowers",
        "meadow"
      ]
    },
    {
      "scene_id": "scene-009",
      "title": "Güzellik Kanunu",
      "narration": "Varlık yalnızca var edilmez; güzelleştirilir, süslenir ve ölçüyle şekillendirilir. Bir çiçeğin düzeni, bir kuşun kanadı, bir damlanın parıltısı buna işaret eder. Cemal ve tahsin kanunu, her şeyi daha güzel bir görünüşe doğru çeker.",
      "visual_note": "dew drops on flower petals, soft macro, elegant morning light",
      "keywords": [
        "dew drops",
        "flower petals",
        "beauty"
      ]
    },
    {
      "scene_id": "scene-010",
      "title": "İsimlere Bakan Yüz",
      "narration": "Her varlığın hakikati, ilahi isimlerden birinin tecellisine ayna olur. Bu yüzden güzellik yalnızca dış görünüş değildir; daha derin bir manaya açılan kapıdır. Bir şey vazifesini ne kadar düzgün görürse, taşıdığı mana da o kadar berrak görünür.",
      "visual_note": "calm lake reflection of sky and trees, clear water, cinematic stillness",
      "keywords": [
        "lake reflection",
        "clear water",
        "stillness"
      ]
    },
    {
      "scene_id": "scene-011",
      "title": "Rahmet Kaybetmez",
      "narration": "Rahmet, verilen kemali yokluğa atmaz. Bir varlığın ömrü bittiğinde, onun neticesi ve manası bütünüyle silinmez. Güzel bir iş, güzel bir niyet ve güzel bir hizmet, daha kalıcı bir alem için saklanır.",
      "visual_note": "autumn leaves falling gently, warm soft light, peaceful park",
      "keywords": [
        "autumn leaves",
        "soft light",
        "peaceful park"
      ]
    },
    {
      "scene_id": "scene-012",
      "title": "Zayi Olmayan Meyveler",
      "narration": "İnsan bazen yaptığı iyiliğin kaybolduğunu zanneder. Halbuki rahmet nazarında samimi bir hizmet boşa gitmez. Dünya kısa görünse de, burada oluşan manevi meyveler daha parlak bir karşılığa hazırlanır.",
      "visual_note": "ripe fruit on tree branch, golden evening light, slow close up",
      "keywords": [
        "ripe fruit",
        "tree branch",
        "golden light"
      ]
    },
    {
      "scene_id": "scene-013",
      "title": "Hikmet İsraf Etmez",
      "narration": "Hikmet kanunu, varlıkta abes bir iş olmadığını gösterir. Güz geldiğinde kuruyan yapraklar ve solan çiçekler, yokluğa atılmış değillerdir. Maddeleri başka yapılara, manaları başka neticelere hazırlanır.",
      "visual_note": "forest floor with autumn leaves becoming soil, natural cycle, close up",
      "keywords": [
        "forest floor",
        "autumn leaves",
        "natural cycle"
      ]
    },
    {
      "scene_id": "scene-014",
      "title": "Baharın Yeniden Kullanışı",
      "narration": "Kışın ölmüş gibi duran tabiat, baharda yeniden dirilişin işaretlerini taşır. Aynı maddeler farklı şekillerle sahneye çıkar. Bu dönüşüm, kayboluşun arkasında daha büyük bir düzen bulunduğunu hissettirir.",
      "visual_note": "spring blossoms after winter, melting snow, fresh daylight",
      "keywords": [
        "spring blossoms",
        "melting snow",
        "renewal"
      ]
    },
    {
      "scene_id": "scene-015",
      "title": "Adaletin Sakladığı Netice",
      "narration": "Adalet, kıymetli şeylerin sonuçsuz kalmasına razı olmaz. İnsan amelleri, varlığın hizmetleri ve dünyanın manevi hasılatı ölçüsüzce kaybolamaz. Her netice, kendisine uygun bir karşılık ve yer ister.",
      "visual_note": "balanced scales in soft window light, quiet interior, serious mood",
      "keywords": [
        "balanced scales",
        "justice",
        "soft light"
      ]
    },
    {
      "scene_id": "scene-016",
      "title": "Ebediyete Bakan Hazırlık",
      "narration": "Dünyada görevini tamamlayan şeyler, yalnızca geçmişte kalmış olmaz. Onların taşıdığı anlam, ebedi aleme bakan bir hazırlığın parçası olur. Zerrelerin hizmeti bile daha geniş bir binada yerini bulmaya adaydır.",
      "visual_note": "vast ancient stone archway opening to bright horizon, cinematic depth",
      "keywords": [
        "stone archway",
        "bright horizon",
        "eternity"
      ]
    },
    {
      "scene_id": "scene-017",
      "title": "Kuşatan İlim",
      "narration": "Hiçbir şey unutulmuş değildir. Kaderin kuşatıcı ilmi, çekirdeğin içinde ağacı, yumurtanın içinde canlıyı, tohumun içinde baharı bilir. En küçük hareket bile bu ilmin dışında kalmaz.",
      "visual_note": "close up seeds in palm, notebook and natural light, thoughtful mood",
      "keywords": [
        "seeds",
        "palm",
        "knowledge"
      ]
    },
    {
      "scene_id": "scene-018",
      "title": "Tohumların Ayrı Dilleri",
      "narration": "Aynı toprağa düşen tohumlar farklı hayatlara kapı açar. Biri buğday olur, biri çiçek açar, biri büyük bir ağaca dönüşür. Bu ayrım, kör tesadüften çok daha ince bir ilim ve takdiri gösterir.",
      "visual_note": "different seeds arranged on wooden table, soft daylight, macro detail",
      "keywords": [
        "different seeds",
        "wooden table",
        "macro"
      ]
    },
    {
      "scene_id": "scene-019",
      "title": "Vazifenin Yazısı",
      "narration": "Bir zerre hizmet etmişse, o hizmet ilahi ilimden gizli kalmaz. Sözsüz bir kayıt gibi, gördüğü vazifenin manası muhafaza edilir. Varlıkta geçici görünen hareketler, aslında kalıcı bir anlamın izini taşır.",
      "visual_note": "handwriting in old notebook, sunlight across paper, contemplative close up",
      "keywords": [
        "handwriting",
        "old notebook",
        "memory"
      ]
    },
    {
      "scene_id": "scene-020",
      "title": "Sözsüz Konuşma",
      "narration": "Zerre kelimeyle konuşmaz; ama düzeniyle, hizmetiyle ve intizamıyla konuşur. Bir yaprağın damarlarında, bir hücrenin işleyişinde, bir damlanın ölçüsünde bu sessiz dil okunur. Lisanı hal, bazen kelimeden daha güçlüdür.",
      "visual_note": "close up leaf veins with sunlight, slow macro movement, natural pattern",
      "keywords": [
        "leaf veins",
        "sunlight",
        "natural pattern"
      ]
    },
    {
      "scene_id": "scene-021",
      "title": "Bismillah ile Hareket",
      "narration": "Her başlangıç, sahibini gösteren bir işaret taşır. Zerreler de vazifeye çıkarken kendi halleriyle yaratıcı bir emre bağlı olduklarını ilan eder. Hareketleri, başıboş bir savrulma değil, verilen göreve yöneliştir.",
      "visual_note": "morning light entering a quiet room, dust motes moving slowly",
      "keywords": [
        "morning light",
        "dust motes",
        "beginning"
      ]
    },
    {
      "scene_id": "scene-022",
      "title": "Elhamdülillah ile Tamamlanış",
      "narration": "Bir vazife tamamlandığında da sessiz bir şükür manası ortaya çıkar. Çünkü hizmet görülmüş, düzen korunmuş, hayatın daha geniş akışına katkı verilmiştir. Küçük bir iş bile büyük bir hamd halkasına katılır.",
      "visual_note": "sunset over calm field, golden sky, slow peaceful landscape",
      "keywords": [
        "sunset field",
        "golden sky",
        "gratitude"
      ]
    },
    {
      "scene_id": "scene-023",
      "title": "Canlı Bedenlerde Seyahat",
      "narration": "Bir zerre bitkiden hayvana, hayvandan insana uzanan uzun bir seyahat yaşayabilir. Her menzilde başka bir düzenin parçası olur. Bu yolculuk, maddenin cansız sertliğini hayatın inceliğiyle buluşturur.",
      "visual_note": "nature food chain imagery, plant leaf, animal silhouette, human hand",
      "keywords": [
        "plant leaf",
        "life chain",
        "human hand"
      ]
    },
    {
      "scene_id": "scene-024",
      "title": "Bedendeki İnce Düzen",
      "narration": "İnsan bedeni, sayısız parçanın uyumla çalıştığı hayret verici bir alemdir. Kanın dolaşımı, nefesin ritmi, hücrelerin yenilenmesi bize küçük hareketlerin büyük hayata hizmet ettiğini gösterir. Bu uyum tesadüfle açıklanamayacak kadar hassastır.",
      "visual_note": "abstract medical style human silhouette with flowing light, calm cinematic",
      "keywords": [
        "human body",
        "flowing light",
        "harmony"
      ]
    },
    {
      "scene_id": "scene-025",
      "title": "Küçüğün Küçük Kalmaması",
      "narration": "Bir şeyi küçük görmek, çoğu zaman bakışımızın darlığından gelir. Zerre küçük olabilir; fakat bağlı olduğu kanunlar büyüktür. O küçük unsur, ilim, hikmet, rahmet ve kudret gibi büyük hakikatlere pencere olur.",
      "visual_note": "tiny water droplet reflecting a wide landscape, macro cinematic shot",
      "keywords": [
        "water droplet",
        "reflection",
        "macro landscape"
      ]
    },
    {
      "scene_id": "scene-026",
      "title": "Tesadüfün Yetmediği Yer",
      "narration": "Tesadüf, düzenli tekrarları, ölçülü sonuçları ve hikmetli neticeleri açıklamakta yetersiz kalır. Çünkü aynı alemde hem çeşitlilik hem uyum, hem hareket hem hedef görülür. Bu kadar ince işleyiş, kör bir dağılmadan çok bilinçli bir sevki gösterir.",
      "visual_note": "geometric patterns in nature, honeycomb close up, calm scientific mood",
      "keywords": [
        "honeycomb",
        "natural geometry",
        "order"
      ]
    },
    {
      "scene_id": "scene-027",
      "title": "Kâinat Bir Kışla Gibi",
      "narration": "Varlık sahnesi, vazifeli unsurların girip çıktığı büyük bir düzen alanı gibidir. Her şey kendi görev yerine gönderilir, hizmetini görür ve sonra başka bir emre hazırlanır. Bu bakış, kainatı dağınık bir kalabalık olmaktan çıkarır.",
      "visual_note": "orderly rows of trees in mist, disciplined natural pattern, aerial view",
      "keywords": [
        "rows of trees",
        "mist",
        "order"
      ]
    },
    {
      "scene_id": "scene-028",
      "title": "Misafirhane Dersi",
      "narration": "Dünya bir misafirhane gibi düşünülürse, hiçbir konaklama ebedi değildir. Gelen kalmaz, kalan da değişir; fakat her misafirlik bir iz ve ders bırakır. Zerrelerin gelip geçişi de bu geçici konaklamanın içindeki vazifeyi hatırlatır.",
      "visual_note": "simple guest room with open window, soft curtains, quiet morning",
      "keywords": [
        "guest room",
        "open window",
        "temporary"
      ]
    },
    {
      "scene_id": "scene-029",
      "title": "İnsana Bakan Taraf",
      "narration": "Zerreler bile başıboş değilse, insan hayatı nasıl anlamsız olabilir? İnsanın düşüncesi, niyeti, emeği ve duası da daha büyük bir düzene bakar. Bu fark ediliş, hayatın ağırlığını azaltmaz; ama ona yön ve mana verir.",
      "visual_note": "solitary person walking on quiet path, sunrise, reflective mood",
      "keywords": [
        "solitary person",
        "quiet path",
        "meaning"
      ]
    },
    {
      "scene_id": "scene-030",
      "title": "Kaybolmayan Emek",
      "narration": "Küçük bir iyilik, sessiz bir sabır veya görünmeyen bir hizmet değersiz değildir. Hikmet ve adalet, bunların unutulup gitmesine izin vermez. İnsan, emeğinin görüldüğünü bildikçe daha sakin ve daha sorumlu yaşar.",
      "visual_note": "hands helping plant a tree, close up, warm community garden light",
      "keywords": [
        "helping hands",
        "planting tree",
        "service"
      ]
    },
    {
      "scene_id": "scene-031",
      "title": "Varlığı Yeniden Okumak",
      "narration": "Bu bakış değiştiğinde, toprak artık sıradan bir zemin değildir. Çekirdek basit bir tane, yaprak rastgele bir şekil, insan bedeni kapalı bir makine gibi görünmez. Her şey, kendisini aşan bir manaya işaret eder.",
      "visual_note": "person observing a small seedling closely, soft outdoor light, wonder",
      "keywords": [
        "observing seedling",
        "wonder",
        "soft light"
      ]
    },
    {
      "scene_id": "scene-032",
      "title": "Sessiz Terbiye",
      "narration": "Varlığın en küçük parçalarında bile bir vazife, bir düzen ve bir hazırlık görünür. Bu sessiz terbiye, insana kendi hayatını da aynı dikkatle okumayı öğretir. Zerreler başıboş değilse, kalbimizden geçen anlam arayışı da sahipsiz değildir.",
      "visual_note": "wide night sky over quiet landscape, stars, contemplative ending shot",
      "keywords": [
        "night sky",
        "quiet landscape",
        "contemplation"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "30-soz-2-maksad-3-nokta-zerreler-basibos-degil-varligin-sessiz-terbiyesi",
    "test_day": "day-54",
    "workflow": "manual_scene_json_single_track_landscape_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
