// Derin Okuma — 26.Söz - 2.Makam short-003
// Filled for day-45; paste into the n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Kader Neden Suçu Silmez?",
    "description": "Kader yalnız sonucu değil, sebebi ve insanın tercihini de birlikte kuşatır. Bu yüzden kader, sorumluluktan kaçış bahanesi olamaz.\n\n#derinokuma #shorts #tefekkür #kader #sorumluluk #ahlâk",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "26-soz-2-mebhas-kader-varken-irade-ne-anlama-gelir-short-003-day-45"
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
      "narration": "“Zaten kaderde vardı” demek, yapılan kötülüğün suçunu siler mi? Hayır; çünkü kader yalnız sonucu değil, o sonuca götüren sebebi ve tercihi de kuşatır.",
      "visual_note": "A line of dominoes beginning to fall, clear cause and effect, vertical frame.",
      "keywords": [
        "dominoes",
        "cause and effect",
        "sequence",
        "responsibility"
      ]
    },
    {
      "scene_id": "scene-002",
      "narration": "İnsan zarar veren fiile kendi isteğiyle yönelmişse, ahlâkî yük bu yönelişten doğar. Gerçekleşmeyen ihtimaller üzerine hüküm kurup “Aynı sonuç yine olurdu” diyerek sorumluluk kaldırılamaz.",
      "visual_note": "A person stopping before a harmful action, tense hands relaxing slowly.",
      "keywords": [
        "restraint",
        "moral choice",
        "hands",
        "accountability"
      ]
    },
    {
      "scene_id": "scene-003",
      "narration": "Kader tercihi gizlemez; onu bütün gerçekliğiyle bilir. İnsanın her şeyi yaratmaması, seçiminin değersiz olduğu anlamına gelmez. Kader suçun bahanesi değil, İlâhî ilmin kuşatıcılığıdır. Kişiye düşen, hatasını yazgıya yüklemek yerine kendi yönelişini kabul etmek, zararı telafi etmek ve aynı tercihten dönmektir.",
      "visual_note": "A person facing their reflection honestly in a simple mirror.",
      "keywords": [
        "mirror reflection",
        "honesty",
        "accountability",
        "introspection"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "26-soz-2-mebhas-kader-varken-irade-ne-anlama-gelir",
    "test_day": "day-45",
    "short_id": "short-003",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
