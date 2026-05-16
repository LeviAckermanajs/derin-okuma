// Derin Okuma - Vesvesenin Mahiyeti, Kalbin Beş Yarası ve Beş Merhem Shorts
// Short: short-004
// Filled for day-27.
// Paste this into the n8n Load Input Code node.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },
  job: {
    title: 'İbadette Mükemmeliyetçilik Tuzak mı?',
    description: 'İbadeti güzel yapmak başka, ibadeti takıntıya çevirmek başka.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'vesvesenin-mahiyeti-kalbin-bes-yarasi-ve-bes-merhem-short-004-day-27'
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
      narration: 'İbadeti güzel yapmak başka, ibadeti takıntıya çevirmek başka. Daha iyisini ararken insan bazen hiçbir şeye tamam diyemez.',
      visual_note: 'person repeatedly washing hands at a sink, subdued light',
      keywords: [
        'repetition',
        'sink',
        'anxiety'
      ]
    },
    {
      scene_id: 'scene-002',
      narration: 'Abdesti tekrar etmek, niyeti yeniden kurmak, aynı kelimeye takılmak huzuru artırmayabilir. Vesvese, rahatlama hissini sürekli erteler.',
      visual_note: 'circular stairs, person paused, moody architecture',
      keywords: [
        'circular stairs',
        'loop',
        'uncertainty'
      ]
    },
    {
      scene_id: 'scene-003',
      narration: 'Ölçüsüne uygun yapılan amel için bitmeyen kuşkuya teslim olma. Kabul için dua et, eksiklik için istiğfar et ve devam et.',
      visual_note: 'open hands in prayer, warm golden light, calm background',
      keywords: [
        'prayer hands',
        'humility',
        'golden light'
      ]
    }
  ],
  metadata: {
    source: 'derin-okuma',
    blog_post: 'vesvesenin-mahiyeti-kalbin-bes-yarasi-ve-bes-merhem',
    test_day: 'day-27',
    short_id: 'short-004',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
