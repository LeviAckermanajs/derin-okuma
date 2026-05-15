// Derin Okuma — 23. Söz - 2. Mebhas - 5. Nükte Shorts
// Short: short-002 — İbadet Neden Marifetten Doğar?
// Filled: day-23

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },


  job: {
    title: 'İbadet Neden Marifetten Doğar?',
    description: 'İbadet sadece beden hareketleri değildir; önce anlamak, sonra yönelmektir.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-5-nukte-short-002-day-23'
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
      narration: 'İbadet sadece beden hareketleri değildir; önce anlamak, sonra yönelmektir.',
      visual_note: 'person in contemplation by window, light illuminating thoughtful face',
      keywords: ['contemplation window', 'thoughtful face', 'soft light']
    },
    {
      scene_id: 'scene-002',
      title: 'Gaibane Yol',
      narration: 'Birinci yol kâinatı okumaktır. Düzeni, hikmeti, azameti fark etmek; arkasında bir Sâni olduğunu anlamak. Bu tefekkür, temaşa, hayret yoludur.',
      visual_note: 'person sitting in forest, dappled light through leaves, peaceful observation',
      keywords: ['forest dappled light', 'peaceful observation', 'nature contemplation']
    },
    {
      scene_id: 'scene-003',
      title: 'Hazırane Yol',
      narration: 'İkinci yol ise tanıdığı Rabbine doğrudan yönelmektir; dua etmek, secde etmek, şükretmek. Önce tanırsın, sonra yönelirsin. Hakiki ibadet, marifetten doğar.',
      visual_note: 'person in prayer silhouette at golden sunset, direct devotion',
      keywords: ['prayer silhouette', 'golden sunset', 'direct devotion']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-5-nukte',
    test_day: 'day-23',
    short_id: 'short-002',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
