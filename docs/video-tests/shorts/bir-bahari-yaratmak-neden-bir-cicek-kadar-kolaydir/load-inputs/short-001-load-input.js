// Derin Okuma — 20. Mektup - 2. Makam - 10. Kelime Shorts
// Short: short-001 — İnsan Neden Büyüğü Zor Sanır?

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'İnsan Neden Büyüğü Zor Sanır?',
    description: 'İnsan bir şey yaparken ne kadar güce ihtiyaç duyuyorsa, her şeyin de o kadar güce ihtiyaç duyduğunu sanır. Bu zihniyet doğal görünür; ama bir yerde kırılır.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'bir-bahari-yaratmak-neden-bir-cicek-kadar-kolaydir-short-001-day-37'
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
      narration: 'İnsan bir şey yaparken ne kadar güce ihtiyaç duyuyorsa, her şeyin de o kadar güce ihtiyaç duyduğunu sanır. Kendi sınırlı gücünden hareketle başkasını değerlendirmeye çalışır. Bu, insan için doğaldır; ama evrensel bir ölçüt değildir.',
      visual_note: 'A small person standing before an enormous mountain range, contemplating scale',
      keywords: ['vast mountain', 'small person', 'scale contrast', 'contemplation']
    },
    {
      scene_id: 'scene-002',
      narration: 'Güçlük, işin büyüklüğünden doğmaz; yapanın gücünün yetersizliğinden doğar. Kendi sınırlarından hareket eden bir varlık için bu doğrudur. Ama güç sınırsız olduğunda, büyüklük ve küçüklük aynı anlama gelir.',
      visual_note: 'A river flowing effortlessly over large boulders, water finding its way naturally',
      keywords: ['river over rocks', 'effortless flow', 'natural movement', 'water power']
    },
    {
      scene_id: 'scene-003',
      narration: 'Sınırsız bir kudret için en büyük şey, en küçük şey kadar kolaydır. Cennetin yaratılması bahar kadar, baharın yaratılması bahçe kadar, bahçeninki ise bir çiçek kadar kolaydır. Büyüklük, bu kudret için bir yük değildir.',
      visual_note: 'Wide spring valley panorama fading to a single flower in macro close-up',
      keywords: ['spring valley', 'single flower', 'scale transition', 'nature beauty']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: 'bir-bahari-yaratmak-neden-bir-cicek-kadar-kolaydir',
    test_day: 'day-37',
    short_id: 'short-001',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
