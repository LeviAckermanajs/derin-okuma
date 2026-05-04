// Derin Okuma — 23. Söz 1. Mebhas 4. Nokta Shorts
// Short: short-006 — Muhtaç Olduğu İçin Değerlidir
// Paste this into the n8n "Load Input" Code node.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  job: {
    title: 'Muhtaç Olduğu İçin Değerlidir',
    description: 'İnsan eksik olduğu için değersiz değil — muhtaç olduğu için değerlidir.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-1-mebhas-4-nokta-short-006-day-11'
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
      "narration": "İnsan eksik olduğu için değersiz değil — muhtaç olduğu için değerlidir. Eksiklik mahcubiyet vesilesi; muhtaçlık ise dua kapısı. Bu kapıdan girenin değeri artar.",
      "visual_note": "open window looking out to vast sky and horizon, threshold to infinite",
      "keywords": ["open window", "vast sky", "horizon", "threshold"]
    },
    {
      "scene_id": "scene-002",
      "narration": "Modern insan bağımsız görünmek istiyor. Kontrol etmek, kendi başına yetmek. Ama bunun sonucu bir paradoks: bilgi artıyor, anlam azalıyor; kaygı azalmıyor, çoğalıyor.",
      "visual_note": "busy modern city from above, people isolated in crowd, grey urban tones",
      "keywords": ["busy city", "crowd isolation", "grey tones", "urban paradox"]
    },
    {
      "scene_id": "scene-003",
      "narration": "İnsan zayıf olduğu için düşmez; zayıflığını yanlış okuduğu için düşer. Muhtaçlığını dua kapısı olarak okuyan yükselir. Bu okuyuş, her şeyi değiştirir.",
      "visual_note": "sunrise over mountains, new light breaking over horizon, hope and renewal",
      "keywords": ["sunrise", "mountains", "new light", "hope and renewal"]
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-1-mebhas-4-nokta',
    test_day: 'day-11',
    short_id: 'short-006',
    workflow: 'manual_scene_json_single_track_shorts_load_input'
  }
};

return [{ json: { raw_input: rawInput } }];
