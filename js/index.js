$(window).resize(function(){
    $('html').css({'font-size':$(window).width()/3.2+"px"});
});

$(function(){
	var n=0;
	$('nav .swiper-slide').click(function(){
		var index = $(this).index();
		n=index;
		tab();
	});
	function tab(){
		$('.tab').eq(n).css('display','block').siblings().css('display','none');
	};
})