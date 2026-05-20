// Derin Okuma — 21. Söz - 1. Makam Shorts
// Short: short-002 — Namaz Neden Her Gün Kılınır?
// Day-28 — filled by Claude

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Namaz Neden Her Gün Kılınır?',
    description: 'Her gün yapılan şey bıktırır, denir. Peki neden her gün yediğin ekmek, içtiğin su seni bıktırmıyor?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '21-soz-1-makam-short-002-day-28'
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
      narration: 'Her gün yapılan şey bıktırır, diye düşünülür. Bu mantık yaygındır. Ama şunu sormak gerekir: İnsan her gün yer, her gün su içer, her gün nefes alır. Bunlar tekrar ettiği için değersiz mi olur?',
      visual_note: 'Glass of clear water on a wooden table, simple natural light, everyday essential element.',
      keywords: ['glass of water', 'daily essential', 'simplicity', 'natural light']
    },
    {
      scene_id: 'scene-002',
      narration: 'Tekrar ediyor olması bir şeyin ihtiyaç olduğunu gösterir. Çünkü insan neye ne kadar muhtaçsa, ona o kadar sık döner. Bedenin her gün beslenmeye ihtiyacı olduğu gibi; kalbin, ruhun ve insanın en derin yönünün de manevî beslenmeye ihtiyacı vardır.',
      visual_note: 'Tree roots drinking from deep soil, underground nourishment, invisible sustenance, nature depth.',
      keywords: ['tree roots', 'underground nourishment', 'invisible sustenance', 'depth']
    },
    {
      scene_id: 'scene-003',
      narration: 'Namaz, kalbin gıdası ve ruhun suyu gibidir. Sürekli uyaran ve meşguliyet içinde bunalan insan için namaz; yeniden nefes alabilmenin kapısıdır. Tekrar bu yüzden değersizlik değil, zorunlu ihtiyacın işaretidir.',
      visual_note: 'Open window letting in fresh morning breeze, curtain moving gently, renewal feeling, soft light.',
      keywords: ['open window', 'morning breeze', 'renewal', 'fresh air']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '21-soz-1-makam',
    test_day: 'day-28',
    short_id: 'short-002',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
