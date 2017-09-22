$(function(){
	let now=0;
	function fn(move){
		if(move=='l'){
			now--;
			if(now<0){
				now=$('.lunbo>li').length-1;
			}
		}else if(move=='r'){
			now++;
			if(now==$('.lunbo>li').length){
				now=0;
			}
		}
		$('.bi>li').css({'opacity':0});
		$($('.bi>li')[now]).animate({'opacity':1,'transform':'scale(1.1,1.1)'}).css('z-index','1');
		$('.bi>li').find('img').css({'transform':'scale(1,1)'})
		$($('.bi>li')[now]).find('img').css({'transform':'scale(1.1,1.1)','transition':'all 5s'})
		$('.lunbo>li').css({background:'#15171b',border:'2px solid #58585c'})
		$($('.lunbo>li')[now]).css({background:'#7c7c81',border:'2px solid #48484c'});
	}
	let t=setInterval(function(){
		fn('r')
	},4000);
	$('.banner>main').mouseenter(function(){
		clearInterval(t);
	})
	$('.banner>main').mouseleave(function(){
		t=setInterval(function(){
			fn('r')
		},4000);
	})
	$('.lunbo>li').click(function(){
		let index=$(this).index();
		if(index==now){
			return;
		}else{
			$('.bi>li').css('opacity',0);
			$($('.bi>li')[index]).animate({'opacity':1});
			$('.bi>li').find('img').css({'transform':'scale(1,1)'})
			$($('.bi>li')[index]).find('img').css({'transform':'scale(1.1,1.1)','transition':'all 5s'})
			$('.lunbo>li').css({background:'#15171b',border:'2px solid #58585c'})
			$($('.lunbo>li')[index]).css({background:'#7c7c81',border:'2px solid #48484c'});
		}
		now=index;
	})
	let newarr=[];
	$('.class2').each(function(index,obj){
		newarr.push(obj.offsetTop);
	})
	let ch=$(window).innerHeight();
	$(window).scroll(function(){
		let scroll=document.body.scrollTop?document.body:document.documentElement;
		let obj1=$(scroll).scrollTop();
		$(newarr).each(function(index,obj){
			if(ch+obj1>=1500){
				$('header').css({'background':'rgba(255,255,255,1)'})
			}else{
				$('header').css({'background':'rgba(255,255,255,0.8)'})
			}
			if(ch+obj1>=$(newarr)[0] && ch+obj1<$(newarr)[1]){
				$('.point').show();
			}else{
				$('.point').hide();
			}
			if(ch+obj1>=$(newarr)[index]){
				$('.class2').eq(index).css('opacity',1);	
			}else{
				$('.class2').eq(index).css('opacity',0);
			}
		})
	})
	let r=100,every=10,deg=360/every,time=1000;
	const bili=Math.PI/180;
	let flag=true;
	$('.point').click(function(){
		if(flag){
			flag=false;
			for(let i=0;i<every;i++){
				let degs=i*deg*bili;
				let lefts=r*Math.cos(degs);
				let tops=r*Math.sin(degs);
				$('<a>').attr({'href':''}).css('transition-delay',time).addClass('circle').appendTo('.point').delay(2).animate({left:lefts,top:tops});
				$('.circle').eq(3).html('爵士');
				$('.circle').eq(4).html('古典');
				$('.circle').eq(5).html('现代');
				$('.circle').eq(6).html('踢踏');
				$('.circle').eq(7).html('拉丁');
			}
		}else{
			flag=true;
			$(this).html('');
		}
	})
})
