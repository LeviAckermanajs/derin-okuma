// Derin Okuma — Vazifenin İçine Gizlenmiş Lezzet Shorts
// Short: short-005
// Filled for Day-30 n8n Load Input.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
  "title": "Hizmetin Ücreti Nerede Saklı?",
  "description": "Hizmetin içinde sabır, dikkat, paylaşma ve teslimiyet vardır. Bunlar neticeden önce kalbi eğiten gizli nimetlerdir. #derinokuma #shorts #tefekkür #hizmet #iman #sabır",
  "language": "tr",
  "author": "Muhammet Yahya Ozer",
  "job_id_hint": "vazifenin-icine-gizlenmis-lezzet-short-005-day-30"
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
    "narration": "Bir işin ücreti bazen sonunda değil, bizzat o işi yaparken kalbe verilen huzurdadır.",
    "visual_note": "hands serving tea gently, warm human moment, calm light",
    "keywords": [
      "service",
      "warm light",
      "gentle hands"
    ]
  },
  {
    "scene_id": "scene-002",
    "title": "Yolun İçindeki Pay",
    "narration": "İnsan sadece neticeye bakarsa emeğin içindeki nimeti kaçırır. Sabır, dikkat ve sadakat yolun içinde öğrenilir.",
    "visual_note": "person kneading bread dough patiently, warm kitchen close-up",
    "keywords": [
      "bread dough",
      "patience",
      "warm kitchen"
    ]
  },
  {
    "scene_id": "scene-003",
    "title": "Huzur",
    "narration": "Hizmet doğru yere bağlandığında insanı tüketmez; ona içten bir huzur verir. Çünkü çalışma artık yalnız kendisi için değildir.",
    "visual_note": "volunteer helping elderly person with kindness, documentary soft light",
    "keywords": [
      "volunteer help",
      "kindness",
      "inner peace"
    ]
  }
],

  metadata: {
  "source": "derin-okuma",
  "blog_post": "vazifenin-icine-gizlenmis-lezzet",
  "test_day": "day-30",
  "short_id": "short-005",
  "workflow": "manual_scene_json_single_track_shorts_load_input",
  "content_generation_status": "filled"
}
};

return [{ json: { raw_input: rawInput } }];
