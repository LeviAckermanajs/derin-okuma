// Derin Okuma — 26.Söz - 3.Mebhas short-002
// Filled for day-46; paste into the n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Hafıza Geçmişi Nasıl Korur?",
    "description": "Hafıza, geçip giden hayatın bütünüyle kaybolmadığını hissettiren sessiz bir kayıttır. Geçiciliğin içinde korunmaya açılan bir pencere sunar.\n\n#derinokuma #shorts #tefekkür #hafıza #kader #maneviyat",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "26-soz-3-mebhas-her-sey-yaziliysa-insan-neden-rahatlar-short-002-day-46"
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
      "narration": "Geçmişin yılları küçücük bir hafızada nasıl saklanıyor? Bir koku, bir ses veya eski bir fotoğraf; çoktan geride kalmış bir anı yeniden canlandırabiliyor.",
      "visual_note": "An old photograph held near a window, vertical cinematic close-up.",
      "keywords": [
        "old photograph",
        "window light",
        "memory",
        "close up"
      ]
    },
    {
      "scene_id": "scene-002",
      "narration": "Saatler geçip gidiyor; fakat izleri zihinde, karakterde ve seçimlerde kalıyor. Hafıza, hayatın bütünüyle boşluğa düşmediğini hissettiren sessiz bir kayıt gibi çalışıyor.",
      "visual_note": "A person writing memories in a journal beside a clock.",
      "keywords": [
        "journal",
        "clock",
        "writing",
        "memory"
      ]
    },
    {
      "scene_id": "scene-003",
      "narration": "Dünya değişim ve ayrılıklarla dolu olsa da her şey kayıtsız değildir. Hatıraların korunması, geçiciliğin içinde kalıcılığa açılan bir işaret sunar. Yazılmış olmak, bir yönüyle kaybolmamak demektir.",
      "visual_note": "An elderly person smiling softly while viewing family photographs.",
      "keywords": [
        "elderly person",
        "family photos",
        "soft smile",
        "continuity"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "26-soz-3-mebhas-her-sey-yaziliysa-insan-neden-rahatlar",
    "test_day": "day-46",
    "short_id": "short-002",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];

