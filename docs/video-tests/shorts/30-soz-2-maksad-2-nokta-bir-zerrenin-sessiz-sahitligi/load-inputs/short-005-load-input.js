// Derin Okuma — 30.Söz - 2.Maksad - 2.Nokta Shorts short-005
// Filled content for n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Kubbedeki Taş Ne Anlatır?",
    "description": "Kubbedeki taş misali, zerrenin kendi başına değil bütün düzeni bilen bir emirle yerini bulduğunu anlatır. #derinokuma #shorts #tefekkür #iman #mimari #tevhid",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "30-soz-2-maksad-2-nokta-bir-zerrenin-sessiz-sahitligi-short-005-day-53"
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
      "narration": "Bir kubbedeki taş kendi başına ayakta kalabilir mi? Eğer ustanın planına bağlı olmasa, bütün kubbeyi bilmesi ve diğer taşlarla kusursuz anlaşması gerekirdi.",
      "visual_note": "historic stone dome interior with sunlight beams",
      "keywords": [
        "stone dome",
        "sunlight beams",
        "architecture"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Misal",
      "narration": "Bu yük tek bir taş için imkânsızdır. Taş, mimarın sanatına uyduğu için yerinde durur ve bütün yapının parçası olur.",
      "visual_note": "artisan placing stone tiles in architectural detail",
      "keywords": [
        "artisan",
        "stone tiles",
        "craftsmanship"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Bağlantı",
      "narration": "Zerre de kâinatın geniş kubbesinde benzer bir anlam taşır. Kendi başına değil, bütün düzeni kuşatan bir emirle yerini bulur.",
      "visual_note": "wide mosque dome view with calm cinematic light",
      "keywords": [
        "mosque dome",
        "cinematic light",
        "order"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "30-soz-2-maksad-2-nokta-bir-zerrenin-sessiz-sahitligi",
    "test_day": "day-53",
    "short_id": "short-005",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled",
    "status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
