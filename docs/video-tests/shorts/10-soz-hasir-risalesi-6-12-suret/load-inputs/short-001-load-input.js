// Derin Okuma - 10. Söz - Haşir Risalesi - 6-12. Suret Shorts
// Short: short-001
// Filled for n8n Load Input Code node.

const rawInput = {
  input_version: "0.1.0",
  input_type: "manual_scene_json",
  runtime: {
    repo_root: "/home/muhammet/projects/scene-blog-video",
    renderer_url: "http://127.0.0.1:8000"
  },
  job: {
    title: "Dünya Neden Son Yurt Değil?",
    description: "Dünya geçici diye anlamsız değildir; geçici olduğu için imtihan yeridir.",
    language: "tr",
    author: "Muhammet Yahya Ozer",
    job_id_hint: "10-soz-hasir-risalesi-6-12-suret-short-001-day-25"
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
      title: "Geçicilik",
      narration: "Dünya geçici diye anlamsız değildir; geçici olduğu için imtihan yeridir. Gelen gider, giden geri dönmez gibi görünür; fakat bu akış bir varışa hazırlanır.",
      visual_note: "train station with arrivals and departures, soft cinematic light",
      keywords: ["train station", "departure", "journey"]
    },
    {
      scene_id: "scene-002",
      title: "Misafirhane",
      narration: "Bir misafirhanede kalıcı düzen kurulmaz. İnsan burada ağırlanır, sınanır, öğrenir ve yoluna devam eder. Dünya da böyle bir konak gibi çalışır.",
      visual_note: "quiet guesthouse hallway with open doors, warm light",
      keywords: ["guesthouse", "hallway", "temporary"]
    },
    {
      scene_id: "scene-003",
      title: "Varış",
      narration: "Sergi geçiciyse, gösterilen güzelliğin aslı başka yerde aranır. Kısa duruş varsa, kalıcı varış da olmalıdır.",
      visual_note: "temporary exhibition opening to bright horizon, symbolic view",
      keywords: ["exhibition", "horizon", "meaning"]
    }
  ],
  metadata: {
    source: "derin-okuma",
    blog_post: "10-soz-hasir-risalesi-6-12-suret",
    test_day: "day-25",
    short_id: "short-001",
    workflow: "manual_scene_json_single_track_shorts_load_input",
    content_generation_status: "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
