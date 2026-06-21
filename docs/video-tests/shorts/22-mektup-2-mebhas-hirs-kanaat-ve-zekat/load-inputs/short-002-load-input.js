// Derin Okuma — 22. Mektup - 2. Mebhas Shorts
// Short: short-002
// Filled for the day-41 n8n Shorts run.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Kanaat Neden Tembellik Değildir?',
    description: 'Kanaat, çabayı bırakmak değil; kalbi sonucun esaretinden kurtarmaktır. Nimeti lütuf bilerek çalışmanın anlamı üzerine. #derinokuma #shorts #tefekkür #iman #kanaat #şükür',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '22-mektup-2-mebhas-hirs-kanaat-ve-zekat-short-002-day-41'
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
    { scene_id: 'scene-001', narration: 'Kanaat, daha azına razı olup çalışmayı bırakmak mıdır? Hayır; kanaat çabayı değil, insanı içten içe tüketen hak iddiasını bırakmaktır.', visual_note: 'artisan working steadily in quiet sunlit workshop', keywords: ['artisan', 'workshop', 'steady work'] },
    { scene_id: 'scene-002', narration: 'Kanaat sahibi insan elinden geleni yapar, gelişmek ister ve sorumluluklarını yerine getirir. Fakat elindekini değersiz görerek bugünün nimetini zehirlemez.', visual_note: 'simple meal on wooden table, hands pausing in gratitude', keywords: ['simple meal', 'gratitude', 'hands'] },
    { scene_id: 'scene-003', narration: 'Böylece kazanç kalbin efendisi değil, hayatın bir vasıtası olur. Çalışma sürer; kaygının hükmü azalır.', visual_note: 'peaceful worker closing workshop at sunset', keywords: ['worker', 'sunset', 'peace'] }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '22-mektup-2-mebhas-hirs-kanaat-ve-zekat',
    test_day: 'day-41',
    short_id: 'short-002',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
