// Derin Okuma - 10. Söz - Haşir Risalesi - 6-12. Suret Shorts
// Short: short-002
// Filled for n8n Load Input Code node.

const rawInput = {
  input_version: "0.1.0",
  input_type: "manual_scene_json",
  runtime: {
    repo_root: "/home/muhammet/projects/scene-blog-video",
    renderer_url: "http://127.0.0.1:8000"
  },
  job: {
    title: "Kayıt Varsa Hesap Neden Var?",
    description: "Bir şey dikkatle kaydediliyorsa, o kayıt bir gün açılmak içindir.",
    language: "tr",
    author: "Muhammet Yahya Ozer",
    job_id_hint: "10-soz-hasir-risalesi-6-12-suret-short-002-day-25"
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
      title: "Kayıt",
      narration: "Bir şey dikkatle kaydediliyorsa, o kayıt bir gün açılmak içindir. Hayatta hiçbir iz tamamen boşa gitmiyor gibi görünür.",
      visual_note: "old ledger book and pen, warm desk light, close up",
      keywords: ["ledger", "pen", "record"]
    },
    {
      scene_id: "scene-002",
      title: "Muhasebe",
      narration: "En küçük ölçüleri koruyan bir düzen, insanın büyük iyilik ve zulümlerini ihmal etmez. Küçüğü kaydeden, büyüğü başıboş bırakmaz.",
      visual_note: "precise seeds and handwritten notes, calm focused scene",
      keywords: ["precision", "seeds", "notes"]
    },
    {
      scene_id: "scene-003",
      title: "Mahkeme",
      narration: "Dünyada kapanmamış görünen hesaplar, yok sayılmış değildir. Daha büyük bir mahkemeye bırakılmış olabilir.",
      visual_note: "empty courtroom with sunlight, solemn cinematic mood",
      keywords: ["courtroom", "justice", "sunlight"]
    }
  ],
  metadata: {
    source: "derin-okuma",
    blog_post: "10-soz-hasir-risalesi-6-12-suret",
    test_day: "day-25",
    short_id: "short-002",
    workflow: "manual_scene_json_single_track_shorts_load_input",
    content_generation_status: "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
