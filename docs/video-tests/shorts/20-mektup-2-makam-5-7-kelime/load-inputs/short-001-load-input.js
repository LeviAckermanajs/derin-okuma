// Derin Okuma — 20. Mektup - 2. Makam - 5-7. kelime Shorts
// Short: short-001

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: "Hamd Neden O'na Aittir?",
    description: "Bir çiçeğin güzelliğini kim yarattı? Bu soruyu ciddiye aldığında, hamdin nereye gittiği de netleşir.",
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '20-mektup-2-makam-5-7-kelime-short-001-day-35'
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
      narration: 'Bir çiçeğe bakınca ne görürsün? Bir rengi, bir kokuyu, bir şekli... Güzel. Peki bu güzelliği kim yarattı? Toprağın mı, güneşin mi, yağmurun mu? Bunların hepsi birer araç, birer perde.',
      visual_note: 'close-up of a blooming flower, soft morning dew, delicate petals, macro photography',
      keywords: ['flower close-up', 'morning dew', 'macro photography']
    },
    {
      scene_id: 'scene-002',
      narration: 'Varlıklarda ne kadar güzellik, mükemmellik ve nimet varsa hepsi aynı kaynaktan geliyor. Bir elmanın tadı, bir karın beyazlığı, bir denizin genişliği... Bunların hiçbiri sahipsiz bir güzellik değildir.',
      visual_note: 'wide garden in full bloom, diverse flowers and colors, soft natural light',
      keywords: ['garden blooming', 'colorful flowers', 'diverse nature']
    },
    {
      scene_id: 'scene-003',
      narration: 'Şükür ve övgü bir nehir gibidir; her zaman bir denize doğru akar. En küçük bir nimeti doğrudan veren de, bütün kâinatı yaratan da aynıdır. Öyleyse hamd de bölünmez; doğrudan nimetin gerçek sahibine akar.',
      visual_note: 'river flowing gently through a lush valley, wide aerial shot, natural light',
      keywords: ['flowing river', 'valley aerial', 'natural water']
    },
    {
      scene_id: 'scene-004',
      narration: 'Kâinat büyük bir bahçe gibidir; her şey kendi diliyle aynı hakikati söylüyor: Biz bir sanatın eseriyiz. Ve bu sanat sahipsiz değil.',
      visual_note: 'cosmic view of Earth from space, soft blue glow, stars in background',
      keywords: ['earth from space', 'stars', 'cosmic view']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '20-mektup-2-makam-5-7-kelime',
    test_day: 'day-35',
    short_id: 'short-001',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
