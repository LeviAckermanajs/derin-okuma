// Derin Okuma — 20. Mektup - 2. Makam - 5-7. kelime Shorts
// Short: short-004

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Ölüm Neden Sönüş Değildir?',
    description: 'Bir tohum toprakta çürüdüğünde bu bir son mudur, yoksa başak hayatına bir kapı mı?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '20-mektup-2-makam-5-7-kelime-short-004-day-35'
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
      narration: 'Bir tohum toprakta çürüdüğünde bu bir son mudur? Dışarıdan bakıldığında evet. Ama içeriden bakıldığında, bu çürüme aslında başak hayatına bir kapı açmaktadır.',
      visual_note: 'seed in dark soil, beginning to sprout, slow-motion macro close-up',
      keywords: ['seed sprouting', 'dark soil', 'macro growth']
    },
    {
      scene_id: 'scene-002',
      narration: 'Ölüm yalnızca tahribat ve sönmek değildir. Küçük bir hayattan çok daha geniş, çok daha zengin bir hayata geçiştir. Tıpkı bir tohumun başak olması gibi.',
      visual_note: 'wheat field golden under sunset light, full and abundant, wide shot',
      keywords: ['wheat field', 'golden harvest', 'sunset field']
    },
    {
      scene_id: 'scene-003',
      narration: 'İnsan için de ölüm zahiren bir çözülme gibi görünse de, başka bir mertebede bir başlangıç olarak düşünülebilir. Hayatı veren kimse, ölümü de ancak O verir.',
      visual_note: 'autumn leaves falling gently from trees, soft breeze, warm amber colors',
      keywords: ['autumn leaves', 'falling leaves', 'warm colors']
    },
    {
      scene_id: 'scene-004',
      narration: 'Ölüm de ilimsiz, hikmetsiz, merhametsiz bir kopuş değildir. Ve her kopuş aslında bir başlangıcın kapısını açar.',
      visual_note: 'butterfly emerging from cocoon, transformation in nature, close-up wings unfolding',
      keywords: ['butterfly cocoon', 'transformation', 'metamorphosis wings']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '20-mektup-2-makam-5-7-kelime',
    test_day: 'day-35',
    short_id: 'short-004',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
