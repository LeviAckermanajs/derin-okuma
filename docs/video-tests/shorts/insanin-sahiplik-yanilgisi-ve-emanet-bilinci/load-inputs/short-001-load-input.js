// Derin Okuma — İnsanın Sahiplik Yanılgısı ve Emanet Bilinci Shorts
// Short: short-001 — Hayat Senin Mi? Malik mi Emanetçi mi?
// Day-29 — filled by Claude

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Hayat Senin Mi? Malik mi Emanetçi mi?',
    description: 'Elindeki şeyler gerçekten sana mı ait? Bu soruyu hiç bu kadar ciddiye almadın.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'insanin-sahiplik-yanilgisi-ve-emanet-bilinci-short-001-day-29'
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
      narration: 'Elindeki şeyler gerçekten sana mı ait? Bedenin, zamanın, sevdiklerin... Bunlar sana mı ait, yoksa sana emanet mi verilmiş?',
      visual_note: 'Hands gently holding then releasing sand or water, slow motion, soft natural light.',
      keywords: ['hands releasing', 'sand', 'slow motion', 'letting go']
    },
    {
      scene_id: 'scene-002',
      narration: 'İnsan kendisini hayatına malik zannedince her kayıp yıkım gibi gelir. Her musibet haksız saldırı gibi görünür. Her ölüm karanlık bir bitiş gibi hissettirir. Çünkü kendi malını kaybettiğini düşünür.',
      visual_note: 'Storm clouds rolling over calm landscape, dramatic shift from light to dark, nature\'s power.',
      keywords: ['storm', 'landscape', 'dramatic', 'nature power']
    },
    {
      scene_id: 'scene-003',
      narration: 'Ama insan kendisini emanetçi bilirse bakış değişir. Nefis de mal da hayat da geçici olarak verilmiştir. İnsan bu emaneti korumakla sorumludur; ama asıl sahip kendisi değildir. Ve bu fark her şeyi değiştirir.',
      visual_note: 'Person carefully tending a garden, gentle morning light, focused stewardship and care.',
      keywords: ['gardening', 'care', 'stewardship', 'morning light']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: 'insanin-sahiplik-yanilgisi-ve-emanet-bilinci',
    test_day: 'day-29',
    short_id: 'short-001',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
