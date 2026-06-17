// Derin Okuma — 22. Mektup - 1. Mebhas - 1-4. Vecih Shorts
// Short: short-004
// Filled on day-40

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Asıl Düşman Nerede Gizlidir?',
    description: 'Asıl düşmanı dışarıda mı arıyoruz?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '22-mektup-1-mebhas-1-4-vecih-short-004-day-40'
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
      narration: 'Asıl düşmanı dışarıda mı arıyoruz? Çoğu zaman insanın en büyük düşmanı dışarıda değil, içinde gizlidir. Kötü eğilimler, nefsin yönlendirmeleri, hevanın çekimi.',
      visual_note: 'A person\'s reflection in a still pool, looking directly at their own image.',
      keywords: ['reflection', 'pool', 'self-awareness', 'stillness']
    },
    {
      scene_id: 'scene-002',
      narration: 'Nefsin yönlendirmelerini fark etmek ve bunlarla mücadele etmek, dışarıdaki birini suçlamaktan çok daha güç ister. Ama getirisi de çok daha büyüktür.',
      visual_note: 'Person meditating by a window in soft morning light, atmosphere of inner calm.',
      keywords: ['meditation', 'inner peace', 'morning light', 'solitude']
    },
    {
      scene_id: 'scene-003',
      narration: 'Düşmanlık edilecek bir şey arıyorsan, önce kalbine bak. O savaşı kazanmak, her şeyden daha büyük bir zaferdir.',
      visual_note: 'Sunrise over a calm landscape, light emerging from within darkness.',
      keywords: ['sunrise', 'calm', 'victory', 'new light']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '22-mektup-1-mebhas-1-4-vecih',
    test_day: 'day-40',
    short_id: 'short-004',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
