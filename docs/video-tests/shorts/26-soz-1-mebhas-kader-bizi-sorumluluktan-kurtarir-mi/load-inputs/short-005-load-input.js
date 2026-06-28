// Derin Okuma — 26.Söz - 1.Mebhas Shorts
// Short: short-005 — Görünen Acı Her Zaman Haksızlık mı?
// Day-44 | Filled by Claude

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Görünen Acı Her Zaman Haksızlık mı?',
    description: 'Hayatta adaletsiz gibi görünen şeyler var. Ama kader, zahirden değil hakikatten hükmeder. Bu farkı anlamak her şeyi değiştirir.\n\n#derinokuma #kader #risaleinur #adalet #tefekkür',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '26-soz-1-mebhas-kader-bizi-sorumluluktan-kurtarir-mi-short-005-day-44'
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
      narration: 'Hayatında sana adaletsiz gelen bir şey var mı? "Ben bunu hak etmedim, bu neden böyle oldu?" diye sormak kaçınılmaz. Ama o soruyu sorarken neleri göremiyorsun?',
      visual_note: 'Iceberg above and below water, surface appearance versus hidden depth, perception gap.',
      keywords: ['iceberg surface depth', 'hidden truth', 'perception', 'below surface']
    },
    {
      scene_id: 'scene-002',
      narration: 'İnsan zahire bakar; kader ise hakiki illete. Bir şey görünürde haksız olabilir. Ama kader başlangıcı, sonu, sebebi ve neticeyi birlikte kuşatır. İnsanın görmediği şeyler çok fazladır.',
      visual_note: 'Complex puzzle with only partial pieces visible on table, incomplete picture, mystery.',
      keywords: ['incomplete puzzle', 'partial view', 'hidden meaning', 'complexity']
    },
    {
      scene_id: 'scene-003',
      narration: 'Allah\'ın yaratmasında zulüm yoktur. Çirkinlik kulun yanlış seçimine aittir; yaratmaya değil. Bu ayrımı görmek insanı şikâyetten korur ve güveni pekiştirir.',
      visual_note: 'Scales of justice with unseen counterweight achieving perfect balance, symbolic truth.',
      keywords: ['balanced scales', 'hidden weight', 'justice', 'trust']
    },
    {
      scene_id: 'scene-004',
      narration: 'Bilmediğin çok şey var. Ve bilmediğini bilmek, tevazunun ilk adımıdır. Kaderin hükmünü tam göremezsin; ama O adalet içinde işler. Bu güveni taşıyan kalp, görünen her acıda çökmez.',
      visual_note: 'Person looking up at vast starry sky, small figure, infinite depth above, wonder and trust.',
      keywords: ['starry night', 'vast universe', 'small figure', 'wonder and trust']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '26-soz-1-mebhas-kader-bizi-sorumluluktan-kurtarir-mi',
    test_day: 'day-44',
    short_id: 'short-005',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
