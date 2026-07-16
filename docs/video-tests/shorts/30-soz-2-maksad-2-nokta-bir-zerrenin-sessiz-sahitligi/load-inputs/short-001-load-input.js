// Derin Okuma — 30.Söz - 2.Maksad - 2.Nokta Shorts short-001
// Filled content for n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Zerre Neden Başıboş Değil?",
    "description": "Küçük bir zerrenin düzen içindeki vazifesi, başıboşluk fikrinden daha derin bir anlam taşır. #derinokuma #shorts #tefekkür #iman #zerre #tevhid",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "30-soz-2-maksad-2-nokta-bir-zerrenin-sessiz-sahitligi-short-001-day-53"
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
      "narration": "Bir zerre gerçekten başıboş olabilir mi? Küçücük, cansız ve şuursuz görünen bir parça, girdiği yerde düzeni bozmadan vazife görüyor.",
      "visual_note": "tiny dust particles floating in sunlight, macro cinematic shot",
      "keywords": [
        "dust particles",
        "sunlight",
        "macro"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Düzen",
      "narration": "Eğer hareket sadece rastgele olsaydı, sonuçlarda bu kadar ölçü ve uyum beklenmezdi. Zerre, bulunduğu bütünün ahengine katılıyor.",
      "visual_note": "leaf veins in soft morning light, slow close up",
      "keywords": [
        "leaf veins",
        "morning light",
        "order"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Sonuç",
      "narration": "Bu yüzden küçük bir şey, büyük bir hakikate kapı açıyor. Başına buyruk bir hareket değil, emre bağlı bir düzen görünüyor.",
      "visual_note": "calm sunrise landscape with soft mist",
      "keywords": [
        "sunrise",
        "mist",
        "peaceful landscape"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "30-soz-2-maksad-2-nokta-bir-zerrenin-sessiz-sahitligi",
    "test_day": "day-53",
    "short_id": "short-001",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled",
    "status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
