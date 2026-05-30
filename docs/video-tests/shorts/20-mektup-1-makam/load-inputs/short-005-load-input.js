// Derin Okuma — 20. Mektup - 1. Makam Shorts
// Short: short-005 — Sevdiklerini Kaybetme Korkusu Nereden Geliyor?
// Day-33 — Filled by Claude

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Sevdiklerini Kaybetme Korkusu Nereden Geliyor?',
    description: 'İnsan güzel bir şey gördüğünde kalbi onu bırakmak istemez.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '20-mektup-1-makam-short-005-day-33'
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
      narration: "İnsan güzel bir şey gördüğünde kalbi onu bırakmak istemez. Sevdiklerine bağlanır, güzelliklere tutunur. Ama bir gün her şey geçer. Ve bu gerçek, kalbi sürekli incitir.",
      visual_note: 'A person holding a flower gently, then petals beginning to fall, slow motion, soft light.',
      keywords: ['flower petals falling', 'gentle hands', 'slow motion', 'transience']
    },
    {
      scene_id: 'scene-002',
      narration: "Geçici güzellikler, sonsuz bir güzelliğin yansımalarıdır. Aynalar değişir, aynalar kırılır; ama yansıyan ışığın kaynağı değişmez. Bütün güzelliklerin kaynağı olan, Kendisi bâkidir.",
      visual_note: 'Sunlight shimmering on moving water, reflections shifting but light source constant.',
      keywords: ['shimmering water', 'light reflection', 'constant source', 'beauty']
    },
    {
      scene_id: 'scene-003',
      narration: "O bâki kalınca, başkaları ne olursa olsun merak çekmek gerekmez. Sevgi iptal olmaz; sevgi aslına bağlanır. Sevilenlerdeki güzellik, gerçek kaynağına işaret eder. Ayrılıklar artık bütünüyle karanlık değildir.",
      visual_note: 'An ornate mirror reflecting warm candlelight, ancient and still, amber tones.',
      keywords: ['ornate mirror', 'candlelight', 'warm amber', 'eternal reflection']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '20-mektup-1-makam',
    test_day: 'day-33',
    short_id: 'short-005',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
