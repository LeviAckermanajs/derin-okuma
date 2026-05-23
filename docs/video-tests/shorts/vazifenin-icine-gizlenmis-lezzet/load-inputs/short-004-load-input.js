// Derin Okuma — Vazifenin İçine Gizlenmiş Lezzet Shorts
// Short: short-004
// Filled for Day-30 n8n Load Input.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
  "title": "Kâinat Neden Vazife İçinde?",
  "description": "Canlıların işleyişi, vazifenin kuru bir yük değil, yaratılışa yerleştirilmiş bir düzen olduğunu düşündürür. #derinokuma #shorts #tefekkür #kâinat #iman #fıtrat",
  "language": "tr",
  "author": "Muhammet Yahya Ozer",
  "job_id_hint": "vazifenin-icine-gizlenmis-lezzet-short-004-day-30"
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
    "narration": "Arı, kuş ve ağaç bize sessizce aynı şeyi söylüyor: hayat vazifeyle güzelleşir.",
    "visual_note": "bees flowers bird nest and tree montage, soft natural light",
    "keywords": [
      "bees flowers",
      "bird nest",
      "tree"
    ]
  },
  {
    "scene_id": "scene-002",
    "title": "Fıtrat",
    "narration": "Arı petek yapar, kuş yuva kurar, ağaç meyve verir. Her biri kendi ölçüsünde çalışır ve bu çalışmayla bir güzelliğe ayna olur.",
    "visual_note": "bee on honeycomb and bird building nest, cinematic wildlife close-up",
    "keywords": [
      "honeycomb",
      "nest building",
      "wildlife"
    ]
  },
  {
    "scene_id": "scene-003",
    "title": "Ders",
    "narration": "İnsan bu düzene bakınca çalışmayı yeniden anlar. Vazife, varlığın içine konmuş bir hikmet ve rahmet dili gibi konuşur.",
    "visual_note": "person observing nature in quiet forest, notebook in hand, contemplative",
    "keywords": [
      "observing nature",
      "forest",
      "contemplation"
    ]
  }
],

  metadata: {
  "source": "derin-okuma",
  "blog_post": "vazifenin-icine-gizlenmis-lezzet",
  "test_day": "day-30",
  "short_id": "short-004",
  "workflow": "manual_scene_json_single_track_shorts_load_input",
  "content_generation_status": "filled"
}
};

return [{ json: { raw_input: rawInput } }];
