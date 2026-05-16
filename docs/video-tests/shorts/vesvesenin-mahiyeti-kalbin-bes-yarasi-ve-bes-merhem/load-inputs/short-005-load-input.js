// Derin Okuma - Vesvesenin Mahiyeti, Kalbin Beş Yarası ve Beş Merhem Shorts
// Short: short-005
// Filled for day-27.
// Paste this into the n8n Load Input Code node.

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },
  job: {
    title: 'Şüphe İmanı Bozar mı?',
    description: 'Bir ihtimali düşünmek, ona inanmak değildir.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: 'vesvesenin-mahiyeti-kalbin-bes-yarasi-ve-bes-merhem-short-005-day-27'
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
      narration: 'Bir ihtimali düşünmek, ona inanmak değildir. İnsan bazen zihnine uğrayan bir soruyu kalbinin inkârı sanır.',
      visual_note: 'person reading at night with a desk lamp, thoughtful mood',
      keywords: [
        'reading',
        'night lamp',
        'question'
      ]
    },
    {
      scene_id: 'scene-002',
      narration: 'Tasavvur başka, tasdik başkadır. Bir iddiayı anlamaya çalışmak, onu kabul etmek anlamına gelmez.',
      visual_note: 'two forest paths, person standing still, contemplative',
      keywords: [
        'two paths',
        'choice',
        'reflection'
      ]
    },
    {
      scene_id: 'scene-003',
      narration: 'Delilden doğmayan ihtimal, sağlam imanı sarsacak güçte değildir. Ya şöyleyse diye başlayan sonsuz kapılar, vesvesenin alanıdır.',
      visual_note: 'solid stone bridge surrounded by thin fog, stable structure',
      keywords: [
        'stone bridge',
        'fog',
        'certainty'
      ]
    }
  ],
  metadata: {
    source: 'derin-okuma',
    blog_post: 'vesvesenin-mahiyeti-kalbin-bes-yarasi-ve-bes-merhem',
    test_day: 'day-27',
    short_id: 'short-005',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
