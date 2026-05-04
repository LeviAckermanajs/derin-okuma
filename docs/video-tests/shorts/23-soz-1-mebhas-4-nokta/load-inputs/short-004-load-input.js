// Derin Okuma — 23. Söz 1. Mebhas 4. Nokta Shorts
// Short: short-004 — Dua Zayıflık Değil
// Paste this into the n8n "Load Input" Code node.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  job: {
    title: 'Dua Zayıflık Değil',
    description: 'Dua zayıflık değildir. İnsan dua için tasarlanmıştır.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-1-mebhas-4-nokta-short-004-day-11'
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
      "scene_id": "scene-001",
      "narration": "Dua zayıflık değil, fıtrattır. İnsanın yapısı dua için tasarlanmış. Seslenmek, yönelmek, dayanmak — bunlar insanın doğasının ta içinden gelir.",
      "visual_note": "calm water surface disturbed by single raindrop, natural response, ripple effect",
      "keywords": ["raindrop on water", "ripple", "natural response", "calm surface"]
    },
    {
      "scene_id": "scene-002",
      "narration": "Çocuk düşünün: gücü yetmez ama ister, seslenir. Bu çaresizliğin içinde bile tam bir güven vardır. İnsan da Allah'ın kapısında böyledir. Muhtaçlık, yakınlığın başka bir adıdır.",
      "visual_note": "child reaching up toward parent's hand, trust and safety, warm gentle light",
      "keywords": ["child reaching up", "parent hand", "trust", "warm light"]
    },
    {
      "scene_id": "scene-003",
      "narration": "Dua iki türlüdür: çalışmak, çabalamak, sebeplere gitmek — ve söz ile yönelmek. İkisi birlikte olduğunda insan hem elinden geleni yapar hem de sonucu doğru adrese bırakır.",
      "visual_note": "hands raised in prayer against soft evening sky, sincerity and surrender",
      "keywords": ["hands raised", "prayer", "evening sky", "sincerity"]
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-1-mebhas-4-nokta',
    test_day: 'day-11',
    short_id: 'short-004',
    workflow: 'manual_scene_json_single_track_shorts_load_input'
  }
};

return [{ json: { raw_input: rawInput } }];
