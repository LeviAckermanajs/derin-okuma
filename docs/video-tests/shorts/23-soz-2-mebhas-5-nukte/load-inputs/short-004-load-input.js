// Derin Okuma — 23. Söz - 2. Mebhas - 5. Nükte Shorts
// Short: short-004 — Bilgi Neden Yetmez?
// Filled: day-23

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },


  job: {
    title: 'Bilgi Neden Yetmez?',
    description: 'Çok şey biliyor olabilirsin, ama kalbin değer vermiyorsa yine de kör kalırsın.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-5-nukte-short-004-day-23'
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
      narration: 'Çok şey biliyor olabilirsin, ama kalbin değer vermiyorsa yine de kör kalırsın.',
      visual_note: 'scholar surrounded by books looking distant and unmoved, knowledge without feeling',
      keywords: ['scholar unmoved', 'books surrounding', 'distant gaze']
    },
    {
      scene_id: 'scene-002',
      title: 'İdrak Terazisi',
      narration: 'Akıl, varlığı okur, ayırır, tanır. Bu idrak terazisidir. Ama bu tanıma soyuk kalırsa, marifet yüzeyde yüzer.',
      visual_note: 'old balance scale on wooden table, precise but cold, analytical measurement',
      keywords: ['balance scale', 'precise measurement', 'analytical']
    },
    {
      scene_id: 'scene-003',
      title: 'Kalbin Kıymetşinaslığı',
      narration: 'Kalbin kıymetşinaslığı ise aklın tanıdığına değer verir. Bir çiçeğe bakan akıl onu sınıflandırır; ama kalp o çiçekteki lütfü, inceliği, ihsanı hisseder. İkisi birlikte çalışınca marifet derinleşir.',
      visual_note: 'person gently touching flower petals, eyes closed, feeling the texture and wonder',
      keywords: ['touching flower', 'eyes closed wonder', 'sensory appreciation']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-5-nukte',
    test_day: 'day-23',
    short_id: 'short-004',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
