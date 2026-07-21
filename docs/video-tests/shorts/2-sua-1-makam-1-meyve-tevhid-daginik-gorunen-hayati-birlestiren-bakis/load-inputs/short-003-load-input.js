// Derin Okuma — 2.Şua - 1.Makam - 1.Meyve Shorts short-003
// n8n Load Input Code node payload

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Şifa Neden Sadece Madde Değildir?",
    "description": "İlaçlar, doktorlar ve tedavi yolları değerlidir; fakat şifayı yalnız maddeye sıkıştırmak rahmet anlamını eksiltir. Tevhid, sebepleri inkâr etmeden şifanın kaynağını gösterir.\n\n#derinokuma #shorts #tefekkür #şifa #rahmet #tevhid",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "2-sua-1-makam-1-meyve-tevhid-daginik-gorunen-hayati-birlestiren-bakis-short-003-day-55"
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
      "title": "Hastalığın Hatırlattığı",
      "narration": "Şifa sadece ilacın içinde mi saklıdır? Hastalık insana gücünün sınırını gösterir. Bir anda doktor, ilaç, bakım ve dua aynı hayatın içinde buluşur.",
      "visual_note": "quiet hospital room with sunlight entering through window, vertical frame",
      "keywords": [
        "hospital room",
        "sunlight",
        "healing"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Sebeplerin Değeri",
      "narration": "İlaçlar ve tedavi yolları değersiz değildir; aksine büyük bir hikmet düzeninin parçalarıdır. Fakat sebebi kaynak yerine koymak, şifanın içindeki rahmet ışığını azaltır. Sebep hizmet eder, şifa ihsan edilir.",
      "visual_note": "medicinal herbs and medicine bottle on clean table, vertical close up",
      "keywords": [
        "medicine",
        "herbs",
        "treatment"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Rahmet Olarak Şifa",
      "narration": "Tevhid bakışı, iyileşmeyi yalnız bedenin toparlanması olarak görmez. Şifa, insanın unutulmadığını hissettiren bir rahmet dokunuşudur. Bu yüzden iyileşen kalp, teşekkür etmeyi de öğrenir.",
      "visual_note": "person walking slowly outside after recovery, bright morning park, vertical shot",
      "keywords": [
        "recovery",
        "morning park",
        "gratitude"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "2-sua-1-makam-1-meyve-tevhid-daginik-gorunen-hayati-birlestiren-bakis",
    "test_day": "day-55",
    "short_id": "short-003",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
