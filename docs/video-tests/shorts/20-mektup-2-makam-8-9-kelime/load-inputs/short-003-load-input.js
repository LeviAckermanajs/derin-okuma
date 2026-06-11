// Derin Okuma — 20. Mektup - 2. Makam - 8-9. Kelime Shorts
// Short: short-003 | Neden O'nun Hayatı Sonsuz?

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: "Neden O'nun Hayatı Sonsuz?",
    description: "Ölüm neden O'na yaklaşamaz?",
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '20-mektup-2-makam-8-9-kelime-short-003-day-36'
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
      narration: "Ölüm ve eksilme neden O'na yaklaşamaz? Çünkü O'nun hayatı, dışarıdan alınmış bir şey değildir. Verilmiş olan geri alınabilir. Ama kendi özünden olan eksilmez.",
      visual_note: 'unquenchable flame in wind, eternal fire burning despite elements, candle flame that persists',
      keywords: ['eternal flame', 'fire in wind', 'unquenchable fire', 'persistent flame']
    },
    {
      scene_id: 'scene-002',
      narration: "Bizim hayatımız bir emanettir; belirli bir süre için verilmiş, sonunda geri alınacak bir şeydir. O'nun hayatı ise ezelî ve ebedîdir; ne başlangıcı var ne de sonu. Bu yüzden tükenmez.",
      visual_note: 'sunrise and sunset as eternal cycle, vast sky above changing earth, cosmos enduring',
      keywords: ['eternal sunrise sunset', 'vast sky', 'cosmos endurance', 'eternal cycle']
    },
    {
      scene_id: 'scene-003',
      narration: 'Kâinattaki bu kadar çok ve çeşitli hayat, tükenmez bir kaynaktan akıyor. Tükenen bir kaynaktan bu kadar uzun süre, bu kadar büyük bir çeşitlilikte hayat akamazdı. Bu akış, kaynağın tükenmezliğini gösterir.',
      visual_note: 'diverse life forms in nature, rainforest teeming with life, biodiversity, endless variety',
      keywords: ['diverse life forms', 'rainforest biodiversity', 'endless variety', 'teeming with life']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '20-mektup-2-makam-8-9-kelime',
    test_day: 'day-36',
    short_id: 'short-003',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
