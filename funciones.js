// JavaScript Document

$(document).ready(function() {
	$('.item').hover(function(){
        $(this).find('.caption').fadeIn(600);
		$(this).css('outline', '2px solid #222');
		$(this).find('img').animate({width:'200px', height:'200px', margin:'-37px 0 0 -37px'}, 600);
    },
	function(){
		$(this).find('.caption').fadeOut(600);
		$(this).css('outline', 'none');
		$(this).find('img').animate({width:'125px', height:'125px', margin:'0 0 0 0'}, 600);
	});
	
});