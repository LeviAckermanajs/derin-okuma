// Derin Okuma — 23. Söz 1. Mebhas 4. Nokta landscape video
// Output: landscape, single ElevenLabs narration track
// Paste this into the n8n "Load Input" Code node.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  job: {
    title: '23. Söz - 1. Mebhas - 4. Nokta',
    description: 'Derin Okuma blog yazısından üretilen landscape video narration inputu.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-1-mebhas-4-nokta-landscape-day-11'
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
      "narration": "İnsan nedir? İnsan çoğu zaman kendini biyolojiyle, toplumla ya da düşünce sistemleriyle açıklamaya çalışır. Ama insanlık, sadece biyolojik bir olgu değil, varoluşsal bir anlam taşır. Ve bu anlam, imanla başlar.",
      "visual_note": "solitary figure standing at edge of vast open plain, golden hour light, wide cinematic shot",
      "keywords": ["solitary figure", "open plain", "golden hour", "cinematic"]
    },
    {
      "scene_id": "scene-002",
      "narration": "Biyolojik olarak insan doğmak yetmez. Hakiki insanlık başka bir boyutu gerektirir: düşünmek, anlamak, sorumlu olmak ve nihayetinde iman etmek. İman, insana hem kimliğini hem de yönünü verir.",
      "visual_note": "close up of human face in contemplation, soft focused background, gentle morning light",
      "keywords": ["contemplative face", "morning light", "soft focus", "introspective"]
    },
    {
      "scene_id": "scene-003",
      "narration": "İman sadece insanı tamamlamaz; yükseltir. İmanlı bir insan dışarıdan zayıf görünebilir. Maddi imkânları az olabilir, makamı olmayabilir. Ama iç dünyasında merkezlidir; sahipsiz değildir, anlamsız değildir.",
      "visual_note": "person standing calmly in storm, unshaken, dramatic contrast between chaos and stillness",
      "keywords": ["calm in storm", "stillness", "dramatic contrast", "inner peace"]
    },
    {
      "scene_id": "scene-004",
      "narration": "Bu sultanlık taht ve kılıçla değil, anlam ve bağlılıkla kazanılır. Kâinatı başıboş görmemek, hadiseleri tesadüf okumamak, aczini zillet değil kapı yapmak — bunlar imanlı insanın iç dünyasıdır. Bu yüzden insan manevî anlamda sultan olabilir.",
      "visual_note": "light streaming through ancient stone archway, leading to open sky, symbolic passage",
      "keywords": ["stone archway", "streaming light", "open sky", "symbolic passage"]
    },
    {
      "scene_id": "scene-005",
      "narration": "Öte yandan iman olmadığında insanda ne kalır? Anlam yavaş yavaş boşalır. Arzular yönlendirici olur. Korku merkezli bir yaşam başlar. Aczin kaynağı bir türlü bulunamaz; çünkü doğru adrese gidilmez.",
      "visual_note": "empty city street at night, lone figure walking, scattered artificial lights, cold tones",
      "keywords": ["empty street", "night walk", "cold tones", "urban solitude"]
    },
    {
      "scene_id": "scene-006",
      "narration": "\"Âciz canavar\" ifadesi hakaret değil, bir teşhistir. Hem muhtaç hem gururlu, hem korkak hem saldırgan olabiliyor insan. Bu çelişki, anlamsızlıktan besleniyor. İnsan anlam bulamadığında hırçınlaşıyor; içindeki boşluğu doldurmanın yolunu bulamıyor.",
      "visual_note": "turbulent dark water surface with occasional reflections of light, slow movement",
      "keywords": ["turbulent water", "dark surface", "light reflections", "tension"]
    },
    {
      "scene_id": "scene-007",
      "narration": "Hayvan ile insan arasındaki fark çarpıcıdır. Hayvan kısa sürede adapte olur. Yaşamını sürdürmek için gereken her şeyi neredeyse hazır olarak içinde taşır. Bir at birkaç saat içinde yürümeye başlar; birçok hayvan doğar doğmaz beslenir.",
      "visual_note": "newborn foal taking first steps in sunlit field, natural and instinctive movement",
      "keywords": ["newborn foal", "first steps", "sunlit field", "instinct"]
    },
    {
      "scene_id": "scene-008",
      "narration": "Hayvanın bu hazır yapısı, onun göreviyle orantılıdır. Arının bal yapması, kuşun yuva kurması, ineğin süt vermesi — bunlar bilinçli tercih değil, yaratılıştan gelen kulluktur. Hayvan ne öğrenerek yükselmek ne de bilinçli dua etmekle yükümlüdür.",
      "visual_note": "bees working on honeycomb, macro close up, golden light, purposeful activity",
      "keywords": ["bees honeycomb", "macro", "golden light", "purposeful"]
    },
    {
      "scene_id": "scene-009",
      "narration": "İnsan ise tam tersi bir yapıyla dünyaya gelir. Her şeyi öğrenmesi gerekir. Tek başına yaşayamaz. Uzun yıllar boyunca yardıma muhtaçtır. Hayvanla kıyaslandığında ilk bakışta dezavantajlı görünür.",
      "visual_note": "newborn baby hand grasping adult finger, vulnerability and trust, warm soft light",
      "keywords": ["newborn hand", "trust", "vulnerability", "warm light"]
    },
    {
      "scene_id": "scene-010",
      "narration": "Ama bu zayıflık bir hata değil; bir tasarım. İnsanın görevi hayvanın görevinden farklıdır. Hayvan hazır programla gelir çünkü görevi sabittir. İnsan muhtaç gelir çünkü görevi büyüktür: öğrenerek büyümek, anlayarak kulluk etmek.",
      "visual_note": "seedling emerging from soil in time lapse, slow growth, patience and potential",
      "keywords": ["seedling growth", "soil", "time lapse", "potential"]
    },
    {
      "scene_id": "scene-011",
      "narration": "İnsanın birinci vazifesi öğrenerek olgunlaşmaktır. Bu sadece okul bilgisi değil. Kendini tanımak, hayatı anlamak, Rabbini kavramak, varlığı okumak. Bu yolculuk, insan fıtratının ta içindedir.",
      "visual_note": "open book with warm light, turning pages slowly, library with tall shelves",
      "keywords": ["open book", "warm light", "library", "turning pages"]
    },
    {
      "scene_id": "scene-012",
      "narration": "Hayvan hazır gelir; insan yolculuğa çıkar. Hayvanın kemali başlangıçta verilmiştir; insanın kemali ise zamanla, çabayla, anlayışla kazanılır. Bu fark küçük değil; insanlığın özünü tanımlar.",
      "visual_note": "long winding mountain path disappearing into mist ahead, journey and horizon",
      "keywords": ["mountain path", "winding road", "mist", "journey ahead"]
    },
    {
      "scene_id": "scene-013",
      "narration": "İnsanın ikinci vazifesi dua ile kulluktur. İnsandaki muhtaçlık tesadüf değil; onu dua etmeye yöneltmek için var. Dua sadece dilden bir istek değil; yönelmek, tanımak, dayanmak.",
      "visual_note": "hands raised in prayer against soft evening sky, reverence and sincerity",
      "keywords": ["hands raised", "prayer", "evening sky", "reverence"]
    },
    {
      "scene_id": "scene-014",
      "narration": "Dua, insanın en saf halini ortaya koyar. Gücünün bittiği yerde, başka bir güce yönelmek. Kontrolün sınırını fark etmek ve o sınırın ötesindekine seslenmek. Bu basit bir istek değil; farkındalığın ifadesidir.",
      "visual_note": "single candle light in darkness, steady flame, intimate and quiet atmosphere",
      "keywords": ["candle flame", "darkness", "quiet", "intimate light"]
    },
    {
      "scene_id": "scene-015",
      "narration": "\"Beni kim böyle idare ediyor?\" sorusu, insanı marifete götürür. İnsan bu soruyu sorduğunda varlığın rastgele olmadığını fark eder. Yiyip içtiği, nefes aldığı, sağlıklı kaldığı her şeyin arkasında bir düzen vardır.",
      "visual_note": "person looking up at starry night sky, scale of universe, wonder and smallness",
      "keywords": ["starry night sky", "looking up", "wonder", "cosmic scale"]
    },
    {
      "scene_id": "scene-016",
      "narration": "Bu düzenin özellikleri var: hikmetli idare, şefkatli yetiştirme, ince bakım. İnsan bu gerçeği kavradığında kendini rastgele yaşamadığını anlar. Bir ilgi var, bir gözetim var; ve bu, insanı yalnızlıktan çıkarır.",
      "visual_note": "sunlight warming a face in quiet forest, dappled light through leaves, gentle and nurturing",
      "keywords": ["sunlight on face", "forest", "dappled light", "nurturing"]
    },
    {
      "scene_id": "scene-017",
      "narration": "\"Acz\" gücünün yetmemesi; \"fakr\" muhtaç olmak. İlk bakışta bunlar insan için dezavantajdır. Ama işin aslı tersinedir: insan bu iki özelliğiyle yükselir. Bunlar zayıflığının işareti değil; kullukla yükselişinin kapısıdır.",
      "visual_note": "bird in flight silhouetted against bright sky, wings fully spread, freedom and lift",
      "keywords": ["bird in flight", "silhouette", "bright sky", "wings spread"]
    },
    {
      "scene_id": "scene-018",
      "narration": "İnsan gücüyle değil, muhtaçlığıyla yükselir. Modern çağda güç yüceltilir, bağımsızlık erdem sayılır. Ama gerçek yükseliş, aczini doğru okuyandan gelir. Muhtaçlık, doğru adrese yönelince bir kapıya dönüşür.",
      "visual_note": "water flowing upward along mountain rock face, defying gravity metaphorically, slow cinematic",
      "keywords": ["water on rocks", "mountain", "upward flow", "cinematic"]
    },
    {
      "scene_id": "scene-019",
      "narration": "Kanat yük taşımaz; uçurur. İnsanın zayıflığı ve muhtaçlığı, doğru anlaşıldığında onu esaret altına almaz; Allah'a yönelmenin vesilesi olur. Bu yüzden acz ve fakr, birer yük değil, birer kanattır.",
      "visual_note": "eagle soaring on thermal winds, effortless rise without beating wings, wide sky",
      "keywords": ["eagle soaring", "thermal winds", "effortless", "wide sky"]
    },
    {
      "scene_id": "scene-020",
      "narration": "İlim güzel, ama tek başına yetmez. Sadece bilgi biriktiren, anlamayı ihmal eden insan gurura kayabilir. Bildikleriyle övünen, aczini unutmaya başlayan insan zamanla küçülür — büyüdüğünü sanırken.",
      "visual_note": "tall stack of books casting shadow, knowledge without wisdom metaphor, cool tones",
      "keywords": ["stack of books", "shadow", "knowledge", "cool tones"]
    },
    {
      "scene_id": "scene-021",
      "narration": "Sadece dua da yetmez. Arayış olmadan, düşünmeden yapılan tekrar yüzeyde kalır. Cevap açık: ilim ve dua birlikte. Marifet ve ubudiyet yan yana. Biri olmadan öteki tamamlanmaz.",
      "visual_note": "two rivers merging into one wider flow, convergence and harmony, aerial view",
      "keywords": ["two rivers", "merging", "convergence", "aerial view"]
    },
    {
      "scene_id": "scene-022",
      "narration": "İman, marifeti; marifet, ubûdiyeti; ubudiyet ise tekemmülü doğurur. Bu bir zincir. Başlangıçsız olmaz; sonsuza açık. İnsan bu zincire tutunduğunda anlamsızlık içinde değil, anlam akışı içinde yaşar.",
      "visual_note": "chain links connecting in sequence, each link illuminated progressively, symbolic",
      "keywords": ["chain links", "sequence", "progressive light", "symbolic connection"]
    },
    {
      "scene_id": "scene-023",
      "narration": "İnsan sınırsız ihtiyaç ve sınırlı güçle yaşar. Sürekli tehditlerle çevrili, kontrol edemediği şeylerle dolu bir dünyada var olur. Bu zorluk tesadüf değil; bir anlam taşır: dua etsin, yönelsin, kavrasın diye.",
      "visual_note": "small boat on vast ocean, immensity of water around it, beautiful and humbling scale",
      "keywords": ["small boat", "vast ocean", "immensity", "humbling scale"]
    },
    {
      "scene_id": "scene-024",
      "narration": "Çocuk düşünün: gücü yetmez ama ister, seslenir, ağlar. Bu çaresizliğin içinde bile anne-babaya tam bir güven vardır. İnsan da Allah'ın kapısında böyledir. Muhtaçlık, yakınlığın başka bir adıdır.",
      "visual_note": "child reaching up toward parent's hand, trust and safety, warm gentle light",
      "keywords": ["child reaching up", "parent hand", "trust", "warm light"]
    },
    {
      "scene_id": "scene-025",
      "narration": "Dua zayıflık değil, fıtrattır. İnsanın yapısı dua için tasarlanmış. Seslenmek, yönelmek, dayanmak — bunlar insanın doğasının ta içinden gelir. Bunu bastırmak insanı özünden uzaklaştırır.",
      "visual_note": "calm water surface disturbed by single raindrop, natural response to touch, ripple effect",
      "keywords": ["raindrop on water", "ripple", "natural response", "calm surface"]
    },
    {
      "scene_id": "scene-026",
      "narration": "Dua iki türlüdür. Fiilî dua çalışmak, çabalamak, sebeplere gitmektir. Kavlî dua ise söz ve yöneliştir. İkisi birlikte olduğunda insan hem elinden geleni yapar hem de sonucu doğru adrese bırakır.",
      "visual_note": "person working in field with hands in soil, honest labor in natural light, purposeful",
      "keywords": ["working in field", "hands in soil", "honest labor", "purposeful"]
    },
    {
      "scene_id": "scene-027",
      "narration": "\"Ben yapıyorum\" demek en büyük yanılgıdır. İnsan kendini yaratmıyor, kendini yaşatmıyor, kalbinin atışını kontrol etmiyor. Ama buna rağmen başarıyı, sağlığı, zekâyı kendine mülk ediniyor.",
      "visual_note": "person casting long shadow in setting sun, shadow larger than figure itself, metaphor",
      "keywords": ["long shadow", "setting sun", "figure and shadow", "ego metaphor"]
    },
    {
      "scene_id": "scene-028",
      "narration": "Bu sahiplenme bir nankörlüktür. Verilen nimetin kaynağını kabul etmemek. Suyun tadını almak ama kaynağını unutmak. Bu, insanı giderek daraltan bir yanılgıdır; çünkü şükür kapanınca anlam da azalır.",
      "visual_note": "glass of clear water in sunlight, beauty of simple gift unappreciated, still life",
      "keywords": ["glass of water", "sunlight", "simple gift", "still life"]
    },
    {
      "scene_id": "scene-029",
      "narration": "İnsan eksik olduğu için değersiz değil — muhtaç olduğu için değerlidir. Eksiklik mahcubiyet vesilesi; muhtaçlık ise dua kapısı. Bu kapıdan girenin değeri artar. Muhtaçlık, Allah'a açılan bir penceredir.",
      "visual_note": "open window looking out to vast sky and horizon, threshold between inside and infinite",
      "keywords": ["open window", "vast sky", "horizon", "threshold"]
    },
    {
      "scene_id": "scene-030",
      "narration": "Modern insan bağımsız görünmek istiyor. Kontrol etmek, sahip olmak, kendi başına yetmek. Ama bunun sonucu paradoks: bilgi artıyor, anlam azalıyor; kaygı azalmıyor, çoğalıyor.",
      "visual_note": "busy modern city from above, people rushing, isolated in crowd, grey urban tones",
      "keywords": ["busy city", "crowd isolation", "urban", "grey tones"]
    },
    {
      "scene_id": "scene-031",
      "narration": "Cevap açık: insan bilgi makinesi değil, iman-marifet-dua varlığıdır. Bu üç şeyi birlikte tuttuğunda anlam akışı başlar; biri eksik olduğunda düzen bozulur.",
      "visual_note": "three candles lit together, each adding to the shared light, warmth increasing",
      "keywords": ["three candles", "shared light", "warmth", "unity"]
    },
    {
      "scene_id": "scene-032",
      "narration": "İnsan zayıf olduğu için düşmez; zayıflığını yanlış okuduğu için düşer. Zayıflığı başarısızlık ya da değersizlik okursa çöker. Ama kulluk kapısı olarak okursa yükselir. Aynı gerçek, farklı bakışla tamamen farklı bir anlam taşır.",
      "visual_note": "same stone path seen from different angles, one showing obstacle, one showing journey",
      "keywords": ["stone path", "different perspective", "journey", "reframing"]
    },
    {
      "scene_id": "scene-033",
      "narration": "İman, insanın muhtaçlığını anlamlandırır. Muhtaçlık imanla birleşince zillet değil kulluk olur; kaygı değil dua olur; yalnızlık değil Allah'a yakınlık olur. İnsan bu anlayışla hem gerçek anlamda insan olur hem de o manevî sultanlığa kavuşur.",
      "visual_note": "sunrise over mountains, new light breaking over horizon, hope and renewal, cinematic wide",
      "keywords": ["sunrise", "mountains", "new light", "hope and renewal"]
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-1-mebhas-4-nokta',
    test_day: 'day-11',
    workflow: 'manual_scene_json_single_track_landscape_load_input'
  }
};

return [{ json: { raw_input: rawInput } }];
