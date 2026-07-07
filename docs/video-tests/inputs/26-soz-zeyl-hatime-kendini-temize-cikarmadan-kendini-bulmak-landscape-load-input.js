// Derin Okuma — 26.Söz - Zeyl - Hatime landscape video
// Content filled for n8n Load Input.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: "Kendini Temize Çıkarmadan Kendini Bulmak",
    description: "İnsanın aczini, fakrını ve kusurunu dürüstçe görerek nefsini tanımasını; şefkat ve tefekkürle varlığı Allah'a açılan bir ayna olarak okumasını anlatan sakin bir yolculuk.",
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak-landscape-day-50'
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
    "title": "İnsanın Kendine Bakışı",
    "narration": "İnsan kendini tanımak ister; fakat çoğu zaman aynaya yalnız görmek istediği yüzüyle bakar. Kusurlarını örter, başarılarını büyütür ve içindeki savunmayı hakikat sanır. Oysa insanın kendini bulması, önce kendini temize çıkarma alışkanlığını bırakmasıyla başlar.",
    "visual_note": "A thoughtful person facing a mirror in a quiet room, soft dawn light, slow cinematic movement.",
    "keywords": [
      "mirror reflection",
      "thoughtful person",
      "dawn light",
      "self awareness"
    ]
  },
  {
    "scene_id": "scene-002",
    "title": "Daralan Merkez",
    "narration": "Kendimizi hayatın bağımsız merkezi saydığımızda, taşıyamayacağımız kadar büyük bir yükü üstleniriz. Her başarı benliğimizi besler, her kayıp kimliğimizi sarsar. Böyle bir merkez büyüdükçe insan genişlemez; aksine kendi sınırlarının içine kapanır.",
    "visual_note": "A lone person standing at the center of a crowded city crossing, subtle time lapse, muted colors.",
    "keywords": [
      "city crossing",
      "lone person",
      "crowd",
      "isolation"
    ]
  },
  {
    "scene_id": "scene-003",
    "title": "Hakikate Açılan Dört Yol",
    "narration": "Bu kapanmayı aşmak için dört temel yön vardır: acz, fakr, şefkat ve tefekkür. Bunlar insanı değersizleştiren eksiklikler değil, kulluğun gerçek konumunu gösteren işaretlerdir. Doğru okunduklarında benliği şişirmek yerine kalbi hakikate açarlar.",
    "visual_note": "Four quiet paths meeting in a wide green valley under gentle morning light, aerial cinematic view.",
    "keywords": [
      "four paths",
      "green valley",
      "morning light",
      "journey"
    ]
  },
  {
    "scene_id": "scene-004",
    "title": "Aczin Dürüstlüğü",
    "narration": "Acz, insanın gücünün sınırlı olduğunu dürüstçe kabul etmesidir. Geleceği bütünüyle kontrol edemediğimizi, sevdiklerimizi her tehlikeden koruyamadığımızı ve kendi hayatımıza bile tam hükmedemediğimizi fark ederiz. Bu fark ediş bir yenilgi değil, yanlış bir iddiadan uyanıştır.",
    "visual_note": "A small human figure beneath vast mountains and moving clouds, calm wide landscape shot.",
    "keywords": [
      "vast mountains",
      "small figure",
      "moving clouds",
      "human limits"
    ]
  },
  {
    "scene_id": "scene-005",
    "title": "Zayıflığı Sergilememek",
    "narration": "Kendi aczini bilmek, zayıflığı insanlara göstererek değer aramak değildir. Kişi sorumluluğunu yerine getirir, elinden geleni yapar ve vakarını korur. Fakat kalbinin derininde gücünü mutlaklaştırmaz; sonucu yaratanın kendisi olmadığını bilir.",
    "visual_note": "A calm worker completing a task carefully, then pausing by a window in quiet reflection.",
    "keywords": [
      "careful work",
      "quiet reflection",
      "responsibility",
      "window light"
    ]
  },
  {
    "scene_id": "scene-006",
    "title": "Aczden Dayanağa",
    "narration": "İnsan her şeyi kendi omzunda taşımak zorunda olduğuna inandığında yorulur. Aczini kabul ettiğinde ise çabasını bırakmadan sonsuz kudrete dayanmayı öğrenir. Böylece sınırlılık, umutsuzluğa açılan bir çukur değil; güvene açılan bir kapı olur.",
    "visual_note": "A person setting down a heavy backpack beside a mountain trail as sunlight breaks through clouds.",
    "keywords": [
      "heavy backpack",
      "mountain trail",
      "sunlight",
      "relief"
    ]
  },
  {
    "scene_id": "scene-007",
    "title": "Fakrın Manası",
    "narration": "Fakr yalnız mal azlığı değildir; insanın var olmak ve varlığını sürdürmek için sayısız nimete muhtaç olduğunu bilmesidir. Bir nefes, bir yudum su, çalışan bir kalp ve doğan güneş bizim üretimimiz değildir. Hayat, her an verilenlerle ayakta durur.",
    "visual_note": "Close views of breathing, clear water, sunrise and a hand over the heart, gentle cinematic montage.",
    "keywords": [
      "clear water",
      "sunrise",
      "heartbeat",
      "daily gifts"
    ]
  },
  {
    "scene_id": "scene-008",
    "title": "Muhtaçlığın Aynası",
    "narration": "Muhtaçlık ilk bakışta insanı küçülten bir durum gibi görünebilir. Oysa ihtiyaçlarımız, bizi kuşatan ikramın genişliğini görünür kılar. Açlık rızkı, susuzluk suyu, yalnızlık yakınlığı ve çaresizlik merhameti tanımaya açılan pencerelere dönüşebilir.",
    "visual_note": "Rain nourishing dry soil and young plants, soft light, detailed nature footage.",
    "keywords": [
      "rain",
      "dry soil",
      "young plants",
      "nourishment"
    ]
  },
  {
    "scene_id": "scene-009",
    "title": "Sahip Değil Emanetçi",
    "narration": "İnsan muhtaçlığını anladıkça sahiplik iddiası yumuşar. Bedeni, kabiliyetleri, zamanı ve imkânları kendiliğinden kazanılmış mülkler gibi değil, korunması gereken emanetler gibi görmeye başlar. Emanet bilinci hem şükrü hem sorumluluğu birlikte doğurur.",
    "visual_note": "Hands carefully holding a small seedling, warm natural light, cinematic close-up.",
    "keywords": [
      "holding seedling",
      "care",
      "trust",
      "warm light"
    ]
  },
  {
    "scene_id": "scene-010",
    "title": "Şefkatin Genişliği",
    "narration": "Şefkat, kalbi yalnız kendi ihtiyacına kapalı olmaktan çıkarır. Başkasının acısını fark eden insan, benliğinin dar sınırlarını aşar ve canlılar arasındaki bağı hisseder. Merhamet, insanı bir kişiye bağlayan kör bir tutku değil; iyiliği genişleten temiz bir yöneliştir.",
    "visual_note": "A person gently helping an elderly stranger on a quiet street, respectful cinematic framing.",
    "keywords": [
      "helping elder",
      "compassion",
      "quiet street",
      "human connection"
    ]
  },
  {
    "scene_id": "scene-011",
    "title": "Merhametin Sorumluluğu",
    "narration": "Gerçek şefkat yalnız üzülmekle yetinmez; imkân ölçüsünde iyiliğe dönüşür. Bazen bir yükü paylaşmak, bazen incitmemek, bazen de sessizce dua etmektir. Kalp böylece duygunun geçici sıcaklığından çıkar, sorumluluk taşıyan bir merhamete ulaşır.",
    "visual_note": "Two people carrying a box together into a modest home, natural daylight, warm documentary style.",
    "keywords": [
      "shared burden",
      "helping",
      "modest home",
      "kindness"
    ]
  },
  {
    "scene_id": "scene-012",
    "title": "Tefekkürle Bakmak",
    "narration": "Tefekkür, eşyaya yalnızca bakmak değil, gördüğünün anlamını düşünmektir. Bir ağacın düzeninde, bir kuşun hayatında veya gökyüzünün ölçüsünde rastgele bir görüntüden fazlasını arar. Akıl dikkatle baktığında varlık, sessiz bir işaretler bütünü hâline gelir.",
    "visual_note": "A person observing tree branches, birds and a wide starry sky, slow contemplative montage.",
    "keywords": [
      "tree branches",
      "birds",
      "starry sky",
      "contemplation"
    ]
  },
  {
    "scene_id": "scene-013",
    "title": "Dört Yönün Birliği",
    "narration": "Acz kudrete, fakr rahmete, şefkat geniş bir kulluğa, tefekkür ise hikmete yöneltir. Bu dört yön birbirinden kopuk değildir. İnsan sınırını bilir, ihtiyacını görür, başkasına merhamet eder ve bütün bunların anlamını düşünürken dengeli bir iç yolculuğa çıkar.",
    "visual_note": "Four streams joining into one clear river through a peaceful valley, aerial view.",
    "keywords": [
      "joining streams",
      "clear river",
      "peaceful valley",
      "unity"
    ]
  },
  {
    "scene_id": "scene-014",
    "title": "Birinci Adım",
    "narration": "İlk adım, nefsi kusursuz ilan etmemektir. İnsan kendini sever; bu yüzden hatasını açıklamak yerine savunma, kusurunu görmek yerine mazeret üretme eğilimindedir. Kendini temize çıkarmamak, kendinden nefret etmek değil; iç muhasebede dürüst kalmaktır.",
    "visual_note": "A person writing honestly in a journal beside a mirror, quiet evening light.",
    "keywords": [
      "journal writing",
      "mirror",
      "self examination",
      "evening light"
    ]
  },
  {
    "scene_id": "scene-015",
    "title": "Savunmadan Muhasebeye",
    "narration": "Bir eleştiri duyduğumuzda içimiz hemen cevap hazırlayabilir. Fakat savunmayı kısa bir süre susturmak, haklı olduğumuz yer kadar eksik olduğumuz yeri de görmemize yardım eder. Nefis aklanmak ister; vicdan ise iyileşmek için gerçeği duymaya ihtiyaç duyar.",
    "visual_note": "A person listening quietly during a serious conversation, soft neutral interior, close-up.",
    "keywords": [
      "quiet listening",
      "serious conversation",
      "reflection",
      "humility"
    ]
  },
  {
    "scene_id": "scene-016",
    "title": "Kusurla Kimliği Ayırmak",
    "narration": "Kusurunu kabul etmek, bütün kimliğini kusurdan ibaret saymak değildir. Hata insanı değersiz kılmaz; fakat inkâr edilen hata büyümeye devam eder. Dürüst kabul, tövbenin, telafinin ve gerçek değişimin başlayabileceği sağlam zemindir.",
    "visual_note": "A cracked ceramic bowl being carefully repaired by hand, warm workshop light.",
    "keywords": [
      "repairing pottery",
      "cracked bowl",
      "restoration",
      "warm workshop"
    ]
  },
  {
    "scene_id": "scene-017",
    "title": "İkinci Adım",
    "narration": "İkinci adım, nefsin kendini nerede hatırlayıp nerede unuttuğunu fark etmektir. Haz, övgü ve kazanç söz konusu olduğunda benlik hızla öne çıkar. Sorumluluk, hizmet, fanilik ve ölüm hatırlandığında ise geri çekilmek ister.",
    "visual_note": "A split visual of applause on one side and an unfinished duty on the other, cinematic contrast.",
    "keywords": [
      "applause",
      "unfinished duty",
      "contrast",
      "self interest"
    ]
  },
  {
    "scene_id": "scene-018",
    "title": "Hazda Geri Durmak",
    "narration": "Terbiye, nefsin alıştığı bu dengeyi tersine çevirmeyi gerektirir. İnsan payına düşen güzelliği yaşar, fakat her nimette kendini merkeze koymaz. Haz anında başkalarını ve nimetin kaynağını hatırlamak, keyfi şükre dönüştürür.",
    "visual_note": "A family sharing a simple meal with gratitude, warm table light, calm documentary scene.",
    "keywords": [
      "shared meal",
      "gratitude",
      "family table",
      "warm light"
    ]
  },
  {
    "scene_id": "scene-019",
    "title": "Hizmette Hazır Olmak",
    "narration": "Sorumluluk geldiğinde görünmez olmak kolaydır. Fakat insanın olgunluğu, yalnız nimet sofrasında değil, zahmet anında da yerini bilmesiyle anlaşılır. Hizmette kendini hatırlamak; görevi sahiplenmek, yükü paylaşmak ve karşılık beklemeden elinden geleni yapmaktır.",
    "visual_note": "Volunteers cleaning a shared public space together at sunrise, natural cinematic footage.",
    "keywords": [
      "volunteers",
      "shared work",
      "sunrise",
      "service"
    ]
  },
  {
    "scene_id": "scene-020",
    "title": "Faniliği Hatırlamak",
    "narration": "Ölümü hatırlamak hayatı karartmak için değildir. Fanilik, sahip olduklarımızın geçici olduğunu göstererek önceliklerimizi düzeltir. Sonlu olduğunu bilen insan, zamanı daha dikkatli kullanır ve küçük benlik kavgalarının ötesine geçebilir.",
    "visual_note": "Autumn leaves drifting beside an old clock, soft afternoon light, slow motion.",
    "keywords": [
      "autumn leaves",
      "old clock",
      "passing time",
      "mortality"
    ]
  },
  {
    "scene_id": "scene-021",
    "title": "Üçüncü Adım",
    "narration": "Üçüncü adım, iyilikleri ve başarıları kime nispet ettiğimizi sorgulamaktır. Nefis güzelliği kendinden bilmek, kusuru ise şartlara ve başkalarına vermek ister. Bu tek taraflı hesap, insanın hem gerçeğini hem de nimetle ilişkisini bozar.",
    "visual_note": "A successful person standing before a team, then turning to acknowledge everyone, understated office scene.",
    "keywords": [
      "shared success",
      "team recognition",
      "humility",
      "office"
    ]
  },
  {
    "scene_id": "scene-022",
    "title": "Güzelliğin Kaynağı",
    "narration": "Bir kabiliyetin gelişmesinde irade ve emek vardır; fakat iradenin kendisi, beden, akıl, fırsat ve sonuç bize bütünüyle ait değildir. İnsan çabasını inkâr etmeden bütün imkânların ikram edildiğini görür. Böylece başarı sahiplik iddiasına değil, şükre yönelir.",
    "visual_note": "A musician practicing diligently, intercut with hands, breath and supportive people, warm studio light.",
    "keywords": [
      "musician practice",
      "effort",
      "support",
      "gratitude"
    ]
  },
  {
    "scene_id": "scene-023",
    "title": "Övgüden Şükre",
    "narration": "Övgü kalbe geldiğinde onu bütünüyle reddetmek de sahiplenmek de gerekmez. Güzel sonucu bir nimet olarak görmek, insanı kibirden korurken emeğin sorumluluğunu da muhafaza eder. Şükür, başarıyı küçültmez; onu doğru yere bağlar.",
    "visual_note": "A person receiving quiet appreciation and responding with a grateful smile, soft natural light.",
    "keywords": [
      "appreciation",
      "grateful smile",
      "humility",
      "natural light"
    ]
  },
  {
    "scene_id": "scene-024",
    "title": "Kusuru Görmenin Faydası",
    "narration": "İnsan kendi kusurunu gördüğünde başkasını yargılamakta daha ihtiyatlı olur. Aczini bilen kişi sertlikten, fakrını bilen kişi üstünlük iddiasından uzaklaşır. İç muhasebe, kalbi ezmek için değil; kibri azaltıp merhameti çoğaltmak için yapılır.",
    "visual_note": "Two people reconciling after a disagreement on a quiet park bench, gentle daylight.",
    "keywords": [
      "reconciliation",
      "park bench",
      "empathy",
      "gentle daylight"
    ]
  },
  {
    "scene_id": "scene-025",
    "title": "Dördüncü Adım",
    "narration": "Dördüncü adım, varlığı bağımsız ve kendi başına anlamlı görme yanılgısından çıkmaktır. Bir şey yalnız kendisine bakan yüzüyle ele alındığında geçici, kırılgan ve sessiz kalır. Onu yaratıcısına işaret eden yönüyle okumak ise aynı varlığa daha derin bir anlam kazandırır.",
    "visual_note": "A solitary flower first in shadow, then illuminated by sunlight revealing intricate details.",
    "keywords": [
      "solitary flower",
      "sunlight",
      "intricate details",
      "meaning"
    ]
  },
  {
    "scene_id": "scene-026",
    "title": "İsim Olarak Bakmak",
    "narration": "Bir ağacı yalnız odun, gölge veya meyve üreten bağımsız bir nesne sayabiliriz. Bu bakış onun faydasını görür; fakat varoluşundaki ölçüyü, hayatı ve sanatı açıklamadan bırakır. Eşya kendi adına okunduğunda anlam, görünen yüzeyle sınırlanır.",
    "visual_note": "A large tree shown through practical uses, wood, shade and fruit, neutral observational style.",
    "keywords": [
      "large tree",
      "fruit",
      "shade",
      "surface meaning"
    ]
  },
  {
    "scene_id": "scene-027",
    "title": "İşaret Olarak Bakmak",
    "narration": "Aynı ağaca bir işaret ve ayna olarak bakıldığında, yaprakların düzeni ilmi, rızkı rahmeti, güzelliği sanatı düşündürür. Ağaç ortadan kaybolmaz; tam tersine daha çok görünür. Fakat artık son durak değil, kendisini aşan isimlere açılan bir pencere olur.",
    "visual_note": "Sunlight moving through detailed green leaves and ripe fruit, slow upward camera movement.",
    "keywords": [
      "green leaves",
      "ripe fruit",
      "sunlight",
      "divine signs"
    ]
  },
  {
    "scene_id": "scene-028",
    "title": "Kâinatı Silmeden",
    "narration": "Huzura ulaşmak için dünyayı yok saymak gerekmez. Dağı, denizi, insanı ve gündelik işi unutmak yerine hepsini doğru yönden okumak mümkündür. Varlık Allah'tan bağımsızlaştırıldığında perde olur; O'nun isimlerini gösterdiğinde ise aynaya dönüşür.",
    "visual_note": "Mountains, sea, people and daily work connected in a serene cinematic montage.",
    "keywords": [
      "mountains",
      "sea",
      "daily life",
      "reflection"
    ]
  },
  {
    "scene_id": "scene-029",
    "title": "Her Şeyde Bir Yol",
    "narration": "Bir çocuğun tebessümü şefkati, düzenli bir gökyüzü kudreti, sofraya gelen rızık rahmeti hatırlatabilir. Böyle bakıldığında hayatın sıradan anları manevî dikkatin parçaları olur. İnsan yalnız ibadet vaktinde değil, dikkatle baktığı her anda Rabbine yönelen bir yol bulabilir.",
    "visual_note": "A child's smile, star patterns and bread on a family table, warm contemplative montage.",
    "keywords": [
      "child smile",
      "starry sky",
      "bread table",
      "daily signs"
    ]
  },
  {
    "scene_id": "scene-030",
    "title": "Kısa Yol",
    "narration": "Bu yol kısadır; çünkü insanı uzun ve karmaşık iddialara değil, dört açık fark edişe çağırır. Sınırını bil, ihtiyacını gör, merhametini genişlet ve varlığı düşünerek oku. Her adım benliğin merkezî iddiasını azaltıp kulluk şuurunu güçlendirir.",
    "visual_note": "Four simple stepping stones crossing a clear stream toward a sunlit path.",
    "keywords": [
      "stepping stones",
      "clear stream",
      "sunlit path",
      "simple journey"
    ]
  },
  {
    "scene_id": "scene-031",
    "title": "Selametli Yol",
    "narration": "Bu yol daha güvenlidir; çünkü nefse büyük manevî makamlar ve üstünlük payeleri vermez. Sermayesi acz, fakr ve kusurunu bilmektir. İnsan ilerledikçe kendini başkalarından yüksek görmek yerine, nimetin büyüklüğünü ve sorumluluğunun ağırlığını daha iyi anlar.",
    "visual_note": "A humble traveler walking a stable low mountain path, wide peaceful view.",
    "keywords": [
      "humble traveler",
      "stable path",
      "mountain",
      "safety"
    ]
  },
  {
    "scene_id": "scene-032",
    "title": "Herkese Açık Yol",
    "narration": "Bu yol yalnız belli bir mizaca veya özel bir hayata ait değildir. Her insan zayıflığını, ihtiyacını, merhametini ve düşünme kabiliyetini kendi hayatında bulabilir. Çarşıda, evde, işte ve yalnızlıkta aynı temel ders yürümeye devam eder.",
    "visual_note": "People of different ages in home, workplace and street settings, calm inclusive montage.",
    "keywords": [
      "different people",
      "home",
      "workplace",
      "daily life"
    ]
  },
  {
    "scene_id": "scene-033",
    "title": "Gündelik Hayattaki Ölçü",
    "narration": "Derin fikirlerin hayata değmesi için düzenli amellere dönüşmesi gerekir. Farzları korumak, büyük günahlardan uzak durmak ve Peygamberimizin sünnetini günlük davranışlarda ölçü edinmek yolun sağlam zeminidir. İç dünyadaki fark ediş, dışarıdaki sadakatle beslenir.",
    "visual_note": "A person moving through an orderly day with prayer, honest work and kindness, respectful cinematic montage.",
    "keywords": [
      "daily discipline",
      "prayer",
      "honest work",
      "kindness"
    ]
  },
  {
    "scene_id": "scene-034",
    "title": "Namazda Toparlanmak",
    "narration": "Namaz, dağılmış benliği yeniden kulluk merkezinde toplar. Acele etmeden, hareketlerin hakkını vererek kılınan namaz bedene de kalbe de haddini hatırlatır. Ardından yapılan tesbihat, bu yönelişin gündelik telaş içinde hemen kaybolmamasına yardım eder.",
    "visual_note": "A quiet prayer space at dawn with soft light and prayer beads, no visible face, respectful framing.",
    "keywords": [
      "prayer space",
      "dawn light",
      "prayer beads",
      "stillness"
    ]
  },
  {
    "scene_id": "scene-035",
    "title": "Kendini Bulmanın Ölçüsü",
    "narration": "Kendini bulmak, benliği büyütmek veya her arzusunu doğrulamak değildir. İnsan gerçek yerini; kul, muhtaç, sorumlu ve nimetlere mazhar bir varlık olarak tanıdığında bulur. Bu tanıma küçültmez; sahte yüklerden kurtarıp daha sahici bir değer kazandırır.",
    "visual_note": "A person standing calmly on an open hill at sunrise, expansive horizon, gentle wind.",
    "keywords": [
      "open hill",
      "sunrise",
      "calm person",
      "true identity"
    ]
  },
  {
    "scene_id": "scene-036",
    "title": "Açılan Ayna",
    "narration": "Kendini aklamayı bırakan insan kusurunu düzeltmeye, nimeti sahiplenmeyen insan şükretmeye, varlığı bağımsız görmeyen insan tefekküre yaklaşır. Aynı dünya artık kapalı bir oda değildir. Her şey, doğru bakışla rahmete, kudrete, hikmete ve huzura açılan geniş bir aynaya dönüşür.",
    "visual_note": "A dark room opening onto a vast luminous landscape, slow cinematic reveal, peaceful ending.",
    "keywords": [
      "open doorway",
      "luminous landscape",
      "peace",
      "transformation"
    ]
  }
],

  metadata: {
  "source": "derin-okuma",
  "blog_post": "26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak",
  "test_day": "day-50",
  "workflow": "manual_scene_json_single_track_landscape_load_input",
  "content_generation_status": "filled"
}
};

return [{ json: { raw_input: rawInput } }];
