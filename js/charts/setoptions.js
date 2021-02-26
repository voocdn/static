function getChartline(year,num,ty,cid,id,title,series_name){	
$.getJSON("https://api.atmcdn.com/jsonp/chart.php?callback=?",{year:year,num:num,type:ty,cid:cid,id:id}).success(function (response) {
var date = eval(response);
showChartline(date,year,num,ty,cid,id,title,series_name);
}).error(function (response) {
alert("超时或网络故障!请刷新本页!")
});
}

function showChartline(date,year,num,ty,cid,id,title,series_name){	  
var options = {
credits:{enabled:false,},
chart: {type: ty ,renderTo: 'container',shadow: true},
title: {text: title,},
xAxis: {gridLineColor: '#EEEEEE',gridLineWidth: 1,allowDecimals: false,tickInterval:1,labels:{rotation:45,step:1},min:1,max:25},
yAxis: {gridLineColor: '#EEEEEE',gridLineWidth: 1,allowDecimals: false,title: {text: title},tickInterval:1,},
scrollbar: {enabled: true},
plotOptions: {
line: {dataLabels: {enabled: true,format: '<b>{point.name}</b>',},enableMouseTracking: true},
spline: {dataLabels: {enabled: true,format: '<b>{point.name}</b>',},enableMouseTracking: true},
area: {dataLabels: {enabled: true,format: '<b>{point.name}</b>',},enableMouseTracking: true},
},
tooltip: {
borderRadius:0,crosshairs:[true, true],
useHTML:true,formatter:function(){var s = '<b>' +  this.x + '开奖结果:</b>';s += '<p>' + date.res[this.x] +'</p>';return s;} },
series: [{name: series_name,data: [],}]
};
$(function () {
var chart = new Highcharts.Chart(options);
chart.series[0].setData(eval(date.series));
chart.xAxis[0].setCategories(eval(date.q));
});
}