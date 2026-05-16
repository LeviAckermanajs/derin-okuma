// Derin Okuma - 10. Söz - Haşir Risalesi - 1-5. Suret Shorts
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
    title: "Dünya Neden Sahipsiz Değil?",
    description: "Dünya çok serbest görünüyorsa, bu sahipsiz olduğu anlamına gelmez.",
    language: "tr",
    author: "Muhammet Yahya Ozer",
    job_id_hint: "10-soz-hasir-risalesi-1-5-suret-short-001-day-24"
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
      title: "Serbestlik Yanılgısı",
      narration: "Dünya çok serbest görünüyorsa, bu sahipsiz olduğu anlamına gelmez. Kapıların açık olması, her şeyin başıboş bırakıldığına delil değildir.",
      visual_note: "open gate in quiet courtyard, soft morning shadows, contemplative mood",
      keywords: ["open gate", "courtyard", "freedom"]
    },
    {
      scene_id: "scene-002",
      title: "Mühlet",
      narration: "İnsan çoğu zaman ceza hemen gelmeyince hesap da yok sanır. Oysa mühlet, yokluk değil; imtihanın devam ettiğini gösteren ince bir alandır.",
      visual_note: "hourglass on wooden table, warm light, slow cinematic close up",
      keywords: ["hourglass", "waiting", "test"]
    },
    {
      scene_id: "scene-003",
      title: "Sonuç",
      narration: "Sahibi olan bir memlekette gecikme, unutma demek değildir. Her davranışın karşılığı, en uygun vakitte ortaya çıkacak bir hesaba bırakılır.",
      visual_note: "empty courtroom with sunbeam, solemn atmosphere, slow camera",
      keywords: ["courtroom", "sunbeam", "accountability"]
    }
  ],
  metadata: {
    source: "derin-okuma",
    blog_post: "10-soz-hasir-risalesi-1-5-suret",
    test_day: "day-24",
    short_id: "short-001",
    workflow: "manual_scene_json_single_track_shorts_load_input",
    content_generation_status: "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
