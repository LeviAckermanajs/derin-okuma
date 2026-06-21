// Derin Okuma — 22. Mektup - 2. Mebhas Shorts
// Short: short-001
// Filled for the day-41 n8n Shorts run.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Hırs Neden Huzuru Azaltır?',
    description: 'Hırs, kazancı büyütürken kalbi daraltabilir. Gayret ile yıpratıcı telaş arasındaki sınırı düşünelim. #derinokuma #shorts #tefekkür #iman #hırs #kanaat',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '22-mektup-2-mebhas-hirs-kanaat-ve-zekat-short-001-day-41'
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
    { scene_id: 'scene-001', narration: 'İnsan neden daha çok istedikçe daha az huzur bulur? Çünkü istek telaşa dönüştüğünde, hedef büyürken kalbin sükûneti küçülür.', visual_note: 'fast moving crowd around one anxious person, cinematic city scene', keywords: ['crowd', 'anxiety', 'city'] },
    { scene_id: 'scene-002', narration: 'Çalışmak kıymetlidir; fakat sonucu zorla ele geçirme arzusu dikkati doğru adımdan koparır. İnsan kazansa bile şükrünü ve sabrını kaybedebilir.', visual_note: 'overworked person at desk surrounded by papers, evening light', keywords: ['overwork', 'desk', 'stress'] },
    { scene_id: 'scene-003', narration: 'Gayret vazifeye, hırs ise yalnızca neticeye bakar. Kalbi koruyan ölçü, elinden geleni yapıp sonucu mutlak biçimde kendi gücüne bağlamamaktır.', visual_note: 'calm walker on open road at sunrise, wide landscape', keywords: ['open road', 'sunrise', 'calm'] }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '22-mektup-2-mebhas-hirs-kanaat-ve-zekat',
    test_day: 'day-41',
    short_id: 'short-001',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
