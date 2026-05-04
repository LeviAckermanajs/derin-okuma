// Derin Okuma — 23. Söz 1. Mebhas 4. Nokta Shorts
// Short: short-003 — Muhtaçlık Bir Kanat
// Paste this into the n8n "Load Input" Code node.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  job: {
    title: 'Muhtaçlık Bir Kanat',
    description: 'Zayıflık ve muhtaçlık birer yük mü? Hayır. Bunlar aslında birer kanat.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-1-mebhas-4-nokta-short-003-day-11'
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
      "narration": "\"Acz\" gücünün yetmemesi; \"fakr\" muhtaç olmak. İlk bakışta bunlar dezavantajdır. Ama işin aslı tersinedir: insan bu iki özelliğiyle yükselir.",
      "visual_note": "bird in flight silhouetted against bright sky, wings fully spread, effortless soaring",
      "keywords": ["bird in flight", "silhouette", "wings spread", "effortless"]
    },
    {
      "scene_id": "scene-002",
      "narration": "İnsan gücüyle değil, muhtaçlığıyla yükselir. Modern çağda güç yüceltilir. Ama gerçek yükseliş, aczini doğru okuyandan gelir. Muhtaçlık, doğru adrese yönelince bir kapıya dönüşür.",
      "visual_note": "eagle soaring on thermal winds without beating wings, effortless lift",
      "keywords": ["eagle soaring", "thermal winds", "effortless", "lift"]
    },
    {
      "scene_id": "scene-003",
      "narration": "Kanat yük taşımaz; uçurur. İnsanın zayıflığı ve muhtaçlığı, doğru anlaşıldığında onu Allah'a yönelmenin vesilesi kılar. Bu yüzden acz ve fakr birer yük değil, birer kanattır.",
      "visual_note": "wide open sky at dawn, birds in formation, freedom and direction",
      "keywords": ["open sky", "birds in formation", "dawn", "freedom"]
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-1-mebhas-4-nokta',
    test_day: 'day-11',
    short_id: 'short-003',
    workflow: 'manual_scene_json_single_track_shorts_load_input'
  }
};

return [{ json: { raw_input: rawInput } }];
