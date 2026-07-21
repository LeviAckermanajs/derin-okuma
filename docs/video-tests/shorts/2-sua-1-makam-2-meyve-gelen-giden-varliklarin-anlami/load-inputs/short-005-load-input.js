// Derin Okuma — 2.Şua - 1.Makam - 2.Meyve Shorts short-005
// n8n Load Input Code node payload

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Ayrılık Neden Son Değildir?",
    "description": "Ayrılık kalbi acıtır; fakat iman, gidenlerin sahipsizliğe ve neticesizliğe bırakılmadığını hatırlatır.\n\n#derinokuma #shorts #tefekkür #iman #ayrılık #teselli",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "2-sua-1-makam-2-meyve-gelen-giden-varliklarin-anlami-short-005-day-56"
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
      "title": "Acının Gerçekliği",
      "narration": "Ayrılık neden sadece karanlık bir son değildir? Elbette ayrılık acı verir. Gidenin ardından kalpte bir boşluk açılır ve insan bu boşluğu kolayca yokluk sanır.",
      "visual_note": "person standing alone at a quiet train station, vertical dusk shot",
      "keywords": [
        "train station",
        "alone",
        "departure"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Rahmete Bakan Taraf",
      "narration": "Fakat iman, ayrılığı sahipsizliğe bırakmaz. Giden varlık, onu var eden kudretin ilmi ve rahmeti dışında kalmaz. Vazifesi, izi ve neticesi başıboş dağılmaz.",
      "visual_note": "soft sunrise light over a quiet cemetery from a respectful distance",
      "keywords": [
        "sunrise",
        "cemetery",
        "mercy"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Sükûnet",
      "narration": "Bu bakış kalbin acısını ucuz bir teselliyle silmez. Ama acıya daha derin bir anlam verir. İnsan, gidişin arkasında hikmetsiz bir karanlık değil, rahmete açılan bir kapı düşünür.",
      "visual_note": "calm lake at dawn with a person sitting silently, vertical peaceful frame",
      "keywords": [
        "lake dawn",
        "silence",
        "peace"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "2-sua-1-makam-2-meyve-gelen-giden-varliklarin-anlami",
    "test_day": "day-56",
    "short_id": "short-005",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
