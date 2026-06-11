// Derin Okuma — 20. Mektup - 2. Makam - 10. Kelime Shorts
// Short: short-002 — Bir Çiçek mi Zor, Bir Bahar mı?

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Bir Çiçek mi Zor, Bir Bahar mı?',
    description: 'Bir çiçek mi daha kolaydır, yoksa milyonlarca çiçekten oluşan bir baharı yaratmak mı?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'bir-bahari-yaratmak-neden-bir-cicek-kadar-kolaydir-short-002-day-37'
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
      narration: 'Bir çiçek mi daha kolaydır, yoksa bir baharı yaratmak mı? İnsan gücüyle bakınca aralarında dağlar kadar fark var. Tek bir çiçek yetiştirmek başka bir şeydir; milyonlarca bitkinin, kuşun ve böceğin aynı anda ortaya çıktığı bir baharı meydana getirmek bambaşka.',
      visual_note: 'A single tulip beside a vast meadow in full spring bloom, clear day',
      keywords: ['single tulip', 'spring meadow', 'comparison', 'abundance']
    },
    {
      scene_id: 'scene-002',
      narration: 'Ama bu karşılaştırma, yalnızca bizim için doğrudur. Güçlük, işin büyüklüğünden değil; yapanın gücünün yetersizliğinden doğar. Sınırsız bir kudret için büyük ile küçük arasında bir engel yoktur.',
      visual_note: 'Sunlight pouring over a landscape, illuminating both a tiny flower and a vast forest equally',
      keywords: ['sunlight on flower', 'sunlight on forest', 'equal illumination', 'nature light']
    },
    {
      scene_id: 'scene-003',
      narration: 'Cennetin yaratılması bahar kadar kolaydır. Baharın yaratılması bahçe kadar. Bahçeninki ise bir çiçek kadar. Bu silsilede büyüklük zorluk yaratmaz. Çiçeği yaratan kudret, baharı da aynı kolaylıkla yaratır.',
      visual_note: 'Layered nature: a flower, a garden, a blooming valley, an infinite horizon at dusk',
      keywords: ['layered landscape', 'flower to horizon', 'natural layers', 'scale beauty']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: 'bir-bahari-yaratmak-neden-bir-cicek-kadar-kolaydir',
    test_day: 'day-37',
    short_id: 'short-002',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
