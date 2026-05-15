// Derin Okuma — 23. Söz - 2. Mebhas - 2. Nükte Shorts
// Short: short-005 | Hakiki İlerleme Nedir?
// day-20

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',
  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },


  job: {
    title: 'Hakiki İlerleme Nedir?',
    description: 'İlerlediğini sanıyorsun. Ama hangi ölçüyle?',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '23-soz-2-mebhas-2-nukte-short-005-day-20'
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
      narration: 'Daha rafine hazlar, daha zengin deneyimler, daha yoğun tatmin... Bunlar dışarıdan ilerleme gibi görünebilir. Ama eğer bunun için kalp, akıl, hayal ve ruh hep nefse hizmet eder hâle gelmişse, bu yükseliş değil düşüştür.',
      visual_note: 'A person climbing stairs that spiral downward despite appearing to go up, the illusion of progress revealed.',
      keywords: ['spiral stairs downward', 'illusion of progress', 'false ascent', 'descent']
    },
    {
      scene_id: 'scene-002',
      narration: 'Çünkü yüksek olan alçak olana hizmet ettiriliyor. Bir şeyin terakki olup olmadığını, ne kadar parlak göründüğüne göre değil; yüksek latifelerin nereye bağlandığına göre anlarsın.',
      visual_note: 'A king\'s crown placed on a servant\'s head in a dim storeroom, power inverted, hierarchy broken.',
      keywords: ['inverted hierarchy', 'crown misplaced', 'power structure', 'wrong order']
    },
    {
      scene_id: 'scene-003',
      narration: 'Hakikî terakki; kalbin, sırrın, ruhun, aklın, hatta hayalin hayat-ı ebediyeye yüzünü çevirmesidir. Her latifeyi kendi asli vazifesine yöneltmek. İşte bu, gerçek ilerlemedir.',
      visual_note: 'Multiple compass needles all settling peacefully toward the same true north, alignment and calm resolution.',
      keywords: ['compasses aligning', 'true north', 'harmony', 'purpose', 'resolution']
    },
    {
      scene_id: 'scene-004',
      narration: 'Dıştan ne kadar parlak görünürse görünsün; içindeki yüksek duyguların sustuğu bir hayat mamur değildir. Dıştan ne kadar sade görünürse görünsün; içindeki saray mamur ise o hayat gerçek terakkidedir.',
      visual_note: 'Modest exterior opening into a luminous purposeful interior, every room alive with meaningful activity.',
      keywords: ['modest outside', 'luminous inside', 'inner richness', 'true prosperity']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '23-soz-2-mebhas-2-nukte',
    test_day: 'day-20',
    short_id: 'short-005',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
