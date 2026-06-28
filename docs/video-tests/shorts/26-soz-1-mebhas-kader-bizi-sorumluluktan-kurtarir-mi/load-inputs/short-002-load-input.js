// Derin Okuma — 26.Söz - 1.Mebhas Shorts
// Short: short-002 — İyilik Yapınca Neden Büyüklenmemelisin?
// Day-44 | Filled by Claude

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'İyilik Yapınca Neden Büyüklenmemelisin?',
    description: 'İyilik yaptığında "Ben yaptım" demek neden yanlış? Kader ve şükür arasındaki fark ne? Gurur mu, minnet mi?\n\n#derinokuma #kader #risaleinur #şükür #tefekkür',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '26-soz-1-mebhas-kader-bizi-sorumluluktan-kurtarir-mi-short-002-day-44'
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
      narration: 'İyi bir şey yaptığında içinden gelen o ses: "Ben ne kadar iyi bir insanım, bunu ben başardım." Bu ses sinsice çalışır. Gururu besler, insanı kendinden büyük hissettirir.',
      visual_note: 'Mirror reflection showing inflated proud posture, symbolic pride vs humility split.',
      keywords: ['mirror ego', 'pride', 'reflection', 'symbolic contrast']
    },
    {
      scene_id: 'scene-002',
      narration: 'İyiliklerde insanın payı çok azdır. Niyeti veren, fırsatı açan, gücü yaratan Allah\'tır. İnsan dua, şuur ve rıza ile o iyiliğe nail olur. Yapan değil, nail olan. Bu farkı görmek insanı gururdan korur.',
      visual_note: 'Sunlight streaming through clouds onto open upward hands, receiving grace, humility.',
      keywords: ['sunlight hands', 'receiving grace', 'humility', 'divine light']
    },
    {
      scene_id: 'scene-003',
      narration: 'İyilik yaptığında duraksayabilirsin: Bu fırsatı bana veren kim? Dürüst bir bakış, her iyiliğin arkasında bir lütuf görür. Ve bu şuur şükrü getirir; gururu değil. Şükür insanı iyiliğe devam ettiren şeydir.',
      visual_note: 'Hands open in gratitude gesture upward, warm light, peaceful and humble expression.',
      keywords: ['gratitude gesture', 'warm light', 'thankfulness', 'peace']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '26-soz-1-mebhas-kader-bizi-sorumluluktan-kurtarir-mi',
    test_day: 'day-44',
    short_id: 'short-002',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
