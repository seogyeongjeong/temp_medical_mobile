


// 메인 비쥬얼.
$(function () {
	// 메인비주얼 

		var setTimeOut;
			var $sliderItem = $('#main_visual_re .bx-visual-wrap .bx-slider li');
			var slider = $('#main_visual_re .bx-visual-wrap .bx-slider').bxSlider({
				speed : 800,
				controls :false,
				useCSS : false,
				//easing:'easeOutExpo',
				//video : true,
				infiniteLoop : true,
				pagerCustom : false,
				onSliderLoad : function(currentIndex){
					if($sliderItem.eq(currentIndex).find('iframe').length){
						var iframe = $sliderItem.eq(currentIndex).find('iframe')[0];
						var player = new Vimeo.Player(iframe);

						player.play();

						player.on('timeupdate', function(data){
							if(data.seconds == data.duration){
								slider.goToNextSlide();
								player.off('timeupdate');
							}
						});
					}else{
						setTimeOut = setTimeout(function(){
							slider.goToNextSlide();
						}, 10000);
					}
				},
				onSlideBefore : function($slideElement, oldIndex, newIndex){
					clearTimeout(setTimeOut);
					if($sliderItem.eq(newIndex).find('iframe').length){
						var iframe = $sliderItem.eq(newIndex).find('iframe')[0];
						var player = new Vimeo.Player(iframe);

						player.play();
					}
				},
				onSlideAfter : function($slideElement, oldIndex, newIndex){
					if($sliderItem.eq(newIndex).find('iframe').length){
						var iframe = $sliderItem.eq(newIndex).find('iframe')[0];
						var player = new Vimeo.Player(iframe);

						player.on('timeupdate', function(data){
							if(data.seconds == data.duration){
								slider.goToNextSlide();
								player.off('timeupdate');
							}
						});
					}else{
						setTimeOut = setTimeout(function(){
							slider.goToNextSlide();
						}, 10000);
					}
					if($sliderItem.eq(oldIndex).find('iframe').length){
						var prevIframe = $sliderItem.eq(oldIndex).find('iframe')[0];
						var prevPlayer = new Vimeo.Player(prevIframe);
						prevPlayer.pause();
						prevPlayer.setCurrentTime(0);
					}
				}
			});
   
    
    
    
	$('#main_visual_re .btn_prev').on('click',function(e){
		e.preventDefault();
		slider.goToPrevSlide();
	});
	$('#main_visual_re .btn_next').on('click',function(e){
		e.preventDefault();
		slider.goToNextSlide();
	});
	
	



});
