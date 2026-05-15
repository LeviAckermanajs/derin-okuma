// Derin Okuma — 23. Söz - 2. Mebhas - 1. Nükte Shorts
// Short: short-003 | Küçük Arzular Büyük Hakikatin Tohumu
// day-19

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },


  job: {
    title: 'Küçük Arzular Büyük Hakikatin Tohumu',
    description: 'Bir çiçeği sevmek ile Cenneti istemek arasında nasıl bir bağ var?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-1-nukte-short-003-day-19'
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
      narration: 'Bir çiçeği sevdiğimizde aslında ne istiyoruz? Güzelliği istiyoruz. Bir baharı istediğimizde ne istiyoruz? Çokluk içinde güzelliği istiyoruz.',
      visual_note: 'Close-up of a single flower blooming slowly, petals unfolding, soft natural light.',
      keywords: ['blooming flower', 'beauty', 'soft light', 'nature close-up']
    },
    {
      scene_id: 'scene-002',
      narration: 'Cenneti istediğimizdeyse ne istiyoruz? Kusursuz ve kesintisiz güzelliği istiyoruz. Küçük meyil ile büyük istek aynı kökten çıkar. Dünyevî meyillerin kökü, doğru okunursa ilahî istikamete açılır.',
      visual_note: 'Time-lapse from single flower to spring garden to vast glowing paradise landscape.',
      keywords: ['spring garden', 'paradise', 'time-lapse', 'blooming world']
    },
    {
      scene_id: 'scene-003',
      narration: 'Bir dostu özlemek sevginin işaretidir. Ama sevginin en yüksek istikameti, güzelliğin ta kendisine yönelmektir. Küçük arzular, büyük hakikatlerin tohumudur.',
      visual_note: 'Two silhouettes meeting at golden hour, sky opening wide and glowing above them.',
      keywords: ['reunion silhouettes', 'golden hour', 'longing', 'transcendence']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-1-nukte',
    test_day: 'day-19',
    short_id: 'short-003',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
