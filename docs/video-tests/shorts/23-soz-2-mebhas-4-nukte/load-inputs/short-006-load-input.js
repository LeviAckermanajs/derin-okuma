// Derin Okuma — 23. Söz - 2. Mebhas - 4. Nükte Shorts
// Short: short-006

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },


  job: {
    title: 'Başarı Neden Kalbi Sınar?',
    description: 'Aynı başarı insanı ya gurura götürür ya da şükre.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-4-nukte-short-006-day-22'
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
      narration: 'Aynı başarı insanı ya gurura götürür ya da şükre.',
      visual_note: 'forked road in countryside, soft cloudy sky, symbolic choice',
      keywords: ['forked road', 'choice', 'reflection']
    },
    {
      scene_id: 'scene-002',
      title: 'Nefsin Okuması',
      narration: 'Nefis, açılan kapıyı hemen kendine yazar. Zekâm, gücüm, becerim der ve yardım gördüğünü unutur.',
      visual_note: 'shadowed face near mirror, low light, introspective scene',
      keywords: ['mirror', 'shadow', 'ego']
    },
    {
      scene_id: 'scene-003',
      title: 'Tevhidin Okuması',
      narration: 'Tevhit ise emeği inkâr etmez; ama nimeti lütuf olarak görür. Bu okuma insanı küçültmez, sakinleştirir.',
      visual_note: 'calm sea horizon at dawn, peaceful wide frame, soft light',
      keywords: ['sea horizon', 'dawn', 'peace']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-4-nukte',
    test_day: 'day-22',
    short_id: 'short-006',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
