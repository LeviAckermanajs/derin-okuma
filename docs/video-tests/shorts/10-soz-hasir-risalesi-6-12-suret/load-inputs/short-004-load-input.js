// Derin Okuma - 10. Söz - Haşir Risalesi - 6-12. Suret Shorts
// Short: short-004
// Filled for n8n Load Input Code node.

const rawInput = {
  input_version: "0.1.0",
  input_type: "manual_scene_json",
  runtime: {
    repo_root: "/home/muhammet/projects/scene-blog-video",
    renderer_url: "http://127.0.0.1:8000"
  },
  job: {
    title: "Merhamet Neden Tamamlanır?",
    description: "Dünyada merhamet var; ama ayrılık da var. Bu yarım kalış neyi gösterir?",
    language: "tr",
    author: "Muhammet Yahya Ozer",
    job_id_hint: "10-soz-hasir-risalesi-6-12-suret-short-004-day-25"
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
      title: "Yarım Görünen",
      narration: "Dünyada merhamet var; ama ayrılık da var. Rızık var; ama ölüm de var. Adalet işaretleri var; ama zulümler bazen tam karşılık bulmadan geçiyor.",
      visual_note: "hands caring for someone, then empty chair by window, soft mood",
      keywords: ["care", "empty chair", "loss"]
    },
    {
      scene_id: "scene-002",
      title: "Tam Tecelli",
      narration: "Bu yarım görünüş, merhametin yokluğunu değil, tamamlanacağı başka bir alanı düşündürür. Eksik tecelli, tam tecelli mahallini ister.",
      visual_note: "sunlight breaking through clouds over calm valley",
      keywords: ["sunlight", "clouds", "completion"]
    },
    {
      scene_id: "scene-003",
      title: "Ahiret",
      narration: "Ahiret yalnız ceza yeri değildir. Adaletin, merhametin ve büyük ikramın birlikte tamamlandığı ebedî yurt olarak görünür.",
      visual_note: "peaceful garden path with golden light, serene horizon",
      keywords: ["garden path", "golden light", "eternity"]
    }
  ],
  metadata: {
    source: "derin-okuma",
    blog_post: "10-soz-hasir-risalesi-6-12-suret",
    test_day: "day-25",
    short_id: "short-004",
    workflow: "manual_scene_json_single_track_shorts_load_input",
    content_generation_status: "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
