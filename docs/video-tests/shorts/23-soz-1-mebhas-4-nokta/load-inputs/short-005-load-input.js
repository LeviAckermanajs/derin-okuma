// Derin Okuma — 23. Söz 1. Mebhas 4. Nokta Shorts
// Short: short-005 — Ben Yapıyorum Yanılgısı
// Paste this into the n8n "Load Input" Code node.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  job: {
    title: 'Ben Yapıyorum Yanılgısı',
    description: 'En büyük yanılgı bu: \'Ben yapıyorum.\' Ama insan kendini ne yaratıyor ne yaşatıyor ne de kontrol ediyor.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-1-mebhas-4-nokta-short-005-day-11'
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
      "scene_id": "scene-001",
      "narration": "\"Ben yapıyorum\" demek en büyük yanılgıdır. İnsan kendini yaratmıyor, kendini yaşatmıyor, kalbinin atışını kontrol etmiyor. Ama buna rağmen başarıyı, sağlığı, zekâyı kendine mülk ediniyor.",
      "visual_note": "person casting long shadow in setting sun, shadow larger than figure itself",
      "keywords": ["long shadow", "setting sun", "figure and shadow", "ego"]
    },
    {
      "scene_id": "scene-002",
      "narration": "Bu sahiplenme bir nankörlüktür. Verilen şeyi verende kabul etmemek. Suyun tadını almak ama kaynağını unutmak. Şükür kapanınca anlam da azalır.",
      "visual_note": "glass of clear water in sunlight, beauty of simple gift overlooked, still life",
      "keywords": ["glass of water", "sunlight", "simple gift", "still life"]
    },
    {
      "scene_id": "scene-003",
      "narration": "Ama bu fark edildiğinde her şey değişir. \"Ben» değil, \"bana verildi» demek. Bu küçük bir söz değişikliği değil; bakışın tümden dönüşmesidir.",
      "visual_note": "open hands receiving light, gratitude and surrender, warm cinematic light",
      "keywords": ["open hands", "receiving light", "gratitude", "warm light"]
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-1-mebhas-4-nokta',
    test_day: 'day-11',
    short_id: 'short-005',
    workflow: 'manual_scene_json_single_track_shorts_load_input'
  }
};

return [{ json: { raw_input: rawInput } }];
