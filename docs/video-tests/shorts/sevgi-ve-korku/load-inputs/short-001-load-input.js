// Derin Okuma — Sevgi ve Korku Shorts smoke test
// Short: short-001 — Kalbin Yükü Nereye Sığar?
// Paste this into the n8n "Load Input" Code node.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  job: {
    title: 'Kalbin Yükü Nereye Sığar?',
    description: 'İnsan bazen doğru insanı değil, yanlış yere yüklediği sevgiyi kaybeder.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'sevgi-ve-korku-short-001-day-09'
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
      "narration": "İnsan bazen doğru insanı değil, yanlış yere yüklediği sevgiyi kaybeder. Çünkü insandaki sevme kapasitesi bir kişiye, bir şeye, bir hayale sığmayacak kadar büyük yaratılmış.",
      "visual_note": "wide open landscape at dawn, single person standing on a hill, cinematic wide shot",
      "keywords": ["open landscape", "solitude", "dawn light", "cinematic"]
    },
    {
      "scene_id": "scene-002",
      "narration": "Kalbi dar olan arar, bulamaz. Kalbi geniş olan da arar — ama yanlış yerde. İnsan sevdiği şeye kendi sonsuzluk arzusunu yüklüyor. Ama fanî şeyler bu yükü taşıyamaz.",
      "visual_note": "hands reaching toward light through forest canopy, soft bokeh, slow motion",
      "keywords": ["reaching hands", "forest light", "hope", "cinematic slow motion"]
    },
    {
      "scene_id": "scene-003",
      "narration": "Büyük kapasiteyi küçük şeylere dökersen, o şey kırılır ya da seni kırar. Çözüm sevme kapasiteni küçültmek değil — sevgini doğru yere bağlamak.",
      "visual_note": "gentle river flowing toward wide open sea, calm and inevitable movement",
      "keywords": ["river", "open sea", "calm flow", "natural"]
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: 'sevgi-ve-korku',
    test_day: 'day-09',
    short_id: 'short-001',
    workflow: 'manual_scene_json_single_track_shorts_load_input'
  }
};

return [{ json: { raw_input: rawInput } }];
