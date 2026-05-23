// Derin Okuma — Vazifenin İçine Gizlenmiş Lezzet Shorts
// Short: short-001
// Filled for Day-30 n8n Load Input.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
  "title": "Çalışmak Neden Sadece Yük Değildir?",
  "description": "Vazife yalnız sonuca ulaşmak için katlanılan bir zahmet değildir; doğru yerde insanı diri tutan bir anlam taşır. #derinokuma #shorts #tefekkür #iman #vazife #çalışmak",
  "language": "tr",
  "author": "Muhammet Yahya Ozer",
  "job_id_hint": "vazifenin-icine-gizlenmis-lezzet-short-001-day-30"
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
    "narration": "Çalışmak her zaman yük değildir; bazen insanın aradığı lezzet, vazifenin tam içine saklanır.",
    "visual_note": "person starting meaningful work at sunrise, calm focused mood",
    "keywords": [
      "meaningful work",
      "sunrise",
      "focus"
    ]
  },
  {
    "scene_id": "scene-002",
    "title": "Yanlış Bakış",
    "narration": "İnsan rahatlığı saadet zannederse, her sorumluluğu ağır görür. Fakat boşluk uzadıkça kalbi dinlendirmez; iç dünyayı dağınık bırakır.",
    "visual_note": "empty chair in quiet room, soft shadows, reflective loneliness",
    "keywords": [
      "empty chair",
      "quiet room",
      "inner emptiness"
    ]
  },
  {
    "scene_id": "scene-003",
    "title": "Gizli Ücret",
    "narration": "Doğru vazife, neticeden önce insanın içinde bir ücret taşır. Emek anlamla birleşince yorgunluk bile şükre yaklaşır.",
    "visual_note": "hands crafting wood carefully, warm light, patient labor",
    "keywords": [
      "patient labor",
      "warm light",
      "crafting"
    ]
  }
],

  metadata: {
  "source": "derin-okuma",
  "blog_post": "vazifenin-icine-gizlenmis-lezzet",
  "test_day": "day-30",
  "short_id": "short-001",
  "workflow": "manual_scene_json_single_track_shorts_load_input",
  "content_generation_status": "filled"
}
};

return [{ json: { raw_input: rawInput } }];
