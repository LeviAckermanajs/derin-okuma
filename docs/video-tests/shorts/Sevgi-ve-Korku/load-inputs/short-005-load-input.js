// Derin Okuma — 30.Söz - 1.Maksad - Mukaddime short-005
// Filled for day-48; paste into the n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Kendini Bilmek Neden Yetmez?",
    "description": "Kendi sınırını tanımak insanı değersizleştirmez; ona sorumluluğunu ve dayanacağı merkezi gösterir. Kulluk, benliği silmek değil doğru yere yerleştirmektir.\n\n#derinokuma #shorts #tefekkür #iman #kulluk #marifet",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "Sevgi-ve-Korku-short-005-day-48"
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
      "narration": "Kendini tanımak neden kulluğa götürür? Çünkü insan sınırlarını gördüğünde, hayatı tek başına kurmadığını ve nimetleri hazır bulduğunu fark eder.",
      "visual_note": "person receiving sunrise in an open field, vertical peaceful shot",
      "keywords": [
        "sunrise",
        "open field",
        "gratitude"
      ]
    },
    {
      "scene_id": "scene-002",
      "narration": "Kalbin atışını başlatmayan, güneşi doğurmayan ve toprağı yaratmayan insan; yine de hepsinden faydalanır. Bu farkındalık, sahiplik iddiasını şükre ve sorumluluğa dönüştürür.",
      "visual_note": "heartbeat monitor transitioning to sun and fertile earth, vertical montage",
      "keywords": [
        "heartbeat",
        "sun",
        "fertile earth"
      ]
    },
    {
      "scene_id": "scene-003",
      "narration": "Kulluk benliği silmek değildir; onu doğru yere yerleştirmektir. İnsan çalışır, tercih eder ve hesabını taşır; fakat kendisini mülkün ve neticelerin mutlak sahibi sanmaz.",
      "visual_note": "humble person walking with purpose through a mosque courtyard",
      "keywords": [
        "mosque courtyard",
        "purposeful walk",
        "humility"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "Sevgi-ve-Korku",
    "test_day": "day-48",
    "short_id": "short-005",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];

