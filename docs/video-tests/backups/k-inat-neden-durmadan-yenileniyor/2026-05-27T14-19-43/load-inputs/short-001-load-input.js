// Derin Okuma — Kâinat Neden Durmadan Yenileniyor? Shorts
// Short: short-001 — Her Şey Neden Değişiyor?
// day-31 — day31-export-wait-a — filled

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },
  job: {
    title: 'Her Şey Neden Değişiyor?',
    description: 'Her şey neden durmadan değişiyor?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'k-inat-neden-durmadan-yenileniyor-short-001-day-31-day31-export-wait-a'
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
      narration: 'Her şey neden durmadan değişiyor? Güneş doğuyor, batıyor; mevsimler geliyor, geçiyor; insan bile her an başka bir hâle giriyor.',
      visual_note: 'sunrise and sunset time lapse over calm landscape',
      keywords: [
        'sunrise',
        'sunset',
        'landscape'
      ]
    },
    {
      scene_id: 'scene-002',
      narration: 'İlk bakışta bu akış insana sadece geçiciliği hatırlatır. Fakat dikkatle bakınca değişim, dağılma değil, yeni mânâların görünmesi olur.',
      visual_note: 'autumn leaves falling then spring flowers, cinematic transition',
      keywords: [
        'autumn leaves',
        'spring flowers',
        'transition'
      ]
    },
    {
      scene_id: 'scene-003',
      narration: 'Kâinat durmadan yenileniyor; çünkü gösterilecek anlam bitmiyor. Her yeni hâl, rahmet ve hikmetin başka bir yüzünü açıyor.',
      visual_note: 'wide peaceful meadow, soft morning light, slow camera',
      keywords: [
        'meadow',
        'morning light',
        'peaceful'
      ]
    }
  ],
  metadata: {
    source: 'derin-okuma',
    blog_post: 'k-inat-neden-durmadan-yenileniyor',
    test_day: 'day-31',
    short_id: 'short-001',
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
