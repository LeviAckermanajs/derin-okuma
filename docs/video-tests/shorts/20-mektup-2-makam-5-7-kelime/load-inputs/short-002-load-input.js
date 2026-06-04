// Derin Okuma — 20. Mektup - 2. Makam - 5-7. kelime Shorts
// Short: short-002

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Zerreler ve Yıldızlar Neden Eşittir?',
    description: 'Zerreler mi daha zor yaratılır, yıldızlar mı? Sonsuz bir kudret için bu soru anlamsızlaşır.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '20-mektup-2-makam-5-7-kelime-short-002-day-35'
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
      narration: 'Zerreler mi daha zor yaratılır, yıldızlar mı? Bu soruyu düşündüğünde sonsuz bir kudret açısından cevap şaşırtıcı olur.',
      visual_note: 'microscope view of tiny particles, crystal structure detail, extreme close-up',
      keywords: ['microscope particles', 'crystal detail', 'macro nature']
    },
    {
      scene_id: 'scene-002',
      narration: 'Sonsuz bir kudret açısından küçük ile büyük arasında zorluk farkı yoktur. Bir elmayı yaratmakla bütün elmaları yaratmak aynı kudrete bakar. Bir elmanın üstündeki mühür, kâinattaki mühürle aynıdır.',
      visual_note: 'apple orchard stretching to the horizon, abundant fruit, warm light',
      keywords: ['apple orchard', 'abundant harvest', 'warm light']
    },
    {
      scene_id: 'scene-003',
      narration: 'Bu bakış şunu gösterir: En küçük bir nimeti veren de, bütün evreni var eden de aynıdır. Öyleyse şükür de hamd de bölünmez; nimetin gerçek sahibine gider.',
      visual_note: 'Milky Way galaxy seen from a dark field, stars filling the sky, cinematic wide',
      keywords: ['milky way', 'night sky', 'galaxy stars']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '20-mektup-2-makam-5-7-kelime',
    test_day: 'day-35',
    short_id: 'short-002',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
