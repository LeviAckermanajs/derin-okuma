// Derin Okuma — 22. Mektup - 1. Mebhas - 1-4. Vecih Shorts
// Short: short-002
// Filled on day-40

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'İman Birliği Neden Kalp Birliği İster?',
    description: 'Aynı Yaratıcı\'ya inanıyoruz, aynı kıbleye yöneliyoruz. Peki neden hâlâ birbirimize kırgınız?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '22-mektup-1-mebhas-1-4-vecih-short-002-day-40'
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
      narration: 'Aynı Yaratıcı\'ya inanıyoruz. Aynı peygamberin yolundan gidiyoruz. Aynı kıbleye dönüyoruz. Bu kadar güçlü ortak noktalarımız varken, araya giren şeyler çoğu zaman ne kadar küçüktür.',
      visual_note: 'People standing together facing the same direction, warm natural light.',
      keywords: ['unity', 'common ground', 'people', 'horizon']
    },
    {
      scene_id: 'scene-002',
      narration: 'Kırgınlıklar çoğu zaman bir söz, yanlış anlaşılmış bir bakış, taşınan bir küskünlükten doğar. Bunlar, büyük ortak zeminimize kıyasla örümcek ağı kadar incedir.',
      visual_note: 'Close-up of a delicate spider web with dew drops in morning light.',
      keywords: ['spider web', 'dew', 'fragile', 'morning']
    },
    {
      scene_id: 'scene-003',
      narration: 'İman birliği, kalplerin de birlik içinde olmasını ister. Geçici kırgınlıklar bu büyük bağın önüne geçemez.',
      visual_note: 'Sunset over a vast open landscape, warm golden tones, sense of eternity.',
      keywords: ['sunset', 'landscape', 'golden light', 'eternity']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '22-mektup-1-mebhas-1-4-vecih',
    test_day: 'day-40',
    short_id: 'short-002',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
