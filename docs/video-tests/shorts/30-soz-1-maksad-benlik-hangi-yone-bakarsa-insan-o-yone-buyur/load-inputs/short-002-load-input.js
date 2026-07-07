// Derin Okuma — 30.Söz - 1.Maksad - Mukaddime Shorts
// Short: short-002
// Content filled for day-49 n8n input.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: "İnsan Nasıl Ayna ya da Perde Olur?",
    description: "Benlik ışığı sahiplenmeden gösterirse ayna, nimeti kendinden bilirse perde olur. İnsanın yönü, gördüğü hakikati de değiştirir.\n\n#derinokuma #shorts #tefekkür #maneviyat #benlik #kulluk",
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur-short-002-day-49'
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
    "title": "İki İhtimal",
    "narration": "İnsan nasıl hem ayna hem perde olabilir? Bir ayna ışığı üretmez, fakat temiz olduğunda onu eksiltmeden yansıtır.",
    "visual_note": "A clean mirror reflecting sunlight in a quiet room, vertical cinematic composition.",
    "keywords": [
      "clean mirror",
      "sunlight",
      "reflection",
      "quiet room"
    ]
  },
  {
    "scene_id": "scene-002",
    "title": "Ayna Olan Benlik",
    "narration": "İnsan da aklını, yeteneğini ve başarısını kendinden bilmediğinde ayna olur. Nimeti gösterir, fakat kaynağını sahiplenmez; başarı şükre ve sorumluluğa dönüşür.",
    "visual_note": "A person sharing success with a team under soft daylight, vertical frame.",
    "keywords": [
      "shared success",
      "team",
      "gratitude",
      "daylight"
    ]
  },
  {
    "scene_id": "scene-003",
    "title": "Perde Olan Benlik",
    "narration": "Nimeti yalnız kendine verdiğinde ise benlik kalın bir perdeye dönüşür. Işık kaybolmaz; fakat insan onu göremez. Her günkü tercihlerimiz, içimizdeki aynayı ya temizler ya da örter.",
    "visual_note": "Heavy curtain covering a bright window, then opening slightly, vertical shot.",
    "keywords": [
      "heavy curtain",
      "bright window",
      "obstruction",
      "inner choice"
    ]
  }
],

  metadata: {
    source: 'derin-okuma',
    blog_post: '30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur',
    test_day: 'day-49',
    short_id: 'short-002',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
