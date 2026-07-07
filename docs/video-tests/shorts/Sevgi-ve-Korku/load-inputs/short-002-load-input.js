// Derin Okuma — 30.Söz - 1.Maksad - Mukaddime short-002
// Filled for day-48; paste into the n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "İnsan Sonsuzu Nasıl Anlar?",
    "description": "İnsan kendi küçük bilgi, güç ve düzenleme tecrübesini bir ölçü gibi kullanır. Damla denizi kuşatmaz; fakat ona işaret edebilir.\n\n#derinokuma #shorts #tefekkür #iman #kudret #marifet",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "Sevgi-ve-Korku-short-002-day-48"
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
      "narration": "Sınırlı bir insan sonsuz kudreti nasıl anlayabilir? Bilgimiz az, gücümüz dar, ömrümüz kısa; yine de sonsuzluk hakkında düşünebiliyoruz.",
      "visual_note": "tiny person overlooking an immense mountain range, vertical shot",
      "keywords": [
        "mountain range",
        "tiny person",
        "scale"
      ]
    },
    {
      "scene_id": "scene-002",
      "narration": "Bir odayı düzenleyişimiz, bir işi planlayışımız ve birkaç şeyi bilişimiz bize küçük ölçüler verir. Bu tecrübelerle bütün varlığı kuşatan düzen, ilim ve kudretin anlamına yaklaşırız.",
      "visual_note": "hands organizing a desk then studying stars, vertical transition",
      "keywords": [
        "organized desk",
        "studying stars",
        "knowledge"
      ]
    },
    {
      "scene_id": "scene-003",
      "narration": "Bir damla denizi içine alamaz; ama suyun ne olduğunu gösterebilir. Benlik de sonsuzu kuşatmaz. Sınırını bildiğinde, sonsuz olana işaret eden bir pencere olur.",
      "visual_note": "single drop merging into ocean waves, vertical macro slow motion",
      "keywords": [
        "water drop",
        "ocean",
        "macro"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "Sevgi-ve-Korku",
    "test_day": "day-48",
    "short_id": "short-002",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];

