// Derin Okuma — 30.Söz - 1.Maksad - Mukaddime short-006
// Filled for day-48; paste into the n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Benlik Nasıl Anahtara Dönüşür?",
    "description": "Çözüm kişiliği ve iradeyi silmek değil, benliği ayna ve ölçü olarak kullanmaktır. Aynı ‘ben’, insanı ya kâinata açar ya da kendi içine kilitler.\n\n#derinokuma #shorts #tefekkür #iman #ene #farkındalık",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "Sevgi-ve-Korku-short-006-day-48"
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
      "narration": "Benliği yok etmek mi, doğru okumak mı gerekir? Çözüm kişiliği silmek, iradeyi bırakmak veya kendini değersiz görmek değildir.",
      "visual_note": "confident calm person walking on a balanced path, vertical shot",
      "keywords": [
        "balanced path",
        "calm person",
        "confidence"
      ]
    },
    {
      "scene_id": "scene-002",
      "narration": "Benlik ayna olduğunda kendisindeki güzelliklerin kaynağını gösterir. Ölçü olduğunda sınırlı güçten sonsuz kudrete, küçük bilgiden kuşatıcı ilme açılır.",
      "visual_note": "mirror reflecting sunlight toward a vast sky, vertical cinematic frame",
      "keywords": [
        "mirror reflection",
        "sunlight",
        "vast sky"
      ]
    },
    {
      "scene_id": "scene-003",
      "narration": "Aynı ‘ben’, insanı ya kâinata açar ya da kendi içine kilitler. Anahtarın yönünü belirleyen şey, kendimizi mutlak sahip mi yoksa emanetçi mi gördüğümüzdür.",
      "visual_note": "key opening a doorway onto a luminous universe, vertical shot",
      "keywords": [
        "key",
        "open doorway",
        "luminous universe"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "Sevgi-ve-Korku",
    "test_day": "day-48",
    "short_id": "short-006",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];

