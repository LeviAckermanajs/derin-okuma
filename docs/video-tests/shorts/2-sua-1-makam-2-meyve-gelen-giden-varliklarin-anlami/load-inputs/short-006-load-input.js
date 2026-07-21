// Derin Okuma — 2.Şua - 1.Makam - 2.Meyve Shorts short-006
// n8n Load Input Code node payload

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Tevhid Gidişi Nasıl Değiştirir?",
    "description": "Tevhid, ölümü ve değişimi görünmez kılmaz; fakat onları hiçlikten çıkarıp vazife, netice ve rahmet içinde okumayı öğretir.\n\n#derinokuma #shorts #tefekkür #iman #tevhid #maneviyat",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "2-sua-1-makam-2-meyve-gelen-giden-varliklarin-anlami-short-006-day-56"
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
      "title": "Değişmeyen Gerçek",
      "narration": "Tevhid gidişi durdurmaz; ama anlamını değiştirir. Bahar yine geçer, çiçek yine solar, canlı yine dünyadaki yerinden ayrılır. Fakat manzaranın içindeki karanlık aynı kalmaz.",
      "visual_note": "vertical seasonal transition from spring blossoms to autumn leaves",
      "keywords": [
        "seasons",
        "blossoms",
        "transition"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Vazife ve Netice",
      "narration": "Çünkü her geliş bir vazifeye, her gidiş bir neticeye bağlanır. Canlılar yalnız görünür bedenleriyle değil, bıraktıkları izlerle ve gösterdikleri sanatla da anlam taşır. Hiçbir şey bütünüyle boşa akmaz.",
      "visual_note": "aerial view of river fields and forest connected in one vertical landscape",
      "keywords": [
        "river",
        "fields",
        "connection"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Gözden Saklanmak",
      "narration": "Bu yüzden gidenler tamamen kaybolmuş sayılmaz. Onlar bizim sınırlı gözümüzden saklanır. Anlamları, neticeleri ve rahmetin şahitliği kalpte daha sakin bir tefekkür bırakır.",
      "visual_note": "golden light fading over a quiet spring landscape, vertical hopeful ending",
      "keywords": [
        "golden light",
        "spring landscape",
        "hope"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "2-sua-1-makam-2-meyve-gelen-giden-varliklarin-anlami",
    "test_day": "day-56",
    "short_id": "short-006",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
