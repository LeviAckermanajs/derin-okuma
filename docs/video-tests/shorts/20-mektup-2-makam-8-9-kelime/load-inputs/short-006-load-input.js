// Derin Okuma — 20. Mektup - 2. Makam - 8-9. Kelime Shorts
// Short: short-006 | Kâinattaki Düzen Rastgele mi?

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Kâinattaki Düzen Rastgele mi?',
    description: 'Küçük bir çekirdekten koca bir ağaç çıkıyor. Bunu bilen biri mi yapıyor?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '20-mektup-2-makam-8-9-kelime-short-006-day-36'
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
      narration: 'Toprak altında küçük bir çekirdek var. Bu çekirdek büyüyüp koca bir ağaç olacak. Peki nasıl? Bu dönüşümü mümkün kılan ne? Çekirdekte saklı bu bilgi ve program nereden geliyor?',
      visual_note: 'seed germinating underground, root emerging from seed, seedling breaking through soil, first growth',
      keywords: ['seed germinating', 'seedling breaking soil', 'underground growth', 'first emergence']
    },
    {
      scene_id: 'scene-002',
      narration: 'Her canlıya kendine özgü bir şekil, her sürece kendi ölçüsü verilmiş. Bu düzenleme bilgi ister. Hikmetle iş görmek bilmekle olur. Kâinattaki bu ince düzen, derin bir ilme işaret eder.',
      visual_note: 'geometric patterns in nature, fibonacci spiral in shell, mathematical precision in flower, natural geometry',
      keywords: ['fibonacci spiral', 'geometric patterns nature', 'mathematical precision', 'natural geometry']
    },
    {
      scene_id: 'scene-003',
      narration: 'Ama bilmek yetmez; irade de gerekir. Sayısız ihtimal arasından birini seçmek, bir iradenin işidir. Her özgün suret, bir tercihin ürünüdür. Kâinattaki düzen hem derin bir ilme hem de büyük bir iradeye delildir.',
      visual_note: 'unique snowflake crystal close-up, each one different, individual identity in nature, one of a kind',
      keywords: ['unique snowflake', 'individual crystal', 'fingerprint uniqueness', 'one of a kind']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '20-mektup-2-makam-8-9-kelime',
    test_day: 'day-36',
    short_id: 'short-006',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
