// Derin Okuma — 2.Şua - 1.Makam - 2.Meyve Shorts short-002
// n8n Load Input Code node payload

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Gidenler Gerçekten Yok mu Olur?",
    "description": "Gözden kaybolmak, varlığın bütün anlamıyla silinmesi değildir; iman, ayrılığın arkasındaki neticeleri görmeyi öğretir.\n\n#derinokuma #shorts #tefekkür #iman #ölüm #anlam",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "2-sua-1-makam-2-meyve-gelen-giden-varliklarin-anlami-short-002-day-56"
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
      "title": "Gözün Yanılgısı",
      "narration": "Bir varlık gözden kaybolunca gerçekten yok mu olur? İnsan çoğu zaman görmediğini bitmiş sayar. Çünkü göz, perdenin arkasında kalan neticeleri hemen fark edemez.",
      "visual_note": "vertical shot of a soft curtain moving beside a bright window",
      "keywords": [
        "curtain",
        "window light",
        "hidden"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Sahneden Çekilmek",
      "narration": "Oysa görünmemek, yok olmakla aynı şey değildir. Vazifesini tamamlayan bir canlı, dünyadaki sahneden çekilir. Fakat izi, hatırası, neticesi ve taşıdığı mana kalır.",
      "visual_note": "empty theater stage with a single warm spotlight, vertical frame",
      "keywords": [
        "stage",
        "spotlight",
        "departure"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Daha Geniş Hakikat",
      "narration": "İman, ölümü karanlık bir hiçlik olarak değil, gözümüzün sınırını aşan bir geçiş olarak gösterir. Bu bakış acıyı kaldırmaz; ama acının içine teslimiyet ve anlam koyar.",
      "visual_note": "partially open door with soft light behind it, vertical contemplative shot",
      "keywords": [
        "open door",
        "soft light",
        "transition"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "2-sua-1-makam-2-meyve-gelen-giden-varliklarin-anlami",
    "test_day": "day-56",
    "short_id": "short-002",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
