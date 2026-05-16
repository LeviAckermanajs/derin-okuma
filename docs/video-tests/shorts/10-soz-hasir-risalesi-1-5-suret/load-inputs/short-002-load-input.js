// Derin Okuma - 10. Söz - Haşir Risalesi - 1-5. Suret Shorts
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
    title: "İnsan Neden Emanetçidir?",
    description: "İnsan sahip olduğunu sandığı şeylerin çoğunda aslında emanetçidir.",
    language: "tr",
    author: "Muhammet Yahya Ozer",
    job_id_hint: "10-soz-hasir-risalesi-1-5-suret-short-002-day-24"
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
      title: "Sahiplik Zannı",
      narration: "İnsan sahip olduğunu sandığı şeylerin çoğunda aslında emanetçidir. Kullandığı imkânları kendi mülkü zannettiğinde, nimetin sahibini unutmaya başlar.",
      visual_note: "hands holding soil and water, humble natural light, close up",
      keywords: ["hands", "soil", "trust"]
    },
    {
      scene_id: "scene-002",
      title: "Beden ve Ömür",
      narration: "Beden, ömür, nefes, rızık ve çevremizdeki nimetler mutlak mülk değildir. İnsan bunları dilediği gibi harcayan bir malik değil, sorumluluk taşıyan bir misafirdir.",
      visual_note: "person walking through a simple guesthouse corridor, soft daylight",
      keywords: ["guesthouse", "walking", "responsibility"]
    },
    {
      scene_id: "scene-003",
      title: "Ahlak",
      narration: "Emanet bilinci gelince ahlak değişir. İnsan nimetle şımarmaz; onu verenin huzurunda daha dikkatli, daha şükürlü ve daha edepli yaşamaya başlar.",
      visual_note: "quiet person by window in prayerful reflection, warm peaceful light",
      keywords: ["reflection", "gratitude", "humility"]
    }
  ],
  metadata: {
    source: "derin-okuma",
    blog_post: "10-soz-hasir-risalesi-1-5-suret",
    test_day: "day-24",
    short_id: "short-002",
    workflow: "manual_scene_json_single_track_shorts_load_input",
    content_generation_status: "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
