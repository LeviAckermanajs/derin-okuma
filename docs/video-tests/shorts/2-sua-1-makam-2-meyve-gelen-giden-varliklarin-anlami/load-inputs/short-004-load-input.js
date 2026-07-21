// Derin Okuma — 2.Şua - 1.Makam - 2.Meyve Shorts short-004
// n8n Load Input Code node payload

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Çiçek Solunca Ne Kalır?",
    "description": "Solan bir çiçek bile hatıra, tohum, tefekkür ve sanat şahitliği bırakır; gidiş, her zaman silinmek değildir.\n\n#derinokuma #shorts #tefekkür #iman #çiçek #bahar",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "2-sua-1-makam-2-meyve-gelen-giden-varliklarin-anlami-short-004-day-56"
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
      "title": "Solma Anı",
      "narration": "Bir çiçek solunca geriye ne kalır? İlk bakışta sadece rengi gider, kokusu diner, güzelliği dağılır. İnsan da kolayca bunun tam bir kayıp olduğunu düşünür.",
      "visual_note": "vertical close up of a fading flower on a quiet windowsill",
      "keywords": [
        "fading flower",
        "windowsill",
        "quiet"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Görünmeyen İzler",
      "narration": "Fakat o çiçek yalnız görüntüsünden ibaret değildir. Bir hafızada güzellik bırakır, bir tohumla yeni hayata kapı açar, üzerindeki sanatla sahibini tanıtır. Kısa ömrü, geniş neticelere bağlanır.",
      "visual_note": "hands collecting seeds from a dry flower, vertical soft daylight",
      "keywords": [
        "seeds",
        "dry flower",
        "continuity"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Boşa Gitmeyen Güzellik",
      "narration": "Bu yüzden solmak, her şeyi bitirmek değildir. Tevhid nazarında giden güzellik, vazifesini yapmış ve anlamını bırakmış olur. Kayıp sandığımız şey, daha büyük bir düzenin içinde yerini alır.",
      "visual_note": "seeds blowing across a sunlit field, vertical hopeful atmosphere",
      "keywords": [
        "seeds in wind",
        "field",
        "hope"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "2-sua-1-makam-2-meyve-gelen-giden-varliklarin-anlami",
    "test_day": "day-56",
    "short_id": "short-004",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
