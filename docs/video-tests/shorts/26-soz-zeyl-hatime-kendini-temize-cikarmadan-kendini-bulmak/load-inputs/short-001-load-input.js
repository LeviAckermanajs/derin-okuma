// Derin Okuma — 26.Söz - Zeyl - Hatime Shorts — short-001
// Content filled for n8n Load Input.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: "Kendini Aklamak Neden İnsanı Yanıltır?",
    description: "Kusuru kabul etmek insanı değersizleştirmez; savunmanın örttüğü değişim imkânını açar. Kendini tanımanın ilk adımı, iç muhasebede dürüst kalmaktır.\n\n#derinokuma #shorts #tefekkür #nefis #muhasebe #tevazu",
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak-short-001-day-50'
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
    "title": "Savunmanın Perdesi",
    "narration": "İnsan kendini savundukça neden kendinden uzaklaşır? Çünkü nefis, hatayı görmekten önce mazeret üretir; eleştiriyi anlamaya çalışmadan cevap hazırlar. Böylece kusur örtülür, fakat ortadan kalkmaz.",
    "visual_note": "A thoughtful person facing a mirror in a quiet room, vertical cinematic frame, soft light.",
    "keywords": [
      "mirror reflection",
      "thoughtful person",
      "self defense",
      "soft light"
    ]
  },
  {
    "scene_id": "scene-002",
    "title": "Dürüst Muhasebe",
    "narration": "Kendini temize çıkarmamak, kendinden nefret etmek değildir. Kusurla kimliği ayırıp iç muhasebede dürüst kalmaktır. Hata insanı bütünüyle tanımlamaz; ama inkâr edilen hata değişime izin vermez.",
    "visual_note": "A person writing honestly in a journal beside a window, vertical shot, evening light.",
    "keywords": [
      "journal writing",
      "self examination",
      "window",
      "honesty"
    ]
  },
  {
    "scene_id": "scene-003",
    "title": "Değişimin Başlangıcı",
    "narration": "Savunma sustuğunda vicdan konuşmaya başlar. Kabul edilen kusur tövbeye, telafiye ve gerçek değişime açılan bir kapı olur. İnsan kendini aklayarak değil, hakikat karşısında dürüstleşerek kendini bulur.",
    "visual_note": "A closed door opening toward calm morning light, vertical cinematic reveal.",
    "keywords": [
      "opening door",
      "morning light",
      "change",
      "inner truth"
    ]
  }
],

  metadata: {
  "source": "derin-okuma",
  "blog_post": "26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak",
  "test_day": "day-50",
  "short_id": "short-001",
  "workflow": "manual_scene_json_single_track_shorts_load_input",
  "content_generation_status": "filled"
}
};

return [{ json: { raw_input: rawInput } }];
