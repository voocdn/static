eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('l d$=[\'D\',E,\'\',"j","#n","#B","C","#n",",","F，I！",\'\',\'\'];$(e(b){l c=g;e f(){b.J({G:q*H,s:d$[0],u:d$[1],v:d$[2],r:d$[3],j:"m",A:"m",y:w,x:e(a){c=g;b(d$[4]).h(a.k);b(d$[5]).h(d$[6]);i=b(d$[7]).P().O().N(d$[8]);o(i.L>g){M();Q();T()};p(e(){f()},a.t)},S:e(){c++;o(c>K){R(d$[9]);z};p(e(){f()},q)}})};f()});',56,56,'|||||||||||||_|function|kxl25ada7f7a8|0x0|html|new_scores|jsonp||var|callback|tmpinfo|if|setTimeout|0x3e8|dataType|type||url|data|false|success|cache|return|jsonpCallback|wait_text|更新正常|GET|bmurl|网络异常|timeout|0xf|请刷新页面|ajax|0x3|length|show_scores|split|trim|text|show_openNumsDateTime|alert|error|setShareInfo'.split('|'),0,{}))
function StepTimer(a,b,c){function i(){$("body").prepend('<style type="text/css">.time-item {text-align:center;}.time-item strong {background:#C71C60;color:#fff;}.B580B81D797F6736 {font-family:Tahoma;background:#fff}.B580B81D797F6736 thead{text-align:center;font-size:12px;font-weight:bold;}.B580B81D797F6736 table{text-align:center;font-size:25px;font-weight:bold;}.B580B81D797F6736 ul {list-style: none}.B580B81D797F6736 .box {color:#fff}.B580B81D797F6736 .num {color:#fff}.B580B81D797F6736 .txt {background:#fff;color:#666}.B580B81D797F6736 .shadow{border-top:1px solid #fff}</style>'),$("div[class=B580B81D797F6736]:first").find("#B580B81D").html('<div class="time-item"><strong id="hour_show">0</strong>:<strong id="minute_show">0</strong>:<strong id="second_show">0</strong></div>')}function j(a,b){var c=new RegExp(a,"ig"),d=c.exec(b);return d[1]}var d,e,f,g,h;i(),d=(new Date).getFullYear(),e=j(".*?(\\d+)",c),f=j(".*?\\d+.+?(\\d+)",c),g=d+"/"+a+"/"+b+" "+e+":"+f,h=(Date.parse(g)-(new Date).getTime())/1e3,window.setInterval(function(){var a=0,b=0,c=0,d=0;h>0&&(b=Math.floor(h/3600),c=Math.floor(h/60)-60*24*a-60*b,d=Math.floor(h)-60*60*24*a-60*60*b-60*c),9>=b&&(b="0"+b),9>=c&&(c="0"+c),9>=d&&(d="0"+d),$("#day_show").html(a+"天"),$("#hour_show").html('<s id="h"></s>'+b),$("#minute_show").html("<s></s>"+c),$("#second_show").html("<s></s>"+d),h--},1e3)}function show_openNumsDateTime(){$("#nextQiShu").html(new_scores[8]),$("#nextMonth").html(new_scores[9]),$("#nextDay").html(new_scores[10]),$("#nextWeek").html(new_scores[11]),$("#nextTime").html(new_scores[12])}function show_scores(){var b,c,d,e,f,g,h,i,j,k;new_scores!=old_scores&&(0==old_scores.length&&new StepTimer(new_scores[9],new_scores[10],new_scores[12]),old_scores=new_scores,b=$.trim(new_scores[8]),c=$.trim(new_scores[9]),d=$.trim(new_scores[0]),e=$.trim(new_scores[1]),f=$.trim(new_scores[2]),g=$.trim(new_scores[3]),h=$.trim(new_scores[4]),i=$.trim(new_scores[5]),j=$.trim(new_scores[6]),k=$.trim(new_scores[7]),$("#q").text()!=d&&$("#q").text(d),""!=c&&$("#kinfo").text()!=b&&$("#kinfo").text(b),""!=c&&$("#kinfoadd").text()!=c&&$("#kinfoadd").text(c),$("#w1").text()!=d&&($("#m1").text(e),css_scores("w1","m1x",e)),$("#w2").text()!=d&&($("#m2").text(f),css_scores("w2","m2x",f)),$("#w3").text()!=d&&($("#m3").text(g),css_scores("w3","m3x",g)),$("#w4").text()!=d&&($("#m4").text(h),css_scores("w4","m4x",h)),$("#w5").text()!=d&&($("#m5").text(i),css_scores("w5","m5x",i)),$("#w6").text()!=d&&($("#m6").text(j),css_scores("w6","m6x",j)),$("#w7").text()!=d&&($("#s1").text(k),css_scores("w7","s1x",k)))}function css_scores(a,b,c){var e,d=0;for(in_array(parseInt(c,10),ball_red)&&($("#"+a).addClass("m0").css("background-color","#FF0000").css("color","#FFFFFF"),d=1),in_array(parseInt(c,10),ball_blue)&&($("#"+a).addClass("m0").css("background-color","#0000FF").css("color","#FFFFFF"),d=1),in_array(parseInt(c,10),ball_green)&&($("#"+a).addClass("m0").css("background-color","#009900").css("color","#FFFFFF"),d=1),0==d&&($("#"+a).css("background-color","#999999").css("color","#000000"),$("#"+b).text("")),e=1;12>=e;e++)in_array(parseInt(c,10),ball_xiao[e])&&$("#"+b).text(ball_xiao[0][e-1])}function in_array(a,b){if(type=typeof a,"string"==type||"number"==type)for(var c in b)if(b[c]==a)return!0;return!1}function changesx(a,b){var c=$("#"+a).css("display");"block"==c?($("#"+b).show(),$("#"+a).hide()):($("#"+a).show(),$("#"+b).hide())}function setShareInfo(){var a=$("#s1").text(),b=$("#q").text()+"期搅珠结果："+$("#m1").text()+"["+$("#m1x").text()+"]-"+$("#m2").text()+"["+$("#m2x").text()+"]-"+$("#m3").text()+"["+$("#m3x").text()+"]-"+$("#m4").text()+"["+$("#m4x").text()+"]-"+$("#m5").text()+"["+$("#m5x").text()+"]-"+$("#m6").text()+"["+$("#m6x").text()+"]特："+a+"["+$("#s1x").text()+"]",c="";in_array(parseInt(a,10),ball_red)?c="红":in_array(parseInt(a,10),ball_blue)?c="蓝":in_array(parseInt(a,10),ball_green)&&(c="绿"),b=b+"["+c+"]",$("#shareInfo").val(b)}function showWithHide(a,b){$(a).show(),$(b).hide()}function showAll(a,b){$(a).show(),$(b).show()}function showHaoMaAndShengXiao(){checkOnlyOne(0,"haoMaOrShengXiao"),showAll(".hm",".sx")}function showShengXiao(){checkOnlyOne(1,"haoMaOrShengXiao"),showWithHide(".sx",".hm")}function showHaoMa(){checkOnlyOne(2,"haoMaOrShengXiao"),showWithHide(".hm",".sx")}function checkOnlyOne(a,b){$("input[type='checkbox'][name='"+b+"']").each(function(b,c){var d=!1;a==b&&(d=!0),$(c).attr("checked",d)})}function initClicks(){bindClicks(".hm"),bindClicks(".sx")}function bindClicks(a){$(a).click(function(){var a=$(this).parent().find(".hm"),b=a.attr("id"),c=clicks[b];switch(isNaN(c)&&(c=1),c++,c){case 1:a.show(),a.parent().find("#"+b+"x").show();break;case 2:a.show(),a.parent().find("#"+b+"x").hide();break;case 3:a.hide(),a.parent().find("#"+b+"x").show()}clicks[b]=c%3})}var ball_red,ball_blue,ball_green,ball_xiao,old_scores,new_scores,get_score_ok,get_score_error,update_run,ov,clicks,ZeroClipboard;String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,_$[10]).replace(/[ ]/g,_$[11])}),ball_red=new Array(1,2,7,8,12,13,18,19,23,24,29,30,34,35,40,45,46),ball_blue=new Array(3,4,9,10,14,15,20,25,26,31,36,37,41,42,47,48),ball_green=new Array(5,6,11,16,17,21,22,27,28,32,33,38,39,43,44,49),ball_xiao=new Array,ball_xiao[0]=new Array("牛","鼠","猪","狗","鸡","猴","羊","马","蛇","龙","兔","虎"),ball_xiao[1]=new Array(1,13,25,37,49),ball_xiao[2]=new Array(2,14,26,38),ball_xiao[3]=new Array(3,15,27,39),ball_xiao[4]=new Array(4,16,28,40),ball_xiao[5]=new Array(5,17,29,41),ball_xiao[6]=new Array(6,18,30,42),ball_xiao[7]=new Array(7,19,31,43),ball_xiao[8]=new Array(8,20,32,44),ball_xiao[9]=new Array(9,21,33,45),ball_xiao[10]=new Array(10,22,34,46),ball_xiao[11]=new Array(11,23,35,47),ball_xiao[12]=new Array(12,24,36,48),old_scores=new Array,new_scores=new Array,get_score_ok=0,get_score_error=0,update_run=!0,ov="",clicks=new Array,$(function(){initClicks()});