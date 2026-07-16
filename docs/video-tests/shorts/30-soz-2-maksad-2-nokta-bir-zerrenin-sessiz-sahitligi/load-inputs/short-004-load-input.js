// Derin Okuma — 30.Söz - 2.Maksad - 2.Nokta Shorts short-004
// Filled content for n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Rızık Hücreye Nasıl Ulaşır?",
    "description": "Bir lokmanın hücrelere kadar uzanan yolculuğu, rızkın içindeki ölçüyü ve şükür kapısını açar. #derinokuma #shorts #tefekkür #iman #rızık #şükür",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "30-soz-2-maksad-2-nokta-bir-zerrenin-sessiz-sahitligi-short-004-day-53"
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
      "narration": "Bir lokma, hücreye kadar yolunu nasıl bulur? Sofrada gördüğümüz şey, bedende çok daha ince bir yolculuğa başlar.",
      "visual_note": "simple bread on wooden table in soft morning light",
      "keywords": [
        "bread",
        "wooden table",
        "morning light"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Yolculuk",
      "narration": "Parçalar ayrılır, taşınır, dönüşür ve muhtaç yerlere ulaştırılır. Bu akış kör bir savrulma gibi değil, ölçülü bir sevk gibi görünür.",
      "visual_note": "abstract bloodstream particles moving through warm light",
      "keywords": [
        "bloodstream",
        "particles",
        "movement"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Şükür",
      "narration": "Rızık yalnızca dışarıdan gelen madde değildir. İhtiyacı bilen, yolu açan ve yerine ulaştıran merhametli bir düzeni hatırlatır.",
      "visual_note": "water drops on green leaf, nourishing macro shot",
      "keywords": [
        "water drops",
        "green leaf",
        "nourishment"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "30-soz-2-maksad-2-nokta-bir-zerrenin-sessiz-sahitligi",
    "test_day": "day-53",
    "short_id": "short-004",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled",
    "status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
