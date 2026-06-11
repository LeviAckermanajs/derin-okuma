// Derin Okuma — 20. Mektup - 2. Makam - 10. Kelime Shorts
// Short: short-006 — Haşir Neden Mümkündür?

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Haşir Neden Mümkündür?',
    description: 'Her bahar, bütün insanlığın yeniden diriltilmesinin mümkün olduğunu gösteren bir delildir.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'bir-bahari-yaratmak-neden-bir-cicek-kadar-kolaydir-short-006-day-37'
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
      narration: 'Her bahar, kışın ardından yeryüzü yeniden canlanır. Sayısız bitki ve canlı, birbirine karıştırılmadan yeniden ortaya çıkar. Bu tablonun içinde büyük bir mesaj var: büyük işler bu kudret için ağır değildir.',
      visual_note: 'Spring sunrise over a barren field transforming into blossoming green landscape',
      keywords: ['spring sunrise', 'winter to spring', 'green renewal', 'seasonal transformation']
    },
    {
      scene_id: 'scene-002',
      narration: 'Bütün insanlığın yeniden diriltilmesi, tek bir insanın hayata döndürülmesi kadar kolaydır. Sınırsız bir kudret için sayı engel değildir. Her baharda yeryüzünü yeniden canlandıran kudret, insanlığı da yeniden bir araya getirebilir.',
      visual_note: 'Seeds germinating and pushing through soil simultaneously, dozens in a row',
      keywords: ['seeds germinating', 'new life', 'emergence', 'multiple seedlings']
    },
    {
      scene_id: 'scene-003',
      narration: 'Dağılmış büyük bir ordunun, tek bir boru sesiyle toplanmasını düşünün. Her asker o sesi duyar ve yerine gelir. İnsanlığın yeniden bir araya getirilmesi de bu şekilde gerçekleşir. Sayı, bu kudreti zorlamaz.',
      visual_note: 'Thousands of silhouettes converging toward a single point of light on the horizon',
      keywords: ['silhouettes gathering', 'convergence', 'single light', 'horizon assembly']
    },
    {
      scene_id: 'scene-004',
      narration: 'Kolaylık, başıboşluğun işareti değildir. Tam tersine, büyük hızla ve eksiksiz düzenle gerçekleşen her şey, sınırsız bir gücün ve kuşatıcı bir ilmin varlığını gösterir. Her bahara baktığımızda bunu hatırlayabiliriz.',
      visual_note: 'A full spring meadow in golden morning light, vast and perfect in its abundance',
      keywords: ['spring meadow', 'golden light', 'vast bloom', 'morning panorama']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: 'bir-bahari-yaratmak-neden-bir-cicek-kadar-kolaydir',
    test_day: 'day-37',
    short_id: 'short-006',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
