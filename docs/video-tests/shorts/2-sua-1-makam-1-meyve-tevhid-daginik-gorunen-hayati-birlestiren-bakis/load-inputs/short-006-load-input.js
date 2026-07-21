// Derin Okuma — 2.Şua - 1.Makam - 1.Meyve Shorts short-006
// n8n Load Input Code node payload

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Şirk Varlığın Hakkını Nasıl Örter?",
    "description": "Nimeti sebeplere ve tesadüfe vermek, onun taşıdığı rahmet ve sahiplik anlamını örter. Tevhid, yalnız inancı değil; varlığa bakıştaki adaleti de düzeltir.\n\n#derinokuma #shorts #tefekkür #şirk #tevhid #iman",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "2-sua-1-makam-1-meyve-tevhid-daginik-gorunen-hayati-birlestiren-bakis-short-006-day-55"
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
      "title": "Yanlış Sahiplik",
      "narration": "Şirk neden sadece kişisel bir hata değildir? Çünkü nimeti sahibinden koparıp sebeplere ve tesadüfe vermek, onun taşıdığı rahmet anlamını örter. Hediye kalır; fakat hediyenin sahibi unutulur.",
      "visual_note": "wrapped gift left in shadow with light nearby, vertical symbolic shot",
      "keywords": [
        "gift",
        "shadow",
        "forgetfulness"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Varlığın Şerefi",
      "narration": "Bir canlı Allah'a ait olarak görüldüğünde kıymeti büyür. Küçük bir karınca bile sahipsiz bir ayrıntı değildir. Onun varlığı, ilahî mülkiyet içinde şeref kazanır.",
      "visual_note": "macro ant walking on leaf with sunlight, vertical nature footage",
      "keywords": [
        "ant",
        "leaf",
        "dignity"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Adaletli Bakış",
      "narration": "Tevhid, yalnız inancı düzeltmez; varlığa bakıştaki adaleti de düzeltir. Çiçeği, yavruyu, hastayı, şifayı ve insanı sahipsiz bırakmaz. Her şeyi hakiki sahibine bağlayarak değerini korur.",
      "visual_note": "wide nature scene with flowers, animals and warm sunrise, vertical cinematic close",
      "keywords": [
        "nature",
        "sunrise",
        "stewardship"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "2-sua-1-makam-1-meyve-tevhid-daginik-gorunen-hayati-birlestiren-bakis",
    "test_day": "day-55",
    "short_id": "short-006",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
