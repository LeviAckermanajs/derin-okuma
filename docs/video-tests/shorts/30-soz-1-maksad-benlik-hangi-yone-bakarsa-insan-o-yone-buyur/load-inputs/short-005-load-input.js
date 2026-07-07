// Derin Okuma — 30.Söz - 1.Maksad Shorts
// Short: short-005
// Content filled for day-51 production.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: "Hayat Neden Yalnız Mücadele Değil?",
    description: "Hayatı yalnız rekabetle açıklamak eksiktir; varlık, yardımlaşma ve ikramla da ayakta durur. #derinokuma #shorts #tefekkür #hayat #yardımlaşma #merhamet",
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur-short-005-day-51'
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
    "title": "Rekabetin Dar Çerçevesi",
    "narration": "Hayat gerçekten yalnızca bir mücadele mi? Her ilişkiyi üstünlük yarışı olarak görürsek başkasının başarısı tehdide, zayıflığı ise kullanılacak bir fırsata dönüşür.",
    "visual_note": "Crowded city commuters rushing past each other in muted tones.",
    "keywords": [
      "city crowd",
      "competition",
      "urban rush"
    ]
  },
  {
    "scene_id": "scene-002",
    "title": "Dayanışmanın İzleri",
    "narration": "Oysa hayatın her yanında yardımlaşma vardır. Arı çiçeğe, ağaç toprağa, insan da başka insanların emeğine muhtaçtır; hiçbir canlı bütünüyle tek başına yaşamaz.",
    "visual_note": "Bees pollinating flowers and roots sharing a rich ecosystem.",
    "keywords": [
      "bees flowers",
      "ecosystem",
      "cooperation"
    ]
  },
  {
    "scene_id": "scene-003",
    "title": "İkramla Yaşamak",
    "narration": "Rekabet hayatın bir parçası olabilir, fakat tamamı değildir. Varlığı sürdüren büyük düzen; dayanışma, ikram ve karşılıklı hizmetle de işler, insanın ahlakı bu gerçeği gördükçe yumuşar.",
    "visual_note": "People sharing harvest in a peaceful community garden.",
    "keywords": [
      "shared harvest",
      "community garden",
      "solidarity"
    ]
  }
],

  metadata: {
    source: 'derin-okuma',
    blog_post: '30-soz-1-maksad-benlik-hangi-yone-bakarsa-insan-o-yone-buyur',
    test_day: 'day-51',
    short_id: 'short-005',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
