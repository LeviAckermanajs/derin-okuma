// Derin Okuma — 30.Söz - 1.Maksad Shorts
// Short: short-003
// Content filled for day-51 production.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: "Güç Neden Hakkın Ölçüsü Değil?",
    description: "Güç, doğruluğu üretmez; ancak adalete ve hakka hizmet ettiğinde gerçek değerini bulur. #derinokuma #shorts #tefekkür #adalet #hak #ahlak",
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur-short-003-day-51'
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
    "scene_id": "scene-001",
    "title": "Gücün Yanılsaması",
    "narration": "Güçlü olan her zaman haklı mıdır? Benlik kendisini merkeze koyduğunda üstün gelmeyi doğruluğun kanıtı sayabilir; böylece imkân ile hak birbirine karışır.",
    "visual_note": "Strong clenched hand beside balanced justice scales.",
    "keywords": [
      "clenched hand",
      "justice scales",
      "power"
    ]
  },
  {
    "scene_id": "scene-002",
    "title": "Değişmeyen Ölçü",
    "narration": "Oysa hak, gücünü kuvvetten değil doğruluğundan alır. Adaletin görevi güçlüye göre şekil almak değil, gücü sınırlandırıp herkesi aynı ölçüde korumaktır.",
    "visual_note": "Justice scales steady in wind, restrained dramatic lighting.",
    "keywords": [
      "steady scales",
      "justice",
      "moral balance"
    ]
  },
  {
    "scene_id": "scene-003",
    "title": "Gücün Değeri",
    "narration": "Kuvvet ancak hakka hizmet ettiğinde kıymet kazanır. İnsan için gerçek büyüklük, başkasına hükmetmekte değil; elindeki gücü adalet ve merhametle taşımaktadır.",
    "visual_note": "Helping hand lifting another person in warm sunset light.",
    "keywords": [
      "helping hand",
      "compassion",
      "sunset light"
    ]
  }
],

  metadata: {
    source: 'derin-okuma',
    blog_post: '30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur',
    test_day: 'day-51',
    short_id: 'short-003',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
