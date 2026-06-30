// Derin Okuma — İnsan Başarısıyla Neden Gururlanmamalı?
// Filled for day-47; paste into the n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "İnsan Başarısıyla Neden Gururlanmamalı?",
    "description": "İnsan gayret eder; fakat kabiliyetini, şartları ve neticeyi tek başına yaratmaz. Başarıyı emanet bilmek gururu azaltır, şükrü derinleştirir.\n\n#derinokuma #shorts #tefekkür #şükür #gurur #nefis",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "26-soz-4-mebhas-hatime-aci-neden-kotulugun-kendisi-degildir-short-004-day-47"
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
      "narration": "Bir üzüm asması taşıdığı salkımlarla övünebilir mi? Asma meyvenin planını kurmaz, rengini seçmez ve içindeki tadı kendi kudretiyle yaratmaz.",
      "visual_note": "Ripe grape clusters on a vine in golden light, vertical macro shot.",
      "keywords": [
        "grape clusters",
        "vine",
        "golden light",
        "fruit"
      ]
    },
    {
      "scene_id": "scene-002",
      "narration": "İnsan da kabiliyetini, karşılaştığı imkânları ve emeğinin netice vermesini bütünüyle kendisi üretmez. Gayreti gerçektir; fakat başarının bütün sebepleri ona ait değildir.",
      "visual_note": "A craftsperson working among many tools and helping hands.",
      "keywords": [
        "craftsperson",
        "tools",
        "helping hands",
        "work"
      ]
    },
    {
      "scene_id": "scene-003",
      "narration": "Başarıyı mutlak mülk saymak gururu büyütür. Onu emanet ve ikram bilmek ise hem sorumluluğu korur hem şükrü artırır. Meyveyi taşımak kıymetlidir; meyvenin gerçek sahibi olduğunu sanmak yanılgıdır.",
      "visual_note": "Hands offering grapes to others at a simple shared table.",
      "keywords": [
        "offering grapes",
        "shared table",
        "gratitude",
        "humility"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "26-soz-4-mebhas-hatime-aci-neden-kotulugun-kendisi-degildir",
    "test_day": "day-47",
    "short_id": "short-004",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
