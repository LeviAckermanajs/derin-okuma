// Derin Okuma — İnsanın Sahiplik Yanılgısı ve Emanet Bilinci Shorts
// Short: short-003 — Dışarıdan Parlayan, İçeriden Karanlık
// Day-29 — filled by Claude

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Dışarıdan Parlayan, İçeriden Karanlık',
    description: 'Dışarıdan her şeyi olan birinin içi neden boş hissedebilir?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'insanin-sahiplik-yanilgisi-ve-emanet-bilinci-short-003-day-29'
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
      narration: 'Dışarıdan her şeye sahip görünen birinin içi neden boş hissedebilir? Çünkü gerçek saadet dıştaki tabloya bağlı değildir. İçerideki karanlığı dıştaki ışıklar söndüremez.',
      visual_note: 'Elegant lit room at night, warm interior light, person\'s silhouette alone by window, quiet.',
      keywords: ['lit room', 'night', 'silhouette', 'loneliness']
    },
    {
      scene_id: 'scene-002',
      narration: 'İnsan kendisini sahipsiz hissederse ölüm karanlık bir son gibi görünür. Musibet anlamsız bir saldırı gibi gelir. Gelecek korkutur, geçmiş üzer. Bu hâl hiçbir dış zenginlikle geçmez.',
      visual_note: 'Person sitting alone in modern apartment surrounded by objects, looking lost and empty.',
      keywords: ['modern apartment', 'alone', 'surrounded by things', 'empty']
    },
    {
      scene_id: 'scene-003',
      narration: 'Gerçek huzurun kaynağı başkadır. İnsanın kendisini ve hayatı doğru okuması, bakışını doğru yere yönlendirmesidir. Dışarıdaki ışık içeriyi aydınlatmaz; ama doğru bir bakış her yerde ışık bulur.',
      visual_note: 'Dawn light slowly filling a simple room, warm and growing illumination from within, peaceful.',
      keywords: ['dawn light', 'simple room', 'growing light', 'peace']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: 'insanin-sahiplik-yanilgisi-ve-emanet-bilinci',
    test_day: 'day-29',
    short_id: 'short-003',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
