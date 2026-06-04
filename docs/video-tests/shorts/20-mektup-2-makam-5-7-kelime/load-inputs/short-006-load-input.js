// Derin Okuma — 20. Mektup - 2. Makam - 5-7. kelime Shorts
// Short: short-006

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Güzellik, Hayat ve Ölüm Neden Aynı Kapıya Çıkar?',
    description: 'Güzelliğe bak, hayata bak, ölüme bak. Üçü de aynı yere işaret ediyor.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '20-mektup-2-makam-5-7-kelime-short-006-day-35'
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
      narration: 'Güzelliğe bak, hamd akar. Hayata bak, bir sahibi olduğunu görürsün. Ölüme bak, orada da bir hikmet var. Üç farklı pencere, ama hepsi aynı manzaraya açılıyor.',
      visual_note: 'panoramic landscape with sunrise, vastness of nature, wide angle cinematic',
      keywords: ['panoramic landscape', 'sunrise', 'wide nature']
    },
    {
      scene_id: 'scene-002',
      narration: 'Kâinat bir bahçe gibi hamdi söylüyor. Bahar bir ordu gibi hayatı söylüyor. Zaman bir nehir gibi geliş ve gidişi söylüyor. Ve bütün bu sahnelerin içinden aynı söz yükseliyor.',
      visual_note: 'four seasons montage: spring flowers, summer green, autumn orange, winter snow',
      keywords: ['four seasons', 'nature cycle', 'seasonal change']
    },
    {
      scene_id: 'scene-003',
      narration: 'Varlık sahipsiz değil. Güzellik tesadüfî değil. Hayat başıboş değil. Ölüm de anlamsız bir sönüş değil. Bu dört gerçeği bir arada görebilen insan, dünyaya farklı gözlerle bakar.',
      visual_note: 'human standing on a hill at sunset, small figure in vast landscape, cinematic wide',
      keywords: ['person silhouette', 'sunset hill', 'vast landscape']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '20-mektup-2-makam-5-7-kelime',
    test_day: 'day-35',
    short_id: 'short-006',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
