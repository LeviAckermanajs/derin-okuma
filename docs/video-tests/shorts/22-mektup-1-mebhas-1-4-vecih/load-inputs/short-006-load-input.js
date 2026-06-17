// Derin Okuma — 22. Mektup - 1. Mebhas - 1-4. Vecih Shorts
// Short: short-006
// Filled on day-40

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Kin Neden Önce Sahibini Yakar?',
    description: 'Kin, önce sahibini yakar.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '22-mektup-1-mebhas-1-4-vecih-short-006-day-40'
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
      narration: 'Kin, önce sahibini yakar. Haset, önce haset edeni ezer. İntikam fikri, insanın kendi ufkunu daraltır. Bunları içinde büyütmek, karşı tarafa değil, kendine yapılan bir zulümdür.',
      visual_note: 'A person sitting alone in shadow while light pours in through an open window.',
      keywords: ['shadow', 'window light', 'isolation', 'contrast']
    },
    {
      scene_id: 'scene-002',
      narration: 'Bunların karşısında duran şey af, gerçek muhabbet ve iyilikle karşılık vermektir. Bunlar insanı hem zulümden hem de içte büyüyen karanlıktan korur.',
      visual_note: 'A person offering a hand to another, simple human kindness in natural light.',
      keywords: ['kindness', 'hand', 'connection', 'warmth']
    },
    {
      scene_id: 'scene-003',
      narration: 'Kalbini, geçici kırgınlıkların kalıcı evi yapma. Çünkü insan kalbi bundan çok daha kıymetlidir.',
      visual_note: 'Peaceful sunrise over a still lake, warm spreading light, calm and open.',
      keywords: ['sunrise', 'lake', 'peace', 'new beginning']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '22-mektup-1-mebhas-1-4-vecih',
    test_day: 'day-40',
    short_id: 'short-006',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
