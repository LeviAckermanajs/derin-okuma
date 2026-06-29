// Derin Okuma — 26.Söz - 2.Makam short-002
// Filled for day-45; paste into the n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "İnsan Seçtiğini Nasıl Bilir?",
    "description": "İradenin mahiyetini tam çözememek, onun yokluğunu göstermez. Tercih, önce insanın vicdanında yaşadığı gerçek bir tecrübedir.\n\n#derinokuma #shorts #tefekkür #iman #irade #vicdan",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "26-soz-2-mebhas-kader-varken-irade-ne-anlama-gelir-short-002-day-45"
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
      "narration": "İradeni tam açıklayamaman, iraden olmadığı anlamına gelir mi? İnsan bir işi yapmakla yapmamak arasında kaldığında, içinde gerçek bir yöneliş ve karar yaşar.",
      "visual_note": "Close-up of a person pausing thoughtfully before making a decision.",
      "keywords": [
        "thoughtful pause",
        "decision",
        "close up",
        "reflection"
      ]
    },
    {
      "scene_id": "scene-002",
      "narration": "Bir şeyin varlığını bilmekle mahiyetini bütünüyle çözmek farklıdır. Aklımız işleyişin her ayrıntısını kuşatamayabilir; fakat vicdanımız tercih ettiğimizi doğrudan hisseder.",
      "visual_note": "Hands studying a complex clockwork mechanism in soft window light.",
      "keywords": [
        "clockwork",
        "hands",
        "complexity",
        "window light"
      ]
    },
    {
      "scene_id": "scene-003",
      "narration": "Bilgimizin sınırı, gerçekliğin sınırı değildir. İradeyi tam tarif edememek onu yok saymayı haklı çıkarmaz. İnsan seçtiğini bilir ve sorumluluk da bu yaşanan tercihle başlar. Karar anındaki tereddüt, niyet ve son yöneliş; iradenin soyut bir iddia değil, hayatın içinde yaşanan bir hakikat olduğunu gösterir.",
      "visual_note": "A compass needle settling clearly on one direction, macro vertical shot.",
      "keywords": [
        "compass",
        "direction",
        "macro",
        "choice"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "26-soz-2-mebhas-kader-varken-irade-ne-anlama-gelir",
    "test_day": "day-45",
    "short_id": "short-002",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
