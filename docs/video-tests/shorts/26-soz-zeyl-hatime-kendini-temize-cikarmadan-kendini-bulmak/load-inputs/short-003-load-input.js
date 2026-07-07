// Derin Okuma — 26.Söz - Zeyl - Hatime Shorts — short-003
// Content filled for n8n Load Input.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: "Nefis Sorumluluktan Neden Kaçar?",
    description: "Nefis haz ve övgüde öne çıkarken zahmet ve sorumlulukta geri çekilmek ister. Terbiye, nimette şükrü; hizmette ise görevimizi hatırlamaktır.\n\n#derinokuma #shorts #tefekkür #nefis #sorumluluk #hizmet",
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak-short-003-day-50'
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
    "title": "Seçici Hafıza",
    "narration": "İnsan ne zaman kendini hatırlar, ne zaman unutur? Haz, övgü ve kazanç geldiğinde benlik hızla öne çıkar. Zahmet, hizmet ve sorumluluk geldiğinde ise görünmez olmak ister.",
    "visual_note": "Applause fading into an unfinished shared task, vertical cinematic contrast.",
    "keywords": [
      "applause",
      "unfinished task",
      "contrast",
      "self interest"
    ]
  },
  {
    "scene_id": "scene-002",
    "title": "Nimette Geri Durmak",
    "narration": "Terbiye, bu alışkanlığı tersine çevirmektir. Nimeti yaşarken kendini tek merkez saymamak; başkalarının payını ve nimetin kaynağını hatırlamaktır. Böylece haz, bencilliğe değil şükre dönüşür.",
    "visual_note": "People sharing a simple meal with gratitude, vertical warm documentary shot.",
    "keywords": [
      "shared meal",
      "gratitude",
      "warm table",
      "community"
    ]
  },
  {
    "scene_id": "scene-003",
    "title": "Hizmette Hazır Olmak",
    "narration": "Sorumluluk anında ise kendini unutmamak gerekir. Yükü paylaşmak, görevi sahiplenmek ve karşılık beklemeden elinden geleni yapmak olgunluğun ölçüsüdür. Nefis rahatlıkta geri, hizmette hazır durmayı böyle öğrenir.",
    "visual_note": "Volunteers carrying supplies together at sunrise, vertical natural footage.",
    "keywords": [
      "volunteers",
      "shared burden",
      "sunrise",
      "service"
    ]
  }
],

  metadata: {
  "source": "derin-okuma",
  "blog_post": "26-soz-zeyl-hatime-kendini-temize-cikarmadan-kendini-bulmak",
  "test_day": "day-50",
  "short_id": "short-003",
  "workflow": "manual_scene_json_single_track_shorts_load_input",
  "content_generation_status": "filled"
}
};

return [{ json: { raw_input: rawInput } }];
