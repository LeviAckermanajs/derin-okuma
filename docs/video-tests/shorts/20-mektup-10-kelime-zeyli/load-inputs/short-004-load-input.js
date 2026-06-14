// Derin Okuma — Bir Zerre Kendi Başına Ne Yapabilir? Shorts
// Short: short-004
// Content filled: day-38

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Tek Çiçeği Açıklamak Neden Bu Kadar Zordur?',
    description: 'İnkâr yolunda tek bir çiçeği açıklamak için tüm evrenin yükünü taşımak gerekir.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '20-mektup-10-kelime-zeyli-short-004-day-38'
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
      narration: 'Tek bir çiçeğin açmasını düşün. Eğer onu sayısız bağımsız sebebe, tesadüfe, kör güçlere vermeye çalışırsan, o küçücük çiçeğin ardına tüm bir baharın yükünü yüklemek zorunda kalırsın.',
      visual_note: 'single wildflower blooming in field, delicate light, close-up',
      keywords: ['wildflower', 'blooming', 'delicate', 'close-up']
    },
    {
      scene_id: 'scene-002',
      narration: 'Bir meyveyi açıklamak mı? Tüm bir bahçenin karmaşıklığını üstlenmek gerekir. Küçük bir sineği açıklamak mı? Göklerin ve yerin düzeni bu açıklamaya dahil edilmek zorunda kalır. Küçük görünen şey, aslında sonsuz bir güçlüğü içinde taşır.',
      visual_note: 'fruit on branch, bee in flight, nature complexity in close detail',
      keywords: ['fruit', 'bee', 'branch', 'nature complexity']
    },
    {
      scene_id: 'scene-003',
      narration: 'Ama tek bir Yaratıcı\'ya bağlandığında tablo değişir. Bütün çiçekleri, bütün meyveleri, bütün yaratılışı açıklamak tek bir kudretle kolaylaşır. Teklik çokluğu yönetir; çokluk ise tekleri parçalar.',
      visual_note: 'spring garden in full bloom, abundant life, harmony',
      keywords: ['spring garden', 'bloom', 'abundant', 'harmony']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '20-mektup-10-kelime-zeyli',
    test_day: 'day-38',
    short_id: 'short-004',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
