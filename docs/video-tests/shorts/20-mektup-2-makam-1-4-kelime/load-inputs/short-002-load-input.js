// Derin Okuma — 20. Mektup - 2. Makam - 1-2-3-4. kelime Shorts
// Short: short-002

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Çoklukta Düzen Nasıl Mümkün Olur?',
    description: 'Pek çok parçadan oluşan her şeyin kaosa dönmesi beklenir. Kâinat neden istisna?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '20-mektup-2-makam-1-4-kelime-short-002-day-34'
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
      narration: 'Pek çok malzemeden oluşan her yapıda karışıklık artar — bu genel bir kural gibi görünür. Ama kâinata baktığında, tam tersini görürsün. Ne kadar çok element bir araya gelirse, düzen o kadar hassas ve karmaşık görünüyor.',
      visual_note: 'complex clockwork with many gears all working in perfect harmony, macro shot',
      keywords: ['clockwork gears', 'precision', 'complex harmony']
    },
    {
      scene_id: 'scene-002',
      narration: 'Her şeyin bir ölçüsü var: Bir yaprak kaç damarla örülmüş, bir yıldız hangi yörüngede dönüyor, bir böcek hangi sezonda çıkıyor. Bu ölçü, kaba bir simetri değildir; dakik, hassas ve birbiriyle uyumlu bir dengedir.',
      visual_note: 'macro shot of snowflake showing perfect symmetry and mathematical precision',
      keywords: ['snowflake macro', 'perfect symmetry', 'mathematical nature']
    },
    {
      scene_id: 'scene-003',
      narration: 'Böyle dakik bir ölçünün, böyle tutarlı bir düzenin rastgele ortaya çıkmış olması akla yatkın değildir. Bu düzen, onu bilen, tasarlayan ve sürdüren bir varlığa işaret ediyor. Çoklukta düzen, aslında bir birliğin izini taşıyor.',
      visual_note: 'wide shot of a perfectly ordered garden seen from above, geometric patterns',
      keywords: ['geometric garden', 'aerial order', 'perfect pattern']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '20-mektup-2-makam-1-4-kelime',
    test_day: 'day-34',
    short_id: 'short-002',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
