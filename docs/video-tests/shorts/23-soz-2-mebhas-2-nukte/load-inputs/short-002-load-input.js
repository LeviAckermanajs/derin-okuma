// Derin Okuma — 23. Söz - 2. Mebhas - 2. Nükte Shorts
// Short: short-002 | Acizlik Nasıl İnsanı Büyütür?
// day-20

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },


  job: {
    title: 'Acizlik Nasıl İnsanı Büyütür?',
    description: 'Zayıflıkların seni küçülttüğünü mü sanıyordun? İşte tam tersi neden doğru?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-2-nukte-short-002-day-20'
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
      narration: 'İnsanın büyüklüğü kuvvetinden değil, aczinden gelir. Bu ters gibi görünür. Ama mantığı derindir: insan âcizse sonsuz kudrete muhtaçtır. Bu muhtaçlık, onu o sonsuz kudrete bağlar.',
      visual_note: 'A thin vine clinging to a massive ancient tree, fragile yet connected to something enduring and vast.',
      keywords: ['vine and tree', 'strength through weakness', 'connection', 'dependency']
    },
    {
      scene_id: 'scene-002',
      narration: 'Açlık, Rezzak ismine kapı açar. Hastalık, Şafi ismine. Korku, Hafiz ismine. Yalnızlık ve muhtaçlık, Rahman ismine baktırır. İnsandaki eksiklikler, anlamsız birer kusur değildir.',
      visual_note: 'Multiple doors opening one by one in a corridor, each revealing a different warm golden light beyond.',
      keywords: ['doors opening', 'warm light', 'discovery', 'each door a gift']
    },
    {
      scene_id: 'scene-003',
      narration: 'İnsanın zaafı boş bir eksiklik değil; tecelli alıcı bir kapasitedir. Bardağın boş olması, dolabilmesi için şarttır. İnsandaki boşluklar da bu anlama gelir: sonsuz tecellilere açık bir ayna.',
      visual_note: 'An empty glass vessel slowly filling with clear glowing water from above, catching and holding light.',
      keywords: ['empty vessel filling', 'capacity', 'receiving', 'light from above', 'mirror']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-2-nukte',
    test_day: 'day-20',
    short_id: 'short-002',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
