// Derin Okuma — 22. Mektup - 1. Mebhas - 1-4. Vecih Shorts
// Short: short-001
// Filled on day-40

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Bir Kusur Bir İnsanı Tanımlar mı?',
    description: 'Birinin bir kusurunu gördüğünde, onu bütün o kusurdan ibaret mi sayarsın?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '22-mektup-1-mebhas-1-4-vecih-short-001-day-40'
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
      narration: 'Birinde hoşumuza gitmeyen bir özellik gördüğümüzde zihnimiz çok hızlı hareket eder. O kişiyi tamamen o özelliğinden ibaret görmeye başlarız. Sanki onun başka hiçbir tarafı yokmuş gibi.',
      visual_note: 'A person\'s silhouette through frosted glass, details blurred, only one feature visible.',
      keywords: ['silhouette', 'frosted glass', 'blur', 'perspective']
    },
    {
      scene_id: 'scene-002',
      narration: 'Ama şunu düşünelim: Dokuz masumun bindiği bir gemide bir suçlu var. O gemiyi batırmak, tek bir kişiyi cezalandırmak için dokuzu birden yok etmek anlamına gelir. Hiçbir adalet buna izin vermez.',
      visual_note: 'A wooden ship on calm water at sunset, silhouettes of many passengers visible.',
      keywords: ['ship', 'sea', 'passengers', 'sunset']
    },
    {
      scene_id: 'scene-003',
      narration: 'Her insanın pek çok boyutu vardır. İmanı, kardeşliği, dostluğu, ailesiyle ilişkisi — bunların hepsi sevilmeye layık taraflardır. Bir kusur, bir insanı tanımlamaz.',
      visual_note: 'Warm family gathering in natural light, togetherness and care.',
      keywords: ['family', 'togetherness', 'warmth', 'human connection']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '22-mektup-1-mebhas-1-4-vecih',
    test_day: 'day-40',
    short_id: 'short-001',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
