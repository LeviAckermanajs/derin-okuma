// Derin Okuma — İnsanın Sahiplik Yanılgısı ve Emanet Bilinci Shorts
// Short: short-006 — Kul Olmak Neden Küçültmez?
// Day-29 — filled by Claude

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Kul Olmak Neden Küçültmez?',
    description: 'Kul olmak insanı küçültür mü? Tam tersi.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'insanin-sahiplik-yanilgisi-ve-emanet-bilinci-short-006-day-29'
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
      scene_id: 'scene-001',
      narration: 'Kul olmak insanı küçültür mü? İlk bakışta öyle görünebilir. Ama hayır; tam tersine. Çünkü kulluk, Allah\'tan başkasına boyun eğmemeyi öğretir. Bu, insanı her şeyin önünde yere kapanan biri yapmaz; aksine içsel bir özgürlük ve izzet kazandırır.',
      visual_note: 'Person standing upright and dignified in open field, calm and grounded, serene expression.',
      keywords: ['upright dignity', 'open field', 'freedom', 'groundedness']
    },
    {
      scene_id: 'scene-002',
      narration: 'Buna karşı yalnızca kendi nefsini ve çıkarını merkeze alanın hâli bambaşkadır. Görünürde hürdür; ama gerçekte kendi lezzetlerinin, korkularının ve hırslarının kölesidir. Bu özgürlük görüntüsünde gizli bir köleliktir.',
      visual_note: 'Person tangled in invisible strings, movements restricted despite appearing free, contemplative.',
      keywords: ['invisible strings', 'false freedom', 'restriction', 'contemplative']
    },
    {
      scene_id: 'scene-003',
      narration: 'Gerçek özgürlük, hiçbir şeye köle olmamaktır. Ve bunu en güzel öğreten, insanı yalnızca en yüce olana karşı sorumlu tutan bir yaşam biçimidir. Kul olmak insanı küçültmez; onu en büyük kölelikten kurtarır.',
      visual_note: 'Eagle soaring freely over vast mountains, expansive sky, liberation and natural dignity.',
      keywords: ['eagle flying', 'mountain', 'freedom', 'vast sky']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: 'insanin-sahiplik-yanilgisi-ve-emanet-bilinci',
    test_day: 'day-29',
    short_id: 'short-006',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
