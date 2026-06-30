// Derin Okuma — Kalp Fanî Olanla Neden Doymaz?
// Filled for day-47; paste into the n8n Load Input Code node.

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Kalp Fanî Olanla Neden Doymaz?",
    "description": "Geçici nimetler sevilir; fakat kalbin sonsuzluk arzusunu tek başlarına taşıyamaz. Sükûnet, fanî olanı bâkî olana bağlamakla yaklaşır.\n\n#derinokuma #shorts #tefekkür #kalp #fânilik #maneviyat",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "26-soz-4-mebhas-hatime-aci-neden-kotulugun-kendisi-degildir-short-006-day-47"
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
      "narration": "Kalp neden fanî olanla tam olarak doymuyor? Çünkü insan sevdiği güzelliğin sürmesini ister; oysa dünyadaki her şey değişir, yaşlanır ve elden çıkar.",
      "visual_note": "Autumn leaves falling around a person on a quiet path, vertical shot.",
      "keywords": [
        "autumn leaves",
        "quiet path",
        "person",
        "impermanence"
      ]
    },
    {
      "scene_id": "scene-002",
      "narration": "Geçici nimetler değersiz değildir; fakat sonsuzluk arzusunu tek başlarına karşılayamazlar. Kalp onları kalıcı sanarak tuttuğunda her değişim büyük bir sarsıntıya dönüşür.",
      "visual_note": "Hands gently holding a fading flower near soft window light.",
      "keywords": [
        "fading flower",
        "gentle hands",
        "window light",
        "fragility"
      ]
    },
    {
      "scene_id": "scene-003",
      "narration": "Sükûnet, sevmeyi bırakmakta değil; sevgiyi doğru kaynağa bağlamaktadır. Fanî güzellik, bâkî olana açılan bir pencere olarak sevildiğinde nimet korunur, sahiplik yanılgısı azalır. Kalp, emanet bildiğini daha huzurlu taşır.",
      "visual_note": "A path opening toward warm light beneath ancient trees, vertical frame.",
      "keywords": [
        "warm light",
        "forest path",
        "ancient trees",
        "peace"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "26-soz-4-mebhas-hatime-aci-neden-kotulugun-kendisi-degildir",
    "test_day": "day-47",
    "short_id": "short-006",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled"
  }
};

return [{ json: { raw_input: rawInput } }];
