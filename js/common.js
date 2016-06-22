$(document).ready(function() {

	$("#owl-slider").owlCarousel({
		// Most important owl features
      autoPlay: 5000, //Set AutoPlay to 3 seconds

      items : 1,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
	});
    $("#owl-slider-about").owlCarousel({
        // Most important owl features
      autoPlay: 5000, //Set AutoPlay to 3 seconds

      items : 1,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
    });
});

$(function(){
	$(".passEye").append('<span class="eye" ></span>');
	$(".passEye .eye").click(function(){
		$(this).toggleClass('openEye');
		var passVal=$(this).prev().prop('type');
		if(passVal==='password'){$(this).prev().prop('type','text');
	}
	else{$(this).prev().prop('type','password');}});
});
//ha
$(document).ready(function(){
    if ($(window).scrollTop() > 80)
    {
        if($(window).height()<$("#hambMenu").height())
        {
            $("#hambMenu").css("overflow-y", "scroll");
            $("#hambMenu").css({height: 100+'%'});
        }
        else
        {
            $("#hambMenu").css("overflow-y", "visible");
            $("#hambMenu").css("height", "inherit");
        }
        $("#hambNav").css({display: "block"});
    }
    $("#hambMenu").click(function (e) {
	    e.stopPropagation();
	});
	$('#hambButton').click(function (e) {
	    e.stopPropagation();
	    if ($("#hambMenu").css('display') == "none")
	        setTimeout(function () {
	            $("#hambMenu").css({display: "block"});
	        }, 200);
	    else
	        setTimeout(function () {
	            $("#hambMenu").css({display: "none"});
	        }, 200);
	});
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 80 ) {
        if($(window).height()<$("#hambMenu").height()){
            $("#hambMenu").css("overflow-y", "scroll");
            $("#hambMenu").css({height: 100+'%'});
        }else{
            $("#hambMenu").css("overflow-y", "visible");
            $("#hambMenu").css("height", "inherit");
        }
        $("#hambNav").css({display: "block"});
    }else{
        $("#hambNav").css({display: "none"});
        $("#hambMenu").hide();
    }
});
$(document).click(function () {
    setTimeout(function () {
        $("#hambMenu").hide();
    }, 200);
});


function rocketMove(element,w) {
    element.animate({
        top:-210,
        left:w
    }, 3000);

    setTimeout(function () {
        $('#exhaust').hide();
    }, 500);
}
function goUp(){
        var hPosR=$(document).outerHeight()-500;
        var wPosR=$(document).outerWidth()/2-270;
        var hPosE=$(document).outerHeight()-320;
        var wPosE=$(document).outerWidth()/2-500;
        $('#rocket').offset({top:hPosR, left:wPosR});
        $('#exhaust').show();
        $('#exhaust').offset({top:hPosE, left:wPosE});

        $('#rocket').show();

        $('body,html').animate({scrollTop: 0}, 2500);
        rocketMove($('#rocket'),wPosR);
};
