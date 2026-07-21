// Derin Okuma — 2.Şua - 1.Makam - 1.Meyve Shorts short-001
// n8n Load Input Code node payload

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Nimet Neden Sadece Eşya Değildir?",
    "description": "Bir nimet yalnız fayda taşımaz; arkasında görülen rahmetle kalbe başka bir anlam açar. Sahipsiz sanılan ikram, tevhid bakışıyla sahibine bağlanır.\n\n#derinokuma #shorts #tefekkür #iman #nimet #tevhid",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "2-sua-1-makam-1-meyve-tevhid-daginik-gorunen-hayati-birlestiren-bakis-short-001-day-55"
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
    "target_aspect_ratio": "9:16",
    "target_resolution": "1080x1920",
    "target_fps": 30,
    "voice_language": "tr"
  },
  "scenes": [
    {
      "scene_id": "scene-001",
      "title": "Nimetin İlk Sesi",
      "narration": "Bir nimet geldiğinde, onu sadece eşya olarak mı görürüz? Sofraya gelen lokma bedeni doyurur; ama kalbe de daha derin bir şey söyler. İhtiyaç görülüyor, açlık unutulmuyor, rızık başıboş gelmiyor.",
      "visual_note": "simple meal on a wooden table by a window, vertical warm light",
      "keywords": [
        "simple meal",
        "window light",
        "gratitude"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Sahipsiz Sanmak",
      "narration": "Nimeti yalnız maddeye ve sebeplere bağlamak, ondaki şefkat manasını zayıflatır. Lokma aynı lokmadır; fakat kalpte bıraktığı iz değişir. Tevhid, nimetin sahibini hatırlatarak o izi derinleştirir.",
      "visual_note": "hands holding bread with soft morning light, vertical close up",
      "keywords": [
        "bread",
        "hands",
        "blessing"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Rahmete Bağlanan İkram",
      "narration": "Böyle bakınca insan daha bilinçli şükreder. Küçük bir ikram bile büyük bir rahmet düzenine bağlanır. Nimet sadece alınan bir şey değil, kalbi uyandıran bir işaret olur.",
      "visual_note": "sunlight spreading across a quiet breakfast table, vertical cinematic shot",
      "keywords": [
        "breakfast table",
        "sunlight",
        "thankfulness"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "2-sua-1-makam-1-meyve-tevhid-daginik-gorunen-hayati-birlestiren-bakis",
    "test_day": "day-55",
    "short_id": "short-001",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
