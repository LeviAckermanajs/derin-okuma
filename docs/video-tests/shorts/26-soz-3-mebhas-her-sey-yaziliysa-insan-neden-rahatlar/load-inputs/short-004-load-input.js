// Derin Okuma — 26.Söz - 3.Mebhas short-004
// Filled for day-46; paste into the n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "İnsan Yükünü Nasıl Hafifletir?",
    "description": "Sonsuz isteklerle sınırlı güç arasındaki gerilim insanı yorar. Kadere güvenmek, vazifeyi bırakmadan neticenin yükünü Allah’a teslim etmektir.\n\n#derinokuma #shorts #tefekkür #kader #tevekkül #huzur",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "26-soz-3-mebhas-her-sey-yaziliysa-insan-neden-rahatlar-short-004-day-46"
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
      "narration": "İnsan neden kontrol edemediği her şeyi omzunda taşımaya çalışır? Sevdiklerini korumak, geleceği güvenceye almak ve bütün ihtimalleri yönetmek ister; fakat gücü bu arzular kadar geniş değildir.",
      "visual_note": "A worried person surrounded by clocks and maps, vertical cinematic frame.",
      "keywords": [
        "worried person",
        "clocks",
        "maps",
        "control"
      ]
    },
    {
      "scene_id": "scene-002",
      "narration": "Hava, sağlık, zaman, insanlar ve sonuçlar bütünüyle bizim irademize bağlı değildir. Hepsini yönetmek zorundaymış gibi yaşamak, küçük bir omza koca bir dünya yükler.",
      "visual_note": "A lone person carrying a symbolic globe uphill.",
      "keywords": [
        "carrying globe",
        "uphill",
        "heavy burden",
        "limited strength"
      ]
    },
    {
      "scene_id": "scene-003",
      "narration": "Kadere güvenmek, vazifeyi terk etmek değil, taşınamayacak neticeyi Allah’a bırakmaktır. İnsan doğru adımı atar, sebeplere başvurur ve hükmedemediği kısmı teslim eder. Böylece gayret devam ederken kalp de nefes alır.",
      "visual_note": "A person setting down a heavy bag and walking toward sunrise.",
      "keywords": [
        "setting down burden",
        "sunrise path",
        "relief",
        "trust"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "26-soz-3-mebhas-her-sey-yaziliysa-insan-neden-rahatlar",
    "test_day": "day-46",
    "short_id": "short-004",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];

