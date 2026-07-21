// Derin Okuma — 2.Şua - 1.Makam - 3.Meyve landscape video
// n8n Load Input Code node payload

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "2.Şua - 1.Makam - 3.Meyve",
    "description": "Tevhid, insanın akıl, şefkat, sevgi ve ölüm karşısındaki bakışını değiştirir; kalbin geniş arzularını dağınık korkulardan çıkarıp rahmete bağlı bir anlam dünyasına taşır.",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "2-sua-1-makam-3-meyve-insan-tevhidle-neden-kainat-kadar-genisler-landscape-day-57"
  },
  "reuse_existing_audio": {
    "enabled": false,
    "audio_mode": "single_track",
    "audio_track": {
      "mode": "single",
      "path": "",
      "duration_seconds": null
    }
  },
  "reuse_existing_video": {
    "enabled": false,
    "visual_mode": "semantic",
    "video_root": "",
    "path_template": "{scene_id}.mp4"
  },
  "visual_mode": "ambient",
  "audio_strategy": {
    "mode": "single_track",
    "timing_strategy": "elevenlabs_timestamps",
    "join_separator": "\n\n"
  },
  "render_preferences": {
    "mode": "full_video",
    "subtitles_enabled": true,
    "render_mode": "landscape",
    "produce_both": false,
    "background_music_enabled": true,
    "target_aspect_ratio": "16:9",
    "target_resolution": "1920x1080",
    "target_fps": 30,
    "voice_language": "tr"
  },
  "scenes": [
    {
      "scene_id": "scene-001",
      "title": "İnsanın İç Dünyası",
      "narration": "İnsan, sadece nefes alan ve ihtiyaçlarını karşılayan bir varlık değildir. Geçmişe uzanan hatıraları, geleceğe uzanan endişeleri ve sonsuzluğu isteyen arzuları vardır. Bu yüzden insanın huzuru, yalnızca bugünkü rahatlıkla tamamlanmaz.",
      "visual_note": "wide landscape of a person standing on a hill at sunrise, quiet contemplative mood",
      "keywords": [
        "sunrise hill",
        "solitary person",
        "contemplation"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Geniş Kalp, Sınırlı Güç",
      "narration": "İnsanın kalbi çok geniştir; ama eli kısa, gücü sınırlıdır. Sevdiği her şeyin devamını ister, fakat çoğu zaman onları korumaya gücü yetmez. Bu zıtlık, insanı hem çok değerli hem de çok kırılgan yapar.",
      "visual_note": "close shot of hands open toward morning light, calm cinematic nature",
      "keywords": [
        "open hands",
        "morning light",
        "human vulnerability"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Muhtaçlığın Anlamı",
      "narration": "İnsan ihtiyaçlarıyla küçülmez; asıl mesele bu ihtiyaçları nereye bağladığıdır. Kendi sınırlı gücüne dayanırsa, en küçük şey bile ağır bir yüke dönüşebilir. Bütün varlığı idare eden bir kudrete dayanırsa, muhtaçlığı dua ve yöneliş kapısı olur.",
      "visual_note": "quiet room with soft window light and a person in reflective posture",
      "keywords": [
        "window light",
        "reflection",
        "quiet room"
      ]
    },
    {
      "scene_id": "scene-004",
      "title": "Kâinat Kadar Açılan Arzular",
      "narration": "Bir insanın kalbi, yalnızca kendi evine ve gününe sığmaz. Güneşin doğuşundan bir çiçeğin açılışına, sevdiği insanların geleceğinden ölümden sonraki hayata kadar çok geniş bir alana bağlanır. Bu genişlik, doğru anlam bulunmadığında kaygıyı da büyütür.",
      "visual_note": "vast sky over mountains, slow cinematic clouds, expansive horizon",
      "keywords": [
        "vast sky",
        "mountains",
        "horizon"
      ]
    },
    {
      "scene_id": "scene-005",
      "title": "Tevhidin Getirdiği Merkez",
      "narration": "Tevhid, dağınık görünen hayatı tek bir merkeze bağlayan bakıştır. İnsan, varlıkların ayrı ayrı sahipsiz güçlerin elinde olmadığını fark ettiğinde iç dünyasında bir düzen başlar. Kalp, ancak bütün bağlarını taşıyabilecek bir merkeze yaslanınca genişler.",
      "visual_note": "aerial view of river streams joining into one calm river",
      "keywords": [
        "river streams",
        "unity",
        "aerial nature"
      ]
    },
    {
      "scene_id": "scene-006",
      "title": "İnsanın Değeri",
      "narration": "İnsanın değeri sadece bedeniyle ölçülmez. Akıl, şefkat, sevgi, merak ve ebediyet arzusu ona çok geniş bir mahiyet kazandırır. Bu mahiyet, tevhidle yön bulduğunda kâinatla anlamlı bir bağ kurar.",
      "visual_note": "wide shot of a person looking at stars in a clear night sky",
      "keywords": [
        "night sky",
        "stars",
        "human scale"
      ]
    },
    {
      "scene_id": "scene-007",
      "title": "Akıl Bir Pencere",
      "narration": "Akıl, insana sadece hesap yapma imkânı vermez; görünenden öteye bakma penceresi açar. İnsan aklıyla geçmişi hatırlar, geleceği düşünür, varlıkların arkasındaki düzeni arar. Bu büyük nimet, yanlış bakışla büyük bir ağırlığa da dönüşebilir.",
      "visual_note": "person reading near a window, soft daylight, thoughtful atmosphere",
      "keywords": [
        "reading",
        "window",
        "thoughtful"
      ]
    },
    {
      "scene_id": "scene-008",
      "title": "Akıl Yük Olunca",
      "narration": "Varlık başıboş ve sahipsiz görülürse akıl insanı rahatlatmak yerine yorabilir. Geçmişteki ayrılıkları bugüne taşır, gelecekteki ihtimalleri korku hâline getirir. Böylece zamanı genişleten akıl, acıyı da genişletmiş olur.",
      "visual_note": "empty road under cloudy sky, lonely cinematic movement",
      "keywords": [
        "empty road",
        "cloudy sky",
        "loneliness"
      ]
    },
    {
      "scene_id": "scene-009",
      "title": "Akıl Işık Bulunca",
      "narration": "Tevhid ışığında akıl, karanlık bir hesap defteri olmaktan çıkar. Varlıklardaki düzeni, ölçüyü ve rahmeti okumaya başlar. Geçmiş sadece kayıp, gelecek sadece belirsizlik olarak görünmez.",
      "visual_note": "sunlight entering an old library, dust particles, peaceful mood",
      "keywords": [
        "library light",
        "sunbeam",
        "peaceful"
      ]
    },
    {
      "scene_id": "scene-010",
      "title": "Kâinatı Bütün Olarak Görmek",
      "narration": "İman, kâinatı kopuk olayların yığıldığı bir alan gibi göstermez. Her şeyin birbiriyle ilişkili, ölçülü ve anlamlı olduğunu fark ettirir. İnsan bu bütünlüğü gördükçe kendi hayatını da yalnız bir parça olarak değil, büyük bir düzenin içinde okur.",
      "visual_note": "wide view of forest, river, mountains under balanced natural light",
      "keywords": [
        "forest river",
        "mountains",
        "natural order"
      ]
    },
    {
      "scene_id": "scene-011",
      "title": "Şefkatin İnceliği",
      "narration": "Şefkat, insanın en ince duygularından biridir. İnsan yalnız kendi acısını değil, başka canlıların incinmesini de kalbinde hisseder. Bu duygu, insanı katılıktan korur ve varlığa karşı daha derin bir sorumluluk verir.",
      "visual_note": "gentle parent holding a child hand, soft outdoor light",
      "keywords": [
        "parent child",
        "gentleness",
        "compassion"
      ]
    },
    {
      "scene_id": "scene-012",
      "title": "Şefkatin Acıya Dönüşmesi",
      "narration": "Fakat şefkat, sevilenlerin tamamen yok olup gittiği düşüncesiyle birleşirse kalpte ağır bir yara açar. İnsan, korumak istediği varlıkların elinden kayıp gittiğini görür. Sevgiyle karışan merhamet, teselli bulamazsa derin bir hüzne dönüşür.",
      "visual_note": "rain on window glass with blurred silhouette indoors, melancholic calm",
      "keywords": [
        "rain window",
        "silhouette",
        "melancholy"
      ]
    },
    {
      "scene_id": "scene-013",
      "title": "Sahipsiz Değil",
      "narration": "Tevhid, sevilen varlıkların sahipsiz olmadığını kalbe bildirir. Bir annenin yavrusuna duyduğu şefkat, sonsuz rahmetten tamamen kopuk bir his değildir. Kalp, sevdiğini kendi gücüyle koruyamadığında onu daha büyük bir rahmete emanet etmeyi öğrenir.",
      "visual_note": "mother and child walking in soft golden field, gentle cinematic shot",
      "keywords": [
        "mother child",
        "golden field",
        "mercy"
      ]
    },
    {
      "scene_id": "scene-014",
      "title": "Sevginin İmtihanı",
      "narration": "Sevgi insanı büyütebilir; ama yanlış yere bağlanırsa sürekli kaybetme korkusuna dönüşür. İnsan sevdiği şeyin kalmasını ister, güzelliğin solmamasını ister, ayrılığın gelmemesini ister. Fakat dünya, her sevilen şeyin geçiciliğini hatırlatır.",
      "visual_note": "close up of fading flower on table beside soft light",
      "keywords": [
        "fading flower",
        "soft light",
        "impermanence"
      ]
    },
    {
      "scene_id": "scene-015",
      "title": "Sevgi Daralınca",
      "narration": "Her şey yokluğa gidiyor zannedilirse sevgi, kalpte sessiz bir bekleyişe dönüşür. İnsan, sevdiği her varlığın ardından yeni bir ayrılık acısı yaşayacağını düşünür. Böyle bir bakışta muhabbet genişletmez, daraltır.",
      "visual_note": "person alone on seashore at dusk, slow waves, reflective mood",
      "keywords": [
        "seashore",
        "dusk",
        "solitude"
      ]
    },
    {
      "scene_id": "scene-016",
      "title": "Sevgi Genişleyince",
      "narration": "Tevhid sevgiyi kaldırmaz; onu kaynağına bağlar. İnsan, sevdiği güzellikleri sadece kısa ömürleriyle değil, onları var eden rahmetle beraber düşünür. O zaman sevgi, kayıp korkusundan çıkar ve kâinat kadar geniş bir bağa dönüşür.",
      "visual_note": "sunlit meadow with many flowers moving in gentle wind",
      "keywords": [
        "meadow flowers",
        "sunlight",
        "expansive love"
      ]
    },
    {
      "scene_id": "scene-017",
      "title": "Duyguların Yönü",
      "narration": "Akıl, şefkat ve sevgi tek başına insanı kurtarmaz; onların doğru yöne bakması gerekir. Aynı duygu, bir bakışta yük olurken başka bir bakışta kanat olabilir. Tevhid, bu duyguların yüzünü karanlıktan rahmete çevirir.",
      "visual_note": "birds eye view of winding path turning toward bright valley",
      "keywords": [
        "winding path",
        "bright valley",
        "direction"
      ]
    },
    {
      "scene_id": "scene-018",
      "title": "Küçük İnsan, Büyük Alem",
      "narration": "İnsan görünüşte küçüktür; fakat duygularıyla bütün âleme açılır. Bir yıldızı seyreder, bir çiçeği sever, bir çocuğun gözyaşından etkilenir, ölüm üzerine düşünür. Bu yüzden insanın iç âlemi, bedeninden çok daha geniştir.",
      "visual_note": "person silhouette under Milky Way, wide cinematic night landscape",
      "keywords": [
        "milky way",
        "silhouette",
        "inner world"
      ]
    },
    {
      "scene_id": "scene-019",
      "title": "Dar Bakışın Bedeli",
      "narration": "Varlık yalnız maddeye indirgenirse insanın geniş duyguları cevapsız kalır. Akıl anlamsızlığı büyütür, şefkat çaresizliğe döner, sevgi ayrılık korkusuyla incinir. İnsan kendi içindeki genişliği taşıyamaz hâle gelir.",
      "visual_note": "urban crowd blurred around still thoughtful person, muted cinematic look",
      "keywords": [
        "urban crowd",
        "blurred motion",
        "isolation"
      ]
    },
    {
      "scene_id": "scene-020",
      "title": "Dayanılacak Kudret",
      "narration": "İnsanın arzularına cevap verecek olan, yalnız insanı değil, onun bağlı bulunduğu bütün âlemi idare eden kudrettir. Çünkü insanın dilekleri çoğu zaman kâinatın düzeniyle ilişkilidir. Bir kalbin gerçek huzuru, bütün varlığı kuşatan rahmete dayanmakla başlar.",
      "visual_note": "vast ocean horizon with calm waves and soft sunrise",
      "keywords": [
        "ocean horizon",
        "calm waves",
        "sunrise"
      ]
    },
    {
      "scene_id": "scene-021",
      "title": "Ölümün Gölgesi",
      "narration": "Ölüm düşüncesi, insanın en derin sorularından biridir. Sevilenlerin ayrılması, canlıların sönmesi ve zamanın durmadan akması kalpte büyük bir sarsıntı yapabilir. İnsan bu gerçeğe yalnız baktığında dünya ağır bir ayrılık sahnesi gibi görünür.",
      "visual_note": "misty cemetery path at dawn, respectful quiet atmosphere",
      "keywords": [
        "cemetery path",
        "mist",
        "dawn"
      ]
    },
    {
      "scene_id": "scene-022",
      "title": "Dağ Başındaki Bakış",
      "narration": "Bazen insan yüksek bir yerde durup geçmişi ve geleceği aynı anda düşünür. Arkasında ayrılıklar, önünde bilinmezlikler, çevresinde sürekli değişen bir dünya görür. Böyle anlarda kalp, varlığın anlamını daha şiddetli sorar.",
      "visual_note": "person standing on mountain ridge overlooking valleys and clouds",
      "keywords": [
        "mountain ridge",
        "valley clouds",
        "reflection"
      ]
    },
    {
      "scene_id": "scene-023",
      "title": "Geçmişin Görünüşü",
      "narration": "İman ışığı olmadan geçmiş, çoğu zaman kaybedilenlerin toplandığı karanlık bir alan gibi görünür. İnsan, gidenleri geri getiremediği için hatıralar bile bazen acı verir. Zamanın akışı, kalpte bir eksilme duygusu bırakır.",
      "visual_note": "old photographs on wooden table, dim warm light, nostalgic mood",
      "keywords": [
        "old photographs",
        "nostalgia",
        "dim light"
      ]
    },
    {
      "scene_id": "scene-024",
      "title": "Geleceğin Korkusu",
      "narration": "Gelecek de aynı bakışla karanlık bir belirsizlik hâline gelir. Henüz gelmemiş olaylar, insanın zihninde bugünden ağırlık yapmaya başlar. Akıl, ihtimalleri büyütür; kalp, onların altında ezilir.",
      "visual_note": "dark road leading into fog, single distant light, cinematic scene",
      "keywords": [
        "foggy road",
        "distant light",
        "uncertainty"
      ]
    },
    {
      "scene_id": "scene-025",
      "title": "Bakış Değişince",
      "narration": "Tevhid, aynı dünyaya başka bir anlam penceresi açar. Ölüm mutlak yokluk değil, vazifenin bitmesi ve başka bir hayata geçiş olarak anlaşılır. Ayrılık acısı bütünüyle inkâr edilmez; fakat karanlık bir hiçliğe teslim edilmez.",
      "visual_note": "open doorway with bright warm light, calm transition imagery",
      "keywords": [
        "open door",
        "warm light",
        "transition"
      ]
    },
    {
      "scene_id": "scene-026",
      "title": "Terhis Gibi Bir Ayrılış",
      "narration": "Dünyadaki hayat bir vazife alanı olarak düşünülürse ölümün yüzü değişir. Görevini tamamlayan insan, sadece toprağa bırakılmış bir varlık gibi görülmez. Daha geniş bir hayata çağrılan bir yolcu olarak anlaşılır.",
      "visual_note": "quiet train station platform at sunrise, lone traveler silhouette",
      "keywords": [
        "train station",
        "traveler",
        "departure"
      ]
    },
    {
      "scene_id": "scene-027",
      "title": "Mezarın Kapıya Dönüşmesi",
      "narration": "Bu bakışta mezar yalnızca kapanan bir çukur değildir. Gözün ötesinde devam eden bir hayata açılan kapı anlamı kazanır. Kalp, ayrılığın son söz olmadığını hissedince daha derin bir teselli bulur.",
      "visual_note": "stone path leading to a softly lit garden gate, peaceful mood",
      "keywords": [
        "garden gate",
        "stone path",
        "peace"
      ]
    },
    {
      "scene_id": "scene-028",
      "title": "Geçicilik Yenilenme Olunca",
      "narration": "Dünyadaki değişim bütünüyle yok oluş değildir. Bir çiçek gider, başka bir çiçek gelir; bir manzara çekilir, başka bir güzellik görünür. Geçicilik, kalıcı güzelliğin farklı aynalarda yenilenmesi gibi okunur.",
      "visual_note": "time lapse flowers blooming in a field, gentle natural colors",
      "keywords": [
        "blooming flowers",
        "time lapse",
        "renewal"
      ]
    },
    {
      "scene_id": "scene-029",
      "title": "Perdedeki Görüntüler",
      "narration": "Hayat, değişen görüntülerle dolu büyük bir perde gibidir. Sahnedeki şekiller değişir, renkler yer değiştirir, varlıklar gelir ve gider. Fakat bu akış, güzelliğin sürekli tazelenmesine hizmet eder.",
      "visual_note": "cinematic light projection on a white curtain, soft moving shadows",
      "keywords": [
        "light projection",
        "curtain",
        "moving shadows"
      ]
    },
    {
      "scene_id": "scene-030",
      "title": "Kayıp Yerine Şükür",
      "narration": "İnsan her değişimi sadece kayıp olarak görürse kalbi yorulur. Fakat değişimin içinde yenilenmeyi, rahmeti ve hikmeti fark ederse aynı hayat şükür sebebi olur. Dünya değişmez; insanın onu okuma biçimi değişir.",
      "visual_note": "sunlight after rain over green leaves, fresh peaceful atmosphere",
      "keywords": [
        "after rain",
        "green leaves",
        "gratitude"
      ]
    },
    {
      "scene_id": "scene-031",
      "title": "Geçmiş Aydınlanınca",
      "narration": "İman gözüyle geçmiş, yalnızca yokluğa karışmış hatıralardan ibaret kalmaz. Ayrılanların başka bir hayata geçmiş olabileceği düşüncesi, hatırayı karanlıktan çıkarır. Kalp, geçmişe sadece mezarlık gibi değil, aydınlık buluşmaların öncesi gibi bakar.",
      "visual_note": "warm light in an old hallway with open windows, hopeful mood",
      "keywords": [
        "old hallway",
        "warm light",
        "hope"
      ]
    },
    {
      "scene_id": "scene-032",
      "title": "Gelecek Aydınlanınca",
      "narration": "Gelecek de sadece korkuların beklediği kapalı bir alan olmaktan çıkar. Yeni nimetlerin, yeni vazifelerin ve sonsuz hayata uzanan imkânların sahası olur. İnsan belirsizlik içinde bile rahmete dayanmanın sükûnetini taşır.",
      "visual_note": "sunrise over a long path through green hills, hopeful cinematic shot",
      "keywords": [
        "sunrise path",
        "green hills",
        "hopeful"
      ]
    },
    {
      "scene_id": "scene-033",
      "title": "Duygular Susmaz, Yerini Bulur",
      "narration": "Tevhid aklı susturmaz, şefkati azaltmaz, sevgiyi küçültmez. Tam tersine, onların taşıdığı genişliği daha büyük bir anlam dünyasına yerleştirir. İnsan böylece duygularının altında ezilmek yerine onlarla yükselmeyi öğrenir.",
      "visual_note": "person walking through a bright forest path, gentle upward camera movement",
      "keywords": [
        "forest path",
        "bright light",
        "inner growth"
      ]
    },
    {
      "scene_id": "scene-034",
      "title": "Kâinat Kadar Genişlemek",
      "narration": "İnsan tevhidle kâinat kadar genişler; çünkü sevdiği, düşündüğü ve merhamet ettiği şeyleri tek bir rahmet düzeni içinde görmeye başlar. Geçiciliğin içinde yenilenmeyi, ölümün içinde geçişi, sevginin içinde ebediyete açılan bağı fark eder. Küçük hayatı, büyük bir mana ile genişler.",
      "visual_note": "wide golden landscape under expansive sky, peaceful final cinematic shot",
      "keywords": [
        "golden landscape",
        "expansive sky",
        "peaceful ending"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "2-sua-1-makam-3-meyve-insan-tevhidle-neden-kainat-kadar-genisler",
    "test_day": "day-57",
    "run_id": "day57-batch-a",
    "batch_run_id": "day57-batch-a",
    "export_run_id": "day57-batch-a",
    "workflow": "manual_scene_json_single_track_landscape_load_input",
    "content_generation_status": "filled",
    "status": "ready_for_n8n"
  }
};

return [{ json: { raw_input: rawInput } }];
