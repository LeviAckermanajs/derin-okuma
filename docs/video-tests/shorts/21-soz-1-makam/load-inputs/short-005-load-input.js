// Derin Okuma — 21. Söz - 1. Makam Shorts
// Short: short-005 — Dünya İşleri Çok mu, Yoksa Öncelikler mi Kayboldu?
// Day-28 — filled by Claude

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Dünya İşleri Çok mu, Yoksa Öncelikler mi Kayboldu?',
    description: 'Saatlerce içeriklere bakabilirsin. Ama birkaç dakika namaz için "vaktim yok" diyebilirsin. Bu gerçekten bir zaman problemi mi?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '21-soz-1-makam-short-005-day-28'
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
      narration: 'Saatlerce sosyal medya akışında kalınabilir, onlarca video izlenebilir, aynı şeyler tekrar tekrar kontrol edilebilir. Ama birkaç dakikalık ibadet için "vaktim yok, dünya işlerim çok" denilirse; bu gerçekten zaman problemi midir?',
      visual_note: 'Person endlessly scrolling through phone, blue light in dark room, countless notifications passing.',
      keywords: ['phone scrolling', 'blue light', 'notifications', 'time wasting']
    },
    {
      scene_id: 'scene-002',
      narration: 'İnsanın "dünya işleri" dediği şeylerin çoğu, gerçekten kendisine ait ve zaruri işler midir? Modern insanın en büyük sorunlarından biri, asli vazifelerini ihmal edip tali bilgi ve meşguliyetlerle dağılmasıdır. Zihin dolup taşar; ama ruh beslenmez.',
      visual_note: 'Overflowing inbox with trivial messages, contrast with an empty quiet prayer space, priority imbalance.',
      keywords: ['overflowing inbox', 'empty prayer space', 'priority contrast', 'distraction']
    },
    {
      scene_id: 'scene-003',
      narration: 'İnsan sırf dünya için yaratılmamıştır. Yalnızca kazanan, tüketen, yorulan bir beden değildir. Bütün vaktini dünyaya vermek, kendi mahiyetini eksik okumaktır. Asıl vazife hatırlandığında, tali meşguliyetlerin yeri değişir.',
      visual_note: 'Wide open sky above a crowded city, vast perspective from rooftop, insignificance of busyness vs vastness.',
      keywords: ['open sky', 'crowded city', 'rooftop perspective', 'vastness']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '21-soz-1-makam',
    test_day: 'day-28',
    short_id: 'short-005',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
