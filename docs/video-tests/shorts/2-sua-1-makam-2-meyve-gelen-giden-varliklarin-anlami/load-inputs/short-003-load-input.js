// Derin Okuma — 2.Şua - 1.Makam - 2.Meyve Shorts short-003
// n8n Load Input Code node payload

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Kâinat Nasıl Okunur?",
    "description": "Tevhid, kâinatı dağınık olaylar toplamı olarak değil, her varlığıyla anlam taşıyan büyük bir kitap gibi okumayı öğretir.\n\n#derinokuma #shorts #tefekkür #iman #kainat #tevhid",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "2-sua-1-makam-2-meyve-gelen-giden-varliklarin-anlami-short-003-day-56"
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
      "title": "Ana Soru",
      "narration": "Kâinat bir kalabalık mı, yoksa anlamlı bir kitap mı? Aynı yeryüzünde hem düzen hem değişim, hem güzellik hem ayrılık görürüz. Bakışımız değişmezse bu tabloyu parçalı okuruz.",
      "visual_note": "wide vertical nature landscape with ordered tree rows and soft sky",
      "keywords": [
        "ordered trees",
        "landscape",
        "harmony"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Kitap Gibi Âlem",
      "narration": "Tevhid, her varlığı kendi başına kopuk bir parça olmaktan çıkarır. Çiçek, kuş, tohum, su ve toprak aynı büyük anlamın farklı sayfaları gibi görünür. Her biri sessizce bir hakikate işaret eder.",
      "visual_note": "open book near a window with green nature outside, vertical calm shot",
      "keywords": [
        "open book",
        "nature",
        "meaning"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Okunan Bir Dünya",
      "narration": "Böyle bakınca dünya yalnız seyredilen bir manzara olmaz. Okunan, dinlenen ve düşündüren bir âlem hâline gelir. İnsan da bu kitabın içinde anlam arayan bilinçli bir okuyucu olur.",
      "visual_note": "person reading by a window overlooking a quiet forest, vertical cinematic mood",
      "keywords": [
        "reading",
        "forest view",
        "reflection"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "2-sua-1-makam-2-meyve-gelen-giden-varliklarin-anlami",
    "test_day": "day-56",
    "short_id": "short-003",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
