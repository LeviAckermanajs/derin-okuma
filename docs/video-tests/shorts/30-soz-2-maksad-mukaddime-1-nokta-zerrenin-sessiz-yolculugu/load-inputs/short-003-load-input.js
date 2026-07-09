// Derin Okuma — 30.Söz - 2.Maksad - Mukaddime - 1.Nokta Shorts
// Short: short-003
// Content filled for day-52 production.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Bir Zerre Her Şeyi Bilebilir mi?",
    "description": "Zerrelerin düzenli hareketi, kör rastlantıdan çok kuşatıcı bir ilmi düşündürür. #derinokuma #shorts #tefekkür #iman #tevhid #akıl",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "30-soz-2-maksad-mukaddime-1-nokta-zerrenin-sessiz-yolculugu-short-003-day-52"
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
      "narration": "Bir zerre her girdiği yeri bilmek zorunda kalsaydı ne olurdu? Bir yaprağın ölçüsünü, bir meyvenin yapısını, bir bedenin dengesini tanıması gerekirdi.",
      "visual_note": "abstract particle moving through leaf cells and fruit texture",
      "keywords": [
        "particle",
        "leaf cells",
        "fruit texture"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "İmkânsız Yük",
      "narration": "Bu, küçücük bir şeye neredeyse sınırsız bilgi ve kudret yüklemek demektir. Akıl böyle bir açıklamada rahat etmez; çünkü sonuçlar çok düzenli, sebep ise çok küçüktür.",
      "visual_note": "microscope view of complex cells, thoughtful scientific mood",
      "keywords": [
        "microscope",
        "complex cells",
        "thoughtful"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Tevhid",
      "narration": "Daha sade ve daha güçlü açıklama şudur: Zerre kendi başına iş görmez. Her şeyi bilen bir kudretin emriyle yerini bulur, vazifesini görür.",
      "visual_note": "wide nature landscape connected by soft beams of light",
      "keywords": [
        "nature unity",
        "light beams",
        "landscape"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "30-soz-2-maksad-mukaddime-1-nokta-zerrenin-sessiz-yolculugu",
    "test_day": "day-52",
    "short_id": "short-003",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
