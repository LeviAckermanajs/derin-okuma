// Derin Okuma — İnsanın Sahiplik Yanılgısı ve Emanet Bilinci Shorts
// Short: short-004 — Musibet Neden Anlamsız Gelir?
// Day-29 — filled by Claude

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Musibet Neden Anlamsız Gelir?',
    description: 'Musibet neden haksız gelir? Çünkü kendimizi malik zannediyoruz.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'insanin-sahiplik-yanilgisi-ve-emanet-bilinci-short-004-day-29'
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
      narration: 'Musibet neden haksız ve anlamsız gelir? Çünkü insan kendisini hayatına malik zannedince gelen her sıkıntı, kendi mülküne yapılmış haksız bir saldırı gibi hissettirir.',
      visual_note: 'Rain falling on person standing in street, helpless but dignified stance, quiet determination.',
      keywords: ['rain', 'standing firm', 'street', 'determination']
    },
    {
      scene_id: 'scene-002',
      narration: 'Ama emanet bilinci bakışı değiştirir. İnsan elindeki emaneti korumaya çalışır; tedbiri alır, çareyi arar. Fakat tüm çabasına rağmen bir musibet gelirse, onu başıboş bir saldırı gibi değil, bir imtihan gibi karşılar.',
      visual_note: 'Person carefully tending a flame in wind, protective yet accepting, quiet strength.',
      keywords: ['flame in wind', 'protection', 'acceptance', 'strength']
    },
    {
      scene_id: 'scene-003',
      narration: 'Bu duruş insanı ne çaresizliğe ne de anlamsız bir öfkeye bırakır. Hem elinden geleni yapar hem de her şeyi kendi omuzlarına yıkmaz. Çünkü emanetin asıl sahibi başkasıdır.',
      visual_note: 'Person sitting peacefully after storm passes, relief and calm acceptance, clearing sky.',
      keywords: ['after storm', 'clearing sky', 'relief', 'acceptance']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: 'insanin-sahiplik-yanilgisi-ve-emanet-bilinci',
    test_day: 'day-29',
    short_id: 'short-004',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
