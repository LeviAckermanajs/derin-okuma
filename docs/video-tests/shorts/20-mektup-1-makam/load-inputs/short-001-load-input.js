// Derin Okuma — 20. Mektup - 1. Makam Shorts
// Short: short-001 — Sahipsizlik Neden İnsanı Yorar?
// Day-33 — Filled by Claude

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'İnsan Neden Sahipsiz Hisseder?',
    description: 'İnsan bazen öyle bir his duyar: sanki hiçbir şey gerçekten benim değil.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '20-mektup-1-makam-short-001-day-33'
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
      narration: 'İnsan bazen öyle bir his duyar: sanki hiçbir şey gerçekten benim değil. Sahip olduğu şeyler, sevdikleri, bütün emekleri... hepsi kırılgan, hepsi geçici. Bu hissin altında yatan şey sahipsizlik korkusudur; ve bu, insanın en derin endişelerinden biridir.',
      visual_note: 'A lone person standing on a misty plain at dusk, slow pan, melancholic but calm.',
      keywords: ['lone person', 'misty plain', 'dusk', 'solitude']
    },
    {
      scene_id: 'scene-002',
      narration: 'Ama bir şey değiştiğinde bu korku da değişir. İnsan gerçek sahibini bulduğunda, içindeki dağınıklık toparlanır. Artık sahipsizlik değil, sahiplik vardır. Bütün ihtiyaçlarını karşılayabilecek sonsuz bir rahmet hazinesine kapı açılır.',
      visual_note: 'A warm lantern glowing steadily in a dark room, safe and still, golden light.',
      keywords: ['warm lantern', 'dark room', 'safe haven', 'golden light']
    },
    {
      scene_id: 'scene-003',
      narration: 'Sahip olduğunu zannettiğin şeyler geçebilir. Ama seni bütün bu güzelliklerle buluşturan, seni yaratan, seni koruyan Zât bâkidir. Ve O var olduğu sürece, insanın ümidi tükenmez.',
      visual_note: 'Sunlight breaking through heavy clouds, warm light rays over a quiet landscape.',
      keywords: ['sunlight through clouds', 'warm rays', 'quiet landscape', 'hope']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '20-mektup-1-makam',
    test_day: 'day-33',
    short_id: 'short-001',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
