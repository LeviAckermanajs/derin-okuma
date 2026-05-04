// Derin Okuma — Sevgi ve Korku Shorts smoke test
// Short: short-005 — Sevgiyi Arındırmak Ne Demek?
// Paste this into the n8n "Load Input" Code node.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  job: {
    title: 'Sevgiyi Arındırmak Ne Demek?',
    description: 'Allah hesabına sevmek dünyayı terk etmek değil. Dünyayı yerli yerine koymaktır.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'sevgi-ve-korku-short-005-day-09'
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
      "narration": "Allah hesabına sevmek ne demek? Dünyayı terk etmek değil. Sevdiğin insanları, dostlukları, güzellikleri sevmeyi bırakmak değil.",
      "visual_note": "warm family gathering at golden hour, soft light, genuine connection, cinematic",
      "keywords": ["family gathering", "warm light", "connection", "genuine"]
    },
    {
      "scene_id": "scene-002",
      "narration": "Şu anlama geliyor: sevdiğin şeyi bağımsız, nihai, mutlak bir merkez olarak görmemek. Onu Allah'ın eseri, nimeti, emaneti olarak sevmek. Aynayı sevmek ama aynadaki güzelliği unutmamak.",
      "visual_note": "sunlight reflecting on water surface, mirroring sky above, gentle ripples",
      "keywords": ["water reflection", "sunlight", "mirror", "ripples"]
    },
    {
      "scene_id": "scene-003",
      "narration": "Bu bakış neyi değiştirir? Sahiplenme azalır. Kaybettiğinde parçalanma azalır. Sevgi daha temiz olur. Karşı tarafı yutmaya değil, hakkıyla sevmeye başlarsın. Bu, sevginin azalması değil; arınmasıdır.",
      "visual_note": "clear mountain stream flowing over smooth stones, clean water, morning light",
      "keywords": ["clear stream", "mountain water", "clean", "morning light"]
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: 'sevgi-ve-korku',
    test_day: 'day-09',
    short_id: 'short-005',
    workflow: 'manual_scene_json_single_track_shorts_load_input'
  }
};

return [{ json: { raw_input: rawInput } }];
