// Derin Okuma — Kâinat Neden Durmadan Yenileniyor? Shorts
// Short: short-003 — Tohum Neden Açılmak İster?
// day-31 — day31-export-wait-a — filled

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },
  job: {
    title: 'Tohum Neden Açılmak İster?',
    description: 'Bir tohum neden sadece tohum olarak kalmaz?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'k-inat-neden-durmadan-yenileniyor-short-003-day-31-day31-export-wait-a'
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
      narration: 'Bir tohum neden sadece tohum olarak kalmaz? Çünkü içinde görünmeyi bekleyen bir ağaç ihtimali taşır.',
      visual_note: 'seed in soil, close up, dark rich earth',
      keywords: [
        'seed',
        'soil',
        'growth'
      ]
    },
    {
      scene_id: 'scene-002',
      narration: 'Toprak, su ve ışık bulduğunda o saklı kabiliyet açılır. Küçük bir çekirdek, kendinden çok daha büyük bir anlama doğru yürür.',
      visual_note: 'seed sprouting with sunlight, slow macro shot',
      keywords: [
        'sprout',
        'sunlight',
        'macro'
      ]
    },
    {
      scene_id: 'scene-003',
      narration: 'Kâinattaki hareket de böyledir. Varlıklar değişirken, içlerine konulan imkânlar birer birer görünür hâle gelir.',
      visual_note: 'young tree growing in open field, gentle wind',
      keywords: [
        'young tree',
        'open field',
        'growth'
      ]
    }
  ],
  metadata: {
    source: 'derin-okuma',
    blog_post: 'k-inat-neden-durmadan-yenileniyor',
    test_day: 'day-31',
    short_id: 'short-003',
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
