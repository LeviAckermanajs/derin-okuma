// Derin Okuma — 26.Söz - 3.Mebhas short-003
// Filled for day-46; paste into the n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Kader Hürriyeti Neden Yok Etmez?",
    "description": "Kader, insanın seçimini silmez; nefsin her şeyi yönetme iddiasını sınırlar. Sorumluluk korunurken taşınamayacak yükler hafifler.\n\n#derinokuma #shorts #tefekkür #iman #kader #hürriyet",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "26-soz-3-mebhas-her-sey-yaziliysa-insan-neden-rahatlar-short-003-day-46"
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
      "narration": "Kadere inanmak insanın hürriyetini elinden alır mı? Her şeyin İlâhî ilimde bilinmesi, ilk anda görünmez bir zincir gibi algılanabilir.",
      "visual_note": "A person facing an open gate beyond a shadowed corridor, vertical frame.",
      "keywords": [
        "open gate",
        "shadowed corridor",
        "freedom",
        "question"
      ]
    },
    {
      "scene_id": "scene-002",
      "narration": "Fakat bilmek, zorlamak değildir. İnsanın niyeti ve tercihi gerçektir; sorumluluk da bu seçimle ilgilidir. Kader, iradeyi yok saymadan bütün hayatı kuşatan İlâhî bilgidir.",
      "visual_note": "A person freely choosing one of two sunlit paths.",
      "keywords": [
        "two paths",
        "free choice",
        "sunlight",
        "decision"
      ]
    },
    {
      "scene_id": "scene-003",
      "narration": "Kaderin sınırladığı şey kalbin hürriyeti değil, nefsin her şeyi yönetme iddiasıdır. İnsan vazifesini yapar ama sonuçların mutlak sahibi olmadığını bilir. Böylece sorumluluk kalır, gereksiz ağırlık azalır.",
      "visual_note": "An opening hand releasing a heavy stone beside a calm road.",
      "keywords": [
        "open hand",
        "heavy stone",
        "calm road",
        "release"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "26-soz-3-mebhas-her-sey-yaziliysa-insan-neden-rahatlar",
    "test_day": "day-46",
    "short_id": "short-003",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];

