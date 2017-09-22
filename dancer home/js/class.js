$(function(){
	let ch=$(window).innerHeight();
	$(window).scroll(function(){
		let scroll=document.body.scrollTop?document.body:document.documentElement;
		let obj1=$(scroll).scrollTop();
		if(ch+obj1>=500){
			$('.class2:lt(3)').css({'top':0})
		}
		if(ch+obj1>=1000){
			$('.class2:gt(2)').css({'top':'510px'})
		}
	})
	$('.top').hover(function(){
		$('.cla11').animate({width:'100px'},'slow')
	},function(){
		$('.cla11').animate({width:'0'},'slow')
	})
})
