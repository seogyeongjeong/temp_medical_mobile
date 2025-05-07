$(function () {
		
			// gnb

	$('#gnb > ul > li > a').on('mouseenter focus', function() {
		$('#gnb').removeClass('on');
		$('#gnb').addClass('on');
		$('#gnb > ul > li ').removeClass('on');
		$(this).parent().addClass('on');
	
	});

	$('#gnb > ul > li').on('mouseenter', function() {
		$('#gnb > ul > li ').removeClass('on');
		$(this).addClass('on');
	});
	
	
	
	$('#gnb a.last').on('focusout', function() {
		$('#gnb').removeClass('on');
		$('#gnb > ul > li ').removeClass('on');
	});

	$('#gnb').on('mouseleave', function() {
		$('#gnb').removeClass('on');
		$('#gnb > ul > li ').removeClass('on');
	});

	
	$('#gnb .btn_menu').on('click',function(e){
		$('#gnb .btn_menu').toggleClass('on');
		$('#total_menu').toggle();
	});
	$('#gnb .btn_menu').on('mouseenter', function() {
		$('#gnb').removeClass('on');
		$('#gnb > ul > li ').removeClass('on');
	});
		
});

