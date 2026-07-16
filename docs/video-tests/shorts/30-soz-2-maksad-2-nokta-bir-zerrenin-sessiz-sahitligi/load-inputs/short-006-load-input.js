// Derin Okuma — 30.Söz - 2.Maksad - 2.Nokta Shorts short-006
// Filled content for n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Küçük Şeyler Neden Büyük Ders Verir?",
    "description": "Küçük görünen şeyler, dikkatli bakana düzeni, vazifeyi ve birlik fikrini hatırlatır. #derinokuma #shorts #tefekkür #iman #maneviyat #kainat",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "30-soz-2-maksad-2-nokta-bir-zerrenin-sessiz-sahitligi-short-006-day-53"
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
      "narration": "Küçük şeyleri değersiz görmek, bazen en büyük dersi kaçırmaktır. Çünkü hakikat her zaman uzaklarda ve devasa görüntülerde saklı değildir.",
      "visual_note": "macro sand grain on fingertip with beach background",
      "keywords": [
        "sand grain",
        "fingertip",
        "macro detail"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Bakış",
      "narration": "Bir zerre, bir lokma, bir gözdeki hassas denge; hepsi dikkatli bakana aynı şeyi hatırlatır. Düzen var, vazife var, ölçü var.",
      "visual_note": "person thoughtfully watching sunlight through leaves",
      "keywords": [
        "thoughtful person",
        "sunlight leaves",
        "reflection"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Kapanış",
      "narration": "İnsan bakmayı öğrenince küçük parçalar sessiz şahitlere dönüşür. Kâinat, dağınık bir kalabalık değil; birlik içinde okunan büyük bir kitap gibi görünür.",
      "visual_note": "peaceful sunrise over misty landscape, contemplative mood",
      "keywords": [
        "sunrise",
        "misty landscape",
        "contemplation"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "30-soz-2-maksad-2-nokta-bir-zerrenin-sessiz-sahitligi",
    "test_day": "day-53",
    "short_id": "short-006",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled",
    "status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
