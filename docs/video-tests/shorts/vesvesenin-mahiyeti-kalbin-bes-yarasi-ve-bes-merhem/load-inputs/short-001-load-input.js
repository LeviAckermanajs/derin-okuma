// Derin Okuma - Vesvesenin Mahiyeti, Kalbin Beş Yarası ve Beş Merhem Shorts
// Short: short-001
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
    title: 'Aklına Gelen Her Şey Sen misin?',
    description: 'Aklına gelen her düşünce gerçekten senin düşüncen mi?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'vesvesenin-mahiyeti-kalbin-bes-yarasi-ve-bes-merhem-short-001-day-27'
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
      narration: 'Aklına gelen her düşünce gerçekten senin düşüncen mi? Bazen zihin bir kelime, bir görüntü, bir korku üretir; kalp ise ondan rahatsız olur.',
      visual_note: 'person looking at reflections in a window, soft evening light',
      keywords: [
        'reflection',
        'thoughts',
        'evening light'
      ]
    },
    {
      scene_id: 'scene-002',
      narration: 'Rahatsız olmak, o şeyi sahiplendiğin anlamına gelmez. Hatta çoğu zaman kalbin onu kabul etmediğini gösterir.',
      visual_note: 'calm person stepping away from noisy street, cinematic contrast',
      keywords: [
        'noise',
        'stepping away',
        'calm'
      ]
    },
    {
      scene_id: 'scene-003',
      narration: 'Vesvese, uğrayan düşünceyi kalbin kararı gibi göstererek büyür. Mesafe koyduğunda gücü azalır.',
      visual_note: 'mist moving past an open doorway, symbolic quiet scene',
      keywords: [
        'mist',
        'doorway',
        'distance'
      ]
    }
  ],
  metadata: {
    source: 'derin-okuma',
    blog_post: 'vesvesenin-mahiyeti-kalbin-bes-yarasi-ve-bes-merhem',
    test_day: 'day-27',
    short_id: 'short-001',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
