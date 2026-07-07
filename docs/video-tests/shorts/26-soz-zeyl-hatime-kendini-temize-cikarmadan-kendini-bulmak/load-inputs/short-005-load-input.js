// Derin Okuma — 26.Söz - Zeyl - Hatime Shorts — short-005
// Content filled for n8n Load Input.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: "Varlık Nasıl Aynaya Dönüşür?",
    description: "Eşyayı yalnız faydasıyla okumak, ondaki ölçü ve sanatı eksik bırakır. Varlık yaratıcısına işaret eden yönüyle okunduğunda perde olmaktan çıkar, aynaya dönüşür.\n\n#derinokuma #shorts #tefekkür #kâinat #mana #marifet",
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak-short-005-day-50'
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
    "title": "Yüzeyde Kalan Bakış",
    "narration": "Bir ağaca yalnız kendi adına bakınca neyi kaçırırız? Onu odun, gölge ve meyve veren bir nesne olarak görebiliriz. Fakat yapraklarındaki ölçü, hayat ve ince sanat açıklanmadan kalır.",
    "visual_note": "A large tree shown through wood, shade and fruit, vertical observational footage.",
    "keywords": [
      "large tree",
      "wood",
      "fruit",
      "surface view"
    ]
  },
  {
    "scene_id": "scene-002",
    "title": "İşareti Okumak",
    "narration": "Aynı ağaç bir işaret olarak okunduğunda, düzeni ilmi, rızkı rahmeti, güzelliği sanatı düşündürür. Ağaç kaybolmaz; daha derin görünür. Artık son durak değil, kendisini aşan bir manaya açılan penceredir.",
    "visual_note": "Sunlight passing through detailed leaves and ripe fruit, vertical slow upward movement.",
    "keywords": [
      "detailed leaves",
      "ripe fruit",
      "sunlight",
      "signs"
    ]
  },
  {
    "scene_id": "scene-003",
    "title": "Açılan Kâinat",
    "narration": "Huzur için dünyayı silmek gerekmez; ona doğru yönden bakmak gerekir. Varlık bağımsızlaştırıldığında perde, Allah'ın isimlerini gösterdiğinde ayna olur. Böylece sıradan bir ağaç bile tefekküre açılan bir yol taşır.",
    "visual_note": "A forest opening toward a luminous sky, vertical cinematic reveal, peaceful mood.",
    "keywords": [
      "forest",
      "luminous sky",
      "reflection",
      "contemplation"
    ]
  }
],

  metadata: {
  "source": "derin-okuma",
  "blog_post": "26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak",
  "test_day": "day-50",
  "short_id": "short-005",
  "workflow": "manual_scene_json_single_track_shorts_load_input",
  "content_generation_status": "filled"
}
};

return [{ json: { raw_input: rawInput } }];
