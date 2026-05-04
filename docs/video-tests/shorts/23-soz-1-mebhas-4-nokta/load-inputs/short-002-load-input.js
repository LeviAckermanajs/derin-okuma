// Derin Okuma — 23. Söz 1. Mebhas 4. Nokta Shorts
// Short: short-002 — Neden Cahil Doğarız?
// Paste this into the n8n "Load Input" Code node.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  job: {
    title: 'Neden Cahil Doğarız?',
    description: 'Hayvan hazır programla dünyaya gelir. Peki insan neden cahil ve muhtaç doğar? Çünkü görevi farklı.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-1-mebhas-4-nokta-short-002-day-11'
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
      "narration": "Hayvan hazır programla dünyaya gelir. Bir at birkaç saat içinde yürür. Arı doğuştan bal yapar. Bunlar bilinçli tercih değil, yaratılıştan gelen kulluktur.",
      "visual_note": "newborn foal taking first steps in sunlit field, natural and instinctive movement",
      "keywords": ["newborn foal", "first steps", "instinct", "sunlit field"]
    },
    {
      "scene_id": "scene-002",
      "narration": "İnsan ise tam tersi bir yapıyla dünyaya gelir. Her şeyi öğrenmesi gerekir, tek başına yaşayamaz, uzun yıllar boyunca yardıma muhtaçtır. Hayvanla kıyaslandığında dezavantajlı görünür.",
      "visual_note": "newborn baby hand grasping adult finger, vulnerability and trust, soft light",
      "keywords": ["newborn hand", "trust", "vulnerability", "soft light"]
    },
    {
      "scene_id": "scene-003",
      "narration": "Ama bu zayıflık bir hata değil, bir tasarım. İnsanın görevi büyüktür: öğrenerek büyümek, anlayarak kulluk etmek. Hayvan hazır gelir çünkü görevi sabittir. İnsan muhtaç gelir çünkü görevi bir yolculuktur.",
      "visual_note": "long winding mountain path disappearing into morning mist, journey ahead",
      "keywords": ["mountain path", "winding road", "mist", "journey"]
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-1-mebhas-4-nokta',
    test_day: 'day-11',
    short_id: 'short-002',
    workflow: 'manual_scene_json_single_track_shorts_load_input'
  }
};

return [{ json: { raw_input: rawInput } }];
