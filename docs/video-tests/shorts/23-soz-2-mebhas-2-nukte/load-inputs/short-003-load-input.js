// Derin Okuma — 23. Söz - 2. Mebhas - 2. Nükte Shorts
// Short: short-003 | Çekirdek Nasıl Ağaç Olur?
// day-20

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },


  job: {
    title: 'Çekirdek Nasıl Ağaç Olur?',
    description: 'Büyük ağaçlar küçük tohumlardan çıkar. İnsan da böyle. Ama tohum çatlamamışsa?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-2-nukte-short-003-day-20'
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
      narration: 'İnsan bir çekirdeğe benzer. Dışarıdan küçüktür; ama içinde bir ağacın planı gizlidir. Kalp, ruh, akıl, hayal, vicdan, sevme, sonsuzluk isteme... İnsan tamamlanmış bir varlık değil; açılmak üzere verilmiş bir çekirdek varlıktır.',
      visual_note: 'Extreme close-up of a single seed, micro detail, then zooming out to a towering ancient tree in full bloom.',
      keywords: ['seed to tree', 'hidden potential', 'growth', 'time-lapse']
    },
    {
      scene_id: 'scene-002',
      narration: 'Çekirdeğin ağaç olması için önce karanlıkta kalması, toprağın altına girmesi ve çatlaması gerekir. Kemal, anlık parıltıyla değil; sabır, kırılma ve yönelişle ortaya çıkar.',
      visual_note: 'Underground slow-motion of a seed cracking in dark soil, first pale root emerging toward distant light.',
      keywords: ['seed cracking', 'dark soil', 'underground growth', 'patience', 'breaking open']
    },
    {
      scene_id: 'scene-003',
      narration: 'Eğer o çekirdek, manevî cihazlarını zararlı maddeler çekmek için harcarsa feshedip çürür. Ama imanın ışığıyla, ubudiyet toprağıyla terbiye edilirse; berzahta dal budak verir, ahirette hadsiz kemale kavuşur.',
      visual_note: 'Two paths: one seed rotting in darkness, another seedling breaking upward into sunlight, vivid contrast.',
      keywords: ['two paths', 'rotting vs growing', 'contrast', 'light and dark', 'choice']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-2-nukte',
    test_day: 'day-20',
    short_id: 'short-003',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
