// Derin Okuma — 20. Mektup - 2. Makam - 10. Kelime Shorts
// Short: short-003 — Birlik Çokluğu Nasıl Kolaylaştırır?

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Birlik Çokluğu Nasıl Kolaylaştırır?',
    description: 'Tek bir komutana bağlı milyon asker, ayrı ayrı yönetilen birkaç askerin idaresinden çok daha kolay yönetilir.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'bir-bahari-yaratmak-neden-bir-cicek-kadar-kolaydir-short-003-day-37'
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
      narration: 'Tek bir hükümdara bağlı büyük bir ordu, tek bir emirle harekete geçer. O hükümdar aynı anda bütün orduyu yönetebilir; hem de her askeri teker teker koruyormuş gibi. Çünkü sistem bir bütündür ve bu bütünlük her şeyi kolaylaştırır.',
      visual_note: 'Aerial view of a unified crowd moving in perfect formation',
      keywords: ['unified crowd', 'aerial formation', 'organized movement', 'coordination']
    },
    {
      scene_id: 'scene-002',
      narration: 'Şimdi bunun tersini düşünelim: her askerin ayrı bir komuta, ayrı bir sisteme bağlı olduğunu. O zaman tek bir askerin ihtiyaçlarını karşılamak bile bütün ordununkinden ağır hâle gelir. Birliği kaybetmek, basit şeyleri bile imkânsız kılar.',
      visual_note: 'Scattered individuals in a wide open landscape, directionless and disconnected',
      keywords: ['scattered individuals', 'disconnected', 'directionless', 'isolation']
    },
    {
      scene_id: 'scene-003',
      narration: 'Birlik, çokluğu kolaylaştırır. Dağınıklık ise en küçük şeyi bile güçleştirir. Kâinatta görülen bolluk ve kolaylık, tüm varlıkların tek bir yaratıcıya ait olmasının eseridir.',
      visual_note: 'Flock of starlings in murmuration, moving as one fluid unified body in the sky',
      keywords: ['murmuration', 'starlings', 'unified flock', 'sky patterns']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: 'bir-bahari-yaratmak-neden-bir-cicek-kadar-kolaydir',
    test_day: 'day-37',
    short_id: 'short-003',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
