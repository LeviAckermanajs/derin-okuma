// Derin Okuma — 21. Mektup Shorts
// Short: short-002 — Neden Bu Düşünce Vicdanı Kanatıyor?
// Filled: day-39

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Neden Bu Düşünce Vicdanı Kanatıyor?',
    description: 'İnsan bazen kalbinde fark etmeden çok acı bir düşünce taşıyabilir.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '21-mektup-evdeki-sessiz-bereket-short-002-day-39'
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
      narration: 'Sesli söylenmez; ama bazen kalpten geçer: keşke bu yük olmasaydı, keşke o olmasa. Bu düşünce o kadar gizli taşınır ki, insan onu bazen kendinden bile saklıyor gibidir.',
      visual_note: 'person alone sitting in a dim room, hands clasped, troubled inner expression',
      keywords: ['solitude', 'inner conflict', 'dim light', 'hands']
    },
    {
      scene_id: 'scene-002',
      narration: 'Oysa o kişi; bir zamanlar uyku gözlerine girmeden seni düşündü. Kendisinden önce seni düşündü. Sağlığını, vaktini, rahatını sana verdi. Şimdi o zayıfladıysa, onun varlığından sıkılmak; verilmiş olan her şeyi unutmak demektir.',
      visual_note: 'elderly hands next to younger hands, soft warm light, generational connection',
      keywords: ['hands', 'elderly', 'generational', 'warmth']
    },
    {
      scene_id: 'scene-003',
      narration: 'Bu düşünce, bir suçlama değil; bir hatırlatmadır. Verilen emeği görmek, bazen insanı en derin pişmanlıktan kurtarır.',
      visual_note: 'old family photo held gently in hands, nostalgic soft focus background',
      keywords: ['old photo', 'family', 'nostalgia', 'reflection']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '21-mektup-evdeki-sessiz-bereket',
    test_day: 'day-39',
    short_id: 'short-002',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
