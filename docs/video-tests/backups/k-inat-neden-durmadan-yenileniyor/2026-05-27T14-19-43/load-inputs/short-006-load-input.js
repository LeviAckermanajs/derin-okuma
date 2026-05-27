// Derin Okuma — Kâinat Neden Durmadan Yenileniyor? Shorts
// Short: short-006 — Kalp Neye Tutunur?
// day-31 — day31-export-wait-a — filled

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },
  job: {
    title: 'Kalp Neye Tutunur?',
    description: 'Kalp değişen dünyada neye tutunur?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'k-inat-neden-durmadan-yenileniyor-short-006-day-31-day31-export-wait-a'
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
    join_separator: '

'
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
      narration: 'Kalp değişen dünyada neye tutunur? İnsan her şeyin aktığını gördüğünde, içten içe sabit bir dayanak arar.',
      visual_note: 'person standing by moving sea, overcast calm mood',
      keywords: [
        'person',
        'moving sea',
        'calm'
      ]
    },
    {
      scene_id: 'scene-002',
      narration: 'Eğer değişim sahipsiz bir savruluş gibi görülürse, kalp yorulur. Fakat akışın ardında hikmet okunursa, geçicilik daha anlaşılır hâle gelir.',
      visual_note: 'lighthouse in stormy sea with steady light',
      keywords: [
        'lighthouse',
        'stormy sea',
        'steady light'
      ]
    },
    {
      scene_id: 'scene-003',
      narration: 'Yenilenen âlem, değişmeyen bir kudrete işaret eder. Kalp de bu işareti fark ettiğinde, akışın içinde güven bulur.',
      visual_note: 'peaceful horizon after storm, soft golden light',
      keywords: [
        'peaceful horizon',
        'golden light',
        'trust'
      ]
    }
  ],
  metadata: {
    source: 'derin-okuma',
    blog_post: 'k-inat-neden-durmadan-yenileniyor',
    test_day: 'day-31',
    short_id: 'short-006',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled',
    batch_run_id: 'day31-export-wait-a'
  },
  publish: {
    youtube: {
      enabled: true,
      dry_run: true,
      scheduled: true,
      schedule_slots: [
        '13:00',
        '19:00',
        '22:00'
      ],
      timezone: 'Europe/Istanbul',
      expected_channel_id: 'UCfdDdchpT4rait8RUjzpVGA'
    }
  }
};

return [{ json: { raw_input: rawInput } }];
