// Derin Okuma — 30.Söz - 2.Maksad - 2.Nokta Shorts short-003
// Filled content for n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Gözdeki Zerre Neden Tesadüf Değil?",
    "description": "Gözdeki hassas yerleşim, en küçük parçanın bile bütün bedenle ilişkili olduğunu hatırlatır. #derinokuma #shorts #tefekkür #iman #göz #hikmet",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "30-soz-2-maksad-2-nokta-bir-zerrenin-sessiz-sahitligi-short-003-day-53"
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
      "narration": "Gözdeki küçücük bir parça neden tesadüfe bırakılmaz? Çünkü göz, en küçük ölçüsüzlüğün bile büyük sonuç doğurabileceği hassas bir âlemdir.",
      "visual_note": "human eye macro with soft reflection and calm light",
      "keywords": [
        "human eye",
        "macro",
        "soft reflection"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Bağlantı",
      "narration": "Oradaki bir zerre yalnızca gözle değil; sinirlerle, damarlarla, yüzle ve bedenin bütünüyle ilişkilidir. Yerini doğru bulması, bütün yapıyı bilen bir düzeni düşündürür.",
      "visual_note": "abstract network of nerves and light, cinematic medical mood",
      "keywords": [
        "nerve network",
        "light",
        "precision"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Tefekkür",
      "narration": "Küçücük yerleşim, büyük bir planın içinde anlam kazanır. Görmek bile, en küçük parçaların sessiz uyumuyla mümkün olur.",
      "visual_note": "person looking through window at morning light",
      "keywords": [
        "window light",
        "reflection",
        "human eye"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "30-soz-2-maksad-2-nokta-bir-zerrenin-sessiz-sahitligi",
    "test_day": "day-53",
    "short_id": "short-003",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled",
    "status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
