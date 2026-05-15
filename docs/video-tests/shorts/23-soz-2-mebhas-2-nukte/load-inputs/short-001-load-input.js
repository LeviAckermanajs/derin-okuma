// Derin Okuma — 23. Söz - 2. Mebhas - 2. Nükte Shorts
// Short: short-001 | İnsan Neden Hem Küçük Hem Büyüktür?
// day-20

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },


  job: {
    title: 'İnsan Neden Hem Küçük Hem Büyüktür?',
    description: 'Aynı insan, bir bakışta hiç; başka bir bakışta her şey. Bu nasıl mümkün?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-2-nukte-short-001-day-20'
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
      narration: 'Aynı insan, bir bakışta küçük ve sönük; başka bir bakışta sonsuz büyüklüklerin aynası. Bu iki okuma çelişmiyor. İkisi de aynı insana ait.',
      visual_note: 'Split reflection in water — one half dim and small, the other bright and vast, same person, different light.',
      keywords: ['duality', 'reflection', 'contrasting light', 'same person']
    },
    {
      scene_id: 'scene-002',
      narration: 'İnsanın bir yüzü kendini merkeze koyar: güç, statü, sahiplik, beğenilme. Bu yüzden bakıldığında insan gerçekten küçüktür. Sermayesi dar, ömrü kısa, bedeni geçici.',
      visual_note: 'Person surrounded by possessions and noise, yet visibly isolated and small against the vast world.',
      keywords: ['ego', 'smallness', 'materialism', 'isolated']
    },
    {
      scene_id: 'scene-003',
      narration: 'Ama insanın diğer yüzü var. Bu yüz, aczini ve muhtaçlığını bilerek Allah\'a yönelir. Ve tam bu yüzünden bakıldığında insan çok büyük bir kıymet kazanır. Büyüklük, benliğinden değil; kulluk yüzünden gelir.',
      visual_note: 'Person bowing quietly in a vast open landscape, humble yet connected to infinite sky above.',
      keywords: ['humility', 'servitude', 'connection', 'vast sky', 'true worth']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-2-nukte',
    test_day: 'day-20',
    short_id: 'short-001',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
