// Derin Okuma — 23. Söz - 2. Mebhas - 1. Nükte landscape video
// day-19 | 35 sahne

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },


  job: {
    title: '23. Söz - 2. Mebhas - 1. Nükte',
    description: 'İnsan sınırsız arzularla yaratılmıştır; bu yüzden yalnızca sonsuz olana yönelirse yükselir, sınırlı şeylere bağlanırsa parçalanır.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-1-nukte-landscape-day-19'
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
      title: 'Açılış: En güzel biçim',
      narration: 'İnsan, en güzel biçim üzere yaratılmıştır. Bedeni küçücük, ömrü kısa, gücü sınırlı görünse de içindeki âlem bambaşkadır. İnsanın büyüklüğü kaslarında değil, kalbinin genişliğinde saklıdır.',
      visual_note: 'Sunrise over misty mountains, lone human silhouette on horizon, slow cinematic movement.',
      keywords: ['sunrise', 'misty mountains', 'human silhouette', 'cinematic']
    },
    {
      scene_id: 'scene-002',
      title: 'İstidadın genişliği',
      narration: 'İnsana çok kapsamlı bir istidat verilmiştir. Bu yüzden insan sabit bir varlık değildir. Ne melek gibi yalnızca yukarıya ayarlı, ne de hayvan gibi belirli sınırlar içinde hapsolmuş. İki yön de her zaman açık.',
      visual_note: 'A mountain path splitting into two directions, one ascending into sunlight, one descending into shadow.',
      keywords: ['diverging path', 'mountain', 'light and shadow', 'choice']
    },
    {
      scene_id: 'scene-003',
      title: 'Zerreden arşa',
      narration: 'Zerreden tâ güneşe, yerden tâ arşa kadar uzanan büyük bir kâinat var. Ve insan, bu kâinatın bütün mertebelerinin muhatabı gibi yaratılmıştır. Küçük bir odanın değil, sonsuz bir âlemin vatandaşıdır.',
      visual_note: 'Time-lapse of starry night sky, universe expanding, tiny human figure standing under stars.',
      keywords: ['starry sky', 'universe', 'tiny human figure', 'cosmos']
    },
    {
      scene_id: 'scene-004',
      title: 'Kâinatın ekser envâına muhtaç',
      narration: 'İnsanın ihtiyaçları hiç de küçük değildir. Güneşe muhtaçtır, suya muhtaçtır, toprağa, mevsime, havaya muhtaçtır. Hayvanların çoğunda ihtiyaç çevresi daha dardır; insan ise hem maddî hem manevî olarak çok daha geniş bir muhtaçlık alanına sahiptir.',
      visual_note: 'Sunlight streaming through forest canopy, clean river flowing, fertile soil and growing plants.',
      keywords: ['sunlight', 'forest', 'flowing water', 'growth']
    },
    {
      scene_id: 'scene-005',
      title: 'Sevgiye ve mânâya da muhtaç',
      narration: 'İnsan sevgiye muhtaçtır, güvene muhtaçtır, mânâya muhtaçtır, yarına dair bir ümide muhtaçtır. Bu ihtiyaçlar bedeni aşan ihtiyaçlardır. Yalnızca nefes almak ve beslenmek yetmez; kalbin de doyması lazımdır.',
      visual_note: 'Two people in a warm embrace, soft light background, emotional and gentle atmosphere.',
      keywords: ['human connection', 'embrace', 'warmth', 'belonging']
    },
    {
      scene_id: 'scene-006',
      title: 'Alâkadar: Bağ kuran varlık',
      narration: 'İnsan yalnızca ihtiyaç duyan bir varlık değildir; aynı zamanda ilgilenir, merak eder, bağ kurar, dert edinir. Sadece kendi odasını değil bütün dünyayı merak eder. Sadece bugünü değil geçmişi ve geleceği düşünür.',
      visual_note: 'Person looking out a large window at a vast city skyline at dusk, contemplative and thoughtful.',
      keywords: ['city view', 'window', 'contemplation', 'wide perspective']
    },
    {
      scene_id: 'scene-007',
      title: 'Sadece ekmek değil',
      narration: 'İnsan yalnız ekmek istemez. Adalet ister, merhamet ister, güzellik ister, ebediyet ister. Bedeni küçüktür, fakat kalbi ve hayali çok büyüktür. İşte bu, insanın gerçek büyüklüğünü gösteren en derin sırdır.',
      visual_note: 'Simple bread on a wooden table next to a vast mountain view through an open window.',
      keywords: ['simple meal', 'vast landscape', 'contrast', 'depth']
    },
    {
      scene_id: 'scene-008',
      title: 'İhtiyacı âlemin her tarafına dağılmış',
      narration: 'İnsanın ihtiyaçları lokal değildir. Bir lokma ekmek yer, ama o lokma güneşe bağlıdır, yağmura bağlıdır, toprağa bağlıdır, mevsimlere bağlıdır, binlerce sebebe bağlıdır. Tek bir ihtiyaç bile bütün kâinatı işin içine katar.',
      visual_note: 'Aerial view of a golden wheat field, cutting to rain clouds, then sunlight, then a flowing river.',
      keywords: ['wheat field', 'rain clouds', 'sunlight', 'interconnected nature']
    },
    {
      scene_id: 'scene-009',
      title: 'Bir nefes bile kâinatla bağlı',
      narration: 'Bir nefes alır; bütün atmosfer sistemi işin içine girer. Bir duygusal huzur ister; bütün hayat düzeni, ilişkiler, güven duygusu devreye girer. Demek ki insanın en küçük ihtiyacı bile görünenden çok daha geniş bir ağa bağlıdır.',
      visual_note: 'Close-up of person breathing deeply, then slowly pulling back to reveal vast blue open sky.',
      keywords: ['breathing', 'blue sky', 'connection', 'vast atmosphere']
    },
    {
      scene_id: 'scene-010',
      title: 'Arzuları ebede kadar uzanmış',
      narration: 'İnsanın arzuları yalnızca biraz rahatlık, biraz zevk, biraz başarı değildir. Aslında insanın iç arzusu sınırsıza doğru açılır: bitmeyen sevgi, eksilmeyen güven, bozulmayan güzellik, ayrılıksız beraberlik, ölümsüz hayat.',
      visual_note: 'Person standing at the edge of an ocean, gazing at the infinite horizon, calm and yearning.',
      keywords: ['ocean horizon', 'infinite', 'yearning', 'vastness']
    },
    {
      scene_id: 'scene-011',
      title: 'Kalp neden tatmin olmaz?',
      narration: 'İnsanın kalbi geçici şeylerle tam doymuyor. Çünkü o kalbin talebi fıtraten ebedîdir. Bu yüzden birçok şeye sahip olup yine tatminsiz kalmak anormal değildir; tam tersine, insanın en derin sesini duyurmaktır.',
      visual_note: 'A person surrounded by beautiful objects yet with a searching, unfulfilled gaze toward the horizon.',
      keywords: ['unfulfilled longing', 'beautiful objects', 'searching gaze', 'deep emptiness']
    },
    {
      scene_id: 'scene-012',
      title: 'Tatminsizlik bir kusur değil',
      narration: 'İnsanın dünyaya sığmaması her zaman bir bozukluk göstergesi değildir. Bazen bu, kalbin ebediyet için yaratılmış olduğunun işaretidir. Doluyor ama dolmuyor; çünkü sonlu şeyler sonsuz talebi taşıyamaz.',
      visual_note: 'Water poured into a vessel that never seems full, metaphorical close-up in soft natural light.',
      keywords: ['overflowing vessel', 'metaphor', 'never full', 'deep longing']
    },
    {
      scene_id: 'scene-013',
      title: 'Çiçekten bahara, bahara Cennete',
      narration: 'İnsan bir çiçeği sevdiği gibi, koca bir baharı da ister. Bir bahçeyi arzu ettiği gibi, ebedî Cenneti de arzu eder. Bu iki arzu birbirinden ayrı değildir; küçük istek ile büyük istek aynı kökten çıkar.',
      visual_note: 'Time-lapse blooming flower leading to a full spring garden, then vast green paradise landscape.',
      keywords: ['blooming flower', 'spring garden', 'paradise landscape', 'time-lapse']
    },
    {
      scene_id: 'scene-014',
      title: 'Güzelliğe yöneliş',
      narration: 'Bir çiçeği sevmen, güzelliğe yöneliştir. Bir baharı istemen, çokluk içinde güzelliğe yöneliştir. Cenneti istemen ise kusursuz ve kesintisiz güzelliğe yöneliştir. Aynı kökten gelen, giderek derinleşen bir yönelim.',
      visual_note: 'Cherry blossoms falling gently in slow motion, pulling back to reveal mountains in full spring bloom.',
      keywords: ['cherry blossoms', 'spring mountains', 'beauty', 'gentle slow motion']
    },
    {
      scene_id: 'scene-015',
      title: 'Sevginin en yüksek istikameti',
      narration: 'Bir dostu özlemek, sevginin işaretidir. Ama sevginin en yüksek istikameti, güzelliğin ta kendisine yönelmektir. Dünyevî meyillerin kökü, doğru okunursa ilahî istikamete açılır.',
      visual_note: 'Two silhouettes meeting at golden hour, then scene opening to vast glowing sky above.',
      keywords: ['reunion silhouettes', 'golden hour', 'longing', 'transcendence']
    },
    {
      scene_id: 'scene-016',
      title: 'Berzahtaki ahbaplar',
      narration: 'İnsan sadece şu anda yanında olanlarla yaşamıyor. Geçmişte sevdiği, kaybettiği, özlediği kimselerle de yaşıyor. Sevdiği insanların çoğu zamanla göçüp gitmiş; insan kendi ömrü içinde bile hep kaybederek yaşıyor.',
      visual_note: 'Old photographs held in aged hands, soft warm light, feelings of memory and longing.',
      keywords: ['old photographs', 'memories', 'longing', 'loss']
    },
    {
      scene_id: 'scene-017',
      title: 'Kalp bu dünyaya sığmıyor',
      narration: 'İnsanın en büyük yarası ayrılıktır. Ve bu yara, kalbin bu dünyaya sığmadığının en açık belgesidir. Eğer ölüm son olsaydı, insanın en derin arzuları cevapsız kalırdı. Bu ise insanın yaratılışıyla bağdaşmazdı.',
      visual_note: 'A lone person sitting quietly in soft evening light, atmosphere of solitude and depth.',
      keywords: ['solitude', 'evening light', 'mourning', 'quiet depth']
    },
    {
      scene_id: 'scene-018',
      title: 'Ahiret fıtratın talebi',
      narration: 'Ahiret yalnızca dini bir inanç meselesi değildir. İnsanın fıtratındaki en derin taleplerin cevabıdır. Çünkü insan sonsuz ister; ve bu talebi karşılayacak bir mertebenin olması gerekir.',
      visual_note: 'A bridge disappearing into morning mist, soft hopeful light visible at the far end.',
      keywords: ['bridge in mist', 'hopeful light', 'beyond', 'faith']
    },
    {
      scene_id: 'scene-019',
      title: 'Sonsuz bir merciin zorunluluğu',
      narration: 'İnsanın bu kadar geniş ihtiyaçlarını karşılayacak, bu kadar yaygın alâkasını kuşatacak, geçmişi ve geleceği elinde tutacak bir mercii gerekir. Bu merciin sonlu olması mümkün değildir.',
      visual_note: 'Vast milky way starscape, earth seen from space, cosmic perspective, awe-inspiring silence.',
      keywords: ['milky way', 'earth from space', 'cosmos', 'infinite']
    },
    {
      scene_id: 'scene-020',
      title: 'Her şeyin hazinesi',
      narration: 'Her şeyin dizgini elinde olan, her şeyin hazinesi yanında bulunan, her yerde hazır olan, mekândan münezzeh bir Zât gerekir. İnsanın kalbinin tam dayanacağı ve ibadetinin tam yöneleceği mercii ancak böylesi bir kudret sahibi olabilir.',
      visual_note: 'Sunlight breaking dramatically through dark clouds over a vast ocean, majestic and awe-inspiring.',
      keywords: ['sunlight breaking clouds', 'ocean', 'majesty', 'awe']
    },
    {
      scene_id: 'scene-021',
      title: 'Sınırlı sonsuzu veremez',
      narration: 'İnsan sonsuz ister. Sınırlı varlıklar ise sonsuzu veremez. O hâlde insanın kalbinin tam dayanacağı ve ibadetinin tam yöneleceği mercii, ancak sonsuz kudret ve sonsuz ilim sahibi olabilir. Başka hiçbir şey bu talebi karşılayamaz.',
      visual_note: 'A small candle against vast darkness, then sunrise flooding the entire scene with warm golden light.',
      keywords: ['candle in darkness', 'sunrise', 'infinite light', 'contrast']
    },
    {
      scene_id: 'scene-022',
      title: 'Kulluk paradoksu',
      narration: 'Nasıl olur da kul olmak, insanı yükseltir? Bu ilk bakışta paradoks gibi görünür. Ama gerçekte insan zaten mutlaka bir şeye bağlanır. Tam bağımsız bir insan yoktur; soru yalnızca neye bağlandığıdır.',
      visual_note: 'Person standing at a crossroads, one path ascending into golden light, one fading into grey fog.',
      keywords: ['crossroads', 'ascending path', 'golden light', 'choice']
    },
    {
      scene_id: 'scene-023',
      title: 'Ya Allah\'a ya başka şeylere',
      narration: 'İnsan ya Allah\'a abd olur, ya nefsine, ya insanlara, ya korkularına, ya hırslarına, ya dünyaya. Allah\'a kulluk insanı küçültmez; çünkü insanı kendisi gibi âciz şeylere kul olmaktan kurtarır.',
      visual_note: 'A person breaking free from tangled ropes, moving toward open sky and warm sunlight.',
      keywords: ['breaking free', 'open sky', 'liberation', 'sunlight']
    },
    {
      scene_id: 'scene-024',
      title: 'Kulluk özgürleşmedir',
      narration: 'Allah\'a kul olursan eşyaya kul olmazsın. Hakka bağlanırsan halkın esiri olmazsın. Sonsuza yönelirsen faninin elinde sürünmezsin. Bu yüzden kulluk, zillet değil; gerçek özgürlüktür.',
      visual_note: 'A bird soaring freely over mountain peaks, wind beneath its wings, vast open sky.',
      keywords: ['soaring bird', 'freedom', 'mountain peaks', 'vast sky']
    },
    {
      scene_id: 'scene-025',
      title: 'Boşluğu başka şeyler doldurur',
      narration: 'İnsan Allah\'a kulluğu bırakınca boşlukta kalmıyor. Bu boşluğu başka şeyler dolduruyor: para, makam, beğenilme ihtiyacı, korku, öfke, benlik. Ve o başka şeyler çoğu zaman insandan daha âciz, daha geçici varlıklardır.',
      visual_note: 'An empty room with shadows slowly creeping in from the corners, cold and hollow atmosphere.',
      keywords: ['empty room', 'creeping shadows', 'cold', 'hollow atmosphere']
    },
    {
      scene_id: 'scene-026',
      title: 'İnsanın iki ciheti',
      narration: 'İnsanda iki cihet vardır. Birincisi: inşa etmek, ortaya koymak, hayır üretmek. İkincisi: bozmak, yıkmak, inkâr etmek, yokluğa sürüklemek. Bu iki cihet, insanın en derin ikiliğini oluşturur.',
      visual_note: 'Side-by-side contrast: careful construction of a stone wall versus crumbling ruins.',
      keywords: ['construction', 'ruins', 'contrast', 'duality']
    },
    {
      scene_id: 'scene-027',
      title: 'Hayır ve icadda insanın sınırlılığı',
      narration: 'Hayır ve iyilik üretirken insanın gücü sınırlıdır, eli kısa, bilgisi dar, tesiri cüz\'îdir. Bir arı bal yapar; insan o sistemi kuramaz. Bir serçe yuvasını kurar; insan onun fıtrî sanatını tam olarak aynen yapamaz.',
      visual_note: 'A bee collecting nectar from flowers, then an intricate honeycomb structure in close-up, nature\'s precision.',
      keywords: ['bee', 'honeycomb', 'intricate nature', 'precision']
    },
    {
      scene_id: 'scene-028',
      title: 'Şer tarafında tehlikeli genişlik',
      narration: 'Ama şer ve tahrip tarafında insan çok tehlikeli bir genişliğe sahiptir. Yıkmak için çok büyük güç gerekmez. Küçücük bir şey, devasa bir tahribata yol açabilir.',
      visual_note: 'A single match being struck in slow motion, dramatic close-up, flame beginning to spread.',
      keywords: ['match flame', 'slow motion', 'fire beginning', 'danger']
    },
    {
      scene_id: 'scene-029',
      title: 'Bir kibrit',
      narration: 'Bir kibrit ormanı yakabilir. Bir söz bir aileyi dağıtabilir. Bir fikir bir toplumu bozabilir. Bir inkâr, kâinatın bütün mânâsını insan nezdinde karartabilir. Tahrip etmek, yapmaktan çok daha hızlıdır.',
      visual_note: 'Forest fire burning in the background, a single glowing spark in foreground, dramatic slow-motion.',
      keywords: ['forest fire', 'single spark', 'destruction', 'small causes big effects']
    },
    {
      scene_id: 'scene-030',
      title: 'Küfür küçük bir inkâr değil',
      narration: 'Küfür yalnızca bireysel bir kanaat değildir. Bütün mevcudat anlam taşır, güzelliği yansıtır, bir gerçeği işaret eder. Küfür ise bunu reddeder ve varlığı mânâsızlaştırır, kıymetsizleştirir, tesadüfe hapseder.',
      visual_note: 'A stained glass window slowly losing colour, light fading, beauty disappearing into grey.',
      keywords: ['stained glass', 'fading colour', 'loss of meaning', 'grey']
    },
    {
      scene_id: 'scene-031',
      title: 'İman varlığa mânâ verir',
      narration: 'İman, varlığa mânâ verir. Her şeyin bir anlamı, bir değeri, bir yönü olduğunu gösterir. Küfür ise varlığı bu mânâdan soyar. Gökyüzü aynı gökyüzüdür; ama onu okuyan bakış bambaşkadır.',
      visual_note: 'The same dawn landscape shown twice: once glowing with warm golden meaning, once cold and grey.',
      keywords: ['dawn landscape', 'meaning vs emptiness', 'contrast', 'perspective']
    },
    {
      scene_id: 'scene-032',
      title: 'Haneyi bir günde harap eder',
      narration: 'Kötülük hızlıdır, iyilik emek ister. İnsan bir anda kırar, bir anda bozar, bir anda günaha girer. Ama karakter inşası zaman ister, tevbe ve arınma zaman ister. Bir evi bir günde harap edebilirsin; yüz günde yapamazsın.',
      visual_note: 'Old house in ruins beside careful construction being built stone by stone, time and patience.',
      keywords: ['ruins', 'stone construction', 'patience', 'rebuilding']
    },
    {
      scene_id: 'scene-033',
      title: 'Enaniyeti bırakmak',
      narration: 'Ama bu karanlığın ardında büyük bir ümit kapısı açılıyor. İnsanın şer kabiliyeti büyük olabilir; fakat bu kaderi değildir. Eğer insan enaniyeti bırakırsa, hayrı Allah\'tan isterse, istiğfar ederse, nefse güvenmeyi terk ederse...',
      visual_note: 'A person slowly setting down a heavy stone burden, straightening up, warm light flooding from above.',
      keywords: ['burden released', 'standing upright', 'light from above', 'relief']
    },
    {
      scene_id: 'scene-034',
      title: 'Kötülükler iyiliklere dönüşür',
      narration: 'O zaman şer istidadının yönü değişebilir. Öfke zulüm yerine hakkı savunmaya, arzu sefahatten ibadete, hırs dünyaya değil hakikate dönebilir. Kötülükler silinmekle kalmaz; iyiliklere çevrilir. Bu, tevbenin en büyük muştusu.',
      visual_note: 'Dark storm clouds dramatically transforming into a glowing golden sunset, breathtaking colour shift.',
      keywords: ['storm to sunset', 'transformation', 'golden light', 'hope']
    },
    {
      scene_id: 'scene-035',
      title: 'Kapanış: Hangi yöne döndüğün',
      narration: 'İnsanın değeri şu anda ne olduğuyla değil, hangi yöne döndüğüyle ölçülür. Kalbin sonsuz arzuları, doğru merkeze yönelirse yükseltir; yanlış yere yıkılırsa parçalar. Sonsuz arzuları sınırlı şeylere yüklememek, sonsuz olana yönelmek; işte budur en doğru yol.',
      visual_note: 'Person turning toward rising sun on a mountain peak, arms open wide, peaceful and free.',
      keywords: ['mountain peak', 'sunrise', 'turning toward light', 'peace and freedom']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-1-nukte',
    test_day: 'day-19',
    workflow: 'manual_scene_json_single_track_landscape_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
