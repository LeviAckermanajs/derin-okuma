// Derin Okuma — 30.Söz - 2.Maksad - 2.Nokta Shorts short-002
// Filled content for n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Küçük Şey Nasıl Büyük İş Görür?",
    "description": "Acz içinde görülen büyük vazife, zerrenin kendi gücünü aşan bir emre bağlı olduğunu düşündürür. #derinokuma #shorts #tefekkür #iman #hikmet #kainat",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "30-soz-2-maksad-2-nokta-bir-zerrenin-sessiz-sahitligi-short-002-day-53"
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
      "title": "Hook",
      "narration": "Küçük bir şey, kendi gücünü aşan işleri nasıl görür? Zerreye bakınca acz görünür; fakat yaptığı işte hikmetli bir düzen okunur.",
      "visual_note": "tiny seed on fingertip with bright natural background",
      "keywords": [
        "tiny seed",
        "fingertip",
        "natural light"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Acz",
      "narration": "Zerre kendi kendine plan kurmaz, yol seçmez, sonucu hesaplamaz. Buna rağmen girdiği yerde anlamlı bir vazife üstlenir.",
      "visual_note": "small pebble beside flowing water, peaceful close up",
      "keywords": [
        "pebble",
        "flowing water",
        "calm nature"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Mana",
      "narration": "Bu çelişki insanı zerrenin kendisinden daha büyük bir kudrete yöneltir. Çünkü aciz olanın yaptığı iş, aczini aşan bir emri gösterir.",
      "visual_note": "single beam of light through clouds over valley",
      "keywords": [
        "beam of light",
        "valley",
        "reflection"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "30-soz-2-maksad-2-nokta-bir-zerrenin-sessiz-sahitligi",
    "test_day": "day-53",
    "short_id": "short-002",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled",
    "status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
