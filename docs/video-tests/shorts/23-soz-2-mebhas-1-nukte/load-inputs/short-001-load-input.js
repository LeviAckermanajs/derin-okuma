// Derin Okuma — 23. Söz - 2. Mebhas - 1. Nükte Shorts
// Short: short-001 | Kalp Neden Tatmin Olmaz?
// day-19

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },


  job: {
    title: 'Kalp Neden Tatmin Olmaz?',
    description: 'Çok şeye sahip olup yine de tatmin olmuyorsan, bu bir kusur mu? Yoksa kalbinin sana söylediği bir şey mi?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-1-nukte-short-001-day-19'
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
      narration: 'Çok şeye sahip olup yine de tatmin olmuyorsan, bu bir kusur değil. Bu, kalbinin sana derin bir şey söylemesidir.',
      visual_note: 'Person sitting alone among beautiful things, gaze drifting to the horizon, unfulfilled.',
      keywords: ['longing', 'unfulfilled', 'searching', 'quiet']
    },
    {
      scene_id: 'scene-002',
      narration: 'İnsanın kalbi geçici şeylerle tam doymuyor. Çünkü o kalbin talebi fıtraten ebedîdir. Sonsuz istiyor; ve sınırlı şeyler bu talebi karşılayamaz.',
      visual_note: 'Ocean waves reaching a shore, pulling back endlessly, infinite horizon.',
      keywords: ['ocean waves', 'infinite horizon', 'endless', 'deep longing']
    },
    {
      scene_id: 'scene-003',
      narration: 'Sonsuz arzuları sınırlı şeylere yüklemeye çalışmak insan ruhunu parçalar. Ama o arzuyu sonsuz olana yöneltmek, her şeyi değiştirir.',
      visual_note: 'A river finding the ocean, calm and complete, vast and peaceful.',
      keywords: ['river to ocean', 'completion', 'vast', 'peaceful']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-1-nukte',
    test_day: 'day-19',
    short_id: 'short-001',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
