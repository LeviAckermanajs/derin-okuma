// Derin Okuma — 22. Mektup Hâtime — short-001
const rawInput = {
  input_version:'0.1.0', input_type:'manual_scene_json',
  runtime:{repo_root:'/home/muhammet/projects/scene-blog-video',renderer_url:'http://127.0.0.1:8000'},
  job:{title:'Gıybet Neden Görünmeyen Bir Yaradır?',description:'Gıybet, konuşma bittiğinde sona ermez; insanın onurunda ve söyleyenin kalbinde iz bırakır.',language:'tr',author:'Muhammet Yahya Ozer',job_id_hint:'22-mektup-hatime-giybet-short-001-day-42'},
  reuse_existing_audio:{enabled:false,audio_mode:'single_track',audio_track:{mode:'single',path:'',duration_seconds:null}},
  reuse_existing_video:{enabled:false,visual_mode:'semantic',video_root:'',path_template:'{scene_id}.mp4'}, visual_mode:'ambient',
  audio_strategy:{mode:'single_track',timing_strategy:'elevenlabs_timestamps',join_separator:'\n\n'},
  render_preferences:{mode:'shorts',subtitles_enabled:true,render_mode:'shorts',produce_both:false,background_music_enabled:true,target_fps:30},
  scenes:[
    {scene_id:'scene-001',narration:'Bir insanın yokluğunda söylediğimiz söz, neden bu kadar ağır olabilir? Çünkü o kişi kendini savunamaz; onuru, haberi olmadan başkalarının diline bırakılır.',visual_note:'empty chair in a quiet room, soft side light, cinematic mood',keywords:['empty chair','quiet room','soft light']},
    {scene_id:'scene-002',narration:'Gıybet küçük bir sohbet parçası gibi görünür. Fakat aklı kusur aramaya, kalbi nefrete ve vicdanı sessiz kalmaya alıştırır.',visual_note:'dark ink slowly spreading through clear water',keywords:['ink in water','spreading','hidden harm']},
    {scene_id:'scene-003',narration:'Konuşma birkaç dakika sürse de açtığı yara daha uzun yaşayabilir. Dili korumak, yalnızca başkasının itibarını değil, kendi iç dünyamızı da korumaktır.',visual_note:'hands protecting a small warm light in darkness',keywords:['protective hands','warm light','dignity']}
  ],
  metadata:{source:'derin-okuma',blog_post:'22-mektup-hatime-giybet',test_day:'day-42',short_id:'short-001',workflow:'manual_scene_json_single_track_shorts_load_input',content_generation_status:'filled'}
};
return [{json:{raw_input:rawInput}}];
