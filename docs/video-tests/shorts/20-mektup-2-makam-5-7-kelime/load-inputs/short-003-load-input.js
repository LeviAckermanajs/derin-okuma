// Derin Okuma — 20. Mektup - 2. Makam - 5-7. kelime Shorts
// Short: short-003

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Hayatı Veren Nasıl Bilinir?',
    description: 'Her bahar, binlerce farklı tür aynı anda uyanır. Kimse geç kalmaz, kimse unutulmaz.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '20-mektup-2-makam-5-7-kelime-short-003-day-35'
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
      narration: 'Her bahar, binlerce farklı canlı türü aynı anda uyanır. Her birinin ihtiyacı farklı, şekli farklı, elbisesi farklı. Fakat kimse geç kalmaz, kimse unutulmaz.',
      visual_note: 'spring awakening time-lapse, flowers blooming, birds flying, green spreading fast',
      keywords: ['spring time-lapse', 'nature awakening', 'birds flowers']
    },
    {
      scene_id: 'scene-002',
      narration: 'Bu kadar farklı canlı türünün ihtiyaçlarını ayrı ayrı karşılamak, hepsine uygun donanım vermek, hiçbirini unutmamak; bunu kör ve şuursuz bir tesadüfe bağlamak mümkün değildir.',
      visual_note: 'diverse wildlife in a meadow, bees butterflies deer birds coexisting, warm light',
      keywords: ['diverse wildlife', 'meadow ecosystem', 'nature harmony']
    },
    {
      scene_id: 'scene-003',
      narration: 'Burada ilim vardır, irade vardır, rahmet vardır. Hayat yalnızca biyolojik bir canlılık değildir; hayat, bir sahibin imzasını taşır.',
      visual_note: 'sunlight filtering through forest canopy, golden rays, peaceful ancient trees',
      keywords: ['forest sunlight', 'golden rays', 'peaceful canopy']
    },
    {
      scene_id: 'scene-004',
      narration: 'Bahar, hayatın kaynağına adreslenmiş sessiz bir kanıt gibidir. Ve bu kanıt, her yıl yenilenerek tekrar edilir.',
      visual_note: 'flowers opening in slow motion, dawn light, macro photography style, vivid colors',
      keywords: ['flowers opening', 'slow motion', 'macro dawn']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '20-mektup-2-makam-5-7-kelime',
    test_day: 'day-35',
    short_id: 'short-003',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
