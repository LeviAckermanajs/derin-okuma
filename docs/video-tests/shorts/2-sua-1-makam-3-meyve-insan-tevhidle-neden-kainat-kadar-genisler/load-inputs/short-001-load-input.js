// Derin Okuma — 2.Şua - 1.Makam - 3.Meyve Shorts short-001
// n8n Load Input Code node payload

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "İnsan Neden Bu Kadar Geniş?",
    "description": "İnsanın kalbi bugüne sığmaz; tevhid bu genişliği korkudan çıkarıp anlamlı bir bağa dönüştürür.\n\n#derinokuma #shorts #tefekkür #iman #tevhid #insan",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "2-sua-1-makam-3-meyve-insan-tevhidle-neden-kainat-kadar-genisler-short-001-day-57"
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
      "title": "Hook",
      "narration": "İnsan neden küçücük bedeniyle kâinat kadar geniş arzular taşır? Bir gününü yaşarken geçmişi düşünür, geleceği merak eder, sevdiği her şeyin devamını ister. Kalbi, bulunduğu ana sığmayacak kadar geniştir.",
      "visual_note": "vertical shot of a person under vast starry sky, contemplative mood",
      "keywords": [
        "starry sky",
        "human scale",
        "contemplation"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Sınırlı Güç",
      "narration": "Fakat insanın gücü bu arzular kadar geniş değildir. Sevdiğini korumak ister, ama her şeyi tutamaz. İhtiyaçları çoktur; imkânı ise sınırlıdır.",
      "visual_note": "vertical close up of open hands in soft morning light",
      "keywords": [
        "open hands",
        "morning light",
        "vulnerability"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Genişliğin Merkezi",
      "narration": "Tevhid, bu geniş kalbi dağınık korkular içinde bırakmaz. İnsan sevdiği, düşündüğü ve beklediği şeyleri tek bir rahmet düzeni içinde görmeye başlar. Böylece küçücük hayatı, büyük bir mana ile genişler.",
      "visual_note": "vertical sunrise over wide mountains and valley, peaceful cinematic shot",
      "keywords": [
        "sunrise",
        "mountains",
        "meaning"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "2-sua-1-makam-3-meyve-insan-tevhidle-neden-kainat-kadar-genisler",
    "test_day": "day-57",
    "short_id": "short-001",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled",
    "status": "ready_for_n8n"
  }
};

return [{ json: { raw_input: rawInput } }];
