// Derin Okuma — 22. Mektup Hâtime — short-004
const rawInput = {
  input_version:'0.1.0', input_type:'manual_scene_json',
  runtime:{repo_root:'/home/muhammet/projects/scene-blog-video',renderer_url:'http://127.0.0.1:8000'},
  job:{title:'Dinleyen Gıybete Nasıl Ortak Olur?',description:'Gıybet, yalnızca konuşanın sesiyle değil, onu besleyen ilgiyle de sürer.',language:'tr',author:'Muhammet Yahya Ozer',job_id_hint:'22-mektup-hatime-giybet-short-004-day-42'},
  reuse_existing_audio:{enabled:false,audio_mode:'single_track',audio_track:{mode:'single',path:'',duration_seconds:null}},
  reuse_existing_video:{enabled:false,visual_mode:'semantic',video_root:'',path_template:'{scene_id}.mp4'}, visual_mode:'ambient',
  audio_strategy:{mode:'single_track',timing_strategy:'elevenlabs_timestamps',join_separator:'\n\n'},
  render_preferences:{mode:'shorts',subtitles_enabled:true,render_mode:'shorts',produce_both:false,background_music_enabled:true,target_fps:30},
  scenes:[
    {scene_id:'scene-001',narration:'Hiç konuşmadan da gıybete ortak olabilir miyiz? İstekle dinlemek, gülmek veya yeni ayrıntılar sormak, yanlış sözün devamına güç verir.',visual_note:'small group listening closely to a whisper, subdued indoor scene',keywords:['group listening','whisper','complicity']},
    {scene_id:'scene-002',narration:'Sessizlik her zaman onay değildir; fakat bazen ortamın rahatça sürmesine izin verir. Vicdanın rahatsızlığı, bize bir sınır koyma sorumluluğu hatırlatır.',visual_note:'thoughtful person becoming uneasy during group conversation',keywords:['uneasy person','conversation','conscience']},
    {scene_id:'scene-003',narration:'Konuyu değiştirmek, kişinin iyi bir yönünü hatırlatmak veya nazikçe ayrılmak mümkündür. Gıybeti durdurmak için her zaman sertleşmek gerekmez; sakin bir tavır da yeterlidir.',visual_note:'person gently redirecting conversation with calm hand gesture',keywords:['calm gesture','boundary','redirection']}
  ],
  metadata:{source:'derin-okuma',blog_post:'22-mektup-hatime-giybet',test_day:'day-42',short_id:'short-004',workflow:'manual_scene_json_single_track_shorts_load_input',content_generation_status:'filled'}
};
return [{json:{raw_input:rawInput}}];
