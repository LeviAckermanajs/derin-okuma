// Derin Okuma - 30.Soz - 2.Maksad - 3.Nokta Shorts
// Short: short-004
// Filled Day-54 package. Paste this file into the n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Tesadüf Bu Düzeni Nasıl Açıklar?",
    "description": "Varlıkta hem çeşitlilik hem ölçü, hem hareket hem hedef görünür; bu düzen insanı daha derin bir okumaya çağırır. #derinokuma #shorts #tefekkür #kainat #hikmet #düzen",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "30-soz-2-maksad-3-nokta-zerreler-basibos-degil-varligin-sessiz-terbiyesi-short-004-day-54"
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
      "narration": "Tesadüf, bu kadar ince düzeni taşımakta yetersiz kalır.",
      "visual_note": "honeycomb macro pattern, golden natural geometry, calm science mood",
      "keywords": [
        "honeycomb",
        "natural geometry",
        "order"
      ]
    },
    {
      "scene_id": "scene-002",
      "narration": "Aynı toprakta farklı tohumlar bambaşka hayatlara dönüşür. Biri başak olur, biri çiçek, biri ağaç.",
      "visual_note": "different seeds and sprouts in soil, soft daylight, macro shot",
      "keywords": [
        "seeds",
        "sprouts",
        "soil"
      ]
    },
    {
      "scene_id": "scene-003",
      "narration": "Bu kadar çeşitlilik içinde ölçü korunuyorsa, varlık kör bir dağılmadan ibaret değildir. Hareketin arkasında ilim ve takdir okunur.",
      "visual_note": "aerial view of orderly fields, geometric landscape, gentle sunlight",
      "keywords": [
        "orderly fields",
        "geometry",
        "sunlight"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "30-soz-2-maksad-3-nokta-zerreler-basibos-degil-varligin-sessiz-terbiyesi",
    "test_day": "day-54",
    "short_id": "short-004",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
