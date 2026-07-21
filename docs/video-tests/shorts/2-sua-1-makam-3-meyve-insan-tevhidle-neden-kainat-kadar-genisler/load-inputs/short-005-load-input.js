// Derin Okuma — 2.Şua - 1.Makam - 3.Meyve Shorts short-005
// n8n Load Input Code node payload

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Ölüm Nasıl Başka Görünür?",
    "description": "İman ölümü hayatı anlamsızlaştıran bir yok oluş olarak değil, vazifenin bitmesi ve başka bir hayata geçiş olarak gösterir.\n\n#derinokuma #shorts #tefekkür #iman #ölüm #ahiret",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "2-sua-1-makam-3-meyve-insan-tevhidle-neden-kainat-kadar-genisler-short-005-day-57"
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
      "title": "Hook",
      "narration": "Ölüm imanla bakınca neden sadece karanlık bir son değildir? İnsan ölüm düşüncesine yalnız bakarsa, dünya ayrılıklarla dolu ağır bir sahne gibi görünür. Sevilenlerin gitmesi kalbi sarsar.",
      "visual_note": "vertical misty cemetery path at dawn, respectful peaceful mood",
      "keywords": [
        "cemetery",
        "dawn",
        "mortality"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Vazife Alanı",
      "narration": "Dünya bir vazife alanı olarak görülünce ölümün anlamı değişir. Görevini tamamlayan insan, yalnız toprağa bırakılmış bir varlık gibi anlaşılmaz. Başka bir hayata çağrılan bir yolcu gibi düşünülür.",
      "visual_note": "vertical quiet train station at sunrise with lone traveler",
      "keywords": [
        "train station",
        "traveler",
        "transition"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Kapı Anlamı",
      "narration": "Bu bakışta mezar kapanan bir son değil, gözün ötesindeki hayata açılan bir kapı olur. Ayrılık acısı bütünüyle silinmez; fakat kalp onun son söz olmadığını hisseder.",
      "visual_note": "vertical softly lit garden gate, stone path, peaceful transition",
      "keywords": [
        "garden gate",
        "soft light",
        "afterlife"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "2-sua-1-makam-3-meyve-insan-tevhidle-neden-kainat-kadar-genisler",
    "test_day": "day-57",
    "short_id": "short-005",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled",
    "status": "ready_for_n8n"
  }
};

return [{ json: { raw_input: rawInput } }];
