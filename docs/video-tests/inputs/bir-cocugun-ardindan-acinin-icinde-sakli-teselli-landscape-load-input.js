// Derin Okuma — Bir Çocuğun Ardından: Acının İçinde Saklı Teselli landscape video
// Filled for Day-30 n8n Load Input.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Bir Çocuğun Ardından: Acının İçinde Saklı Teselli',
    description: 'Bir çocuğu kaybetmek dünyadaki en ağır acılardan biridir. Bu video, o acıyı küçümsemeden farklı bir yerden anlamlandırmaya çalışıyor. Evlat zindandan saraya mı gitmiştir? Ayrılık gerçekten sonsuz mudur? Ve bu sevgi kalbi nasıl taşır?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'bir-cocugun-ardindan-acinin-icinde-sakli-teselli-landscape-day-30'
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
      title: 'Acının Ağırlığı',
      narration: 'İnsan, sevdiği birini kaybettiğinde kalbi paramparça olur. Bu acıya dünya dilinde hiçbir söz yeterli gelmiyor gibi görünür. Ama acının en yoğun olduğu yerde, kalbe farklı bir kapı aralanır. O kapının ardında sadece teselli değil; daha derin bir hakikat durur.',
      visual_note: 'Empty bench in a quiet autumn park, falling leaves, soft grey light, melancholic calm.',
      keywords: ['empty bench', 'autumn leaves', 'grief', 'solitude']
    },
    {
      scene_id: 'scene-002',
      title: 'Evlat Kaybının Yükü',
      narration: 'Evlat kaybı, yaşanabilecek en ağır acılardan biridir. İnsan bu acıda bazen dilsiz kalır. Ağıt da dökemez, kelime de bulamaz. Gözyaşı bile yetersiz hissettiriyor.',
      visual_note: 'Hands clasped together in quiet grief, dim warm light, close-up, human pain.',
      keywords: ['clasped hands', 'grief', 'quiet pain', 'dim light']
    },
    {
      scene_id: 'scene-003',
      title: 'Acıyı Tanıyan Teselli',
      narration: 'Büyük acıyı hafifletmenin yolu onu inkâr etmek değildir. Gerçek teselli, önce acıyı tanır; sonra ona başka bir yerden bakmayı öğretir. Ve iman, insana işte tam burası için bambaşka bir bakış sunar.',
      visual_note: 'Person sitting in silence at a window, soft interior light, muted daylight outside, reflective mood.',
      keywords: ['silent reflection', 'window light', 'grief acceptance', 'quiet room']
    },
    {
      scene_id: 'scene-004',
      title: 'Rıza ve Teslimiyet',
      narration: 'Kadere rıza, teslimiyetsiz bir boyun eğiş değildir. Hayatın hakikatini gören ve o hakikatin içinde ayakta duran bir kalpliktir. İnsan başına gelen her şey gelişigüzel değildir; her kayıp, her ayrılık bir hikmet taşır.',
      visual_note: 'Still mountain lake reflecting sky and clouds, perfect calm, deep serenity.',
      keywords: ['calm lake', 'reflection', 'serenity', 'acceptance']
    },
    {
      scene_id: 'scene-005',
      title: 'Çocuk Yok Olmadı',
      narration: 'Küçük yaşta hayatını kaybeden bir çocuk, bu dünyadan silinmez. Yalnızca bu geçici mekânı terk eder. Varlığı sona ermez; yolculuğu devam eder. Anne babanın kalbinde açtığı yer hep dolu kalır, çünkü o sevgi boşa gitmez.',
      visual_note: 'Small white flowers in morning dew on green grass, innocence and gentle life, soft light.',
      keywords: ['white flowers', 'morning dew', 'innocence', 'gentle light']
    },
    {
      scene_id: 'scene-006',
      title: 'Ebedî Çocuklar',
      narration: 'İnanç geleneğine göre ergenlik çağına ulaşmadan vefat eden çocuklar, cennette sevimli ve taze bir hâlde kalırlar. Onlar için \'ebedî çocuklar\' ifadesi kullanılır. Anne babası onları orada bulduğunda, o tazelik ve saflık kaybolmamış olacaktır.',
      visual_note: 'Golden light pouring through a garden gate, flowers in full bloom, radiant and hopeful.',
      keywords: ['garden gate', 'golden light', 'paradise', 'flowers blooming']
    },
    {
      scene_id: 'scene-007',
      title: 'Sevgi Ahirette de Sürer',
      narration: 'Peki ya anne babanın çocuğuna duyduğu sevgi? Ahirette sona mı erer? Hayır. Tam aksine, o sevgi orada en saf ve en lezzetli hâliyle karşılık bulur. Dünyadaki evlat sevgisi güzeldir; ama orada çok daha derin bir buluşma bekledir.',
      visual_note: 'Warm light streaming through tall ancient trees, hands reaching toward each other, reunion.',
      keywords: ['reunion', 'warm light', 'ancient trees', 'reaching hands']
    },
    {
      scene_id: 'scene-008',
      title: 'Sevginin Saf İadesi',
      narration: 'Dünyadaki evlat sevgisinin bir sınırı vardır. Çocuk büyür, hayat değişir; bazen yollar ayrılır. Fakat iman gözüyle bakıldığında, çocuğuna duyduğun derin sevgi orada hiç eksilmeden, aksine katlanarak iade edilecektir.',
      visual_note: 'Gentle river flowing endlessly through green trees, peaceful journey, natural flow.',
      keywords: ['flowing river', 'peaceful journey', 'endless flow', 'nature']
    },
    {
      scene_id: 'scene-009',
      title: 'Zindan Temsili',
      narration: 'Şimdi bir düşünce deneyi yapalım. Bir insanın zindan içinde olduğunu hayal et. Şartlar ağır, belirsizlik büyük. Yanında da sevdiği küçük çocuğu var. İkisi birlikte bu ağır ortamda yaşamaya çalışıyor.',
      visual_note: 'Dark narrow stone corridor with dim light at the far end, symbolic confinement, heavy walls.',
      keywords: ['dark corridor', 'stone walls', 'dim light', 'confinement']
    },
    {
      scene_id: 'scene-010',
      title: 'Çift Acı',
      narration: 'Adam hem kendi sıkıntısını çekiyor hem de çocuğunun o ortamda kalmasına içi yanıyor. Zindan yalnızca kendisi için zorsa belki katlanabilir. Ama çocuğunu da o zorluğun içinde görmek, acıyı ikiye katlar.',
      visual_note: 'Protective shadow over a small figure, parent and child silhouette, sombre and tender, muted tones.',
      keywords: ['parent child silhouette', 'protection', 'sombre light', 'tender moment']
    },
    {
      scene_id: 'scene-011',
      title: 'Merhametli Hâkim',
      narration: 'Bir gün merhametli bir hâkim gelir. Çocuğa bakar ve şunu söyler: Bu çocuk her ne kadar senin evladın olsa da, nihayetinde benim hükmüm altındadır. Onu alıp güzel bir saraya götüreceğim. Orada iyi bakılacak, iyi yetiştirilecek.',
      visual_note: 'Gate opening to a bright sunlit courtyard, dark passage leading to warm light, transformation.',
      keywords: ['open gate', 'bright courtyard', 'dark to light', 'transformation']
    },
    {
      scene_id: 'scene-012',
      title: 'İlk Direniş',
      narration: 'Adam ilk anda itiraz eder. Benim tesellim olan evladımı vermem, der. Zindanın tüm ağırlığına rağmen çocuğu yanında tutmak ister. Çünkü çocuk, orada tek sevinç kaynağıdır. Onu vermek, kalan son ışığı söndürmek gibi hissettiriyor.',
      visual_note: 'Hand holding a flickering candle in darkness, last light, fragile comfort, protective gesture.',
      keywords: ['candle in darkness', 'last light', 'holding on', 'fragile comfort']
    },
    {
      scene_id: 'scene-013',
      title: 'Arkadaşların Sözü',
      narration: 'Ama arkadaşları adama gerçeği gösterir. Çocuğu düşünüyorsan, zindanda kalmak mı daha hayırlıdır, yoksa güzel bir saraya gitmek mi? Eğer kendini düşünüyorsan; çocuk burada kalsa sana kısa ve belirsiz bir teselli verir. Ama uzakta olsa, sana çok daha büyük bir fayda sağlayabilir.',
      visual_note: 'Two paths diverging in a forest, warm sunlight visible on one path, calm choice moment.',
      keywords: ['two paths', 'forest', 'choice', 'sunlight ahead']
    },
    {
      scene_id: 'scene-014',
      title: 'Temsilin Anlamı',
      narration: 'Bu temsil, kaybın hakikatini farklı bir yerden anlatıyor. Zindan bu geçici dünyayı, güzel saray ise sonsuz rahmetin genişliğini temsil eder. Anne baba çocuğunu kendi şefkatinin içinde tutmak ister. Ama çocuğun gerçek mekânı, onu yaratan rahmetin katlarındadır.',
      visual_note: 'Wide aerial view of a lush palace garden, sweeping greenery and light, vastness and beauty.',
      keywords: ['palace garden', 'aerial view', 'vastness', 'green beauty']
    },
    {
      scene_id: 'scene-015',
      title: 'Emanet Hakikati',
      narration: 'Anne baba sever, büyütür, korur ve emek verir. Ama çocuğu dünyaya getiren değillerdir; yalnızca ona bakanlardır. Çocuğun varlığı, hayatı ve ruhu; başından beri onu yoktan var eden sonsuz bir kudretin elindeydi.',
      visual_note: 'Newborn hand grasping an adult finger, trust and dependence, soft warm light, fragile life.',
      keywords: ['newborn hand', 'trust', 'dependence', 'soft light']
    },
    {
      scene_id: 'scene-016',
      title: 'Sahiplik Yanılgısı',
      narration: 'İnsan sahiplenmeyi sever. Benim çocuğum, benim yetiştirdiğim, benim sevgimin ürünü... Bu his güçlüdür ve güzel bir yere kadar güzeldir. Ama acı geldiğinde, sahipliğin sınırları da görünür hâle gelir. Çünkü asıl sahip hiçbir zaman biz değildik.',
      visual_note: 'Open palm releasing sand grains, letting go, gentle wind outdoors, natural release.',
      keywords: ['open palm', 'letting go', 'sand releasing', 'gentle wind']
    },
    {
      scene_id: 'scene-017',
      title: 'Şefkat Nimettir',
      narration: 'Anne babanın çocuğa verdiği bakım, hizmet ve sevgi karşılıksız değildir. Dünyada bu hizmetin lezzetli bir karşılığı verilir. İnsan bu nimeti tanımalı ve şükürle tutmalıdır. Şefkat bir yük değil; insana bahşedilmiş bir nimettir.',
      visual_note: 'Mother gently holding infant, golden morning light, warmth and tenderness, intimate family scene.',
      keywords: ['mother infant', 'tender moment', 'golden light', 'family warmth']
    },
    {
      scene_id: 'scene-018',
      title: 'Emanet Geri Alındığında',
      narration: 'O emanet geri alındığında, insan tüm hükmü yalnızca kendi dar duygusuyla vermemelidir. Çünkü bu ayrılık, nihayetsiz bir rahmet sahibinin hükmüdür. İnsan bunu kavradığında, isyanın yerini farklı bir teslim alabilir.',
      visual_note: 'Leaf detaching from a branch in autumn, gentle fall, natural cycle, acceptance of release.',
      keywords: ['leaf falling', 'autumn cycle', 'natural release', 'acceptance']
    },
    {
      scene_id: 'scene-019',
      title: 'Sonsuz Rahmetin Kucağı',
      narration: 'Sonsuz rahmet sahibinin inayetine alınan bir çocuk, karanlığa gitmemiştir. Tam tersine, nihayetsiz bir şefkatin kollarına uzanmıştır. Benim şefkatim sınırlıdır, ama onu alana getiren rahmet sınırsızdır.',
      visual_note: 'Light rays breaking through dark clouds, divine illumination, hope after storm, dramatic sky.',
      keywords: ['light through clouds', 'divine light', 'hope after storm', 'dramatic sky']
    },
    {
      scene_id: 'scene-020',
      title: 'Kalbin Tutamağı',
      narration: 'Bu düşünce, kalbin en karanlık anlarında bir tutamak işlevi görür. Acı dağılmaz; fakat insanı yutmaz da. Çünkü artık o acının arkasında anlaşılmaz bir karanlık değil, anlaşılmak için sabır gerektiren bir hikmet vardır.',
      visual_note: 'Person alone on a cliff edge, vast dark ocean below, small distant light on the horizon.',
      keywords: ['cliff edge', 'vast ocean', 'distant light', 'solitude']
    },
    {
      scene_id: 'scene-021',
      title: 'Dünya Misafirhane',
      narration: 'Eğer dünya ebedî olsaydı, kimse hiç gitmeyecek olsaydı; o zaman her ayrılık gerçekten sonsuz ve telafi edilemez olurdu. Ama dünya böyle değildir. Dünya bir misafirhanedir; herkes bir süre kalır, sonra yoluna devam eder.',
      visual_note: 'Traveler with a bag walking through an inn corridor, transience and movement, warm but impermanent.',
      keywords: ['traveler', 'inn corridor', 'transience', 'movement']
    },
    {
      scene_id: 'scene-022',
      title: 'Kimse Kalıcı Değil',
      narration: 'Hiçbir misafir, misafirhanede sonsuza kadar kalmaz. Bu hakikati taşıyan kalp için ayrılıklar farklı bir anlam kazanır. Çünkü bu, bir son değil; yolculuğun bir bölümünün tamamlanmasıdır.',
      visual_note: 'Inn at night with warm windows, traveler at the door, simple shelter, temporary home.',
      keywords: ['inn at night', 'traveler', 'warm windows', 'temporary shelter']
    },
    {
      scene_id: 'scene-023',
      title: 'Önce Gidenler',
      narration: 'Giden çocuk nereye gitmişse, anne baba da aynı yolun yolcusudur. Ayrılık gerçektir; fakat kalıcı değildir. O sadece önce gitmiştir. Aynı yola çıkılacak, aynı kapıya varılacak.',
      visual_note: 'Two paths merging at the horizon, sunlit road ahead, journey toward reunion, warm golden tones.',
      keywords: ['paths merging', 'horizon', 'journey', 'reunion']
    },
    {
      scene_id: 'scene-024',
      title: 'Ayrılık Geçicidir',
      narration: 'Ayrılık, ebedî değildir. Bu kısa cümle, tesellinin kalbinde durur. İnsanın içindeki en büyük acı çoğu zaman \'bir daha asla\' duygusudur. Bu duyguya karşı duran hakikat ise şudur: Ayrılık geçicidir. Buluşma ümidi gerçektir.',
      visual_note: 'Sunlight breaking at dawn over still water, end of darkness, soft gold horizon, new beginning.',
      keywords: ['dawn', 'still water', 'new beginning', 'gold horizon']
    },
    {
      scene_id: 'scene-025',
      title: 'O Verdi, O Aldı',
      narration: 'Ve insan bu anlayışa ulaştığında, kalbinde tek bir kabul kalır: O verdi, O aldı. Bu soğuk bir teslimiyet değildir. Her şeyin gerçek sahibini tanıyan bir kalbin, O\'nun hükmüne yaslanmasıdır. Acının içinde bile bir dayanma noktası bulmaktır.',
      visual_note: 'Hands open upward in surrender, soft light from above, quiet acceptance, spiritual gesture.',
      keywords: ['open hands', 'surrender', 'light from above', 'acceptance']
    },
    {
      scene_id: 'scene-026',
      title: 'Sabrın Hakikati',
      narration: 'Sabır yalnızca susmak değildir. Acıyı inkâr etmek ya da sanki hiçbir şey olmamış gibi davranmak da değildir. Sabır; acıyı taşırken ayakta durabilmektir. Kalbin parçalanmasına rağmen Rabbine bağlı kalmayı başarabilmektir.',
      visual_note: 'Tree in storm, branches bending but roots holding firm, endurance and resilience, grey sky.',
      keywords: ['tree in storm', 'roots holding', 'endurance', 'resilience']
    },
    {
      scene_id: 'scene-027',
      title: 'Şefkat Güçlü Bir Yoldur',
      narration: 'Anne babanın çocuğuna duyduğu sevgi, kalbin en derin duygularından biridir. Bu sevgi, kalbi Allah\'a taşıyabilecek güçlü bir yoldur. Çünkü çocuğa duyulan şefkat insanı sorgulamaya iter: Bu sevginin kaynağı nedir? Bu güzel hissin asıl sahibi kim?',
      visual_note: 'Parent gazing at sleeping child, soft lamp light, wonder and love, quiet night.',
      keywords: ['parent watching child sleep', 'wonder', 'lamp light', 'quiet night']
    },
    {
      scene_id: 'scene-028',
      title: 'Şefkat Aşktan Keskin',
      narration: 'Şefkat, aşktan daha derin bir yol olabilir. Aşk çoğu zaman karşılık bekler; şefkat ise verir ve beklemez. İnsan bu derinlikte sevildiğini fark ettiğinde, kalbinde başka bir kapı açılır.',
      visual_note: 'Sunlight warming ancient stone wall, quiet depth, timeless tenderness, warmth without demand.',
      keywords: ['warm stone', 'sunlight', 'ancient wall', 'quiet tenderness']
    },
    {
      scene_id: 'scene-029',
      title: 'Dünyanın Faniliği',
      narration: 'Dünya fanidir. Bu cümle çok duyulmuştur; ama hissedilmesi bambaşka bir şeydir. Çocuğunu kaybeden bir anne baba, bu faniliği kelimelerle değil, tüm kalbiyle yaşar. Ve işte tam bu yaşayış, fânî olana olan bağlılığı sarsabilir.',
      visual_note: 'Fading flower petals on still dark water, beauty and impermanence, transience of all things.',
      keywords: ['fading flowers', 'still water', 'impermanence', 'beauty fading']
    },
    {
      scene_id: 'scene-030',
      title: 'Kalbin Bağlanacağı Yer',
      narration: 'Kalbin bütünüyle fânî dünyaya bağlanması, sonsuz bir sevginin yanlış bir yere yönelmesidir. Fânî olan tutamaz, tatmin edemez. Kalbin gerçekten sükûn bulacağı yer, sonsuza yönelen bir bağlılıktır.',
      visual_note: 'Compass on open map, pointing toward an unknown horizon, direction and purpose, cinematic mood.',
      keywords: ['compass', 'open map', 'direction', 'purpose']
    },
    {
      scene_id: 'scene-031',
      title: 'İman ve Gaflet Arasındaki Fark',
      narration: 'İman ile gaflet arasındaki fark, belki en net olarak ölüm karşısında görülür. Gaflet ölümü yokluk gibi görür. Bu yüzden acı dayanılmaz olur; çünkü anlam da birlikte gidiyor gibi hissedilir.',
      visual_note: 'Dark empty room with a single window casting light inward, loss and absence, stillness.',
      keywords: ['empty room', 'single window', 'light and dark', 'absence']
    },
    {
      scene_id: 'scene-032',
      title: 'İman Gözüyle Geçiş',
      narration: 'İman ise ölümü farklı bir gözle okur. Ölen, yokluğa değil başka bir varoluşa geçer. Bu bakış değişince, acı aynı kalsa bile taşınabilir hâle gelir.',
      visual_note: 'Narrow stone passage leading to warm open light, threshold between spaces, transition ahead.',
      keywords: ['stone passage', 'threshold', 'warm light ahead', 'transition']
    },
    {
      scene_id: 'scene-033',
      title: 'Rahmetle Karşılanan Çocuk',
      narration: 'İman gözüyle bakıldığında, küçük yaşta vefat eden bir çocuk; fânî dünyadan alınmış ve sonsuz rahmetin koruması altına girmiştir. Karanlık değil, nurla karşılanan bir geçiştir bu.',
      visual_note: 'Sunlit open meadow with gentle breeze, child\'s perspective of vast world, innocence and light.',
      keywords: ['sunlit meadow', 'vast world', 'innocence', 'gentle breeze']
    },
    {
      scene_id: 'scene-034',
      title: 'Şefaatçi Evlat',
      narration: 'O çocuk, ahirette anne babasına şefaatçi olacaktır. Hem ebedî bir evlat olacak, hem de o sevgiyi en temiz formunda taşıyarak bekleyecektir. Dünyadaki kaybın, ahiretteki buluşmaya dönüşmesidir bu. Bir son değil; daha güzel bir başlangıç.',
      visual_note: 'Two silhouettes meeting at a bright horizon, arms outstretched, joyful reunion, golden light.',
      keywords: ['reunion silhouettes', 'golden horizon', 'outstretched arms', 'meeting again']
    },
    {
      scene_id: 'scene-035',
      title: 'Ayrılık Geçici, Sevgi Ebedî',
      narration: 'Ayrılık geçicidir. Acı büyüktür; ama sonsuz değildir. Çocuk kaybolmamıştır; sadece önce gitmiştir. Ve kalp, bu hakikate tutunduğunda acı içinde bile bir ışık bulur. Çünkü sevgi burada bitmez; asıl buluşma ileridedir.',
      visual_note: 'Lone lighthouse in vast dark sea at dusk, small but steady light, beacon of hope in darkness.',
      keywords: ['lighthouse', 'vast sea', 'dusk', 'beacon of hope']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: 'bir-cocugun-ardindan-acinin-icinde-sakli-teselli',
    test_day: 'day-30',
    workflow: 'manual_scene_json_single_track_landscape_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
