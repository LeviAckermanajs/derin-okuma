// Derin Okuma — 22. Mektup Hâtime — short-005
const rawInput = {
  input_version:'0.1.0', input_type:'manual_scene_json',
  runtime:{repo_root:'/home/muhammet/projects/scene-blog-video',renderer_url:'http://127.0.0.1:8000'},
  job:{title:'Kusur Söylemek Ne Zaman Gerekir?',description:'Hakkı korumak için gerekli uyarı ile ayıbı yaymak arasındaki farkı niyet, muhatap ve ölçü belirler.',language:'tr',author:'Muhammet Yahya Ozer',job_id_hint:'22-mektup-hatime-giybet-short-005-day-42'},
  reuse_existing_audio:{enabled:false,audio_mode:'single_track',audio_track:{mode:'single',path:'',duration_seconds:null}},
  reuse_existing_video:{enabled:false,visual_mode:'semantic',video_root:'',path_template:'{scene_id}.mp4'}, visual_mode:'ambient',
  audio_strategy:{mode:'single_track',timing_strategy:'elevenlabs_timestamps',join_separator:'\n\n'},
  render_preferences:{mode:'shorts',subtitles_enabled:true,render_mode:'shorts',produce_both:false,background_music_enabled:true,target_fps:30},
  scenes:[
    {scene_id:'scene-001',narration:'Birinin kusurunu söylemek ne zaman gıybet sayılmaz? Bir haksızlığı gidermek, ciddi bir zararı önlemek veya samimi bir danışmaya cevap vermek için gerekli bilgi paylaşılabilir.',visual_note:'serious private consultation across a desk, respectful setting',keywords:['private consultation','desk','responsibility']},
    {scene_id:'scene-002',narration:'Fakat üç ölçü korunmalıdır: Söz doğru kişiye, haklı bir amaçla ve yalnızca gerektiği kadar söylenmelidir. Öfke, teşhir ve intikam bu sınırı bozar.',visual_note:'three balanced stones stacked carefully, minimalist scene',keywords:['balanced stones','measure','restraint']},
    {scene_id:'scene-003',narration:'Niyet yarayı onarmaksa dil çözüm arar; kişiyi küçültmekse ayrıntıları çoğaltır. İnsan konuşmadan önce kendi maksadına dürüstçe bakmalıdır.',visual_note:'person looking into mirror in quiet morning light',keywords:['mirror','intention','self reflection']}
  ],
  metadata:{source:'derin-okuma',blog_post:'22-mektup-hatime-giybet',test_day:'day-42',short_id:'short-005',workflow:'manual_scene_json_single_track_shorts_load_input',content_generation_status:'filled'}
};
return [{json:{raw_input:rawInput}}];
