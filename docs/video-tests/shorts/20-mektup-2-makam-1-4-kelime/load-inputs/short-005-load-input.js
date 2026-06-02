// Derin Okuma — 20. Mektup - 2. Makam - 1-2-3-4. kelime Shorts
// Short: short-005

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Mülk Neden Bölünmez?',
    description: 'Bir ağacı gerçekten kim yönetiyor? Yalnızca ağacı mı, yoksa onu ayakta tutan her şeyi de mi?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '20-mektup-2-makam-1-4-kelime-short-005-day-34'
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
      narration: 'Bir ağaç yalnızca kendi bünyesiyle var değildir. Toprağa ihtiyacı var, suya, ışığa, mevsimsel değişimlere. Ağacı gerçekten idare eden biri varsa, aynı zamanda toprağı, suyu, havayı ve mevsimleri de idare ediyor demektir.',
      visual_note: 'large tree with rain falling, sunlight streaming, and visible roots below ground',
      keywords: ['tree with elements', 'rain sun roots', 'ecosystem tree']
    },
    {
      scene_id: 'scene-002',
      narration: 'En küçük canlı da böyledir. Bir böcek, sadece kendi bedenine değil; üzerinde yaşadığı bitkiye, solduğu havaya, içinde bulunduğu ekosisteme bağlıdır. O böceğin yaşayabilmesi için kâinatın büyük düzeninin ona hizmet etmesi gerekiyor.',
      visual_note: 'tiny insect on a plant surrounded by entire forest ecosystem, wide to macro',
      keywords: ['insect ecosystem', 'small to large', 'nature connection']
    },
    {
      scene_id: 'scene-003',
      narration: 'Eğer mülk paylaştırılmış olsaydı, her canlı yalnızca kendi parçasına bağlı olurdu. Ama her şey birbirine bağlı. Bir parçanın sahibi olmak için geri kalanın da sahibi olmak gerekiyor. Mülk, bölünmez bir bütün olarak durmak zorundadır.',
      visual_note: 'interconnected web of nature elements, everything connected to everything else',
      keywords: ['nature web', 'interconnected', 'holistic view']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '20-mektup-2-makam-1-4-kelime',
    test_day: 'day-34',
    short_id: 'short-005',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
