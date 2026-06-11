// Derin Okuma — 20. Mektup - 2. Makam - 8-9. Kelime Shorts
// Short: short-002 | Geçicilik Neden Boş Değildir?

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Geçicilik Neden Boş Değildir?',
    description: 'Kışın yoksul görünen toprak, baharda cömert olur. Geçicilik bir kayıp mı?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '20-mektup-2-makam-8-9-kelime-short-002-day-36'
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
      narration: 'Kış mevsiminde yeryüzü soğuk ve sessizdir. Ağaçlar çıplak, toprak donmuştur. Bu manzara, her şeyin bittiğini düşündürebilir. Ama bitiş mi bu, yoksa başka bir şey mi?',
      visual_note: 'bare winter trees in snow, silent frozen landscape, dormant winter, cold and still',
      keywords: ['bare winter trees', 'frozen landscape', 'dormant winter', 'cold stillness']
    },
    {
      scene_id: 'scene-002',
      narration: 'Aynı toprak baharda değişir. Çiçekler açar, her yer yeşerir, canlılık her yere yayılır. Kışın yoksulluğunu gören gözler, baharın cömertliğini daha iyi okur. Zenginlik kaynağı hiç tükenmemişti; sadece mevsimi gelince açılmıştı.',
      visual_note: 'spring flowers blooming after winter, green meadow renewal, cherry blossoms, seasonal transformation',
      keywords: ['spring renewal', 'flowers after winter', 'green meadow', 'seasonal transformation']
    },
    {
      scene_id: 'scene-003',
      narration: 'Geçip giden her şey boş bir kayıp değildir. Sönüp giden her kabarcık güneşin varlığını ispat eder; kışın yoksulluğu baharın zenginliğini müjdeler. Geçicilik, kalıcı olanın habercisidir.',
      visual_note: 'transition from winter to spring, warmth returning to landscape, hope in seasonal change',
      keywords: ['winter to spring transition', 'warmth returning', 'hope in seasons']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '20-mektup-2-makam-8-9-kelime',
    test_day: 'day-36',
    short_id: 'short-002',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
