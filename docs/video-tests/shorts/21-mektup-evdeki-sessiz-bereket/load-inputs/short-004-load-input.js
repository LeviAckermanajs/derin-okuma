// Derin Okuma — 21. Mektup Shorts
// Short: short-004 — Hem Dünyada Hem Ahirette Huzuru Nasıl Bulursun?
// Filled: day-39

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Hem Dünyada Hem Ahirette Huzuru Nasıl Bulursun?',
    description: 'Bazı insanlar neden hem dünyada hem ahirette bu kadar huzurlu görünür?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '21-mektup-evdeki-sessiz-bereket-short-004-day-39'
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
      narration: 'Bazı insanlar var; hayatları hem dünyada rahat hem içten huzurlu görünüyor. Buna bakarken insan merak eder: Bu insanların ortak özelliği nedir?',
      visual_note: 'person walking peacefully through a golden field at sunset, serene mood',
      keywords: ['peaceful walk', 'golden field', 'sunset', 'serenity']
    },
    {
      scene_id: 'scene-002',
      narration: 'Bu sorunun cevabı tarihin her döneminde pek çok ismin hayatında tekrar eder: Anne-babaya gösterilen derin saygı ve hizmet. Bu bir tesadüf değildir. Hürmet ekip hürmet biçmenin, merhamet gösterip merhamet bulmanın somut örnekleridir bunlar.',
      visual_note: 'adult child gently helping elderly parent, warm home interior, soft afternoon light',
      keywords: ['care', 'family', 'elderly', 'warmth']
    },
    {
      scene_id: 'scene-003',
      narration: 'Eğer ahireti seviyorsan, anne-babana hizmet et; bu bir ibadet kapısıdır. Eğer dünyayı seviyorsan, yine onları memnun et; bu hayatında bereket açar. İki farklı hedef, aynı kapıya çıkar.',
      visual_note: 'two paths converging into one in a peaceful green forest, symbolic',
      keywords: ['paths', 'forest', 'convergence', 'nature']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '21-mektup-evdeki-sessiz-bereket',
    test_day: 'day-39',
    short_id: 'short-004',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
