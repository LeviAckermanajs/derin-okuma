// Derin Okuma — 23. Söz - 2. Mebhas - 5. Nükte Shorts
// Short: short-006 — Tevhidin Son Halkası Nedir?
// Filled: day-23

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },


  job: {
    title: 'Tevhidin Son Halkası Nedir?',
    description: 'Allah birdir demek yetmez; bu birliği kullukta yaşamak gerekir.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-5-nukte-short-006-day-23'
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
      narration: 'Allah birdir demek yetmez; bu birliği kullukta yaşamak gerekir.',
      visual_note: 'single flame burning steadily in darkness, unwavering unity',
      keywords: ['single flame', 'darkness', 'unwavering unity']
    },
    {
      scene_id: 'scene-002',
      title: 'Birlik Mühürleri',
      narration: 'Kâinata bakınca her yerde aynı imza, aynı desen, aynı üslup görülür. Sonsuz çeşitlilik içinde şaşırtıcı bir birlik. Bu birlik damgaları, aynı Sanatkâra işaret eder.',
      visual_note: 'fractal patterns: nautilus shell, snowflake, fern — same pattern repeating at different scales',
      keywords: ['fractal patterns', 'nautilus snowflake', 'repeating unity']
    },
    {
      scene_id: 'scene-003',
      title: 'Tevhidin Basamakları',
      narration: 'Tevhid bir zincirdir: tasdik, iman, iz\'an, şehadet ve ubudiyet. Allah birdir önce anlaşılır, sonra kabul edilir, sonra içten benimsenir, sonra hayatta yaşanır.',
      visual_note: 'chain links connecting, each link stronger than the last, progression to completion',
      keywords: ['chain links', 'connected progression', 'strengthening bonds']
    },
    {
      scene_id: 'scene-004',
      title: 'Yaşanan Tevhid',
      narration: 'Allah birdir deyip hayatını başka merkezlere teslim etmek, tam cevap değildir. Hakiki tevhid, birlik hakikatini kullukta yaşamaktır.',
      visual_note: 'person in prostration, complete surrender, full body expression of unity',
      keywords: ['prayer prostration', 'complete surrender', 'unity in body']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-5-nukte',
    test_day: 'day-23',
    short_id: 'short-006',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
