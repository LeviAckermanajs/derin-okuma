// Derin Okuma — 20. Mektup - 1. Makam Shorts
// Short: short-006 — Hiçbir Emek Boşa Gitmez
// Day-33 — Filled by Claude

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Hiçbir Emek Boşa Gitmez',
    description: 'Emeklerim boşa mı gitti? Bu soru herkese gelir.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '20-mektup-1-makam-short-006-day-33'
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
      narration: "Emeklerim boşa mı gitti? Bu soru herkese gelir. Özellikle hayatın sonuna yaklaşırken, yapamadıklar ve bırakılanlar ağır basar. Ama bu soru, yanlış bir varsayıma dayanır.",
      visual_note: "An elderly person's hands resting on a table, thoughtful, warm light, quiet moment.",
      keywords: ['elderly hands', 'thoughtful', 'quiet moment', 'warm light']
    },
    {
      scene_id: 'scene-002',
      narration: "Geçen baharın tohumları kaybolmaz. Çekirdekler korunur, sonraki baharda daha şaşaalı çıkar. Her yıl yeryüzünde görülen bu mucize, başka bir şeyi de gösterir: insanın hayatının neticeleri de zayi olmaz.",
      visual_note: 'Seeds sprouting into new plants in spring, time-lapse, warm natural light, renewal.',
      keywords: ['seeds sprouting', 'spring renewal', 'time-lapse', 'new growth']
    },
    {
      scene_id: 'scene-003',
      narration: "Her hizmet kaydedilmiş, her amel muhafaza edilmiştir. Bütün hayır O'nun elindedir. Hizmet bitince ücret zamanı gelir. Emek boşa gitmez; zamanı gelince karşılığı görülür.",
      visual_note: 'An old handwritten journal being carefully closed, hands gentle, library setting, soft light.',
      keywords: ['handwritten journal', 'careful hands', 'library', 'preserved']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '20-mektup-1-makam',
    test_day: 'day-33',
    short_id: 'short-006',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
