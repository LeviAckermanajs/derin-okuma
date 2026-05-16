// Derin Okuma - 10. Söz - Haşir Risalesi - 6-12. Suret Shorts
// Short: short-003
// Filled for n8n Load Input Code node.

const rawInput = {
  input_version: "0.1.0",
  input_type: "manual_scene_json",
  runtime: {
    repo_root: "/home/muhammet/projects/scene-blog-video",
    renderer_url: "http://127.0.0.1:8000"
  },
  job: {
    title: "Bahar Haşri Nasıl Gösterir?",
    description: "Bahar sadece güzel bir mevsim değil; yeniden dirilişin gözle görünen dersidir.",
    language: "tr",
    author: "Muhammet Yahya Ozer",
    job_id_hint: "10-soz-hasir-risalesi-6-12-suret-short-003-day-25"
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
      title: "Bahar",
      narration: "Bahar sadece güzel bir mevsim değil; yeniden dirilişin gözle görünen dersidir. Kışın susan toprak, birden hayatla dolar.",
      visual_note: "spring flowers emerging from winter soil, fresh sunlight",
      keywords: ["spring flowers", "winter soil", "renewal"]
    },
    {
      scene_id: "scene-002",
      title: "Toplu Diriliş",
      narration: "Ağaçlar giyinir, tohumlar uyanır, canlılar rızıklarıyla buluşur. Bütün bunlar dağınık değil; ölçülü ve emirli bir hareket gibi işler.",
      visual_note: "trees blooming together, bees and blossoms, cinematic nature",
      keywords: ["blooming trees", "bees", "order"]
    },
    {
      scene_id: "scene-003",
      title: "Haşir",
      narration: "Her yıl yeryüzünü yeniden kuran kudret için, insanları yeniden diriltmek uzak değildir. Küçük haşir, büyük haşri akla yaklaştırır.",
      visual_note: "barren landscape turning green in time lapse, wide horizon",
      keywords: ["green landscape", "time lapse", "resurrection"]
    }
  ],
  metadata: {
    source: "derin-okuma",
    blog_post: "10-soz-hasir-risalesi-6-12-suret",
    test_day: "day-25",
    short_id: "short-003",
    workflow: "manual_scene_json_single_track_shorts_load_input",
    content_generation_status: "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
