// Derin Okuma — Bir Zerre Kendi Başına Ne Yapabilir? Shorts
// Short: short-001
// Content filled: day-38

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Bir Zerre Neden Bu Kadar Güçlüdür?',
    description: 'Küçük olmak zayıflık değildir. Asıl güç, neye bağlı olduğundan gelir.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '20-mektup-10-kelime-zeyli-short-001-day-38'
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
      narration: 'Küçük olmak zayıflık değildir. Kâinatta pek çok şey küçüktür — bir zerre, bir tohum, görünmez bir hava tanecisi. Ama onların bu küçüklüğü, onları anlamsız ya da güçsüz yapmaz.',
      visual_note: 'tiny particles floating in golden sunlight, macro, ethereal',
      keywords: ['particles', 'golden sunlight', 'macro', 'ethereal']
    },
    {
      scene_id: 'scene-002',
      narration: 'Şeffaf bir zerreyi düşünelim. Kendi başına bırakıldığında, yalnızca kendi küçüklüğü kadar bir şeydir. Ama güneşe yönelirse ne olur? Güneşin ışığını yansıtır, rengini taşır. Küçücük bir zerre, büyük bir ışığın aynası olur.',
      visual_note: 'sunlight through water droplet creating rainbow prism, brilliant',
      keywords: ['sunlight', 'water droplet', 'prism', 'rainbow']
    },
    {
      scene_id: 'scene-003',
      narration: 'Bir varlığın gücü, kendi yapısından değil, bağlı olduğu kaynaktan gelir. Küçük olmak sorun değildir; asıl mesele neye bağlı olduğundur. Küçüklük bir eksiklik değil, büyük bir güce bağlanmanın kapısıdır.',
      visual_note: 'small mirror reflecting full brilliant sunlight, simplicity',
      keywords: ['small mirror', 'sunlight reflection', 'brilliant', 'simplicity']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '20-mektup-10-kelime-zeyli',
    test_day: 'day-38',
    short_id: 'short-001',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
