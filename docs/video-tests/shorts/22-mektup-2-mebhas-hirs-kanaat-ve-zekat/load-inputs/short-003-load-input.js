// Derin Okuma — 22. Mektup - 2. Mebhas Shorts
// Short: short-003
// Filled for the day-41 n8n Shorts run.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Hırs Sonucu Nasıl Uzaklaştırır?',
    description: 'Uyku, bekleyiş ve sabırsızlık bize aynı sırrı gösterir: Neticeyi zorlamak bazen onu uzaklaştırır. #derinokuma #shorts #tefekkür #sabır #hırs #tevekkül',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '22-mektup-2-mebhas-hirs-kanaat-ve-zekat-short-003-day-41'
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
    { scene_id: 'scene-001', narration: 'Bazen aradığımız şeyden bizi uzaklaştıran, onu fazla istememizdir. Uyumak için kendimizi zorladıkça uykunun kaçması gibi.', visual_note: 'restless person awake in bed under soft moonlight', keywords: ['insomnia', 'bed', 'moonlight'] },
    { scene_id: 'scene-002', narration: 'Beklerken son bir dakika sabredemeyip ayrılırız; beklediğimiz kişi hemen ardından gelir. Hırs, neticenin eşiğinde bile insanı sabırsızlığa düşürebilir.', visual_note: 'person leaving platform while friend arrives behind', keywords: ['platform', 'waiting', 'arrival'] },
    { scene_id: 'scene-003', narration: 'Çözüm istemekten vazgeçmek değil, doğru adımı sakinlikle sürdürmektir. Sabır, neticeyi zorlamak yerine sürecin hakkını vermektir.', visual_note: 'potter calmly shaping clay on spinning wheel', keywords: ['potter', 'clay', 'patience'] }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '22-mektup-2-mebhas-hirs-kanaat-ve-zekat',
    test_day: 'day-41',
    short_id: 'short-003',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
