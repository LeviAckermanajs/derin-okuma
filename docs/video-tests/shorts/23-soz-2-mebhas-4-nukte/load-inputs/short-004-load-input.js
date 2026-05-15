// Derin Okuma — 23. Söz - 2. Mebhas - 4. Nükte Shorts
// Short: short-004

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },


  job: {
    title: 'Kulluk İnsanı Nasıl Yüceltir?',
    description: 'Kulluk insanı küçültmez; yanlış kapılara esir olmaktan kurtarır.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-4-nukte-short-004-day-22'
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
      narration: 'Kulluk insanı küçültmez; yanlış kapılara esir olmaktan kurtarır.',
      visual_note: 'wide mosque interior with soft light beams, single person standing',
      keywords: ['mosque interior', 'light beams', 'devotion']
    },
    {
      scene_id: 'scene-002',
      title: 'Esaret',
      narration: 'İnsan nefsine, korkularına ve geçici şeylere bağlandıkça parçalanır. Her beklenti onu başka bir yöne çeker.',
      visual_note: 'person in busy street standing still, blurred crowd, reflective mood',
      keywords: ['busy street', 'stillness', 'pressure']
    },
    {
      scene_id: 'scene-003',
      title: 'İzzet',
      narration: 'Allah\'a kulluk ise kalbi bir merkeze toplar. İnsan o zaman küçülmez; kendi hakiki değerini bulur.',
      visual_note: 'sunlight across mosque courtyard, calm architectural scene',
      keywords: ['courtyard', 'sunlight', 'spiritual dignity']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-4-nukte',
    test_day: 'day-22',
    short_id: 'short-004',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
