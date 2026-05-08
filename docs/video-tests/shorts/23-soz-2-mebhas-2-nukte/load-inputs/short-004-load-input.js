// Derin Okuma — 23. Söz - 2. Mebhas - 2. Nükte Shorts
// Short: short-004 | Latifelerini Nereye Harcıyorsun?
// day-20

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  job: {
    title: 'Latifelerini Nereye Harcıyorsun?',
    description: 'Sana verilen yüksek duygular nereye akıyor? Cevap, her şeyi değiştirir.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-2-nukte-short-004-day-20'
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
      narration: 'Sana verilen nimetin güzelliği yetmez. Onu nasıl kullandığın belirleyicidir. Akıl büyük bir nimettir. Ama hakikati ararsa nur olur, bahaneye çalışırsa afet olur.',
      visual_note: 'A telescope pointed at stars above versus turned down to the ground, same precise instrument, different purpose.',
      keywords: ['telescope', 'direction matters', 'same tool different use', 'stars vs ground']
    },
    {
      scene_id: 'scene-002',
      narration: 'Hayal büyük bir nimettir. Ama tefekküre açılırsa ufuk olur, vehme çalışırsa yük olur. Kalp büyük bir nimettir. Allah\'a yönelirse merkez olur, fani şeylere mutlak bağlanırsa azap olur.',
      visual_note: 'A compass spinning wildly, then settling peacefully pointing to true north, calm and resolved.',
      keywords: ['compass', 'true north', 'direction', 'settling', 'focus']
    },
    {
      scene_id: 'scene-003',
      narration: 'Yüksek latifeleri nefse hizmetkâr etmek, sukuttur. Ama onları asli vazifelerine döndürmek, hakiki terakkidir. Aynı cihazlar, iki farklı insan yaratır. Fark, yönde.',
      visual_note: 'Two rivers from the same source — one flowing into a dark swamp, one opening into a bright open sea.',
      keywords: ['two rivers', 'same source', 'diverging paths', 'dark swamp vs open sea', 'direction']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-2-nukte',
    test_day: 'day-20',
    short_id: 'short-004',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
