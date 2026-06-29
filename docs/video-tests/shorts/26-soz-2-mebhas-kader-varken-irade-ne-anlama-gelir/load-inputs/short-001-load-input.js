// Derin Okuma — 26.Söz - 2.Makam short-001
// Filled for day-45; paste into the n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "İlâhî Bilgi İradeyi Zorlar mı?",
    "description": "Allah’ın bir tercihi bilmesi, insanı o tercihe mecbur eder mi? Kader ile iradenin neden çelişmediğini düşünelim.\n\n#derinokuma #shorts #tefekkür #iman #kader #irade",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "26-soz-2-mebhas-kader-varken-irade-ne-anlama-gelir-short-001-day-45"
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
      "narration": "Allah hangi seçimi yapacağını biliyorsa, gerçekten özgür müsün? Bu soru, bilmek ile zorlamayı aynı şey sandığımızda çözümsüz görünür.",
      "visual_note": "A thoughtful person at a crossroads under a vast sky, vertical cinematic frame.",
      "keywords": [
        "crossroads",
        "thoughtful person",
        "vast sky",
        "choice"
      ]
    },
    {
      "scene_id": "scene-002",
      "narration": "Oysa İlâhî ilim, insanın neyi kendi isteğiyle tercih edeceğini bilir. Seçimin bilinmesi, iradenin elinden alınması değildir; tercih, bütün niyeti ve yönelişiyle kuşatılır.",
      "visual_note": "A person freely selecting one path through a quiet forest, soft light.",
      "keywords": [
        "forest path",
        "free choice",
        "soft light",
        "decision"
      ]
    },
    {
      "scene_id": "scene-003",
      "narration": "Kader iradenin karşısında duran bir baskı değil, iradeyi de içine alan sonsuz bilgidir. İnsan seçer; Allah o seçimi ezelî ilmiyle bilir. Bilgi zorlamaz, fakat hiçbir tercih de İlâhî ilmin dışında kalmaz. Bu ayrım korunduğunda hem Allah’ın ilminin kuşatıcılığı hem de insanın ahlâkî sorumluluğu yerli yerine oturur.",
      "visual_note": "A winding road viewed from high above, revealing the whole route.",
      "keywords": [
        "winding road",
        "aerial view",
        "whole route",
        "knowledge"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "26-soz-2-mebhas-kader-varken-irade-ne-anlama-gelir",
    "test_day": "day-45",
    "short_id": "short-001",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
