$(function(){$('.owl-item').height(document.body.clientWidth/2.18);$(window).resize(function()
{$('.owl-item').height(document.body.clientWidth/2.18);});});function textSliderCentr(){$('.slide p').width(document.body.clientWidth);
$('.slide p').css('top',(document.body.clientWidth/3/2)+110+'px');
if(document.body.clientWidth>=1200)
{
	$('.slide p.about').css('top',document.body.clientWidth/10+'px');
}
}
$(function(){textSliderCentr();});$(window).resize(function(){textSliderCentr();});
function sliderBoxCentr(){$('#sliderCenterBox').css('margin-top',document.body.clientWidth/3/2+'px');}
$(function(){sliderBoxCentr();});$(window).resize(function(){sliderBoxCentr();});
function centrSliderButtons(){$('.owl-controls').css('margin-left','0');$('.owl-controls').css('left','5%');$('.owl-controls').css('width','auto');}
$(function(){centrSliderButtons();});$(window).resize(function(){centrSliderButtons();});
function centrMouseLine(){$('.mouseLine').css('height',document.body.clientWidth/15+'px');
$('.mouseLine').css('width',document.body.clientWidth+'px');$('.mouseLine img').css('height',document.body.clientWidth/15+'px');
$('.mouseLine img').css('width',document.body.clientWidth+'px');if(document.body.clientWidth<1200)$('.mouseLine').css('margin-top','-30px');
else $('.mouseLine').css('margin-top','-2.55%');}$(function(){centrMouseLine();});$(window).resize(function(){centrMouseLine();});
