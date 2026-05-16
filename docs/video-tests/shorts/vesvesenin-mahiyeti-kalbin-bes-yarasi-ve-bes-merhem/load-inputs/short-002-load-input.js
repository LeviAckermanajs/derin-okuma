// Derin Okuma - Vesvesenin Mahiyeti, Kalbin Beş Yarası ve Beş Merhem Shorts
// Short: short-002
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
    title: 'Vesvese Neden Büyür?',
    description: 'Vesvese çoğu zaman düşünceden değil, ona verdiğin korkudan beslenir.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'vesvesenin-mahiyeti-kalbin-bes-yarasi-ve-bes-merhem-short-002-day-27'
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
      narration: 'Vesvese çoğu zaman düşünceden değil, ona verdiğin korkudan beslenir. Küçük bir uğrama, sürekli incelenince büyür.',
      visual_note: 'small shadow growing on a wall, dim cinematic light',
      keywords: [
        'shadow',
        'fear',
        'growth'
      ]
    },
    {
      scene_id: 'scene-002',
      narration: 'Niye geldi, ne anlama geliyor, kalbim bozuldu mu diye döndükçe zihin yorulur. Artık mesele düşünce değil, düşünceye verilen anlam olur.',
      visual_note: 'person overthinking at a desk, papers and low lamp light',
      keywords: [
        'overthinking',
        'desk',
        'lamp'
      ]
    },
    {
      scene_id: 'scene-003',
      narration: 'Mahiyetini bildiğinde vesvese eski ağırlığını kaybeder. Her kuruntuya cevap yetiştirmek yerine merkeze dönmek gerekir.',
      visual_note: 'steady compass on wooden table, calm focused shot',
      keywords: [
        'compass',
        'focus',
        'return'
      ]
    }
  ],
  metadata: {
    source: 'derin-okuma',
    blog_post: 'vesvesenin-mahiyeti-kalbin-bes-yarasi-ve-bes-merhem',
    test_day: 'day-27',
    short_id: 'short-002',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
