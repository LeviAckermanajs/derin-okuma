// Derin Okuma — 20. Mektup - 2. Makam - 10. Kelime Shorts
// Short: short-004 — Bir Ağaç Bin Meyveyi Neden Yorulmadan Verir?

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Bir Ağaç Bin Meyveyi Neden Yorulmadan Verir?',
    description: 'Bir ağaç binlerce meyve üretir; ama bu onu tek bir meyve üretmekten daha fazla yormaz. Neden?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'bir-bahari-yaratmak-neden-bir-cicek-kadar-kolaydir-short-004-day-37'
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
      narration: 'Bir ağacın binlerce meyvesi vardır; ama hepsi tek bir köke ve ortak bir hayat düzenine bağlıdır. Bu yüzden bütün meyvelerin beslenmesi, tek bir meyvenin beslenmesi gibi gerçekleşir. Binlerce meyve, tek köke bağlı oldukları için ağacı zorlamaz.',
      visual_note: 'Apple tree heavy with fruit in autumn light, trunk and root system visible',
      keywords: ['apple tree', 'abundant fruit', 'single trunk', 'autumn harvest']
    },
    {
      scene_id: 'scene-002',
      narration: 'Eğer her meyve için ayrı bir kök gerekirdi, tek bir meyvenin meydana gelmesi için bütün bir ağaç sisteminin kurulması gerekirdi. Birlik olmadan, en küçük parça bile devasa bir düzenek ister.',
      visual_note: 'A single apple resting on the ground beneath a vast tree, emphasizing origin and scale',
      keywords: ['single apple', 'tree base', 'origin', 'dependency']
    },
    {
      scene_id: 'scene-003',
      narration: 'Birlik, çokluğu kolaylaştırır. Dağınıklık ise tekini bile son derece güçleştirir. Kâinattaki sayısız varlığın bu kadar kolay var olması, tek bir merkezden gelen birliğin eseridir.',
      visual_note: 'A network of roots glowing beneath a tree, all connected to one central point',
      keywords: ['root network', 'tree roots', 'connected system', 'underground']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: 'bir-bahari-yaratmak-neden-bir-cicek-kadar-kolaydir',
    test_day: 'day-37',
    short_id: 'short-004',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
