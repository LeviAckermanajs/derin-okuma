// Derin Okuma - Vesvesenin Mahiyeti, Kalbin Beş Yarası ve Beş Merhem Shorts
// Short: short-006
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
    title: 'Kalp Vesveseden Nasıl Rahatlar?',
    description: 'Kalbini suçlamadan önce vesvesenin hilesini tanı.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'vesvesenin-mahiyeti-kalbin-bes-yarasi-ve-bes-merhem-short-006-day-27'
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
      narration: 'Kalbini suçlamadan önce vesvesenin hilesini tanı. Her korku, kalbin hakikati gibi konuşmaz.',
      visual_note: 'person stepping away from a dark mirror, symbolic scene',
      keywords: [
        'mirror',
        'distance',
        'deception'
      ]
    },
    {
      scene_id: 'scene-002',
      narration: 'Bilgi korkuyu azaltır; sükunet vesveseyi besleyen telaşı keser. İnsan ne yaşadığını anladıkça kalbine daha merhametli bakar.',
      visual_note: 'window opening in a dark room, sunlight entering',
      keywords: [
        'window light',
        'clarity',
        'mercy'
      ]
    },
    {
      scene_id: 'scene-003',
      narration: 'Sonra kalp Rabbine sığınır. Vesveseyi tanır, ona teslim olmaz ve rahmetin genişliğine yönelir.',
      visual_note: 'calm landscape after rain, sunlight through clouds, hopeful',
      keywords: [
        'after rain',
        'sunlight',
        'hope'
      ]
    }
  ],
  metadata: {
    source: 'derin-okuma',
    blog_post: 'vesvesenin-mahiyeti-kalbin-bes-yarasi-ve-bes-merhem',
    test_day: 'day-27',
    short_id: 'short-006',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
