$(window).resize(function(){
    $('html').css({'font-size':$(window).width()/3.2+"px"});
});

$(function(){
	$('html').css({'font-size':$(window).width()/3.2+"px"});
	
	$('nav .swiper-slide').click(function(){
		var index = $(this).index();
		$('.tab').eq(index).css('display','block').siblings('.tab').css('display','none');
	});

	// ------加载更多------
	var myscroll = new iScroll("wrapper",{
		onScrollMove:function(){
			if (this.y<(this.maxScrollY)) {
				$('.pull_icon').addClass('flip');
				$('.pull_icon').removeClass('loading');
				$('.more span').text('释放加载...');
			}else{
				$('.pull_icon').removeClass('flip loading');
				$('.more span').text('上拉加载...')
			}
		},
		onScrollEnd:function(){
			if ($('.pull_icon').hasClass('flip')) {
				$('.pull_icon').addClass('loading');
				$('.more span').text('加载中...');
				pullUpAction();
			}
			
		},
		onRefresh:function(){
			$('.more').removeClass('flip');
			$('.more span').text('上拉加载...');
		}
		
	});
	
	function pullUpAction(){
		setTimeout(function(){
			/*$.ajax({
				url:'/json/ay.json',
				type:'get',
				dataType:'json',
				success:function(data){
					for (var i = 0; i < 5; i++) {
						$('.scroller ul').append(data);
					}
					myscroll.refresh();
				},
				error:function(){
					console.log('error');
				},
			})*/
			for (var i = 0; i < 5; i++) {
				$('.article .container').append("<div>一只将死之猿!</div>");
			}
			myscroll.refresh();
		}, 1000)
	}
	// if ($('.article').height()<$('#wrapper').height()) {
	// 	$('.more').hide();
	// 	myscroll.destroy();
	// }
})