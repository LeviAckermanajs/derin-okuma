// Derin Okuma — 21. Söz - 1. Makam Shorts
// Short: short-001 — Namaz Neden Ağır Gelir? Asıl Sebep Bu
// Day-28 — filled by Claude

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Namaz Neden Ağır Gelir? Asıl Sebep Bu',
    description: 'İnsan ömrünün kısa olduğunu bilir; ama hayatını sanki burada hep kalacakmış gibi kurar. İşte bu çelişki, ibadeti en çok ağırlaştıran şeydir.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '21-soz-1-makam-short-001-day-28'
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
      narration: 'İnsan namazın güzel olduğunu bilir. Bunu büyük çoğunluk zaten kabul eder. Ama "her gün, beş vakit, ömür boyu..." denince bir usanç hissi belirir. Bu usancın kaynağı nedir?',
      visual_note: 'Person looking out a rain-streaked window, contemplative mood, soft grey light, quiet interior.',
      keywords: ['rainy window', 'contemplation', 'grey light', 'interior']
    },
    {
      scene_id: 'scene-002',
      narration: 'İnsanı ibadetten uzaklaştıran en gizli aldanışlardan biri, burada hep kalacakmış gibi yaşama vehminin içimize yerleşmiş olmasıdır. Ömrümüzü uzun ve garanti edilmiş hissedince; günün küçük bir dilimini ebediyet hesabına ayırmak ağır gelir.',
      visual_note: 'Hourglass on a stone surface, sand slowly falling, close-up cinematic shot, shallow depth of field.',
      keywords: ['hourglass', 'time passing', 'sand', 'impermanence']
    },
    {
      scene_id: 'scene-003',
      narration: 'Oysa elde gelecek yıla, hatta yarına kadar yaşayacağına dair kesin bir güvence yok. İnsan bunu gerçekten hissedebilse, kısa ama değerli bir vakti ebediyet için ayırmak çok farklı görünürdü. Sorun namazda değil, ömrü nasıl gördüğümüzdedir.',
      visual_note: 'Sunset over a quiet valley, last light fading, peaceful finality, golden and warm tones.',
      keywords: ['sunset', 'fading light', 'finality', 'quiet valley']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '21-soz-1-makam',
    test_day: 'day-28',
    short_id: 'short-001',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
