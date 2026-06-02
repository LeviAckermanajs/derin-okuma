// Derin Okuma — 20. Mektup - 2. Makam - 1-2-3-4. kelime Shorts
// Short: short-001

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Kâinata Neden Hep Parça Parça Bakıyoruz?',
    description: 'İnsan kâinata baktığında genellikle tek tek şeyleri görür. Peki ya bağlantıları?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '20-mektup-2-makam-1-4-kelime-short-001-day-34'
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
      narration: 'İnsan kâinata baktığında genellikle tek tek şeyleri görür. Şu çiçek, bu ağaç, o yıldız, bir ölüm, bir doğum. Her şey ayrı ayrı durur ve aralarındaki bağ görünmüyor gibidir. Oysa bağlantılar hep oradadır; bakış onları görmek için açılmayı bekliyor.',
      visual_note: 'person looking at individual flowers in a field, one by one, slow pan',
      keywords: ['person in field', 'flowers individually', 'contemplation']
    },
    {
      scene_id: 'scene-002',
      narration: 'Bakış değişince, tek tek şeyler kaybolmuyor; ama aralarındaki bağ görünür hale geliyor. Çiçeği var eden toprak, toprağı besleyen yağmur, yağmuru veren bulut, bulutu taşıyan rüzgâr. Hepsi birbirini çekip taşıyor; hepsi aynı düzenin içinde.',
      visual_note: 'aerial view showing interconnected nature, rivers, forests and fields from above',
      keywords: ['aerial nature', 'interconnected landscape', 'wide view']
    },
    {
      scene_id: 'scene-003',
      narration: 'Kâinata bütünüyle bakıldığında, dağınık görünen her şeyin aslında bir düzenin içinde olduğu anlaşılıyor. Bu düzen, her şeyi birbirine bağlayan ve anlamlı kılan bir zeminin varlığına işaret ediyor. Bakış değişince, anlam da değişiyor.',
      visual_note: 'wide shot of a complete ecosystem at golden hour, everything connected and unified',
      keywords: ['ecosystem golden hour', 'complete nature', 'unified view']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '20-mektup-2-makam-1-4-kelime',
    test_day: 'day-34',
    short_id: 'short-001',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
