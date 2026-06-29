// Derin Okuma — 26.Söz - 2.Makam short-004
// Filled for day-45; paste into the n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Sorumluluk Neden Tercihten Doğar?",
    "description": "İnsan sonuçları yaratmaz; fakat ister, yönelir ve teşebbüs eder. Ahlâkî sorumluluğun merkezi, sınırlı ama gerçek olan bu tercihtir.\n\n#derinokuma #shorts #tefekkür #iman #irade #sorumluluk",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "26-soz-2-mebhas-kader-varken-irade-ne-anlama-gelir-short-004-day-45"
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
      "narration": "İnsan fiili yaratmıyorsa, neden yaptığından sorumlu tutulur? Çünkü sorumluluk, bütün şartları yaratmaktan değil; istemekten, yönelmekten ve teşebbüs etmekten doğar.",
      "visual_note": "A hand reaching toward one of two contrasting paths, cinematic vertical shot.",
      "keywords": [
        "reaching hand",
        "two paths",
        "choice",
        "intention"
      ]
    },
    {
      "scene_id": "scene-002",
      "narration": "İrade maddî bir güç gibi büyük görünmez. Bir niyet ve yön tayini kadar incedir; ama küçük bir dümenin büyük gemiye yön vermesi gibi hayatın ahlâkî istikametini belirler.",
      "visual_note": "Close-up of a ship wheel turning slightly over a calm sea.",
      "keywords": [
        "ship wheel",
        "calm sea",
        "direction",
        "small movement"
      ]
    },
    {
      "scene_id": "scene-003",
      "narration": "Bedeni, zamanı, imkânı ve neticeyi yaratan Allah’tır. İnsanın payı ise hangi yola dönmek istediğidir. Gücü sınırlı olsa da tercihi gerçektir ve hesabın temeli de budur. Bu denge insanı ne bağımsız bir yaratıcı gibi gururlandırır ne de iradesiz bir varlık gibi sorumluluktan uzaklaştırır.",
      "visual_note": "A small compass guiding a traveler through a vast landscape.",
      "keywords": [
        "small compass",
        "traveler",
        "vast landscape",
        "guidance"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "26-soz-2-mebhas-kader-varken-irade-ne-anlama-gelir",
    "test_day": "day-45",
    "short_id": "short-004",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
