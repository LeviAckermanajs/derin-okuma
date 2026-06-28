// Derin Okuma — 26.Söz - 1.Mebhas Shorts
// Short: short-004 — Küçük Bir Tercih Neden Bu Kadar Büyük Sonuç Doğurur?
// Day-44 | Filled by Claude

const rawInput = {
  input_version: '0.1.0',
  input_type: 'manual_scene_json',

  runtime: {
    repo_root: '/home/muhammet/projects/scene-blog-video',
    renderer_url: 'http://127.0.0.1:8000'
  },

  job: {
    title: 'Küçük Bir Tercih Neden Bu Kadar Büyük Sonuç Doğurur?',
    description: 'İnsan iradesinin büyüklüğü yaratmakta değil, yönelmektedir. Küçük bir tercih nasıl büyük sonuçlar doğurur? Cüz-i ihtiyarî neden önemli?\n\n#derinokuma #irade #risaleinur #sorumluluk #iman',
    language: 'tr',
    author: 'Muhammet Yahya Ozer',
    job_id_hint: '26-soz-1-mebhas-kader-bizi-sorumluluktan-kurtarir-mi-short-004-day-44'
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
      narration: 'Cüz-i ihtiyarî küçük görünür. Yaratma gücü yok onda. Ama insan bu sınırlı iradeyle neden bu kadar büyük bir sorumluluk taşıyor?',
      visual_note: 'A single falling domino starting a long chain reaction, macro close-up, cause and effect.',
      keywords: ['domino effect', 'chain reaction', 'small cause big effect', 'responsibility']
    },
    {
      scene_id: 'scene-002',
      narration: 'Kötülük çoğu zaman tahrip cinsindendir. Yıkmak yapmak kadar güç gerektirmez. Bir kibrit büyük bir binayı yakabilir. İnsan da küçük bir tercihle büyük bir tahribatın kapısını açabilir. Bu yüzden insanın isyanı hafife alınmaz.',
      visual_note: 'Single match flame extreme close-up, dark background, fragile power about to ignite.',
      keywords: ['match flame', 'fragile power', 'destruction potential', 'close-up']
    },
    {
      scene_id: 'scene-003',
      narration: 'Ama bu ağırlık insanı ezmek için değildir. Tercihini önemse. Neye yöneldiğini, neyi istediğini, hangi kapıyı açtığını düşün. Küçük seçimler büyük yönler belirler. Ve o yönü belirleyen seninle başlar.',
      visual_note: 'Compass needle pointing on a detailed map, navigation, intention and careful direction.',
      keywords: ['compass navigation', 'direction', 'intention', 'careful choice']
    }
  ],

  metadata: {
    source: 'derin-okuma',
    blog_post: '26-soz-1-mebhas-kader-bizi-sorumluluktan-kurtarir-mi',
    test_day: 'day-44',
    short_id: 'short-004',
    workflow: 'manual_scene_json_single_track_shorts_load_input',
    content_generation_status: 'filled'
  }
};

return [{ json: { raw_input: rawInput } }];
