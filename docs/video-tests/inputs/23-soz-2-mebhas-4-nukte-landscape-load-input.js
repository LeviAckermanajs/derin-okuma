// Derin Okuma — 23. Söz - 2. Mebhas - 4. Nükte landscape video
// Filled for Day-22 video production.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },


  job: {
    title: 'İnsan Neden Acziyle Yükselir?',
    description: 'İnsanın zaafını, ihtiyacını ve kulluğunu doğru okuyunca hayat, başarı ve kâinat başka bir anlam kazanır.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-4-nukte-landscape-day-22'
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
      scene_id: 'scene-001',
      title: 'Nazik Bir Varlık',
      narration: 'İnsan, kâinatın içinde büyük görünen ama aslında çok nazik duran bir varlık. Bir hastalık, bir kayıp, bir korku veya küçük bir ihtiyaç onun sınırlı gücünü hemen açığa çıkarır. Fakat bu zayıflık yalnızca eksiklik değildir; doğru okunduğunda insanı daha büyük bir kapıya yönelten bir işarettir.',
      visual_note: 'single person walking under vast sky, soft morning light, contemplative mood',
      keywords: ['vast sky', 'solitude', 'contemplation']
    },
    {
      scene_id: 'scene-002',
      title: 'Gücün Ters Yüzü',
      narration: 'İnsan çoğu zaman gücü bağımsız olmakta arar. Ne kadar az muhtaç olursa, o kadar güçlü olacağını zanneder. Oysa imanî bakış, insanın asıl kuvvetinin bağımsızlık iddiasında değil, doğru merkeze bağlılığında ortaya çıktığını gösterir.',
      visual_note: 'mountain path with a lone traveler, clouds opening to light',
      keywords: ['mountain path', 'soft clouds', 'inner strength']
    },
    {
      scene_id: 'scene-003',
      title: 'Aczin Kapısı',
      narration: 'Acz, insanın elinden hiçbir şey gelmemesi demek değildir. Aczini bilen insan, kendi sınırını tanır ve sonsuz kudrete yönelir. Böylece zayıflık, karanlık bir boşluk olmaktan çıkar; dua, tevekkül ve kulluk kapısına dönüşür.',
      visual_note: 'open doorway with warm light, quiet interior, slow cinematic movement',
      keywords: ['open door', 'warm light', 'hope']
    },
    {
      scene_id: 'scene-004',
      title: 'Dua Sadece Söz Değildir',
      narration: 'Dua yalnızca dil ile yapılan bir istek değildir. İnsan bazen sözle ister, bazen hâliyle muhtaçlığını gösterir, bazen de tavrıyla ve çabasıyla bir kapıya yönelir. Çalışmak, aramak ve hazırlanmak da doğru niyetle bir dua hâline gelebilir.',
      visual_note: 'hands working carefully at a desk, morning window light, calm atmosphere',
      keywords: ['working hands', 'morning light', 'quiet effort']
    },
    {
      scene_id: 'scene-005',
      title: 'Sebep ve Netice',
      narration: 'İnsan sebeplere sarılır; toprağı işler, ilim öğrenir, emek verir, plan yapar. Fakat sebebe sarılmak, sonucu kendi gücünün eseri saymayı gerektirmez. El çoğu zaman bir perdedir; neticeyi yaratan, sebepleri bir araya getiren ve yolu açan Allah\'tır.',
      visual_note: 'farmer touching soil, sunrise over field, realistic cinematic footage',
      keywords: ['farmer', 'soil', 'sunrise']
    },
    {
      scene_id: 'scene-006',
      title: 'Verileni Sahiplenmek',
      narration: 'İnsanın yanılgısı çoğu zaman nimetin kendisinde değil, nimeti okuma biçimindedir. Bir imkân açılır, bir başarı gelir, bir kapı kolaylaşır; sonra insan bunu bütünüyle kendi kudretine yazar. İşte gurur, çoğu zaman yardım gördüğünü unutmakla başlar.',
      visual_note: 'person overlooking a city from a high place, muted colors, reflective mood',
      keywords: ['city overlook', 'reflection', 'humility']
    },
    {
      scene_id: 'scene-007',
      title: 'Teshirin Anlamı',
      narration: 'Kâinatta pek çok şey insanın hizmetine verilmiş gibidir. Toprak ürün verir, hayvanlar fayda sağlar, akıl çalışır, ilham gelir, insanlar birbirine yardım eder. Fakat hizmete verilmiş olmak, insana mutlak sahiplik hakkı vermez; bunun karşılığı şükürdür.',
      visual_note: 'wide farmland, animals grazing, gentle sunlight, peaceful rural landscape',
      keywords: ['farmland', 'grazing animals', 'gratitude']
    },
    {
      scene_id: 'scene-008',
      title: 'Şükrün Dili',
      narration: 'Şükür, yalnızca güzel bir duygu değildir; varlığı doğru okumaktır. İnsan nimeti gördüğünde kaynağını da görürse kalbi dengelenir. O zaman başarı onu şişirmez, imkân onu azdırmaz, bolluk onu nankörlüğe sürüklemez.',
      visual_note: 'simple table with bread and tea, warm home light, quiet gratitude',
      keywords: ['simple meal', 'warm light', 'gratitude']
    },
    {
      scene_id: 'scene-009',
      title: 'Zayıflığın Çağrısı',
      narration: 'Kâinatta zayıflığın çoğu zaman yardım çağıran bir dili vardır. Bir yavrunun çaresizliği, annedeki şefkati harekete geçirir. Bu manzara, gücün her zaman kasla ve zorla işlemediğini gösterir.',
      visual_note: 'mother bird feeding chicks in nest, close up nature footage',
      keywords: ['baby birds', 'nest', 'compassion']
    },
    {
      scene_id: 'scene-010',
      title: 'Şefkatin Hareketi',
      narration: 'Korkak bir canlı, yavrusu söz konusu olduğunda beklenmedik bir cesaret gösterebilir. Yavrunun kuvveti kendi bedeninde değildir; onun zayıflığı, koruyucu şefkati çağırır. Böylece zaaf, görünmeyen bir kuvvetin harekete geçmesine vesile olur.',
      visual_note: 'protective hen with chicks, natural farm setting, gentle documentary style',
      keywords: ['protective mother', 'chicks', 'farm life']
    },
    {
      scene_id: 'scene-011',
      title: 'Kuvvetin Hizmete Verilmesi',
      narration: 'Bazen en güçlü olan bile en zayıf olana hizmet ettirilir. Aç ve heybetli bir hayvan, yavrusu karşısında kendi ihtiyacını geri çeker. Bu, kâinatta yalnız mücadele değil, şefkatli ve hikmetli bir düzen bulunduğunu düşündürür.',
      visual_note: 'lioness with cub in golden grass, calm wildlife scene, soft sunlight',
      keywords: ['lion cub', 'wildlife', 'protection']
    },
    {
      scene_id: 'scene-012',
      title: 'Çocuğun Gücü',
      narration: 'Bir çocuk, istediği pek çok şeye kas gücüyle ulaşmaz. Ağlaması, muhtaç hâli ve korunmaya açık oluşu etrafında bir şefkat halkası kurar. Çocuğun hâli, insanın kâinat içindeki durumuna sessiz bir ayna tutar.',
      visual_note: 'small child holding parent\'s hand, soft park light, tender atmosphere',
      keywords: ['child', 'parent hand', 'tenderness']
    },
    {
      scene_id: 'scene-013',
      title: 'İnsan Hep Muhtaçtır',
      narration: 'İnsan büyüyünce muhtaçlığı tamamen bitmez; sadece şekil değiştirir. Bilgiye, rızka, sağlığa, sevgiye, emniyete ve merhamete muhtaç kalır. Ölüm karşısında ise bütün iddialarını susturan derin bir aczle yüzleşir.',
      visual_note: 'elderly person by window, soft daylight, quiet reflective interior',
      keywords: ['elderly person', 'window light', 'human need']
    },
    {
      scene_id: 'scene-014',
      title: 'Ben Yaptım Yanılgısı',
      narration: 'İnsan bir kapının açılmasına vesile olduğunda, bütün kapıyı kendisi açmış gibi davranabilir. Emeği vardır, çabası vardır, tercihi vardır; fakat bunlar onu asıl kaynak yapmaz. Vesile olmak başka, yaratıcı tesir sahibi olduğunu sanmak başkadır.',
      visual_note: 'person opening a large wooden door, sunlight entering, symbolic scene',
      keywords: ['opening door', 'sunlight', 'realization']
    },
    {
      scene_id: 'scene-015',
      title: 'Karunlaşma Tehlikesi',
      narration: 'Bir nimeti kendi bilgisine, zekâsına ve gücüne bağlamak eski ama çok güncel bir hastalıktır. İnsan zenginliği, başarıyı veya itibarı bütünüyle kendinden bilince kalbinde Karunî bir damar uyanır. Problem nimet sahibi olmak değil; nimetin kaynağını silmektir.',
      visual_note: 'luxury objects on a dark table, isolated light, serious mood',
      keywords: ['wealth', 'dark table', 'moral warning']
    },
    {
      scene_id: 'scene-016',
      title: 'Emek ve İddia',
      narration: 'İnsanın çalıştığını söylemesi yanlış değildir. Yanlış olan, çalışmayı asıl yaratıcı sebep hâline getirmesidir. Tevhit bakışı emeği inkâr etmez; emeği, lütufla açılan sebepler zincirinin içinde doğru yerine koyar.',
      visual_note: 'craftsman shaping wood, focused hands, natural workshop light',
      keywords: ['craftsman', 'effort', 'workshop']
    },
    {
      scene_id: 'scene-017',
      title: 'Medeniyetin Arkası',
      narration: 'İnsanlık şehirler kurdu, ilimler geliştirdi, teknikler üretti ve hayatı kolaylaştıran birçok yol buldu. Fakat bütün bunları yalnız kaba güçle ve bağımsız akılla açıklamak eksik kalır. İnsana yardım edilmiş, ilham verilmiş, ihtiyaçlarına cevap yolları açılmıştır.',
      visual_note: 'modern city skyline blending with sunrise, slow aerial movement',
      keywords: ['city skyline', 'civilization', 'sunrise']
    },
    {
      scene_id: 'scene-018',
      title: 'Cehle İlham',
      narration: 'İnsan bilmediği hâlde öğrenebilir; karanlıkta kaldığı hâlde bir fikir zihninde parlayabilir. Bilgi yollarının açılması da başlı başına bir nimettir. Akıl bir lambadır, fakat lambanın yanması da verilen bir imkândır.',
      visual_note: 'student reading in library, lamp light, quiet study atmosphere',
      keywords: ['library', 'lamp light', 'learning']
    },
    {
      scene_id: 'scene-019',
      title: 'Fakra İhsan',
      narration: 'İnsan rızka muhtaç doğar ve hayatı boyunca ikramlarla ayakta kalır. Bir meyvenin yetişmesi, suyun akması, toprağın bereketi ve havanın nefese uygun oluşu onun icadı değildir. Fakrını gören insan, her nimette ihsanın izini fark eder.',
      visual_note: 'fresh fruit on tree after rain, close up, natural light',
      keywords: ['fruit tree', 'rain', 'provision']
    },
    {
      scene_id: 'scene-020',
      title: 'İpek ve Bal',
      narration: 'Küçük bir canlıdan ipek, sokucu bir böcekten bal çıkarılması insan için derin bir derstir. İnsan bu nimetleri yoktan var etmez; keşfeder, toplar, işler ve kullanır. Kâinatın içindeki ikram, insanın emeğinden önce hazır bekleyen bir rahmet dili taşır.',
      visual_note: 'honeybee on flower and silk fabric texture, warm macro footage',
      keywords: ['honeybee', 'silk', 'natural gift']
    },
    {
      scene_id: 'scene-021',
      title: 'Sahiplik Vehmi',
      narration: 'İnsanın eline verilen şeyler, nefsin dilinde kolayca mülke dönüşür. Oysa akıl, beden, zaman, imkân, çevre ve kabiliyetler emanet gibi durur. Emaneti sahiplik vehmiyle okumak, insanı hem nankörleştirir hem de huzursuz eder.',
      visual_note: 'open hands holding light, minimal dark background, symbolic calm image',
      keywords: ['open hands', 'light', 'trust']
    },
    {
      scene_id: 'scene-022',
      title: 'Tevazu ile Yükselmek',
      narration: 'Tevazu insanı değersizleştirmez; onu hakikate uygun hâle getirir. Kibir, insanı olduğundan büyük gösterirken içini boşaltır. Aczini bilen insan ise kendi yerine oturur ve daha sağlam bir izzet kazanır.',
      visual_note: 'person bowing head in quiet mosque courtyard, soft natural light',
      keywords: ['humility', 'courtyard', 'quiet faith']
    },
    {
      scene_id: 'scene-023',
      title: 'Kullukta İzzet',
      narration: 'İnsan yaratılmışlara kul oldukça parçalanır; nefsine, korkularına, beklentilerine ve geçici şeylere dağılır. Allah\'a kulluk ise onu bu dağınık esaretlerden kurtarır. Asıl Sultan\'a bağlanan kalp, başka kapıların baskısı altında ezilmez.',
      visual_note: 'wide mosque interior with single person, peaceful light beams',
      keywords: ['mosque interior', 'light beams', 'devotion']
    },
    {
      scene_id: 'scene-024',
      title: 'Küçük Ama Büyük',
      narration: 'İnsan madde olarak küçüktür; bir beden, sınırlı bir ömür ve kırılgan bir yapı taşır. Fakat mana olarak bütün kâinatla irtibat kurabilir. Aklı, kalbi, duası, merakı ve şefkati onu yalnızca biyolojik bir varlık olmaktan çıkarır.',
      visual_note: 'silhouette of person under starry sky, wide angle, awe and wonder',
      keywords: ['starry sky', 'human silhouette', 'wonder']
    },
    {
      scene_id: 'scene-025',
      title: 'Kâinatı Okuyan İnsan',
      narration: 'İnsan, varlıkları sadece görmez; anlamaya çalışır. Bir çiçekte güzelliği, gökte düzeni, mevsimlerde hikmeti, canlılarda merhameti okuyabilir. Bu yüzden onun değeri hacminden değil, okuduğu manadan ve verdiği cevaptan gelir.',
      visual_note: 'close up flower with sky in background, slow focus pull, gentle colors',
      keywords: ['flower', 'sky', 'meaning']
    },
    {
      scene_id: 'scene-026',
      title: 'Dünya Bir Hane Gibi',
      narration: 'İmanlı bakışta dünya yabancı ve anlamsız bir kalabalık olmaktan çıkar. Güneş bir lamba gibi, bahar bir hediye gibi, yeryüzü bir sofra gibi okunur. Bu sahiplenme değil; ikramı fark eden bir temaşa hâlidir.',
      visual_note: 'sunlight entering a home, spring flowers near window, serene atmosphere',
      keywords: ['home light', 'spring flowers', 'serenity']
    },
    {
      scene_id: 'scene-027',
      title: 'Emanet Bilinci',
      narration: 'Varlığa tahakküm hırsıyla bakan insan, sonunda hem eşyayı hem kendini yorar. Emanet bilinci ise insanı daha dikkatli, daha minnettar ve daha ölçülü yapar. Çünkü elindeki her şeyin bir sahibi, bir hikmeti ve bir hesabı olduğunu bilir.',
      visual_note: 'person gently watering plants, quiet garden, natural afternoon light',
      keywords: ['watering plants', 'garden', 'stewardship']
    },
    {
      scene_id: 'scene-028',
      title: 'İki Okuma Biçimi',
      narration: 'Hayatta aynı olay iki farklı şekilde okunabilir. Nefis, başarıyı kendine yazar ve kayıpta isyana yaklaşır. Tevhit ise başarıda şükrü, kayıpta sabrı, imkânda emaneti ve ihtiyaçta duayı öğretir.',
      visual_note: 'forked road in countryside, soft cloudy sky, symbolic choice',
      keywords: ['forked road', 'choice', 'spiritual path']
    },
    {
      scene_id: 'scene-029',
      title: 'Gururun Karanlığı',
      narration: 'Gurur yalnızca kaba bir ahlak kusuru değildir. İnsan gururlandığında varlığı yanlış yerden okumaya başlar; kaynağı unutur, perdeyi asıl zanneder, nimeti kendi nefsine bağlar. Bu yanlış okuma kalbi daraltır ve insanı hakikatten uzaklaştırır.',
      visual_note: 'shadowed face near mirror, low light, introspective cinematic mood',
      keywords: ['mirror', 'shadow', 'self reflection']
    },
    {
      scene_id: 'scene-030',
      title: 'Haddin Bilgisi',
      narration: 'Haddini bilmek, insanın ufkunu küçültmez. Tam tersine, ona nerede durduğunu ve nereye dayanacağını öğretir. Kendi sınırını tanıyan insan, sonsuz rahmete açılan kapıyı daha doğru görür.',
      visual_note: 'calm sea horizon at dawn, wide open frame, peaceful tone',
      keywords: ['sea horizon', 'dawn', 'clarity']
    },
    {
      scene_id: 'scene-031',
      title: 'Düşüş ve Yükseliş',
      narration: 'İnsan iki yöne açık yaratılmıştır. Nefsini dinlediğinde nimeti kendine mal eder, aczini inkâr eder ve kulluktan kaçar. Hakikati dinlediğinde ise yerini bilir, Rabbini tanır ve zayıflığını yükseliş merdivenine çevirir.',
      visual_note: 'stairs ascending toward soft light, minimal architectural scene',
      keywords: ['stairs', 'soft light', 'ascent']
    },
    {
      scene_id: 'scene-032',
      title: 'Kâinatın Güzel Özeti',
      narration: 'İnsan hakikate uygun yaşadığında kâinatın anlamını toplayan güzel bir özet hâline gelir. Gözleri temaşa eder, aklı tefekkür eder, kalbi şükreder, dili dua eder. Küçük varlığı, büyük bir mananın aynasına dönüşür.',
      visual_note: 'person standing in meadow at sunrise, expansive landscape, gentle wind',
      keywords: ['meadow', 'sunrise', 'spiritual reflection']
    },
    {
      scene_id: 'scene-033',
      title: 'Günlük Hayata Yansıması',
      narration: 'Bir iş bulunduğunda, bir proje tamamlandığında, bir kapı açıldığında veya insanlar değer verdiğinde insanın iç sesi önem kazanır. Kalp isterse bunları nefsin zaferine çevirir, isterse Allah\'ın lütfuyla açılmış emanetler olarak okur. İkinci okuma insanı sakinleştirir ve şükre götürür.',
      visual_note: 'person leaving office into evening light, calm urban street, reflective mood',
      keywords: ['office exit', 'evening light', 'gratitude']
    },
    {
      scene_id: 'scene-034',
      title: 'Son Davet',
      narration: 'İnsanın yolu, aczini inkâr ederek değil, onu doğru kapıya taşıyarak aydınlanır. Zayıflık dua olur, ihtiyaç şükre dönüşür, emek tevazu ile anlam kazanır. Kulluk insanı küçültmez; onu kendi hakiki değerine yükseltir.',
      visual_note: 'sunrise over quiet hills, warm golden light, hopeful ending',
      keywords: ['sunrise', 'quiet hills', 'hope']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-4-nukte',
    test_day: 'day-22',
    workflow: 'manual_scene_json_single_track_landscape_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
