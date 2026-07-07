// Derin Okuma — 30.Söz - 1.Maksad - Mukaddime landscape video
// Landscape full video
// Content filled for day-49 n8n input.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: "Benlik Hangi Yöne Bakarsa İnsan O Yöne Büyür",
    description: "Benliğin insanı kulluğa açan bir ayna ya da hakikati örten bir perde hâline nasıl gelebildiğini anlatan tefekkür videosu.",
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '30-soz-1-maksad-mukaddime-benlik-kainati-acan-anahtar-landscape-day-49'
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
    "title": "Benlik Bir Yön Seçer",
    "narration": "İnsan, hayat boyunca sayısız karar verir; fakat bütün kararların gerisinde daha temel bir yöneliş vardır. Kendini nasıl gördüğü, kâinatı ve Rabbini nasıl okuyacağını da belirler. Benlik hangi yöne bakarsa insanın düşüncesi, ahlakı ve hayatı o yöne doğru büyür.",
    "visual_note": "A solitary person at a forked mountain path during sunrise, slow cinematic movement.",
    "keywords": [
      "forked path",
      "sunrise",
      "solitary person",
      "choice"
    ]
  },
  {
    "scene_id": "scene-002",
    "title": "Ben Duygusunun Sorusu",
    "narration": "Her insan içinden doğal olarak ben der. Bu duygu yalnızca kendimizi başkalarından ayırmamıza yaramaz; sahiplik, güç ve sorumluluk hakkında da sessiz hükümler verir. Asıl soru, benliğin var olup olmaması değil, ne adına konuştuğudur.",
    "visual_note": "Thoughtful person looking into a window reflection, soft morning light, cinematic close-up.",
    "keywords": [
      "window reflection",
      "thoughtful person",
      "identity",
      "soft light"
    ]
  },
  {
    "scene_id": "scene-003",
    "title": "Nötr Bir Anahtar",
    "narration": "Benlik ilk hâliyle bir anahtar gibidir. Doğru çevrildiğinde insanın önünde marifet, kulluk ve tevhit kapıları açılır. Ters çevrildiğinde ise aynı anahtar, insanı kendi içine kilitleyen bir sahiplik vehmine dönüşür.",
    "visual_note": "An antique key turning in an old wooden door, warm light appearing through the opening.",
    "keywords": [
      "antique key",
      "wooden door",
      "opening light",
      "symbol"
    ]
  },
  {
    "scene_id": "scene-004",
    "title": "İki Büyük Yol",
    "narration": "İnsanlık düşüncesinde iki ana yön belirir. Biri insanı yaratılmış, muhtaç ve sorumlu bir kul olarak görür; diğeri onu kendi hesabına var olan bağımsız bir merkez sayar. Bu ayrım, yalnızca teorik bir fikir ayrılığı değildir; hayatın her alanına yayılan iki farklı dünya kurar.",
    "visual_note": "Two long roads separating across a wide landscape, one sunlit and one shadowed.",
    "keywords": [
      "two roads",
      "wide landscape",
      "sunlight",
      "shadow"
    ]
  },
  {
    "scene_id": "scene-005",
    "title": "Ayna Olan Benlik",
    "narration": "Kulluğa yönelen benlik kendini bağımsız bir kaynak olarak görmez. Kendi varlığını, kabiliyetlerini ve imkânlarını İlâhî isimleri anlamaya yarayan bir ölçü kabul eder. Bir ayna gibi ışığı sahiplenmeden gösterir.",
    "visual_note": "A clean mirror reflecting sunlight into a quiet room, gentle dust particles in the air.",
    "keywords": [
      "mirror",
      "sunlight",
      "quiet room",
      "reflection"
    ]
  },
  {
    "scene_id": "scene-006",
    "title": "Perde Olan Benlik",
    "narration": "Kendine kapanan benlik ise varlığını kendi adına okur. Verilmiş olanı kazanılmış, emanet edileni mutlak mülk, sınırlı gücü bağımsız kudret sanmaya başlar. Böylece ışığı gösterecek ayna, ışığın önünde duran kalın bir perdeye dönüşür.",
    "visual_note": "Heavy curtains slowly covering a bright window in a darkening room.",
    "keywords": [
      "heavy curtains",
      "bright window",
      "dark room",
      "obstruction"
    ]
  },
  {
    "scene_id": "scene-007",
    "title": "Emanet Bilinci",
    "narration": "İnsan bedenini, ömrünü, aklını ve yeteneklerini kendisi üretmedi. Bunların gelişmesinde emeği olsa da ilk kaynağı ve devamı onun elinde değildir. Emanet bilinci, nimeti küçültmez; aksine ona şükür ve sorumluluk kazandırır.",
    "visual_note": "Open hands holding a small green plant, natural daylight, humble cinematic mood.",
    "keywords": [
      "open hands",
      "green plant",
      "trust",
      "responsibility"
    ]
  },
  {
    "scene_id": "scene-008",
    "title": "Gerçek Sahiplik",
    "narration": "Bir şeye gerçekten sahip olmak, onun başlangıcına, devamına ve sonuna hükmedebilmeyi gerektirir. İnsan ise en yakınındaki nefesin bile kesintisiz sürmesini garanti edemez. Bu hakikat, onu değersizleştirmez; haddini bilerek gerçek Sahibine dayanmasını sağlar.",
    "visual_note": "Close-up of a person breathing beside an open window, morning air moving a curtain.",
    "keywords": [
      "breathing",
      "open window",
      "morning air",
      "human fragility"
    ]
  },
  {
    "scene_id": "scene-009",
    "title": "Aczin Açtığı Kapı",
    "narration": "İnsan sınırlı gücünü fark ettiğinde iki farklı tepki verebilir. Ya aczini örtmeye çalışır ya da onu sonsuz kudreti tanıtan bir pencere olarak görür. Acz doğru okunduğunda eziklik değil, dayanılacak kudreti bulma vesilesidir.",
    "visual_note": "A small figure standing beneath vast mountains, clouds opening to soft sunlight.",
    "keywords": [
      "vast mountains",
      "small figure",
      "opening clouds",
      "humility"
    ]
  },
  {
    "scene_id": "scene-010",
    "title": "Fakrın Gösterdiği Rahmet",
    "narration": "İnsanın ihtiyaçları gücünden, arzuları ömründen daha geniştir. Bu fakirlik yalnız bırakılmışlığın delili değildir; hayatı kuşatan ikramları fark etmeye çağırır. Suya, havaya, güneşe ve sevgiye muhtaç oluşumuz, rahmetin her an bizi taşıdığını gösterir.",
    "visual_note": "Fresh water flowing beside green leaves in warm sunlight, peaceful close-up.",
    "keywords": [
      "flowing water",
      "green leaves",
      "sunlight",
      "provision"
    ]
  },
  {
    "scene_id": "scene-011",
    "title": "Kusur ve Bağışlanma",
    "narration": "Kusurunu kabul eden insan, kendini umutsuzluğa mahkûm etmek zorunda değildir. Eksiklik, affa yönelmeyi; hata, düzeltmeyi; pişmanlık ise yeniden başlamayı mümkün kılar. Benlik kendini kusursuz ilan etmediğinde kalp bağışlanmaya açılır.",
    "visual_note": "A person washing hands in clear water at dawn, quiet reflective atmosphere.",
    "keywords": [
      "clear water",
      "washing hands",
      "dawn",
      "renewal"
    ]
  },
  {
    "scene_id": "scene-012",
    "title": "Ölçü Olmak",
    "narration": "İnsan küçük bir irade, sınırlı bir bilgi ve dar bir sahiplik duygusu taşır. Bu küçük ölçüler, mutlak irade, ilim ve mülkün ne anlama geldiğini kavramaya yardımcı olur. Ölçünün görevi kendini mutlaklaştırmak değil, ölçemeyeceği büyüklüğü işaret etmektir.",
    "visual_note": "A small measuring ruler beside a vast architectural dome, cinematic perspective.",
    "keywords": [
      "measuring ruler",
      "vast dome",
      "scale",
      "perspective"
    ]
  },
  {
    "scene_id": "scene-013",
    "title": "Benlik Nasıl Kalınlaşır",
    "narration": "Sahiplik yanılgısı çoğu zaman bir anda büyümez. Alışkanlık, gaflet ve sürekli kendine pay çıkarma, ince bir duyguyu giderek sertleştirir. İnsan sonunda nimetleri değil kendi iddiasını görmeye, hakikati de bu iddianın arkasından seyretmeye başlar.",
    "visual_note": "Layers of paint gradually covering a transparent glass pane, moody cinematic macro shot.",
    "keywords": [
      "layered paint",
      "glass pane",
      "obscured view",
      "gradual change"
    ]
  },
  {
    "scene_id": "scene-014",
    "title": "Merkeze Yerleşen İnsan",
    "narration": "Benlik kendini merkez sayınca her şeyi kendi faydasına göre değerlendirmeye başlar. Varlıklar yalnızca işe yaradıkları kadar değerli, insanlar yalnızca istekleri karşıladıkları kadar yakın görünür. Böyle bir merkez büyüdükçe kâinatın gerçek genişliği daralır.",
    "visual_note": "A person standing at the center of moving city crowds, shallow depth of field.",
    "keywords": [
      "city crowd",
      "central figure",
      "self focus",
      "shallow focus"
    ]
  },
  {
    "scene_id": "scene-015",
    "title": "Sebeplerin Perdesi",
    "narration": "Hayatta sonuçlar çoğu zaman sebepler üzerinden gelir. Fakat sebebi görmek, sonucu yalnız ona vermeyi gerektirmez. Toprak, su ve güneş bir çiçeği yetiştirmek üzere buluşur; hiçbiri tek başına canlılığın, rengin ve kokunun gerçek kaynağı olamaz.",
    "visual_note": "A flower blooming through soil with water drops and sunlight, detailed nature footage.",
    "keywords": [
      "blooming flower",
      "water drops",
      "sunlight",
      "soil"
    ]
  },
  {
    "scene_id": "scene-016",
    "title": "Tabiatın Doğru Yeri",
    "narration": "Tabiat, varlıkların nasıl işlediğini gösteren düzenli kanunların adıdır. Kanun ise uygulayan bir irade olmadan eser meydana getiremez. Bir mimari plan binayı kendi başına kuramadığı gibi, doğadaki düzen de kendisini var eden kudretin yerine geçirilemez.",
    "visual_note": "Architectural blueprint dissolving into a completed building, slow cinematic transition.",
    "keywords": [
      "blueprint",
      "completed building",
      "natural law",
      "design"
    ]
  },
  {
    "scene_id": "scene-017",
    "title": "Güç ve Hak",
    "narration": "Benlik büyüdüğünde gücü haklılığın ölçüsü yapmaya eğilim gösterir. Oysa bir şey güçlü olduğu için doğru olmaz; güç, ancak doğru olana hizmet ettiğinde değer kazanır. Bu ayrım hem insanın iç dünyasında hem toplum hayatında adaletin temelidir.",
    "visual_note": "Balanced justice scales in front of a strong stone wall, warm directional light.",
    "keywords": [
      "justice scales",
      "stone wall",
      "power",
      "truth"
    ]
  },
  {
    "scene_id": "scene-018",
    "title": "Adaletin Kaynağı",
    "narration": "Hak merkezli bakış, zayıfın değerini güçlü karşısında korur. Menfaat değişse bile adaletin ölçüsü değişmez. İnsan kendi benliğini mutlak hâkim saymadığında, başkasının hakkını da kendi arzusuna feda etmemeyi öğrenir.",
    "visual_note": "A strong hand helping a vulnerable person stand, neutral background, respectful cinematic framing.",
    "keywords": [
      "helping hand",
      "vulnerable person",
      "justice",
      "dignity"
    ]
  },
  {
    "scene_id": "scene-019",
    "title": "Güzelliği Sahiplenmek",
    "narration": "Bir çiçeğe, gökyüzüne veya insan yüzündeki inceliğe bakarken güzelliği kendi başına duran bir tesadüf sayabiliriz. Böyle bakıldığında eser görünür, fakat onu var eden sanat ve ikram görünmez kalır. Güzellik sahibinden koparıldığında anlamının büyük kısmını kaybeder.",
    "visual_note": "Macro view of a delicate flower under soft sky light, slow focus pull.",
    "keywords": [
      "delicate flower",
      "sky light",
      "beauty",
      "macro"
    ]
  },
  {
    "scene_id": "scene-020",
    "title": "Güzellikten Sanatkâra",
    "narration": "Ayna olan bakış ise güzelliği bir işaret olarak okur. Renk, ölçü, uyum ve zarafet; eserde kalmayıp sanatın sahibine yönelen bir hayranlık uyandırır. Böylece güzel olan şey tüketilecek bir görüntü değil, şükre açılan bir pencere olur.",
    "visual_note": "Sunlight passing through colorful stained glass onto a quiet floor, contemplative mood.",
    "keywords": [
      "stained glass",
      "colorful light",
      "artistry",
      "gratitude"
    ]
  },
  {
    "scene_id": "scene-021",
    "title": "Hayat Mücadeleden İbaret mi",
    "narration": "Hayatı yalnızca çatışma olarak okumak, varlıklar arasındaki geniş yardımlaşmayı görünmez kılar. Güçlü olanın ayakta kaldığı doğrudur; fakat hiçbir canlı yalnız kendi gücüyle yaşayamaz. Hayat, rekabet kadar dayanışma ve ikramla da sürer.",
    "visual_note": "A wide ecosystem with birds, grazing animals and flowing river, peaceful aerial view.",
    "keywords": [
      "ecosystem",
      "flowing river",
      "wildlife",
      "cooperation"
    ]
  },
  {
    "scene_id": "scene-022",
    "title": "Yardımlaşma Kanunu",
    "narration": "Bulut toprağa su taşır, toprak bitkiye yuva olur, bitki canlılara rızık sunar. İnsan da aile, toplum ve tabiat içindeki sayısız yardımla ayakta kalır. Bu karşılıklı hizmet, hayatın temelinde kör bir savaş değil, kuşatıcı bir rahmet bulunduğunu düşündürür.",
    "visual_note": "Rain clouds watering green fields as farmers and animals move peacefully below.",
    "keywords": [
      "rain clouds",
      "green fields",
      "farm life",
      "cooperation"
    ]
  },
  {
    "scene_id": "scene-023",
    "title": "Varlığın Birliği",
    "narration": "Bir canlı bedeninde sayısız organ aynı hayat için birlikte çalışır. Kâinatta da güneşten suya, havadan toprağa kadar uzak unsurlar tek bir meyvenin yetişmesine hizmet eder. Birlik taşıyan bu geniş düzen, hükmün de tek bir kaynağa ait olduğunu gösterir.",
    "visual_note": "Aerial transition from human body patterns to rivers, forests and sunlight across Earth.",
    "keywords": [
      "human body",
      "earth patterns",
      "unity",
      "interconnection"
    ]
  },
  {
    "scene_id": "scene-024",
    "title": "Yaratmayı Dağıtma Yanılgısı",
    "narration": "Bir eserin meydana gelmesini ayrı ayrı sebeplere dağıtmak açıklama gibi görünür. Oysa her sebebin hem bütün eseri hem de diğer sebeplerle kusursuz uyumu bilmesi gerekir. Bir tek meyve, onu kuşatan kâinatla birlikte düşünüldüğünde tesadüfün payı giderek küçülür.",
    "visual_note": "Close-up fruit connected visually to sun, rain, soil and seasons in cinematic montage.",
    "keywords": [
      "fruit",
      "sun and rain",
      "soil",
      "interconnection"
    ]
  },
  {
    "scene_id": "scene-025",
    "title": "Bir Meyvenin Geniş Anlamı",
    "narration": "Bir meyvenin insana bakan faydası tat, koku ve besindir. Fakat aynı meyve ölçü, renk, hayat, rızık ve sanat gibi çok daha geniş anlamlar taşır. Varlığı yalnız tüketiciye sağladığı faydayla sınırlamak, büyük bir kitabı tek kelimesine indirgemek gibidir.",
    "visual_note": "Ripe fruit on a branch with detailed texture, insects and sunlight in a living orchard.",
    "keywords": [
      "ripe fruit",
      "orchard",
      "sunlight",
      "living detail"
    ]
  },
  {
    "scene_id": "scene-026",
    "title": "Hikmetin Çokluğu",
    "narration": "Her varlığın kendine ve insana dönük birkaç sonucu olabilir. Fakat Yaratıcısının ilmini, kudretini, rahmetini ve sanatını gösteren yönleri çok daha fazladır. Bu bakış, en küçük canlıyı bile değersiz bir ayrıntı olmaktan çıkarır.",
    "visual_note": "Tiny insect moving across an intricate leaf, extreme macro footage with soft light.",
    "keywords": [
      "tiny insect",
      "intricate leaf",
      "macro nature",
      "meaning"
    ]
  },
  {
    "scene_id": "scene-027",
    "title": "İnsanın Gayesi",
    "narration": "Benlik kendini amaç saydığında hayat, başarı ve haz etrafında kapanır. Kulluk bilinci ise insanın gayesini ahlak, marifet, şükür ve sorumlulukla genişletir. İnsan böylece kendini büyütmeye değil, kendisine verilen kabiliyetleri doğru yerde kullanmaya yönelir.",
    "visual_note": "A person walking past trophies toward a quiet sunlit path in nature.",
    "keywords": [
      "trophies",
      "sunlit path",
      "purpose",
      "humility"
    ]
  },
  {
    "scene_id": "scene-028",
    "title": "Haddini Aşan İddia",
    "narration": "İnsanın gelişme arzusu değerlidir; fakat bu arzu mutlak bağımsızlık isteğine dönüşürse haddini aşar. Sınırlı bir varlık, her şeye hükmetmeye çalıştıkça huzur değil daha büyük bir kaygı üretir. Kemal, yaratıcı rolü üstlenmekte değil, kul olarak doğru bağı kurmaktadır.",
    "visual_note": "An overwhelmed person surrounded by control screens, then turning toward calm natural light.",
    "keywords": [
      "overwhelmed person",
      "control screens",
      "natural light",
      "limits"
    ]
  },
  {
    "scene_id": "scene-029",
    "title": "İki Ağacın Meyveleri",
    "narration": "Her düşünce çizgisi zamanla kendi ahlakını ve toplumunu üretir. Kulluk, adalet ve yardımlaşma üzerine yükselen yol merhametli insanlar yetiştirir. Benliği mutlaklaştıran yol ise gücü, çıkarı ve tahakkümü beslemeye elverişli hâle gelir.",
    "visual_note": "Two contrasting trees, one green and fruitful, one dry and thorny, wide cinematic frame.",
    "keywords": [
      "two trees",
      "fruitful tree",
      "dry tree",
      "moral outcome"
    ]
  },
  {
    "scene_id": "scene-030",
    "title": "Karanlık Tünel",
    "narration": "İnsan yalnız sebeplere ve kendi aklına dayanarak bütün varlığı açıklamaya çalıştığında yol daralabilir. Sorular çoğalır, anlam parçalanır ve ölüm bütün kazanımları söndüren bir son gibi görünür. Kalabalık izler taşısa bile karanlık bir yol, insanı güvenli bir çıkışa ulaştırmayabilir.",
    "visual_note": "A person walking through a long dark tunnel with fading footprints, cinematic atmosphere.",
    "keywords": [
      "dark tunnel",
      "fading footprints",
      "lonely walker",
      "uncertainty"
    ]
  },
  {
    "scene_id": "scene-031",
    "title": "Işığın Gösterdiği Çıkış",
    "narration": "Vahyin ışığı aklı susturmaz; ona nereden ve nereye bakacağını gösterir. Sebepleri inkâr etmeden onların ötesindeki irade ve hikmeti tanıtır. Böylece insan kapalı bir tünelde ilerlemek yerine geniş, aydınlık ve anlamlı bir âleme çıkar.",
    "visual_note": "A traveler emerging from a tunnel into a vast bright valley, slow cinematic reveal.",
    "keywords": [
      "tunnel exit",
      "bright valley",
      "traveler",
      "revelation"
    ]
  },
  {
    "scene_id": "scene-032",
    "title": "En Kısa ve Açık Yol",
    "narration": "Hakikate ulaşmak için herkesin karmaşık felsefî sistemler kurması gerekmez. İnsan kendi aczinden kudreti, ihtiyacından rahmeti, sanatlı varlıklardan sanatkârı okuyabilir. Bu yol hem akla hem kalbe seslenir ve hayatın içinden geçer.",
    "visual_note": "A clear open path through a sunlit meadow, families and travelers walking peacefully.",
    "keywords": [
      "open path",
      "sunlit meadow",
      "travelers",
      "clarity"
    ]
  },
  {
    "scene_id": "scene-033",
    "title": "Benliği Yok Etmek Değil",
    "narration": "Çözüm, ben duygusunu tamamen silmek değildir. Benlik olmadan sorumluluk, tercih ve kendini tanıma da mümkün olmazdı. Yapılması gereken, benliği gerçek yerine koymak; onu sahip değil emanetçi, kaynak değil ayna olarak kullanmaktır.",
    "visual_note": "A person carefully cleaning a mirror rather than breaking it, soft daylight.",
    "keywords": [
      "cleaning mirror",
      "soft daylight",
      "self knowledge",
      "balance"
    ]
  },
  {
    "scene_id": "scene-034",
    "title": "Gündelik Hayatta Ayna",
    "narration": "Bu yöneliş gündelik hayatta küçük tercihlerle görünür. Başarıda yalnız kendini alkışlamak yerine nimeti fark etmek, hatada mazeret üretmek yerine sorumluluk almak, güç karşısında hakka sadık kalmak benliği şeffaflaştırır. Her tercih aynayı biraz daha temizler.",
    "visual_note": "A person sharing credit with a team, then reflecting quietly by a bright window.",
    "keywords": [
      "team gratitude",
      "bright window",
      "responsibility",
      "daily choice"
    ]
  },
  {
    "scene_id": "scene-035",
    "title": "Gündelik Hayatta Perde",
    "narration": "Benlik de yine küçük tercihlerle perdeleşir. Nimeti hak edilmiş saymak, başkasının değerini kendi faydasına bağlamak ve sonucu yalnız sebeplerden bilmek bu perdeyi kalınlaştırır. İnsan sonunda dışarıdaki hakikati değil, kendi büyütülmüş gölgesini görür.",
    "visual_note": "A large human shadow covering a wall while the real person stands small, moody light.",
    "keywords": [
      "large shadow",
      "small person",
      "ego",
      "moody light"
    ]
  },
  {
    "scene_id": "scene-036",
    "title": "Ben Nereye Bakıyor",
    "narration": "İnsanın en büyük meselelerinden biri, benliğini hangi yöne çevirdiğidir. Benlik ayna olduğunda acizliği kudrete, ihtiyacı rahmete, güzelliği sanatkâra ve hayatı kulluğa bağlar. Perde olduğunda ise insanı kendi içine hapseder; bu yüzden her gün yeniden sorulması gereken soru şudur: Ben, ışığı mı gösteriyorum, yoksa önünü mü kapatıyorum?",
    "visual_note": "A person opening curtains to a radiant sunrise over a wide horizon, peaceful final shot.",
    "keywords": [
      "opening curtains",
      "radiant sunrise",
      "wide horizon",
      "reflection"
    ]
  }
],

  metadata: {
    source: 'derin-okuma',
    blog_post: '30-soz-1-maksad-mukaddime-benlik-kainati-acan-anahtar',
    test_day: 'day-49',
    workflow: 'manual_scene_json_single_track_landscape_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
