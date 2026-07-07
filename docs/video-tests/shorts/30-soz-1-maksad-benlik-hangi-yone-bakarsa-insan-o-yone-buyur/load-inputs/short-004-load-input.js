// Derin Okuma — 30.Söz - 1.Maksad Shorts
// Short: short-004
// Content filled for day-51 production.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: "Güzellik Nasıl Tefekküre Dönüşür?",
    description: "Güzelliği yalnız nesneye hapsetmeyen bakış, sanatı sanatkârına açılan bir pencere olarak görür. #derinokuma #shorts #tefekkür #iman #güzellik #sanat",
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur-short-004-day-51'
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
    "title": "Görmek ve Okumak",
    "narration": "Bir çiçeğe bakmak nasıl tefekküre dönüşür? Onu yalnız güzel bir nesne olarak görmekle, renklerindeki ve biçimindeki ince ölçüyü okumak arasında derin bir fark vardır.",
    "visual_note": "Flower opening slowly in golden morning light, macro shot.",
    "keywords": [
      "flower bloom",
      "golden light",
      "macro nature"
    ]
  },
  {
    "scene_id": "scene-002",
    "title": "Sanata Açılan Pencere",
    "narration": "Güzellik kendi kendine ortaya çıkmış bağımsız bir mülk değildir. Uyum ve zarafet fark edildiğinde çiçek, kendisinde biten bir görüntü olmaktan çıkar; sanatkârını düşündüren bir pencereye dönüşür.",
    "visual_note": "Intricate petals and natural symmetry in cinematic close-up.",
    "keywords": [
      "petal symmetry",
      "natural design",
      "close-up"
    ]
  },
  {
    "scene_id": "scene-003",
    "title": "Hayranlıktan Şükre",
    "narration": "Böyle bir bakış hayranlığı derinleştirir. İnsan yalnız ne güzel demekle kalmaz; ne güzel yapılmış diyerek güzelliği şükür ve anlamla buluşturur.",
    "visual_note": "Person gently observing a flower garden at sunrise.",
    "keywords": [
      "flower garden",
      "sunrise",
      "gratitude"
    ]
  }
],

  metadata: {
    source: 'derin-okuma',
    blog_post: '30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur',
    test_day: 'day-51',
    short_id: 'short-004',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
