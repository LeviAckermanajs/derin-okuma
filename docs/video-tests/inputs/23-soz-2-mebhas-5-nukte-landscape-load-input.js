// Derin Okuma — 23. Söz - 2. Mebhas - 5. Nükte landscape video
// Filled: day-23

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },


  job: {
    title: '23. Söz - 2. Mebhas - 5. Nükte',
    description: 'İnsan bu dünyaya başıboş bırakılmış bir canlı değil; gören, anlayan, cevap veren, karşılık veren bir varlık.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-5-nukte-landscape-day-23'
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
      title: 'Giriş — Niçin Buradayız?',
      narration: 'İnsan bu dünyaya rastlantıyla gelmedi; çok özel bir bilinçle, çok geniş kabiliyetlerle ve bunlara karşılık gelen derin vazifelerle gönderildi. Bu gerçek, insanlığı salt biyolojik bir varlık olmaktan çıkarır; anlam, görev ve sorumluluk taşıyan bir muhatap haline getirir.',
      visual_note: 'wide aerial view of earth from above, soft clouds, warm sunrise light',
      keywords: ['earth aerial', 'sunrise', 'vast horizon']
    },
    {
      scene_id: 'scene-002',
      title: 'Memur — Görevli Olmak',
      narration: 'İnsanın bu dünyadaki en temel kimliklerinden biri memurluktur. Memur olmak, sadece bir işi yapmak değildir; görevlendirilmiş olmak, vazifeli olmak, anlam yüklü bir varoluş içinde bulunmaktır. İnsan yiyip içmek, çalışmak, çoğalmak için değil; daha derin bir vazifeyle bu dünyaya gelmiştir.',
      visual_note: 'person walking purposefully through sunlit corridor, calm determination',
      keywords: ['purposeful walk', 'sunlit path', 'calm interior']
    },
    {
      scene_id: 'scene-003',
      title: 'Memurun Vazifeleri',
      narration: 'Bu vazifeyi sıralarken şunları görürüz: görmek, tefekkür etmek, manayı anlamak, Allah\'ı tanımak, nimete şükretmek, cemal ve kemal karşısında secde etmek, vahdeti tasdik etmek. Bunların hepsi bir iç derinliği gerektirir. Memuriyet dar değil; bütün varlığı doğru okuyup gereken kulluk cevabını vermektir.',
      visual_note: 'open book with light streaming across pages, calm study space',
      keywords: ['open book', 'streaming light', 'study space']
    },
    {
      scene_id: 'scene-004',
      title: 'Misafir — Geçiciliğin Bilgeliği',
      narration: 'İnsanın ikinci temel kimliği misafirliktir. Misafir sahip değildir, geçicidir. Misafir kendine ikram edileni emanet gibi kullanır, ev sahibine karşı edepli olur. Bu kelime insanın dünya ile ilişkisinin dozunu ayarlar; dünyada ev sahibi gibi davranınca insan bozulur, misafir olduğunu hatırlayınca dengeye gelir.',
      visual_note: 'traveler pausing at scenic overlook with backpack, soft afternoon light',
      keywords: ['traveler overlook', 'afternoon light', 'journey pause']
    },
    {
      scene_id: 'scene-005',
      title: 'Emanet Bilinci',
      narration: 'Her şeyin sadece kendine ait olduğu duygusuyla kurulan bir hayat, zamanla insanı içten çürütür. Ama bana emanet verilmiş, ben geçiciyim çizgisine geçince hem huzur doğar hem de dünya ile ilişki sağlıklı bir zemine oturur. Misafirlik kibri değil, şükrü büyütür.',
      visual_note: 'gentle hands holding a small plant with soil, nurturing care, soft light',
      keywords: ['holding plant', 'gentle hands', 'nurturing']
    },
    {
      scene_id: 'scene-006',
      title: 'İstidat — Verilmiş Büyük Kapasite',
      narration: 'İnsan sıradan yaratılmamış. İçine çok geniş kabiliyetler yerleştirilmiş: sevme, merak etme, sonsuzu isteme, güzeli fark etme, anlam arama, adalet isteme, ebediyet özlemi. Bu kadar büyük bir kapasite verilmişse, insandan beklenen vazife de o kapasitenin büyüklüğündedir.',
      visual_note: 'starry night sky with milky way, person looking upward in wonder',
      keywords: ['starry night', 'milky way', 'human wonder']
    },
    {
      scene_id: 'scene-007',
      title: 'İstidadın Yönü',
      narration: 'Bu büyük istidat, nefsin saltanatı için değil; ubudiyetin genişliği için verilmiştir. İnsanın içindeki sonsuzluk duygusu, onun gerçekten sonsuz bir şeyle bağlantılı olduğunu gösteriyor. Sadece dünyevî tatminlere yönelince bu istidat karşılıksız kalır ve insan doymaz; çünkü istidat daha büyük bir şey için açılmıştır.',
      visual_note: 'wide open plain with single tree reaching toward sky, cinematic mood',
      keywords: ['lone tree', 'open plain', 'reaching sky']
    },
    {
      scene_id: 'scene-008',
      title: 'İki Yönlü Ubudiyet',
      narration: 'İnsan bu kâinata geldikten sonra iki ayrı yolla kulluk yapar. Birinci yol, kâinatı okuyarak, tefekkür ederek, Allah\'ın fiillerini ve isimlerini fark ederek yapılan ubudiyettir. İkinci yol ise tanıdığı Rabbine doğrudan yönelme, dua etme, secde etme, sevme ubudiyetidir.',
      visual_note: 'split composition: open nature landscape on one side, candle in quiet room on other',
      keywords: ['nature landscape', 'candle light', 'quiet contemplation']
    },
    {
      scene_id: 'scene-009',
      title: 'Gaibane Ubudiyet — Tefekkür Yolu',
      narration: 'Birinci yol gaibane yoldur: eserlerden Müessire gitmek. Kâinata bakıp düzeni, hikmeti, inceliği, azameti fark etmek; bunların arkasında bir Sâni olduğunu anlamak; o Sâni\'nin isimlerini ve sıfatlarını seyretmek. Bu yol tefekkür, temaşa, hayret, anlama, delillendirme ve ilan etme yoludur.',
      visual_note: 'person sitting quietly in forest, dappled light through trees, meditative mood',
      keywords: ['forest contemplation', 'dappled light', 'meditative person']
    },
    {
      scene_id: 'scene-010',
      title: 'Hazırane Ubudiyet — Doğrudan Muhatap',
      narration: 'İkinci yol hazırane yoldur: tanınan Rabbine doğrudan yönelmek. Artık delillerden değil, doğrudan muhatap olmak; dua etmek, secde etmek, şükretmek, zikretmek, sevmek. Bu iki yol birbirini tamamlar: önce tanırsın, sonra yönelirsin. Hakiki ibadet, marifetten doğar.',
      visual_note: 'person in prayer at sunset, silhouette against golden horizon',
      keywords: ['prayer silhouette', 'golden sunset', 'devotion']
    },
    {
      scene_id: 'scene-011',
      title: 'Saltanat-ı Rububiyeti Görmek',
      narration: 'Kâinata bakınca bir başıboşluk değil, bir saltanat görülür. Düzen varsa, ölçü varsa, hikmet varsa, her şeyi besleyen ve yöneten bir güç varsa; orada bir Rab vardır. İnsan bu saltanatı inkâr ederek veya kör tesadüfe bağlayarak değil, itaatkârâne tasdik ederek okumalıdır.',
      visual_note: 'majestic mountain range with clouds below, vast order and scale',
      keywords: ['mountain majesty', 'clouds below', 'vast order']
    },
    {
      scene_id: 'scene-012',
      title: 'Hayretkârane Nezaret',
      narration: 'Bu okuyuş sıradan bir bakış değil; hayretkârâne nezarettir. Hayret yüklü idrak. Sadece kuru gözlem değil; anlam arayan, derinliğe inen, büyüklük karşısında içi titreyen bir bakış. Gerçek tefekkür duygusuz bir analiz değildir; hayranlıkla dolu, anlam dolu bir seyirdir.',
      visual_note: 'close-up of dewdrops on spider web in morning light, wonder and detail',
      keywords: ['dewdrop spider web', 'morning detail', 'wonder close-up']
    },
    {
      scene_id: 'scene-013',
      title: 'Dellâllık — Gördüğünü İlan Etmek',
      narration: 'İnsan yalnızca görüp susan biri değildir; gördüğünü ilan etmek de görevidir. Dellâl; bir güzelliği duyuran, bir kıymeti ilan eden, sahibi adına sergileyen kişidir. İnsan ne güzel doğa demekle bitmez; bu güzelliklerin bir Sâni\'i var diye işaret etmek de vazifesinin parçasıdır.',
      visual_note: 'person on hilltop gesturing toward expansive landscape, sense of announcing',
      keywords: ['hilltop gesture', 'expansive landscape', 'announcement']
    },
    {
      scene_id: 'scene-014',
      title: 'Sanatkârsız Estetik Hatası',
      narration: 'Modern zihnin büyük yanılgılarından biri şudur: doğayı estetik bulmak, ama Sanatkârı devre dışı bırakmak; güzelliği sahipsiz yaşamak. Hakiki insan, sanatın içine gömülüp kalmaz; sanattan Sanatkâra geçer. Kâinatın manasını yorumlayan sözcü, yalnızca seyirci değil, ilancı da olur.',
      visual_note: 'gallery of natural photography, viewer standing in appreciation, art exhibition mood',
      keywords: ['nature art gallery', 'viewer appreciation', 'exhibition space']
    },
    {
      scene_id: 'scene-015',
      title: 'İsimlerle Yüklü Kâinat',
      narration: 'Bir çiçeğe bakarken yalnızca güzellik görmek değil, isimler okumak mümkündür. O çiçekte güzellik veren bir ismi, inceliğinde başka bir ismi, ölçüsünde hikmeti, renginde nakşı, beslemesinde bolluğu görmek mümkündür. Kâinat, Allah\'ın isimlerinin nakışlarıyla örülmüş büyük bir kitaptır.',
      visual_note: 'macro photography of flower with multiple layers visible, detailed petals and structure',
      keywords: ['flower macro', 'detailed petals', 'layered beauty']
    },
    {
      scene_id: 'scene-016',
      title: 'İdrak Terazisi',
      narration: 'İnsan bu isimleri idrak terazisiyle tartar. Yani aklını kullanarak ayırt eder, tanır, fark eder. Bu bilgi boyutudur. Akıl, isimleri doğru okumak için gereklidir. Ama burada iş bitmez; ikinci bir boyut daha vardır: kalbin kıymetşinaslığı.',
      visual_note: 'old scale balance on wooden table, warm light, symbolic weighing',
      keywords: ['balance scale', 'wooden table', 'warm light symbolic']
    },
    {
      scene_id: 'scene-017',
      title: 'Kalbin Kıymetşinaslığı',
      narration: 'Kalbin kıymetşinaslığı, aklın tanımalarını değerlendirmektir. Bir insan çok bilgi sahibi olup yine de kör kalabilir; çünkü bilgi başka, kıymetşinaslık başkadır. Marifet yalnızca aklî değil; kalbî bir tanıma da gerektirir. Akıl ayırır, kalp kıymet verir.',
      visual_note: 'hands gently holding a glowing orb or light, symbolic inner knowing',
      keywords: ['hands holding light', 'symbolic knowing', 'inner wisdom']
    },
    {
      scene_id: 'scene-018',
      title: 'Kâinat Kitabı Metaforu',
      narration: 'Varlıklar suskun değildir; anlam taşır. Her canlı, her olay, her düzen; bir kudretin kaleme aldığı mektuptur. Kâinat bu anlamda büyük bir kitaptır: mektupları, satırları, kelimeleri ve sahifeleri olan; içinde anlam saklayan bir kitap. Her sayfa, aynı Müellif\'in imzasını taşır.',
      visual_note: 'ancient manuscript with intricate script, warm candlelight, sacred text mood',
      keywords: ['ancient manuscript', 'candlelight', 'sacred text']
    },
    {
      scene_id: 'scene-019',
      title: 'Mütalaa — Anlamlı Okuyuş',
      narration: 'Bu kitabı okumak için mütalaa gereklidir. Mütalaa sıradan okumaktan daha derindir: dikkatli okuyuş, anlam çözme, yorumlayarak okuma, bağlantı kurma. Birçok insan bakar ama okumaz. Hakiki insan, varlığı anlam yüklü bir metin gibi okur ve bu okuyuş onun için ibadet haline gelir.',
      visual_note: 'scholar reading intensely near window, books surrounding, absorbed in meaning',
      keywords: ['scholar reading', 'window light', 'absorbed study']
    },
    {
      scene_id: 'scene-020',
      title: 'Bakmak ile Okumak Farkı',
      narration: 'Bakmak gözün işidir; okumak aklın ve kalbin işidir. Aynı manzaraya bakan iki insan, birbirinden tamamen farklı şeyler görebilir. Biri madde ve süreç görür; diğeri anlam ve hitap. Bu fark, bakışın arkasındaki niyetten ve o bakışı besleyen marifetten gelir.',
      visual_note: 'two people at same scenic viewpoint with contrasting expressions, one absorbed, one distracted',
      keywords: ['viewpoint contrast', 'absorbed gaze', 'scenic landscape']
    },
    {
      scene_id: 'scene-021',
      title: 'Tefekkür İbadettir',
      narration: 'Tefekkür bir vakit doldurmak değildir. Varlığı boş madde gibi değil, İlâhî hitabın işaretleri gibi görmektir. Bu yüzden tefekkür ibadettir. Çünkü bu bakış, kâinatı bir mesaj olarak alır; her şeyin arkasında bir anlam, bir niyet ve bir Söyleyen olduğunu kabul eder.',
      visual_note: 'person in quiet contemplation by still lake, reflection in water, serene meditation',
      keywords: ['lake reflection', 'quiet contemplation', 'serene meditation']
    },
    {
      scene_id: 'scene-022',
      title: 'Sanat Temaşadan Muhabbete',
      narration: 'Sanatı görmek ve takdir etmek; oradan marifet doğar; marifetten muhabbet doğar. Temaşa, takdir, tanıma ve sevme birbirini izler. Sevgi boşlukta kurulamaz. Allah sevgisi de kör bir slogan değildir; O\'nun sanatını, lütfunu, cemalini tanıdıkça derinleşir ve içten bir sevgiye dönüşür.',
      visual_note: 'blooming flower in time-lapse style, progression from bud to full bloom, warm tones',
      keywords: ['flower blooming', 'progression', 'warm tones']
    },
    {
      scene_id: 'scene-023',
      title: 'Huzur ve Hitap Makamı',
      narration: 'Artık delillerden doğrudan muhatabiyete adım atılır. İnsan önce eserleri görür; sonra Müessir\'e geçer. Bu geçiş, ubudiyetin ikinci vechidir. Burada insan ile Rabbinin ilişkisi, farklı tecelliler ve onlara verilen kulluk cevapları üzerinden derinleşir.',
      visual_note: 'light breaking through heavy clouds, dramatic illumination of landscape below',
      keywords: ['light breaking clouds', 'dramatic illumination', 'transcendent moment']
    },
    {
      scene_id: 'scene-024',
      title: 'Allah Bilinmek İster',
      narration: 'Kâinat yaratılmıştır ve bu yaratmanın bir amacı vardır: O\'nun bilinmek istemesi. Sanatının mucizeleriyle kendini tanıtan bir Sanatkâr. İnsanın bu tanıtmaya vereceği cevap imandır ve marifettir. Yani yalnızca inanıyorum değil; tanıyorum, anlıyorum, kalbimle de kabul ediyorum.',
      visual_note: 'intricate architectural detail with light patterns, craftsmanship revealing maker\'s hand',
      keywords: ['architectural detail', 'light patterns', 'craftsmanship']
    },
    {
      scene_id: 'scene-025',
      title: 'Rahmet ile Sevdirmek',
      narration: 'Allah nimetleriyle, şefkatiyle, lütfuyla kendini sevdirmek ister. Bütün bu rahmet tecellileri, insanı O\'na bağlamak içindir. İnsan bu sevdirişe nasıl karşılık verir? Sevgisini dağıtmayarak; kalbin merkezini Allah\'a vererek; kulluğu ve nihai bağlanmayı yalnızca O\'na adayarak.',
      visual_note: 'mother and child in tender embrace, soft warm light, unconditional love',
      keywords: ['tender embrace', 'soft light', 'unconditional love']
    },
    {
      scene_id: 'scene-026',
      title: 'Nimetin Asıl Gayesi',
      narration: 'Nimetin asıl gayesi tüketmek değildir; nimet vereni tanıyıp sevmektir. Rahat ettirmek son hedef değil, sevdirmenin aracıdır. Yemek yerken sadece tatmak değil, ikramı hissetmek; bir güzellikten geçerken sadece zevk almak değil, güzelliğin sahibini hatırlamak; bu büyük bir zihin dönüşümüdür.',
      visual_note: 'table of abundant food with warm light, gratitude atmosphere, shared meal',
      keywords: ['abundant food', 'gratitude meal', 'warm gathering']
    },
    {
      scene_id: 'scene-027',
      title: 'Bütün Hasselerle Şükür',
      narration: 'Şükür yalnızca Elhamdülillah demek değildir. Şükür; davranışla, yaşayış tarzıyla, dil ile ve bütün hasselerle dile gelir. Göz şükreder, kulak şükreder, akıl şükreder, kalp şükreder, beden şükreder. Yanlış kullanım nankörlük, doğru kullanım şükürdür. Şükür, bütün varlığın Allah\'a doğru yönelmesidir.',
      visual_note: 'various senses depicted: listening, seeing, touching nature, symbolic gratitude',
      keywords: ['senses nature', 'gratitude symbols', 'attentive living']
    },
    {
      scene_id: 'scene-028',
      title: 'Celal ve Allahu Ekber',
      narration: 'Kâinatta azamet var; boyutsuz büyüklük, sonsuz genişlik, derin derinlik. Bu azamet karşısında insan Allahu Ekber der. Yani en büyük O\'dur; hiçbir büyük O\'nun büyüklüğüne denk değildir. Azamet insanı ezmez; onu doğru yerine koyar ve orada huzur bulmasını sağlar.',
      visual_note: 'vast canyon or ocean from above, human figure tiny against enormous scale',
      keywords: ['vast canyon', 'tiny human', 'enormous scale']
    },
    {
      scene_id: 'scene-029',
      title: 'Cemal ve Sübhanallah',
      narration: 'Güzellik, mükemmellik, incelik ve sanat karşısında insan Sübhanallah der. Yani her türlü kusurdan münezzehtir. Görünen güzelliklerin asıl kaynağının eksiksiz ve kusursuz olduğunun ifadesidir bu. Her güzellik daha büyük bir güzelliğe işaret eder; her mükemmellik, mutlak mükemmelliğe.',
      visual_note: 'perfect geometric snowflake under magnification, intricate natural design, flawless pattern',
      keywords: ['snowflake macro', 'geometric perfection', 'natural design']
    },
    {
      scene_id: 'scene-030',
      title: 'Secde — Hakikat Bedende',
      narration: 'Zihnin vardığı hakikat, en sonunda bedende secdeye dönüşür. Hakiki marifet bedensiz kalmaz. Baş eğmek, alnı yere koymak; ben bütün bunlardan daha küçüğüm, sen her şeyden daha büyüksün demektir. Zikirler rastgele değil; her biri belirli bir tecellinin cevabıdır.',
      visual_note: 'person in prostration on prayer mat, humble silhouette, soft dawn light',
      keywords: ['prayer prostration', 'humble silhouette', 'dawn light']
    },
    {
      scene_id: 'scene-031',
      title: 'İstemek Kulluktur',
      narration: 'Allah sonsuz zenginliğini, sonsuz rahmetini ve sonsuz imkânını gösteriyor. İnsanın cevabı ne? İhtiyaç duymak, istemek, sual etmek, dua etmek. Birçok insan istemeyi küçüklük sanır. Ama istemek, kul olmanın şerefidir. İhtiyaç utanç değildir; duanın kapısıdır.',
      visual_note: 'hands raised in supplication toward sky, open palm, seeking posture',
      keywords: ['hands raised', 'supplication sky', 'open palm seeking']
    },
    {
      scene_id: 'scene-032',
      title: 'Dünya Sergisi',
      narration: 'Dünya büyük bir sergi gibi kurulmuş: renkler, türler, yüzler, suretler, canlılar ve tabiatın harika sanatları. Bu sergide insan ne yapar? Maşallah der, Barekallah der, Sübhanallah ve Allahu Ekber der. Güzeli gören insan, onu Allah\'a bağlayan bir lisan geliştirir.',
      visual_note: 'colorful natural exhibition: butterflies, flowers, birds, diverse life forms',
      keywords: ['colorful nature', 'diverse life', 'natural exhibition']
    },
    {
      scene_id: 'scene-033',
      title: 'Estetik Duyguyu Anlamla Buluşturmak',
      narration: 'Güzellik karşısında vay be demek başka; o güzelliği Allah\'a bağlamak başkadır. İkinci bakış, insanın estetik duygusunu anlam dünyasına taşır. Güzelliğin sahibi belli olunca, güzellik daha da derinleşir; tüketilecek bir nesne olmaktan çıkar, bir hitabın parçası haline gelir.',
      visual_note: 'person pausing before beautiful painting, deep contemplative gaze, art gallery setting',
      keywords: ['art gallery', 'contemplative gaze', 'deep appreciation']
    },
    {
      scene_id: 'scene-034',
      title: 'Birlik Mührü',
      narration: 'Allah kâinata birlik mührü vurmuştur: her şeyde aynı imza, aynı desen, aynı üslup. Sonsuz çeşitlilik içinde şaşırtıcı bir birlik. Bu birlik damgaları, aynı Sanatkâra işaret eder. Kâinat milyarlarca yerde aynı dili konuşur; bu dil, tevhidin dilidir.',
      visual_note: 'fractal patterns in nature: nautilus shell, fern frond, snowflake — same pattern at different scales',
      keywords: ['fractal nature', 'nautilus shell', 'repeating patterns']
    },
    {
      scene_id: 'scene-035',
      title: 'Tevhide Cevap',
      narration: 'Bu birlik mühürlerine insan nasıl cevap verir? Tasdikle, imanla, tevhidlte, iz\'anla, şehadet ile, ubudiyetle. Allah birdir önce anlaşılır, sonra kabul edilir, sonra içten benimsenir, sonra hayatta yaşanır. Tevhid sadece teorik değil; yaşanan bir hakikattir.',
      visual_note: 'single flame in darkness, unwavering light, symbol of singular truth',
      keywords: ['single flame', 'darkness', 'singular light']
    },
    {
      scene_id: 'scene-036',
      title: 'Hakiki İnsan Olmak',
      narration: 'Bütün bu tefekkür ve ibadet zinciriyle insan hakiki insan olur. İnsan biyolojik olarak insan doğar; ama hakiki insan olmak için bu anlam ve ibadet çizgisine girmesi gerekir. İnsanlık bir tür adı değil, manevî bir seviyedir. Ve insanı bu seviyeye taşıyan şey; kâinatı okuyup Rabbine yönelmektir.',
      visual_note: 'person standing upright at dawn, arms open, light embracing the figure, full stature',
      keywords: ['person dawn', 'open arms', 'full stature light']
    },
    {
      scene_id: 'scene-037',
      title: 'Halife-i Arz — Emanet Liyakati',
      narration: 'İnsanın yeryüzünde halife olması, keyfî egemenlik değildir. Bu halifelik; imanın bereketiyle, emanet bilinciyle, güvenilirlikle yaşanır. Yeryüzünü saltanat gibi değil, emanet gibi görmek; sömürmek için değil, koruyup taşımak için tutmak. Hakiki halifelik, liyakatin adıdır.',
      visual_note: 'hands protecting small seedling in cupped palms, earth visible, gentle stewardship',
      keywords: ['protecting seedling', 'gentle stewardship', 'earth care']
    },
    {
      scene_id: 'scene-038',
      title: 'Dünyanın İki Yüzü',
      narration: 'Dünyanın iki yüzü vardır: biri Allah\'tan ve ahiretten kopuk okunduğunda aldatıcı ve çirkinleşen yüz; diğeri Allah\'a ve anlama bakan, derinleştikçe güzelleşen yüz. Burada dünya kötü değil; dünyanın anlamsız okunuşu çirkindir. Allah\'a bakan yüzüyle dünya, büyük bir nimettir.',
      visual_note: 'same landscape in two lights: one cold and barren, one warm and glowing — contrast of perspective',
      keywords: ['landscape contrast', 'perspective shift', 'warm cold light']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-5-nukte',
    test_day: 'day-23',
    workflow: 'manual_scene_json_single_track_landscape_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
