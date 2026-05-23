// Derin Okuma - External Smoke 2 Shorts Batch Load Input
// Generated for low-cost real external smoke testing.
// Paste this into the n8n Load Input Code node.

const rawInputs = [
  {
    input_version: '0.1.0',
    input_type: 'manual_scene_json',
    runtime: {
      repo_root: '/home/muhammet/projects/scene-blog-video',
      renderer_url: 'http://127.0.0.1:8000'
    },
    job: {
      title: 'Emanet Kısa Bir Bakıştır',
      description: 'Sahiplik sandığın şeyler bazen sadece emanet olur.',
      language: 'tr',
      author: 'Muhammet Yahya Ozer',
      job_id_hint: 'external-smoke-test-short-001-day29-external-smoke-a'
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
        narration: 'Emanet, insana yük değil; ölçü öğretir.',
        visual_note: 'quiet forest path at dawn, soft light through trees',
        keywords: ['forest path', 'dawn', 'quiet', 'trees']
      }
    ],
    metadata: {
      source: 'derin-okuma',
      blog_post: 'external-smoke-test',
      test_day: 'day-29',
      short_id: 'short-001',
      batch_run_id: 'day29-external-smoke-a',
      workflow: 'manual_scene_json_single_track_shorts_load_input',
      content_generation_status: 'filled'
    }
  },
  {
    input_version: '0.1.0',
    input_type: 'manual_scene_json',
    runtime: {
      repo_root: '/home/muhammet/projects/scene-blog-video',
      renderer_url: 'http://127.0.0.1:8000'
    },
    job: {
      title: 'Sahiplik Yorgunluğu',
      description: 'Bazen kalbi yoran şey, elinde tutma çabasıdır.',
      language: 'tr',
      author: 'Muhammet Yahya Ozer',
      job_id_hint: 'external-smoke-test-short-002-day29-external-smoke-a'
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
        narration: 'Sahip olmak yerine anlamayı seç.',
        visual_note: 'calm mountain lake with soft clouds, still water',
        keywords: ['mountain lake', 'clouds', 'still water', 'calm']
      },
      {
        scene_id: 'scene-002',
        narration: 'Çünkü bazı şeyler tutuldukça değil, bırakıldıkça netleşir.',
        visual_note: 'slow calm river flowing through open nature, peaceful daylight',
        keywords: ['calm river', 'peaceful', 'daylight', 'nature']
      }
    ],
    metadata: {
      source: 'derin-okuma',
      blog_post: 'external-smoke-test',
      test_day: 'day-29',
      short_id: 'short-002',
      batch_run_id: 'day29-external-smoke-a',
      workflow: 'manual_scene_json_single_track_shorts_load_input',
      content_generation_status: 'filled'
    }
  }
];

if (rawInputs.length !== 2) {
  throw new Error(`External smoke batch must contain exactly 2 items, got ${rawInputs.length}`);
}

const totalNarrationChars = rawInputs.reduce((total, rawInput) => {
  const scenes = Array.isArray(rawInput.scenes) ? rawInput.scenes : [];
  if (scenes.length > 2) {
    throw new Error(`Short ${rawInput.metadata?.short_id || rawInput.job?.job_id_hint || 'unknown'} has more than 2 scenes (${scenes.length})`);
  }
  return total + scenes.reduce((sceneTotal, scene) => sceneTotal + String(scene.narration || '').length, 0);
}, 0);

if (totalNarrationChars > 500) {
  throw new Error(`External smoke batch narration limit exceeded: ${totalNarrationChars} > 500`);
}

return rawInputs.map((rawInput) => ({ json: { raw_input: rawInput } }));
