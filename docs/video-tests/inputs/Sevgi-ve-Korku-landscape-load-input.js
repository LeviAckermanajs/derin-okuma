// Derin Okuma — 30.Söz - 1.Maksad - Mukaddime landscape video
// Filled for day-48; paste into the n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Benlik Kâinatı Nasıl Açan Bir Anahtar Olur?",
    "description": "İnsana verilen benlik duygusu, doğru okunduğunda sınırlı olandan sonsuz kudret, ilim ve malikiyete açılan bir ölçüye dönüşür. Yanlış kullanıldığında ise insanı kendi içine kapatan bir perde olur.",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "Sevgi-ve-Korku-landscape-day-48"
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
    "target_fps": 30
  },
  "scenes": [
    {
      "scene_id": "scene-001",
      "title": "Ben Dediğimizde",
      "narration": "İnsan her gün sayısız kez ‘ben’ der. Ben düşündüm, ben yaptım, benim evim, benim hayatım… Peki bu küçük kelime yalnızca kişiliğimizi mi anlatır, yoksa varlığı anlamak için verilmiş daha derin bir ölçü müdür?",
      "visual_note": "solitary person facing a mirror at dawn, contemplative cinematic light",
      "keywords": [
        "mirror reflection",
        "solitary person",
        "dawn light"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Hassas Bir Emanet",
      "narration": "Benlik, insanın kendisini fark etmesini sağlayan hassas bir emanettir. Doğru kullanılırsa kapıları açan bir anahtar olur; kendi başına mutlaklaştırılırsa görüşü kapatan ağır bir kilide dönüşür.",
      "visual_note": "antique key resting on an open palm, soft dramatic lighting",
      "keywords": [
        "antique key",
        "open palm",
        "soft light"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Sınırlı İnsan",
      "narration": "İnsanın bilgisi, gücü ve ömrü sınırlıdır. Buna rağmen sonsuzluk, mutlak bilgi ve sınırsız kudret hakkında düşünür. Sınırlı bir varlığın sınırsız olanı nasıl anlayacağı, benliğin asıl vazifesini gösterir.",
      "visual_note": "small human silhouette beneath a vast starry sky, wide cinematic shot",
      "keywords": [
        "starry sky",
        "human silhouette",
        "vast universe"
      ]
    },
    {
      "scene_id": "scene-004",
      "title": "Ölçü Olarak Benlik",
      "narration": "İnsan kendisindeki küçük ölçülerle daha büyük hakikatleri kavramaya yaklaşır. Bir damlanın denize işaret etmesi gibi, cüz’î bilgi de her şeyi kuşatan ilmin ne demek olduğunu sezdirir.",
      "visual_note": "single water drop falling into a calm ocean, macro slow motion",
      "keywords": [
        "water drop",
        "calm ocean",
        "macro"
      ]
    },
    {
      "scene_id": "scene-005",
      "title": "Küçük Bir Düzen",
      "narration": "Bir insan odasını düzenler, masasının yerini seçer ve yaptığı işe bir amaç verir. Kendi dar alanındaki bu düzenleme tecrübesiyle, yeryüzündeki ölçülü ve hikmetli düzeni okumaya başlar.",
      "visual_note": "person arranging a simple study room, warm daylight, orderly space",
      "keywords": [
        "organized room",
        "study desk",
        "warm daylight"
      ]
    },
    {
      "scene_id": "scene-006",
      "title": "İlim İçin Bir Pencere",
      "narration": "İnsan birkaç şeyi bilir; bildiklerini de öğrenerek kazanır. Bu sınırlı bilgi, gökyüzünden hücreye kadar her şeyi aynı anda bilen sonsuz bir ilmi kuşatamaz, fakat ona açılan bir pencere olabilir.",
      "visual_note": "researcher observing cells then looking at galaxies, seamless cinematic transition",
      "keywords": [
        "microscope",
        "galaxy",
        "knowledge"
      ]
    },
    {
      "scene_id": "scene-007",
      "title": "Kudreti Anlamak",
      "narration": "Elimizle küçük bir ağırlığı kaldırır, kısa bir yolu yürür, sınırlı bir işi tamamlarız. Kendi gücümüzün sınırını gördükçe, sayısız varlığı birlikte idare eden kudretin büyüklüğünü daha açık fark ederiz.",
      "visual_note": "hands lifting a small stone against a mountain landscape",
      "keywords": [
        "hands",
        "small stone",
        "mountain"
      ]
    },
    {
      "scene_id": "scene-008",
      "title": "Sahiplik Hissi",
      "narration": "İnsan ‘benim’ diyerek bir sınır çizer: benim bedenim, benim evim, benim emeğim. Bu geçici sınır, hakiki sahiplik iddiası için değil; bütün mülkün gerçek sahibini anlayabilmek için verilmiş bir karşılaştırma çizgisidir.",
      "visual_note": "person drawing a temporary line in sand beside an endless shore",
      "keywords": [
        "line in sand",
        "endless shore",
        "ownership"
      ]
    },
    {
      "scene_id": "scene-009",
      "title": "Hayalî Çizgi",
      "narration": "Haritadaki sınırlar toprağın içine kazınmış gerçek duvarlar değildir; anlamak ve ayırmak için çizilir. Benliğin sahipliği de böyledir: farazî bir çizgi olarak işe yarar, mutlak gerçek sayıldığında yanıltır.",
      "visual_note": "old map with delicate boundary lines, slow camera movement",
      "keywords": [
        "old map",
        "boundary lines",
        "navigation"
      ]
    },
    {
      "scene_id": "scene-010",
      "title": "İşaretin Vazifesi",
      "narration": "Bir yol levhası kendisine bakılsın diye değil, gidilecek yönü göstersin diye vardır. Benlik de kendisinde durulacak son nokta değildir. Kendi sınırlarını göstererek insanı sınırsız olana yöneltir.",
      "visual_note": "road sign pointing toward a bright distant horizon, quiet landscape",
      "keywords": [
        "road sign",
        "bright horizon",
        "direction"
      ]
    },
    {
      "scene_id": "scene-011",
      "title": "Ayna Gibi",
      "narration": "Ayna ışığı üretmez; yalnızca kendisine ulaşan ışığı yansıtır. İnsan da kendisindeki güzellikleri bağımsız kaynağı sanmadığında, onları veren isim ve sıfatların izlerini göstermeye başlar.",
      "visual_note": "mirror reflecting sunlight into a dim room, peaceful atmosphere",
      "keywords": [
        "mirror",
        "sunlight",
        "reflection"
      ]
    },
    {
      "scene_id": "scene-012",
      "title": "İki Ayrı Bakış",
      "narration": "Benliğe iki türlü bakılabilir. İlki onu bir işaret, bir ölçü ve bir emanet olarak görür. İkincisi ise benliği bağımsız bir merkez, kendi kendisinin sahibi ve hâkimi sayar.",
      "visual_note": "forked path in a misty forest, one side bright and one side shadowed",
      "keywords": [
        "forked path",
        "misty forest",
        "light shadow"
      ]
    },
    {
      "scene_id": "scene-013",
      "title": "Hayra Bakan Yüz",
      "narration": "İnsan varlığı, hayatı ve nimetleri çoğu zaman hazır bulur. Kalbin atışını başlatmadığı, güneşi doğurmadığı, toprağı yaratmadığı hâlde bunlardan faydalanır. Hayra bakan yüz, üretmekten çok kabul etmeyi ve şükretmeyi öğrenir.",
      "visual_note": "person receiving morning sunlight in a green field, grateful calm posture",
      "keywords": [
        "morning sunlight",
        "green field",
        "gratitude"
      ]
    },
    {
      "scene_id": "scene-014",
      "title": "Nimetin Kaynağı",
      "narration": "Bir meyvenin sofraya gelişi, insanın tek başına kuramayacağı geniş bir düzen ister. Toprak, su, güneş ve mevsimler birlikte çalışır. Benlik bu ağı gördüğünde, ‘ben kazandım’ iddiasından ‘bana ikram edildi’ şuuruna geçer.",
      "visual_note": "fresh fruit on a table transitioning to orchard rain and sunlight",
      "keywords": [
        "fresh fruit",
        "orchard",
        "sun and rain"
      ]
    },
    {
      "scene_id": "scene-015",
      "title": "Şerre Açılan Taraf",
      "narration": "Yanlış tercih, inkâr ve nankörlük insana ait sorumluluk alanında ortaya çıkar. Benlik kendisini merkeze aldığında, aldığı nimetleri sahiplenir; hatalarının yükünü ise başkalarına vermek ister.",
      "visual_note": "person standing at a dark crossroads, subtle inner conflict",
      "keywords": [
        "dark crossroads",
        "inner conflict",
        "choice"
      ]
    },
    {
      "scene_id": "scene-016",
      "title": "Kulluğun Başlangıcı",
      "narration": "Doğru okunan benlik, insanı küçültmez; ona gerçek yerini gösterir. İnsan kendisini her şeyin merkezi değil, kendisine emanet edilen kabiliyetlerden sorumlu bir kul olarak görür.",
      "visual_note": "humble person walking through grand mosque courtyard at sunrise",
      "keywords": [
        "mosque courtyard",
        "humble person",
        "sunrise"
      ]
    },
    {
      "scene_id": "scene-017",
      "title": "Mülkün Hakikati",
      "narration": "Bedenimizden zamanımıza kadar ‘benim’ dediğimiz her şey değişir ve elimizden çıkar. Gerçek malikiyet, varlığı yaratmayı, korumayı ve devam ettirmeyi gerektirir. İnsan ise ancak emanet edilenler üzerinde sınırlı bir tasarrufa sahiptir.",
      "visual_note": "aging hands holding a fading photograph, gentle natural light",
      "keywords": [
        "aging hands",
        "fading photograph",
        "impermanence"
      ]
    },
    {
      "scene_id": "scene-018",
      "title": "Teslimiyetin Dili",
      "narration": "Mülkün, hamdin ve hükmün Allah’a ait olduğunu kabul etmek, insanın iradesini yok etmez. Aksine onu taşıyamayacağı bir sahiplik yükünden kurtarır ve sorumlu olduğu alana yöneltir.",
      "visual_note": "person releasing a heavy rope beside a calm river, symbolic relief",
      "keywords": [
        "releasing rope",
        "calm river",
        "relief"
      ]
    },
    {
      "scene_id": "scene-019",
      "title": "İnce İpin Kalınlaşması",
      "narration": "Benlik başlangıçta ince bir çizgi kadar hafiftir. Fakat vazifesini unutursa iddialarla kalınlaşır; insanın düşüncesini, ilişkilerini ve varlığa bakışını kuşatan bir enaniyete dönüşür.",
      "visual_note": "thin thread gradually becoming a thick tangled rope, dark background",
      "keywords": [
        "thin thread",
        "tangled rope",
        "transformation"
      ]
    },
    {
      "scene_id": "scene-020",
      "title": "Kendini Merkez Sanmak",
      "narration": "Kendini ölçü sanan insan, değerleri kendi menfaatine göre belirlemeye başlar. Hoşuna gideni doğru, zoruna gideni yanlış sayar. Böylece hakikati aramak yerine hakikatin kendisine uymasını bekler.",
      "visual_note": "person at center of spinning city lights, disoriented cinematic scene",
      "keywords": [
        "city lights",
        "self centered",
        "disorientation"
      ]
    },
    {
      "scene_id": "scene-021",
      "title": "Bağımsızlık Yanılgısı",
      "narration": "İnsan kendisini bağımsız malik saydığında, çevresindeki varlıklara da bağımsız sahiplik dağıtır. Sebepler sonuçların gerçek yaratıcısı gibi görünmeye başlar. Oysa hiçbir sebep, içinde çalıştığı büyük düzeni tek başına kuramaz.",
      "visual_note": "complex gears moving together inside a vast clock mechanism",
      "keywords": [
        "clock gears",
        "complex system",
        "causality"
      ]
    },
    {
      "scene_id": "scene-022",
      "title": "Küçük Bir Gasp",
      "narration": "Ortak bir hazineden kendisine ait olmayan küçük bir payı alan kişi, başkalarının da aynı iddiada bulunmasına kapı açar. ‘Kendime malikim’ diyen benlik de varlık âleminde sayısız sahte malikiyet üretir.",
      "visual_note": "single hand taking a coin from a shared wooden chest, symbolic close-up",
      "keywords": [
        "shared chest",
        "single coin",
        "symbolic hand"
      ]
    },
    {
      "scene_id": "scene-023",
      "title": "Perdeye Dönüşen Ben",
      "narration": "Benlik işaret olma özelliğini kaybettiğinde kalın bir perdeye dönüşür. Kâinat anlamlı izlerle dolu olsa bile, insan yalnızca eşyayı ve sebepleri görür; onların gösterdiği hakikati seçemez.",
      "visual_note": "heavy curtain blocking bright daylight from a room",
      "keywords": [
        "heavy curtain",
        "blocked light",
        "dark room"
      ]
    },
    {
      "scene_id": "scene-024",
      "title": "Anahtarın Ters Çevrilmesi",
      "narration": "Aynı kabiliyet hem açabilir hem kapatabilir. Benlik, sınırlılığını kabul ettiğinde kâinatın anlamını açar; kendisini mutlak gördüğünde insanı kendi dar dünyasına kilitler.",
      "visual_note": "key turning inside an old lock, door shifting between light and darkness",
      "keywords": [
        "key in lock",
        "opening door",
        "light darkness"
      ]
    },
    {
      "scene_id": "scene-025",
      "title": "Kendini Yok Etmek Değil",
      "narration": "Çözüm kişiliği silmek, iradeyi terk etmek veya değersizleşmek değildir. Asıl ihtiyaç, benliği doğru okumaktır: kabiliyetleri kullanmak, sorumluluğu almak ve sonuçları mutlak sahiplik iddiasına çevirmemek.",
      "visual_note": "confident yet peaceful person walking on a balanced stone path",
      "keywords": [
        "balanced path",
        "peaceful person",
        "responsibility"
      ]
    },
    {
      "scene_id": "scene-026",
      "title": "Sınırı Bilmek",
      "narration": "Kendi sınırını bilmek, insanı pasif yapmaz; nerede çalışacağını ve nerede teslim olacağını öğretir. Gayret insana, neticeyi yaratmak ise insanı aşan kudrete aittir.",
      "visual_note": "farmer planting seeds under changing sky, patient purposeful work",
      "keywords": [
        "farmer planting",
        "changing sky",
        "purposeful work"
      ]
    },
    {
      "scene_id": "scene-027",
      "title": "İç Dünyadaki Dönüşüm",
      "narration": "‘Ben yaptım’ cümlesi, ‘bana güç ve imkân verildi; ben de tercih edip çalıştım’ şuuruna dönüşebilir. Bu değişim emeği inkâr etmez, onu daha geniş bir rahmet ve düzen içinde anlamlandırır.",
      "visual_note": "artisan working carefully as sunlight enters a quiet workshop",
      "keywords": [
        "artisan",
        "quiet workshop",
        "sunlight"
      ]
    },
    {
      "scene_id": "scene-028",
      "title": "Varlığı Yeniden Okumak",
      "narration": "Benlik ayna ve ölçü olduğunda gökyüzü, toprak, beden ve hayat birbirinden kopuk nesneler olmaktan çıkar. Her biri ilim, kudret, hikmet ve rahmet isimlerine açılan okunabilir bir işaret hâline gelir.",
      "visual_note": "sky earth human hands and leaves connected in a serene montage",
      "keywords": [
        "nature montage",
        "human hands",
        "connected creation"
      ]
    },
    {
      "scene_id": "scene-029",
      "title": "Temel Soru",
      "narration": "İnsan için belirleyici soru şudur: ‘Ben’ derken bağımsız bir sahip mi kastediyorum, yoksa bana verilen sınırlı ölçüyü mü? Cevap, benliğin anahtar mı yoksa perde mi olacağını belirler.",
      "visual_note": "thoughtful person before an open door and a closed wall, symbolic composition",
      "keywords": [
        "open door",
        "closed wall",
        "contemplation"
      ]
    },
    {
      "scene_id": "scene-030",
      "title": "Anahtar mı Kilit mi",
      "narration": "Benlik, kendisini gösterdiğinde insanı kendi içine kapatır; kendisinden ötesini gösterdiğinde bütün kâinatı anlamlı kılar. İnce çizgiyi kalın bir duvara çevirmemek, her gün yeniden verilen bir kulluk ve farkındalık vazifesidir.",
      "visual_note": "open doorway revealing a luminous universe, slow cinematic pullback",
      "keywords": [
        "open doorway",
        "luminous universe",
        "spiritual journey"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "Sevgi-ve-Korku",
    "test_day": "day-48",
    "workflow": "manual_scene_json_single_track_landscape_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];

