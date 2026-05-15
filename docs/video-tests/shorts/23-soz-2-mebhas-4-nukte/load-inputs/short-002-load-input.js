// Derin Okuma — 23. Söz - 2. Mebhas - 4. Nükte Shorts
// Short: short-002

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },


  job: {
    title: 'Dua Neden Sadece Söz Değil?',
    description: 'Dua sadece dilin söylediği şey değildir; bazen insanın hâli de dua eder.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-4-nukte-short-002-day-22'
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
      narration: 'Dua sadece dilin söylediği şey değildir; bazen insanın hâli de dua eder.',
      visual_note: 'hands raised in quiet prayer, soft window light, peaceful mood',
      keywords: ['prayer hands', 'window light', 'peace']
    },
    {
      scene_id: 'scene-002',
      title: 'Hâl',
      narration: 'Muhtaçlığını gerçekten hissetmek, kibri bırakmak ve içten bir kapı aramak da duanın bir dilidir. Kalp bazen sözden önce yönelir.',
      visual_note: 'person sitting quietly by window, reflective interior, soft daylight',
      keywords: ['quiet room', 'reflection', 'need']
    },
    {
      scene_id: 'scene-003',
      title: 'Tavır',
      narration: 'Çalışmak, aramak ve sebeplere sarılmak da doğru niyetle dua hâline gelir. İnsan ister, hazırlanır ve neticeyi Rabbine bırakır.',
      visual_note: 'focused hands writing notes at desk, morning light, calm effort',
      keywords: ['writing hands', 'effort', 'morning light']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-4-nukte',
    test_day: 'day-22',
    short_id: 'short-002',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
