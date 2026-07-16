// Derin Okuma - 30.Soz - 2.Maksad - 3.Nokta Shorts
// Short: short-005
// Filled Day-54 package. Paste this file into the n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Dünya Neden Bir Misafirhane Gibi?",
    "description": "Hayatın geçiciliği anlamsızlık değil, vazife ve hazırlık fikrini hatırlatan derin bir derstir. #derinokuma #shorts #tefekkür #hayat #fani #maneviyat",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "30-soz-2-maksad-3-nokta-zerreler-basibos-degil-varligin-sessiz-terbiyesi-short-005-day-54"
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
      "narration": "Dünya bazen bir misafirhane gibidir: gelen kalmaz, ama iz bırakır.",
      "visual_note": "quiet guest room with open window, morning curtains, soft light",
      "keywords": [
        "guest room",
        "open window",
        "temporary"
      ]
    },
    {
      "scene_id": "scene-002",
      "narration": "Zerreler de varlık sahnesine girer, bir hizmet görür ve sonra başka bir göreve hazırlanır. Geçicilik, boşluk anlamına gelmez.",
      "visual_note": "dust motes moving in sunbeam, slow contemplative interior",
      "keywords": [
        "dust motes",
        "sunbeam",
        "movement"
      ]
    },
    {
      "scene_id": "scene-003",
      "narration": "İnsan için de ders aynıdır. Burada kalıcı değiliz; ama burada yaptıklarımız kalıcı bir manaya bakabilir.",
      "visual_note": "person leaving footprints on quiet beach at sunset, reflective mood",
      "keywords": [
        "footprints",
        "sunset beach",
        "meaning"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "30-soz-2-maksad-3-nokta-zerreler-basibos-degil-varligin-sessiz-terbiyesi",
    "test_day": "day-54",
    "short_id": "short-005",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
