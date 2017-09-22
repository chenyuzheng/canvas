$(function(){
	$('.aboutimg').delay(2000).css({'transform':'translateX(0)'})
	$('.aboutimg1').delay(2000).css({'transform':'translateX(0px)'})
	$('p[class=about2]').delay(2000).css({'transform':'translateX(0)'})
	$('p[class=about1]').delay(2000).css({'transform':'translateX(0px)'})
	$('.one').click(function(){
		$('.one>.zhe1').css({'transform':'rotateY(-90deg)','opacity':0});
		$('.one>.zhe').css({'transform':'rotateY(0deg)','opacity':1});
		
	})
	$('.five').click(function(){
		$('.five>.zhe1').css({'transform':'rotateY(-90deg)','opacity':0});
		$('.five>.zhe').css({'transform':'rotateY(0deg)','opacity':1});
		
	})
	$('.three').click(function(){
		$('.three>.zhe1').css({'transform':'rotateY(-90deg)','opacity':0});
		$('.three>.zhe').css({'transform':'rotateY(0deg)','opacity':1});
		
	})
	$('.four').click(function(){
		$('.four>.zhe1').css({'transform':'rotateY(-90deg)','opacity':0});
		$('.four>.zhe').css({'transform':'rotateY(0deg)','opacity':1});
		
	})
	$('.top').hover(function(){
		$('.cla11').animate({width:'100px'},'slow')
	},function(){
		$('.cla11').animate({width:'0'},'slow')
	})
	$('.right').click(function(){
		$('.class').css({'transform':'translateX(-400px)'})
	})
	$('.left').click(function(){
		$('.class').css({'transform':'translateX(0px)'})
	})
	
})
