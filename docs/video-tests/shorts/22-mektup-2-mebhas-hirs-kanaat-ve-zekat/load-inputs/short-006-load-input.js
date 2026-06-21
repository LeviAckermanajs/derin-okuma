// Derin Okuma — 22. Mektup - 2. Mebhas Shorts
// Short: short-006
// Filled for the day-41 n8n Shorts run.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'İyilik Onuru Nasıl Korur?',
    description: 'İyiliğin değeri yalnızca verilende değil, niyette ve veriliş biçimindedir. Gerçek yardım üstünlük kurmaz. #derinokuma #shorts #tefekkür #zekât #ihsan #merhamet',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '22-mektup-2-mebhas-hirs-kanaat-ve-zekat-short-006-day-41'
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
    { scene_id: 'scene-001', narration: 'Yardım ederken bir insanın onurunu incitmek mümkün mü? Evet; verilen şeyin içine minnet ve üstünlük duygusu karışırsa iyilik ağır bir yüke dönüşebilir.', visual_note: 'hesitant recipient facing a proud giver, subtle emotional distance', keywords: ['charity', 'pride', 'distance'] },
    { scene_id: 'scene-002', narration: 'Muhtaç insan, merhamet gösterisinin nesnesi değil; hakkı teslim edilen onurlu bir insandır. Yardımın dili bunu hissettirmelidir.', visual_note: 'two people exchanging package at equal eye level, respectful scene', keywords: ['respect', 'equality', 'package'] },
    { scene_id: 'scene-003', narration: 'İyilik kişisel gösteriden kurtulduğunda hem verenin niyeti hem alanın izzeti korunur. En güzel yardım, ardında ezilmişlik değil dua ve güven bırakır.', visual_note: 'anonymous gift left quietly at doorway in warm light', keywords: ['anonymous gift', 'doorway', 'dignity'] }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '22-mektup-2-mebhas-hirs-kanaat-ve-zekat',
    test_day: 'day-41',
    short_id: 'short-006',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
