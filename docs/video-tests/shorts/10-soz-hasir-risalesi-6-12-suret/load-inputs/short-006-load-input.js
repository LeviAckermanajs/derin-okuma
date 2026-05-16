// Derin Okuma - 10. Söz - Haşir Risalesi - 6-12. Suret Shorts
// Short: short-006
// Filled for n8n Load Input Code node.

const rawInput = {
  input_version: "0.1.0",
  input_type: "manual_scene_json",
  runtime: {
    repo_root: "/home/muhammet/projects/scene-blog-video",
    renderer_url: "http://127.0.0.1:8000"
  },
  job: {
    title: "Dünya Neden Tarla Gibidir?",
    description: "Dünya bir tarla, bir talimgâh ve bir pazar gibi okunursa hayat değişir.",
    language: "tr",
    author: "Muhammet Yahya Ozer",
    job_id_hint: "10-soz-hasir-risalesi-6-12-suret-short-006-day-25"
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
      title: "Üç Benzetme",
      narration: "Dünya bir tarla, bir talimgâh ve bir pazar gibi okunursa hayat değişir. Çünkü hiçbiri kalıcı oturma yeri değildir.",
      visual_note: "field, training ground, and marketplace in calm montage",
      keywords: ["field", "training", "marketplace"]
    },
    {
      scene_id: "scene-002",
      title: "Ekim ve Hazırlık",
      narration: "Tarlada ekim yapılır, hasat sonra alınır. Talimgâhta insan hazırlanır. Pazarda değer seçilir, alışveriş yapılır, sonra yol devam eder.",
      visual_note: "farmer sowing seeds, person training, market stalls, soft light",
      keywords: ["sowing seeds", "training", "market"]
    },
    {
      scene_id: "scene-003",
      title: "Hayatın Yönü",
      narration: "Bu bakış insanı dünyadan koparmaz; dünyayı doğru yere koyar. Burada yapılan her seçim, daha büyük bir hayata doğru anlam kazanır.",
      visual_note: "road from field toward sunrise horizon, peaceful cinematic scene",
      keywords: ["road", "field", "sunrise"]
    }
  ],
  metadata: {
    source: "derin-okuma",
    blog_post: "10-soz-hasir-risalesi-6-12-suret",
    test_day: "day-25",
    short_id: "short-006",
    workflow: "manual_scene_json_single_track_shorts_load_input",
    content_generation_status: "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
