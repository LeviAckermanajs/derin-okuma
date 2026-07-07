// Derin Okuma — 30.Söz - 1.Maksad Shorts
// Short: short-006
// Content filled for day-51 production.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: "Benlik İnsanı Nasıl Hapseder?",
    description: "Ölçü olmak için verilen benlik amaç hâline geldiğinde insanı büyütmez, kendi dar dünyasına kapatır. #derinokuma #shorts #tefekkür #benlik #kibir #maneviyat",
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur-short-006-day-51'
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
    "title": "Sessiz Başlangıç",
    "narration": "İnsan kendi benliğinin içine nasıl hapsolur? Bu kapanış çoğu zaman büyük bir iddiayla değil, verilmiş olanı bütünüyle kendine ait sayan sessiz bir sahiplenmeyle başlar.",
    "visual_note": "Person holding possessions alone in a dim enclosed room.",
    "keywords": [
      "dim room",
      "possessiveness",
      "isolation"
    ]
  },
  {
    "scene_id": "scene-002",
    "title": "Kalınlaşan Perde",
    "narration": "Alışkanlık ve gaflet bu duyguyu tekrar tekrar besler. Ölçü olmak için verilen benlik amaç hâline gelir; insan başarıyı yalnız kendinden, kaybı ise dışarıdaki düşmanlardan bilmeye başlar.",
    "visual_note": "Window gradually covered with dust, daylight fading away.",
    "keywords": [
      "dusty window",
      "fading daylight",
      "blindness"
    ]
  },
  {
    "scene_id": "scene-003",
    "title": "Çıkış Yönü",
    "narration": "Benlik büyüdükçe insanın dünyası genişlemeyebilir; aksine yalnız kendi arzusunu gören dar bir odaya dönüşebilir. Çıkış, benliği yok etmekte değil, onu yeniden emanet ve ayna olarak okumaktadır.",
    "visual_note": "Door opening from a narrow room toward a vast bright landscape.",
    "keywords": [
      "open door",
      "bright landscape",
      "freedom"
    ]
  }
],

  metadata: {
    source: 'derin-okuma',
    blog_post: '30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur',
    test_day: 'day-51',
    short_id: 'short-006',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
