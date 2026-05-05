// Derin Okuma — 23. Söz - 2. Mebhas - 1. Nükte Shorts
// Short: short-005 | Kalp Bu Dünyaya Sığmaz
// day-19

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  job: {
    title: 'Kalp Bu Dünyaya Sığmaz',
    description: 'Hiç saydınız mı hayatınız boyunca kaybettiklerinizi? İnsan, hep kaybederek yaşar.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-1-nukte-short-005-day-19'
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
      narration: 'İnsan, sevdiği insanların büyük çoğunluğunu zamanla kaybeder. Kendi ömrü içinde bile hep kaybederek yaşar. Bu, insanın en büyük yarasıdır.',
      visual_note: 'Old photographs held in aged hands, soft warm light, feelings of memory and loss.',
      keywords: ['old photographs', 'memories', 'loss', 'warm light']
    },
    {
      scene_id: 'scene-002',
      narration: 'Kalp bu dünyaya sığmıyor. Eğer ölüm son olsaydı, insanın en derin arzuları cevapsız kalırdı. Bu ise insanın yaratılışıyla bağdaşmazdı.',
      visual_note: 'A lone person sitting quietly at dusk, vast open sky above, depth and solitude.',
      keywords: ['solitude', 'vast sky', 'dusk', 'depth']
    },
    {
      scene_id: 'scene-003',
      narration: 'Ahiret yalnızca dini bir inanç meselesi değildir. İnsanın fıtratındaki en derin taleplerin cevabıdır. Çünkü insan sonsuz ister; ve bu talebin bir cevabı olmalıdır.',
      visual_note: 'A bridge disappearing into morning mist, soft hopeful light visible at the far end.',
      keywords: ['bridge in mist', 'hopeful light', 'beyond', 'faith']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-1-nukte',
    test_day: 'day-19',
    short_id: 'short-005',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
