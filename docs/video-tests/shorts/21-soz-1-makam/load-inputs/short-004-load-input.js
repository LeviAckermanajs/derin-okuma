// Derin Okuma — 21. Söz - 1. Makam Shorts
// Short: short-004 — İbadetin Karşılığı Neden Görünmüyor?
// Day-28 — filled by Claude

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'İbadetin Karşılığı Neden Görünmüyor?',
    description: 'Namaz kılıyorsun ama hayatında somut olarak ne değişiyor? Bu soru tanıdık mı?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '21-soz-1-makam-short-004-day-28'
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
      scene_id: 'scene-001',
      narration: 'İnsan yaptığı her şeyin hemen hissedilir ve ölçülebilir bir karşılığını görmek ister. Namaz da bu bakışla değerlendirildiğinde, bazen "somut faydası belirsiz" gibi algılanabilir. Ama bu, namazın neticesini yalnızca bugünkü dünyayla sınırlamaktır.',
      visual_note: 'Person searching for visible results on a blank board, modern setting, looking for measurable outcomes.',
      keywords: ['blank board', 'searching for results', 'modern workspace', 'uncertainty']
    },
    {
      scene_id: 'scene-002',
      narration: 'İnsan yalnızca bugünden ibaret bir varlık değildir. Kabir, mahşer ve ebedî hayat da hesaba katıldığında, namazın neticesi küçümsenemez. Kabir karanlığında ışık, hesap yerinde belge, sırat üzerinde destek olacak bir amelin neticesi hiç küçük değildir.',
      visual_note: 'Long dark corridor with faint warm light at end, metaphorical journey toward light, cinematic.',
      keywords: ['dark corridor', 'distant light', 'journey', 'hope']
    },
    {
      scene_id: 'scene-003',
      narration: 'Dünyada küçük ücretler için büyük zahmetlere sabreden insan, geçici vaatlere çok ciddiyet gösterirken sonsuz vaade gevşek davranıyorsa; sorun namazın ağırlığında değil, kalbin değer sıralamasındadır. Namaz neticesiz değildir; yalnızca neticesi dünya gözüyle ölçülmez.',
      visual_note: 'Two paths diverging, one busy and noisy, one quiet and deep, symbolic choice landscape, cinematic.',
      keywords: ['diverging paths', 'choice', 'busy vs quiet', 'depth over surface']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '21-soz-1-makam',
    test_day: 'day-28',
    short_id: 'short-004',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
