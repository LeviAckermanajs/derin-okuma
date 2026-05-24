// Derin Okuma — Bir Çocuğun Ardından: Acının İçinde Saklı Teselli Shorts
// Short: short-004 — Ayrılık Neden Sonsuz Değildir?
// Day-30 — filled

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Ayrılık Neden Sonsuz Değildir?',
    description: "'Bir daha asla göremeyeceksin' duygusu, acıyı en çok büyüten şeydir. Peki ya bu hakikat değilse?",
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'bir-cocugun-ardindan-acinin-icinde-sakli-teselli-short-004-day-30'
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
      narration: "'Bir daha asla göremeyeceksin' duygusu, acıyı en çok büyüten şeydir. Peki ya bu gerçek değilse? Peki ya ayrılık geçiciyse?",
      visual_note: 'Person looking at an empty doorway, soft nostalgic light, absence and longing, interior.',
      keywords: ['empty doorway', 'longing', 'absence', 'soft light']
    },
    {
      scene_id: 'scene-002',
      narration: 'Dünya bir misafirhanedir. Kimse burada kalıcı değildir. Giden çocuk nereye gitmişse, anne baba da aynı yolun yolcusudur. Yani o sadece önce gitmiştir; yol aynıdır.',
      visual_note: 'Traveler leaving an inn at dawn, misty road ahead, journey and impermanence.',
      keywords: ['traveler at dawn', 'misty road', 'journey', 'impermanence']
    },
    {
      scene_id: 'scene-003',
      narration: 'Ayrılık ebedî değildir. Bu kısa cümle, tesellinin kalbindedir. İnsan bunu gerçekten hissettiğinde, acı aynı kalsa bile artık tamamen karanlık değildir.',
      visual_note: 'Two paths converging at a sunlit horizon, reunion and hope, warm tones, cinematic.',
      keywords: ['paths converging', 'sunlit horizon', 'reunion', 'warm tones']
    },
    {
      scene_id: 'scene-004',
      narration: 'O verdi, O aldı. Bu cümle soğuk bir teslimiyet değildir. Her şeyin gerçek sahibini tanıyan bir kalbin, O\'nun hükmünde bir anlam bulmasıdır.',
      visual_note: 'Hands open upward in quiet surrender, soft light from above, spiritual acceptance.',
      keywords: ['open hands', 'surrender', 'soft light', 'spiritual']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: 'bir-cocugun-ardindan-acinin-icinde-sakli-teselli',
    test_day: 'day-30',
    short_id: 'short-004',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
