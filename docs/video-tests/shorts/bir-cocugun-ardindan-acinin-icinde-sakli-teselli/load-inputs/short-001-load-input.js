// Derin Okuma — Bir Çocuğun Ardından: Acının İçinde Saklı Teselli Shorts
// Short: short-001 — Teselli Neden 'Üzülme' Demek Değildir?
// Day-30 — filled

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: "Teselli Neden 'Üzülme' Demek Değildir?",
    description: "Evlat acısı karşısında 'üzülme' demek teselli değildir. Gerçek teselli, o acıyı tanıyarak bambaşka bir yerden bakmaktır.",
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'bir-cocugun-ardindan-acinin-icinde-sakli-teselli-short-001-day-30'
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
      narration: "Evlat acısı karşısında 'üzülme' demek teselli değildir. Gerçek teselli, o acıyı tanıyarak bambaşka bir yerden bakmaktır.",
      visual_note: 'Empty chair at a window, soft melancholic light, absence and grief, quiet interior.',
      keywords: ['empty chair', 'window light', 'grief', 'absence']
    },
    {
      scene_id: 'scene-002',
      narration: 'Büyük acılar önce kabul edilmeyi bekler. İnkâr etmek değil; acıyla birlikte ayakta durmayı öğrenmek. İman, insana işte tam bu anda yeni bir kapı açar.',
      visual_note: 'Person sitting head bowed in quiet grief, soft warm light from above, sorrow and stillness.',
      keywords: ['head bowed', 'quiet grief', 'warm light', 'stillness']
    },
    {
      scene_id: 'scene-003',
      narration: 'Kadere rıza, boyun eğmek değildir. Hayatın hakikatini gören ve o hakikatin içinde ayakta duran bir kalpliktir. Ve bu kalpliyet, acının içinde bile bir tutamak sunar.',
      visual_note: 'Still water reflecting stormy sky, calm amid turbulence, depth and acceptance.',
      keywords: ['still water', 'storm reflection', 'calm acceptance', 'depth']
    },
    {
      scene_id: 'scene-004',
      narration: 'Acı büyüktür. Ama acının içinde saklı bir hakikat var: Ayrılık sonsuz değildir. Ve bu cümle, kalbin en karanlık anında bir ışık olabilir.',
      visual_note: 'Small light visible at the end of a dark tunnel, hope in darkness, cinematic perspective.',
      keywords: ['tunnel light', 'hope in darkness', 'cinematic', 'small but steady']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: 'bir-cocugun-ardindan-acinin-icinde-sakli-teselli',
    test_day: 'day-30',
    short_id: 'short-001',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
