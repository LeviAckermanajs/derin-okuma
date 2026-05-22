// Derin Okuma — İnsanın Sahiplik Yanılgısı ve Emanet Bilinci Shorts
// Short: short-002 — Ölüm Neden Karanlık Görünür?
// Day-29 — filled by Claude

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Ölüm Neden Karanlık Görünür?',
    description: 'Ölüm neden bu kadar karanlık gelir? Belki yanlış yerden bakıyoruz.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'insanin-sahiplik-yanilgisi-ve-emanet-bilinci-short-002-day-29'
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
      narration: 'Ölüm neden bu kadar karanlık gelir? Çünkü insan kendisini hayatına malik zannedince, ölüm sahip olduğu her şeyi kaybetmek anlamına gelir. Bu bakışta ölüm gerçekten de karanlık bir yok oluştur.',
      visual_note: 'Autumn leaves falling slowly in dim forest light, quiet and melancholic, slow motion.',
      keywords: ['falling leaves', 'autumn', 'dim light', 'slow motion']
    },
    {
      scene_id: 'scene-002',
      narration: 'Ama bakış değişince ölüm de değişir. Bir asker vazifesini tamamlayıp terhis olduğunda bu bitişi yok oluş olarak yaşamaz. Görevi bitti; asıl merkeze dönüş zamanı geldi.',
      visual_note: 'Soldier at gate of honor, dignified farewell, warm golden afternoon light, purposeful.',
      keywords: ['soldier', 'farewell', 'honor', 'afternoon light']
    },
    {
      scene_id: 'scene-003',
      narration: 'İnsan da böyle. Emanetler teslim edilince, görev tamamlanınca, dönüş vakti gelir. Emanetçi gözüyle bakıldığında ölüm bir terhis olur; karanlık bir bitiş değil.',
      visual_note: 'Sunset over calm sea, warm golden horizon, serene and hopeful closing of day.',
      keywords: ['sunset', 'calm sea', 'golden horizon', 'hopeful']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: 'insanin-sahiplik-yanilgisi-ve-emanet-bilinci',
    test_day: 'day-29',
    short_id: 'short-002',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
