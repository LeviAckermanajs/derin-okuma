// Derin Okuma — 2.Şua - 1.Makam - 3.Meyve Shorts short-002
// n8n Load Input Code node payload

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Akıl Neden Yük Olur?",
    "description": "Akıl sahipsiz bir dünyaya bakınca kaygıyı büyütür; tevhid ışığında ise düzeni, rahmeti ve anlamı fark ettirir.\n\n#derinokuma #shorts #tefekkür #iman #akıl #tevhid",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "2-sua-1-makam-3-meyve-insan-tevhidle-neden-kainat-kadar-genisler-short-002-day-57"
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
      "narration": "Akıl bazen insana neden huzur değil, yük getirir? Çünkü akıl sadece bugünü görmez; geçmişi hatırlar, geleceği bugüne taşır. Yanlış bakışta zaman genişledikçe endişe de genişler.",
      "visual_note": "vertical empty road into fog, thoughtful cinematic tone",
      "keywords": [
        "foggy road",
        "uncertainty",
        "mind"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Karanlık Hesap",
      "narration": "Varlık başıboş görülürse akıl, ayrılıkları ve ihtimalleri durmadan çoğaltır. Geçmiş kayıp gibi, gelecek karanlık gibi görünür. İnsan kendi düşüncesinin altında yorulur.",
      "visual_note": "vertical dim room with old photographs on table, soft shadows",
      "keywords": [
        "old photos",
        "dim room",
        "memory"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Işığın Yönü",
      "narration": "Tevhid ışığında akıl başka türlü çalışır. Varlıktaki düzeni, ölçüyü ve rahmeti okumaya başlar. O zaman akıl, yük olmaktan çıkıp kalbe yol gösteren bir pencere olur.",
      "visual_note": "vertical sunlight through library window, peaceful dust particles",
      "keywords": [
        "library light",
        "sunbeam",
        "wisdom"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "2-sua-1-makam-3-meyve-insan-tevhidle-neden-kainat-kadar-genisler",
    "test_day": "day-57",
    "short_id": "short-002",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled",
    "status": "ready_for_n8n"
  }
};

return [{ json: { raw_input: rawInput } }];
