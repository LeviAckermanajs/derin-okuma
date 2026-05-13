// Derin Okuma — 23. Söz - 2. Mebhas - 4. Nükte Shorts
// Short: short-001

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  job: {
    title: 'Zayıflık Neden Güce Dönüşür?',
    description: 'Zayıflık her zaman kayıp değildir; bazen insanı gerçek güce bağlayan kapıdır.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-4-nukte-short-001-day-22'
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
      narration: 'Zayıflık her zaman kayıp değildir; bazen insanı gerçek güce bağlayan kapıdır.',
      visual_note: 'lone person under wide sky at sunrise, calm cinematic mood',
      keywords: ['wide sky', 'sunrise', 'solitude']
    },
    {
      scene_id: 'scene-002',
      title: 'Yöneliş',
      narration: 'İnsan kendi sınırını fark ettiğinde, her şeyi tek başına taşıma iddiasından kurtulur. Aczini inkâr etmek yerine onu dua kapısına çevirir.',
      visual_note: 'open door with warm light, quiet interior, symbolic hope',
      keywords: ['open door', 'warm light', 'hope']
    },
    {
      scene_id: 'scene-003',
      title: 'Sonuç',
      narration: 'O zaman zayıflık onu küçültmez. Doğru merkeze bağlandığı için kalbi daha sakin, adımı daha sağlam olur.',
      visual_note: 'mountain path with soft morning clouds, slow movement',
      keywords: ['mountain path', 'clouds', 'inner strength']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-4-nukte',
    test_day: 'day-22',
    short_id: 'short-001',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
