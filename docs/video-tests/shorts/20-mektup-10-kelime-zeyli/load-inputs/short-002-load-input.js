// Derin Okuma — Bir Zerre Kendi Başına Ne Yapabilir? Shorts
// Short: short-002
// Content filled: day-38

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Başıboşluk Mu, Mensubiyet Mi?',
    description: 'Başıboş kalmak özgürlük gibi görünür. Ama aslında insanı en küçük gücüne mahkûm eder.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '20-mektup-10-kelime-zeyli-short-002-day-38'
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
      narration: 'Başıboş kalmak özgürlük gibi görünür. Ama aslında insanı kendi dar gücüne hapseder. Hiç kimseye bağlı olmayan biri, her şeyi kendi omzunda taşımak zorundadır.',
      visual_note: 'lone person walking on empty road, carrying heavy pack',
      keywords: ['lone person', 'empty road', 'heavy pack', 'solitary']
    },
    {
      scene_id: 'scene-002',
      narration: 'İki kardeşi düşünelim. Biri kendi başına hareket eder. Erzağını, her şeyini kendisi taşır. Yapabileceği iş, kendi kuvvetiyle sınırlıdır. Diğeri ise büyük bir orduya katılır. Arkasında büyük bir güç vardır. Kendi gücü az olsa bile, bağlı olduğu yapının imkânlarıyla büyük işler yapar.',
      visual_note: 'lone warrior versus unified army at dawn, contrast, power',
      keywords: ['lone warrior', 'army', 'dawn', 'contrast']
    },
    {
      scene_id: 'scene-003',
      narration: 'Mensubiyet, küçük bir varlığı büyük bir güce dayandırır. İnce bir tel, büyük bir merkeze bağlandığında, merkezdeki tüm imkânları harekete geçirebilir. Küçüklük artık bir engel değil, büyük bir güce açılan kapıdır.',
      visual_note: 'thin wire connecting to powerful energy source, flow of light',
      keywords: ['wire', 'connection', 'power source', 'light flow']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '20-mektup-10-kelime-zeyli',
    test_day: 'day-38',
    short_id: 'short-002',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
