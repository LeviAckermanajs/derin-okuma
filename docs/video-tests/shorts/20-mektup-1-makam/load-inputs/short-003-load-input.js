// Derin Okuma — 20. Mektup - 1. Makam Shorts
// Short: short-003 — Hayatın Yükünü Neden Tek Başına Taşıyorsun?
// Day-33 — Filled by Claude

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: "Hayatın Yükünü Neden Tek Başına Taşıyorsun?",
    description: 'İnsan neden bu kadar yorulur? Belki taşıdığı yük aslında ona ait değil.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '20-mektup-1-makam-short-003-day-33'
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
      narration: "İnsan neden bu kadar yorulur? Çünkü kendini bütünüyle kendi elinde zanneder. Kendini korumak, geleceğini garanti etmek, sevdiklerini muhafaza etmek... Her şeyi omuzlamaya çalışır. Oysa buna gücü yetmez.",
      visual_note: 'A person carrying a heavy backpack uphill, slow exhausted pace, steep trail.',
      keywords: ['heavy backpack', 'uphill', 'exhaustion', 'steep path']
    },
    {
      scene_id: 'scene-002',
      narration: "Bir düşünce var ki insanı bu yükten kurtarır: Mülk O'nundur. İnsan O'nun mülkünde bir memurdur. Bütün masraflar sahibine aittir. İnsana düşen vazifesini güzel yapmak ve ücretini beklemektir.",
      visual_note: 'A vast open field under soft afternoon light, wide shot, sense of freedom.',
      keywords: ['open field', 'afternoon light', 'freedom', 'wide shot']
    },
    {
      scene_id: 'scene-003',
      narration: "Bu bakış değiştiğinde yük değişmez; ama taşıma biçimi değişir. Artık her şeyi tek başına garantilemek zorunda değilsin. Yük sahibine aittir; sen vazifeni güzel yap.",
      visual_note: 'A person gently setting down a bag beside a tree and resting peacefully, relief.',
      keywords: ['setting down bag', 'resting', 'relief', 'peaceful']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '20-mektup-1-makam',
    test_day: 'day-33',
    short_id: 'short-003',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
