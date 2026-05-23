// Derin Okuma — Vazifenin İçine Gizlenmiş Lezzet Shorts
// Short: short-002
// Filled for Day-30 n8n Load Input.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
  "title": "Boşluk Neden İnsanı Yorar?",
  "description": "Rahat görünen boşluk, anlamdan kopunca insanı ağırlaştırır. Vazife ise doğru niyetle kalbi toparlayan bir yola dönüşür. #derinokuma #shorts #tefekkür #iman #hayat #anlam",
  "language": "tr",
  "author": "Muhammet Yahya Ozer",
  "job_id_hint": "vazifenin-icine-gizlenmis-lezzet-short-002-day-30"
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
    "narration": "Boşluk her zaman rahatlık değildir; bazen insanı en çok vazifesiz kalmak yorar.",
    "visual_note": "person sitting alone beside window with clock, quiet afternoon",
    "keywords": [
      "alone window",
      "clock",
      "quiet heaviness"
    ]
  },
  {
    "scene_id": "scene-002",
    "title": "Dağınıklık",
    "narration": "Gün geçer, beden dinlenmiş görünür; ama kalp bir yere bağlanmadığı için ağırlık artar. İnsan yalnız rahat etmekle tamamlanmaz.",
    "visual_note": "slow shot of unused notebook and still cup on table, muted light",
    "keywords": [
      "unused notebook",
      "still life",
      "muted light"
    ]
  },
  {
    "scene_id": "scene-003",
    "title": "Toparlayan Vazife",
    "narration": "Anlamlı bir meşguliyet insanı kendi dağınıklığından çıkarır. Küçük bir vazife bile doğru niyetle ruhu toparlayan bir kapı olabilir.",
    "visual_note": "person watering plants in morning light, simple meaningful routine",
    "keywords": [
      "watering plants",
      "morning routine",
      "simple purpose"
    ]
  }
],

  metadata: {
  "source": "derin-okuma",
  "blog_post": "vazifenin-icine-gizlenmis-lezzet",
  "test_day": "day-30",
  "short_id": "short-002",
  "workflow": "manual_scene_json_single_track_shorts_load_input",
  "content_generation_status": "filled"
}
};

return [{ json: { raw_input: rawInput } }];
