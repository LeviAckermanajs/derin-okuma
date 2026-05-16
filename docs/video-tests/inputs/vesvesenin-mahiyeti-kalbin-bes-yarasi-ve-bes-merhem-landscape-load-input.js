// Derin Okuma - Vesvesenin Mahiyeti, Kalbin Beş Yarası ve Beş Merhem landscape video
// Filled for day-27.
// Paste this into the n8n Load Input Code node.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },
  job: {
    title: 'Vesvesenin Mahiyeti, Kalbin Beş Yarası ve Beş Merhem',
    description: 'Vesvesenin mahiyetini, kalpte açtığı yaraları ve onları iyileştiren ölçüleri anlatan sakin bir tefekkür videosu.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'vesvesenin-mahiyeti-kalbin-bes-yarasi-ve-bes-merhem-landscape-day-27'
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
      title: 'Kalbin İç Baskısı',
      narration: 'İnsan bazen dışarıdan sakin görünür; fakat kalbinin içinde bitmeyen bir baskı taşır. Bir düşünce gelir, sonra o düşüncenin anlamı üzerine başka bir korku doğar. Vesvese çoğu zaman böyle başlar: küçük bir uğrama, yanlış okununca büyük bir iç savaşa dönüşür.',
      visual_note: 'quiet person by a window at dusk, soft rain, contemplative mood',
      keywords: [
        'quiet window',
        'inner struggle',
        'soft rain'
      ]
    },
    {
      scene_id: 'scene-002',
      title: 'Büyüten Şey Dikkattir',
      narration: 'Vesvese kendiliğinden gelen her düşünceyle büyümez. Onu büyüten şey, insanın ona korkuyla eğilmesi ve sürekli incelemesidir. Önem verdikçe şişer; mahiyeti tanınınca gücünü kaybetmeye başlar.',
      visual_note: 'small shadow growing on a wall, dim cinematic light',
      keywords: [
        'shadow',
        'anxiety',
        'cinematic light'
      ]
    },
    {
      scene_id: 'scene-003',
      title: 'Düşünce Kimlik Değildir',
      narration: 'Aklına gelen her şey seni tarif etmez. Zihne uğrayan bir söz, kalbin imzasını taşımayabilir. İnsan için ilk rahatlama, gelen düşünce ile kendi iradesi arasındaki mesafeyi fark etmektir.',
      visual_note: 'busy city reflections on glass, person standing still, thoughtful',
      keywords: [
        'reflection',
        'identity',
        'city glass'
      ]
    },
    {
      scene_id: 'scene-004',
      title: 'Kalp Kabul Etmediğinde',
      narration: 'Bazı çirkin çağrışımlar insanı en çok ibadet anında yakalar. Kalp onları kabul etmez, hatta onlardan rahatsız olur; fakat insan yine de korkuya düşebilir. O rahatsızlık çoğu zaman kalbin temiz tarafının sesidir.',
      visual_note: 'person praying in a quiet room, soft morning light, peaceful interior',
      keywords: [
        'prayer',
        'morning light',
        'peaceful room'
      ]
    },
    {
      scene_id: 'scene-005',
      title: 'Tahayyül Hüküm Değildir',
      narration: 'Bir şeyi hayal etmek, ona hükmetmek değildir. Bir görüntünün zihinde belirmesi, insanın onu seçtiği anlamına gelmez. Hayal kapısından geçen şey, kalpte kabul edilmiş bir karar sayılmaz.',
      visual_note: 'mist passing through an open doorway, symbolic cinematic scene',
      keywords: [
        'mist',
        'open doorway',
        'symbolic'
      ]
    },
    {
      scene_id: 'scene-006',
      title: 'Panik Yarayı Derinleştirir',
      narration: 'Vesvesenin ilk hamlesi bazen düşüncenin kendisi değildir; insanı o düşünceden dolayı suçlu hissettirmesidir. Panik büyüdükçe insan kendi kalbine güvenemez hale gelir. Sükunet ise yarayı kapatmaya başlayan ilk merhemdir.',
      visual_note: 'calm hands resting on a table, warm low light, still frame',
      keywords: [
        'calm hands',
        'stillness',
        'warm light'
      ]
    },
    {
      scene_id: 'scene-007',
      title: 'Söz Kalbin Sözü Olmayabilir',
      narration: 'İnsanın içinden geçen uygunsuz bir ifade, onun gerçek sözü olmayabilir. Bazen zihin bir gürültü üretir, kalp ise o gürültüden incinir. İncinmek, sahiplenmekten farklıdır.',
      visual_note: 'noisy street fading into a quiet chapel-like interior, cinematic contrast',
      keywords: [
        'noise',
        'quiet interior',
        'contrast'
      ]
    },
    {
      scene_id: 'scene-008',
      title: 'Kirli Suret Manayı Kirletmez',
      narration: 'Mukaddes bir mana zihne geldiğinde, hayal bazen ona alakasız bir görüntü iliştirebilir. Temas ile bulaşma aynı şey değildir. Kirli bir suretin yanından geçen temiz bir anlam, özünü kaybetmez.',
      visual_note: 'clear stream flowing beside muddy ground, clean water close up',
      keywords: [
        'clear stream',
        'muddy ground',
        'purity'
      ]
    },
    {
      scene_id: 'scene-009',
      title: 'Hayal Alanı Karışıktır',
      narration: 'Hayal, kalp kadar seçici ve düzenli çalışmaz. Gündelik görüntüler, eski hatıralar, bedenin yorgunluğu ve ekranlardan kalan izler orada karışabilir. Bu karışıklık, kalbin yönünü tek başına göstermez.',
      visual_note: 'abstract overlapping memories, blurred lights, slow motion city screens',
      keywords: [
        'blurred lights',
        'memories',
        'digital screens'
      ]
    },
    {
      scene_id: 'scene-010',
      title: 'Görsel Kirlilik Çağı',
      narration: 'Modern insanın zihni çok fazla görüntüyle doluyor. En ciddi anda bile ilgisiz bir sahne, saçma bir kelime veya rahatsız edici bir hatıra belirebiliyor. Böyle anlarda kalbin bozulduğuna değil, zihnin yük taşıdığına bakmak gerekir.',
      visual_note: 'person scrolling phone at night then looking away, blue screen light',
      keywords: [
        'phone screen',
        'digital overload',
        'night'
      ]
    },
    {
      scene_id: 'scene-011',
      title: 'Dikkat Nereye Kilitlenirse',
      narration: 'Vesveseli insan çoğu zaman geçen şeye değil, geçip gitmesin diye tuttuğu şeye yenilir. Bir çağrışımı sürekli izlemek, onu zihinde daha belirgin hale getirir. Bırakılan şey azalır; büyütülen şey yerleşir.',
      visual_note: 'falling leaf carried by wind, hand almost reaching but stopping',
      keywords: [
        'falling leaf',
        'letting go',
        'wind'
      ]
    },
    {
      scene_id: 'scene-012',
      title: 'Namazda Dağılan Zihin',
      narration: 'Namazda insan huzura yönelir; fakat zihin bazen eski bir meseleye, yarım kalmış bir işe veya uzak bir hatıraya sıçrar. Bu sıçrama her zaman iradeli değildir. Fark edildiği anda sakin biçimde geri dönmek, suçlamaktan daha iyidir.',
      visual_note: 'quiet prayer rug, sunlight on floor, peaceful domestic interior',
      keywords: [
        'prayer rug',
        'sunlight',
        'calm interior'
      ]
    },
    {
      scene_id: 'scene-013',
      title: 'Çağrışım Zinciri',
      narration: 'Fikirler bazen birbirini görünmez bağlarla çağırır. Bir kelime başka bir hatırayı, o hatıra başka bir kaygıyı açar. Zihin zincir kurabilir; fakat zinciri fark eden insan yeniden merkeze dönebilir.',
      visual_note: 'chain links on a wooden table, shallow depth of field',
      keywords: [
        'chain links',
        'thoughts',
        'focus'
      ]
    },
    {
      scene_id: 'scene-014',
      title: 'Dönmek Yeterlidir',
      narration: 'Dağılmayı fark etmek, başarısızlık değildir. Asıl terbiye, fark edildiği anda paniğe düşmeden dönmektir. İnsan her dönüşte ibadetinin kapısını yeniden açar.',
      visual_note: 'person turning back toward a warm doorway, gentle light',
      keywords: [
        'returning',
        'warm doorway',
        'gentle light'
      ]
    },
    {
      scene_id: 'scene-015',
      title: 'Kendini Kınama Tuzağı',
      narration: 'Vesvese bazen insanı düşüncenin içeriğiyle değil, kendini kınama döngüsüyle yorar. Kişi namaza dönmek yerine kendi halini tartışmaya başlar. Böylece ibadetin huzuru, iç muhasebenin ağırlığı altında kalır.',
      visual_note: 'person sitting alone in a dim room, head lowered, soft shadows',
      keywords: [
        'self blame',
        'dim room',
        'inner weight'
      ]
    },
    {
      scene_id: 'scene-016',
      title: 'Mükemmeliyetçilik Vesvesesi',
      narration: 'İbadeti güzel yapmak değerlidir; fakat kusursuzluk takıntısı ibadeti taşınmaz hale getirebilir. İnsan daha iyisini ararken sürekli başa sarıyorsa, hassasiyet bir baskıya dönüşmüş demektir.',
      visual_note: 'person repeatedly washing hands at a sink, subdued cinematic mood',
      keywords: [
        'repetition',
        'sink',
        'anxiety'
      ]
    },
    {
      scene_id: 'scene-017',
      title: 'Takva Zannedilen Baskı',
      narration: 'Her sertlik takva değildir. Bazen insan kendini daha dindar sanırken aslında ibadetin kapısını daraltır. Din, kulun ruhunu çıkışsız bir koridora hapsetmek için gelmemiştir.',
      visual_note: 'narrow corridor opening into wide daylight, symbolic transition',
      keywords: [
        'narrow corridor',
        'daylight',
        'relief'
      ]
    },
    {
      scene_id: 'scene-018',
      title: 'Sahihlik ve Kabul',
      narration: 'Bir amel zahiren ölçüsüne uygun yapıldıysa, sürekli sahih olup olmadığını kurcalamak huzuru bozar. Kabul meselesinde ise insan tevazu ve dua ile Rabbine yönelir. Böylece ne vesvese ibadeti kemirir ne de gurur kalbi kaplar.',
      visual_note: 'open hands in prayer, soft golden light, calm background',
      keywords: [
        'open hands',
        'prayer',
        'humility'
      ]
    },
    {
      scene_id: 'scene-019',
      title: 'Tekrar Döngüsü',
      narration: 'Abdesti tekrar almak, niyeti yeniden kurmak, aynı kelimeyi defalarca okumak bazen huzuru artırmaz. Kişi bir türlü tamam diyemiyorsa, aradığı şey ölçü değil kesin rahatlama hissi olabilir. Vesvese ise o hissi sürekli erteletir.',
      visual_note: 'looping circular stairs, person pausing, moody architectural shot',
      keywords: [
        'circular stairs',
        'loop',
        'uncertainty'
      ]
    },
    {
      scene_id: 'scene-020',
      title: 'Kolaylık Kapısı',
      narration: 'Kulluk, imkansız bir sınav gibi yaşanmak zorunda değildir. İlahi ölçüler insanı sorumluluğa çağırırken aynı zamanda kolaylık kapısını açık tutar. Vesvesenin daralttığı yerde, rahmet nefes aldırır.',
      visual_note: 'wide open gate to a peaceful garden, morning sunlight',
      keywords: [
        'open gate',
        'garden',
        'mercy'
      ]
    },
    {
      scene_id: 'scene-021',
      title: 'Hayrı Bıraktıran Korku',
      narration: 'İnsan bazen riya karışır korkusuyla hayrı terk eder. Oysa kusur ihtimali, iyiliği tamamen bırakmanın bahanesi olmamalıdır. Kalp niyetini tazeler, eksikliği için istiğfar eder ve yürümeye devam eder.',
      visual_note: 'person placing food donation box quietly, natural documentary style',
      keywords: [
        'charity',
        'quiet action',
        'sincerity'
      ]
    },
    {
      scene_id: 'scene-022',
      title: 'İman Alanındaki Kuruntular',
      narration: 'Vesvese en ağır darbeyi bazen iman meselelerinde vurur. Bir ihtimal zihne uğrar, insan onu gerçek bir şüphe sanır. Halbuki düşünmek, duymak veya zihinden geçirmek, tasdik etmekle aynı değildir.',
      visual_note: 'person reading alone at a desk, night lamp, thoughtful atmosphere',
      keywords: [
        'reading',
        'night lamp',
        'faith questions'
      ]
    },
    {
      scene_id: 'scene-023',
      title: 'Tasavvur ve Tasdik',
      narration: 'Bir iddiayı anlamaya çalışmak, ona inanmak değildir. Zihnin bir ihtimali tasavvur etmesi, kalbin onu onayladığı anlamına gelmez. İman, rastgele gelen ihtimallerle değil, tasdikle ilgilidir.',
      visual_note: 'two paths in a quiet forest, person observing without moving',
      keywords: [
        'two paths',
        'choice',
        'reflection'
      ]
    },
    {
      scene_id: 'scene-024',
      title: 'Delilsiz İhtimal',
      narration: 'Vesvese çoğu zaman delille gelmez; sadece ya şöyleyse diye kapı aralar. Bu kapıdan girilirse ihtimallerin sonu gelmez. Delilden doğmayan ihtimal, sağlam bilgiyi yıkacak ağırlığa sahip değildir.',
      visual_note: 'thin fog around a solid stone bridge, strong stable structure',
      keywords: [
        'stone bridge',
        'fog',
        'certainty'
      ]
    },
    {
      scene_id: 'scene-025',
      title: 'Kesin Bilgi ve Boş İhtimal',
      narration: 'Bir şeyin zihinde mümkün görünmesi, onun gerçekten sarsıcı bir ihtimal olduğu anlamına gelmez. İnsan bazen teorik olasılık ile ciddi delili birbirine karıştırır. Yakîn, her boş ihtimalle yerinden oynamaz.',
      visual_note: 'sun rising over calm sea, stable horizon, cinematic wide shot',
      keywords: [
        'sunrise',
        'horizon',
        'certainty'
      ]
    },
    {
      scene_id: 'scene-026',
      title: 'Dijital Şüphe Gürültüsü',
      narration: 'Kısa videolar, alaycı cümleler ve yüzeysel tartışmalar zihinde iz bırakabilir. Bir iddiayı duymak, onu kabul etmek değildir. İnsanın görevi, gürültüyü hakikat zannetmemek ve ölçülü biçimde araştırmaktır.',
      visual_note: 'fast moving social media screens fading into a quiet library',
      keywords: [
        'social media',
        'library',
        'digital noise'
      ]
    },
    {
      scene_id: 'scene-027',
      title: 'Korku Yerine İlim',
      narration: 'Vesvesenin karanlığı çoğu zaman bilgisizlikten beslenir. İnsan ne yaşadığını adlandırınca korku azalır. Bilgi, vesveseyi büyüten sisin içine açılan bir pencere gibidir.',
      visual_note: 'window opening in a dark room, sunlight entering, dust particles',
      keywords: [
        'window light',
        'knowledge',
        'clarity'
      ]
    },
    {
      scene_id: 'scene-028',
      title: 'Lakaytlık Değil Sükunet',
      narration: 'Vesveseye önem vermemek, dini hafife almak değildir. Tam tersine, hileyi tanıyıp doğru yere dönmektir. Ciddiyet, her kuruntunun peşinden gitmek değil, hakikatin merkezini kaybetmemektir.',
      visual_note: 'steady compass on a wooden table, calm travel mood',
      keywords: [
        'compass',
        'direction',
        'steadiness'
      ]
    },
    {
      scene_id: 'scene-029',
      title: 'Dikkat ve Takıntı',
      narration: 'Dikkat güzeldir; takıntı yorar. Titizlik ibadeti güzelleştirir; fakat kontrol baskısı ruhu boğar. İnce çizgi, insanı Allah’a yaklaştıran hassasiyet ile kendine hapseden korku arasında belirir.',
      visual_note: 'delicate balance scale, soft neutral background, close up',
      keywords: [
        'balance scale',
        'attention',
        'obsession'
      ]
    },
    {
      scene_id: 'scene-030',
      title: 'Teyakkuzun Ölçüsü',
      narration: 'Vesvese insanı bütünüyle ele geçirmediğinde, bazen uyanıklığa vesile olabilir. Gafleti kırar, araştırmaya çağırır, kalbi daha dikkatli hale getirir. Fakat korku ve tekrar döngüsüne dönüşürse, artık uyarı değil yaradır.',
      visual_note: 'early dawn watchtower, calm landscape, gentle alertness',
      keywords: [
        'dawn',
        'watchtower',
        'awareness'
      ]
    },
    {
      scene_id: 'scene-031',
      title: 'Kalbe Merhametle Bakmak',
      narration: 'Vesvese yaşayan insanın ihtiyacı çoğu zaman sert itham değil, doğru teşhistir. Yaralı kalp suçlandıkça kapanır; anlaşıldıkça toparlanır. Merhametli bilgi, kalbe güvenini geri verir.',
      visual_note: 'gentle hand over heart, warm natural light, close up',
      keywords: [
        'heart',
        'compassion',
        'healing'
      ]
    },
    {
      scene_id: 'scene-032',
      title: 'Şeytanın Hilesini Tanımak',
      narration: 'Hile tanınınca eski gücünü kaybeder. Vesvese, insanın imanından konuşuyormuş gibi görünür; fakat çoğu zaman sadece korkuyu kullanır. Onu kendi sesin sanmadığında, mesafe açılır.',
      visual_note: 'person stepping away from a dark mirror, symbolic cinematic shot',
      keywords: [
        'mirror',
        'distance',
        'deception'
      ]
    },
    {
      scene_id: 'scene-033',
      title: 'Allah’a Sığınmak',
      narration: 'Vesveseyle mücadele yalnız teknik bir zihin yönetimi değildir. Kalp, Rabbine sığındıkça güvende olduğunu hatırlar. İnsan hem mahiyeti bilir hem de yardımın asıl kaynağına yönelir.',
      visual_note: 'quiet mosque silhouette at dawn, soft sky, peaceful atmosphere',
      keywords: [
        'mosque dawn',
        'refuge',
        'peace'
      ]
    },
    {
      scene_id: 'scene-034',
      title: 'Geri Dönmenin Cesareti',
      narration: 'Vesveseden kurtuluş bazen büyük bir zafer gibi değil, küçük bir dönüş gibi başlar. İnsan düşünceye takılmadan namazına, duasına, işine ve kulluğuna döner. Her dönüş, vesveseye verilmiş sakin bir cevaptır.',
      visual_note: 'person walking back onto a sunlit path, calm nature scene',
      keywords: [
        'sunlit path',
        'return',
        'courage'
      ]
    },
    {
      scene_id: 'scene-035',
      title: 'Beş Merhemin Özeti',
      narration: 'Çirkin hayal kalbin hükmü değildir. Kirli suret temiz manayı kirletmez. Dağılan zihin paniğe değil dönüşe çağırır. Mükemmeliyetçilik ibadeti boğmamalı; delilsiz ihtimal yakîni sarsmamalıdır.',
      visual_note: 'five candles lit on a simple table, warm contemplative mood',
      keywords: [
        'five candles',
        'healing',
        'contemplation'
      ]
    },
    {
      scene_id: 'scene-036',
      title: 'Son Sükunet',
      narration: 'Aklına gelen her şey sen değilsin. Kalbine düşmeyen, iradene dönüşmeyen, delile dayanmayan her kuruntu seni mahkum edemez. Vesveseyi tanı, ona teslim olma ve kalbini rahmetin genişliğine bırak.',
      visual_note: 'wide calm landscape after rain, sunlight through clouds, hopeful mood',
      keywords: [
        'after rain',
        'sunlight',
        'hope'
      ]
    }
  ],
  metadata: {
    source: 'derin-okuma',
    blog_post: 'vesvesenin-mahiyeti-kalbin-bes-yarasi-ve-bes-merhem',
    test_day: 'day-27',
    workflow: 'manual_scene_json_single_track_landscape_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
