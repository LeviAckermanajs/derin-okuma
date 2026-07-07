// Derin Okuma — 26.Söz - Zeyl - Hatime Shorts — short-002
// Content filled for n8n Load Input.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: "Acz İnsanı Nasıl Güce Bağlar?",
    description: "Acz, zayıflığı sergilemek değil, gücün sınırını dürüstçe bilmektir. İnsan her şeyi taşıma iddiasını bıraktığında çabasını daha sağlam bir dayanağa bağlar.\n\n#derinokuma #shorts #tefekkür #iman #acz #tevekkül",
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak-short-002-day-50'
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
    "title": "Gücün Sınırı",
    "narration": "Zayıflığını kabul etmek insanı gerçekten güçsüz mü yapar? Geleceği bütünüyle kontrol edemiyor, sevdiklerimizi her tehlikeden koruyamıyor ve kendi bedenimize bile tam hükmedemiyoruz. Acz, bu sınırı dürüstçe görmektir.",
    "visual_note": "A small person beneath vast mountains and moving clouds, vertical cinematic composition.",
    "keywords": [
      "vast mountains",
      "small person",
      "moving clouds",
      "human limits"
    ]
  },
  {
    "scene_id": "scene-002",
    "title": "Gösteri Değil Hakikat",
    "narration": "Bu kabul, zayıflığı insanlara göstererek değer aramak anlamına gelmez. İnsan çalışır, sorumluluğunu yerine getirir ve vakarını korur. Fakat sonucu yaratanın kendisi olduğu iddiasına girmez.",
    "visual_note": "A calm worker completing a difficult task with care, vertical frame, natural light.",
    "keywords": [
      "careful work",
      "responsibility",
      "calm worker",
      "natural light"
    ]
  },
  {
    "scene_id": "scene-003",
    "title": "Sağlam Dayanak",
    "narration": "Her şeyi kendi omzunda taşıma iddiası insanı yalnızlaştırır. Acz doğru okunduğunda ise çaba bırakılmaz; sınırlı güç sonsuz kudrete dayanır. Zayıflık böylece umutsuzluk değil, tevekküle açılan bir kapı olur.",
    "visual_note": "A person setting down a heavy backpack as sunlight opens over a valley, vertical shot.",
    "keywords": [
      "heavy backpack",
      "sunlit valley",
      "relief",
      "trust"
    ]
  }
],

  metadata: {
  "source": "derin-okuma",
  "blog_post": "26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak",
  "test_day": "day-50",
  "short_id": "short-002",
  "workflow": "manual_scene_json_single_track_shorts_load_input",
  "content_generation_status": "filled"
}
};

return [{ json: { raw_input: rawInput } }];
