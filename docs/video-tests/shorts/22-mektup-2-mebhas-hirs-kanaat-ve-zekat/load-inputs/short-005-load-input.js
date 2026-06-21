// Derin Okuma — 22. Mektup - 2. Mebhas Shorts
// Short: short-005
// Filled for the day-41 n8n Shorts run.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Zekât Bereketi Nasıl Artırır?',
    description: 'Bereket yalnızca sayının çoğalması değildir. Zekât, malı dua, şükür ve toplumsal güvenle buluşturur. #derinokuma #shorts #tefekkür #iman #zekât #bereket',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '22-mektup-2-mebhas-hirs-kanaat-ve-zekat-short-005-day-41'
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
    { scene_id: 'scene-001', narration: 'Zekât malı eksiltir mi, yoksa onu başka bir ölçüde çoğaltır mı? Bereket, yalnızca kasadaki rakamın büyümesi değildir.', visual_note: 'hands counting coins then setting a portion aside', keywords: ['coins', 'sharing', 'portion'] },
    { scene_id: 'scene-002', narration: 'Malın hayra yetmesi, sahibini esir etmemesi ve ihtiyaç sahibinin duasına vesile olması da berekettir. Paylaşılan imkân toplumsal güveni besler.', visual_note: 'respectful food package exchange between neighbors', keywords: ['food package', 'neighbors', 'trust'] },
    { scene_id: 'scene-003', narration: 'Zekât, verenin şükrünü ve alanın hakkını korur. Böylece servet, yalnızca biriktirilen bir yük değil, iyiliğe açılan bir emanet olur.', visual_note: 'open hands holding seeds above fertile earth', keywords: ['open hands', 'seeds', 'stewardship'] }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '22-mektup-2-mebhas-hirs-kanaat-ve-zekat',
    test_day: 'day-41',
    short_id: 'short-005',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
