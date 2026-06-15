// Derin Okuma — 21. Mektup Shorts
// Short: short-001 — Evin Sessiz Bereketi Nereden Geliyor?
// Filled: day-39

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Evin Sessiz Bereketi Nereden Geliyor?',
    description: 'Evindeki en sessiz kişi, o evin en büyük bereketi olabilir.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '21-mektup-evdeki-sessiz-bereket-short-001-day-39'
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
      narration: 'Bir evin içinde bazen en az konuşan, en az hareket eden kişi; o evin en derin bereketini taşıyandır. Bunu çoğu zaman fark etmeyiz. Çünkü bereket sessizdir.',
      visual_note: 'quiet elderly person sitting by window in soft sunlight, peaceful and still',
      keywords: ['elderly', 'window', 'peaceful', 'soft light']
    },
    {
      scene_id: 'scene-002',
      narration: 'Yaşlı ya da hasta bir insan, evde sessizce dua eder. O dua kimseye söylenmez. Ama bir yerde karşılık bulur. Muhtaç birinin yüreğinden yükselen bu sessiz şükran, görünmez ama gerçektir.',
      visual_note: 'elderly person praying quietly indoors, soft warm light, close-up hands',
      keywords: ['prayer', 'elderly', 'hands', 'warm light']
    },
    {
      scene_id: 'scene-003',
      narration: 'Belki sorulması gereken soru şu değildir: Bu kişiden ne kaybediyorum? Belki asıl soru şudur: Bu kişinin sayesinde nelerden korunuyorum? Bu soruyu sormak, bakış açısını değiştirir.',
      visual_note: 'person standing at a window looking outside thoughtfully, reflective calm mood',
      keywords: ['reflection', 'window', 'thoughtful', 'interior']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '21-mektup-evdeki-sessiz-bereket',
    test_day: 'day-39',
    short_id: 'short-001',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
