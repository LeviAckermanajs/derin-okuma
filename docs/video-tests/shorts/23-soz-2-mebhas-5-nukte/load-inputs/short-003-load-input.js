// Derin Okuma — 23. Söz - 2. Mebhas - 5. Nükte Shorts
// Short: short-003 — İnsan Neden Dellâl Olmak Zorunda?
// Filled: day-23

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },


  job: {
    title: 'İnsan Neden Dellâl Olmak Zorunda?',
    description: 'Güzelliği görmek yetmez; güzelliğin sahibini ilan etmek de insanın görevidir.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-5-nukte-short-003-day-23'
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
      narration: 'Güzelliği görmek yetmez; güzelliğin sahibini ilan etmek de insanın görevidir.',
      visual_note: 'person gesturing toward expansive mountain landscape as if announcing',
      keywords: ['mountain announcement', 'gesturing person', 'expansive view']
    },
    {
      scene_id: 'scene-002',
      title: 'Sanatkârsız Estetik',
      narration: 'Doğayı güzel bulmak ama Sanatkârı devre dışı bırakmak; sanatın içinde kaybolmak. Bu, resmin güzelliğini görüp ressamı unutmak gibidir.',
      visual_note: 'person staring at beautiful painting in gallery, appreciating art without looking for the artist',
      keywords: ['gallery painting', 'art appreciation', 'artist unseen']
    },
    {
      scene_id: 'scene-003',
      title: 'Dellâllık',
      narration: 'Ama insan yalnızca seyirci değildir; ilancıdır. Kâinatın manasını yorumlar ve bu manayı duyurur. Güzelliği sahipsiz bırakmaz; sahibine bağlar.',
      visual_note: 'person on hilltop with open arms, vast landscape behind, sense of proclamation',
      keywords: ['hilltop proclamation', 'open arms', 'vast landscape']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-5-nukte',
    test_day: 'day-23',
    short_id: 'short-003',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
