// Derin Okuma — 23. Söz - 2. Mebhas - 3. Nükte Shorts
// Short: short-004
// Filled: day-21

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },


  job: {
    title: 'İnsan Neden Hayvandan Daha Dertlidir?',
    description: 'Hayvan anın içinde yaşar. İnsan ise geçmişi, geleceği ve ölümü taşır. Bu fark, insanı aciz değil; daha derin kılar.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-3-nukte-short-004-day-21'
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
      title: 'Hook',
      narration: 'Hayvan otlağında otlar, anın içinde yaşar, geleceği kurgulamaz. İnsan ise en huzurlu anında bile geçmişin izlerini ve geleceğin gölgesini taşır. Neden?',
      visual_note: 'A deer grazing peacefully — serene, present, unburdened — beside a human lost in thought.',
      keywords: ['deer', 'peaceful grazing', 'contrast', 'human burden']
    },
    {
      scene_id: 'scene-002',
      title: 'Daha Derin Cihaz, Daha Derin Acı',
      narration: 'Daha çok seviyorsan daha çok incinirsin. Daha çok düşünüyorsan daha çok kaygılanırsın. Daha çok anlam arıyorsan boşluk seni daha çok rahatsız eder. Bu kırılganlık kusur değil; yüksek bir yapının işaretidir.',
      visual_note: 'Intricate gears visible in a human chest — more capacity, more vulnerability — delicate but profound.',
      keywords: ['inner capacity', 'vulnerability', 'depth of feeling', 'sensitivity']
    },
    {
      scene_id: 'scene-003',
      title: 'Bu Sancının Anlamı',
      narration: 'İnsanın dünyada tatmin olamaması, bozuk olmasından değil; ebede göre yaratılmış olmasından kaynaklanıyor. Doğru yer bulunduğunda bu sancı yerini huzura bırakır.',
      visual_note: 'A bird restless in a small cage — then the door opens and it flies toward open sky.',
      keywords: ['cage opening', 'flight', 'relief', 'finding the right place']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-3-nukte',
    test_day: 'day-21',
    short_id: 'short-004',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
