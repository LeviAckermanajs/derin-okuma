// Derin Okuma — 2.Şua - 1.Makam - 2.Meyve Shorts short-001
// n8n Load Input Code node payload

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Güzellik Neden Çabuk Gider?",
    "description": "Güzellik kısa görünse de bütünüyle kaybolmaz; bıraktığı anlam, iz ve vazife daha geniş bir düzene bağlanır.\n\n#derinokuma #shorts #tefekkür #iman #güzellik #tevhid",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "2-sua-1-makam-2-meyve-gelen-giden-varliklarin-anlami-short-001-day-56"
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
      "narration": "Güzel olan şeyler neden bu kadar çabuk gidiyor? Bir çiçek açıyor, kalbi sevindiriyor, sonra sessizce soluyor. İlk bakışta bu, insana sadece kayıp gibi geliyor.",
      "visual_note": "vertical close up of a blooming flower with soft morning light",
      "keywords": [
        "flower",
        "morning light",
        "beauty"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Kısa Görünen Ömür",
      "narration": "Fakat kısa görünmek, anlamsız olmak demek değildir. O çiçek rengiyle, kokusuyla, düzeniyle ve bıraktığı izlerle çok şey söyler. Güzelliği sadece birkaç güne sıkışmaz.",
      "visual_note": "flower petals with dew in a quiet garden, vertical cinematic shot",
      "keywords": [
        "petals",
        "dew",
        "garden"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Kalan Mana",
      "narration": "Tevhid bakışı, giden güzelliği mutlak yokluk olarak okutmaz. Güzellik kaynağına bağlanır, vazifesini bırakır ve gözümüzden çekilir. Böylece solan şey bile kalpte anlamlı bir iz bırakır.",
      "visual_note": "falling petals in golden sunlight, peaceful vertical slow motion",
      "keywords": [
        "falling petals",
        "golden light",
        "meaning"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "2-sua-1-makam-2-meyve-gelen-giden-varliklarin-anlami",
    "test_day": "day-56",
    "short_id": "short-001",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
