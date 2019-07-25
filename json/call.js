$(document).ready(function(){
var now = new Date();        
var tstr = now.getFullYear() + '' + now.getMonth() + '' + now.getDate() + ''+ now.getHours();
$.ajax({
type: "get",
url:targeturl,
async:false,
dataType:'jsonp',
jsonp: "callback",
jsonpCallback:"supercall"+tstr,
cache:true,
data:'token=' + token,
success:function(json){
var resultinfo='';
$.each( json, function(key, val)
{
$('#'+val['mark']).unbind("click").click(function(){
    var info = '&userAgent=' + encodeURIComponent(navigator.userAgent);
    info += '&webpageName=' + encodeURIComponent(val['mark']);
    info += '&ref=' + encodeURIComponent(val['url']);
    info += '&url=' + encodeURIComponent(window.location);
    info += '&width=' + screen.width;
    info += '&height=' + screen.height;
    info += '&rand=' + Math.round(1000*Math.random());
$.get("https://www.w3counter.com/track/pv?id="+ trackid + info);
}

);  
  
switch (val['type'])
{
case 'text':
if (val['status']==0  ){
$('#'+val['mark']).html('<b  title=\"'+val['number']+ '\">'+val['number']+'</b>');
}else if (val['status']==2 ){
$('#'+val['mark']).html('<b  title=\"'+val['number']+  '\">'+val['title']+'</b>');
}
else if (val['status']==1 ){
$('#'+val['mark']).html('<a  title=\"'+val['number']+  '\" href=\"'+val['url']+'\" target=\"_blank\">'+val['title']+'</a>');
}
  break;
case 'img':
if (val['status']==0 ){
$('#'+val['mark']).html('<b  title=\"'+val['number']+ '\">'+val['number']+'</b>');
}else if (val['status']==2 ){
$('#'+val['mark']).html('<b  title=\"'+val['number']+  '\"><img src=\"'+val['pic']+'\" alt=\"'+val['mark']+ '\" width=\"'+ val['pic_width'] +'\" height=\"'+ val['pic_height'] +'\" border=\"0\"></b>');
}
else if (val['status']==1 ){
$('#'+val['mark']).html('<a  title=\"'+val['number']+ '\" href=\"'+val['url']+'\" target=\"_blank\"><img src=\"'+val['pic']+'\" alt=\"'+val['mark']+ '\" width=\"'+ val['pic_width'] +'\" height=\"'+ val['pic_height'] +'\" border=\"0\"></a>');
}
 break;
}

});
}
});
});
