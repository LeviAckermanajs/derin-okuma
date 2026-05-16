// Derin Okuma - Vesvesenin Mahiyeti, Kalbin Beş Yarası ve Beş Merhem Shorts
// Short: short-003
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
    title: 'Namazda Dağılınca Ne Yapmalı?',
    description: 'Namazda aklın dağılınca ilk yapman gereken şey kendini suçlamak değil.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'vesvesenin-mahiyeti-kalbin-bes-yarasi-ve-bes-merhem-short-003-day-27'
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
      narration: 'Namazda aklın dağılınca ilk yapman gereken şey kendini suçlamak değil. Zihin bazen istemeden başka bir hatıraya sıçrar.',
      visual_note: 'quiet prayer rug with sunlight on the floor, peaceful room',
      keywords: [
        'prayer rug',
        'sunlight',
        'peace'
      ]
    },
    {
      scene_id: 'scene-002',
      narration: 'Bir düşünce başka bir düşünceyi çağırır; sonra insan kendini çok uzak bir yerde bulur. Bu fark ediş, dönüş kapısıdır.',
      visual_note: 'chain links on wood, shallow depth of field, symbolic',
      keywords: [
        'chain links',
        'thoughts',
        'awareness'
      ]
    },
    {
      scene_id: 'scene-003',
      narration: 'Panikle iç muhasebeye dalmak yerine ibadete dön. Vesvesenin istediği, dönüşünü değil suçluluğunu uzatmaktır.',
      visual_note: 'person turning toward warm light from a doorway',
      keywords: [
        'return',
        'warm light',
        'doorway'
      ]
    }
  ],
  metadata: {
    source: 'derin-okuma',
    blog_post: 'vesvesenin-mahiyeti-kalbin-bes-yarasi-ve-bes-merhem',
    test_day: 'day-27',
    short_id: 'short-003',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
