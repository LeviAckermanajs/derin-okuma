// Derin Okuma - 10. Söz - Haşir Risalesi - 1-5. Suret Shorts
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
    title: "Nimetler Neyi Haber Verir?",
    description: "Burada tattırılan nimetler, asıllarına çağıran işaretler gibidir.",
    language: "tr",
    author: "Muhammet Yahya Ozer",
    job_id_hint: "10-soz-hasir-risalesi-1-5-suret-short-005-day-24"
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
      title: "Tadım",
      narration: "Burada tattırılan nimetler, asıllarına çağıran işaretler gibidir. Bir meyve, bir koku, bir sevinç; geçici olduğu hâlde kalpte kalıcı bir arzu uyandırır.",
      visual_note: "fresh fruit on simple table, morning sunlight, warm humble mood",
      keywords: ["fresh fruit", "morning light", "provision"]
    },
    {
      scene_id: "scene-002",
      title: "Gölge ve Kaynak",
      narration: "Gölge varsa kaynak vardır; işaret varsa işaret edilen vardır. Dünya nimetleri de tam kendisi değil, daha büyük bir ikramın numunesi gibi okunur.",
      visual_note: "tree reflection on calm water, real forest behind, symbolic nature scene",
      keywords: ["reflection", "forest", "symbol"]
    },
    {
      scene_id: "scene-003",
      title: "Ziyafet",
      narration: "Bu kadar zengin sofralar yalnız kısa bir tatma için açılmış olamaz. Rahmet burada tattırdığını, ebedî yurtta tamamlamayı vaat eden bir dil gibi konuşur.",
      visual_note: "abundant table with bread and fruits, soft natural light, peaceful scene",
      keywords: ["abundant table", "bread", "mercy"]
    }
  ],
  metadata: {
    source: "derin-okuma",
    blog_post: "10-soz-hasir-risalesi-1-5-suret",
    test_day: "day-24",
    short_id: "short-005",
    workflow: "manual_scene_json_single_track_shorts_load_input",
    content_generation_status: "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
