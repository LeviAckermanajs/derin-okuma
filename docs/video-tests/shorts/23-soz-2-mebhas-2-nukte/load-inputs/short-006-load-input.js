// Derin Okuma — 23. Söz - 2. Mebhas - 2. Nükte Shorts
// Short: short-006 | Sarayını Kim Yönetiyor?
// day-20

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },


  job: {
    title: 'Sarayını Kim Yönetiyor?',
    description: 'Sarayında kapıcı mı efendi mi oldu? İçeride kim yönetiyor?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-2-nukte-short-006-day-20'
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
      narration: 'İki saray düşün. Birinin kapısı şenlikli, parlak ve eğlenceli. Efendi kapıda oyuyor, görevliler kendi işlerini bırakmış. Ama içerisi boş. Dış parlaklık, iç boşluğu gizliyor.',
      visual_note: 'Ornate festive palace gate with celebrations outside, but doors reveal completely empty, cold, dark interior.',
      keywords: ['hollow palace', 'festive outside', 'empty inside', 'facade', 'deception']
    },
    {
      scene_id: 'scene-002',
      narration: 'Diğer saray dıştan sade. Ama içeride herkes vazifesinde: akıl düşünüyor, kalp yönelmiş, ruh yüce işiyle meşgul. Dıştan sönük. İçeriden mamur. Gerçek hayat, iç nizamdadır.',
      visual_note: 'Simple plain exterior, but inside warm light fills purposeful rooms, each person quietly engaged in their work.',
      keywords: ['simple exterior', 'purposeful interior', 'warm light', 'inner order', 'real life']
    },
    {
      scene_id: 'scene-003',
      narration: 'Nefis ve heva, insan sarayında kapıcı ve bekçi gibidir. Sınırda kalmaları gerekir. Ama onlar merkeze geçerse; kalp, akıl, ruh ve sır susturulur. Kapıcıyı efendi yapmak, sarayı yıkmaktır.',
      visual_note: 'A grand hall where the gatekeeper sits on the throne while true nobles stand displaced and silent at the walls.',
      keywords: ['gatekeeper on throne', 'true nobles displaced', 'inverted order', 'silence of the worthy']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-2-nukte',
    test_day: 'day-20',
    short_id: 'short-006',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
