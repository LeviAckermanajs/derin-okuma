// Derin Okuma — 22. Mektup - 1. Mebhas - 1-4. Vecih Shorts
// Short: short-003
// Filled on day-40

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Her Doğruyu Söyleme Hakkın Var mı?',
    description: 'Söyleyeceğin şey doğru olabilir. Ama söyleme hakkın var mı?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '22-mektup-1-mebhas-1-4-vecih-short-003-day-40'
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
      narration: 'Her söylediğin doğru olabilir. Ama her doğruyu söylemeye her zaman hakkın yoktur. Her doğru, her kişiye, her koşulda söylenebilir değildir.',
      visual_note: 'A person pausing mid-speech, thoughtful, considering their next words carefully.',
      keywords: ['conversation', 'pause', 'thoughtfulness', 'speech']
    },
    {
      scene_id: 'scene-002',
      narration: 'Bir söz yanlış zamanda söylenince, doğru olsa bile yara gibi durur. Kişinin savunmasız olduğu noktaya isabet ederse, en iyi niyetli söz bile kapıları kapatır.',
      visual_note: 'A closed door with warm light underneath it, sense of quiet separation.',
      keywords: ['closed door', 'light', 'threshold', 'quietness']
    },
    {
      scene_id: 'scene-003',
      narration: 'Doğruluğun etkisi sadece içeriğe değil; zamana, tona ve niyete de bağlıdır. İnsan sadece konuşmayı değil, susmasını da bilmelidir.',
      visual_note: 'Still water surface, calm and undisturbed, soft diffused light.',
      keywords: ['stillness', 'water', 'calm', 'silence']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '22-mektup-1-mebhas-1-4-vecih',
    test_day: 'day-40',
    short_id: 'short-003',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
