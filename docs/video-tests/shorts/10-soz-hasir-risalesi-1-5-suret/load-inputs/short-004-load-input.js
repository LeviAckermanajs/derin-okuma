// Derin Okuma - 10. Söz - Haşir Risalesi - 1-5. Suret Shorts
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
    title: "Güzellik Neden Ebediyeti İster?",
    description: "Güzellik sadece kaybolmak için gösterilmiş olamaz.",
    language: "tr",
    author: "Muhammet Yahya Ozer",
    job_id_hint: "10-soz-hasir-risalesi-1-5-suret-short-004-day-24"
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
      title: "Kaybolan Güzellik",
      narration: "Güzellik sadece kaybolmak için gösterilmiş olamaz. İnsan sever, etkilenir, hayran kalır; fakat çoğu zaman doyamadan ayrılır.",
      visual_note: "beautiful sunset over flowers, gentle wind, quiet emotional mood",
      keywords: ["sunset flowers", "beauty", "longing"]
    },
    {
      scene_id: "scene-002",
      title: "Seyirci",
      narration: "Sanat seyirci ister, kemal takdir edilmek ister. Dünya bu büyük temaşa için kısa bir sahne gibidir; insan bir an bakar ve yoluna devam eder.",
      visual_note: "art gallery with soft light and slow walking visitor, elegant atmosphere",
      keywords: ["art gallery", "visitor", "beauty"]
    },
    {
      scene_id: "scene-003",
      title: "Daimi Yurt",
      narration: "Kalbin sevdiği güzellik sonsuz ayrılığa mahkûm edilirse, sevgi hüzne dönüşür. Bu yüzden ahiret sadece hesap yeri değil, daimi seyir ve kavuşma yurdudur.",
      visual_note: "vast garden path in golden light, peaceful endless perspective",
      keywords: ["garden path", "golden light", "eternity"]
    }
  ],
  metadata: {
    source: "derin-okuma",
    blog_post: "10-soz-hasir-risalesi-1-5-suret",
    test_day: "day-24",
    short_id: "short-004",
    workflow: "manual_scene_json_single_track_shorts_load_input",
    content_generation_status: "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
