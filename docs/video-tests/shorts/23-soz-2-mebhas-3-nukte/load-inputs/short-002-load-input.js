// Derin Okuma — 23. Söz - 2. Mebhas - 3. Nükte Shorts
// Short: short-002
// Filled: day-21

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },


  job: {
    title: 'Bin Altını Bir Kat Elbiseye Vermek Ne Demektir?',
    description: 'Akıl, kalp, vicdan, sonsuzluk hissi… Bunlar yalnızca dünya rahatı için mi verildi? Risale-i Nur bu soruya çarpıcı bir temsille cevap veriyor.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-3-nukte-short-002-day-21'
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
      title: 'Hook',
      narration: 'Birine on altın verilir; bir kat elbise alır — makul. Başka birine bin altın verilir, içinde pusula var: büyük bir iş için kullan. Ama o pusulayı okumadan, bin altını da bir kat elbiseye verir. Büyük sermaye küçük bir iş için verilmemiştir.',
      visual_note: 'Gold coins poured out next to a single plain garment — visual absurdity of the mismatch.',
      keywords: ['gold coins', 'simple garment', 'mismatch', 'wasted potential']
    },
    {
      scene_id: 'scene-002',
      title: 'İnsanın Büyük Sermayesi',
      narration: 'İnsana verilen sermaye nedir? Akıl, kalp, vicdan, hayal, hafıza, merak, muhabbet, sonsuzluk hissi, güzellik sevgisi… Bu kadar zengin bir donanım, yalnızca yemek, barınmak ve keyif almak için verilmiş olamaz.',
      visual_note: 'Layers of light emerging from a human silhouette — multiple capacities, glowing, vast.',
      keywords: ['inner wealth', 'multiple capacities', 'glowing potential', 'human endowment']
    },
    {
      scene_id: 'scene-003',
      title: 'Pusula Verilmiş',
      narration: 'Bu sermayenin yanında bir de pusula var: vahiy, vicdan, akıl, peygamber öğretisi. Sorun, pusulayı okumadan yaşamaya kalkmak. Çünkü amacını unutan büyük sermaye, küçük işlere harcanır.',
      visual_note: 'An old compass on a map, needle steady — guidance available, waiting to be read.',
      keywords: ['compass', 'guidance', 'direction', 'unread instructions']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-3-nukte',
    test_day: 'day-21',
    short_id: 'short-002',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
