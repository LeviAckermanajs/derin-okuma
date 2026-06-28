// Derin Okuma — 26.Söz - 1.Mebhas Shorts
// Short: short-001 — Kader Günahın Bahanesi Olabilir mi?
// Day-44 | Filled by Claude

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Kader Günahın Bahanesi Olabilir mi?',
    description: 'Kötülük işleyince "Kaderimde varmış" demek doğru mu? Cüz-i ihtiyarî bize ne söylüyor? Sorumluluktan kaçmak mümkün mü?\n\n#derinokuma #kader #risaleinur #iman #sorumluluk',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '26-soz-1-mebhas-kader-bizi-sorumluluktan-kurtarir-mi-short-001-day-44'
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
      narration: 'Kötülük işlediğinde "Kaderimde varmış, elimde ne var" demek ne kadar doğru? Bu soruyu sormak bile önemli; çünkü cevabı insanın sorumluluğunu bütünüyle etkiliyor.',
      visual_note: 'Person looking away with avoiding posture, shadow across face, symbolic responsibility.',
      keywords: ['avoiding responsibility', 'shadow', 'moral weight', 'consequence']
    },
    {
      scene_id: 'scene-002',
      narration: 'Kötülüğü seçen insandır. İrade küçük görünse de tercihin sahibi odur. "Kaderimde varmış" demek, o seçimi ortadan kaldırmaz; aksine insanı sorumluluğunun farkında olmaktan mahrum bırakır.',
      visual_note: 'A locked door with key still in the lock, decision frozen, responsibility left behind.',
      keywords: ['locked door', 'key', 'choice', 'frozen decision']
    },
    {
      scene_id: 'scene-003',
      narration: 'Kader, günahın bahanesi değildir. Kötülüklerde kadere sığınmak kaderin hikmetine aykırıdır. "Ben istedim, ben sorumluyum" diyebilenler için tövbenin kapısı açılır. Ve o kapıdan geçmek, insanın elindedir.',
      visual_note: 'Open door with warm light beyond it, welcoming return, hope of redemption.',
      keywords: ['open door', 'warm light', 'return', 'redemption']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '26-soz-1-mebhas-kader-bizi-sorumluluktan-kurtarir-mi',
    test_day: 'day-44',
    short_id: 'short-001',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
