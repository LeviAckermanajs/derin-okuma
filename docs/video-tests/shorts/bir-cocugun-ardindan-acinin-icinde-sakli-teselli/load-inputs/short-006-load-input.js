// Derin Okuma — Bir Çocuğun Ardından: Acının İçinde Saklı Teselli Shorts
// Short: short-006 — Ayrılık Geçici, Sevgi Ebedî
// Day-30 — filled

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Ayrılık Geçici, Sevgi Ebedî',
    description: 'Ayrılık geçicidir, merak etme. Bu üç kelime, kalbin en derin sızısına merhemdir.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'bir-cocugun-ardindan-acinin-icinde-sakli-teselli-short-006-day-30'
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
      narration: 'Ayrılık geçicidir, merak etme. Bu üç kelime, kalbin en derin sızısına merhemdir. Çünkü acının içindeki en büyük ağırlık çoğu zaman \'bir daha asla\' duygusudur.',
      visual_note: 'Lone lighthouse beam sweeping through night fog, steady light in darkness, hope.',
      keywords: ['lighthouse', 'night fog', 'steady light', 'hope']
    },
    {
      scene_id: 'scene-002',
      narration: 'O çocuk, ahirette anne babasına şefaatçi olacaktır. Hem ebedî bir evlat olarak bekleyecek, hem de en temiz sevgiyle karşılayacaktır. Bu bir son değil; daha güzel bir buluşmanın ön habercisidir.',
      visual_note: 'Two silhouettes reaching toward each other at a golden horizon, reunion, warm embrace.',
      keywords: ['silhouettes', 'golden horizon', 'reunion', 'warm embrace']
    },
    {
      scene_id: 'scene-003',
      narration: 'Ayrılık geçicidir. Acı büyüktür; ama sonsuz değildir. Çocuk kaybolmamıştır; sadece önce gitmiştir. Ve sevgi burada bitmez; asıl buluşma ileridedir.',
      visual_note: 'Dawn light over quiet landscape, darkness lifting, new horizon appearing, peaceful and hopeful.',
      keywords: ['dawn light', 'quiet landscape', 'darkness lifting', 'new horizon']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: 'bir-cocugun-ardindan-acinin-icinde-sakli-teselli',
    test_day: 'day-30',
    short_id: 'short-006',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
