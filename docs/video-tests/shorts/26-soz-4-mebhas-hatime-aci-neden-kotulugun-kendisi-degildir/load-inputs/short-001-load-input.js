// Derin Okuma — Acı Neden Her Zaman Kötülük Değildir?
// Filled for day-47; paste into the n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Acı Neden Her Zaman Kötülük Değildir?",
    "description": "Acı inkâr edilmeden de onun tek anlamının zarar olmadığı görülebilir. Bazı zorluklar sabrı, şefkati ve tevekkülü görünür kılar.\n\n#derinokuma #shorts #tefekkür #iman #sabır #musibet",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "26-soz-4-mebhas-hatime-aci-neden-kotulugun-kendisi-degildir-short-001-day-47"
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
      "narration": "Acı, neden her zaman kötülüğün kendisi değildir? Musibet ilk anda yalnızca kayıp ve bozulma gibi görünür; çünkü insan yaşadığını çoğu zaman o an verdiği elemle ölçer.",
      "visual_note": "A solitary person watching rain through a window, vertical cinematic frame.",
      "keywords": [
        "rainy window",
        "solitary person",
        "pain",
        "reflection"
      ]
    },
    {
      "scene_id": "scene-002",
      "narration": "Fakat bazı zorluklar insanda uyuyan sabrı, dayanıklılığı ve şefkati harekete geçirir. Rahatlıkta görünmeyen güçler, sınanmanın içinde belirginleşebilir.",
      "visual_note": "A hiker steadily climbing a steep trail at sunrise, vertical shot.",
      "keywords": [
        "hiker",
        "steep trail",
        "sunrise",
        "endurance"
      ]
    },
    {
      "scene_id": "scene-003",
      "narration": "Bu, acıyı küçümsemek değildir. Bir musibet gerçekten ağır olabilir ve yine de insanın henüz göremediği bir hikmet yönü taşıyabilir. Olgun bakış, elemi kabul ederken rahmet ihtimaline açık kalır.",
      "visual_note": "Dark clouds opening to soft light over a mountain valley.",
      "keywords": [
        "cloud opening",
        "mountain valley",
        "soft light",
        "hope"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "26-soz-4-mebhas-hatime-aci-neden-kotulugun-kendisi-degildir",
    "test_day": "day-47",
    "short_id": "short-001",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
