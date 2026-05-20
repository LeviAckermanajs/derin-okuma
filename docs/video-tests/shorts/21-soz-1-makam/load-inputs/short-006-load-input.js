// Derin Okuma — 21. Söz - 1. Makam Shorts
// Short: short-006 — Kusurlu Namaz Bırakılır mı?
// Day-28 — filled by Claude

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Kusurlu Namaz Bırakılır mı?',
    description: 'Namazında dağınıklık var, dikkat dağılıyor, huşû eksik. Peki bu, namazı bırakmak için geçerli bir sebep midir?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '21-soz-1-makam-short-006-day-28'
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
      narration: 'İnsan bazen kendi namazını küçümser. "Dikkatim dağılıyor, tam değil, layık değilim" der. Ve bu küçümseme zamanla bırakmaya dönüşebilir. Ama şunu sormak gerekir: Eksiklik, bırakmanın sebebi midir?',
      visual_note: 'Flickering small candle in a large dark room, imperfect but still burning, cinematic intimate mood.',
      keywords: ['flickering candle', 'imperfect light', 'dark room', 'persistence']
    },
    {
      scene_id: 'scene-002',
      narration: 'Küçük bir çekirdek ile olgunlaşmış ağaç arasında öz bakımından bir kopukluk yoktur; fark derinlik farkıdır. Bir başlangıç namazı ile derin bir huşû namazı arasında da tür farkı değil, derece farkı vardır. İkisi de aynı hakikati taşır.',
      visual_note: 'Small seed beside a towering tree, scale difference but same essence, forest floor, warm natural light.',
      keywords: ['seed and tree', 'potential', 'growth', 'same essence']
    },
    {
      scene_id: 'scene-003',
      narration: 'Nefis bazen kusuru bahane edip ibadeti tamamen terk ettirmek ister. Oysa zayıf da olsa, dağınık da olsa; o namazda hakikatten bir sır taşınır. Mükemmel olmadığın için bırakma. Çekirdek küçüktür ama ağacın hakikatini taşır.',
      visual_note: 'Small plant pushing through cracked stone, resilience in harsh conditions, close-up detail, warm light.',
      keywords: ['plant through stone', 'resilience', 'persistence', 'tiny but strong']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '21-soz-1-makam',
    test_day: 'day-28',
    short_id: 'short-006',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
