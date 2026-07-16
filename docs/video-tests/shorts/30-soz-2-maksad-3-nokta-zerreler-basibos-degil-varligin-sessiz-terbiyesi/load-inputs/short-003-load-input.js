// Derin Okuma - 30.Soz - 2.Maksad - 3.Nokta Shorts
// Short: short-003
// Filled Day-54 package. Paste this file into the n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "İyilik Neden Kaybolmaz?",
    "description": "Samimi bir iyilik, görünmeden kalsa bile boşa gitmez; rahmet ve adalet onu daha kalıcı bir neticeye hazırlar. #derinokuma #shorts #iman #rahmet #iyilik #ahiret",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "30-soz-2-maksad-3-nokta-zerreler-basibos-degil-varligin-sessiz-terbiyesi-short-003-day-54"
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
      "narration": "Kayboldu sandığın iyilik, belki de daha kalıcı bir yerde saklanıyordur.",
      "visual_note": "hands offering help in warm light, close up, gentle mood",
      "keywords": [
        "helping hands",
        "warm light",
        "kindness"
      ]
    },
    {
      "scene_id": "scene-002",
      "narration": "Dünyada sessiz kalan bir hizmet, insan gözüyle görülmeyebilir. Fakat hikmet ve rahmet nazarında samimi bir emek zayi olmaz.",
      "visual_note": "quiet volunteer work, planting small tree, peaceful garden",
      "keywords": [
        "service",
        "planting tree",
        "peaceful"
      ]
    },
    {
      "scene_id": "scene-003",
      "narration": "Bu yüzden küçük bir iyilik bile hafife alınmaz. Çünkü adalet, kıymetli neticelerin boşa gitmesine razı değildir.",
      "visual_note": "balanced scales in soft light, calm serious atmosphere",
      "keywords": [
        "balanced scales",
        "justice",
        "soft light"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "30-soz-2-maksad-3-nokta-zerreler-basibos-degil-varligin-sessiz-terbiyesi",
    "test_day": "day-54",
    "short_id": "short-003",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
