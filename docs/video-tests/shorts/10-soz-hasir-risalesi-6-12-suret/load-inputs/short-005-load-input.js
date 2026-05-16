// Derin Okuma - 10. Söz - Haşir Risalesi - 6-12. Suret Shorts
// Short: short-005
// Filled for n8n Load Input Code node.

const rawInput = {
  input_version: "0.1.0",
  input_type: "manual_scene_json",
  runtime: {
    repo_root: "/home/muhammet/projects/scene-blog-video",
    renderer_url: "http://127.0.0.1:8000"
  },
  job: {
    title: "İnsan Neden Ebediyet İster?",
    description: "İnsanın arzuları bu dünyaya sığmıyorsa, bu arzular yanlış verilmiş olamaz.",
    language: "tr",
    author: "Muhammet Yahya Ozer",
    job_id_hint: "10-soz-hasir-risalesi-6-12-suret-short-005-day-25"
  },
  reuse_existing_audio: {
    enabled: false,
    audio_mode: "single_track",
    audio_track: {
      mode: "single",
      path: "",
      duration_seconds: null
    }
  },
  reuse_existing_video: {
    enabled: false,
    visual_mode: "semantic",
    video_root: "",
    path_template: "{scene_id}.mp4"
  },
  visual_mode: "ambient",
  audio_strategy: {
    mode: "single_track",
    timing_strategy: "elevenlabs_timestamps",
    join_separator: "\n\n"
  },
  render_preferences: {
    mode: "shorts",
    subtitles_enabled: true,
    render_mode: "shorts",
    produce_both: false,
    background_music_enabled: true,
    target_fps: 30
  },
  scenes: [
    {
      scene_id: "scene-001",
      title: "Sığmayan Arzu",
      narration: "İnsanın arzuları bu dünyaya sığmıyorsa, bu arzular yanlış verilmiş olamaz. Kalıcı sevgi, tam güven ve ölmemek isteği basit bir tesadüf değildir.",
      visual_note: "person gazing at ocean horizon at dusk, calm longing",
      keywords: ["ocean horizon", "longing", "dusk"]
    },
    {
      scene_id: "scene-002",
      title: "Cihazlar",
      narration: "Akıl, hafıza, vicdan, hayal, umut ve ebediyet arzusu birkaç günlük geçim için fazla geniştir. İnsan daha uzun bir yol için hazırlanmış gibidir.",
      visual_note: "thoughtful person with books and stars reflected in window",
      keywords: ["thoughtful person", "books", "stars"]
    },
    {
      scene_id: "scene-003",
      title: "Namzet",
      narration: "Bu yüzden insan yalnız dünyaya ait değildir. Burada yaşar, çalışır, öğrenir; fakat fıtratı başka bir âleme de namzet olduğunu söyler.",
      visual_note: "traveler with compass looking toward bright mountain path",
      keywords: ["traveler", "compass", "path"]
    }
  ],
  metadata: {
    source: "derin-okuma",
    blog_post: "10-soz-hasir-risalesi-6-12-suret",
    test_day: "day-25",
    short_id: "short-005",
    workflow: "manual_scene_json_single_track_shorts_load_input",
    content_generation_status: "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
