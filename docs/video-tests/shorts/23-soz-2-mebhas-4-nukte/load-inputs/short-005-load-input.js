// Derin Okuma — 23. Söz - 2. Mebhas - 4. Nükte Shorts
// Short: short-005

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  job: {
    title: 'Dünya Nasıl Bir İkram Olur?',
    description: 'Dünya, sahip olduğun için değil; ikram olarak okuyabildiğin için genişler.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-4-nukte-short-005-day-22'
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
      narration: 'Dünya, sahip olduğun için değil; ikram olarak okuyabildiğin için genişler.',
      visual_note: 'sunlight entering home window, spring flowers, peaceful morning',
      keywords: ['home light', 'spring flowers', 'morning']
    },
    {
      scene_id: 'scene-002',
      title: 'Temaşa',
      narration: 'Güneş bir lamba gibi, bahar bir hediye gibi, yeryüzü bir sofra gibi görünebilir. Bu sahiplenme değil, şükürle temaşadır.',
      visual_note: 'spring meadow with sunlight and flowers, slow cinematic nature footage',
      keywords: ['spring meadow', 'sunlight', 'gratitude']
    },
    {
      scene_id: 'scene-003',
      title: 'Emanet',
      narration: 'Böyle bakan insan eşyayı tüketilecek bir mal gibi değil, emanet gibi görür. Kalbi daha minnettar, eli daha ölçülü olur.',
      visual_note: 'person gently watering plants in quiet garden, natural afternoon light',
      keywords: ['watering plants', 'garden', 'stewardship']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-4-nukte',
    test_day: 'day-22',
    short_id: 'short-005',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
