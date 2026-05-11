// Derin Okuma — 23. Söz - 2. Mebhas - 3. Nükte Shorts
// Short: short-003
// Filled: day-21

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  job: {
    title: 'Aziz Misafir: Dünyaya Nasıl Bakmalısın?',
    description: 'Dünyayı misafirhane olarak görmek, onu küçümsemek değil; onun gerçek anlamını kavramaktır. Girişin anlamlı, kalışın sınırlı, çıkışın kaçınılmaz.',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-3-nukte-short-003-day-21'
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
      title: 'Hook',
      narration: 'Dünya senin mülkün değil. Kalıcı evin değil. Tesadüfen geldiğin bir yer de değil. Sahipsiz bir yer hiç değil. Peki ne?',
      visual_note: 'A person entering a grand doorway — threshold moment, arriving somewhere meaningful.',
      keywords: ['arrival', 'threshold', 'entering', 'meaning']
    },
    {
      scene_id: 'scene-002',
      title: 'Misafirhane',
      narration: 'Dünya bir misafirhanedir. Girişin anlamlı, kalışın sınırlı, çıkışın kaçınılmaz. Ve ev sahibi cömert, ikram eden, nimetleri anlamlı biçimde açan biri. Bu yüzden insanın görevi sadece tüketmek değil, ikramı tanımaktır.',
      visual_note: 'A warm inn at night, traveler welcomed inside — golden light, generous table, a sense of purposeful hospitality.',
      keywords: ['inn', 'golden light', 'hospitality', 'meaningful stay']
    },
    {
      scene_id: 'scene-003',
      title: 'Misafir Bilmek',
      narration: 'Kendini malik değil misafir bilmek insanı küçültmez. Aksine, onu sonsuz büyük bir yolculuğun parçası yapar. Hafif bagajla, doğru yönde, anlamlı bir yürüyüş.',
      visual_note: 'A traveler walking a road at golden hour — light luggage, steady pace, purposeful movement.',
      keywords: ['traveler', 'light luggage', 'purposeful journey', 'non-attachment']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-3-nukte',
    test_day: 'day-21',
    short_id: 'short-003',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
