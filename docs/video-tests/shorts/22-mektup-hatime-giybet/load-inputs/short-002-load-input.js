// Derin Okuma — 22. Mektup Hâtime — short-002
const rawInput = {
  input_version:'0.1.0', input_type:'manual_scene_json',
  runtime:{repo_root:'/home/muhammet/projects/scene-blog-video',renderer_url:'http://127.0.0.1:8000'},
  job:{title:'Gıybet Güveni Nasıl Zehirler?',description:'Başkalarının kusurlarıyla kurulan sohbet, dostluğu değil kuşkuyu büyütür.',language:'tr',author:'Muhammet Yahya Ozer',job_id_hint:'22-mektup-hatime-giybet-short-002-day-42'},
  reuse_existing_audio:{enabled:false,audio_mode:'single_track',audio_track:{mode:'single',path:'',duration_seconds:null}},
  reuse_existing_video:{enabled:false,visual_mode:'semantic',video_root:'',path_template:'{scene_id}.mp4'}, visual_mode:'ambient',
  audio_strategy:{mode:'single_track',timing_strategy:'elevenlabs_timestamps',join_separator:'\n\n'},
  render_preferences:{mode:'shorts',subtitles_enabled:true,render_mode:'shorts',produce_both:false,background_music_enabled:true,target_fps:30},
  scenes:[
    {scene_id:'scene-001',narration:'Gıybet edilen bir ortamda neden kimse gerçekten güvende değildir? Çünkü herkes aynı soruyu düşünür: Ben ayrıldığımda benim hakkımda ne konuşulacak?',visual_note:'group at cafe with one empty chair, subtle social tension',keywords:['cafe group','empty chair','distrust']},
    {scene_id:'scene-002',narration:'Başkalarının kusurları üzerine kurulan yakınlık, gerçek dostluk üretmez. İnsanları birbirine bağlar gibi görünürken aralarına şüphe yerleştirir.',visual_note:'friends sitting apart on a long bench, muted evening colors',keywords:['distant friends','bench','suspicion']},
    {scene_id:'scene-003',narration:'Aileler, arkadaşlıklar ve çalışma ortamları bazen büyük kavgalarla değil, küçük imalarla yorulur. Güveni korumanın yolu, yokluğunda da insanın hakkını korumaktır.',visual_note:'small crack spreading across a glass surface, symbolic close-up',keywords:['cracked glass','trust','fragility']}
  ],
  metadata:{source:'derin-okuma',blog_post:'22-mektup-hatime-giybet',test_day:'day-42',short_id:'short-002',workflow:'manual_scene_json_single_track_shorts_load_input',content_generation_status:'filled'}
};
return [{json:{raw_input:rawInput}}];
