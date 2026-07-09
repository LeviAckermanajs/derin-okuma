// Derin Okuma — 30.Söz - 2.Maksad - Mukaddime - 1.Nokta Shorts
// Short: short-001
// Content filled for day-52 production.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Zerre Neden Başıboş Değil?",
    "description": "Küçük bir zerrenin düzenli yolculuğu, tesadüf fikrinden daha derin bir mana taşır. #derinokuma #shorts #tefekkür #iman #zerre #kainat",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "30-soz-2-maksad-mukaddime-1-nokta-zerrenin-sessiz-yolculugu-short-001-day-52"
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
      "narration": "Bir zerre gerçekten başıboş hareket ediyor olabilir mi? Havanın içinde dolaşan, toprağa karışan, sonra bir yaprağın yapısına giren küçücük bir şeyden söz ediyoruz.",
      "visual_note": "tiny particles floating in sunlight near leaves, calm macro shot",
      "keywords": [
        "tiny particles",
        "sunlight",
        "leaves"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Düzen",
      "narration": "Eğer hareket başıboş olsaydı, sonuçlarda bu kadar ölçü, fayda ve güzellik görünmezdi. Bir zerre girdiği yerde düzeni bozmuyor; aksine düzenin parçası oluyor.",
      "visual_note": "macro leaf veins with soft light and slow camera movement",
      "keywords": [
        "leaf veins",
        "soft light",
        "order"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Mana",
      "narration": "Bu yüzden küçük hareket, büyük bir manaya kapı açar. Zerrenin yolculuğu tesadüfü değil, vazifeyi ve hikmeti düşündürür.",
      "visual_note": "peaceful nature path at sunrise with floating dust motes",
      "keywords": [
        "nature path",
        "sunrise",
        "dust motes"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "30-soz-2-maksad-mukaddime-1-nokta-zerrenin-sessiz-yolculugu",
    "test_day": "day-52",
    "short_id": "short-001",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
