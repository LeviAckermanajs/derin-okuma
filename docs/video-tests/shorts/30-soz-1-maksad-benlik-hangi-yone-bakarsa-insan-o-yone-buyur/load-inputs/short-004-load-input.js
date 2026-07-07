// Derin Okuma — 30.Söz - 1.Maksad - Mukaddime Shorts
// Short: short-004
// Content filled for day-49 n8n input.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: "Güç Neden Haklılık Ölçüsü Değildir?",
    description: "Güç doğruyu üretmez; ancak hakka hizmet ettiğinde değer kazanır. Adalet, zayıfın hakkını güçlü karşısında koruyabildiği ölçüde gerçektir.\n\n#derinokuma #shorts #tefekkür #adalet #hak #ahlak",
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur-short-004-day-49'
  },

  reuse_existing_audio: {
    enabled: false,
    audio_mode: 'single_track',
    audio_track: {
      mode: 'single',
      path: '',
      duration_seconds: null
    }
  },

  reuse_existing_video: {
    enabled: false,
    visual_mode: 'semantic',
    video_root: '',
    path_template: '{scene_id}.mp4'
  },

  visual_mode: 'ambient',

  audio_strategy: {
    mode: 'single_track',
    timing_strategy: 'elevenlabs_timestamps',
    join_separator: '\n\n'
  },

  render_preferences: {
    mode: 'shorts',
    subtitles_enabled: true,
    render_mode: 'shorts',
    produce_both: false,
    background_music_enabled: true,
    target_fps: 30
  },

  scenes: [
  {
    "scene_id": "scene-001",
    "title": "Güç ve Doğruluk",
    "narration": "Güçlü olan neden her zaman haklı değildir? Bir düşüncenin zorla kabul ettirilmesi, onu doğru yapmaz; yalnızca karşısındakinin sesini kısabilir.",
    "visual_note": "A large shadow looming over a small but steady figure, vertical dramatic framing.",
    "keywords": [
      "large shadow",
      "steady figure",
      "power",
      "truth"
    ]
  },
  {
    "scene_id": "scene-002",
    "title": "Değişmeyen Ölçü",
    "narration": "Hak, güce göre biçim değiştiren bir ölçü değildir. Menfaatler ve dengeler değişse de adalet, başkasının hakkını kendi arzumuz için çiğnememeyi ister.",
    "visual_note": "Balanced justice scales in warm window light, vertical close-up.",
    "keywords": [
      "justice scales",
      "window light",
      "balance",
      "rights"
    ]
  },
  {
    "scene_id": "scene-003",
    "title": "Gücün Değeri",
    "narration": "Güç ancak doğru olana hizmet ettiğinde kıymet kazanır. Gerçek adalet, zayıfın değerini güçlü karşısında da koruyabilmektir. Benlik merkezden çekildiğinde, hak yeniden görünür olur.",
    "visual_note": "A strong hand helping another person stand, respectful vertical cinematic shot.",
    "keywords": [
      "helping hand",
      "dignity",
      "justice",
      "strength"
    ]
  }
],

  metadata: {
    source: 'derin-okuma',
    blog_post: '30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur',
    test_day: 'day-49',
    short_id: 'short-004',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
