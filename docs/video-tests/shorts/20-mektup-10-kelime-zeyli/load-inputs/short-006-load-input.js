// Derin Okuma — Bir Zerre Kendi Başına Ne Yapabilir? Shorts
// Short: short-006
// Content filled: day-38

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Kalp Neden Omzundaki Yükle Yorulur?',
    description: 'Her şeyi omzunda taşımaya çalışmak mı, yoksa her şeyi asıl Sahibine vermek mi?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '20-mektup-10-kelime-zeyli-short-006-day-38'
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
      narration: 'Her şeyi kendi omzunda taşımaya çalışmak ile her şeyi asıl Sahibine vermek arasındaki fark çok içseldir. Bir insan kendi başına bırakıldığında, her yükü kendisi taşımak zorundadır.',
      visual_note: 'person with heavy backpack, tired, long road ahead',
      keywords: ['heavy backpack', 'tired', 'long road', 'burden']
    },
    {
      scene_id: 'scene-002',
      narration: 'Ama insan, kendi aczini ve sınırlılığını kabul ettiğinde ne olur? Büyük bir güce bağlanmanın kapısı açılır. Artık her yükü kendi gücüyle değil, bağlandığı sonsuz kudretle taşır.',
      visual_note: 'hands open in surrender and prayer, peace, warm light',
      keywords: ['hands open', 'prayer', 'peace', 'warm light']
    },
    {
      scene_id: 'scene-003',
      narration: 'Kalbin rahatlaması buradan başlar. Bu bir pasiflik değildir. Bu, gücün doğru kaynağına bağlanmaktır. Kendi küçüklüğünü kabul ederek, sonsuz bir kudrete yaslanmaktır.',
      visual_note: 'backpack set down on hilltop, open sky, relief, freedom',
      keywords: ['backpack', 'hilltop', 'open sky', 'relief']
    },
    {
      scene_id: 'scene-004',
      narration: 'İnsan da kendine böyle bakabilir: Zayıflıklarım mı var? Evet. Ama sonsuz kudrete bağlandığımda, varlığım daha geniş bir anlamın içine yerleşir. Kalbin rahatladığı yer burasıdır.',
      visual_note: 'calm lake at sunrise, peaceful reflection, serenity, stillness',
      keywords: ['calm lake', 'sunrise', 'peaceful', 'serenity']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '20-mektup-10-kelime-zeyli',
    test_day: 'day-38',
    short_id: 'short-006',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
