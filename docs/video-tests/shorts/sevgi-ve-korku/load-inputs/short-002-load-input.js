// Derin Okuma — Sevgi ve Korku Shorts smoke test
// Short: short-002 — Bu Korku Neden Bitmez?
// Paste this into the n8n "Load Input" Code node.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  job: {
    title: 'Bu Korku Neden Bitmez?',
    description: 'İnsanların gözünden bu kadar korkmak seni neden yoruyor? Çünkü onlar sana merhamet etmez.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'sevgi-ve-korku-short-002-day-09'
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
      "narration": "İnsanların gözünden bu kadar korkmak seni neden yoruyor? Cevap çok basit: çünkü onlar sana merhamet etmez. Ya da senin yalvarmanı kabul etmez.",
      "visual_note": "crowded city street from above, anonymous faces, grey tones, slow zoom",
      "keywords": ["crowded street", "anonymous", "city", "grey tones"]
    },
    {
      "scene_id": "scene-002",
      "narration": "Patronunun bakışından, çevrenin yargısından, eleştiriden, reddedilmekten korkmak. Bunların hepsi gerçek. Ama hepsinin ortak yanı şu: bu korkular sonu gelmeyen birer zincirdir.",
      "visual_note": "person walking through endless dark corridor, single light source ahead, cinematic",
      "keywords": ["dark corridor", "solitary walk", "cinematic", "light ahead"]
    },
    {
      "scene_id": "scene-003",
      "narration": "Çünkü insanları merkeze koyunca, onlar sürekli değişiyor. Gönülleri değişiyor, kanaatleri değişiyor. Sen ise bu değişime ayak uydurmaya çalışırken tükeniyorsun. Korkunun nesnesi yanlışsa, güven değil yalnızca yorgunluk üretir.",
      "visual_note": "waves crashing on rocks repeatedly, relentless motion, slow motion water",
      "keywords": ["waves on rocks", "relentless", "slow motion", "ocean"]
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: 'sevgi-ve-korku',
    test_day: 'day-09',
    short_id: 'short-002',
    workflow: 'manual_scene_json_single_track_shorts_load_input'
  }
};

return [{ json: { raw_input: rawInput } }];
