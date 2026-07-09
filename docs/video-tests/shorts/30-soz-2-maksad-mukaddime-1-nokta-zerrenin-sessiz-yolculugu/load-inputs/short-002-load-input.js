// Derin Okuma — 30.Söz - 2.Maksad - Mukaddime - 1.Nokta Shorts
// Short: short-002
// Content filled for day-52 production.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Küçük Şeyler Nasıl Büyük İş Görür?",
    "description": "Bir zerre, kendi başına taşıyamayacağı vazifelere emanet bilinciyle dahil olur. #derinokuma #shorts #tefekkür #iman #hikmet #kulluk",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "30-soz-2-maksad-mukaddime-1-nokta-zerrenin-sessiz-yolculugu-short-002-day-52"
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
      "title": "Hook",
      "narration": "Küçük bir şey, kendi gücünü aşan işleri nasıl görür? Bir zerre, bir tohumun içinde ağaca, bir çiçeğin renginde güzelliğe, bir meyvenin tadında nimete hizmet eder.",
      "visual_note": "seed sprouting in soil, macro cinematic morning light",
      "keywords": [
        "seed sprout",
        "soil",
        "morning light"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Emanet",
      "narration": "Bu işler zerrenin kendi bilgisiyle açıklanamaz. O, kendisine verilen vazifenin içinde görünür; kendi adına değil, onu çalıştıran emir adına hareket eder.",
      "visual_note": "hands gently holding a seedling, humble peaceful mood",
      "keywords": [
        "hands",
        "seedling",
        "humility"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Sonuç",
      "narration": "Vazife bittiğinde geride sadece madde kalmaz. Bir güzellik, bir fayda ve bir şükür manası ortaya çıkar.",
      "visual_note": "ripe fruit on branch with warm sunlight, serene orchard",
      "keywords": [
        "ripe fruit",
        "branch",
        "warm sunlight"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "30-soz-2-maksad-mukaddime-1-nokta-zerrenin-sessiz-yolculugu",
    "test_day": "day-52",
    "short_id": "short-002",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
