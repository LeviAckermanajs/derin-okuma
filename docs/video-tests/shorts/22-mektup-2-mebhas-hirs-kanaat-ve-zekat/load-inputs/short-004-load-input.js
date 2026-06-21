// Derin Okuma — 22. Mektup - 2. Mebhas Shorts
// Short: short-004
// Filled for the day-41 n8n Shorts run.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Sonuçlar Neden Birden Gelmez?',
    description: 'Her neticenin görünmeyen bir hazırlık zamanı vardır. Basamakları atlamak hız değil, eksiklik getirebilir. #derinokuma #shorts #tefekkür #sabır #hikmet #tevekkül',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '22-mektup-2-mebhas-hirs-kanaat-ve-zekat-short-004-day-41'
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
    { scene_id: 'scene-001', narration: 'Bir ekmek bile sofraya gelmeden kaç basamaktan geçer? Tohum, tarla, hasat, değirmen ve fırın; her aşama neticenin bir parçasıdır.', visual_note: 'wheat field transitioning to flour mill and bakery bread', keywords: ['wheat', 'mill', 'bread'] },
    { scene_id: 'scene-002', narration: 'Hayattaki işler de görünmeyen hazırlıklarla olgunlaşır. Hırs ise bu basamakları gecikme sanır ve hemen sona ulaşmak ister.', visual_note: 'time lapse seed growing into plant through soil', keywords: ['seed growth', 'soil', 'time lapse'] },
    { scene_id: 'scene-003', narration: 'Fakat olgunlaşmadan atlanan basamak, sonucu hızlandırmak yerine kırılgan bırakır. Sabır, her aşamada yapılması gereken işi hakkıyla yapmaktır.', visual_note: 'careful hands climbing stone steps slowly and steadily', keywords: ['stone steps', 'steady', 'progress'] }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '22-mektup-2-mebhas-hirs-kanaat-ve-zekat',
    test_day: 'day-41',
    short_id: 'short-004',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
