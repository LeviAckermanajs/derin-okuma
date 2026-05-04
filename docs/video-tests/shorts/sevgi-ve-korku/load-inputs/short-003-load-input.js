// Derin Okuma — Sevgi ve Korku Shorts smoke test
// Short: short-003 — Kalp Neden Hep Yaralı?
// Paste this into the n8n "Load Input" Code node.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  job: {
    title: 'Kalp Neden Hep Yaralı?',
    description: 'Kalp sevdiği şeylere elleriyle yapışır. Ama o şeyler gidince, elini de parçalayarak gider.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'sevgi-ve-korku-short-003-day-09'
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
      "narration": "Kalp sevdiği şeylere elleriyle yapışır. Ama o şeyler gidince, elini de parçalayarak gider. Biten ilişki. Ölen yakın. Kaybedilen sağlık. Elden giden kariyer.",
      "visual_note": "autumn leaves falling from tree, slow motion, melancholy light, cinematic",
      "keywords": ["falling leaves", "autumn", "slow motion", "melancholy"]
    },
    {
      "scene_id": "scene-002",
      "narration": "Hiçbir şey yerinde kalmıyor. Gençlik gidiyor, para bitiyor, dostluklar zayıflıyor, şartlar değişiyor. Kalp ise bağ kurmaya devam ediyor. Ve bu yüzden sürekli yaralanıyor.",
      "visual_note": "time lapse of changing seasons on same tree, from bloom to bare branches",
      "keywords": ["seasons change", "time lapse", "bare tree", "passage of time"]
    },
    {
      "scene_id": "scene-003",
      "narration": "İnsan iki şeyden birini seçiyor: ya acıyı derinden hissedip ıztırap çekiyor, ya da gafletle uyuşuyor. Ama üçüncü bir yol var: sevgini kalıcı olana bağlamak. O zaman geçici şeyler seni yıkmaz, ağırlar.",
      "visual_note": "calm lake reflecting mountains at sunset, still and peaceful, wide angle",
      "keywords": ["calm lake", "mountain reflection", "sunset", "peaceful"]
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: 'sevgi-ve-korku',
    test_day: 'day-09',
    short_id: 'short-003',
    workflow: 'manual_scene_json_single_track_shorts_load_input'
  }
};

return [{ json: { raw_input: rawInput } }];
