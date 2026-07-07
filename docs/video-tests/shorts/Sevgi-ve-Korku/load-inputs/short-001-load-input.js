// Derin Okuma — 30.Söz - 1.Maksad - Mukaddime short-001
// Filled for day-48; paste into the n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "İnsan Neden ‘Ben’ Der?",
    "description": "Benlik yalnızca kişiliğimizi anlatmaz; sınırlı olandan sonsuz hakikate açılan bir ölçü olabilir. Doğru okunmadığında ise insanı kendi içine kapatır.\n\n#derinokuma #shorts #tefekkür #iman #benlik #ene",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "Sevgi-ve-Korku-short-001-day-48"
  },
  "reuse_existing_audio": {
    "enabled": false,
    "audio_mode": "single_track",
    "audio_track": {
      "mode": "single",
      "path": "",
      "duration_seconds": null
    }
  },
  "reuse_existing_video": {
    "enabled": false,
    "visual_mode": "semantic",
    "video_root": "",
    "path_template": "{scene_id}.mp4"
  },
  "visual_mode": "ambient",
  "audio_strategy": {
    "mode": "single_track",
    "timing_strategy": "elevenlabs_timestamps",
    "join_separator": "\n\n"
  },
  "render_preferences": {
    "mode": "shorts",
    "subtitles_enabled": true,
    "render_mode": "shorts",
    "produce_both": false,
    "background_music_enabled": true,
    "target_fps": 30
  },
  "scenes": [
    {
      "scene_id": "scene-001",
      "narration": "İnsan neden sürekli ‘ben’ der? Ben düşündüm, ben yaptım, benim hayatım… Bu küçük kelime, yalnızca kişiliğimizi anlatmaktan daha büyük bir vazife taşıyor olabilir.",
      "visual_note": "person facing a mirror at dawn, vertical cinematic portrait",
      "keywords": [
        "mirror",
        "reflection",
        "dawn"
      ]
    },
    {
      "scene_id": "scene-002",
      "narration": "Benlik, kendimizi fark etmemizi sağlayan hassas bir ölçüdür. Kendi sınırlı bilgimizi ve gücümüzü tanıyarak, sınırsız ilim ve kudretin ne demek olduğunu sezmeye başlarız.",
      "visual_note": "small silhouette beneath a vast starry sky, vertical frame",
      "keywords": [
        "silhouette",
        "starry sky",
        "vastness"
      ]
    },
    {
      "scene_id": "scene-003",
      "narration": "Bu ölçü kendisini değil, kendisinden ötesini gösterdiğinde bir anahtara dönüşür. Fakat insan kendisini mutlak merkez sayarsa aynı benlik, onu kendi içine kapatan bir kilit olur.",
      "visual_note": "antique key opening a bright door, vertical close-up",
      "keywords": [
        "antique key",
        "bright door",
        "opening"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "Sevgi-ve-Korku",
    "test_day": "day-48",
    "short_id": "short-001",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];

