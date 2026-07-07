// Derin Okuma — 30.Söz - 1.Maksad - Mukaddime short-004
// Filled for day-48; paste into the n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Benlik Ne Zaman Perde Olur?",
    "description": "Benlik kendisini bağımsız merkez saydığında ince bir ölçü olmaktan çıkar, hakikati örten bir perdeye dönüşür. Sorun ‘ben’ demek değil, benliği mutlaklaştırmaktır.\n\n#derinokuma #shorts #tefekkür #iman #enaniyet #benlik",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "Sevgi-ve-Korku-short-004-day-48"
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
      "narration": "Benlik ne zaman görünmeyen bir perdeye dönüşür? İnsan kendisini bağımsız bir sahip ve her şeyin ölçüsü saymaya başladığında, ince çizgi kalınlaşır.",
      "visual_note": "thin thread becoming a thick rope, vertical dark background",
      "keywords": [
        "thin thread",
        "thick rope",
        "transformation"
      ]
    },
    {
      "scene_id": "scene-002",
      "narration": "O zaman kişi hoşuna gideni doğru, zoruna gideni yanlış görmeye başlar. Hakikate uymak yerine, hakikatin kendi isteklerine uymasını bekler.",
      "visual_note": "person surrounded by spinning city lights, vertical disoriented scene",
      "keywords": [
        "city lights",
        "disorientation",
        "self centered"
      ]
    },
    {
      "scene_id": "scene-003",
      "narration": "Sorun ‘ben’ demek değildir; benliği mutlaklaştırmaktır. İşaret kendisini göstermeye başladığında yön kaybolur ve aydınlık bir dünya, ağır bir perdenin arkasında kalır.",
      "visual_note": "heavy curtain blocking bright window light, vertical frame",
      "keywords": [
        "heavy curtain",
        "bright window",
        "blocked light"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "Sevgi-ve-Korku",
    "test_day": "day-48",
    "short_id": "short-004",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];

