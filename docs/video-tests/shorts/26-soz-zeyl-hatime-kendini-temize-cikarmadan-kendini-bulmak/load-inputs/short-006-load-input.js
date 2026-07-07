// Derin Okuma — 26.Söz - Zeyl - Hatime Shorts — short-006
// Content filled for n8n Load Input.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: "Muhtaçlık Rahmeti Nasıl Gösterir?",
    description: "Bir nefes, su, rızık ve çalışan kalp her an verilen nimetlerdir. İhtiyaçlarımız doğru okunduğunda yoksunluktan öte, hayatı kuşatan rahmeti gösteren pencereler olur.\n\n#derinokuma #shorts #tefekkür #fakr #rahmet #şükür",
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak-short-006-day-50'
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
    mode: 'shorts',
    subtitles_enabled: true,
    render_mode: 'shorts',
    produce_both: false,
    background_music_enabled: true,
    target_fps: 30
  },

  scenes: [
  {
    "scene_id": "scene-001",
    "title": "Her An Muhtaç",
    "narration": "Muhtaçlık neden yalnızca bir eksiklik değildir? Bir nefes, bir yudum su, çalışan bir kalp ve doğan güneş bizim üretimimiz değildir. Hayat, sayısız nimetin her an verilmesiyle sürer.",
    "visual_note": "Breathing, clear water, sunrise and a hand over the heart, vertical gentle montage.",
    "keywords": [
      "clear water",
      "sunrise",
      "heartbeat",
      "breath"
    ]
  },
  {
    "scene_id": "scene-002",
    "title": "İhtiyacın Gösterdiği",
    "narration": "İhtiyaçlarımız, bizi kuşatan ikramın genişliğini görünür kılar. Açlık rızkı, susuzluk suyu, yalnızlık yakınlığı düşündürür. Fakr, yalnız yoksunluğu değil, her yandan gelen yardıma ne kadar açık olduğumuzu bilmektir.",
    "visual_note": "Rain falling onto dry soil and nourishing young plants, vertical close-up.",
    "keywords": [
      "rain",
      "dry soil",
      "young plants",
      "nourishment"
    ]
  },
  {
    "scene_id": "scene-003",
    "title": "Rahmete Açılan Pencere",
    "narration": "İnsan muhtaçlığını kabul ettiğinde değersizleşmez; sahiplik iddiasından kurtulur. Verilenleri emanet bilir, nimeti fark eder ve şükre yaklaşır. Doğru okunan ihtiyaç, rahmeti gösteren geniş bir pencereye dönüşür.",
    "visual_note": "Hands holding a seedling toward warm sunlight, vertical cinematic close-up.",
    "keywords": [
      "holding seedling",
      "warm sunlight",
      "trust",
      "gratitude"
    ]
  }
],

  metadata: {
  "source": "derin-okuma",
  "blog_post": "26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak",
  "test_day": "day-50",
  "short_id": "short-006",
  "workflow": "manual_scene_json_single_track_shorts_load_input",
  "content_generation_status": "filled"
}
};

return [{ json: { raw_input: rawInput } }];
