// Derin Okuma — 20. Mektup - 1. Makam Shorts
// Short: short-004 — Ölüm Neden İdam Değildir?
// Day-33 — Filled by Claude

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Ölüm Neden İdam Değildir?',
    description: 'Ölümü düşününce içini ne dolduruyor?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '20-mektup-1-makam-short-004-day-33'
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
      narration: "Ölümü düşününce içini ne dolduruyor? Çoğu insan için bu soru karanlık bir his doğurur. Sanki varoluş orada bitiyor; sanki bütün anlam orada yok oluyor.",
      visual_note: 'A quiet empty road at twilight, soft fading light, introspective atmosphere.',
      keywords: ['empty road', 'twilight', 'fading light', 'introspective']
    },
    {
      scene_id: 'scene-002',
      narration: "Ama ölüme başka türlü bakmak mümkündür. Hiçlik değil, yok oluş değil. Bir vazifeden terhis. Fânî hayattan bâkî hayata yapılan bilinçli bir geçiş. Rahîm bir Fail tarafından düzenlenmiş bir sevkiyat.",
      visual_note: 'A dignified departure scene, sunset, honorable farewell with warm golden tones.',
      keywords: ['dignified departure', 'sunset', 'honorable farewell', 'warm']
    },
    {
      scene_id: 'scene-003',
      narration: "İnsan bu dünyaya misafir olarak geldi. Asıl vatanı başka bir yerdir. Ölüm, onu yabancı bir mekândan, aşina bir huzura taşır. Sürgün değil, dönüştür. Son değil, kavuşmadır.",
      visual_note: 'A long quiet road leading toward a warm glowing horizon, wide cinematic shot.',
      keywords: ['long road', 'warm horizon', 'homecoming', 'cinematic']
    },
    {
      scene_id: 'scene-004',
      narration: "Böyle bakılınca kabir kapısına ağlayarak girmek gerekmez. Yokluğa değil bekaya, karanlığa değil nura, ayrılığa değil visale gidilmektedir.",
      visual_note: 'A person opening a door to a sunlit garden, golden light flooding in, slow motion.',
      keywords: ['opening door', 'sunlit garden', 'golden light', 'hope']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '20-mektup-1-makam',
    test_day: 'day-33',
    short_id: 'short-004',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
