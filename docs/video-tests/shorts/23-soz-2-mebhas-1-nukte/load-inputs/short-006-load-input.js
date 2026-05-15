// Derin Okuma — 23. Söz - 2. Mebhas - 1. Nükte Shorts
// Short: short-006 | Kötülükler İyiliklere Nasıl Dönüşür?
// day-19

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },


  job: {
    title: 'Kötülükler İyiliklere Nasıl Dönüşür?',
    description: 'Kötülük yapma kapasitesi büyük olan bir insan, aynı kapasiteyle iyiliğe de dönüşebilir.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-1-nukte-short-006-day-19'
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
      narration: 'İnsanın şer kabiliyeti büyük olabilir. Ama bu, onun kaderi değildir. Her insan için bir dönüşüm kapısı açık kalır.',
      visual_note: 'A dark storm approaching, but a small ray of golden light breaking through the clouds.',
      keywords: ['storm', 'ray of light', 'hope', 'breakthrough']
    },
    {
      scene_id: 'scene-002',
      narration: 'Eğer insan enaniyeti bırakırsa, hayrı Allah\'tan isterse, nefse güvenmeyi terk ederse, o zaman şer istidadının yönü değişebilir. Öfke zulüm yerine hakkı savunmaya, arzu sefahatten ibadete dönebilir.',
      visual_note: 'A person setting down a heavy stone burden, standing upright, warm light flooding from above.',
      keywords: ['burden released', 'standing upright', 'light from above', 'transformation']
    },
    {
      scene_id: 'scene-003',
      narration: 'Kötülükler silinmekle kalmaz; iyiliklere çevrilir. Bu, tevbenin en büyük muştusu. Hangi yöne döndüğün, her şeyi değiştirir.',
      visual_note: 'Dark storm clouds dramatically transforming into a golden glowing sunset, breathtaking colour shift.',
      keywords: ['storm to sunset', 'transformation', 'golden light', 'hope renewed']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-1-nukte',
    test_day: 'day-19',
    short_id: 'short-006',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
