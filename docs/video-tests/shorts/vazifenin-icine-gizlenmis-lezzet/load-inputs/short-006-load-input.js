// Derin Okuma — Vazifenin İçine Gizlenmiş Lezzet Shorts
// Short: short-006
// Filled for Day-30 n8n Load Input.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
  "title": "Yorgunluk Ne Zaman Şükre Dönüşür?",
  "description": "Anlamlı bir vazifenin ardından gelen yorgunluk, insanı tüketmek yerine diri tutabilir. Mesele nerede ve niçin yorulduğumuzdur. #derinokuma #shorts #tefekkür #şükür #vazife #maneviyat",
  "language": "tr",
  "author": "Muhammet Yahya Ozer",
  "job_id_hint": "vazifenin-icine-gizlenmis-lezzet-short-006-day-30"
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
    "narration": "Yorgunluk bazen kayıp değil, doğru vazifede harcanmış bir ömrün şükrüdür.",
    "visual_note": "person resting after work in garden at sunset, peaceful expression",
    "keywords": [
      "rest after work",
      "garden sunset",
      "gratitude"
    ]
  },
  {
    "scene_id": "scene-002",
    "title": "İki Yorgunluk",
    "narration": "Anlamsız koşuşturma insanı dağıtır; anlamlı emek ise yorarken bile toplar. Kalp, niçin yorulduğunu bildiğinde yük başka bir hâl alır.",
    "visual_note": "contrast busy blurred street and calm worker in field, cinematic mood",
    "keywords": [
      "busy street",
      "calm field",
      "meaningful effort"
    ]
  },
  {
    "scene_id": "scene-003",
    "title": "Son İz",
    "narration": "Boşluk rahatlık sanılabilir, ama insanı diri tutan şey çoğu zaman kendi yerindeki vazifedir. Orada yorgunluk bile şükre yaklaşır.",
    "visual_note": "wide sunrise path through field, hopeful quiet ending",
    "keywords": [
      "sunrise path",
      "field",
      "hopeful ending"
    ]
  }
],

  metadata: {
  "source": "derin-okuma",
  "blog_post": "vazifenin-icine-gizlenmis-lezzet",
  "test_day": "day-30",
  "short_id": "short-006",
  "workflow": "manual_scene_json_single_track_shorts_load_input",
  "content_generation_status": "filled"
}
};

return [{ json: { raw_input: rawInput } }];
