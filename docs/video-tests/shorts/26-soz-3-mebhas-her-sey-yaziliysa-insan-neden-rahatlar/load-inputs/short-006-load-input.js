// Derin Okuma — 26.Söz - 3.Mebhas short-006
// Filled for day-46; paste into the n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Kader İnsanı Neden Rahatlatır?",
    "description": "Kadere iman acıyı yok etmez; yaşananların sahipsiz ve anlamsız olmadığını bildirir. Kalp, her şeyi kontrol ederek değil, güveneceği merkezi tanıyarak rahatlar.\n\n#derinokuma #shorts #tefekkür #iman #kader #emniyet",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "26-soz-3-mebhas-her-sey-yaziliysa-insan-neden-rahatlar-short-006-day-46"
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
      "narration": "Her şey yazılıysa insan neden kederden emin olur? Çünkü yazılmış olmak, hayatın kör tesadüfler arasında sahipsizce sürüklendiği anlamına gelmez.",
      "visual_note": "A small boat guided by a lighthouse through evening mist.",
      "keywords": [
        "small boat",
        "lighthouse",
        "evening mist",
        "guidance"
      ]
    },
    {
      "scene_id": "scene-002",
      "narration": "Kadere iman, insanın hiç üzülmeyeceğini söylemez. Acı yine kalbi sızlatır; fakat yaşananların İlâhî ilim ve rahmetin dışında olmadığı bilinir. Bu güven, kederin insanı bütünüyle yutmasını engeller.",
      "visual_note": "A grieving person in a quiet room as warm light appears.",
      "keywords": [
        "quiet grief",
        "warm light",
        "inner comfort",
        "hope"
      ]
    },
    {
      "scene_id": "scene-003",
      "narration": "Kalp her ayrıntıyı kontrol ederek değil, güveneceği merkezi tanıyarak rahatlar. Yaşanan emekler, niyetler ve iyilikler kayıtsız değildir. Her şey yazılıysa, hiçbir şey sahipsiz değildir.",
      "visual_note": "A person standing peacefully under a vast sunrise sky.",
      "keywords": [
        "peaceful person",
        "sunrise sky",
        "quiet confidence",
        "trust"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "26-soz-3-mebhas-her-sey-yaziliysa-insan-neden-rahatlar",
    "test_day": "day-46",
    "short_id": "short-006",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];

