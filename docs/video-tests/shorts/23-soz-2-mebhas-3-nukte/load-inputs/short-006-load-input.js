// Derin Okuma — 23. Söz - 2. Mebhas - 3. Nükte Shorts
// Short: short-006
// Filled: day-21

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  job: {
    title: "Ahsen-i Takvim'den Serçeye Düşmek Ne Demektir?",
    description: "İnsanın dünyevîleşmesi sıradan bir düşüş değildir. Yüksek bir kıvamın küçük şeylere indirgenmesidir. 23. Söz'den derin bir ikaz.",
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-3-nukte-short-006-day-21'
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
      title: 'Hook',
      narration: 'İnsan en güzel kıvamda yaratılmıştır. Bu yalnız bedeni değil, bütün varoluşu kapsar. Böyle bir varlık sadece mide ve şehvete indirgenirse ne olur?',
      visual_note: 'A gem in perfect light — brilliant, complex, created for more than burial.',
      keywords: ['gem', 'brilliance', 'potential', 'perfect form']
    },
    {
      scene_id: 'scene-002',
      title: 'Mücevher Çamura Batarsa',
      narration: 'Bir taş yere düşerse şaşılmaz. Ama mücevher çamura batarsa acı olur. Sorun varlığın değersizliği değil; yüksek bir kıvamın düşük şeylere indirgenmesidir.',
      visual_note: 'A jewel falling into mud — slow motion — its brilliance dimmed, the contrast sharp and sad.',
      keywords: ['jewel in mud', 'slow motion', 'loss of brilliance', 'noble degraded']
    },
    {
      scene_id: 'scene-003',
      title: 'Serçe Kuşu Kıyası',
      narration: 'Serçenin istidadı sınırlıdır, dünya için yaratılmıştır ve o sınır içinde kusursuzdur. İnsan ise sonsuz istidatlarla donatılmıştır. Kendini serçenin seviyesine indirgemek, istidat israfıdır.',
      visual_note: 'A sparrow beside a human — both in nature, human aware of something more, looking toward the horizon.',
      keywords: ['sparrow', 'human', 'awareness', 'horizon', 'purpose beyond']
    },
    {
      scene_id: 'scene-004',
      title: 'Kapanış',
      narration: 'İnsanın büyüklüğü bağımsızlığında değil, bilinçli kulluğundadır. Yüce istidatlarını kulluk ve tefekkürle büyüten insan, kendi hakikatine uygun yaşar.',
      visual_note: 'A person walking toward dawn, upright and purposeful — the light ahead, the path clear.',
      keywords: ['walking toward dawn', 'purposeful', 'upright', 'clear path']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-3-nukte',
    test_day: 'day-21',
    short_id: 'short-006',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
