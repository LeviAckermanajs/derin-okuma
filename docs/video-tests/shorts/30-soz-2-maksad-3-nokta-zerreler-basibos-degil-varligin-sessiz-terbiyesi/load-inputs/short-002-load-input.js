// Derin Okuma - 30.Soz - 2.Maksad - 3.Nokta Shorts
// Short: short-002
// Filled Day-54 package. Paste this file into the n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Çekirdek Karanlıkta Neden Kaybolmaz?",
    "description": "Karanlık bazen yok oluş değil, yeni bir vazifeye hazırlıktır; çekirdeğin toprağın altında taşıdığı sır da bunu hatırlatır. #derinokuma #shorts #tefekkür #hikmet #tohum #sabır",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "30-soz-2-maksad-3-nokta-zerreler-basibos-degil-varligin-sessiz-terbiyesi-short-002-day-54"
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
      "narration": "Bir çekirdek karanlıkta kalır; ama orada kaybolmaz, hazırlanır.",
      "visual_note": "seed under dark soil, close up, soft dramatic light",
      "keywords": [
        "seed",
        "dark soil",
        "preparation"
      ]
    },
    {
      "scene_id": "scene-002",
      "narration": "Toprak altında sessizce beklerken, içindeki hayat emri açılacak zamanı bekler. Sonra dal, yaprak ve meyveye doğru yürür.",
      "visual_note": "seedling emerging from soil, morning light, macro nature",
      "keywords": [
        "seedling",
        "morning light",
        "growth"
      ]
    },
    {
      "scene_id": "scene-003",
      "narration": "İnsanın bazı bekleyişleri de böyledir. Dışarıdan durgun görünür; içeride ise bir terbiye ve olgunlaşma devam eder.",
      "visual_note": "person sitting by window in soft light, reflective quiet mood",
      "keywords": [
        "waiting",
        "window light",
        "reflection"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "30-soz-2-maksad-3-nokta-zerreler-basibos-degil-varligin-sessiz-terbiyesi",
    "test_day": "day-54",
    "short_id": "short-002",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
