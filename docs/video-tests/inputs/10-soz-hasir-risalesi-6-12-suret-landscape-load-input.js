// Derin Okuma - 10. Söz - Haşir Risalesi - 6-12. Suret landscape video
// Filled for n8n Load Input Code node.

const rawInput = {
  input_version: "0.1.0",
  input_type: "manual_scene_json",
  runtime: {
    repo_root: "/home/muhammet/projects/scene-blog-video",
    renderer_url: "http://127.0.0.1:8000"
  },
  job: {
    title: "10. Söz - Haşir Risalesi - 6-12. Suret",
    description: "Haşir Risalesi’nin 6-12. Suretleri, dünyanın geçici oluşunu kayıt, vaat, peygamberî haber, bahar dirilişi ve insan fıtratı üzerinden ahiretin gerekliliğine bağlar.",
    language: "tr",
    author: "Muhammet Yahya Ozer",
    job_id_hint: "10-soz-hasir-risalesi-6-12-suret-landscape-day-25"
  },
  reuse_existing_audio: {
    enabled: false,
    audio_mode: "single_track",
    audio_track: {
      mode: "single",
      path: "",
      duration_seconds: null
    }
  },
  reuse_existing_video: {
    enabled: false,
    visual_mode: "semantic",
    video_root: "",
    path_template: "{scene_id}.mp4"
  },
  visual_mode: "ambient",
  audio_strategy: {
    mode: "single_track",
    timing_strategy: "elevenlabs_timestamps",
    join_separator: "\n\n"
  },
  render_preferences: {
    mode: "full_video",
    subtitles_enabled: true,
    render_mode: "landscape",
    produce_both: false,
    background_music_enabled: true,
    target_fps: 30
  },
  scenes: [
    {
      scene_id: "scene-001",
      title: "Geçici Dünya Sorusu",
      narration: "Dünya sürekli değişiyor. Gelen gidiyor, güzellikler yenileniyor, insanlar bir müddet durup ayrılıyor. Bu geçicilik anlamsız bir savrulma değil; daha büyük bir varışın işareti gibi okunmalıdır.",
      visual_note: "busy train station with people arriving and leaving, soft cinematic light",
      keywords: ["train station", "arrival", "departure"]
    },
    {
      scene_id: "scene-002",
      title: "Saltanatın İzleri",
      narration: "Yeryüzünde düzen, sevkiyat, sanat, ikram ve ölçü birlikte görünüyor. Böylesine geniş bir idare, arkasında büyük bir saltanat bulunduğunu düşündürür. Rastgelelik değil, maksatlı bir yönetim hissedilir.",
      visual_note: "aerial view of organized city roads and fields, sunrise, calm movement",
      keywords: ["aerial view", "organized city", "sunrise"]
    },
    {
      scene_id: "scene-003",
      title: "Muhataplı Saltanat",
      narration: "Sanat seyirci ister, ikram muhatap ister, emir cevap ister. İnsan bu muhataplığın en yoğun taşıyıcısıdır. Kâinat yalnız işleyen bir sistem değil, anlam çağıran bir hitap gibidir.",
      visual_note: "person standing in a grand art gallery, quiet observation, warm light",
      keywords: ["art gallery", "observer", "meaning"]
    },
    {
      scene_id: "scene-004",
      title: "Misafirhane",
      narration: "Dünya kalıcı ikamet yeri gibi davranmıyor. Her gün dolar, boşalır; her nesil gelir, bir sonraki nesle yer açar. Bu akış, insanın burada ebedî yerleşmek için bulunmadığını gösterir.",
      visual_note: "old guesthouse corridor with open doors, people passing slowly",
      keywords: ["guesthouse", "open doors", "passing people"]
    },
    {
      scene_id: "scene-005",
      title: "İmtihan Meydanı",
      narration: "Hayat şartları sürekli değişir: beden, mevsim, güç, imkân, çevre ve hâller durmadan yenilenir. Bu değişkenlik bir kusur değil, imtihanın tabiatına uygundur. Sabit saray değil, eğitim ve seçim alanı görünür.",
      visual_note: "wide training field at dawn, changing weather, disciplined atmosphere",
      keywords: ["training field", "dawn", "preparation"]
    },
    {
      scene_id: "scene-006",
      title: "Numuneler",
      narration: "Dünyadaki nimetler asıl hazine değil, numune gibidir. Bir çiçek rahmetin tamamı değil, küçük bir işaretidir. Bir meyve bütün ikramın kendisi değil, daha geniş bir sofraya bakan küçük bir davettir.",
      visual_note: "close up of flower and fruit on a simple table, soft morning light",
      keywords: ["flower", "fruit", "morning light"]
    },
    {
      scene_id: "scene-007",
      title: "Sergi Alanı",
      narration: "Yeryüzü her an yeni bir sergiye dönüşür. Bahar gelir, renkler açılır; sonra aynı sahne kapanır ve başka perde açılır. Sergi geçici olduğuna göre, gösterilen güzelliklerin kalıcı asılları düşünülmelidir.",
      visual_note: "spring garden transforming through seasons, slow cinematic time lapse",
      keywords: ["spring garden", "seasons", "time lapse"]
    },
    {
      scene_id: "scene-008",
      title: "Çalışma ve Ücret",
      narration: "Dünya emeğin tam karşılığının dağıtıldığı yer gibi görünmez. İyiler bazen incinir, kötüler bazen rahat eder. Bu tablo, ücretin tamamen burada verilmediğini; asıl karşılığın başka bir yurda bırakıldığını düşündürür.",
      visual_note: "worker hands in sunlight, empty field, distant horizon, contemplative mood",
      keywords: ["working hands", "sunlight", "horizon"]
    },
    {
      scene_id: "scene-009",
      title: "İstidada Göre Saadet",
      narration: "Ebedî saadet tekdüze bir ödül gibi düşünülmez. İnsanların kabiliyeti, niyeti, inkişafı ve yönelişi farklıdır. Bu yüzden ahiret de ölçülü, hikmetli ve dereceli bir karşılık alanı olarak görünür.",
      visual_note: "mountain path with different elevations, golden light, peaceful perspective",
      keywords: ["mountain path", "levels", "golden light"]
    },
    {
      scene_id: "scene-010",
      title: "Baharın Seferberliği",
      narration: "Bahar rastgele bir canlanma değildir. Ağaçlar vakti gelince çiçek açar, tohumlar ölçüyle uyanır, canlılar rızıklarıyla buluşur. Büyük bir emir ve intizam içinde yeryüzü yeniden hareketlenir.",
      visual_note: "spring trees blooming in order, bees and flowers, gentle cinematic motion",
      keywords: ["spring bloom", "trees", "order"]
    },
    {
      scene_id: "scene-011",
      title: "Kayıt Meselesi",
      narration: "Dünyada hiçbir şey mutlak kaybolup gitmiyor gibi görünür. İzler kalır, tohumlar program taşır, hatıralar korunur, sonuçlar yazılır. Kayıt varsa, o kaydın bir gün açılması ve değerlendirilmesi gerekir.",
      visual_note: "old ledger book, pen writing, soft desk light, solemn mood",
      keywords: ["ledger book", "writing", "record"]
    },
    {
      scene_id: "scene-012",
      title: "Hıfz ve Muhasebe",
      narration: "En küçük ölçüleri koruyan bir düzen, insanın büyük iyilik ve zulümlerini ihmal etmez. Küçüğü kaydeden, büyüğü başıboş bırakmaz. Bu yüzden amel, söz ve niyet boşa akan bir şey değildir.",
      visual_note: "macro shot of seeds arranged precisely, hand writing notes, calm focus",
      keywords: ["seeds", "precision", "record keeping"]
    },
    {
      scene_id: "scene-013",
      title: "Büyük Mahkeme",
      narration: "Dünyada bazı hesapların kapanmamış görünmesi, hesabın yokluğunu göstermez. Belki daha büyük bir mahkemeye bırakıldığını gösterir. Geciken adalet, unutulmuş adalet değildir.",
      visual_note: "empty courtroom with light through high windows, solemn cinematic scene",
      keywords: ["courtroom", "justice", "light"]
    },
    {
      scene_id: "scene-014",
      title: "Fermanlar ve Vaatler",
      narration: "İlahî haberler insanı başka bir yurda hazırlar. Mükâfat ve ceza, cennet ve cehennem, dünyanın değişmesi ve ebedî hayat açıkça bildirilir. Kudret ve izzet sahibi olan, vaadini boşa çıkarmaz.",
      visual_note: "ancient scroll opened on a wooden table, warm light, dignified mood",
      keywords: ["ancient scroll", "promise", "dignity"]
    },
    {
      scene_id: "scene-015",
      title: "Yıkılış Değil Tebdil",
      narration: "Dünya bir gün bozulacaksa, bu anlamsız bir yok oluş değildir. Daha kalıcı bir düzene geçiştir. Ölüm de kıyamet de iptal değil, daha büyük bir nizamın kapısı olarak anlaşılır.",
      visual_note: "storm clouds clearing to bright horizon over mountains, slow reveal",
      keywords: ["storm clouds", "bright horizon", "transformation"]
    },
    {
      scene_id: "scene-016",
      title: "Sözünden Dönmeyen Kudret",
      narration: "Vaadin gerçekleşmemesi ya acizlik ya bilgisizlik ya da sözden dönme anlamına gelir. Bunların hiçbiri ilahî izzet ve kudretle bağdaşmaz. Ahiret vaadi, yalnız mümkün değil; sıdk ve izzet açısından da gereklidir.",
      visual_note: "majestic mountain peak under clear sky, steady cinematic shot",
      keywords: ["mountain peak", "clear sky", "majesty"]
    },
    {
      scene_id: "scene-017",
      title: "Haber Getirenler",
      narration: "Peygamberler ve hakikat ehli, farklı zamanlarda aynı büyük haberi vermiştir: Bu dünya son durak değildir. Sayılarının çokluğu ve haberlerinin birliği, insan aklı için güçlü bir şahitlik oluşturur.",
      visual_note: "silhouettes of travelers on different paths meeting at one horizon",
      keywords: ["travelers", "paths", "testimony"]
    },
    {
      scene_id: "scene-018",
      title: "Asıl Merkez",
      narration: "Dünyada rahmetin izleri var, fakat rahmetin tam yurdu gibi görünmüyor. Adaletin işaretleri var, fakat tam adalet burada yerleşmiyor. Demek ki büyük saltanatın merkezi, geçici ve kararsız zemin üzerinde kurulmuş olamaz.",
      visual_note: "temporary tents in foreground, distant grand palace silhouette, soft sunset",
      keywords: ["temporary tents", "palace", "sunset"]
    },
    {
      scene_id: "scene-019",
      title: "Geçici Zemin",
      narration: "Zevalsiz bir saltanat, sürekli bozulan ve değişen şeyler üzerinde nihai şeklini göstermez. Dünya daha çok işaret, gölge ve hazırlık alanıdır. Asıl tecelli, daha sabit ve kalıcı bir âlemi gerektirir.",
      visual_note: "sand patterns shifting in wind, distant stable mountains, contemplative view",
      keywords: ["shifting sand", "mountains", "stability"]
    },
    {
      scene_id: "scene-020",
      title: "Bahar ve Yeniden İnşa",
      narration: "Her bahar kışın sönmüş sahnesi yeniden kurulur. Toprak canlanır, ağaçlar giyinir, canlılar yerlerine döner. Gözümüzün önündeki bu büyük yenilenme, umumî diriliş fikrini uzak olmaktan çıkarır.",
      visual_note: "spring field after winter, trees blooming, fresh sunlight, slow movement",
      keywords: ["spring field", "renewal", "sunlight"]
    },
    {
      scene_id: "scene-021",
      title: "Sinema Perdeleri",
      narration: "Kâinat sabit bir tablo değil, perde perde açılan bir gösteri gibidir. Her saat başka yüzler, başka hâller, başka sahneler görünür. Fakat değişim dağınık değildir; hızlı ve çokluklu akışın içinde şaşırtıcı bir düzen vardır.",
      visual_note: "cinematic projector light, changing nature scenes, calm abstract montage",
      keywords: ["projector light", "changing scenes", "order"]
    },
    {
      scene_id: "scene-022",
      title: "Karışıklık İçinde İntizam",
      narration: "Milyonlarca tür, sayısız fert, doğumlar, ölümler ve eşzamanlı hareketler karışık görünebilir. Fakat her şey ölçüyle yürür. Çokluk ve hız, nizamı gizlemez; aksine onu daha parlak gösterir.",
      visual_note: "large flock of birds moving in harmony, aerial nature patterns, cinematic",
      keywords: ["bird flock", "harmony", "patterns"]
    },
    {
      scene_id: "scene-023",
      title: "Büyük Tebdil Yakın",
      narration: "Koca dünyanın başka bir şekle çevrilmesi akla uzak gelebilir. Fakat her yıl yeryüzünde bunun küçük misalleri yaşanır. Baharın toplu diriltmesi, büyük dönüşümün imkânsız olmadığını göz önüne koyar.",
      visual_note: "time lapse of barren land turning green, wide landscape transformation",
      keywords: ["barren land", "green landscape", "time lapse"]
    },
    {
      scene_id: "scene-024",
      title: "Büyük Masraf Kısa Sahneye Sığmaz",
      narration: "İnsana verilen akıl, duygu, sevgi, korku, umut ve ebediyet arzusu yalnız birkaç yıllık dünya için fazla büyüktür. Büyük hazırlık küçük bir gösteri için olamaz. Bu sermaye daha uzun ve daha kalıcı bir hayatı gösterir.",
      visual_note: "person looking at vast night sky, open notebook, thoughtful atmosphere",
      keywords: ["night sky", "notebook", "human longing"]
    },
    {
      scene_id: "scene-025",
      title: "Dünya Bir Ön Gösterim",
      narration: "Hayattaki sahneler kendi başına nihai hedef değildir. Güzellikler öğreten bir numune, ayrılıklar uyandıran bir ders, nimetler daha büyük sofraya çağıran bir işaret gibidir. Dünya hem ciddidir hem de asıl yurdu haber verir.",
      visual_note: "small theater stage opening to a vast landscape beyond, symbolic cinematic view",
      keywords: ["theater stage", "vast landscape", "symbol"]
    },
    {
      scene_id: "scene-026",
      title: "Sahnelerin Sonucu",
      narration: "Yaşananlar sadece olup bitmez; suretleri, neticeleri ve izleri korunur. İnsan geçip gitse de yaptığı seçimler kalır. Dünya, sahnelerin oynandığı ve sonuçların başka yerde açılmak üzere kaydedildiği bir alandır.",
      visual_note: "film reels and written pages on desk, soft light, archive atmosphere",
      keywords: ["film reel", "archive", "records"]
    },
    {
      scene_id: "scene-027",
      title: "Hikmetin Eksik Kalmaması",
      narration: "Dünyada hikmet görünür: canlılar gayeli, organlar ölçülü, olaylar neticeli yaratılır. Fakat birçok sonuç yarım kalır. Hikmetin tam manası, neticenin de tamamlanacağı başka bir âlemi ister.",
      visual_note: "macro leaf veins and flowing river, balanced natural composition",
      keywords: ["leaf veins", "river", "wisdom"]
    },
    {
      scene_id: "scene-028",
      title: "Merhametin Tamamlanması",
      narration: "Merhamet yeryüzünde açıkça görünür; ihtiyaçlara cevap verilir, rızık gönderilir, zayıflar korunur. Fakat ölüm, ayrılık ve eksiklik hâlâ vardır. Merhametin yarım kalmaması, ebedî bir ikram yurdunu gerektirir.",
      visual_note: "hands giving food and care, warm compassionate light, close up",
      keywords: ["helping hands", "care", "mercy"]
    },
    {
      scene_id: "scene-029",
      title: "Adaletin Yüksek Yeri",
      narration: "Dünya adaletin işaretlerini taşır, fakat tam adalet burada yerleşmiş görünmez. Haklar bazen alınmadan, zulümler tam karşılık bulmadan hayat biter. Bu eksiklik, büyük bir adalet mahallini zaruri kılar.",
      visual_note: "scales of justice in quiet room, strong window light, solemn mood",
      keywords: ["justice scales", "solemn light", "rights"]
    },
    {
      scene_id: "scene-030",
      title: "İnkârın Bedeli",
      narration: "Ahireti reddetmek yalnız öbür hayatı reddetmek değildir. Hikmeti sonuçsuz, merhameti yarım, adaleti boşa çıkmış kabul etmeye zorlar. Bu yüzden mesele bir ihtimal tartışmasından çok, görünen düzenin anlamını koruma meselesidir.",
      visual_note: "person standing between bright order and dark chaos, symbolic contrast",
      keywords: ["contrast", "order", "meaning"]
    },
    {
      scene_id: "scene-031",
      title: "İnsanın Cihazları",
      narration: "İnsana akıl, hafıza, vicdan, hayal, sevgi, korku, umut ve ebediyet arzusu verilmiştir. Bu cihazlar birkaç günlük geçim için fazla geniştir. İnsan, dünya ölçeğini aşan bir hayat için hazırlanmış gibidir.",
      visual_note: "close up of thoughtful face, books and stars reflected, cinematic mood",
      keywords: ["thoughtful face", "books", "stars"]
    },
    {
      scene_id: "scene-032",
      title: "Cüzdan ve Vazife",
      narration: "İnsanın elindeki hayat programı ona rütbe, vazife, sorumluluk ve yön gösterir. Kulluk, marifet, şükür ve ahlak bu programın parçalarıdır. Talimat varsa, görev de vardır; görev varsa, sonuç da olmalıdır.",
      visual_note: "small notebook with compass and map, soft desk light, journey mood",
      keywords: ["notebook", "compass", "mission"]
    },
    {
      scene_id: "scene-033",
      title: "Arzuların Ölçeği",
      narration: "İnsan tam bilgi, tam güven, kalıcı sevgi, kusursuz güzellik ve ölmemek ister. Bu arzular dünya ölçeğine sığmaz. Yanlış verilmiş değiller; daha büyük bir hayatın fıtrî delilleri olarak okunmalıdır.",
      visual_note: "person by ocean horizon at dusk, calm longing, vast sky",
      keywords: ["ocean horizon", "longing", "vast sky"]
    },
    {
      scene_id: "scene-034",
      title: "Tarla, Talimgâh, Pazar",
      narration: "Dünya tarla gibidir; ekim burada, hasat sonra olur. Talimgâh gibidir; insan burada hazırlanır. Pazar gibidir; alışveriş yapılır, değerler seçilir, fakat kimse burada ebedî kalmaz.",
      visual_note: "farmer field, training ground, marketplace details blended in calm montage",
      keywords: ["field", "training ground", "marketplace"]
    },
    {
      scene_id: "scene-035",
      title: "Vahyin Son Şahitliği",
      narration: "Kâinatın işaretlerine vahyin haberi de eklenir. Peygamberin doğruluğu ve Kur’an’ın benzersizliği, ahiret haberini daha güçlü kılar. Akıl, kâinat, fıtrat ve haber aynı yöne bakar.",
      visual_note: "open Quran-inspired book silhouette, dawn sky, reverent peaceful mood",
      keywords: ["sacred book", "dawn", "reverence"]
    },
    {
      scene_id: "scene-036",
      title: "Ortak Sonuç",
      narration: "Dünya geçicidir; fakat geçiciliği anlamsızlık değil, imtihan oluşundandır. Her şey kaydedilir, vaatler bildirilir, bahar dirilişi gösterir, insanın arzuları daha büyük bir hayata uzanır. Haşir yalnız mümkün değil; hikmetli, gerekli ve ilahî saltanatın gereğidir.",
      visual_note: "wide sunrise over calm sea and mountains, peaceful final horizon",
      keywords: ["sunrise", "calm sea", "final horizon"]
    }
  ],
  metadata: {
    source: "derin-okuma",
    blog_post: "10-soz-hasir-risalesi-6-12-suret",
    test_day: "day-25",
    workflow: "manual_scene_json_single_track_landscape_load_input",
    content_generation_status: "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
