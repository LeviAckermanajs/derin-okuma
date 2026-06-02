// Derin Okuma — 20. Mektup - 2. Makam - 1-2-3-4. kelime Shorts
// Short: short-003

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Bir Canlı Neye İşaret Eder?',
    description: 'Küçücük bir canlı, aslında çok daha büyük bir şeyin işareti olabilir mi?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '20-mektup-2-makam-1-4-kelime-short-003-day-34'
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
      narration: 'Her canlıyı bir kitap gibi okumak mümkündür. Başlangıcı programı taşır; bir çekirdeğin içinde hangi ağaç olacağı zaten yazılı gibidir. Sonu ise anlamı toplar; meyvenin içindeki tohumda gelecek gizlidir.',
      visual_note: 'open botanical book beside growing plant, knowledge meets nature, warm light',
      keywords: ['botanical book', 'growing plant', 'knowledge nature']
    },
    {
      scene_id: 'scene-002',
      narration: 'Bir canlının dış görünüşü sanatlı bir elbise gibidir; salt işlevsel değildir, bir güzellik de taşır. İç yapısı ise sessiz sedasız çalışan, yerli yerinde işleyen bir düzen gibidir. Bu ikisi bir arada, hem bir sanatçının hem de bir mimarın izini gösteriyor.',
      visual_note: 'cross-section of a flower showing both outer beauty and inner structure, macro',
      keywords: ['flower structure', 'inner beauty', 'botanical detail']
    },
    {
      scene_id: 'scene-003',
      narration: 'Bir canlı, yalnızca kendisi için var değildir. Onu var eden, biçimlendiren ve sürdüren bir varlığa işaret eder. Bu bakışla her canlı, daha büyük bir anlamın işareti haline geliyor.',
      visual_note: 'butterfly landing on a flower, peaceful and purposeful movement, slow motion',
      keywords: ['butterfly flower', 'purposeful movement', 'small creature']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '20-mektup-2-makam-1-4-kelime',
    test_day: 'day-34',
    short_id: 'short-003',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
