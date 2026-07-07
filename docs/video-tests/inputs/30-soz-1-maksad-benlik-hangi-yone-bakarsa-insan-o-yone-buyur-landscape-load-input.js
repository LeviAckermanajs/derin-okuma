// Derin Okuma — 30.Söz - 1.Maksad landscape video
// Content filled for day-51 production.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: "Benlik Hangi Yöne Bakarsa İnsan O Yöne Büyür",
    description: "Benliğin insanı kulluğa açan bir ayna ile hakikati örten bir perde arasındaki yolculuğu.",
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur-landscape-day-51'
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
    "title": "Ben Dediğimizde",
    "narration": "İnsan, ben dediğinde aslında büyük bir sorunun kapısını açar. Sahip olduğu gücün gerçek maliki midir, yoksa o güç sayesinde asıl sahibini tanıyacak bir yolcu mudur?",
    "visual_note": "Thoughtful person facing a mirror at dawn, soft cinematic light.",
    "keywords": [
      "mirror reflection",
      "thoughtful person",
      "dawn light"
    ]
  },
  {
    "scene_id": "scene-002",
    "title": "Yön Veren Benlik",
    "narration": "Benlik tek başına iyi ya da kötü değildir. Bir pusula gibi hangi yöne çevrilirse insanın düşüncesi, ahlakı ve hayatı da o yöne doğru büyür.",
    "visual_note": "Vintage compass turning between two paths in a quiet landscape.",
    "keywords": [
      "compass",
      "two paths",
      "life direction"
    ]
  },
  {
    "scene_id": "scene-003",
    "title": "İki Ayrı Okuma",
    "narration": "İnsan kendisini iki farklı biçimde okuyabilir. Ya varlığını emanet bilir ve kendisinden ötesine bakar; ya da kendisini bağımsız bir merkez sayıp her şeyi kendi hesabına yorumlar.",
    "visual_note": "Person standing at a forked road, one bright path and one shadowed path.",
    "keywords": [
      "forked road",
      "choice",
      "light and shadow"
    ]
  },
  {
    "scene_id": "scene-004",
    "title": "Ayna Olmak",
    "narration": "Doğru okunan benlik bir ayna gibidir. Ayna ışığı kendisinin üretmediğini bilir; üzerinde görünen güzelliği kaynağına işaret ederek gösterir.",
    "visual_note": "Clean mirror reflecting warm sunlight into a dark room.",
    "keywords": [
      "sunlight mirror",
      "reflection",
      "warm light"
    ]
  },
  {
    "scene_id": "scene-005",
    "title": "Emanet Bilinci",
    "narration": "İnsanın aklı, yeteneği, bedeni ve imkânları ona verilmiş emanetlerdir. Emanet bilinci, insanı değersizleştirmez; aksine elindekileri sorumlulukla ve şükürle kullanmayı öğretir.",
    "visual_note": "Open hands holding a small glowing seed, gentle natural light.",
    "keywords": [
      "open hands",
      "glowing seed",
      "responsibility"
    ]
  },
  {
    "scene_id": "scene-006",
    "title": "Ölçü Olarak Ben",
    "narration": "İnsan küçük bir bilgiye sahip olduğu için sonsuz ilmi düşünür. Sınırlı gücünü hissederek mutlak kudretin ne demek olduğunu anlamaya yaklaşır; kendi ölçüsü, daha büyük hakikatleri tanıtan bir anahtara dönüşür.",
    "visual_note": "Small ruler beside a vast starry sky, contemplative visual metaphor.",
    "keywords": [
      "starry sky",
      "measurement",
      "vast universe"
    ]
  },
  {
    "scene_id": "scene-007",
    "title": "Acizliğin Dili",
    "narration": "Acizlik yalnızca bir eksiklik değildir. İnsan yetişemediği şeyleri fark ettiğinde, her şeye gücü yeten bir kudrete dayanma ihtiyacını daha açık görür.",
    "visual_note": "Small human figure beneath a vast mountain range, calm morning mist.",
    "keywords": [
      "mountain scale",
      "human figure",
      "morning mist"
    ]
  },
  {
    "scene_id": "scene-008",
    "title": "İhtiyacın Açtığı Kapı",
    "narration": "İnsan sayısız şeye muhtaçtır fakat bunların çok azını kendi başına elde edebilir. Bu fakirlik, rahmetin genişliğini fark ettiren sessiz bir davettir.",
    "visual_note": "Dry earth receiving gentle rain, close cinematic nature shot.",
    "keywords": [
      "gentle rain",
      "dry earth",
      "renewal"
    ]
  },
  {
    "scene_id": "scene-009",
    "title": "Eksiklikten Kemale",
    "narration": "Kusurlarımızı görmek umutsuzluk sebebi olmak zorunda değildir. Eksiklik, mükemmelliğin ne olduğunu sezdirir; insanı af dilemeye, öğrenmeye ve olgunlaşmaya yöneltir.",
    "visual_note": "Kintsugi pottery repaired with gold on a simple dark background.",
    "keywords": [
      "kintsugi",
      "imperfection",
      "healing"
    ]
  },
  {
    "scene_id": "scene-010",
    "title": "Kulluk ve Hürriyet",
    "narration": "Kulluğu kabul eden insan, her şeye ayrı ayrı boyun eğmekten kurtulur. Tek bir yaratıcıya bağlanmak, korkuları ve sahte otoriteleri çoğaltmak yerine kalbe sağlam bir merkez verir.",
    "visual_note": "Solitary person walking freely across a wide sunlit plain.",
    "keywords": [
      "open plain",
      "freedom",
      "sunlit path"
    ]
  },
  {
    "scene_id": "scene-011",
    "title": "Sebeplerin Perdesi",
    "narration": "Sebepler hayatın düzeninde görev görür, fakat gerçek sahiplik onlara ait değildir. Tohum, toprak, yağmur ve güneş bir araya gelir; yine de hayatın sırrını kendi başlarına kuramazlar.",
    "visual_note": "Seed sprouting through soil with rain and sunlight in time lapse.",
    "keywords": [
      "seed sprout",
      "rain sunlight",
      "growth"
    ]
  },
  {
    "scene_id": "scene-012",
    "title": "Düzenin Ardındaki İrade",
    "narration": "Tabiat dediğimiz düzen, sürekli işleyen kanunların görünümüdür. Kanun ise yapan değil, işleyişin tarifidir; yazıdaki düzen nasıl kâtibi düşündürürse kâinattaki ölçü de irade ve kudreti düşündürür.",
    "visual_note": "Intricate leaf veins and geometric natural patterns, macro footage.",
    "keywords": [
      "leaf patterns",
      "natural geometry",
      "macro nature"
    ]
  },
  {
    "scene_id": "scene-013",
    "title": "Sahiplenmenin Başlangıcı",
    "narration": "Benlik kendi hesabına okununca sessiz bir sahiplenme başlar. İnsan, verilmiş olanı kazanılmış ve kendisine ait mutlak bir hak gibi görmeye yönelir.",
    "visual_note": "Person clutching possessions in a dim room, restrained cinematic mood.",
    "keywords": [
      "possessiveness",
      "dim room",
      "human hands"
    ]
  },
  {
    "scene_id": "scene-014",
    "title": "İnce Perdenin Kalınlaşması",
    "narration": "Başlangıçta hafif bir yanılgı olan sahiplik duygusu, tekrarlandıkça kalınlaşır. Alışkanlık gafleti, gaflet de insanın kendisini bağımsız sanmasını besler.",
    "visual_note": "Window slowly covered by layers of dust, fading daylight.",
    "keywords": [
      "dusty window",
      "fading light",
      "layers"
    ]
  },
  {
    "scene_id": "scene-015",
    "title": "Merkeze Yerleşen Ego",
    "narration": "Ölçü olmak için verilen benlik amaç hâline gelince bütün dünya onun çevresinde dönüyor sanılır. Başarı kibri, kayıp öfkeyi, farklılık ise üstünlük duygusunu kolayca büyütür.",
    "visual_note": "Lone person centered in a spinning crowded city, subtle motion blur.",
    "keywords": [
      "crowded city",
      "ego center",
      "motion blur"
    ]
  },
  {
    "scene_id": "scene-016",
    "title": "Benliğin İnsanı Yutması",
    "narration": "İnsan benliğini büyüttüğünü düşünürken bazen onun içine hapsolur. Kendi arzusundan başka ölçü tanımayan kişi, geniş bir âlemde yaşasa bile dar bir odada kalmış gibidir.",
    "visual_note": "Person confined in a narrow shadowed corridor, distant open sky.",
    "keywords": [
      "narrow corridor",
      "confinement",
      "distant sky"
    ]
  },
  {
    "scene_id": "scene-017",
    "title": "Güç Hak Mıdır",
    "narration": "Yanlış yönelen benlik, güçlü olanı haklı saymaya yatkındır. Oysa güç, hakkın ölçüsü değildir; değerini ancak adalete ve hakikate hizmet ettiği zaman kazanır.",
    "visual_note": "Balanced justice scales beside a strong clenched hand, dramatic soft light.",
    "keywords": [
      "justice scales",
      "power",
      "truth"
    ]
  },
  {
    "scene_id": "scene-018",
    "title": "Hakkın Kuvveti",
    "narration": "Hak bazen görünüşte zayıf kalabilir, fakat kuvvetini doğruluğundan alır. Adalet, çıkar değiştikçe biçim değiştiren bir araç değil; gücü sınırlandıran temel bir ölçüdür.",
    "visual_note": "Small candle standing firm against a dark windy background.",
    "keywords": [
      "single candle",
      "resilience",
      "darkness"
    ]
  },
  {
    "scene_id": "scene-019",
    "title": "Güzelliği Okumak",
    "narration": "Bir çiçeğe bakınca yalnızca güzel demek mümkündür. Fakat onun renk, biçim ve kokusundaki ince sanatı görmek, güzelliği kendisine hapsetmez; sanatkârına açılan bir pencereye dönüştürür.",
    "visual_note": "Detailed flower blooming in soft sunlight, elegant macro cinematography.",
    "keywords": [
      "flower bloom",
      "macro beauty",
      "sunlight"
    ]
  },
  {
    "scene_id": "scene-020",
    "title": "Ne Güzel Yapılmış",
    "narration": "Güzellik bağımsız bir mülk gibi sahiplenildiğinde kısa ömürlü bir hayranlığa dönüşür. Yapılışındaki ölçü fark edildiğinde ise hayranlık şükre, bakış da tefekküre yükselir.",
    "visual_note": "Artisan hands creating delicate patterns, warm workshop light.",
    "keywords": [
      "artisan hands",
      "delicate craft",
      "warm workshop"
    ]
  },
  {
    "scene_id": "scene-021",
    "title": "İki Ağacın Meyvesi",
    "narration": "Her düşünce biçimi zamanla ahlaki meyveler verir. Emanet ve kulluk bilinci tevazu, adalet ve merhameti beslerken; bağımsızlık vehmi kibir, tahakküm ve inkârı büyütebilir.",
    "visual_note": "Two contrasting trees, one flourishing and one barren, wide landscape.",
    "keywords": [
      "contrasting trees",
      "flourishing tree",
      "barren tree"
    ]
  },
  {
    "scene_id": "scene-022",
    "title": "Nurlu Ağacın Dalları",
    "narration": "Hakikate teslim olan çizgi, insanlığa peygamberlerin rehberliğini, manevi olgunluğu ve güzel ahlakı taşır. Kökü tevhide uzanan bu ağacın dallarında adalet, şefkat ve hizmet görünür.",
    "visual_note": "Majestic green tree with sunlight through branches, peaceful people beneath.",
    "keywords": [
      "green tree",
      "sunlit branches",
      "peaceful community"
    ]
  },
  {
    "scene_id": "scene-023",
    "title": "Acı Meyveler",
    "narration": "Kendini mutlaklaştıran düşünce ise varlığı parçalar ve yaratmayı sebeplere dağıtır. İnsan gücüne tapınma, tabiatı nihai kaynak sayma ve başkaları üzerinde hâkimiyet kurma isteği bu kökten beslenir.",
    "visual_note": "Barren thorny tree under heavy clouds, desolate cinematic landscape.",
    "keywords": [
      "thorny tree",
      "heavy clouds",
      "desolate land"
    ]
  },
  {
    "scene_id": "scene-024",
    "title": "Hayat Yalnız Mücadele Mi",
    "narration": "Hayatı yalnızca çatışma olarak görmek, insan ilişkilerini sürekli bir üstünlük yarışına çevirir. Böyle bir dünyada başkasının kazancı tehdit, zayıflığı ise kullanılacak fırsat gibi görünür.",
    "visual_note": "Fast crowded commuters pushing through a city crossing, muted colors.",
    "keywords": [
      "city crowd",
      "competition",
      "urban stress"
    ]
  },
  {
    "scene_id": "scene-025",
    "title": "Yardımlaşmanın Düzeni",
    "narration": "Oysa hayatın her katmanında dayanışma da vardır. Arılar çiçeklerle, ağaçlar toprakla, insanlar birbirlerinin emeğiyle yaşar; varlık yalnız rekabetle değil, ikram ve yardımlaşmayla sürer.",
    "visual_note": "Bees pollinating flowers and people cooperating in a community garden.",
    "keywords": [
      "bees flowers",
      "cooperation",
      "community garden"
    ]
  },
  {
    "scene_id": "scene-026",
    "title": "Birliğe Açılan İzler",
    "narration": "Kâinatın farklı köşelerinde aynı ölçülerin, benzer kanunların ve ortak bir düzenin işlemesi birliğe işaret eder. Bütün varlığı kuşatan uyum, birbirinden kopuk sahipler yerine tek bir iradeyi düşündürür.",
    "visual_note": "Earth from space transitioning to repeating patterns in nature.",
    "keywords": [
      "earth space",
      "cosmic unity",
      "nature patterns"
    ]
  },
  {
    "scene_id": "scene-027",
    "title": "Bir Meyvenin Hikmeti",
    "narration": "Bir meyvenin bize bakan faydası, onun anlamının yalnızca küçük bir parçasıdır. Rengi, kokusu, düzeni ve hayat döngüsündeki yeri; onu yaratan kudrete bakan çok daha geniş hikmetler taşır.",
    "visual_note": "Ripe fruit on a branch with dew, detailed cinematic close-up.",
    "keywords": [
      "ripe fruit",
      "dew drops",
      "orchard"
    ]
  },
  {
    "scene_id": "scene-028",
    "title": "Faydanın Ötesi",
    "narration": "Varlıkları yalnız bize sağladıkları yararla değerlendirmek, büyük bir kitabı tek kelimesine indirgemek gibidir. Her canlı kendi hayatından daha geniş bir anlam taşır ve sayısız ilişki içinde bir sanat eseri olarak görünür.",
    "visual_note": "Diverse wildlife ecosystem in a wide untouched valley.",
    "keywords": [
      "wildlife ecosystem",
      "untouched valley",
      "biodiversity"
    ]
  },
  {
    "scene_id": "scene-029",
    "title": "Karanlık Tünel",
    "narration": "İnsan bazen her şeyi yalnız madde ve sebeplerle açıklamaya çalıştığında karanlık bir tünele girer. Yol uzadıkça anlam daralır; hayatın sesi duyulur ama nereye vardığı anlaşılamaz.",
    "visual_note": "Long dark tunnel with a distant uncertain light, slow camera movement.",
    "keywords": [
      "dark tunnel",
      "distant light",
      "uncertainty"
    ]
  },
  {
    "scene_id": "scene-030",
    "title": "Kesilen Sesler",
    "narration": "İnsanlığın açtığı birçok düşünce yolu bir süre güçlü sesler çıkarır, sonra cevap veremediği soruların önünde susar. Ölüm, anlam ve sonsuzluk soruları yalnız maddi ilerlemeyle ortadan kalkmaz.",
    "visual_note": "Abandoned railway disappearing into fog, quiet melancholic atmosphere.",
    "keywords": [
      "abandoned railway",
      "fog",
      "unanswered questions"
    ]
  },
  {
    "scene_id": "scene-031",
    "title": "Rehberlik Eden Nur",
    "narration": "Vahyin ışığı, aklı susturmak için değil ona yön vermek için gelir. İnsan o rehberlikle sebepleri yerli yerine koyar, varlığın dağınık görünen parçalarını anlamlı bir bütün içinde okumaya başlar.",
    "visual_note": "Warm beam of light illuminating an old open book and a clear path.",
    "keywords": [
      "guiding light",
      "open book",
      "clear path"
    ]
  },
  {
    "scene_id": "scene-032",
    "title": "Ferah Âleme Çıkış",
    "narration": "Karanlık geçitten çıkınca dünya aynı dünya olduğu hâlde bakış değişir. Gökyüzü sahipsiz bir boşluk değil, yeryüzü başıboş bir tesadüf alanı değil; hayat rahmetle kuşatılmış bir emanet olarak görünür.",
    "visual_note": "Person emerging from a cave into a bright green valley.",
    "keywords": [
      "cave exit",
      "bright valley",
      "new perspective"
    ]
  },
  {
    "scene_id": "scene-033",
    "title": "Üç Yol",
    "narration": "İnsanın önünde yönünü kaybetme, hakikati bildiği hâlde ondan uzaklaşma ve nimete erişenlerin yolunu izleme ihtimalleri vardır. Doğru yol, yalnız bilgi değil; bilginin teslimiyet ve ahlakla birleşmesidir.",
    "visual_note": "Three roads across a wide landscape, central path lit by sunrise.",
    "keywords": [
      "three roads",
      "sunrise path",
      "guidance"
    ]
  },
  {
    "scene_id": "scene-034",
    "title": "En Selametli Yol",
    "narration": "Hakikate ulaştıran yolun değeri, karmaşıklığıyla değil emniyeti ve açıklığıyla ölçülür. Tevhit yolu kısa, ferah ve herkese açıktır; insanı sayısız sahte sahipten kurtarıp tek bir merhamet kapısına yöneltir.",
    "visual_note": "Wide peaceful road beneath open sky, soft golden morning light.",
    "keywords": [
      "peaceful road",
      "open sky",
      "golden morning"
    ]
  },
  {
    "scene_id": "scene-035",
    "title": "Ayna mı Perde mi",
    "narration": "Asıl mesele benliğe sahip olmak değil, onu hangi anlamda kullandığımızdır. Benlik ışığı geçirirse ayna, yalnız kendisini gösterirse kalın bir perde olur.",
    "visual_note": "Split visual of a clear mirror and a heavy curtain before sunlight.",
    "keywords": [
      "mirror curtain",
      "sunlight",
      "spiritual choice"
    ]
  },
  {
    "scene_id": "scene-036",
    "title": "Yönünü Seçen İnsan",
    "narration": "Benlik Rabbini tanımaya yöneldiğinde insanı tevazuya, şükre ve hürriyete taşır. Kendi üzerine kapandığında ise insanı kendi dar dünyasına hapseder; çünkü insan hangi yöne bakarsa iç dünyası da o yöne doğru büyür.",
    "visual_note": "Person turning from a shadowed wall toward a vast luminous horizon.",
    "keywords": [
      "luminous horizon",
      "turning point",
      "inner growth"
    ]
  }
],

  metadata: {
    source: 'derin-okuma',
    blog_post: '30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur',
    test_day: 'day-51',
    workflow: 'manual_scene_json_single_track_landscape_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
