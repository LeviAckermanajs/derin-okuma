// Derin Okuma — 26.Söz - 2.Makam short-006
// Filled for day-45; paste into the n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Dua İradeyi Nasıl Güçlendirir?",
    "description": "Dua ve tevekkül iyiliğe yönelişi kuvvetlendirir; istiğfar ve tövbe kötü yönelişin bağını keser. Zayıf irade, İlâhî yardıma açıldığında yalnız kalmaz.\n\n#derinokuma #shorts #tefekkür #dua #tövbe #tevekkül",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "26-soz-2-mebhas-kader-varken-irade-ne-anlama-gelir-short-006-day-45"
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
      "narration": "İraden zayıfsa, iyiliğe nasıl güç bulup kötülükten nasıl dönersin? İnsandan bütün neticeleri yaratması değil, doğru yöne samimiyetle dönmesi istenir.",
      "visual_note": "A small doorway opening onto a bright valley, hopeful vertical composition.",
      "keywords": [
        "open doorway",
        "bright valley",
        "hope",
        "new direction"
      ]
    },
    {
      "scene_id": "scene-002",
      "narration": "Dua, eksikliğini kabul ederek iyilik için yardım istemektir. Tevekkül, doğru tercihi yaptıktan sonra sonucu Allah’a bırakmaktır. Böylece zayıf yöneliş hayırda sebat kazanır.",
      "visual_note": "Hands raised in quiet prayer by a window at dawn.",
      "keywords": [
        "prayer hands",
        "dawn",
        "window light",
        "trust"
      ]
    },
    {
      "scene_id": "scene-003",
      "narration": "Yanlış yola girildiğinde istiğfar hatayı dürüstçe kabul eder, tövbe ise yönü yeniden çevirir. Geçmiş silinmiş gibi davranılmaz; fakat kötülüğün geleceğe uzanan bağı kesilir. Zayıf irade, İlâhî yardıma açıldığında yalnız değildir. Dua hayra yönelişi beslerken tövbe şerrin devamını durdurur; insan böylece her karar anında yeniden doğru yolu seçebilir.",
      "visual_note": "A traveler turning from a stormy road toward a peaceful sunrise.",
      "keywords": [
        "turning back",
        "sunrise",
        "stormy road",
        "repentance"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "26-soz-2-mebhas-kader-varken-irade-ne-anlama-gelir",
    "test_day": "day-45",
    "short_id": "short-006",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
