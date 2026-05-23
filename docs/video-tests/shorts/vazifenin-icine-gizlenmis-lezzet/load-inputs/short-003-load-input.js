// Derin Okuma — Vazifenin İçine Gizlenmiş Lezzet Shorts
// Short: short-003
// Filled for Day-30 n8n Load Input.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
  "title": "Küçük Şey Nasıl Büyük Mana Taşır?",
  "description": "İnsan kendi gücüyle küçük olabilir; fakat doğru vazifede yer aldığında büyük bir manaya ayna olur. #derinokuma #shorts #tefekkür #iman #kâinat #vazife",
  "language": "tr",
  "author": "Muhammet Yahya Ozer",
  "job_id_hint": "vazifenin-icine-gizlenmis-lezzet-short-003-day-30"
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
  "mode": "shorts",
  "subtitles_enabled": true,
  "render_mode": "shorts",
  "produce_both": false,
  "background_music_enabled": true,
  "target_fps": 30
},

  scenes: [
  {
    "scene_id": "scene-001",
    "title": "Hook",
    "narration": "Bir damla su bile güneşe yönelince küçüklüğünü aşar; ışığa ayna olur.",
    "visual_note": "macro water droplet reflecting sunlight, bright sparkle",
    "keywords": [
      "water droplet",
      "sun reflection",
      "macro"
    ]
  },
  {
    "scene_id": "scene-002",
    "title": "İnsanın Hâli",
    "narration": "İnsan da zayıf, sınırlı ve muhtaçtır. Ama kendisine verilen vazifeyi tanıyınca yalnız kendi dar varlığıyla kalmaz.",
    "visual_note": "single person on wide mountain path, humble scale, clear sky",
    "keywords": [
      "mountain path",
      "human scale",
      "clear sky"
    ]
  },
  {
    "scene_id": "scene-003",
    "title": "Makam",
    "narration": "Doğru yerde duran küçük bir varlık, büyük bir düzene bağlanır. Vazife, insanın küçüklüğünü anlamlı bir makama dönüştürür.",
    "visual_note": "sunlight entering simple room through small glass prism, gentle colors",
    "keywords": [
      "sunlight prism",
      "simple room",
      "meaning"
    ]
  }
],

  metadata: {
  "source": "derin-okuma",
  "blog_post": "vazifenin-icine-gizlenmis-lezzet",
  "test_day": "day-30",
  "short_id": "short-003",
  "workflow": "manual_scene_json_single_track_shorts_load_input",
  "content_generation_status": "filled"
}
};

return [{ json: { raw_input: rawInput } }];
