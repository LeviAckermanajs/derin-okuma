// Derin Okuma — 23. Söz - 2. Mebhas - 4. Nükte Shorts
// Short: short-003

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  job: {
    title: 'İnsan Neden Ben Yaptım Der?',
    description: 'İnsanı en çok yanıltan cümlelerden biri şudur: Ben yaptım.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-4-nukte-short-003-day-22'
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
      narration: 'İnsanı en çok yanıltan cümlelerden biri şudur: Ben yaptım.',
      visual_note: 'person looking at city from high viewpoint, muted cinematic colors',
      keywords: ['city viewpoint', 'self reflection', 'success']
    },
    {
      scene_id: 'scene-002',
      title: 'Ayrım',
      narration: 'Elbette insan emek verir, çalışır ve tercih eder. Ama vesile olmak başka, bütün neticenin kaynağı olduğunu sanmak başkadır.',
      visual_note: 'craftsman working with wood, focused hands, natural workshop light',
      keywords: ['craftsman', 'hands', 'workshop']
    },
    {
      scene_id: 'scene-003',
      title: 'Şükür',
      narration: 'Başarıyı lütufla birlikte okuyabilen kalp şükre yaklaşır. Böyle bir insan, yükseldiğinde bile haddini unutmaz.',
      visual_note: 'simple meal on table with warm light, quiet gratitude mood',
      keywords: ['simple table', 'gratitude', 'warm light']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-4-nukte',
    test_day: 'day-22',
    short_id: 'short-003',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
