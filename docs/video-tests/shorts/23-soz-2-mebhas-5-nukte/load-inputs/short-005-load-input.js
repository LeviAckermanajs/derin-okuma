// Derin Okuma — 23. Söz - 2. Mebhas - 5. Nükte Shorts
// Short: short-005 — Dua Neden Kulluktur?
// Filled: day-23

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },


  job: {
    title: 'Dua Neden Kulluktur?',
    description: 'İstemek küçüklük değildir; istemek, doğru adrese yönelmenin şerefidir.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-5-nukte-short-005-day-23'
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
      narration: 'İstemek küçüklük değildir; istemek, doğru adrese yönelmenin şerefidir.',
      visual_note: 'hands raised toward sky in open supplication, warm light from above',
      keywords: ['hands raised sky', 'supplication', 'warm light above']
    },
    {
      scene_id: 'scene-002',
      title: 'Sonsuz Hazine',
      narration: 'Allah sonsuz zenginliğini, sonsuz rahmetini ve sonsuz imkânını gösteriyor. İşte bu karşısında insanın en doğal cevabı duadır. İhtiyaç duymak, istemek, yönelmek.',
      visual_note: 'vast ocean stretching to horizon, abundance and endless possibility',
      keywords: ['vast ocean', 'endless horizon', 'abundance']
    },
    {
      scene_id: 'scene-003',
      title: 'İhtiyaç Kapıdır',
      narration: 'İhtiyaç utanç değildir; duanın kapısıdır. Dua eden kimse güçsüzlüğünü değil, doğru adresi bulmuşluğunu ilan etmiş olur. Ve bu, kul olmanın en derin anlamıdır.',
      visual_note: 'door opening to warm bright light, threshold between need and hope',
      keywords: ['door opening', 'warm light threshold', 'hope beyond door']
    },
    {
      scene_id: 'scene-004',
      title: 'Sonuç',
      narration: 'Yani istemek düşürmez; yükseltir. Çünkü her talep, sonsuz bir kaynağa yapılan bilinçli bir yöneliştir.',
      visual_note: 'person standing tall after prayer, upright posture, inner dignity',
      keywords: ['standing tall', 'after prayer', 'inner dignity']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-5-nukte',
    test_day: 'day-23',
    short_id: 'short-005',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
