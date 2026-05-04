// Derin Okuma — Sevgi ve Korku Shorts smoke test
// Short: short-006 — Neden Sevdikten Şikâyet Ederiz?
// Paste this into the n8n "Load Input" Code node.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  job: {
    title: 'Neden Sevdikten Şikâyet Ederiz?',
    description: 'Neden mecazî aşklarda çoğunlukla şikâyet var? Çünkü sen sonsuzluk arzunu fanî birine yükledin.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'sevgi-ve-korku-short-006-day-09'
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
      "narration": "Neden mecazî aşklarda çoğunlukla şikâyet var? Metnin cevabı çok keskin: çünkü insan, kalbinin taşıdığı aşk büyüklüğüyle fanî bir nesneye bağlanınca, o nesne bu yükü taşıyamaz.",
      "visual_note": "single flower in a large empty field, delicate against vast space, cinematic",
      "keywords": ["single flower", "vast field", "delicate", "lonely"]
    },
    {
      "scene_id": "scene-002",
      "narration": "Sen sevdiğin kişiden şunu bekliyorsun: hep beni anlasın, hiç değişmesin, beni tamamlasın, içimdeki boşluğu kapatsın. Ama bunlar bir insanın taşıyabileceği yükler değil.",
      "visual_note": "fragile glass vessel being filled with water until it overflows, slow motion",
      "keywords": ["overflowing glass", "fragile", "breaking point", "water"]
    },
    {
      "scene_id": "scene-003",
      "narration": "Bu yüzden şikâyet aslında sevgiliden gelmiyor. Yanlış yere bağlanmış kalpten geliyor. Çözüm sevmemek değil — sevgini taşıyabilecek büyüklükte bir merkeze bağlamak.",
      "visual_note": "small boat anchored in vast calm harbor, secure against large open sea",
      "keywords": ["small boat", "calm harbor", "anchored", "vast sea"]
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: 'sevgi-ve-korku',
    test_day: 'day-09',
    short_id: 'short-006',
    workflow: 'manual_scene_json_single_track_shorts_load_input'
  }
};

return [{ json: { raw_input: rawInput } }];
