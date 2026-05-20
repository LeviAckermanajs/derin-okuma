// Derin Okuma — 21. Söz - 1. Makam Shorts
// Short: short-003 — Sabrını Nerede Harcıyorsun?
// Day-28 — filled by Claude

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Sabrını Nerede Harcıyorsun?',
    description: 'Belki bugün ibadet etmek için zor hissediyorsundur. Ama bu zorluğun ne kadarı gerçekten bugüne ait?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '21-soz-1-makam-short-003-day-28'
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
      narration: 'Bir insan bazen yalnızca bugünkü ibadetin altında ezilmez. Asıl ezildiği şey, zihninde taşıdığı bütün zaman yüküdür. Geçmişteki eksikler, gelecekteki süreklilik korkusu, "hep böyle mi devam edecek?" kaygısı...',
      visual_note: 'Person carrying heavy backpack uphill, struggling with weight, grey misty mountain path.',
      keywords: ['heavy backpack', 'uphill struggle', 'burden', 'grey path']
    },
    {
      scene_id: 'scene-002',
      narration: 'Bütün bu geçmiş ve gelecek yükü bugüne yığıldığında, bugünün küçük vazifesi bile ezici görünür. Oysa insan geçmişini değiştiremez; gelecek ise henüz elinde değildir. Eldeki tek an, şu andır.',
      visual_note: 'Person standing at a road junction, past fading behind and uncertain future ahead, present moment clear.',
      keywords: ['present moment', 'past and future', 'clarity in now', 'crossroads']
    },
    {
      scene_id: 'scene-003',
      narration: 'Sabır kuvveti geçmişin pişmanlığına ve geleceğin endişesine dağıtılırsa, bugünkü vazife için güç kalmaz. "Gücüm yok" diyenin çoğu zaman gücü vardır; ama o güç başka yerlerde harcanmaktadır.',
      visual_note: 'Single candle flame burning in darkness, steady and focused, symbol of concentrated will.',
      keywords: ['candle flame', 'focused energy', 'darkness', 'willpower']
    },
    {
      scene_id: 'scene-004',
      narration: 'İnsandan ömür boyu tek seferde sabır istenmiyor. Ondan sadece şu anın vazifesine dönük bir sadakat isteniyor. Bugünkü görev, bugünün yükünü taşır; dün ve yarının yükünü değil.',
      visual_note: 'One step on a mountain path, close-up of boot taking a single step forward, steady progress.',
      keywords: ['single step', 'mountain path', 'progress', 'steadiness']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '21-soz-1-makam',
    test_day: 'day-28',
    short_id: 'short-003',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
