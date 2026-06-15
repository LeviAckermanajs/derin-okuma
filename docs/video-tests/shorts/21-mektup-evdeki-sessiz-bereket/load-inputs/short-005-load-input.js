// Derin Okuma — 21. Mektup Shorts
// Short: short-005 — Neden Ektiğini Biçersin?
// Filled: day-39

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Neden Ektiğini Biçersin?',
    description: 'Bugün anne-babana nasıl davranıyorsun?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '21-mektup-evdeki-sessiz-bereket-short-005-day-39'
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
      narration: 'Bir gün herkes yaşlanır. Bu, hayatın kaçınılmaz seyrinin bir parçasıdır. Ve o gün geldiğinde, insanın etrafında nasıl bir tablo olduğu; bugün nasıl davrandığına bağlı olabilir.',
      visual_note: 'time-lapse of seasons changing in a peaceful landscape, contemplative mood',
      keywords: ['seasons', 'time', 'landscape', 'change']
    },
    {
      scene_id: 'scene-002',
      narration: 'Hayatta ince bir denge vardır: insan etrafına ne gösterirse, zamanla onu geri alır. Saygı gösterilen saygı görür. Hizmet eden, hizmet bulur. Bu bir vaat değil; hayatın içindeki doğal bir öğretim sürecidir.',
      visual_note: 'calm river reflecting trees above, symmetrical and balanced, peaceful forest',
      keywords: ['river', 'reflection', 'balance', 'forest']
    },
    {
      scene_id: 'scene-003',
      narration: 'Anne-babasına saygı göstermeyen biri, kendi çocuklarına ne öğretiyor? Farkında olsun ya da olmasın, bir şeyler öğretiyor. Ve öğretilenler, bir gün öğretene döner.',
      visual_note: 'parent and child walking together in a park, natural light, generational bond',
      keywords: ['parent child', 'walking', 'park', 'generational']
    },
    {
      scene_id: 'scene-004',
      narration: 'Bu bir tehdit değildir. Bu, hayatın içindeki ince bir adaleti görmektir. Ve bu adaleti görmek, insanı korkutmak için değil; bugünün her anını daha değerli kılmak için hatırlatılır.',
      visual_note: 'sunrise over a calm field, golden warm light, hopeful atmosphere',
      keywords: ['sunrise', 'field', 'golden light', 'hope']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '21-mektup-evdeki-sessiz-bereket',
    test_day: 'day-39',
    short_id: 'short-005',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
