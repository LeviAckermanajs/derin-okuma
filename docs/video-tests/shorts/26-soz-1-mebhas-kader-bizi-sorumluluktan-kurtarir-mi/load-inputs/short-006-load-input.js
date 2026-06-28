// Derin Okuma — 26.Söz - 1.Mebhas Shorts
// Short: short-006 — Sorumluluk ve Teslimiyet Nasıl Bir Arada Olur?
// Day-44 | Filled by Claude

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Sorumluluk ve Teslimiyet Nasıl Bir Arada Olur?',
    description: 'Ne tamamen çaresiz ne de her şeyin sahibi. İnsan bu ikisi arasında nasıl durur? Cüz-i ihtiyarî ve kader dengesi.\n\n#derinokuma #kader #risaleinur #iman #maneviyat',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '26-soz-1-mebhas-kader-bizi-sorumluluktan-kurtarir-mi-short-006-day-44'
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
      narration: 'İnsan ya tamamen sorumlu tutulur ya da her şeyi kadere bırakır. Ama bu iki uç da insana zarar verir. Acaba ikisi bir arada mümkün mü?',
      visual_note: 'Two hands meeting in balance, one open giving one open receiving, harmony gesture.',
      keywords: ['hands balance', 'giving receiving', 'duality', 'harmony']
    },
    {
      scene_id: 'scene-002',
      narration: 'Kader teslimiyet verir; cüz-i ihtiyarî sorumluluk. İkisi birbirini yok etmez. Kötülüklerde sorumluluk al. İyiliklerde şükret. Musibetlerde sabret. Bu üç tutum birlikte insanı ne çaresiz ne de kibirli yapar.',
      visual_note: 'Calm river flowing steadily through changing landscape, consistent yet adapting to terrain.',
      keywords: ['calm river', 'adaptation', 'consistency', 'flowing through change']
    },
    {
      scene_id: 'scene-003',
      narration: 'Gururdan uzak, bahaneden uzak, şükre ve tövbeye yakın durmak. Bu iki hakikat arasındaki denge zorla kurulmaz; doğru anlayıştan doğar. Ve insanı hem özgür hem de sorumlu kılar.',
      visual_note: 'Person standing balanced on a ridge at sunset, serene posture, freedom with purpose.',
      keywords: ['person on ridge', 'balance', 'sunset', 'freedom with purpose']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '26-soz-1-mebhas-kader-bizi-sorumluluktan-kurtarir-mi',
    test_day: 'day-44',
    short_id: 'short-006',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
