// Derin Okuma — 20. Mektup - 1. Makam Shorts
// Short: short-002 — Kaç Kapı Çaldın?
// Day-33 — Filled by Claude

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Kaç Kapı Çaldın?',
    description: 'Kaç kapı çaldın, kaç insana muhtaç oldun, kaç kez anlaşılmak istedin?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '20-mektup-1-makam-short-002-day-33'
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
      narration: "Kaç kapı çaldın, kaç insana muhtaç oldun, kaç kez anlaşılmak istedin ama bulamadın? İnsan bazen en sıradan bir ihtiyacı için bile yollara düşer, kapı kapı dolaşır. Bu yorgunluk gerçektir. Fakat çoğu zaman yanlış kapılarda aranır çözüm.",
      visual_note: 'A person walking down a street, passing multiple closed doors, searching, slow movement.',
      keywords: ['closed doors', 'searching person', 'street', 'seeking']
    },
    {
      scene_id: 'scene-002',
      narration: "Bütün bu kapıların arkasındaki gerçek güç aynıdır. Her şeyin anahtarı tek elde. Aracıya gerek yok, engel yok, izin kapısı yok. Her hâlinde, her arzunda, her anda doğrudan dönebilirsin.",
      visual_note: 'A single door slightly ajar with warm golden light spilling through, inviting and calm.',
      keywords: ['open door', 'warm light', 'invitation', 'single door']
    },
    {
      scene_id: 'scene-003',
      narration: "Yorgun düşen kalpler için bu hakikat, büyük bir rahatlıktır. En derin derdin bile bir muhatap bulur. En sessiz isteğin bile işitilir. Çünkü sana en yakın olan, aynı zamanda her şeye Kadir olandır.",
      visual_note: 'A calm person sitting quietly by a window, peaceful expression, warm morning light.',
      keywords: ['peaceful person', 'window light', 'calm', 'morning']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '20-mektup-1-makam',
    test_day: 'day-33',
    short_id: 'short-002',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
