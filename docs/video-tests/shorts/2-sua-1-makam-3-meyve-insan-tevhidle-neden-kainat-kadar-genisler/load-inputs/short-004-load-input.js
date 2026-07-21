// Derin Okuma — 2.Şua - 1.Makam - 3.Meyve Shorts short-004
// n8n Load Input Code node payload

const rawInput = {
  "input_version": "0.1.0",
  "input_type": "manual_scene_json",
  "runtime": {
    "repo_root": "/home/muhammet/projects/scene-blog-video",
    "renderer_url": "http://127.0.0.1:8000"
  },
  "job": {
    "title": "Sevgi Neden Daralır?",
    "description": "Sevgi yokluk korkusuna bağlanırsa acıya döner; tevhid sevgiyi kaynağına bağlayarak kalbi genişletir.\n\n#derinokuma #shorts #tefekkür #iman #sevgi #tevhid",
    "language": "tr",
    "author": "Muhammet Yahya Ozer",
    "job_id_hint": "2-sua-1-makam-3-meyve-insan-tevhidle-neden-kainat-kadar-genisler-short-004-day-57"
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
    "target_aspect_ratio": "9:16",
    "target_resolution": "1080x1920",
    "target_fps": 30,
    "voice_language": "tr"
  },
  "scenes": [
    {
      "scene_id": "scene-001",
      "title": "Hook",
      "narration": "Sevgi neden bazen insanı genişletmek yerine daraltır? Çünkü insan sevdiği şeyin devamını ister. Fakat dünyada sevilen her şey geçicilikle yüz yüzedir.",
      "visual_note": "vertical close up of fading flower beside window light",
      "keywords": [
        "fading flower",
        "window light",
        "impermanence"
      ]
    },
    {
      "scene_id": "scene-002",
      "title": "Ayrılık Korkusu",
      "narration": "Her güzellik yokluğa gidiyor sanılırsa sevgi sessiz bir korkuya dönüşür. İnsan sevdiği her şeyin ardından bir ayrılık bekler. Muhabbet kalbi büyütmesi gerekirken kalbi sıkıştırır.",
      "visual_note": "vertical person alone by sea at dusk, slow waves",
      "keywords": [
        "sea dusk",
        "solitude",
        "longing"
      ]
    },
    {
      "scene_id": "scene-003",
      "title": "Kaynağa Bağlanmak",
      "narration": "Tevhid sevgiyi yok etmez; ona daha geniş bir anlam verir. Sevilen güzellikler, onları var eden rahmetle birlikte düşünülür. O zaman sevgi, kaybetme korkusundan çıkar ve kâinat kadar genişler.",
      "visual_note": "vertical sunlit meadow with flowers moving in wind",
      "keywords": [
        "meadow",
        "flowers",
        "expansive love"
      ]
    }
  ],
  "metadata": {
    "source": "derin-okuma",
    "blog_post": "2-sua-1-makam-3-meyve-insan-tevhidle-neden-kainat-kadar-genisler",
    "test_day": "day-57",
    "short_id": "short-004",
    "workflow": "manual_scene_json_single_track_shorts_load_input",
    "content_generation_status": "filled",
    "status": "ready_for_n8n"
  }
};

return [{ json: { raw_input: rawInput } }];
