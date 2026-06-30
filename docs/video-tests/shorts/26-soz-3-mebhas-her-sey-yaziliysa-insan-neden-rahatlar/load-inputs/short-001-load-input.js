// Derin Okuma — 26.Söz - 3.Mebhas short-001
// Filled for day-46; paste into the n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Çekirdek Geleceği Nasıl Taşır?",
    "description": "Küçücük bir çekirdek, gelecekteki ağacın ölçüsünü ve yönünü sessizce taşır. Basit bir başlangıçtaki düzen, kaderi görünür kılar.\n\n#derinokuma #shorts #tefekkür #iman #kader #çekirdek",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "26-soz-3-mebhas-her-sey-yaziliysa-insan-neden-rahatlar-short-001-day-46"
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
      "narration": "Bir çekirdeğin içinde koca bir ağacın planı nasıl saklanır? Avuçta sade görünen o küçük varlık, toprağa düştüğünde kökü, gövdeyi, dalları ve meyveyi belirli bir düzenle ortaya çıkarır.",
      "visual_note": "A seed in an open palm above rich soil, vertical macro cinematic shot.",
      "keywords": [
        "seed in palm",
        "rich soil",
        "macro",
        "potential"
      ]
    },
    {
      "scene_id": "scene-002",
      "narration": "Çekirdeğin içinde yetişkin ağacın maddî parçaları yoktur. Yine de hangi ağacın doğacağı, yaprakların nasıl açılacağı ve meyvenin neye benzeyeceği bellidir.",
      "visual_note": "Time-lapse of a seed sprouting into a young tree, vertical frame.",
      "keywords": [
        "seed sprouting",
        "young tree",
        "time lapse",
        "growth"
      ]
    },
    {
      "scene_id": "scene-003",
      "narration": "Bu küçük başlangıç, gelecekteki hayatın özlü bir fihristi gibidir. Şuursuz maddelerin böylesine ölçülü bir sonuca yönelmesi, varlığın tesadüfe bırakılmadığını düşündürür. Kader, önce hayatın içindeki bu sessiz ölçüde görünür.",
      "visual_note": "Tree branches bearing fruit in warm morning light, slow upward movement.",
      "keywords": [
        "fruit tree",
        "morning light",
        "branches",
        "natural order"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "26-soz-3-mebhas-her-sey-yaziliysa-insan-neden-rahatlar",
    "test_day": "day-46",
    "short_id": "short-001",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];

