// Derin Okuma — 2.Şua - 1.Makam - 1.Meyve Shorts short-002
// n8n Load Input Code node payload

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Acz Rahmeti Nasıl Gösterir?",
    "description": "En muhtaç canlıların en uygun rızıkla karşılanması, aczin içinde rahmetin nasıl göründüğünü hatırlatır. Zayıflık bazen ilahî şefkate açılan en berrak penceredir.\n\n#derinokuma #shorts #tefekkür #rahmet #acz #rızık",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "2-sua-1-makam-1-meyve-tevhid-daginik-gorunen-hayati-birlestiren-bakis-short-002-day-55"
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
      "title": "En Muhtaç Hâl",
      "narration": "Bir yavrunun aczi, aslında neyi gösterir? Dünyaya gelir; ne kendini koruyabilir, ne rızkını hazırlayabilir, ne ihtiyacını anlatabilir. Tam bu güçsüzlüğün içinde ona uygun bir rızık yetişir.",
      "visual_note": "newborn animal beside its mother, vertical soft natural light",
      "keywords": [
        "newborn animal",
        "mother",
        "care"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Şefkatin Hizmeti",
      "narration": "Annenin şefkati ona yönelir, süt hazırlanır, hayatın ilk kapısı açılır. Bu denk geliş yalnız soğuk bir düzen gibi görünmez. Kalp, ihtiyaca cevap veren bir merhamet sezer.",
      "visual_note": "mother animal nursing newborn, gentle documentary vertical shot",
      "keywords": [
        "nursing",
        "mercy",
        "new life"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Zayıflığın Penceresi",
      "narration": "Acz bazen insanı ürkütür; fakat doğru okunduğunda rahmete açılan bir penceredir. En zayıf canlı bile unutulmamışsa, insan kendi ihtiyacında da sahipsiz değildir.",
      "visual_note": "small child hand held by an adult hand, vertical warm light",
      "keywords": [
        "holding hands",
        "protection",
        "trust"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "2-sua-1-makam-1-meyve-tevhid-daginik-gorunen-hayati-birlestiren-bakis",
    "test_day": "day-55",
    "short_id": "short-002",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
