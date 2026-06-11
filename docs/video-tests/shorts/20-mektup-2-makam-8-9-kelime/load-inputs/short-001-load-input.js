// Derin Okuma — 20. Mektup - 2. Makam - 8-9. Kelime Shorts
// Short: short-001 | Ölüm Neden Hayatın Sonu Değil?

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Ölüm Neden Hayatın Sonu Değil?',
    description: 'Bir kabarcık söner. Güneş sönmemiştir.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '20-mektup-2-makam-8-9-kelime-short-001-day-36'
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
      narration: 'Güneş ışığında parlayan bir nehir düşünün. Yüzeyde kabarcıklar oluşuyor; her biri güneşin ışığını taşıyarak parlıyor, sonra sönüp kayboluyor. Arkadan yenileri geliyor. Bu gelip gidiş durmaksızın devam ediyor.',
      visual_note: 'sunlit river surface with bubbles catching light, shimmering water, slow motion',
      keywords: ['sunlit river', 'water bubbles', 'shimmering water', 'slow motion']
    },
    {
      scene_id: 'scene-002',
      narration: 'Bu kabarcıkların sönmesi güneşin söndüğünü göstermez. Tam tersine; her sönüşte güneş hâlâ orada parlamaktadır. Sönmek, güneşin devam ettiğinin kanıtıdır. Parıltı olmasa, sönüş de olmazdı.',
      visual_note: 'sun still shining after wave fades, persistent light on water, enduring sunlight reflection',
      keywords: ['persistent sunlight', 'enduring light', 'sun after ripple fades']
    },
    {
      scene_id: 'scene-003',
      narration: 'Kâinattaki canlıların gelip gidişi de böyle okunabilir. Bir hayatın bitmesi, hayatın tükenmediğini gösterir; büyük hayat kaynağının kesintisiz işlediğini ispat eder. Ölüm, sonu göstermiyor; devamı ispat ediyor.',
      visual_note: 'seasons cycling in nature, fallen leaves and new growth, eternal renewal, life continues',
      keywords: ['seasonal cycle', 'new growth', 'eternal renewal', 'life cycle']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '20-mektup-2-makam-8-9-kelime',
    test_day: 'day-36',
    short_id: 'short-001',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
