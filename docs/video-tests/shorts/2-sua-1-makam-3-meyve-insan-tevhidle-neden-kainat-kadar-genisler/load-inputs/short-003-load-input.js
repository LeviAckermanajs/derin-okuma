// Derin Okuma — 2.Şua - 1.Makam - 3.Meyve Shorts short-003
// n8n Load Input Code node payload

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Şefkat Neden Acıtır?",
    "description": "Şefkat sevilenleri sahipsiz ve yokluğa gidiyor zannederse ağırlaşır; iman onu daha büyük bir rahmete emanet etmeyi öğretir.\n\n#derinokuma #shorts #tefekkür #iman #şefkat #rahmet",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "2-sua-1-makam-3-meyve-insan-tevhidle-neden-kainat-kadar-genisler-short-003-day-57"
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
      "narration": "Şefkat neden bazen insanın kalbini en derinden yaralar? Çünkü şefkat yalnız kendi acısını değil, sevilenlerin acısını da taşır. Bir ayrılık, kalpte çok büyük bir sarsıntıya dönüşebilir.",
      "visual_note": "vertical rain on window with soft indoor silhouette, calm sadness",
      "keywords": [
        "rain window",
        "silhouette",
        "compassion"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Çaresiz His",
      "narration": "İnsan korumak ister, fakat her şeyi koruyamaz. Sevdiği bir varlığın incinmesi, kendi gücünün sınırını hatırlatır. Şefkat, teselli bulamazsa çaresizliğe döner.",
      "visual_note": "vertical parent holding child hand in muted soft light",
      "keywords": [
        "parent child",
        "soft light",
        "care"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Emanet Bilinci",
      "narration": "Tevhid, sevilen varlıkların sahipsiz olmadığını bildirir. Kalp, kendi gücünün yetmediği yerde daha büyük bir rahmete dayanmayı öğrenir. Böylece şefkat kırılmaz; daha derin bir teslimiyet kazanır.",
      "visual_note": "vertical mother and child walking in golden field, gentle peaceful mood",
      "keywords": [
        "golden field",
        "mercy",
        "trust"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "2-sua-1-makam-3-meyve-insan-tevhidle-neden-kainat-kadar-genisler",
    "test_day": "day-57",
    "short_id": "short-003",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled",
    "status": "ready_for_n8n"
  }
};

return [{ json: { raw_input: rawInput } }];
