// Derin Okuma — 21. Mektup Shorts
// Short: short-006 — Bakım Verirken Sorulması Gereken Asıl Soru
// Filled: day-39

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Bakım Verirken Sorulması Gereken Asıl Soru',
    description: 'Bakım verirken yanlış soruyu soruyor olabilirsin.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '21-mektup-evdeki-sessiz-bereket-short-006-day-39'
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
      narration: 'İnsan bakım verirken çoğunlukla şunu sorar: Bunun için ne kadar zaman harcıyorum, ne kadar yoruluyorum, ne kaybediyorum? Bu soru doğal çıkar. Ama bazen bu soru, tüm resmi göstermiyor olabilir.',
      visual_note: 'person sitting at a table looking exhausted, soft indoor light, quiet moment',
      keywords: ['exhaustion', 'table', 'indoor', 'quiet']
    },
    {
      scene_id: 'scene-002',
      narration: 'Çünkü görünmeyenler de var. Kazanılan sabır görünmez. Büyüyen merhamet görünmez. Korunan insanlık görünmez. Pek çok sıkıntının uğramamış olması görünmez. Ve evde bulunan yaşlı ya da muhtaç kişinin sessiz duasının etkisi görünmez.',
      visual_note: 'soft golden light through window, dust particles visible in light, peaceful stillness',
      keywords: ['golden light', 'window', 'stillness', 'peace']
    },
    {
      scene_id: 'scene-003',
      narration: 'Belki asıl soru şudur: Ben bu bakım sayesinde nelerden korunuyorum? Hangi berekete kavuşuyorum? Ve hangi insanlığımı kaybetmekten kurtuluyorum? Bu soruyu sormak, aynı sorumluluğu bambaşka bir ışıkla görmektir.',
      visual_note: 'person standing at a crossroads in nature, one path bright with morning light ahead',
      keywords: ['crossroads', 'nature', 'morning light', 'direction']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '21-mektup-evdeki-sessiz-bereket',
    test_day: 'day-39',
    short_id: 'short-006',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
