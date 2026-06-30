// Derin Okuma — 26.Söz - 3.Mebhas short-005
// Filled for day-46; paste into the n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Bakış Değişince Dünya Nasıl Değişir?",
    "description": "Dünyayı sahipsiz bir yük gibi görmekle kendini misafir bilmek aynı hayatı farklılaştırır. Kader imanı, dış şartlardan önce bakışı dönüştürür.\n\n#derinokuma #shorts #tefekkür #iman #kader #misafirlik",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "26-soz-3-mebhas-her-sey-yaziliysa-insan-neden-rahatlar-short-005-day-46"
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
      "narration": "Aynı dünya birine cehennem, diğerine huzur gibi neden görünür? Büyük bir saraya girip oranın sahibini tanımayan kişi, bütün düzeni kendi başına yönetmesi gerektiğini sanır.",
      "visual_note": "An anxious person alone in a vast palace, vertical cinematic shot.",
      "keywords": [
        "anxious person",
        "vast palace",
        "isolation",
        "burden"
      ]
    },
    {
      "scene_id": "scene-002",
      "narration": "Başka biri ise sarayın bir sahibi ve işleyen kanunları olduğunu bilir. Kendini misafir görür, payına düşen vazifeyi yapar ve güzelliklerden emniyetle yararlanır.",
      "visual_note": "A calm visitor walking through a sunlit palace garden.",
      "keywords": [
        "calm visitor",
        "palace garden",
        "sunlight",
        "guest"
      ]
    },
    {
      "scene_id": "scene-003",
      "narration": "Mekân aynıdır; değişen temel bakıştır. Her şeyi sahipsiz görmek dünyayı ağırlaştırır, İlâhî bir düzen içinde görmek ise kalbe güven verir. Kader imanı, insanı kâinatın yalnız yöneticisi olma vehminden kurtarır.",
      "visual_note": "Split view of the same garden shifting from storm to calm light.",
      "keywords": [
        "same garden",
        "storm to calm",
        "perspective",
        "transformation"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "26-soz-3-mebhas-her-sey-yaziliysa-insan-neden-rahatlar",
    "test_day": "day-46",
    "short_id": "short-005",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];

