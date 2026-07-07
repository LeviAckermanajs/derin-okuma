// Derin Okuma — 30.Söz - 1.Maksad Shorts
// Short: short-001
// Content filled for day-51 production.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: "Benlik Neden Aynaya Dönüşür?",
    description: "Benlik kendisini göstermek yerine kaynağına işaret ettiğinde insan için hakikate açılan bir aynaya dönüşür. #derinokuma #shorts #tefekkür #iman #benlik #maneviyat",
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur-short-001-day-51'
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
    "title": "İki İhtimal",
    "narration": "Benlik neden bazen ayna, bazen perde olur? Çünkü insan, sahip olduğu güçleri ya kendisine ait sanır ya da onların gerçek sahibini tanımaya bir ölçü kabul eder.",
    "visual_note": "Thoughtful person between a clear mirror and a dark curtain.",
    "keywords": [
      "mirror",
      "dark curtain",
      "thoughtful person"
    ]
  },
  {
    "scene_id": "scene-002",
    "title": "Aynanın Sırrı",
    "narration": "Ayna, üzerindeki ışığı kendisinin üretmediğini bilir. İnsan da aklını, yeteneğini ve hayatını emanet gördüğünde, kendisini büyütmek yerine bütün bu nimetlerin kaynağına yönelir.",
    "visual_note": "Mirror reflecting warm sunlight across a quiet room.",
    "keywords": [
      "sunlight reflection",
      "quiet room",
      "mirror"
    ]
  },
  {
    "scene_id": "scene-003",
    "title": "Perdenin Gölgesi",
    "narration": "Benlik yalnız kendisini gösterdiğinde ise ışığı kesen bir perdeye dönüşür. Mesele ben demek değil; benliği hakikate açılan bir pencere olarak kullanabilmektir.",
    "visual_note": "Heavy curtain opening toward a bright peaceful horizon.",
    "keywords": [
      "opening curtain",
      "bright horizon",
      "inner clarity"
    ]
  }
],

  metadata: {
    source: 'derin-okuma',
    blog_post: '30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur',
    test_day: 'day-51',
    short_id: 'short-001',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
