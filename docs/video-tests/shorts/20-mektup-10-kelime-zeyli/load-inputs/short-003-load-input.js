// Derin Okuma — Bir Zerre Kendi Başına Ne Yapabilir? Shorts
// Short: short-003
// Content filled: day-38

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Tevhid Neden Her Şeyi Kolaylaştırır?',
    description: 'Her şeyi tek bir kaynağa bağlamak, her şeyi dağıtıp açıklamaya çalışmaktan çok daha kolaydır.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '20-mektup-10-kelime-zeyli-short-003-day-38'
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
      narration: 'Her şeyi tek bir kaynağa bağlamak, her şeyi dağıtıp ayrı ayrı açıklamaya çalışmaktan çok daha kolaydır. Tek merkezden çıkan emir, milyonlarca varlığı birbirine zıt olmadan yönetir.',
      visual_note: 'single conductor leading large orchestra, unified harmony',
      keywords: ['conductor', 'orchestra', 'harmony', 'unified']
    },
    {
      scene_id: 'scene-002',
      narration: 'Tek bir güneş sayısız ülkeye ışık verir. Tek bir bahar, milyonlarca çiçeği aynı anda açtırır. Tek bir emir, kâinatı düzenler. Birlik, çokluğu karışıklığa düşürmeden taşır.',
      visual_note: 'sun rays spreading over vast landscape, aerial, radiance',
      keywords: ['sun rays', 'vast landscape', 'aerial', 'radiance']
    },
    {
      scene_id: 'scene-003',
      narration: 'Bunun tersini düşünelim. Tek bir sonuç için birbirinden kopuk sayısız şeyin aynı anda, aynı ölçüyle buluşması gerekse ne olur? Bu, koordinasyonsuz bir kaos doğurur. Her küçük şey bile içinden çıkılamaz hale gelir.',
      visual_note: 'scattered puzzle pieces, disconnected gears, chaos',
      keywords: ['puzzle pieces', 'disconnected', 'chaos', 'scattered']
    },
    {
      scene_id: 'scene-004',
      narration: 'Tevhid kolaylaştırır; şirk zorlaştırır. Tek merkezden gelen emir, karmaşıklığı eriterek düzen kurar. Dağınıklık ise küçücük bir şeyi bile açıklanamaz hale getirir.',
      visual_note: 'single key unlocking many doors at once, simplicity, solution',
      keywords: ['single key', 'many doors', 'solution', 'simplicity']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '20-mektup-10-kelime-zeyli',
    test_day: 'day-38',
    short_id: 'short-003',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
