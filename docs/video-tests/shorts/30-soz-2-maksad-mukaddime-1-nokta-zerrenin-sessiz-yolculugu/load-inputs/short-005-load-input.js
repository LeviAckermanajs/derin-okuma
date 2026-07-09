// Derin Okuma — 30.Söz - 2.Maksad - Mukaddime - 1.Nokta Shorts
// Short: short-005
// Content filled for day-52 production.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Tesbih Sadece Dille mi Olur?",
    "description": "Varlıklar hâlleriyle de Allah’ı hatırlatan bir düzen ve mana taşır. #derinokuma #shorts #tefekkür #iman #tesbih #maneviyat",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "30-soz-2-maksad-mukaddime-1-nokta-zerrenin-sessiz-yolculugu-short-005-day-52"
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
      "narration": "Tesbih sadece dille mi olur, yoksa varlık da konuşur mu? Bir çiçek rengiyle, bir meyve tadıyla, bir zerre vazifesiyle anlam taşır.",
      "visual_note": "flower petals moving gently in wind, soft spiritual mood",
      "keywords": [
        "flower petals",
        "gentle wind",
        "spiritual mood"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Ritim",
      "narration": "Gece gündüze, kış bahara, toprak hayata döner. Zerreler de bu büyük ritmin içinde sessizce yer değiştirir.",
      "visual_note": "night sky transitioning to sunrise over mountains, slow cinematic",
      "keywords": [
        "night to sunrise",
        "mountains",
        "cosmic rhythm"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Duyuş",
      "narration": "İnsan bu ritmi fark ettiğinde dünya daha derin görünür. Çünkü sessiz sandığı kâinat, hâl diliyle sürekli hatırlatır.",
      "visual_note": "quiet meadow at dawn with soft light and contemplative person",
      "keywords": [
        "quiet meadow",
        "dawn light",
        "contemplative"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "30-soz-2-maksad-mukaddime-1-nokta-zerrenin-sessiz-yolculugu",
    "test_day": "day-52",
    "short_id": "short-005",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
