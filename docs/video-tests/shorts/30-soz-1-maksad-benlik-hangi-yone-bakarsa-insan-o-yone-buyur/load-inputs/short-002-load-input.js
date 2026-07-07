// Derin Okuma — 30.Söz - 1.Maksad Shorts
// Short: short-002
// Content filled for day-51 production.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: "Acizlik İnsanı Neden Küçültmez?",
    description: "Acizlik ve ihtiyaç, doğru okunduğunda insanı umutsuzluğa değil kudret ve rahmet kapısına götürür. #derinokuma #shorts #tefekkür #iman #acz #tevekkül",
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur-short-002-day-51'
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
    "title": "Eksiklik mi İşaret mi",
    "narration": "Acizlik insanı gerçekten küçültür mü? İnsan her şeye yetişemediğini fark edince kendisini yetersiz hissedebilir; oysa bu fark ediş, sınırlarımızı doğru okumaya çağırır.",
    "visual_note": "Small person beneath immense mountains in calm morning mist.",
    "keywords": [
      "mountain scale",
      "human figure",
      "morning mist"
    ]
  },
  {
    "scene_id": "scene-002",
    "title": "Kudrete Dayanmak",
    "narration": "Sınırlı gücümüz, mutlak kudretin ne demek olduğunu anlamamız için bir ölçüdür. Her şeyi yapamamak, her şeye gücü yetene dayanmanın değerini öğretir.",
    "visual_note": "Open hands raised beneath a vast starry sky.",
    "keywords": [
      "open hands",
      "starry sky",
      "reliance"
    ]
  },
  {
    "scene_id": "scene-003",
    "title": "Rahmete Açılan İhtiyaç",
    "narration": "İhtiyaçlarımız da rahmetin genişliğini fark ettirir. Acizlik doğru kapıya yöneldiğinde bir yük olmaktan çıkar; dua, güven ve kulluk için güçlü bir başlangıç olur.",
    "visual_note": "Dry soil receiving gentle rain and becoming green.",
    "keywords": [
      "gentle rain",
      "dry soil",
      "renewal"
    ]
  }
],

  metadata: {
    source: 'derin-okuma',
    blog_post: '30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur',
    test_day: 'day-51',
    short_id: 'short-002',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
