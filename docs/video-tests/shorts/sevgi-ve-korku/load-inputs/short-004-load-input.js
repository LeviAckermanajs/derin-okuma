// Derin Okuma — Sevgi ve Korku Shorts smoke test
// Short: short-004 — Allah Korkusunda Lezzet Var mı?
// Paste this into the n8n "Load Input" Code node.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  job: {
    title: 'Allah Korkusunda Lezzet Var mı?',
    description: 'Allah\'tan korkan insan, başka korkuların esaretinden kurtulmaya başlar.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'sevgi-ve-korku-short-004-day-09'
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
      "narration": "Allah'tan korkmak kulağa ağır geliyor. Ama şunu düşün: Allah'tan korkan insan, başka korkuların esaretinden kurtulmaya başlar. İnsanlardan aşırı korkmaz. Rızkından yıkılmaz. Kaybetmekten tümden darmadağın olmaz.",
      "visual_note": "single candle flame in dark room, steady and calm, close up, cinematic",
      "keywords": ["candle flame", "dark room", "steady light", "cinematic"]
    },
    {
      "scene_id": "scene-002",
      "narration": "Bugün kaygıların çoğu dağınık korkudur: acaba ne olacak, ya kaybedersem, ya sevilmezsem, ya yetişemezsem. Bu korkular gerçek. Ama hepsi ayrı ayrı insanı yer.",
      "visual_note": "scattered clouds in stormy sky, chaotic wind patterns, grey tones",
      "keywords": ["stormy sky", "scattered clouds", "grey", "chaotic"]
    },
    {
      "scene_id": "scene-003",
      "narration": "Allah korkusu bu dağınık korkuları sihirli şekilde yok etmez. Ama onların üzerine çıkan bir merkez verir. Kalp tek noktaya bağlandığında, diğer korkular yerini buluyor. Bu toplanma hissi, metnin deyimiyle, gerçek bir lezzettir.",
      "visual_note": "clouds parting to reveal single ray of sunlight over ocean, dramatic and calm",
      "keywords": ["ray of light", "parting clouds", "ocean", "dramatic calm"]
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: 'sevgi-ve-korku',
    test_day: 'day-09',
    short_id: 'short-004',
    workflow: 'manual_scene_json_single_track_shorts_load_input'
  }
};

return [{ json: { raw_input: rawInput } }];
