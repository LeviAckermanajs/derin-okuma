// Derin Okuma — 23. Söz 1. Mebhas 4. Nokta Shorts
// Short: short-001 — İman İnsanı Sultan Eder
// Paste this into the n8n "Load Input" Code node.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  job: {
    title: 'İman İnsanı Sultan Eder',
    description: 'İman sadece bir inanç değil. İmanlı insan dışarıdan zayıf olabilir. Ama iç dünyasında sultandır.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-1-mebhas-4-nokta-short-001-day-11'
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
      "narration": "İman sadece bir inanç değil. İmanlı insan dışarıdan zayıf olabilir; maddi imkânları az, makamı olmayabilir. Ama iç dünyasında merkezlidir. Sahipsiz değildir, anlamsız değildir.",
      "visual_note": "person standing calmly in storm, dramatic contrast between chaos and stillness",
      "keywords": ["calm in storm", "stillness", "dramatic contrast", "inner peace"]
    },
    {
      "scene_id": "scene-002",
      "narration": "Bu sultanlık taht ve kılıçla değil, anlam ve bağlılıkla kazanılır. Kâinatı başıboş görmemek, hadiseleri tesadüf okumamak, aczini zillet değil kapı yapmak.",
      "visual_note": "light streaming through ancient stone archway into open sky, symbolic threshold",
      "keywords": ["stone archway", "streaming light", "symbolic", "threshold"]
    },
    {
      "scene_id": "scene-003",
      "narration": "Hakiki insanlık, biyolojik olmaktan öte bir anlam taşır. İman, bu anlamı verir. Ve bu yüzden iman insanı hem gerçek anlamda insan eder, hem de içten sultan kılar.",
      "visual_note": "sunrise silhouette of standing figure on hilltop, dignity and presence",
      "keywords": ["sunrise silhouette", "hilltop", "dignity", "presence"]
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-1-mebhas-4-nokta',
    test_day: 'day-11',
    short_id: 'short-001',
    workflow: 'manual_scene_json_single_track_shorts_load_input'
  }
};

return [{ json: { raw_input: rawInput } }];
