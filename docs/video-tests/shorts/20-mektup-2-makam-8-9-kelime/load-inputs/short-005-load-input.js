// Derin Okuma — 20. Mektup - 2. Makam - 8-9. Kelime Shorts
// Short: short-005 | Bütün Hayır O'nun Elindedir

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: "Bütün Hayır O'nun Elindedir",
    description: 'İyilik isteyen insan için tek bir adres var.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '20-mektup-2-makam-8-9-kelime-short-005-day-36'
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
      narration: "Her güzellik bir kaynaktan gelir. Her iyilik, bir vericisi olan şeydir. Kâinattaki tüm hayırlar, ihsanlar ve bereketler O'nun elindedir. Bunu fark etmek, bakışı köklü biçimde değiştirir.",
      visual_note: 'sunlight pouring through clouds, generous light falling on earth, warmth from above, luminous sky',
      keywords: ['sunlight through clouds', 'generous light', 'warmth from sky', 'luminous landscape']
    },
    {
      scene_id: 'scene-002',
      narration: 'İyilik kaynağını aramak, iyiliği yanlış yerden beklemekten daha huzurludur. Tüm iyiliklerin bir adresi var; o adrese yönelmek, arayışı dinginleştirir. Aradığını bulmak, doğru adreste aramakla başlar.',
      visual_note: 'clear path leading toward warm horizon light, direction in open landscape, purpose and clarity',
      keywords: ['path toward light', 'open landscape direction', 'clear purpose', 'finding the way']
    },
    {
      scene_id: 'scene-003',
      narration: "Hayır isteyen, hayrın bulunduğu yere döner. Bu, basit bir teslimiyet değil; gerçekliğe uygun bir adrestir. Bütün hayır O'nun elindedir ve hayır arayan hep oraya çıkar.",
      visual_note: 'open hands receiving golden light, hands uplifted in gratitude, warmth on open palms',
      keywords: ['open hands light', 'gratitude gesture', 'receiving warmth', 'golden light hands']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '20-mektup-2-makam-8-9-kelime',
    test_day: 'day-36',
    short_id: 'short-005',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
