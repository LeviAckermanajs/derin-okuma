// Derin Okuma — İyilik Gurura Nasıl Dönüşür?
// Filled for day-47; paste into the n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "İyilik Gurura Nasıl Dönüşür?",
    "description": "Nefis, faydalı işleri bile üstünlük payına çevirebilir. Hizmet şükür ve vazife olarak görüldüğünde iyilik benliği değil sorumluluğu büyütür.\n\n#derinokuma #shorts #tefekkür #hizmet #nefis #tevazu",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "26-soz-4-mebhas-hatime-aci-neden-kotulugun-kendisi-degildir-short-005-day-47"
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
      "narration": "İyilik yapmak insanı nasıl gurura sürükleyebilir? Nefis bazen faydalı bir işi, başkalarından üstün olduğuna dair sessiz bir delile dönüştürür.",
      "visual_note": "A volunteer receiving praise while others work quietly, vertical frame.",
      "keywords": [
        "volunteer",
        "praise",
        "quiet work",
        "ego"
      ]
    },
    {
      "scene_id": "scene-002",
      "narration": "Bu gurur açıkça övünmek zorunda değildir. Takdir beklemek, başkalarını küçümsemek veya bütün güzelliği kendinden bilmek de aynı kökten beslenebilir.",
      "visual_note": "A thoughtful person stepping away from applause into quiet light.",
      "keywords": [
        "applause",
        "thoughtful person",
        "quiet light",
        "reflection"
      ]
    },
    {
      "scene_id": "scene-003",
      "narration": "Hizmet, verilmiş imkânların şükrü ve kulluk vazifesi olarak görüldüğünde temiz kalır. İnsan yaptığı iyiliği inkâr etmez; fakat onu benliğini büyüten bir mülk hâline getirmez. Gerçek tevazu, vesile olduğunu bilmektir.",
      "visual_note": "People serving food together quietly at a community table.",
      "keywords": [
        "community service",
        "serving food",
        "teamwork",
        "humility"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "26-soz-4-mebhas-hatime-aci-neden-kotulugun-kendisi-degildir",
    "test_day": "day-47",
    "short_id": "short-005",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
