// Derin Okuma — 20. Mektup - 2. Makam - 1-2-3-4. kelime Shorts
// Short: short-006

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Dağınık Görünen Neden Aslında Birdir?',
    description: 'Her şey ayrı ayrı duruyor gibi görünür. Ama gerçekten öyle mi?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '20-mektup-2-makam-1-4-kelime-short-006-day-34'
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
      narration: 'Düzen varsa, ölçü vardır. Ölçü varsa, hikmet vardır. Hikmet varsa, bilinçli bir irade vardır. Sürekli yenilenme varsa, sürekli bir tasarruf vardır. Her şey birbirine bağlıysa, mülk de idare de bölünmüş olamaz. Bu zincir kırılmaz.',
      visual_note: 'close-up of metal chain links, strong metallic connections, each link holding the next',
      keywords: ['chain links', 'connected sequence', 'strong bonds']
    },
    {
      scene_id: 'scene-002',
      narration: '"Allah\'tan başka ilâh yoktur" cümlesi, yalnızca bir inanç beyanı değildir. Bu cümle, kâinata bakmanın bir anahtarıdır. Bu anahtarla bakıldığında, dağınık gibi duran her varlık yeni bir anlam kazanmaya başlar.',
      visual_note: 'golden light breaking through dark clouds, illuminating a vast landscape below',
      keywords: ['golden light clouds', 'illumination', 'light breaking darkness']
    },
    {
      scene_id: 'scene-003',
      narration: 'Belki de en güçlü davet şudur: Sadece bakmak değil, bağlantıları görmek. Ve dağınık gibi duran bütün varlığı, tek bir mülkün içinde okumak. Kâinat, sayısız işaretin aynı hakikate baktığı büyük bir kitaptır.',
      visual_note: 'person at sunrise overlooking vast landscape, contemplative silhouette, peaceful',
      keywords: ['sunrise silhouette', 'vast landscape', 'contemplation person']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '20-mektup-2-makam-1-4-kelime',
    test_day: 'day-34',
    short_id: 'short-006',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
