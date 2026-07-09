// Derin Okuma — 30.Söz - 2.Maksad - Mukaddime - 1.Nokta Shorts
// Short: short-004
// Content filled for day-52 production.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Kâinat Neden Sürekli Yenilenir?",
    "description": "Değişim sadece kayboluş değil; yeni manaların, yeni suretlerle görünmesidir. #derinokuma #shorts #tefekkür #iman #kainat #yenilenme",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "30-soz-2-maksad-mukaddime-1-nokta-zerrenin-sessiz-yolculugu-short-004-day-52"
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
      "title": "Hook",
      "narration": "Kâinat neden aynı kalmıyor, durmadan yenileniyor? Her bahar yeni yüzler, yeni renkler, yeni şekillerle yeryüzü tekrar açılıyor.",
      "visual_note": "spring flowers blooming in a field, gentle time lapse feeling",
      "keywords": [
        "spring flowers",
        "blooming field",
        "renewal"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Mana",
      "narration": "Bu değişim sadece eskiyi silip yenisini koymak değildir. Aynı hakikatler, farklı suretlerle daha çok mana gösterir.",
      "visual_note": "apple blossom turning into fruit across seasons, soft transition",
      "keywords": [
        "apple blossom",
        "fruit",
        "seasons"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Akış",
      "narration": "Bir yaprak dökülür, toprağa karışır, sonra yeni hayata destek olur. Geçiş yokluk değil; daha geniş bir hikmete açılan akıştır.",
      "visual_note": "fallen leaf near new sprout in rich soil, calm macro shot",
      "keywords": [
        "fallen leaf",
        "new sprout",
        "soil"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "30-soz-2-maksad-mukaddime-1-nokta-zerrenin-sessiz-yolculugu",
    "test_day": "day-52",
    "short_id": "short-004",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
