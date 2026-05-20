// Derin Okuma — 21. Söz - 1. Makam landscape video
// Day-28 — filled by Claude

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Namaz Neden Ağır Gelir? Nefsin Beş Büyük Aldanışı',
    description: 'İnsan namazın güzel ve doğru olduğunu bildiği hâlde neden düzenli ibadet hayatı kurmakta zorlanır? Nefsin beş büyük aldanışını inceleyen derin bir tefekkür.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '21-soz-1-makam-landscape-day-28'
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
      title: 'Açılış',
      narration: 'İnsan bazen bir şeyin güzel ve değerli olduğunu bilir; ama onu hayatına düzenli biçimde yerleştirmekte zorlanır. Dışarıdan çelişkili görünen bu durum, aslında insanlığın en eski ve en tanıdık gerilimlerinden biridir.',
      visual_note: 'Quiet morning courtyard, soft golden light filtering through wooden lattice, slow cinematic movement.',
      keywords: ['morning light', 'courtyard', 'quiet reflection']
    },
    {
      scene_id: 'scene-002',
      title: 'Tekrar eden itiraz',
      narration: 'Namazı ağır hisseden insanın itirazı çoğu zaman namazın kendisine değil, onun her gün tekrarlanmasına yöneliktir. "İyi ama her gün bu kadar kez, hem de ömür boyu..." Bu itiraz bugün de çok tanıdıktır. Birçok insan ibadeti değil, ibadetin sürekliliğini zor bulur.',
      visual_note: 'Person sitting by a window at dusk, contemplating, calm urban scene outside, soft fading light.',
      keywords: ['contemplation', 'window', 'dusk', 'solitude']
    },
    {
      scene_id: 'scene-003',
      title: 'Nefsin kendi sesi',
      narration: 'İnsan bazen kendi kanaati sandığı düşüncelerin aslında nefsin ürettiği sesler olduğunu fark edemez. Çünkü bu ses içeriden gelir. Kendi zihninin sesiyle bir dış eleştiriyi ayırt etmek her zaman kolay değildir. Fark edilmesi gereken şudur: İnsanın içindeki gevşeklik ve erteleme eğilimi de bir düşüncenin formunu alabilir.',
      visual_note: 'Person walking slowly through a dim corridor, introspective mood, long shadows on stone floor.',
      keywords: ['inner reflection', 'corridor', 'shadows', 'introspection']
    },
    {
      scene_id: 'scene-004',
      title: 'Kendi içine bakmak',
      narration: 'Başkasını düzeltmeye çalışmadan önce, insanın kendi içindeki hangi düşüncenin onu yanılttığını görmesi gerekir. En yakın muhatap çoğu zaman başkası değil, kendi iç dünyasındaki gevşeklik, erteleme ve bıkkınlık eğilimidir. Değişim, buradan başlar.',
      visual_note: 'Calm river surface reflecting overcast sky, stillness and depth, wide angle slow movement.',
      keywords: ['river reflection', 'stillness', 'introspection', 'calm water']
    },
    {
      scene_id: 'scene-005',
      title: 'Vakte bağlanmış kulluk',
      narration: 'Namaz, insanın boş vakti olunca yapacağı bir tercih değildir. O, hayatın vakit düzenine yerleştirilmiş bir görevdir. Bu ayrım çok önemlidir. Çünkü "uygun vakit bulunca" yaklaşımıyla hayata giren ibadet, zamanla sürekli ertelenen ve yerini kaybeden bir şeye dönüşür.',
      visual_note: 'Mosque minaret at golden hour, warm amber sky, prayer time visible through changing light angle.',
      keywords: ['minaret', 'golden hour', 'prayer time', 'sacred space']
    },
    {
      scene_id: 'scene-006',
      title: 'Hayat namazdan şekillenir',
      narration: 'Doğru denge şudur: Hayat namaza göre şekillenir; namaz, hayatın artıklarına göre değil. Bugün yaşanan en büyük kopuşlardan biri de burada başlıyor. İnsan işini, yorgunluğunu, gündemini merkeze yerleştiriyor; ibadete ise geri kalanı bırakıyor.',
      visual_note: 'Prayer rug in a quiet room, warm afternoon light through sheer curtains, simple and clean setting.',
      keywords: ['prayer rug', 'quiet room', 'afternoon light', 'simplicity']
    },
    {
      scene_id: 'scene-007',
      title: 'Birinci İkaz: Ömür algısı',
      narration: 'İnsanı ibadetten uzaklaştıran birinci büyük aldanış, ömür algısıyla ilgilidir. İnsan ölümün gerçek olduğunu inkâr etmez. Fakat günlük hayatını kurarken ölümü hesaba katmaz. Aklı ölüme inanır; ama planları sanki uzun ve garanti edilmiş bir ömür varmış gibi kurulur.',
      visual_note: 'Empty wooden bench in an autumn park, fallen leaves, distant bare trees, moody overcast light.',
      keywords: ['autumn park', 'empty bench', 'fallen leaves', 'passing time']
    },
    {
      scene_id: 'scene-008',
      title: 'Ebediyet vehmi',
      narration: 'İşte bu yüzden namazı usandırıcı hissettiren şey, çoğu zaman namazın kendisi değildir. Asıl sebep, insanın burada hep kalacakmış gibi yaşama vehminin içine yerleşmiş olmasıdır. İnsan ömrünü gerçekten kısa, kırılgan ve belirsiz hissetse; günün küçük bir dilimini ebediyet hesabına ayırmak bu kadar ağır gelmezdi.',
      visual_note: 'Hourglass with flowing sand on a stone windowsill, soft natural light, slow focus pull, close-up.',
      keywords: ['hourglass', 'time passing', 'sand', 'impermanence']
    },
    {
      scene_id: 'scene-009',
      title: 'Küçük vakit, büyük anlam',
      narration: 'Bir gün düşünüldüğünde, namaza ayrılan toplam vakit yirmi dört saatin küçük bir dilimidir. Nefis bunu olduğundan büyük gösterir. Oysa bu kısa dilim, içinde büyük bir anlam taşır. Sorun vaktin çok gitmesi değildir; insanın az bir vakti bile ebediyet hesabına ayırmakta zorlanmasıdır.',
      visual_note: 'Close-up of antique wall clock hands, slow movement, warm amber tones, shallow depth of field.',
      keywords: ['clock hands', 'time', 'antique', 'warm tones']
    },
    {
      scene_id: 'scene-010',
      title: 'Zaman ve öncelik',
      narration: 'Bugün bir insan saatlerce içeriklere bakabilir, onlarca video izleyebilir, aynı şeyleri tekrar tekrar kontrol edebilir. Ama birkaç dakikalık bir ibadet vakti geldiğinde bunu fazla veya zor görebilir. Bu açıkça gösterir ki sorun çoğu zaman zaman azlığı değil; vaktin ve ömrün yanlış değerlendirilmesidir.',
      visual_note: 'Person scrolling through phone in dimly lit room, reflected blue light on face, late night atmosphere.',
      keywords: ['smartphone', 'blue light', 'late night', 'distraction']
    },
    {
      scene_id: 'scene-011',
      title: 'Birinci İkaz\'ın özü',
      narration: 'Namazın ağırlığını konuşmadan önce, insanın kendi ömrünü nasıl gördüğünü konuşmak gerekir. Çünkü ebediyet vehmi, ibadeti ağırlaştıran en gizli aldanışlardan biridir. İnsan burada geçici olduğunu gerçekten hissedebilse, az bir vakti ebediyet için ayırmak çok farklı görünürdü.',
      visual_note: 'Sunlight streaming through old arched window in a stone hall, dust particles floating, timeless mood.',
      keywords: ['arched window', 'sunlight', 'stone hall', 'timeless']
    },
    {
      scene_id: 'scene-012',
      title: 'İkinci İkaz: Tekrar anlamsızlık mı?',
      narration: 'Nefsin çok sık kullandığı bir mantık vardır: Her gün yapılan şey bıktırır. Bu mantık yaygındır. Fakat çok basit bir soruyla çözülür: İnsan her gün yer, her gün su içer, her gün nefes alır. Bu tekrar onu usandırıyor mu?',
      visual_note: 'Bread and clear water on a simple wooden table, natural daylight, minimalist essential setting.',
      keywords: ['bread and water', 'simple table', 'daylight', 'essential needs']
    },
    {
      scene_id: 'scene-013',
      title: 'Tekrar, ihtiyacın işaretidir',
      narration: 'Ekmek yemek, su içmek, nefes almak tekrar eder. Ama tekrar ettiği için değersiz olmaz. Tersine, tekrar ediyor olması o şeyin ihtiyaç olduğunu gösterir. Çünkü insan bir şeye ne kadar muhtaçsa, ona o kadar sık döner. Tekrar, anlamsızlığın değil; zorunlu ihtiyacın işaretidir.',
      visual_note: 'Mountain stream flowing continuously over smooth stones, gentle constant movement, lush green surroundings.',
      keywords: ['mountain stream', 'flowing water', 'nature', 'continuity']
    },
    {
      scene_id: 'scene-014',
      title: 'Kalbin gıdası',
      narration: 'Namaz da bu çerçevede ele alınabilir. Kalbin de aç kalabileceği, ruhun da susuz kalabileceği, insanın en ince ve en yüksek tarafının da manevî havasızlık yaşayabileceği hatırlanırsa; namaz salt bir görevin ötesinde, derinden duyulan bir ihtiyacın karşılanması olarak görülür.',
      visual_note: 'Green garden at sunrise, morning dew on grass, birds arriving, serene and alive, warm first light.',
      keywords: ['sunrise garden', 'morning dew', 'birds', 'renewal']
    },
    {
      scene_id: 'scene-015',
      title: 'Beden sağlığı ve ruh sağlığı',
      narration: 'Bugün beden sağlığı çok ciddiye alınıyor. İnsan ne yiyeceğini, nasıl uyuyacağını, hangi vitamini alacağını araştırıyor. Fakat ruhun nasıl beslendiği, kalbin ne ile dirildiği çoğu zaman aynı ciddiyetle ele alınmıyor. Sonuçta görünürde yaşayan ama içeride daralmış insanlar ortaya çıkıyor.',
      visual_note: 'Person running outdoors at dawn, wide landscape, physical vitality contrasted with inner emptiness suggestion.',
      keywords: ['outdoor running', 'dawn', 'physical fitness', 'vitality contrast']
    },
    {
      scene_id: 'scene-016',
      title: 'Manevi havasızlık',
      narration: 'Sürekli uyaran, sürekli haber, sürekli ekran, sürekli meşguliyet içinde ruh boğulmaktadır. Bu boğulma çoğu zaman fark edilmez; çünkü dışarıdan bakıldığında insan aktiftir, meşguldür, hayatta görünür. Fakat içeride bir daralma, bir yorgunluk, bir tatminsizlik yavaş yavaş birikir.',
      visual_note: 'Crowded city street at rush hour, blurred motion, noise and chaos, one still figure among the crowd.',
      keywords: ['crowded city', 'rush hour', 'urban noise', 'still figure']
    },
    {
      scene_id: 'scene-017',
      title: 'Namazın penceresi',
      narration: 'Namaz burada salt bir emir değil; insanın yeniden nefes alabilmesinin kapısıdır. O kapı açıldığında insan sadece bir görevi yerine getirmiş olmaz. Bütün o birikmiş meşguliyetin içinde kısa ama derin bir nefes alır.',
      visual_note: 'Open window in quiet room overlooking a green valley, curtain moving gently in breeze, peaceful stillness.',
      keywords: ['open window', 'green valley', 'gentle breeze', 'peace']
    },
    {
      scene_id: 'scene-018',
      title: 'Üçüncü İkaz: Sabır ve zaman',
      narration: 'Üçüncü büyük aldanış sabır meselesiyle ilgilidir. İnsan çoğu zaman yalnızca bugünkü ibadetin altında ezilmez. Asıl ağır gelen şey, zihninde taşıdığı bütün zaman yüküdür.',
      visual_note: 'Heavy backpack resting on a mountain trail, symbolic burden, misty forest path stretching ahead.',
      keywords: ['backpack', 'mountain trail', 'burden', 'misty forest']
    },
    {
      scene_id: 'scene-019',
      title: 'Geçmişi ve geleceği bugüne yığmak',
      narration: 'Geçmiş eksikler, gelecekteki süreklilik korkusu, "hep böyle mi devam edecek?" duygusu, "önceden de yapamamıştım" düşüncesi... Bütün bunlar bugünün üzerine yığıldığında, bugünün küçük vazifesi bile ezici görünür. Oysa insan sadece bu güne ait yükü taşımak zorundadır.',
      visual_note: 'Person sitting alone at a crossroads, roads stretching back to the past and forward to the future, soft light.',
      keywords: ['crossroads', 'past and future', 'burden', 'solitary figure']
    },
    {
      scene_id: 'scene-020',
      title: 'Sabrı yanlış yerde harcamak',
      narration: 'İnsan sabır kuvvetini geçmişin pişmanlığına ve geleceğin endişesine dağıtırsa, bugünkü vazifesine karşı dayanıksız kalır. Bu durum, kuvvetlerini yanlış yere gönderen ve düşman merkezi boş bırakarak uzak cephelerde güç tüketen bir komutana benzer.',
      visual_note: 'Chess pieces mid-game with an exposed king, strategic mistake visible, dramatic side lighting.',
      keywords: ['chess pieces', 'strategy', 'exposed position', 'dramatic light']
    },
    {
      scene_id: 'scene-021',
      title: 'Bugüne ait yük, bugüne ait güç',
      narration: 'İnsandan ömür boyu tek parçada sabır istenmiyor. Ondan sadece şu anın vazifesine dönük bir sadakat isteniyor. Eğer sabır kuvveti dün ve yarın arasında dağıtılmazsa, bugün için gereken güç eksiksiz kalır. "Gücüm yok" diyenin çoğu zaman gücü vardır; ama o güç başka yerlerde harcanmaktadır.',
      visual_note: 'Single candle flame burning steadily in a dark room, focused and unwavering, stillness and clarity.',
      keywords: ['candle flame', 'dark room', 'steady light', 'focused energy']
    },
    {
      scene_id: 'scene-022',
      title: 'Dördüncü İkaz: İbadetin neticesi',
      narration: 'Dördüncü büyük aldanış ibadetin neticesiyle ilgilidir. "Bu ibadetin bana somut olarak ne kazandırıyor?" Bu, çağımızın en tanıdık sorularından biridir. İnsan yaptığı her şeyin hemen hissedilir ve ölçülebilir bir karşılığını görmek ister.',
      visual_note: 'Empty balance scale on stone table, one side heavy and one side illuminated, symbolic.',
      keywords: ['balance scale', 'symbolic weight', 'illuminated side', 'judgement']
    },
    {
      scene_id: 'scene-023',
      title: 'Ebedî hayat hesabı',
      narration: 'Namaz, sadece bugünkü psikolojiye veya görünür faydaya hapsolmaz. İnsan yalnızca bugünden ibaret bir varlık değildir. Kabir, mahşer ve ebedî hayat da hesaba katıldığında, namazın neticesi hiç küçümsenemez. Kabir karanlığında ışık, hesap yerinde belge, sırat üzerinde destek olacak bir amelin neticesi büyüktür.',
      visual_note: 'Long tunnel with a warm distant light at the end, metaphorical journey toward light, cinematic low-key.',
      keywords: ['long tunnel', 'distant light', 'metaphorical journey', 'hope']
    },
    {
      scene_id: 'scene-024',
      title: 'Dünyalık için sabır, ebedilik için gevşeklik',
      narration: 'İnsan dünyada küçük ücretler için büyük zahmetlere katlanır. İşini kaybetmemek, birini memnun etmek veya maddi bir kazanç elde etmek için nice ağır yüklere sabreder. Fakat geçici vaatlere bu kadar ciddiyet gösterirken, sonsuzu kapsayan vaade karşı gevşek davranıyorsa; sorun namazın ağırlığında değil, kalbin değer sıralamasındadır.',
      visual_note: 'Worker carrying heavy materials under harsh sunlight, labor and strain, versus a figure resting in shade.',
      keywords: ['hard labor', 'sunlight', 'effort', 'contrast of priorities']
    },
    {
      scene_id: 'scene-025',
      title: 'Kıymet ölçüsünün bozulması',
      narration: 'Küçük ve geçici menfaatler için ciddiyet gösterirken, sonsuz değerdeki vaade karşı gevşek davranmak; asıl mesele namazın ağır olmasında değil, kalbin kıymet sıralamasının bozulmasındadır. Bu bozulma fark edildiğinde, hem sorun hem de çözüm aynı anda görünür hale gelir.',
      visual_note: 'Old weighing scale tipping disproportionately with small coins, symbolic value imbalance, dark warm tones.',
      keywords: ['weighing scale', 'coins', 'disproportionate', 'value imbalance']
    },
    {
      scene_id: 'scene-026',
      title: 'Beşinci İkaz: Dünya meşgalesi bahanesi',
      narration: 'Beşinci büyük aldanış dünya meşgalesiyle ilgilidir. İbadetteki gevşekliğin gerçekten dünya işlerinin çokluğundan mı kaynaklandığı sorulabilir. Peki insanın "dünya işleri" dediği şeylerin ne kadarı gerçekten zaruri, ne kadarı gerçekten kendisine ait, ne kadarı gerçekten gerekli olan şeylerdir?',
      visual_note: 'Cluttered desk with scattered papers, laptop, coffee cups, endless to-do lists, overwhelming busyness.',
      keywords: ['cluttered desk', 'busy life', 'overload', 'overwhelming tasks']
    },
    {
      scene_id: 'scene-027',
      title: 'Tali meşguliyetler',
      narration: 'Modern insanın en büyük sorunlarından biri, asli vazifelerini ihmal edip tali bilgi ve meşguliyetlerle dağılmasıdır. Saatlerce haber akışı, sosyal medya, yorumlar, tartışmalar, faydası sınırlı meraklar... Bunlar insanın zihnini doldurur, ama ruhunu beslemez. Sanki binlerce yıl yaşayacakmış gibi en lüzumsuz konularla vakit geçirilir.',
      visual_note: 'Pile of colorful magazines and endless screen notifications, visual noise and information overload, digital era.',
      keywords: ['information overload', 'digital noise', 'distraction', 'modern life']
    },
    {
      scene_id: 'scene-028',
      title: 'Sırf dünya için mi?',
      narration: 'Bütün vaktini dünyaya harcayan insan için şu soru sorulabilir: Sırf dünya için mi yaratıldın? İnsan yalnızca geçim sağlayan bir organizma değildir. Yalnızca çalışan, kazanan, yorulan bir beden değildir. Bütün hayatın merkezine sadece dünyayı yerleştirmek, insanın kendi mahiyetini eksik okumaktır.',
      visual_note: 'Person at a hilltop crossroads between a city skyline and a vast open sky horizon, dramatic light.',
      keywords: ['crossroads', 'city vs open horizon', 'existential choice', 'dramatic sky']
    },
    {
      scene_id: 'scene-029',
      title: 'On dakikalık kazı misali',
      narration: 'Az bir kazanç için çalışırken biri size "on dakika şurayı kaz, çok kıymetli bir taş bulacaksın" dese; sırf o on dakikadaki küçük kayıp yüzünden bunu reddetmek akılcı olur mu? Namaz için de benzer bir hesap kurulabilir. İnsan dünya nafakası için çalışırken, namaza ayıracağı kısa vakti kayıp gibi görür. Oysa bu kısa vakit, çok büyük bir kazancın kapısıdır.',
      visual_note: 'Hands carefully digging in rich soil, discovering a glowing gemstone, warm earthy tones, symbolic treasure.',
      keywords: ['digging soil', 'gemstone discovery', 'treasure', 'unexpected value']
    },
    {
      scene_id: 'scene-030',
      title: 'Bereket hesabı',
      narration: 'Modern insan çoğu zaman kuru verim hesabı yapar. Fakat bazı vakitler kısa görünür ama çok büyük kapılar açar. Bereket, kuru verim hesabına girmeyen bir gerçektir. Namaz, vakti bereketlendiren bir merkezdir; namazla geçen zaman diliminin çevresindeki vakitlere de bir genişlik ve kolaylık gelir.',
      visual_note: 'Wheat field at harvest time, golden grains in abundance, wide angle soft morning light, blessing of harvest.',
      keywords: ['wheat field', 'harvest abundance', 'golden light', 'blessing']
    },
    {
      scene_id: 'scene-031',
      title: 'İki maden: Emek ve niyet',
      narration: 'Dünya işi ile ibadet birbirinin alternatifi değildir. Doğru niyet ve namaz ile dünyadaki helâl emeğin manevî kazanca dönüşmesi mümkündür. Yetiştirilen her bitki, yapılan her iş; güzel bir niyetle, yalnızca dünyalık bir ürün olmaktan çıkar ve daha derin bir anlama kavuşur.',
      visual_note: 'Farmer tending to plants in warm morning light, hands in soil, care and intention visible, sunrise.',
      keywords: ['farmer', 'plants', 'morning light', 'intention and care']
    },
    {
      scene_id: 'scene-032',
      title: 'Çalışma ulvîleşir',
      narration: 'Namazdan kopuk çalışma yalnızca dünya hesabına dönebilir. Namazla bağ kuran çalışma ise hem dünyalık hem uhrevî kazanç üretir. Namaz çalışmayı azaltmaz; tersine çalışmaya anlam ve derinlik katar. Bu yüzden ibadet ile emek, birbirinin rakibi değil; birbirini tamamlayan iki kaynaktır.',
      visual_note: 'Craftsman working with focused hands in a sunlit workshop, purposeful dignified labor, tools and craft.',
      keywords: ['craftsman', 'workshop', 'focused work', 'purposeful labor']
    },
    {
      scene_id: 'scene-033',
      title: 'Gerçek ömür bugündür',
      narration: 'Dün geçti, yarın henüz gelmedi. Elinde yalnızca içinde bulunduğun gün var. İnsan bunu gerçekten hissedebilse, ibadet de erteleme değil; bugüne ait bir hak olarak görülürdü. Hakiki ömür, içinde bulunduğun gündür.',
      visual_note: 'Single tree in open field at the golden moment of sunset, solitary presence, wide quiet landscape.',
      keywords: ['single tree', 'sunset', 'solitary presence', 'present moment']
    },
    {
      scene_id: 'scene-034',
      title: 'Ebediyet için ihtiyat akçesi',
      narration: 'Günün bir saatini, ruhun ve ebedî hayatın ihtiyat akçesi gibi düşünmek mümkündür. İnsan dünya geleceği için nasıl birikim yapıyorsa, ebedî hayat için de günlük bir pay ayırabilir. Bu bakış açısından namaz, vakit kaybı değil; ebediyet yatırımıdır.',
      visual_note: 'Small savings jar filling with coins over time, consistent deposits, metaphor for long-term spiritual investment.',
      keywords: ['savings jar', 'long-term investment', 'small deposits', 'future value']
    },
    {
      scene_id: 'scene-035',
      title: 'Her yeni gün yeni bir âlem',
      narration: 'Her yeni gün, insana yeni bir âlemin kapısını açar. O âlemin tonu ve rengi, insanın kalbine, ameline ve yönelişine göre değişir. Aynı dış dünya, farklı iç dünyalardan farklı görünür. İnsan kalbiyle, niyetiyle ve amelleriyle kendi gününü başka bir âlem hâline getirir.',
      visual_note: 'Dawn breaking over mountain horizon, new light each morning, changing colors at sunrise, timelapse mood.',
      keywords: ['dawn over mountains', 'new day', 'changing light', 'renewal']
    },
    {
      scene_id: 'scene-036',
      title: 'Namazın lambası',
      narration: 'Namaz, insanın günlük âlemini aydınlatan bir anahtar gibidir. Dünya karmaşık, yorucu ve boğucu görünürken; namaz o karışıklığın ardındaki hikmeti ve manayı kalbe göstermeye başlar. Gün aynı gündür; ama onu okuyan kalp değişmiştir.',
      visual_note: 'Turning on a lamp in a dim room, sudden warm golden glow spreading, books and objects revealed in light.',
      keywords: ['lamp turned on', 'warm glow', 'dim room illuminated', 'revelation']
    },
    {
      scene_id: 'scene-037',
      title: 'Kusurlu namaz bırakılmaz',
      narration: 'İnsan bazen kendi namazını küçümser. Dikkati dağılır, huşû eksikliği hisseder ve "benimkinden ne olacak?" diye düşünebilir. Fakat şunu hatırlatmak gerekir: Küçük bir çekirdek ile olgunlaşmış ağaç arasında öz bakımından bir kopukluk yoktur; fark derinlik farkıdır.',
      visual_note: 'Small seed resting beside a tall tree on forest floor, scale contrast, growth and potential, natural light.',
      keywords: ['seed and tree', 'growth contrast', 'potential', 'natural light']
    },
    {
      scene_id: 'scene-038',
      title: 'Zayıf de olsa, bırakma',
      narration: 'Nefis bazen kusuru bahane edip ibadeti tamamen terk ettirmek ister. Oysa zayıf da olsa, dağınık da olsa; o namazda yine hakikatten bir sır taşınmaktadır. Mükemmel olmadığın için bırakma. Çünkü çekirdek küçüktür ama ağacın hakikatini taşır.',
      visual_note: 'Small plant pushing through cracked dry soil, resilience and persistence, warm sunlight from above.',
      keywords: ['plant breaking through soil', 'resilience', 'persistence', 'warm light']
    },
    {
      scene_id: 'scene-039',
      title: 'Beş büyük aldanışın özeti',
      narration: 'Namazın ağır gelmesi çoğu zaman namazın kendisinden değil; nefsin zamanı, ihtiyacı, sabrı, kazancı ve dünyayı yanlış değerlendirmesinden kaynaklanır. İnsan ömrünü uzun sanır, tekrar eden ihtiyacın değerini kavrayamaz, sabrını geçmiş ve gelecekte tüketir, ibadetin neticesini küçümser, dünya meşgalesini gereğinden fazla büyütür.',
      visual_note: 'Five winding roads converging at a single bright central point, aerial view, metaphor of five illusions.',
      keywords: ['five roads', 'convergence', 'aerial perspective', 'clarity']
    },
    {
      scene_id: 'scene-040',
      title: 'Kapanış',
      narration: 'Namaz yalnızca bir görev değildir. O, kalbi besleyen, ruhu dirilten, sabrı toplayan, zamanı nurlandıran, emeği bereketlendiren ve insanın günlük âlemini aydınlatan merkezî bir ibadettir. Bu gerçeği fark eden insan için ibadet, hayatın yüküne eklenen bir ağırlık değil; hayatı taşımanın kaynağı hâline gelir.',
      visual_note: 'Wide peaceful landscape at sunset, lone person standing still looking at the horizon, serene and resolved.',
      keywords: ['peaceful landscape', 'sunset', 'solitude', 'resolved spirit']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '21-soz-1-makam',
    test_day: 'day-28',
    workflow: 'manual_scene_json_single_track_landscape_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
