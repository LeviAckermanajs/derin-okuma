// Derin Okuma — Sabır Neden Acıyı İnkâr Etmez?
// Filled for day-47; paste into the n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Sabır Neden Acıyı İnkâr Etmez?",
    "description": "Sabır, acıyı bastırmak değil; onun içinde doğru olanı terk etmemektir. Tevekkül de çabayı bırakmadan neticenin yükünü Allah’a teslim etmektir.\n\n#derinokuma #shorts #tefekkür #sabır #tevekkül #iman",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "26-soz-4-mebhas-hatime-aci-neden-kotulugun-kendisi-degildir-short-003-day-47"
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
      "narration": "Sabır, acı hissetmemek mi demektir? Hayır. Sabır, yaranın varlığını inkâr etmek veya duyguları susturmak değildir.",
      "visual_note": "A calm face with tears in soft window light, respectful vertical portrait.",
      "keywords": [
        "tearful face",
        "window light",
        "calm",
        "emotion"
      ]
    },
    {
      "scene_id": "scene-002",
      "narration": "Sabır; elem sürerken doğru olanı terk etmemek, kalbi öfkeye ve ümitsizliğe bütünüyle teslim etmemektir. Bu kuvvet, ancak sabredilecek bir hâl ortaya çıktığında görünür olur.",
      "visual_note": "A person waiting quietly under shelter during rain, vertical shot.",
      "keywords": [
        "waiting person",
        "rain",
        "shelter",
        "patience"
      ]
    },
    {
      "scene_id": "scene-003",
      "narration": "Tevekkül de çabadan vazgeçmek değildir. İnsan elinden geleni yapar, sonra gücünü aşan sonucu Allah’a bırakır. Böylece acı hemen bitmese bile kalbin taşıdığı fazladan yük hafifler.",
      "visual_note": "Open hands releasing a stone beside flowing water, vertical close-up.",
      "keywords": [
        "open hands",
        "stone",
        "flowing water",
        "trust"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "26-soz-4-mebhas-hatime-aci-neden-kotulugun-kendisi-degildir",
    "test_day": "day-47",
    "short_id": "short-003",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
