// Derin Okuma — Bir Çocuğun Ardından: Acının İçinde Saklı Teselli Shorts
// Short: short-005 — Şefkat Neden Kalbi Allah'a Taşır?
// Day-30 — filled

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: "Şefkat Neden Kalbi Allah'a Taşır?",
    description: 'İnsan çocuğunu bazen bütün dünya gibi sever. O sevgi elinden alındığında kalp nereye yönelir?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'bir-cocugun-ardindan-acinin-icinde-sakli-teselli-short-005-day-30'
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
      scene_id: 'scene-001',
      narration: 'İnsan çocuğunu bazen bütün dünya gibi sever. O sevgi elinden alındığında, dünya da gözünde anlamını kaybedebilir. Ve işte bu kırılma anında kalp iki yönden birine döner.',
      visual_note: 'Parent gazing at sleeping child, wonder and profound love, soft lamp light at night.',
      keywords: ['parent watching child', 'wonder', 'lamp light', 'profound love']
    },
    {
      scene_id: 'scene-002',
      narration: 'Eğer acı kişiyi içine kapamıyorsa; eğer o derin sevginin kaynağını soruyorsa, o zaman şefkat güçlü bir yol olur. Çünkü bu soru, insanı en derin ve en gerçek sevginin sahibine götürür.',
      visual_note: 'Light breaking through dark clouds, soul searching, spiritual awakening, dramatic and quiet.',
      keywords: ['light through clouds', 'spiritual awakening', 'searching', 'depth']
    },
    {
      scene_id: 'scene-003',
      narration: 'Şefkat, kalbi Allah\'a taşıyabilecek en derin yollardan biridir. Dünya fanidir. Fânî olan tatmin edemez. Ama kalbin bağlanmaya gerçekten değer bir yeri vardır.',
      visual_note: 'Compass pointing toward open horizon, direction and meaning, seeking the true center.',
      keywords: ['compass', 'open horizon', 'direction', 'meaning']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: 'bir-cocugun-ardindan-acinin-icinde-sakli-teselli',
    test_day: 'day-30',
    short_id: 'short-005',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
