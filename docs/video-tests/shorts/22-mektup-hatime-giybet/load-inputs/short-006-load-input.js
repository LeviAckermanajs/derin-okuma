// Derin Okuma — 22. Mektup Hâtime — short-006
const rawInput = {
  input_version:'0.1.0', input_type:'manual_scene_json',
  runtime:{repo_root:'/home/muhammet/projects/scene-blog-video',renderer_url:'http://127.0.0.1:8000'},
  job:{title:'Gıybetten Sonra Ne Yapılır?',description:'Dilde biten hata, kul hakkı olarak sürebilir; bağışlanma ve helallik sorumluluğu devam eder.',language:'tr',author:'Muhammet Yahya Ozer',job_id_hint:'22-mektup-hatime-giybet-short-006-day-42'},
  reuse_existing_audio:{enabled:false,audio_mode:'single_track',audio_track:{mode:'single',path:'',duration_seconds:null}},
  reuse_existing_video:{enabled:false,visual_mode:'semantic',video_root:'',path_template:'{scene_id}.mp4'}, visual_mode:'ambient',
  audio_strategy:{mode:'single_track',timing_strategy:'elevenlabs_timestamps',join_separator:'\n\n'},
  render_preferences:{mode:'shorts',subtitles_enabled:true,render_mode:'shorts',produce_both:false,background_music_enabled:true,target_fps:30},
  scenes:[
    {scene_id:'scene-001',narration:'Gıybet ettikten sonra yalnızca pişman olmak yeterli midir? Pişmanlık başlangıçtır; insan önce hatasını kabul eder ve Allah\'tan hem kendisi hem de incittiği kişi için bağışlanma ister.',visual_note:'person praying quietly beside a window before sunrise',keywords:['prayer','sunrise','repentance']},
    {scene_id:'scene-002',narration:'Fakat söz başka bir insanın onuruna da dokunmuştur. Uygun fırsatta helallik istemek, dilde biten hatanın geride bıraktığı hakkı üstlenmektir.',visual_note:'two people speaking sincerely face to face in warm light',keywords:['sincere apology','forgiveness','warm light']},
    {scene_id:'scene-003',narration:'Özür, karşı tarafı yeniden yaralayacak ayrıntılara dönüşmemelidir. Sade, samimi ve mazeretsiz bir helallik talebi; ardından da aynı yanlışa dönmemek için gerçek bir çaba gerekir.',visual_note:'open hands during quiet apology, close-up, gentle mood',keywords:['open hands','apology','sincerity']}
  ],
  metadata:{source:'derin-okuma',blog_post:'22-mektup-hatime-giybet',test_day:'day-42',short_id:'short-006',workflow:'manual_scene_json_single_track_shorts_load_input',content_generation_status:'filled'}
};
return [{json:{raw_input:rawInput}}];
