// Derin Okuma — 21. Mektup Shorts
// Short: short-003 — Rızkı Kim Daraltıyor Aslında?
// Filled: day-39

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Rızkı Kim Daraltıyor Aslında?',
    description: 'Evine muhtaç birini aldığında, rızkın daralacağını mı sanıyorsun?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '21-mektup-evdeki-sessiz-bereket-short-003-day-39'
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
      narration: 'Çoğu insan içten şunu hisseder: Evin geçimi zaten kıt. Bir de üstüne yaşlı ya da hasta biri bakımını almak, kaynakları daha da daraltır. Bu korku anlaşılırdır. Ama gerçek, çoğu zaman bu korkunun beklediği gibi çıkmaz.',
      visual_note: 'person looking at bills at a kitchen table, worried but calm expression, soft light',
      keywords: ['financial worry', 'kitchen', 'table', 'soft light']
    },
    {
      scene_id: 'scene-002',
      narration: 'Bir çocuk dünyaya geldiğinde aileler çoğunlukla çılgına dönmez. Çünkü içte bir his var: o çocukla birlikte rızık da gelir. Muhtaç ve yaşlı bir yakın için de bu hakikat değişmez. Merhamete daha çok muhtaç olan, daha çok ilahi gözetim altındadır.',
      visual_note: 'infant\'s hand grasping adult\'s finger, warm soft light, trust and hope',
      keywords: ['baby hand', 'adult hand', 'hope', 'warmth']
    },
    {
      scene_id: 'scene-003',
      narration: 'Bazen insanın kendi için ayırdığı az şey, hem kendisine hem bir başkasına yeter. Hatta artar bile. Muhtaç birinin varlığı evin bereketini tüketmez; bilakis açar.',
      visual_note: 'simple bread on a wooden table, hands sharing it warmly, natural tones',
      keywords: ['bread', 'sharing', 'wooden table', 'abundance']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '21-mektup-evdeki-sessiz-bereket',
    test_day: 'day-39',
    short_id: 'short-003',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
