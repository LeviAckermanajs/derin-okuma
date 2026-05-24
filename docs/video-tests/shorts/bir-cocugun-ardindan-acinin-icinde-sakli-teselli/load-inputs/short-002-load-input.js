// Derin Okuma — Bir Çocuğun Ardından: Acının İçinde Saklı Teselli Shorts
// Short: short-002 — Zindan mı, Saray mı? Kaybın Başka Bir Okunuşu
// Day-30 — filled

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Zindan mı, Saray mı? Kaybın Başka Bir Okunuşu',
    description: 'Ya çocuğun bu ağır dünyadan alınıp güzel bir saraya götürülmüş olsaydı? Bu soruyu bir düşünce deneyi olarak birlikte düşünelim.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'bir-cocugun-ardindan-acinin-icinde-sakli-teselli-short-002-day-30'
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
      narration: 'Ya çocuğun bu ağır dünyadan alınıp güzel bir saraya götürülmüş olsaydı? Bu soruyu bir düşünce deneyi olarak birlikte düşünelim.',
      visual_note: 'Dark narrow corridor transforming into light-filled open gate, metaphorical transition, cinematic.',
      keywords: ['dark to light', 'corridor', 'transformation', 'open gate']
    },
    {
      scene_id: 'scene-002',
      narration: 'Bir adam, sevdiği çocuğuyla birlikte ağır şartlar içinde yaşıyor. Bir gün merhametli biri gelir ve der ki: Bu çocuğu alıp güzel bir yerde, iyi şartlarda büyüteceğim.',
      visual_note: 'Sunlit palace garden glimpsed through heavy iron gate, contrast of confinement and freedom.',
      keywords: ['palace garden', 'iron gate', 'contrast', 'freedom beyond']
    },
    {
      scene_id: 'scene-003',
      narration: 'Adam önce itiraz eder. Çocuğu onun için en büyük teselli kaynağıdır. Ama etrafındakiler ona sorar: Eğer çocuğu gerçekten düşünüyorsan, onun için neyin daha hayırlı olduğunu da düşün.',
      visual_note: 'Parent and child silhouette, dilemma and love, soft amber light, tender moment.',
      keywords: ['parent child', 'dilemma', 'love', 'amber light']
    },
    {
      scene_id: 'scene-004',
      narration: 'Dünya ağır ve geçicidir. Çocuk bu geçici mekândan alınarak rahmetin geniş ve sonsuz mekânına götürülmüştür. Bu bakış, acıyı dağıtmaz; ama acının anlamını değiştirir.',
      visual_note: 'Wide aerial shot of lush open landscape after dark valley, liberation and vastness, natural beauty.',
      keywords: ['open landscape', 'aerial view', 'liberation', 'vastness']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: 'bir-cocugun-ardindan-acinin-icinde-sakli-teselli',
    test_day: 'day-30',
    short_id: 'short-002',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
