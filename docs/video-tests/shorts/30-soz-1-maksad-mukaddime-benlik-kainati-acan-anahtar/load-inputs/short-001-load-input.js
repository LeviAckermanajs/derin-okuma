// Derin Okuma — 30.Söz - 1.Maksad - Mukaddime Shorts
// Short: short-001
// Content filled for day-49 n8n input.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: "Benlik Neden Anahtar ve Kilittir?",
    description: "Ben duygusu doğru yöne çevrildiğinde insanı hakikate açar; sahiplik iddiasına döndüğünde kendi içine kilitler. Mesele benliği silmek değil, doğru yerde kullanmaktır.\n\n#derinokuma #shorts #tefekkür #iman #benlik #ene",
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '30-soz-1-maksad-mukaddime-benlik-kainati-acan-anahtar-short-001-day-49'
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
    "title": "Anahtar ve Kilit",
    "narration": "Benlik neden hem anahtar hem kilit olabilir? İnsan ben derken yalnız kimliğini belirtmez; sahiplik, güç ve sorumluluk hakkında da bir yön seçer.",
    "visual_note": "An antique key beside an old lock, vertical cinematic close-up, warm light.",
    "keywords": [
      "antique key",
      "old lock",
      "identity",
      "choice"
    ]
  },
  {
    "scene_id": "scene-002",
    "title": "Doğru Yön",
    "narration": "Benlik kendini emanetçi gördüğünde, verilen kabiliyetleri Rabbini tanımaya yarayan ölçüler hâline getirir. Sınırlı gücü sonsuz kudreti, ihtiyacı ise rahmeti anlamaya yardım eder.",
    "visual_note": "A key opening a door toward bright morning light, vertical frame.",
    "keywords": [
      "opening door",
      "morning light",
      "key",
      "discovery"
    ]
  },
  {
    "scene_id": "scene-003",
    "title": "Ters Yön",
    "narration": "Aynı benlik kendini mutlak sahip saydığında, insanı kendi iddiasının içine kilitler. Çözüm ben duygusunu yok etmek değil, anahtarı hakikate açılan yöne çevirmektir.",
    "visual_note": "A person leaving a shadowed room through an open bright doorway, vertical shot.",
    "keywords": [
      "shadowed room",
      "bright doorway",
      "freedom",
      "direction"
    ]
  }
],

  metadata: {
    source: 'derin-okuma',
    blog_post: '30-soz-1-maksad-mukaddime-benlik-kainati-acan-anahtar',
    test_day: 'day-49',
    short_id: 'short-001',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
