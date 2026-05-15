// Derin Okuma — 23. Söz - 2. Mebhas - 5. Nükte Shorts
// Short: short-001 — İnsan Neden Memur ve Misafir?
// Filled: day-23

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },


  job: {
    title: 'İnsan Neden Memur ve Misafir?',
    description: 'İnsan bu dünyaya başıboş gelmedi; bir görev ve bir emanet bilinciyle gönderildi.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-5-nukte-short-001-day-23'
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
      narration: 'İnsan bu dünyaya başıboş gelmedi; bir görev ve bir emanet bilinciyle gönderildi.',
      visual_note: 'person arriving at doorstep of vast landscape, purposeful posture, dawn light',
      keywords: ['arrival dawn', 'purposeful posture', 'vast landscape']
    },
    {
      scene_id: 'scene-002',
      title: 'Memur',
      narration: 'Memur olmak, görevlendirilmiş olmaktır. İnsan yalnızca yiyip içmek, çalışmak için değil; kâinatı okumak, şükretmek, Allah\'ı tanımak için gönderilmiştir. Bu vazifeyi taşıyan insan, anlam kazanır.',
      visual_note: 'person walking purposefully through corridor with natural light streaming in',
      keywords: ['purposeful walk', 'natural light corridor', 'meaningful journey']
    },
    {
      scene_id: 'scene-003',
      title: 'Misafir',
      narration: 'Misafir ise sahip değildir; geçicidir. Her şeyin gerçek sahibine karşı edepli durur. Bu bilinç enaniyeti kırar ve insana huzur verir.',
      visual_note: 'traveler with backpack pausing at scenic viewpoint, not ownership, just visiting',
      keywords: ['traveler viewpoint', 'transient visitor', 'scenic pause']
    },
    {
      scene_id: 'scene-004',
      title: 'İkisi Birlikte',
      narration: 'Memur vazifeyi, misafir geçiciliği hatırlatır. İkisi birlikte anlaşılınca insan ne çok bağlanır ne de varlığını boşa harcamış olur. Hem sorumludur hem de hürdür.',
      visual_note: 'person sitting calmly at table with open hands, balance and peace',
      keywords: ['calm balance', 'open hands', 'inner peace']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-5-nukte',
    test_day: 'day-23',
    short_id: 'short-001',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
