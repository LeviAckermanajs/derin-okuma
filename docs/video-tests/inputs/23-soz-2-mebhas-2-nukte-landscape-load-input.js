// Derin Okuma — 23. Söz - 2. Mebhas - 2. Nükte landscape video
// day-20

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },


  job: {
    title: '23. Söz - 2. Mebhas - 2. Nükte',
    description: 'İnsan neden hem çok küçük hem de çok büyüktür? İçindeki yüksek latifeler nereye bağlandığında gerçek terakki başlar?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-2-nukte-landscape-day-20'
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
      title: 'Açılış — İki Farklı Okuma',
      narration: 'Bir aynı insan, iki farklı gözle okunduğunda bütünüyle farklı görünür. Bir bakışta küçük, sönük, geçici bir varlık; diğer bakışta ise sonsuz büyüklüklerin aynası. Bu iki okuma aynı insana aittir. Ve ikisi de yanlış değildir.',
      visual_note: 'Split-screen or mirrored reflection of the same person in different lights, one dim and solitary, one radiant and open.',
      keywords: ['reflection', 'duality', 'human nature', 'contrasting light']
    },
    {
      scene_id: 'scene-002',
      title: 'Enaniyet Ciheti',
      narration: 'İnsanın bir yüzü kendini merkeze koyar. Dünya, güç, statü, takdir, sahiplik, kontrole sahip olma... Tüm düşünceler ve arzular o yüzden bakıldığında yalnızca bene dönüktür. Bu, enaniyet cihetidir.',
      visual_note: 'A person at the center of a busy crowd, looking inward, surrounded by the noise of the world yet isolated.',
      keywords: ['ego', 'self-centered', 'crowd', 'isolation', 'pride']
    },
    {
      scene_id: 'scene-003',
      title: 'Ubudiyet Ciheti',
      narration: 'Ama insanın bir diğer yüzü var. Bu yüz kendini değil, Rabbini merkeze alır. Eksikliğini tanır, muhtaçlığını bilir ve o muhtaçlıkla sonsuzluğa yönelir. Bu yüz, kulluğun yüzüdür.',
      visual_note: 'Person kneeling or bowing quietly in a vast open landscape, humble and small against infinite sky.',
      keywords: ['humility', 'prayer', 'vast sky', 'servitude', 'surrender']
    },
    {
      scene_id: 'scene-004',
      title: 'Birinci Vech — İnsanın Küçüklüğü',
      narration: 'Bu ilk yüzüyle bakıldığında insan gerçekten çok küçüktür. Sermayesi dar, iradesi kısıtlı, ömrü geçici, bedeni çürümeye meyilli. Kâinatın sonsuz tabakaları içinde narin ve zayıf bir ferttir.',
      visual_note: 'Extreme wide shot of a lone human figure in a vast desert or open field under an immense starry sky.',
      keywords: ['tiny human', 'vast cosmos', 'fragility', 'night sky', 'smallness']
    },
    {
      scene_id: 'scene-005',
      title: 'Saç Teli Kadar Dar İrade',
      narration: 'İnsanın iradesi vardır, ama ne kadar geniştir? Bir saç teli kadar ince ve dar bir alanda çalışır. Kendini çok büyük sanabilir insan. Ama seçebildiği alan sınırlıdır, kontrol ettiği şey azdır.',
      visual_note: 'A single thread of light in the dark, thin and delicate, barely visible but present.',
      keywords: ['thin thread', 'limits', 'willpower', 'narrow', 'constraint']
    },
    {
      scene_id: 'scene-006',
      title: 'Çabuk Söner, Çabuk Geçer',
      narration: 'İnsan bedeni geçicidir. Çabuk söner, çabuk geçer, çabuk çürür. Bu bir aşağılama değil; bir gerçeğin kabulüdür. Sırf maddî tarafına bakarak insanı tanımlarsan, sonuç kaçınılmaz olarak küçüklük ve faniliktir.',
      visual_note: 'A candle flame flickering and slowly fading, melting wax, soft light diminishing.',
      keywords: ['candle fading', 'impermanence', 'transience', 'mortality']
    },
    {
      scene_id: 'scene-007',
      title: 'Kâinatta Zayıf Bir Fert',
      narration: 'Modern dünya insanı sıklıkla merkeze koyar. Oysa kâinatın sonsuzluğu içinde insan kırılgan bir ferttir. Kozmik bakımdan küçük, biyolojik bakımdan zayıf, zaman bakımından kısa ömürlüdür.',
      visual_note: 'Time-lapse of galaxies spinning overhead while a single human figure stands still, overwhelmed and small.',
      keywords: ['galaxy', 'cosmos', 'tiny human', 'universe scale', 'fragile']
    },
    {
      scene_id: 'scene-008',
      title: 'Küçüklüğü Bilmeden Büyüklüğü Anlayamazsın',
      narration: 'Peki neden tüm bu küçüklük anlatılıyor? Çünkü biraz sonra söylenecek olan büyük kıymet, insanın bedeninden, nefsinden veya benliğinden değil; bambaşka bir yüzünden gelecektir. Küçüklüğü bilmeden büyüklüğü anlayamazsın.',
      visual_note: 'A small seed resting in an open palm, the immensity of potential hidden in its tiny form.',
      keywords: ['seed in palm', 'hidden potential', 'contrast', 'beginning']
    },
    {
      scene_id: 'scene-009',
      title: 'Keskin Bir Dönüş — İkinci Vech',
      narration: 'Sonra çok keskin bir dönüş gelir. İnsan ubudiyet yüzüyle, özellikle de aczini ve fakrını taşıyan tarafıyla, pek büyük bir genişliğe kavuşur; pek büyük bir ehemmiyete sahip olur. Bu dönüş görünürde paradoks gibidir.',
      visual_note: 'A narrow dark corridor suddenly opening into a vast, luminous open space beyond a door.',
      keywords: ['door opening', 'light beyond', 'turning point', 'expansion', 'paradox']
    },
    {
      scene_id: 'scene-010',
      title: 'Aczin Sırrı',
      narration: 'İnsanın büyüklüğü kuvvetinden değil, aczinden gelir. Bu ilk bakışta ters görünür. Ama mantığı derindir: insan âcizse sonsuz kudrete muhtaçtır. Ve bu muhtaçlık onu o sonsuz kudrete bağlar.',
      visual_note: 'A vine clinging to a massive ancient tree, fragile yet connected to something vast and enduring.',
      keywords: ['vine and tree', 'dependency', 'connection', 'strength through weakness']
    },
    {
      scene_id: 'scene-011',
      title: 'Fakrın Sırrı',
      narration: 'İnsan fakirdir ve bu fakr onu ilahi rahmete, lütfa ve rızka muhtaç kılar. İnsan eksiktir ve bu onu kemalin kaynağına yöneltir. İnsan fanidir ve bu onda bekayı ister. İnsan sınırlıdır ve bu onu sonsuzu aramasını sağlar.',
      visual_note: 'Empty bowl slowly being filled with water from above, light streaming down into the void.',
      keywords: ['empty bowl filled', 'receiving', 'poverty becoming richness', 'light from above']
    },
    {
      scene_id: 'scene-012',
      title: 'Acz ve Fakr Niçin Verilmiş',
      narration: 'İnsanın mahiyetine nihayetsiz bir acz ve hadsiz bir fakr konmuştur. Neden? Tâ ki kudretiyle sonsuz, rahmeti nihayetsiz bir Zâtın sonsuz tecellilerine câmi, geniş bir ayna olsun. Eksiklikler anlamsız birer kusur değildir.',
      visual_note: 'A large clear mirror in an open field reflecting the vast sky and light, empty yet holding everything.',
      keywords: ['large mirror', 'reflection', 'sky', 'vast capacity', 'receiving all']
    },
    {
      scene_id: 'scene-013',
      title: 'Her Eksiklik Bir İlahi İsmin Kapısı',
      narration: 'Açlık, Rezzak ismine kapı açar. Hastalık, Şafi ismine. Korku, Hafiz ismine. Günahkârlık ve eksiklik, Gafur ile Settar isimlerine yöneltir. Yalnızlık ve muhtaçlık, Rahman ve Rahîm isimlerine baktırır.',
      visual_note: 'Multiple doors opening one by one in a long corridor, each revealing a different warm golden light beyond.',
      keywords: ['doors opening', 'warm light', 'pathway', 'discovery', 'many doors']
    },
    {
      scene_id: 'scene-014',
      title: 'Zaaf Tecelli Alıcı Kapasitedir',
      narration: 'İnsanın zaafı boş bir eksiklik değil; tecelli alıcı bir kapasitedir. Bardağın boş olması, dolabilmesi için şarttır. Elinin boş olması, verileni alabilmesi içindir. İnsandaki boşluklar da bu anlama gelir.',
      visual_note: 'An empty glass vessel slowly filling with clear water from above, catching the light beautifully.',
      keywords: ['empty vessel filling', 'capacity', 'receiving', 'glass and light']
    },
    {
      scene_id: 'scene-015',
      title: 'Çekirdek Misali',
      narration: 'İnsan bir çekirdeğe benzer. Dışarıdan küçüktür; ama içinde bir ağacın planı gizlidir. Dallar, yapraklar, meyveler için bütün bir program taşır. İnsan da böyledir: dışı küçük, ömrü kısa, bedeni zayıf; ama mahiyetinde çok büyük bir program vardır.',
      visual_note: 'Extreme close-up of a single seed, then time-lapse growing into a towering tree in full bloom.',
      keywords: ['seed to tree', 'growth', 'hidden potential', 'time-lapse', 'transformation']
    },
    {
      scene_id: 'scene-016',
      title: 'Çekirdeğin Programı',
      narration: 'O program nedir? Kalp, ruh, sır, akıl, hayal, latifeler, vicdan, sevme, korkma, isteme, sığınma, sonsuzluk isteme... İnsan tamamlanmış bir varlık değildir. Açılmak üzere verilmiş bir çekirdek varlıktır.',
      visual_note: 'Intricate detailed cross-section of a seed revealing complex inner structures, microscopic beauty.',
      keywords: ['seed cross-section', 'inner complexity', 'microscopic', 'hidden design', 'structure']
    },
    {
      scene_id: 'scene-017',
      title: 'Çatlamanın Gerekliliği',
      narration: 'Çekirdeğin ağaç olması için önce karanlıkta kalması, toprağın altına girmesi ve çatlaması gerekir. Bu, insandaki imtihanı çağrıştırır. Kemal kolay, yüzeysel ve anlık bir parıltıyla değil; sabır, terbiye, kırılma ve yönelişle ortaya çıkar.',
      visual_note: 'Underground view of a seed cracking open in dark soil, first root emerging, then growing upward toward light.',
      keywords: ['seed cracking underground', 'dark soil', 'first root', 'breaking open', 'growth']
    },
    {
      scene_id: 'scene-018',
      title: 'Dar Âlemden Geniş Âleme',
      narration: 'Çekirdek dar âlemden çıkıp geniş hava âlemine girer. İnsan için de bu, nefis ve beden merkezli darlıktan ruhî genişliğe; dünya merkezli hayattan ebediyet ufkuna; kendine kapanmaktan Allah\'a açılmaya geçiştir.',
      visual_note: 'A seedling breaking through soil surface into open sunlit air, vast sky above, transition from dark to light.',
      keywords: ['breaking through soil', 'open sky', 'emergence', 'freedom', 'light above']
    },
    {
      scene_id: 'scene-019',
      title: 'Yanlış Kullanım — Çürüme',
      narration: 'Eğer çekirdek verilen manevî cihazları zararlı maddeler çekmek için sarf ederse, feshedip çürüyecektir. İnsanın bozulması cihazsızlıktan değil, yanlış kullanımdan kaynaklanır. Sorun nimetin yokluğu değil, nimetin yanlış yere harcanmasıdır.',
      visual_note: 'A seed or plant rotting in the dark soil, darkening and dissolving, wasted potential.',
      keywords: ['rotting seed', 'decay', 'wasted', 'dark soil', 'corruption']
    },
    {
      scene_id: 'scene-020',
      title: 'Zararlı Maddeleri Çekmek',
      narration: 'Zararlı maddeler hangileridir? Sırf şehvet, kibir, gösteriş, enaniyet, dünya sarhoşluğu, boş zevk peşinde koşma, manevî cihazları yalnızca nefsin keyfi için kullanma. Bunlar çekirdeği toprağın altında tutan şeylerdir.',
      visual_note: 'Tangled roots drawing dark liquid from polluted soil, stunted growth, a plant failing to rise.',
      keywords: ['tangled roots', 'dark soil', 'stunted growth', 'pollution', 'trapped']
    },
    {
      scene_id: 'scene-021',
      title: 'Ruhun Daralması',
      narration: 'Bu çürüme yalnızca ahirette bir ceza meselesi değildir. Dünyada da ruhun daralmasıdır. Asli istidat boğulur. Kısa ömürde, dar yerde ve sıkıntılı halde gidilir. Yüksek duyguların susturulması başlı başına bir kayıptır.',
      visual_note: 'A person in a small dim room, walls closing in, light fading outside the tiny window.',
      keywords: ['enclosed room', 'shrinking space', 'dim light', 'constriction', 'loss']
    },
    {
      scene_id: 'scene-022',
      title: 'Fâliku\'l-Habbi — Çatlatmak Olmadan Ağaç Olunmaz',
      narration: 'Allah Kur\'an\'da dâneyi ve çekirdeği çatlatan olarak vasıflandırılır. Çatlatmak olmadan ağaç olunmaz. Çekirdeğin kabuğu kırılmadan gelişim başlamaz. İnsan için de enaniyet kırılmadan, rahat arzusu aşılmadan hakiki inkişaf başlamaz.',
      visual_note: 'A seed shell dramatically cracking open, releasing energy and light from within, symbolic and powerful.',
      keywords: ['cracking shell', 'light bursting', 'breaking open', 'release', 'transformation']
    },
    {
      scene_id: 'scene-023',
      title: 'Emr-i Tekvini — Yaratılış Kanunu',
      narration: 'Bu, Allah\'ın kâinata koyduğu yaratılış kanunudur. Fizik âlemde sebepler nasıl işliyorsa, manevî inkişafın da sebepleri vardır: iman, ubudiyet, Kur\'an\'a imtisal, nefsi merkeze almamak, latifeleri asli vazifelerine döndürmek.',
      visual_note: 'Natural law visible in the cosmos — orbits, seasons changing, growth cycles, all following an unseen order.',
      keywords: ['cosmic order', 'seasons', 'natural law', 'divine design', 'cycles']
    },
    {
      scene_id: 'scene-024',
      title: 'Hüsn-ü İstimal — Aklın Kullanımı',
      narration: 'Sana verilen nimetin güzelliği yetmez. Onu nasıl kullandığın belirleyicidir. Akıl büyük bir nimettir. Ama hakikati ararsa nur olur, bahaneye ve inkâra çalışırsa afet olur. Aynı akıl, yöneldiği yere göre tamamen farklılaşır.',
      visual_note: 'A telescope pointed at stars versus pointed at the ground, same instrument, entirely different purposes.',
      keywords: ['telescope and stars', 'direction matters', 'instrument of knowledge', 'purpose']
    },
    {
      scene_id: 'scene-025',
      title: 'Hüsn-ü İstimal — Hayal ve Kalbin Kullanımı',
      narration: 'Hayal büyük bir nimettir. Ama tefekküre açılırsa ufuk olur, vehme çalışırsa yük olur. Kalp büyük bir nimettir. Allah\'a yönelirse merkez olur, fani şeylere mutlak bağlanırsa azap olur.',
      visual_note: 'A compass needle pointing true north versus spinning wildly, the same instrument, different states.',
      keywords: ['compass', 'direction', 'true north', 'focus', 'guidance']
    },
    {
      scene_id: 'scene-026',
      title: 'Cüz\'î Hakikati Küllî Hakikate Dönüştürmek',
      narration: 'Her insan kendi içinde küçük bir ferttir. Ama doğru inkişaf ederse küçük şahsi hakikati büyük bir küllî hakikate dönüşür. Kendi küçük merhamet duygusundan Rahmaniyeti okuyabilir. Kendi sınırlı sevgisinden Vedud\'u anlayabilir.',
      visual_note: 'A small pool of water reflecting the entire sky above, small mirror holding infinite expanse.',
      keywords: ['small pool reflecting sky', 'infinite in finite', 'microcosm', 'reflection of vastness']
    },
    {
      scene_id: 'scene-027',
      title: 'İnsan Kâinatın Fihristi',
      narration: 'İnsandaki küçük duygular büyük hakikatlerin aynası olur. Kendi aczinden Allah\'ın kudretini tanıyabilir. Kendi fakrından ilahi gınayı anlayabilir. Kendi faniliğinden bekayı isteyebilir. Böylece insan kâinatın manalarını toplayabilecek bir fihriste dönüşür.',
      visual_note: 'An open book containing a map of the entire universe, every page holding a different dimension of reality.',
      keywords: ['book of universe', 'index', 'comprehensive', 'depth', 'all contained within']
    },
    {
      scene_id: 'scene-028',
      title: 'Mahiyetteki Cihazat',
      narration: 'İnsanın mahiyetine kudretten ehemmiyetli cihazlar ve kaderden kıymetli programlar tevdi edilmiştir. Bu cihazlar salt organlar değildir. Kalp, ruh, sır, vicdan, akıl, hayal, hafıza, sevgi, korku, ümit, şefkat ve merak; bunlar manevî organlardır.',
      visual_note: 'An intricate clock mechanism, each gear precise and purposeful, complex inner workings visible.',
      keywords: ['clock mechanism', 'inner workings', 'precision', 'design', 'complexity']
    },
    {
      scene_id: 'scene-029',
      title: 'Kaderden Kıymetli Programlar',
      narration: 'Sana rastgele şeyler konmamıştır. İnsan potansiyeller yığını değil; anlamlı bir tasarımın taşıyıcısıdır. Bu da insanın sorumluluğunu büyütür. Program varsa, onun bir hedefi de vardır. Ve hedefe ulaşma sorumluluğu da sahibine aittir.',
      visual_note: 'Architectural blueprints laid out, purposeful and detailed design, every element intentional.',
      keywords: ['blueprint', 'design', 'purpose', 'intention', 'responsibility']
    },
    {
      scene_id: 'scene-030',
      title: 'Birinci Tip İnsan — Nefsin Esiri',
      narration: 'İki farklı insan tipi vardır. Birincisi, dünya toprağı altında manevî cihazlarını nefsin heveslerine sarf eder. Küçük hazlar için büyük cihazlarını harcar. Kısa ömürde, dar yerde ve sıkıntılı halde çürür gider.',
      visual_note: 'A person buried under layers of mundane objects, colorful but suffocating, unable to see the sky.',
      keywords: ['buried', 'surrounded by trivial', 'trapped', 'suffocating', 'mundane']
    },
    {
      scene_id: 'scene-031',
      title: 'İkinci Tip İnsan — İman ile Terbiye',
      narration: 'İkinci insan ise istidat çekirdeğini İslâmiyet suyuyla, imanın ışığıyla ve ubudiyet toprağı altında terbiye eder. Kur\'an\'ın emirlerine uyar. Manevî cihazlarını hakiki gayelerine yöneltir. Berzahta dal budak verir; ahirette hadsiz kemale ve nimete kavuşur.',
      visual_note: 'A tree growing in fertile soil, watered by rain, lit by golden sun, rising toward an open luminous sky.',
      keywords: ['tree growing', 'fertile soil', 'sunlit growth', 'upward', 'flourishing']
    },
    {
      scene_id: 'scene-032',
      title: 'Hakikî Terakki Tanımı',
      narration: 'Hakikî terakki; insana verilen kalbin, sırrın, ruhun, aklın, hatta hayalin ve diğer kuvvelerin hayat-ı ebediyeye yüzünü çevirmesidir. Her birinin kendine has bir kulluk vazifesi vardır. Terakki, daha çok zevk almak değil; içindeki yüksek duyguları asli vazifelerine döndürmektir.',
      visual_note: 'Multiple compass needles all settling toward the same true north, alignment and direction, calm resolution.',
      keywords: ['multiple compasses', 'alignment', 'true direction', 'settled', 'purpose']
    },
    {
      scene_id: 'scene-033',
      title: 'Ehl-i Dalalettin Terakkisi Sukuttur',
      narration: 'Daha rafine hazlar, daha zengin deneyimler, daha yoğun tatmin... Bunlar dışarıdan ilerleme gibi görünebilir. Ama bunların tümü için kalp, akıl, hayal ve ruh hep nefse hizmet eder hâle gelmişse, bu yükseliş değil düşüştür. Çünkü yüksek olan alçak olana hizmet ettiriliyor.',
      visual_note: 'A high balcony figure walking back down into a basement, descent dressed as ascent, paradox of false progress.',
      keywords: ['descent', 'false progress', 'downward', 'paradox', 'illusion of rising']
    },
    {
      scene_id: 'scene-034',
      title: 'Saray Temsili — Birinci Saray',
      narration: 'Bir saray düşün: kapısı çok şenlikli, parlak ve eğlenceli. Efendi kapıda oyuyor, görevliler vazife dışı işlerle meşgul. Ama içerisi boş. Bu, insandaki yüksek duyguların susturulduğu ve nefsin kapıda merkez haline geldiği hali temsil eder.',
      visual_note: 'Elaborate ornate gate with busy festivities outside, but through the open doors inside is completely empty and dark.',
      keywords: ['ornate gate', 'festive outside', 'empty inside', 'hollow palace', 'facade']
    },
    {
      scene_id: 'scene-035',
      title: 'Saray Temsili — İkinci Saray',
      narration: 'Bir diğer saray ise dıştan sade ve hatta biraz sönük görünür. Ama içeride herkes vazifesindedir. Akıl düşünür, kalp yönelir, ruh kendi yüce işiyle meşguldür. Dıştan parlaklık yoktur belki. Ama içeride saray mamurdur. Hakikî hayat, dış gürültüde değil; iç nizam ve vazifededir.',
      visual_note: 'Simple modest exterior, but inside every room is purposeful and active, each person engaged in meaningful work.',
      keywords: ['modest exterior', 'purposeful interior', 'inner life', 'activity', 'true abundance']
    },
    {
      scene_id: 'scene-036',
      title: 'Son Hüküm — Kapıcıyı Efendi Yapmak',
      narration: 'O yüksek latifeleri nefis ve hevaya hizmetkâr etmek, onların vazife-i asliyelerini unutturmak... elbette sukuttur, terakki değildir. Bir şeyin terakki olup olmadığını, ne kadar parlak göründüğüne göre değil; içindeki yüksek duyguları nereye bağladığına göre anlarsın.',
      visual_note: 'A grand hall where the doorman has taken the throne, all the true servants standing displaced and silent around him.',
      keywords: ['doorman on throne', 'displaced order', 'inversion', 'wrong hierarchy', 'silence']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-2-nukte',
    test_day: 'day-20',
    workflow: 'manual_scene_json_single_track_landscape_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
