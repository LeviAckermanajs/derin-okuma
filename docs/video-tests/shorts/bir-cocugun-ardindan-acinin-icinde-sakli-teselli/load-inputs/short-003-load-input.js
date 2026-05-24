// Derin Okuma — Bir Çocuğun Ardından: Acının İçinde Saklı Teselli Shorts
// Short: short-003 — Evlat Neden Sahiplenilmez?
// Day-30 — filled

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Evlat Neden Sahiplenilmez?',
    description: 'Sever, büyütürsün. Ama o çocuğu yoktan var etmedin. O hâlde sahiplik gerçekten kime ait?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'bir-cocugun-ardindan-acinin-icinde-sakli-teselli-short-003-day-30'
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
      narration: 'Sever, büyütürsün. Ama o çocuğu yoktan var etmedin. O hâlde sahiplik gerçekten kime ait? Bu soru, acı geldiğinde kalbin durduğu yeri belirler.',
      visual_note: 'Open palm releasing sand into the wind, letting go gently, outdoor natural light.',
      keywords: ['open palm', 'sand releasing', 'letting go', 'wind']
    },
    {
      scene_id: 'scene-002',
      narration: 'Çocuğun varlığı, hayatı ve geleceği; başından beri onu yaratan sonsuz bir kudretin elindeydi. Anne baba ona bakar, ama asıl sahibi değildir. Bu hakikat, kaybı daha farklı bir yerden anlamlandırır.',
      visual_note: 'Newborn hand grasping adult finger, trust and dependence, soft clinical or home light.',
      keywords: ['newborn hand', 'trust', 'dependence', 'fragile life']
    },
    {
      scene_id: 'scene-003',
      narration: 'O emanet geri alındığında, kalp şunu tutunabilir: Benim şefkatim sınırlıydı. Ama onu alana getiren rahmet sınırsızdır. Bu düşünce, isyanın yerini bir teslim ile değiştirebilir.',
      visual_note: 'Light rays breaking through clouds over open field, divine comfort, hope after grief.',
      keywords: ['light through clouds', 'open field', 'divine comfort', 'hope']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: 'bir-cocugun-ardindan-acinin-icinde-sakli-teselli',
    test_day: 'day-30',
    short_id: 'short-003',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
