// Derin Okuma — 2.Şua - 1.Makam - 1.Meyve Shorts short-004
// n8n Load Input Code node payload

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Güzellik Neden Aynaya Dönüşür?",
    "description": "Bir çiçeğin kısa ömrü, taşıdığı güzelliği değersizleştirmez. Tevhid bakışı, fani güzelliği bâki bir cemalin işareti olarak okutur.\n\n#derinokuma #shorts #tefekkür #güzellik #kâinat #iman",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "2-sua-1-makam-1-meyve-tevhid-daginik-gorunen-hayati-birlestiren-bakis-short-004-day-55"
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
      "title": "Kısa Ömürlü Güzellik",
      "narration": "Bir çiçek neden küçük bir ayna gibidir? Ömrü kısadır; açar, güzelleşir ve bir gün solar. Fakat renk, koku ve ölçü bir araya geldiğinde kalbe daha büyük bir güzelliği hatırlatır.",
      "visual_note": "single flower blooming in morning dew, vertical macro cinematic shot",
      "keywords": [
        "flower",
        "dew",
        "beauty"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Aynanın Işığı",
      "narration": "Küçük bir ayna güneşe döndüğünde kendinden büyük bir ışığı taşır. Çiçek de yalnız kendi adına okunmadığında böyle olur. Fani güzellik, bâki bir cemalin işaretine dönüşür.",
      "visual_note": "small mirror reflecting sunlight near flowers, vertical poetic shot",
      "keywords": [
        "mirror",
        "sunlight",
        "flowers"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Derinleşen Bakış",
      "narration": "Bu bakış güzelliği azaltmaz; tam tersine derinleştirir. İnsan gördüğü şeyi tüketilecek bir süs gibi değil, kendisine konuşan bir işaret gibi seyreder. Güzellik sahibine bağlanınca kalpte yer eder.",
      "visual_note": "person calmly watching flowers in a garden at golden hour, vertical frame",
      "keywords": [
        "garden",
        "golden hour",
        "contemplation"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "2-sua-1-makam-1-meyve-tevhid-daginik-gorunen-hayati-birlestiren-bakis",
    "test_day": "day-55",
    "short_id": "short-004",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
