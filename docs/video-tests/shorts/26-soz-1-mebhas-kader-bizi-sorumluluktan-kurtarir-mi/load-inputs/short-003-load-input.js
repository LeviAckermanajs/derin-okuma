// Derin Okuma — 26.Söz - 1.Mebhas Shorts
// Short: short-003 — Geçmişteki Acılarla Nasıl Baş Edebilirsin?
// Day-44 | Filled by Claude

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Geçmişteki Acılarla Nasıl Baş Edebilirsin?',
    description: 'Geçmişte yaşanan kayıplar ve acılar insanı içten tüketir. Kader anlayışı bu acıya nasıl bir şifa sunar? Sabır nerede başlar?\n\n#derinokuma #kader #risaleinur #sabır #maneviyat',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '26-soz-1-mebhas-kader-bizi-sorumluluktan-kurtarir-mi-short-003-day-44'
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
      narration: 'Geçmişteki bir kayıp, bir hata, yaşanan bir acı... İnsan bunlara takılıp kaldığında içten erimeye başlar. Olan bitişi değiştirmeye çalışmak, gideni geri almak için çırpınmak kalbi yorar.',
      visual_note: 'Person sitting alone looking back, melancholy autumn landscape, weight of the past.',
      keywords: ['looking back', 'autumn melancholy', 'past weight', 'solitude']
    },
    {
      scene_id: 'scene-002',
      narration: 'Kader, geçmişe huzurla bakmanın anahtarıdır. Geçmiş artık insanın elinde değildir; olan olmuştur ve takdir edilmişti. Bu anlayış insanı itiraz etmenin yorgunluğundan kurtarır; kalbe sabretme alanı açar.',
      visual_note: 'Still water reflecting sky, calm surface, leaves settling, peaceful acceptance.',
      keywords: ['still water reflection', 'calm acceptance', 'peace', 'letting go']
    },
    {
      scene_id: 'scene-003',
      narration: 'Geçmişteki acılar karşısında kaderi görmek ümitsizlik değildir. Aksine, o acının da bir anlamı olabileceğini hissettiren bir nur gibidir. Sabır bu nurla başlar. Ve insanı geçmişin yükü altında ezdirmez.',
      visual_note: 'Dawn light slowly appearing over dark horizon, gradual warmth, hope and endurance.',
      keywords: ['dawn over dark horizon', 'hope', 'gradual light', 'overcoming pain']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '26-soz-1-mebhas-kader-bizi-sorumluluktan-kurtarir-mi',
    test_day: 'day-44',
    short_id: 'short-003',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
