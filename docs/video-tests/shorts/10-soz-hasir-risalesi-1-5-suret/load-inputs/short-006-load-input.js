// Derin Okuma - 10. Söz - Haşir Risalesi - 1-5. Suret Shorts
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
    title: "Dua Haşri Nasıl Gösterir?",
    description: "Peygamberin duası, insanlığın en büyük ihtiyacını dile getirir.",
    language: "tr",
    author: "Muhammet Yahya Ozer",
    job_id_hint: "10-soz-hasir-risalesi-1-5-suret-short-006-day-24"
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
      title: "En Büyük İhtiyaç",
      narration: "Peygamberin duası, insanlığın en büyük ihtiyacını dile getirir. Fani gölgeler değil, nimetlerin asılları; geçici tatlar değil, ebedî saadet istenir.",
      visual_note: "silhouette praying at dawn under wide sky, reverent calm mood",
      keywords: ["prayer", "dawn", "eternal happiness"]
    },
    {
      scene_id: "scene-002",
      title: "Umumi Talep",
      narration: "Bu dua sadece bir kişinin isteği gibi değildir. Bütün muhtaç varlıkların, bütün kalplerin ve bütün ayrılık acılarının diliyle yükselen umumi bir taleptir.",
      visual_note: "crowd silhouettes facing sunrise, peaceful spiritual atmosphere",
      keywords: ["crowd silhouettes", "sunrise", "supplication"]
    },
    {
      scene_id: "scene-003",
      title: "Kabul Ufku",
      narration: "En küçük ihtiyaçları gören rahmet, en büyük talebi görmezden gelmez. Kudret için baharı diriltmek ne kadar kolaysa, insanı ebedî hayata kaldırmak da o kadar yakındır.",
      visual_note: "spring field opening to bright horizon, hopeful cinematic movement",
      keywords: ["spring field", "bright horizon", "hope"]
    }
  ],
  metadata: {
    source: "derin-okuma",
    blog_post: "10-soz-hasir-risalesi-1-5-suret",
    test_day: "day-24",
    short_id: "short-006",
    workflow: "manual_scene_json_single_track_shorts_load_input",
    content_generation_status: "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
