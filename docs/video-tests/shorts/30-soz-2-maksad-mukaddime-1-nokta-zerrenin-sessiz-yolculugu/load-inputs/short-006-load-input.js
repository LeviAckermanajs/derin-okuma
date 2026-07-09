// Derin Okuma — 30.Söz - 2.Maksad - Mukaddime - 1.Nokta Shorts
// Short: short-006
// Content filled for day-52 production.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Küçüklük Neden Anlamsızlık Değil?",
    "description": "Bir zerre bile doğru bakışla vazife, hikmet ve tevhid hakikatine kapı açabilir. #derinokuma #shorts #tefekkür #iman #mana #varlık",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "30-soz-2-maksad-mukaddime-1-nokta-zerrenin-sessiz-yolculugu-short-006-day-52"
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
      "narration": "Küçük olmak anlamsız olmak demek değildir. Bazen bir zerre, insana koca bir kâinatı nasıl okuyacağını öğretir.",
      "visual_note": "single grain of sand in hand with vast horizon behind",
      "keywords": [
        "grain of sand",
        "hand",
        "vast horizon"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Bakış",
      "narration": "Bir yaprağa, bir nefese, bir damlaya dikkatle bakınca alışkanlık perdesi incelir. Sıradan görünen şeyler, vazife ve hikmet taşımaya başlar.",
      "visual_note": "close up leaf and water droplet, calm reflective nature shot",
      "keywords": [
        "leaf close up",
        "water droplet",
        "reflection"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Sonuç",
      "narration": "Tefekkür, büyüğe hayranlık duyarken küçüğü de ihmal etmemektir. Çünkü en küçük satır bile doğru okunursa insanı tevhid hakikatine götürür.",
      "visual_note": "macro sand blending into starry sky, peaceful ending",
      "keywords": [
        "macro sand",
        "starry sky",
        "peaceful ending"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "30-soz-2-maksad-mukaddime-1-nokta-zerrenin-sessiz-yolculugu",
    "test_day": "day-52",
    "short_id": "short-006",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
