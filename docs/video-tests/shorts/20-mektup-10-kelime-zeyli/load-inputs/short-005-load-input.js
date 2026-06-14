// Derin Okuma — Bir Zerre Kendi Başına Ne Yapabilir? Shorts
// Short: short-005
// Content filled: day-38

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Bir Zerre Tek Başına Ne Yapabilir?',
    description: 'Bir zerreye bütün işleri kendin yap diyebilmek için ondan sonsuz ilim ve kudret beklemek gerekir.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '20-mektup-10-kelime-zeyli-short-005-day-38'
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
      narration: 'Bir zerreye bütün işleri kendin yap deseydin, ondan ne beklemek gerekirdi? Sanki her şeyi bilen bir ilim. Sanki her şeye gücü yeten bir kuvvet. Sanki içinde görünmez fabrikalar taşıyan bir yapı.',
      visual_note: 'tiny particle under microscope, alone, vast emptiness around',
      keywords: ['particle', 'microscope', 'alone', 'emptiness']
    },
    {
      scene_id: 'scene-002',
      narration: 'Bu ise zerreden beklenilemeyecek kadar büyük bir yüktür. Zerre kendi başına bırakıldığında, yalnızca kendi küçüklüğü kadar bir varlıktır. Büyük işler için büyük bir kaynağa bağlı olmak gerekir.',
      visual_note: 'small stone in vast empty landscape, minimalist, alone',
      keywords: ['small stone', 'vast landscape', 'minimalist', 'alone']
    },
    {
      scene_id: 'scene-003',
      narration: 'Ama o zerre, sonsuz ilim ve kudret sahibi bir Yaratıcı\'nın emriyle hareket ederse iş değişir. Artık kendi gücüyle değil, bağlı olduğu kudretle vazife görür. Küçüklük sorun olmaktan çıkar.',
      visual_note: 'tiny particle catching sunlight, glowing with connection, brilliant',
      keywords: ['particle', 'sunlight', 'glowing', 'connection']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '20-mektup-10-kelime-zeyli',
    test_day: 'day-38',
    short_id: 'short-005',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
