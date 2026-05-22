// Derin Okuma — İnsanın Sahiplik Yanılgısı ve Emanet Bilinci Shorts
// Short: short-005 — Hayat Neden Savaş Gibi Gelir?
// Day-29 — filled by Claude

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Hayat Neden Savaş Gibi Gelir?',
    description: 'İnsan neden hayatı sürekli bir savaş gibi yaşar?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'insanin-sahiplik-yanilgisi-ve-emanet-bilinci-short-005-day-29'
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
      narration: 'İnsan neden hayatı sürekli bir savaş gibi yaşar? Çünkü varlığını yalnızca sebeplere ve tesadüflere bağlarsa, her canlı sayısız tehdide karşı tek başına dikilir. Gücü az, ihtiyacı büyük. Bu bakışta hayat bir çatışma alanına dönüşür.',
      visual_note: 'Lone person walking against strong wind on open plain, isolated struggle, dramatic sky.',
      keywords: ['walking against wind', 'open plain', 'struggle', 'isolated']
    },
    {
      scene_id: 'scene-002',
      narration: 'Fakat kâinata dikkatlice bakıldığında sadece çatışma değil, yardımlaşma da görülür. Beden hücreleri birbirine hizmet eder. Canlılar birbirinin ihtiyacını karşılar. Bu düzen, kör bir tesadüfün eseri değil; arkasında hikmet taşıyan bir tablo.',
      visual_note: 'Bees and flowers in harmony, sunlight, cooperative nature, gentle and balanced ecosystem.',
      keywords: ['bees flowers', 'harmony', 'nature cooperation', 'sunlight']
    },
    {
      scene_id: 'scene-003',
      narration: 'Hayat bir savaş olduğu zaman insan hiç bitmeyecek bir tükeniş içindedir. Ama hayatı bir emanet taşıma yolculuğu olarak gördüğünde, aynı yol bambaşka bir anlam kazanır.',
      visual_note: 'Person walking lightly on sunlit path through forest, calm and purposeful, birds nearby.',
      keywords: ['sunlit forest path', 'light walking', 'birds', 'peaceful journey']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: 'insanin-sahiplik-yanilgisi-ve-emanet-bilinci',
    test_day: 'day-29',
    short_id: 'short-005',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
