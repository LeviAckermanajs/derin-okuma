// Derin Okuma — 30.Söz - 1.Maksad - Mukaddime Shorts
// Short: short-006
// Content filled for day-49 n8n input.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: "Hayat Neden Yalnız Mücadele Değildir?",
    description: "Canlılar rekabet eder; fakat hiçbir hayat yalnız kendi gücüyle sürmez. Su, hava, toprak ve sayısız karşılıksız yardım, varlığın merkezindeki rahmeti düşündürür.\n\n#derinokuma #shorts #tefekkür #hayat #yardımlaşma #rahmet",
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur-short-006-day-49'
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
    "title": "Mücadele Okuması",
    "narration": "Hayat gerçekten yalnızca bir mücadele midir? Doğada rekabet ve çatışma vardır; fakat bütün hayatı yalnız bunlarla açıklamak, çok daha geniş bir yardımlaşmayı gözden kaçırır.",
    "visual_note": "Wild animals moving through a broad ecosystem, vertical cinematic nature footage.",
    "keywords": [
      "wildlife",
      "ecosystem",
      "nature",
      "movement"
    ]
  },
  {
    "scene_id": "scene-002",
    "title": "Karşılıksız Hizmet",
    "narration": "Bulut toprağa su taşır, toprak bitkiye yuva olur, bitki canlılara rızık verir. Hava, güneş ve su hiçbir canlının kendi üretimi değildir; hayat sayısız karşılıksız hizmetle devam eder.",
    "visual_note": "Rain falling over green plants as sunlight breaks through clouds, vertical frame.",
    "keywords": [
      "rain",
      "green plants",
      "sunlight",
      "provision"
    ]
  },
  {
    "scene_id": "scene-003",
    "title": "Rahmetin Düzeni",
    "narration": "Canlılar çaba gösterir, fakat hiçbiri yalnız kendi gücüyle ayakta kalmaz. Rekabeti inkâr etmeden yardımlaşmayı da gördüğümüzde, hayat kör bir savaş olmaktan çıkar. Varlığın temelinde kuşatıcı bir ikram ve rahmet görünür.",
    "visual_note": "A peaceful river valley supporting plants, animals and people, vertical aerial view.",
    "keywords": [
      "river valley",
      "people and animals",
      "cooperation",
      "mercy"
    ]
  }
],

  metadata: {
    source: 'derin-okuma',
    blog_post: '30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur',
    test_day: 'day-49',
    short_id: 'short-006',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
