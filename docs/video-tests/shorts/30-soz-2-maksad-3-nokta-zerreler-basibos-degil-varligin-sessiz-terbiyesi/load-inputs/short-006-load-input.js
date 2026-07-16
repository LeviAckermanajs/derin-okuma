// Derin Okuma - 30.Soz - 2.Maksad - 3.Nokta Shorts
// Short: short-006
// Filled Day-54 package. Paste this file into the n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Varlık Sözsüz Nasıl Konuşur?",
    "description": "Yaprağın damarında, damlanın ölçüsünde ve hayatın uyumunda sözsüz bir mana okunur. #derinokuma #shorts #tefekkür #varlık #bismillah #iman",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "30-soz-2-maksad-3-nokta-zerreler-basibos-degil-varligin-sessiz-terbiyesi-short-006-day-54"
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
      "narration": "Bir zerre sözsüz konuşur; vazifesiyle sahibini gösterir.",
      "visual_note": "macro leaf veins with sunlight, slow detailed nature shot",
      "keywords": [
        "leaf veins",
        "sunlight",
        "macro"
      ]
    },
    {
      "scene_id": "scene-002",
      "narration": "Bir yaprağın damarları, bir damlanın ölçüsü, bir hücrenin işleyişi kelimesiz bir düzen anlatır.",
      "visual_note": "water droplet on leaf reflecting light, elegant macro movement",
      "keywords": [
        "water droplet",
        "leaf",
        "order"
      ]
    },
    {
      "scene_id": "scene-003",
      "narration": "Bu sözsüz dil, her başlangıçta bir yöneliş, her tamamlanışta bir şükür manası taşır.",
      "visual_note": "sunrise over calm field turning into sunset, peaceful cinematic mood",
      "keywords": [
        "sunrise",
        "calm field",
        "gratitude"
      ]
    },
    {
      "scene_id": "scene-004",
      "narration": "Varlığı böyle okuyunca küçük şeyler küçülmez; aksine kalbe daha derin bir kapı açar.",
      "visual_note": "wide night sky above quiet landscape, contemplative ending",
      "keywords": [
        "night sky",
        "quiet landscape",
        "contemplation"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "30-soz-2-maksad-3-nokta-zerreler-basibos-degil-varligin-sessiz-terbiyesi",
    "test_day": "day-54",
    "short_id": "short-006",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
