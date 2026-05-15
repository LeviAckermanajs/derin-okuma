// Derin Okuma — 23. Söz - 2. Mebhas - 3. Nükte Shorts
// Short: short-001
// Filled: day-21

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },


  job: {
    title: 'İnsan Neden Hiçbir Zaman Tam Dolu Olamaz?',
    description: 'Sevgi, güzellik, anlam, adalet… İnsan bunların hepsini sonsuz istiyor. Dünya ise hepsini geçici veriyor. Bu yüzden her lezzette binler elem izi var.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-3-nukte-short-001-day-21'
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
      narration: 'Sonsuzluk arzusu olan bir varlık, sonlu şeylerle dolu olamaz. İşte bu yüzden insan, her şeye sahip olsa bile içinde bir boşluk hisseder.',
      visual_note: 'A person surrounded by objects, looking empty — everything present yet nothing filling the void.',
      keywords: ['emptiness despite abundance', 'longing', 'inner void', 'desire']
    },
    {
      scene_id: 'scene-002',
      title: 'Her Lezzette Elem',
      narration: 'En güzel anında bile ayrılık ihtimali vardır. Gençlikte yaşlanma gölgesi vardır. Sevilen şeyin biteceği bilinir. İnsan yalnız yaşamaz; o anı bilir ve bu bilgi her lezzetin içine karışır.',
      visual_note: 'A sunset being watched — light fading, beauty tinged with the awareness of its ending.',
      keywords: ['bittersweet', 'fading beauty', 'awareness of impermanence', 'transience']
    },
    {
      scene_id: 'scene-003',
      title: 'Bu Huzursuzluk Neden?',
      narration: 'İnsanın dünyada tatmin olamaması, onun bozuk olmasından değil; ebede göre yaratılmış olmasından kaynaklanıyor. Bu huzursuzluk bir arıza değil; yüksek bir yapının yanlış yere sıkışmasının sancısı.',
      visual_note: 'A migratory bird restless on a branch — not broken, oriented toward somewhere it has not yet reached.',
      keywords: ['migratory bird', 'restlessness', 'longing', 'purposeful unease']
    },
    {
      scene_id: 'scene-004',
      title: 'Kapanış',
      narration: 'İnsan dünyayla oyalanabilir; ama onunla tatmin olamaz. Çünkü kalbi, dünya için değil; ebedî hayat için donatılmıştır.',
      visual_note: 'Person looking at a vast horizon at dusk — yearning, oriented outward and upward.',
      keywords: ['horizon', 'yearning', 'eternal orientation', 'heart']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-3-nukte',
    test_day: 'day-21',
    short_id: 'short-001',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
