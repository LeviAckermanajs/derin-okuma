// Derin Okuma — 2.Şua - 1.Makam - 1.Meyve Shorts short-005
// n8n Load Input Code node payload

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Tevhid Kalbi Nasıl Toparlar?",
    "description": "Hayatı ayrı güçlere ve dağınık kaynaklara bağlamak kalbi yorar. Tevhid, her şeyi tek bir rahmet ve sahiplik altında birleştirerek içe ferahlık verir.\n\n#derinokuma #shorts #tefekkür #tevhid #kalp #maneviyat",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "2-sua-1-makam-1-meyve-tevhid-daginik-gorunen-hayati-birlestiren-bakis-short-005-day-55"
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
      "title": "Dağılan Kalp",
      "narration": "İnsan neden sahipsizlik hissiyle yorulur? Her ihtiyacı ayrı kapıya, her güzelliği ayrı kaynağa, her sonucu ayrı güce bağladığında kalp dağılır. Hayat kalabalıklaşır, anlam parçalanır.",
      "visual_note": "person standing in a busy city crowd, vertical slow motion, muted tones",
      "keywords": [
        "city crowd",
        "loneliness",
        "fragmented"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Tek Merkez",
      "narration": "Tevhid bu dağınıklığı toplar. Nimet rahmete, şifa şefkate, güzellik cemale, canlılar sahipliğe bağlanır. İnsan aynı dünyada yaşar; fakat artık her şey tek bir anlam merkezine yönelir.",
      "visual_note": "roads converging toward a bright horizon, vertical aerial perspective",
      "keywords": [
        "converging roads",
        "horizon",
        "unity"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Ferahlık",
      "narration": "Kalp tek bir rahmete yöneldiğinde yükler hafifler. Çünkü insan yalnız sebeplerin arasında kalmadığını hisseder. Hiçbir nimet sahipsiz, hiçbir ihtiyaç duyulmamış değildir.",
      "visual_note": "wide open landscape after rain with sunlight, vertical peaceful scene",
      "keywords": [
        "after rain",
        "sunlight",
        "peace"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "2-sua-1-makam-1-meyve-tevhid-daginik-gorunen-hayati-birlestiren-bakis",
    "test_day": "day-55",
    "short_id": "short-005",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
