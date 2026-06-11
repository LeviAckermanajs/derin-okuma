// Derin Okuma — 20. Mektup - 2. Makam - 8-9. Kelime Shorts
// Short: short-004 | Güçsüzlük Neden Yük Değildir?

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Güçsüzlük Neden Yük Değildir?',
    description: 'İnsan kendi acizliğini fark edince, bu onu ezer mi yoksa bir kapı açar mı?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '20-mektup-2-makam-8-9-kelime-short-004-day-36'
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
      narration: 'Varlıklar yalnızca sahip olduklarıyla değil, sahip olmadıklarıyla da bir şeylere işaret eder. Acizlik kudrete ayna tutar. Yoksulluk zenginliğe bakar. Geçicilik kalıcıyı gösterir. Her eksiklik, bir tamlığın haberini taşır.',
      visual_note: 'small delicate flower beside strong rock, fragile beauty in vast nature, contrast of delicate and strong',
      keywords: ['fragile flower', 'strong rock contrast', 'delicate in nature', 'small and vast']
    },
    {
      scene_id: 'scene-002',
      narration: 'İnsan kendi sınırlılıklarını fark ettikçe, onun ötesinde olana yönelir. Rızka muhtaç olduğunu gördükçe, rızık vereni arar. Fani olduğunu düşündükçe, kalıcı olana döner. Güçsüzlük bir kapıyı açar.',
      visual_note: 'person in open landscape looking upward, human silhouette against vast sky, contemplative turning',
      keywords: ['person looking upward', 'human against sky', 'contemplative silhouette', 'inner seeking']
    },
    {
      scene_id: 'scene-003',
      narration: "İnsanın içinden bazen şöyle bir ses yükselir: Ben ölüyorum; ama bu ölümümde sonsuz hayat verenin cilvesini görüyorum. Sen bitmeyensin; ben geçiyorum, sen kalıyorsun. Güçsüzlük, bu farkındalığı doğurur.",
      visual_note: 'person in quiet prayer at dawn, serene meditation, soft light on face, peaceful inner acknowledgment',
      keywords: ['quiet prayer dawn', 'serene meditation', 'soft morning light', 'inner peace']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '20-mektup-2-makam-8-9-kelime',
    test_day: 'day-36',
    short_id: 'short-004',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
