// Derin Okuma — 20. Mektup - 2. Makam - 5-7. kelime Shorts
// Short: short-005

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Geliş ve Gidiş Neden Rastgele Değil?',
    description: 'Her canlı görünmezden görünüre çıkar, bir süre kalır, sonra yeniden görünmeze doğru yola çıkar.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '20-mektup-2-makam-5-7-kelime-short-005-day-35'
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
      narration: 'Her canlı, görünmez bir âlemden görünür âleme çıkar. Bir süre bu dünyada şekil alır, büyür, yaşar. Sonra yeniden görünmeze doğru yola çıkar.',
      visual_note: 'mist rising over a still lake at dawn, soft light emerging, peaceful atmosphere',
      keywords: ['dawn mist', 'still lake', 'peaceful morning']
    },
    {
      scene_id: 'scene-002',
      narration: 'Bu geliş ve gidiş başıboş bir akış değildir. Tıpkı bir nehrin bir yatağı, bir yönü ve sonunda bir denizi olması gibi; varlığın da bir rotası ve bir varış noktası vardır.',
      visual_note: 'river flowing from mountains to the sea, aerial shot, meandering natural path',
      keywords: ['river journey', 'aerial view', 'mountains to sea']
    },
    {
      scene_id: 'scene-003',
      narration: 'Hikmet, rahmet, düzen ve maksat içinde gerçekleşen bu yolculuk, hiçbir varlığı unutmaz. Bu yolculuğu yönetenin, başlangıcını ve sonunu bilen tek bir kudret olduğunu gösterir.',
      visual_note: 'stars moving across night sky in time-lapse, sense of cosmic journey, peaceful',
      keywords: ['star trails', 'night sky', 'cosmic movement']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '20-mektup-2-makam-5-7-kelime',
    test_day: 'day-35',
    short_id: 'short-005',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
