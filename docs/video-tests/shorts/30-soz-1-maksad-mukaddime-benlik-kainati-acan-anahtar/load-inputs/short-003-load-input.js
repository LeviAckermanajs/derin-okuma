// Derin Okuma — 30.Söz - 1.Maksad - Mukaddime Shorts
// Short: short-003
// Content filled for day-49 n8n input.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: "Acz İnsanı Nasıl Güce Bağlar?",
    description: "İnsan aczini inkâr ettiğinde yalnızlaşır; doğru okuduğunda sonsuz kudrete dayanır. Muhtaçlık, rahmeti fark ettiren bir pencereye dönüşebilir.\n\n#derinokuma #shorts #tefekkür #iman #acz #tevekkül",
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '30-soz-1-maksad-mukaddime-benlik-kainati-acan-anahtar-short-003-day-49'
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
    "title": "Sınırlı Güç",
    "narration": "Zayıflığımız neden bir eksiklikten fazlasıdır? İnsan sevdiklerini korumak, geleceğini güvenceye almak ve hayatını yönetmek ister; fakat gücü arzuları kadar geniş değildir.",
    "visual_note": "A small figure beneath vast mountains and moving clouds, vertical cinematic view.",
    "keywords": [
      "small figure",
      "vast mountains",
      "human limits",
      "clouds"
    ]
  },
  {
    "scene_id": "scene-002",
    "title": "Aczin Yönü",
    "narration": "Bu sınır insanı ya umutsuzluğa ya da dayanmaya götürür. Aczini gizlemek zorunda olmadığını anlayan kişi, her şeyi kendi omzunda taşıma iddiasından vazgeçer.",
    "visual_note": "A person setting down a heavy backpack on a mountain path, vertical shot.",
    "keywords": [
      "heavy backpack",
      "mountain path",
      "release",
      "limits"
    ]
  },
  {
    "scene_id": "scene-003",
    "title": "Kudrete Dayanmak",
    "narration": "Acz doğru okunduğunda eziklik değil, sonsuz kudrete açılan bir kapıdır. Muhtaçlık da yalnız yoksunluğu değil, hayatı her an kuşatan rahmeti gösterir. İnsan küçüklüğünü kabul ederek daha sağlam bir dayanak bulur.",
    "visual_note": "Clouds opening to sunlight over a peaceful valley, lone person standing calmly.",
    "keywords": [
      "opening clouds",
      "sunlit valley",
      "trust",
      "calm person"
    ]
  }
],

  metadata: {
    source: 'derin-okuma',
    blog_post: '30-soz-1-maksad-mukaddime-benlik-kainati-acan-anahtar',
    test_day: 'day-49',
    short_id: 'short-003',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
