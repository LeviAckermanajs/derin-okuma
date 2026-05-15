// Derin Okuma — 23. Söz - 2. Mebhas - 3. Nükte Shorts
// Short: short-005
// Filled: day-21

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },


  job: {
    title: 'Dua Neden İnsanın Asıl Silahıdır?',
    description: 'İnsan bedenen zayıf ama talep bakımından sonsuzdur. Tam da buradan duanın gerçek anlamı doğuyor.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-3-nukte-short-005-day-21'
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
      narration: 'İnsanın eli kısa ama isteği büyük. Gücü yetmiyor ama talebi sonsuz. Böyle bir varlığın silahı ne olabilir?',
      visual_note: 'Small human hands reaching upward toward a vast sky — the gap between capacity and desire.',
      keywords: ['small hands', 'vast sky', 'reaching', 'desire beyond capacity']
    },
    {
      scene_id: 'scene-002',
      title: 'İnfial, Kabul, Dua, Sual',
      narration: 'İnsan dört şeyde büyüktür: etkilenmekte, almakta, duada ve sormakta. Bunlar insanın asıl kapasitesini oluşturuyor. Fiilden değil; yönelişten büyük olan bir varlık.',
      visual_note: 'Four moments: a person moved by beauty, receiving a gift, kneeling in prayer, and gazing in wonder — each a different dimension of depth.',
      keywords: ['four capacities', 'emotional depth', 'prayer', 'wonder']
    },
    {
      scene_id: 'scene-003',
      title: 'Muhtaçlık Kapı Açar',
      narration: 'İnsan, kuvvetiyle değil; muhtaçlığıyla büyük bir varlıktır. Muhtaçlık onu duaya açar. Dua ise sonsuz güce yöneltir. Ve bu yöneliş, en dar anda bile genişlik kapısıdır.',
      visual_note: 'Open hands in prayer at dawn — light beginning to appear, the gesture of receiving, of reaching beyond self.',
      keywords: ['dawn prayer', 'open hands', 'receiving light', 'humility as strength']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-3-nukte',
    test_day: 'day-21',
    short_id: 'short-005',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
