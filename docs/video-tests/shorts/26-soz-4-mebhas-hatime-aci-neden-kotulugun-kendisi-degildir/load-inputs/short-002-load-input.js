// Derin Okuma — Hayat Neden Sadece Rahatlıkla Açılmaz?
// Filled for day-47; paste into the n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Hayat Neden Sadece Rahatlıkla Açılmaz?",
    "description": "Hayat değişimle canlı kalır; tekdüzelik ise kabiliyetleri örter. Zorluk bazen insanın içinde saklı kuvvetleri çalıştıran bir alan açar.\n\n#derinokuma #shorts #tefekkür #hayat #sabır #maneviyat",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "26-soz-4-mebhas-hatime-aci-neden-kotulugun-kendisi-degildir-short-002-day-47"
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
      "narration": "Hayat sadece rahatlıkla gelişseydi ne eksik kalırdı? Her günün ve her duygunun aynı kaldığı bir ömür, ilk anda güvenli görünse de zamanla canlılığını yitirirdi.",
      "visual_note": "A perfectly still empty road under uniform gray sky, vertical frame.",
      "keywords": [
        "empty road",
        "gray sky",
        "stillness",
        "monotony"
      ]
    },
    {
      "scene_id": "scene-002",
      "narration": "Hayat değişimle, hareketle ve farklı hâllerle açılır. Kalbin, aklın ve duyguların nice kabiliyeti ancak yeni şartlarla karşılaştığında görünür olur.",
      "visual_note": "Time-lapse of seasons changing around a single tree, vertical composition.",
      "keywords": [
        "changing seasons",
        "single tree",
        "time lapse",
        "renewal"
      ]
    },
    {
      "scene_id": "scene-003",
      "narration": "Zorluk bu yüzden her zaman anlamsız bir engel değildir. Bazen sabrı çalıştırır, aczi fark ettirir ve insanı daha sağlam bir dayanağa yöneltir. Rahatlık nimettir; fakat insanı olgunlaştıran tek hâl değildir.",
      "visual_note": "A traveler reaching a mountain viewpoint in warm dawn light.",
      "keywords": [
        "traveler",
        "mountain viewpoint",
        "dawn",
        "growth"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "26-soz-4-mebhas-hatime-aci-neden-kotulugun-kendisi-degildir",
    "test_day": "day-47",
    "short_id": "short-002",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
