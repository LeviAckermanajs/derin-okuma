// Derin Okuma — 22. Mektup Hâtime — short-003
const rawInput = {
  input_version:'0.1.0', input_type:'manual_scene_json',
  runtime:{repo_root:'/home/muhammet/projects/scene-blog-video',renderer_url:'http://127.0.0.1:8000'},
  job:{title:'Doğru Söz Ne Zaman Gıybettir?',description:'Bir kusurun gerçek olması, onu kişinin yokluğunda yaymayı masumlaştırmaz.',language:'tr',author:'Muhammet Yahya Ozer',job_id_hint:'22-mektup-hatime-giybet-short-003-day-42'},
  reuse_existing_audio:{enabled:false,audio_mode:'single_track',audio_track:{mode:'single',path:'',duration_seconds:null}},
  reuse_existing_video:{enabled:false,visual_mode:'semantic',video_root:'',path_template:'{scene_id}.mp4'}, visual_mode:'ambient',
  audio_strategy:{mode:'single_track',timing_strategy:'elevenlabs_timestamps',join_separator:'\n\n'},
  render_preferences:{mode:'shorts',subtitles_enabled:true,render_mode:'shorts',produce_both:false,background_music_enabled:true,target_fps:30},
  scenes:[
    {scene_id:'scene-001',narration:'Söylediğiniz şey doğruysa, gıybet olmaktan çıkar mı? Hayır. Gerçek bir kusuru kişinin yokluğunda ve onu incitecek biçimde anlatmak, gıybetin kendisidir.',visual_note:'sealed letter beside an open noticeboard, symbolic privacy contrast',keywords:['sealed letter','noticeboard','privacy']},
    {scene_id:'scene-002',narration:'Doğruluk, her bilgiyi her yerde söyleme izni vermez. Bir sözün gerçekliği kadar niçin, kime ve ne ölçüde söylendiği de önemlidir.',visual_note:'person weighing two stones on an old balance scale',keywords:['balance scale','judgment','measure']},
    {scene_id:'scene-003',narration:'Eğer anlatılan şey yalan ise yük daha da ağırlaşır; gıybete iftira eklenir. Dili koruyan ölçü, bilgiden önce adalet ve merhamettir.',visual_note:'distorted reflection in cracked mirror, restrained dramatic light',keywords:['cracked mirror','distortion','justice']}
  ],
  metadata:{source:'derin-okuma',blog_post:'22-mektup-hatime-giybet',test_day:'day-42',short_id:'short-003',workflow:'manual_scene_json_single_track_shorts_load_input',content_generation_status:'filled'}
};
return [{json:{raw_input:rawInput}}];
