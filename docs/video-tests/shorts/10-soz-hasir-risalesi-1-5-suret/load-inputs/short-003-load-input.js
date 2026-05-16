// Derin Okuma - 10. Söz - Haşir Risalesi - 1-5. Suret Shorts
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
    title: "Adalet Neden Tamamlanır?",
    description: "Dünyada adalet eksik görünüyorsa, bu adalet yok demek değildir.",
    language: "tr",
    author: "Muhammet Yahya Ozer",
    job_id_hint: "10-soz-hasir-risalesi-1-5-suret-short-003-day-24"
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
      title: "Eksik Görünen",
      narration: "Dünyada adalet eksik görünüyorsa, bu adalet yok demek değildir. Zalim bazen güçlü gider, mazlum bazen hakkını alamadan ayrılır.",
      visual_note: "lonely figure in a dim hallway, distant light, serious cinematic tone",
      keywords: ["lonely figure", "distant light", "injustice"]
    },
    {
      scene_id: "scene-002",
      title: "Yanlış Sonuç",
      narration: "Bu görüntü insanı inkâra değil, daha büyük bir hesaba götürmelidir. Çünkü dünya tam karşılıkların verildiği nihai mahkeme gibi işlemiyor.",
      visual_note: "empty courtroom benches, balanced composition, quiet solemn mood",
      keywords: ["courtroom", "justice", "silence"]
    },
    {
      scene_id: "scene-003",
      title: "Büyük Mahkeme",
      narration: "Tam görünmeyen adalet, ertelenmiş bir hükmün işareti olabilir. İnsan başıboş bırakılmadığı için, her hak bir gün sahibine döner.",
      visual_note: "scales of justice near window light, slow close up, calm mood",
      keywords: ["justice scales", "window light", "judgment"]
    }
  ],
  metadata: {
    source: "derin-okuma",
    blog_post: "10-soz-hasir-risalesi-1-5-suret",
    test_day: "day-24",
    short_id: "short-003",
    workflow: "manual_scene_json_single_track_shorts_load_input",
    content_generation_status: "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
