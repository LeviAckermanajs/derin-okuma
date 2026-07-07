// Derin Okuma — 30.Söz - 1.Maksad - Mukaddime Shorts
// Short: short-005
// Content filled for day-49 n8n input.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: "Güzellik Sanatkârı Nasıl Gösterir?",
    description: "Güzelliği yalnız eserde bırakmak, sanatın sahibini görünmez kılar. Ayna olan bakış renk, ölçü ve zarafeti hayranlıktan şükre taşıyan bir işaret olarak okur.\n\n#derinokuma #shorts #tefekkür #güzellik #sanat #şükür",
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '30-soz-1-maksad-mukaddime-benlik-kainati-acan-anahtar-short-005-day-49'
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
    "title": "Görünen Güzellik",
    "narration": "Bir çiçeğin güzelliği yalnız kendisine mi aittir? Rengi, kokusu, ölçüsü ve canlılığı bir araya geldiğinde göz yalnız bir nesne değil, ince bir sanat görür.",
    "visual_note": "A delicate flower opening in soft morning light, vertical macro footage.",
    "keywords": [
      "delicate flower",
      "morning light",
      "macro",
      "beauty"
    ]
  },
  {
    "scene_id": "scene-002",
    "title": "Eserde Kalmak",
    "narration": "Güzelliği yalnız çiçeğe verirsek eser görünür, fakat sanatkâr görünmez kalır. Üstelik çiçek solduğunda güzelliğin anlamı da onunla birlikte kaybolur.",
    "visual_note": "A flower slowly fading as daylight changes, reflective vertical time-lapse.",
    "keywords": [
      "fading flower",
      "changing daylight",
      "transience",
      "reflection"
    ]
  },
  {
    "scene_id": "scene-003",
    "title": "İşareti Okumak",
    "narration": "Ayna olan bakış, güzelliği sanatın sahibine yönelten bir işaret olarak okur. Hayranlık böylece tüketilen bir duygudan şükre dönüşür. Çiçek geçer, fakat gösterdiği cemal kalpte daha geniş bir anlam bırakır.",
    "visual_note": "Sunlight passing through flower petals toward an open sky, vertical cinematic shot.",
    "keywords": [
      "flower petals",
      "open sky",
      "sunlight",
      "gratitude"
    ]
  }
],

  metadata: {
    source: 'derin-okuma',
    blog_post: '30-soz-1-maksad-mukaddime-benlik-kainati-acan-anahtar',
    test_day: 'day-49',
    short_id: 'short-005',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
