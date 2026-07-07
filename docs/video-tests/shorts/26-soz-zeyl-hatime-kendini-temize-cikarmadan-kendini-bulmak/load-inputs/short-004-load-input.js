// Derin Okuma — 26.Söz - Zeyl - Hatime Shorts — short-004
// Content filled for n8n Load Input.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: "Başarı Nasıl Şükre Dönüşür?",
    description: "Emek değerlidir; fakat akıl, beden, fırsat ve sonuç bütünüyle bize ait değildir. Başarıyı nimet olarak görmek, çabayı küçültmeden kalbi kibirden korur.\n\n#derinokuma #shorts #tefekkür #şükür #başarı #tevazu",
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak-short-004-day-50'
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
    "title": "Sahiplenme Eğilimi",
    "narration": "Başarı neden kalbi kolayca yanıltır? Çünkü nefis güzel sonucu bütünüyle kendinden bilmek, kusuru ise şartlara ve başkalarına vermek ister. Bu tek taraflı hesap, gerçeği görünmez kılar.",
    "visual_note": "A successful person alone under a spotlight while a team remains in shadow, vertical frame.",
    "keywords": [
      "spotlight",
      "team shadow",
      "success",
      "ego"
    ]
  },
  {
    "scene_id": "scene-002",
    "title": "Verilen İmkânlar",
    "narration": "Başarıda irade ve emek vardır; fakat beden, akıl, zaman, fırsat ve sonuç bizim üretimimiz değildir. İnsan çabasını inkâr etmeden, çabasını mümkün kılan bütün imkânların verildiğini görebilir.",
    "visual_note": "A musician practicing while mentors and supporting hands appear in a vertical montage.",
    "keywords": [
      "musician practice",
      "support",
      "effort",
      "opportunity"
    ]
  },
  {
    "scene_id": "scene-003",
    "title": "Doğru Yere Bağlamak",
    "narration": "Şükür başarıyı küçültmez; onu doğru yere bağlar. Övgü kibri beslemek yerine nimeti hatırlatır, nimet de sorumluluğu artırır. İnsan güzelliği sahiplenmekten vazgeçtiğinde hem çalışır hem haddini korur.",
    "visual_note": "A person acknowledging a team with a grateful gesture, vertical cinematic shot, soft light.",
    "keywords": [
      "team recognition",
      "gratitude",
      "humility",
      "soft light"
    ]
  }
],

  metadata: {
  "source": "derin-okuma",
  "blog_post": "26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak",
  "test_day": "day-50",
  "short_id": "short-004",
  "workflow": "manual_scene_json_single_track_shorts_load_input",
  "content_generation_status": "filled"
}
};

return [{ json: { raw_input: rawInput } }];
