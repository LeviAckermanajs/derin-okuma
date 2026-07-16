// Derin Okuma - 30.Soz - 2.Maksad - 3.Nokta Shorts
// Short: short-001
// Filled Day-54 package. Paste this file into the n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "İnsan Hayatı Neden Başıboş Değil?",
    "description": "Varlığın en küçük parçasında bile vazife ve düzen varsa, insanın hayatı da anlamsız bir savrulma değildir. #derinokuma #shorts #tefekkür #iman #varlık #anlam",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "30-soz-2-maksad-3-nokta-zerreler-basibos-degil-varligin-sessiz-terbiyesi-short-001-day-54"
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
      "narration": "Zerreler bile başıboş değilse, insan hayatı nasıl anlamsız olabilir?",
      "visual_note": "macro dust particles in sunlight, quiet contemplative room",
      "keywords": [
        "dust particles",
        "sunlight",
        "contemplation"
      ]
    },
    {
      "scene_id": "scene-002",
      "narration": "Toprakta, yaprakta ve canlı bedende dolaşan en küçük parçalar bile bir vazife görür. Hiçbiri yalnızca boşlukta savrulmaz.",
      "visual_note": "soil, green leaf, human hand, soft natural transitions",
      "keywords": [
        "soil",
        "green leaf",
        "human hand"
      ]
    },
    {
      "scene_id": "scene-003",
      "narration": "Bu bakış insana şunu hatırlatır: Senin emeğin, niyetin ve arayışın da daha büyük bir düzene bakıyor.",
      "visual_note": "person walking alone on sunrise path, calm hopeful mood",
      "keywords": [
        "sunrise path",
        "solitary person",
        "meaning"
      ]
    },
    {
      "scene_id": "scene-004",
      "narration": "Küçük görünen şeyler bile anlam taşıyorsa, kalbin derin soruları da sahipsiz değildir.",
      "visual_note": "wide night sky over quiet landscape, slow cinematic ending",
      "keywords": [
        "night sky",
        "quiet landscape",
        "meaning"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "30-soz-2-maksad-3-nokta-zerreler-basibos-degil-varligin-sessiz-terbiyesi",
    "test_day": "day-54",
    "short_id": "short-001",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
