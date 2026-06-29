// Derin Okuma — 26.Söz - 2.Makam short-005
// Filled for day-45; paste into the n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Zayıf İrade Nasıl Yön Verir?",
    "description": "İnsanın iradesi küçük olabilir; fakat yön tayin eder. İlâhî kudret imkânı yaratırken insan hangi yola girmek istediğini seçer.\n\n#derinokuma #shorts #tefekkür #iman #irade #kader",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "26-soz-2-mebhas-kader-varken-irade-ne-anlama-gelir-short-005-day-45"
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
      "narration": "Zayıf bir irade, insanın bütün hayatına nasıl yön verebilir? Bir geminin dümeni gemiden çok küçüktür; yine de gidiş istikametini o belirler.",
      "visual_note": "A small ship wheel steering across a broad open sea, vertical cinematic view.",
      "keywords": [
        "ship wheel",
        "open sea",
        "direction",
        "steering"
      ]
    },
    {
      "scene_id": "scene-002",
      "narration": "Güçsüz bir çocuğu omzunda taşıyan yetişkin, ona hangi yöne gitmek istediğini sorabilir. Taşıyan kuvvetlidir; fakat yönü isteyen çocuktur. Güç ile tercih aynı şey değildir.",
      "visual_note": "A child on an adult shoulders pointing toward a distant hill.",
      "keywords": [
        "child on shoulders",
        "pointing",
        "distant hill",
        "choice"
      ]
    },
    {
      "scene_id": "scene-003",
      "narration": "İnsan da bütün yolu ve sonucu yaratmaz. Fakat hangi yola adım atacağını seçer. İradenin küçüklüğü sorumluluğu yok etmez; çünkü hayatın ahlâkî yönünü o ince tercih belirler. İnsana düşen, gücünün azlığını bahane etmek değil; elindeki yönelişi doğru tarafa çevirmek ve yardım istemektir.",
      "visual_note": "A traveler taking the first step onto one path at sunrise.",
      "keywords": [
        "first step",
        "sunrise path",
        "traveler",
        "moral direction"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "26-soz-2-mebhas-kader-varken-irade-ne-anlama-gelir",
    "test_day": "day-45",
    "short_id": "short-005",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
