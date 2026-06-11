// Derin Okuma — 20. Mektup - 2. Makam - 10. Kelime Shorts
// Short: short-005 — Güneş Neden Milyonlarca Yüzeyde Aynıdır?

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Güneş Neden Milyonlarca Yüzeyde Aynıdır?',
    description: 'Güneş aynı anda milyonlarca yüzeye yansır; ne ışığı bölünür, ne de azalır.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'bir-bahari-yaratmak-neden-bir-cicek-kadar-kolaydir-short-005-day-37'
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
      narration: 'Güneş, aynı anda binlerce yüzeye yansıyabilir. Bir aynada belirmesi başka bir aynada belirmesine engel olmaz. Milyonlarca yüzeye ulaşması ışığını azaltmaz ya da bölmez. Güneşin önce şu sonra bu şeklinde sırayla çalışması gerekmez; hepsi aynı anda gerçekleşir.',
      visual_note: 'Sunlight reflecting simultaneously in dozens of water surfaces, lake and puddles',
      keywords: ['sunlight reflections', 'multiple surfaces', 'simultaneous light', 'water mirrors']
    },
    {
      scene_id: 'scene-002',
      narration: 'Aynı anda, her yerde, külfetsiz ve birbirine engel olmadan her iş gerçekleşebilir. Bu, sınırsız kudretin özelliğidir. Zaman kuyruğu gerektirmez. Bir varlığa yönelmek, diğerlerini bekletmek anlamına gelmez.',
      visual_note: 'Stars shining in all directions of the night sky, each distinct and undiminished',
      keywords: ['starry sky', 'infinite stars', 'simultaneous shine', 'night cosmos']
    },
    {
      scene_id: 'scene-003',
      narration: 'Tek bir yaratıcıya bağlanan her varlık, sanki yalnızca o yaratılıyormuş gibi özenle işlenir. Çokluk özenin azalmasına yol açmaz. Her çiçek, bütün bahar kadar özenle biçimlendirilmiştir.',
      visual_note: 'Single flower in sharp macro detail with soft bokeh spring garden in background',
      keywords: ['flower macro', 'single bloom', 'bokeh background', 'detail and depth']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: 'bir-bahari-yaratmak-neden-bir-cicek-kadar-kolaydir',
    test_day: 'day-37',
    short_id: 'short-005',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
