// Derin Okuma — 23. Söz - 2. Mebhas - 1. Nükte Shorts
// Short: short-002 | Allah'a Kul Olmak Neden Yükseltir?
// day-19

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  job: {
    title: 'Allah\'a Kul Olmak Neden Yükseltir?',
    description: 'Kul olmak, insanı küçültür mü? Yoksa tam tersi mi?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-1-nukte-short-002-day-19'
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
      narration: 'Kul olmak insanı küçültür mü? İlk bakışta öyle görünür. Ama şunu düşünelim: tam bağımsız bir insan yoktur. Herkes mutlaka bir şeye bağlanır.',
      visual_note: 'Person at a crossroads, two paths visible, one bright and ascending, one shadowed.',
      keywords: ['crossroads', 'choice', 'light and shadow', 'path']
    },
    {
      scene_id: 'scene-002',
      narration: 'Allah\'a kul olmayan biri özgür kalmıyor. O boşluğu başka şeyler dolduruyor: para, makam, beğenilme ihtiyacı, korku, öfke. Ve bunlar çoğu zaman insandan daha âciz varlıklardır.',
      visual_note: 'Empty room with shadows slowly creeping in, cold and hollow, a person lost inside.',
      keywords: ['empty room', 'shadows', 'lost', 'hollow atmosphere']
    },
    {
      scene_id: 'scene-003',
      narration: 'Allah\'a kul olursan eşyaya kul olmazsın. Hakka bağlanırsan halkın esiri olmazsın. Sonsuza yönelirsen faninin elinde sürünmezsin. Bu yüzden kulluk, zillet değil; gerçek özgürlüktür.',
      visual_note: 'A bird soaring freely over mountain peaks, vast open sky, wind beneath wings.',
      keywords: ['soaring bird', 'freedom', 'mountain', 'open sky']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-1-nukte',
    test_day: 'day-19',
    short_id: 'short-002',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
