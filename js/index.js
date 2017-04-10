$(window).resize(function(){
    $('html').css({'font-size':$(window).width()/3.2+"px"});
});

$(function(){
	$('html').css({'font-size':$(window).width()/3.2+"px"});
	$('nav .swiper-slide').click(function(){
		var index = $(this).index();
		$('.tab').eq(index).css('display','block').siblings('.tab').css('display','none');
	});
})