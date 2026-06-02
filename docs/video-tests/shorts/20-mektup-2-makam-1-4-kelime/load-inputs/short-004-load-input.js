// Derin Okuma — 20. Mektup - 2. Makam - 1-2-3-4. kelime Shorts
// Short: short-004

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Ortaklık Neden İmkânsızdır?',
    description: 'Bir kasabada iki müdür olsa ne olur? Kâinatta iki ayrı irade olsaydı ne olurdu?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '20-mektup-2-makam-1-4-kelime-short-004-day-34'
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
      narration: 'Küçük bir kasabada iki müdür, bir şehirde iki vali, bir ülkede iki padişah olsa ne olur? Kaçınılmaz olarak çatışma başlar; biri öne çekerken diğeri geri çeker. Aynı yerde iki bağımsız irade, düzen yerine karışıklık üretir.',
      visual_note: 'two people trying to steer a boat in different directions, conflict and tension',
      keywords: ['two people steering', 'direction conflict', 'boat tension']
    },
    {
      scene_id: 'scene-002',
      narration: 'Şimdi bunu büyüt: Kasabadan kâinata. Kâinattaki düzen, kasabadakinden çok daha hassas ve çok daha geniş. Bu kadar iç içe geçmiş bir sistemde iki ayrı irade çatışırsa hiçbir şey yerine oturmazdı. Ama her şey yerli yerinde duruyor.',
      visual_note: 'cosmos with planets in perfect orbits, vast and ordered universe, no conflicts',
      keywords: ['solar system orbits', 'cosmic order', 'space harmony']
    },
    {
      scene_id: 'scene-003',
      narration: 'Üstelik bir zerreyi yönetmek bile o zerrenin bağlantılı olduğu her şeyi yönetmeyi gerektirir. Parçaya sahip olmak için bütüne sahip olmak şart. Ortaklık bu yüzden yalnızca inanç değil; düzen açısından da imkânsızdır.',
      visual_note: 'atom structure with electrons orbiting, scientific visualization of wholeness',
      keywords: ['atom structure', 'orbital electrons', 'scientific wholeness']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '20-mektup-2-makam-1-4-kelime',
    test_day: 'day-34',
    short_id: 'short-004',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
