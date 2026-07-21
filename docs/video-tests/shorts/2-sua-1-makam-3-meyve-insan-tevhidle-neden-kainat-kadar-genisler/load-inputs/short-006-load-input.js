// Derin Okuma — 2.Şua - 1.Makam - 3.Meyve Shorts short-006
// n8n Load Input Code node payload

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Geçicilik Neden Yenilenmedir?",
    "description": "Tevhid bakışı geçiciliği mutlak kayıp olarak değil, güzelliğin sürekli tazelenmesi ve farklı aynalarda görünmesi olarak okutur.\n\n#derinokuma #shorts #tefekkür #iman #geçicilik #şükür",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "2-sua-1-makam-3-meyve-insan-tevhidle-neden-kainat-kadar-genisler-short-006-day-57"
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
      "narration": "Geçicilik sadece kayıp mı, yoksa yenilenmenin dili mi? Bir çiçek soluyor, bir mevsim geçiyor, bir manzara gözden çekiliyor. İlk bakışta her şey eksiliyor gibi gelir.",
      "visual_note": "vertical flower petals falling in soft golden light",
      "keywords": [
        "falling petals",
        "golden light",
        "impermanence"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Tazelenen Güzellik",
      "narration": "Fakat dünya aynı anda durmadan yenilenir. Giden çiçeğin ardından başka bir çiçek açar, kapanan manzaranın ardından başka bir güzellik görünür. Değişim, güzelliğin farklı aynalarda tazelenmesine dönüşür.",
      "visual_note": "vertical time lapse of flowers blooming in a meadow",
      "keywords": [
        "blooming flowers",
        "renewal",
        "meadow"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Şükre Açılan Bakış",
      "narration": "Tevhid, geçiciliği mutlak yokluk olarak okutmaz. İnsan kaybın yanında hikmeti, ayrılığın yanında yenilenmeyi görmeye başlar. O zaman kalp sadece hüzün değil, şükür de taşır.",
      "visual_note": "vertical sunlight after rain on green leaves, fresh peaceful scene",
      "keywords": [
        "after rain",
        "green leaves",
        "gratitude"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "2-sua-1-makam-3-meyve-insan-tevhidle-neden-kainat-kadar-genisler",
    "test_day": "day-57",
    "short_id": "short-006",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled",
    "status": "ready_for_n8n"
  }
};

return [{ json: { raw_input: rawInput } }];
