// Derin Okuma — 22. Mektup - 1. Mebhas - 1-4. Vecih Shorts
// Short: short-005
// Filled on day-40

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Haset Neden Önce Kendini Yakar?',
    description: 'Haset ettiğin kişiye gerçekten zarar veriyor musun?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '22-mektup-1-mebhas-1-4-vecih-short-005-day-40'
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
      narration: 'Haset ettiğin kişiye gerçekten zarar veriyor musun? Çoğu zaman hayır. Haset, haset ettiğimiz kişiyi değil bizi ezer. İçimizi yakar, huzurumuzu çalar, bakışımızı karartır.',
      visual_note: 'Embers smoldering slowly in darkness, low light, slow burn.',
      keywords: ['embers', 'slow burn', 'darkness', 'heat']
    },
    {
      scene_id: 'scene-002',
      narration: 'Haset edilen şeyin geçici olduğunu düşünmek bu ateşi söndürür. Makamlar, servetler, dünyanın güzellikleri — bunların hiçbiri kalıcı değildir.',
      visual_note: 'Autumn leaves falling slowly in golden afternoon light, transience.',
      keywords: ['autumn leaves', 'falling', 'transience', 'golden light']
    },
    {
      scene_id: 'scene-003',
      narration: 'Kalıcı olmayan bir şey için içimizi neden yakıyoruz? Dünya geçici; kalp ise bundan çok daha kıymetlidir.',
      visual_note: 'Wide view of sky and earth, clouds passing, sense of smallness and peace.',
      keywords: ['sky', 'clouds', 'vastness', 'peace']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '22-mektup-1-mebhas-1-4-vecih',
    test_day: 'day-40',
    short_id: 'short-005',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
