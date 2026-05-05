// Derin Okuma — 23. Söz - 2. Mebhas - 1. Nükte Shorts
// Short: short-004 | İnsan Neden Hem Zayıf Hem Tehlikeli?
// day-19

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  job: {
    title: 'İnsan Neden Hem Zayıf Hem Tehlikeli?',
    description: 'İnsan iyilik yapmada arıdan bile aşağıda kalabilir. Ama kötülükte dağları aşar.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-1-nukte-short-004-day-19'
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
      narration: 'İnsanda iki cihet vardır. Birincisi inşa etmek, hayır üretmek. İkincisi bozmak, yıkmak. Bu iki cihet birbirine çok benzemez.',
      visual_note: 'Side by side: careful hands building a stone wall, and hands pushing stones apart.',
      keywords: ['construction', 'destruction', 'contrast', 'hands']
    },
    {
      scene_id: 'scene-002',
      narration: 'Hayır üretirken insan çok sınırlıdır. Bir arı bal yapar; insan o sistemi kuramaz. Bir serçe yuvasını kurar; insan onun fıtrî sanatını tam olarak aynen yapamaz.',
      visual_note: 'A bee on a flower, honeycomb close-up, intricate precision of nature.',
      keywords: ['bee', 'honeycomb', 'nature precision', 'humble']
    },
    {
      scene_id: 'scene-003',
      narration: 'Ama tahrip tarafında insan çok tehlikelidir. Bir kibrit ormanı yakabilir. Bir söz bir aileyi dağıtabilir. Tahrip etmek, yapmaktan çok daha hızlıdır.',
      visual_note: 'A single match flame, then forest fire spreading in the background, dramatic contrast.',
      keywords: ['match flame', 'forest fire', 'destruction', 'small causes big effects']
    },
    {
      scene_id: 'scene-004',
      narration: 'Bu farkı bilmek çok önemli. İnsanın büyüklüğü, yaratma gücünde değil; taşıdığı emanette ve o emaneti hangi yöne kullandığında gizlidir.',
      visual_note: 'A person holding a small candle flame carefully in cupped hands, protecting it from wind.',
      keywords: ['protected flame', 'care', 'responsibility', 'trust']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-1-nukte',
    test_day: 'day-19',
    short_id: 'short-004',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
