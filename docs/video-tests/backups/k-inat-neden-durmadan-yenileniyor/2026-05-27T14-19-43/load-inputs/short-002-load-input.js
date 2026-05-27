// Derin Okuma — Kâinat Neden Durmadan Yenileniyor? Shorts
// Short: short-002 — Değişim Neden Kayıp Değildir?
// day-31 — day31-export-wait-a — filled

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },
  job: {
    title: 'Değişim Neden Kayıp Değildir?',
    description: 'Değişim her zaman kayıp mı demektir?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'k-inat-neden-durmadan-yenileniyor-short-002-day-31-day31-export-wait-a'
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
      narration: 'Değişim her zaman kayıp mı demektir? Bir çiçek solduğunda güzellik tamamen yok olmuş gibi görünür.',
      visual_note: 'fading flower close up, quiet soft light',
      keywords: [
        'fading flower',
        'soft light',
        'quiet'
      ]
    },
    {
      scene_id: 'scene-002',
      narration: 'Ama aynı toprakta başka bir tomurcuk açılır. Giden suret, gelen mânâya yer bırakır.',
      visual_note: 'fresh flower bud emerging from soil, macro nature',
      keywords: [
        'flower bud',
        'soil',
        'macro'
      ]
    },
    {
      scene_id: 'scene-003',
      narration: 'Bu bakış değişince geçicilik daha az korkutur. Çünkü akışın içinde boşluk değil, tazelenen bir hikmet okunur.',
      visual_note: 'calm river flowing through green valley, hopeful mood',
      keywords: [
        'flowing river',
        'green valley',
        'hopeful'
      ]
    }
  ],
  metadata: {
    source: 'derin-okuma',
    blog_post: 'k-inat-neden-durmadan-yenileniyor',
    test_day: 'day-31',
    short_id: 'short-002',
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
