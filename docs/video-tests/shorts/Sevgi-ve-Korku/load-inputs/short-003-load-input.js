// Derin Okuma — 30.Söz - 1.Maksad - Mukaddime short-003
// Filled for day-48; paste into the n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Gerçekten Neye Sahibiz?",
    "description": "Bedenimiz, zamanımız ve imkânlarımız değişirken sahiplik iddiamızın sınırı görünür. Benlik, mutlak malikiyet için değil, hakiki sahibi tanımak için verilmiş bir ölçüdür.\n\n#derinokuma #shorts #tefekkür #iman #emanet #sahiplik",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "Sevgi-ve-Korku-short-003-day-48"
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
      "narration": "‘Benim’ dediğimiz şeylere gerçekten sahip miyiz? Bedenimiz, evimiz, zamanımız ve imkânlarımız sürekli değişiyor; hiçbiri irademizle kalıcı hâle gelmiyor.",
      "visual_note": "aging hands holding a house key, vertical cinematic close-up",
      "keywords": [
        "aging hands",
        "house key",
        "impermanence"
      ]
    },
    {
      "scene_id": "scene-002",
      "narration": "İnsanın sahiplik hissi, kuma çizilmiş geçici bir sınır gibidir. Hakiki malikiyet iddiası için değil, bütün mülkün gerçek sahibini anlayabilmek için bir ölçü vazifesi görür.",
      "visual_note": "line drawn in sand beside endless sea, vertical composition",
      "keywords": [
        "line in sand",
        "endless sea",
        "boundary"
      ]
    },
    {
      "scene_id": "scene-003",
      "narration": "Emanet ile mülk arasındaki fark anlaşılınca insan hem çalışır hem de yükünü hafifletir. Kendisine verileni korur; fakat onu yaratmış ve sonsuza kadar elinde tutabilecekmiş gibi davranmaz.",
      "visual_note": "open hands carefully holding a young plant, soft vertical shot",
      "keywords": [
        "open hands",
        "young plant",
        "stewardship"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "Sevgi-ve-Korku",
    "test_day": "day-48",
    "short_id": "short-003",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];

