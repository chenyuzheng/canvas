$(function(){
//	$('.banner-left>.second').mouseenter(function(){
//		let val=$(this).index();
//		$($('.banner-left1')[val]).css('display','block')
//	}).mouseleave(function(){
//		let val=$(this).index();
//		$($('.banner-left1')[val]).css('display','none')
//	})
	$('.banner-left>.second').hover(function(){
		$('.banner-left1').css('display','none');
		$(this).find('.banner-left1').css('display','block');
	},function(){
		$('.banner-left1').css('display','none');
	})
	let now=0;
	function fn(move){
		if(move=='l'){
			now--;
			if(now<0){
				now=$('.lunkuodian>li').length-1;
			}
		}else if(move=='r'){
			now++;
			if(now==$('.lunkuodian>li').length){
				now=0;
			}
		}
		$('.banner1-1>li').css({'opacity':0});
		$($('.banner1-1>li')[now]).animate({'opacity':1}).css('z-index',5);
		$('.lunkuodian>li').css({background:'#15171b',border:'2px solid #58585c'})
		$($('.lunkuodian>li')[now]).css({background:'#7c7c81',border:'2px solid #48484c'});
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
	$('.banner12:eq(0)').click(function(){
		fn('r');
	})
	$('.banner11:eq(0)').click(function(){
		fn('l');
	})
	$('.lunkuodian>li').click(function(){
		let index=$(this).index();
		if(index==now){
			return;
		}else{
			$('.banner1-1>li').css('opacity',0);
			$($('.banner1-1>li')[index]).animate({'opacity':1});
			$('.lunkuodian>li').css({background:'#15171b',border:'2px solid #58585c'})
			$($('.lunkuodian>li')[index]).css({background:'#7c7c81',border:'2px solid #48484c'});
		}
		now=index;
	})
	$('.gouwuche').mouseenter(function(){
		$('.head').css('height','100px')
	}).mouseleave(function(){$('.head').css('height',0)});
	$('input').focus(function(){
		$('.naviright').show();
		$('.mi').css('opacity',0);
		$('.wenzi').css('opacity',0);
	}).blur(function(){
		$('.naviright').hide();
		$('.mi').css('opacity',1);
		$('.wenzi').css('opacity',1);
	})
	$('.navi-1').hover(function(){
		let index=$(this).index();
		if(index<$('.navi-1').length-2){
			$('.hidden').css({'height':'230px','border-top':'1px solid #e0e0e0'});
			$('.hidden-1').css('height','0px');
			$($('.hidden-1')[index]).css('height','230px');	
		}
	},function(){
		let index=$(this).index();
		$('.hidden').css({'height':'0px','border-top':'none'});
		$($('.hidden-1')[index]).css('height','0px');	
	})
	let bigNum=$('.big')[0].childElementCount;
	let bigW=$('.tuijian2')[0].offsetWidth+parseInt(getComputedStyle($('.tuijian2')[0],null).marginRight);
	$('.big:eq(0)').css('width',`${bigNum*bigW}px`);
	let bigNum1=$('.big')[1].childElementCount;
	$('.big:eq(1)').css('width',`${bigNum1*bigW}px`);
	let index=0;
	$('.mingxing-left').hover(function(){
		$(this).css('color','#ff6700');
	},function(){
		$(this).css('color','#b0b0b0');
	}).click(function(){
		let ind=$(this).index('.mingxing-left');
		console.log(ind)
		if(index==0){
			$(this).css('color','#000');
			return;
		}
		index--;
		$('.big').eq(ind).css('left',`${1240*index}px`);
		$('.mingxing-right').eq(ind).css('color','#b0b0b0');
	})
	$('.mingxing-right').hover(function(){
		$(this).css('color','#ff6700');
	},function(){
		$(this).css('color','#b0b0b0');
	}).click(function(){
		let ind=$(this).index('.mingxing-right');
		console.log(ind)
		if(index==1){
			$(this).css('color','#000');
			return;
		}
		index++;
		$('.big').eq(ind).css('left',`${-1240*index}px`);
		$('.mingxing-left').eq(ind).css('color','#b0b0b0');
	})
	let index2=0;
	setInterval(function(){
		index2++;
		$('.big').css('left',`${-1240*index2}px`);
		$('.mingxing-right').css('color','#000');
		$('.mingxing-left').css('color','#b0b0b0');
		if(index2==2){
			index2=0;
			$('.big').css('left',`${1240*index2}px`);
			$('.mingxing-right').css('color','#b0b0b0');
			$('.mingxing-left').css('color','#000');
		}
		index=index2;
	},4000)
	let jishuqi2=0;
	$('.dapei2:eq(0) li').mouseenter(function(){
		let index=$(this).index();
		$('.dapei2:eq(0) li').css({'color':'#000','border-bottom':'none'});
		$(this).css({'color':'#ff6700','border-bottom':'2px solid #ff6700'});
		
		index=index%4;
		jishuqi2=jishuqi2%4;
		for(let i=0;i<7;i++){
			$('.yingjian3').eq(jishuqi2+i*4).hide();
			$('.yingjian3').eq(index+i*4).show();
		}
		jishuqi2=index;
	})
	let jishuqi3=0;
	$('.dapei2:eq(1) li').mouseenter(function(){
		let index=$(this).index();
		$('.dapei2:eq(1) li').css({'color':'#000','border-bottom':'none'});
		$(this).css({'color':'#ff6700','border-bottom':'2px solid #ff6700'});
		
		index=index%4;
		jishuqi3=jishuqi3%4;
		for(let i=0;i<7;i++){
			$('.yingjian3').eq(jishuqi3+28+i*4).hide();
			$('.yingjian3').eq(index+28+i*4).show();
		}
		jishuqi3=index;
	})
	let jishuqi4=0;
	$('.zhoubian li').mouseenter(function(){
		let index=$(this).index();
		$('.zhoubian li').css({'color':'#000','border-bottom':'none'});
		$(this).css({'color':'#ff6700','border-bottom':'2px solid #ff6700'});
		
		index=index%5;
		jishuqi4=jishuqi4%5;
		for(let i=0;i<7;i++){
			$('.yingjian3').eq(jishuqi4+56+i*5).hide();
			$('.yingjian3').eq(index+56+i*5).show();
		}
		jishuqi4=index;
	})
	let now1=next1=0;
	let width1=$('.hali').width();
	$('.neirong26:eq(0) li').click(function(){
		let index=$(this).index();
		if(index==now1){
			return;
		}else if(now1<index){
			$('.hali:eq(0) li').eq(index).css('left',width1);
			$('.hali:eq(0) li').eq(now1).animate({'left':-width1});
			$('.hali:eq(0) li').eq(index).animate({'left':0});
			$('.neirong26:eq(0) li').eq(index).css({'background':'#fff','border':'2px solid #ff6700'})
			$('.neirong26:eq(0) li').eq(now1).css({'background':'#b0b0b0','border':'none'});
		}else if(now1>index){
			$('.hali:eq(0) li').eq(index).css('left',-width1);
			$('.hali:eq(0) li').eq(now1).animate({'left':width1});
			$('.hali:eq(0) li').eq(index).animate({'left':0});
			$('.neirong26:eq(0) li').eq(index).css({'background':'#fff','border':'2px solid #ff6700'})
			$('.neirong26:eq(0) li').eq(now1).css({'background':'#b0b0b0','border':'none'});
		}
		now1=next1=index;
	})
	$('.neirong252:eq(0)').click(function(){
		next1++;
		if(next1==$('.hali:eq(0) li').length){
			next1=0;
			return;
		}
		$('.hali:eq(0) li').eq(next1).css('left',width1);
		$('.hali:eq(0) li').eq(now1).animate({'left':-width1});
		$('.hali:eq(0) li').eq(next1).animate({'left':0});
		$('.neirong26:eq(0) li').eq(next1).css({'background':'#fff','border':'2px solid #ff6700'})
		$('.neirong26:eq(0) li').eq(now1).css({'background':'#b0b0b0','border':'none'});
		now1=next1;
	})
	$('.neirong251:eq(0)').click(function(){
		next1--;
		if(next1<0){
			next1=$('.hali:eq(0) li').length-1;
			return;
		}
		$('.hali:eq(0) li').eq(next1).css('left',-width1);
		$('.hali:eq(0) li').eq(now1).animate({'left':width1});
		$('.hali:eq(0) li').eq(next1).animate({'left':0});
		$('.neirong26:eq(0) li').eq(next1).css({'background':'#fff','border':'2px solid #ff6700'})
		$('.neirong26:eq(0) li').eq(now1).css({'background':'#b0b0b0','border':'none'});
		now1=next1;
	})
	let now2=next2=0;
	$('.neirong26:eq(1) li').click(function(){
		let index=$(this).index();
		if(index==now2){
			return;
		}else if(now2<index){
			$('.hali:eq(1) li').eq(index).css('left',width1);
			$('.hali:eq(1) li').eq(now2).animate({'left':-width1});
			$('.hali:eq(1) li').eq(index).animate({'left':0});
			$('.neirong26:eq(1) li').eq(index).css({'background':'#fff','border':'2px solid #ff6700'})
			$('.neirong26:eq(1) li').eq(now2).css({'background':'#b0b0b0','border':'none'});
		}else if(now2>index){
			$('.hali:eq(1) li').eq(index).css('left',-width1);
			$('.hali:eq(1) li').eq(now2).animate({'left':width1});
			$('.hali:eq(1) li').eq(index).animate({'left':0});
			$('.neirong26:eq(1) li').eq(index).css({'background':'#fff','border':'2px solid #ff6700'})
			$('.neirong26:eq(1) li').eq(now2).css({'background':'#b0b0b0','border':'none'});
		}
		now2=next2=index;
	})
	$('.neirong252:eq(1)').click(function(){
		next2++;
		if(next2==$('.hali:eq(1) li').length){
			next2=0;
			return;
		}
		$('.hali:eq(1) li').eq(next2).css('left',width1);
		$('.hali:eq(1) li').eq(now2).animate({'left':-width1});
		$('.hali:eq(1) li').eq(next2).animate({'left':0});
		$('.neirong26:eq(1) li').eq(next2).css({'background':'#fff','border':'2px solid #ff6700'})
		$('.neirong26:eq(1) li').eq(now2).css({'background':'#b0b0b0','border':'none'});
		now2=next2;
	})
	$('.neirong251:eq(1)').click(function(){
		next2--;
		if(next2<0){
			next2=$('.hali:eq(1) li').length-1;
			return;
		}
		$('.hali:eq(1) li').eq(next2).css('left',-width1);
		$('.hali:eq(1) li').eq(now2).animate({'left':width1});
		$('.hali:eq(1) li').eq(next2).animate({'left':0});
		$('.neirong26:eq(1) li').eq(next2).css({'background':'#fff','border':'2px solid #ff6700'})
		$('.neirong26:eq(1) li').eq(now2).css({'background':'#b0b0b0','border':'none'});
		now2=next2;
	})
	let now3=next3=0;
	$('.neirong26:eq(2) li').click(function(){
		let index=$(this).index();
		if(index==now3){
			return;
		}else if(now3<index){
			$('.hali:eq(2) li').eq(index).css('left',width1);
			$('.hali:eq(2) li').eq(now3).animate({'left':-width1});
			$('.hali:eq(2) li').eq(index).animate({'left':0});
			$('.neirong26:eq(2) li').eq(index).css({'background':'#fff','border':'2px solid #ff6700'})
			$('.neirong26:eq(2) li').eq(now3).css({'background':'#b0b0b0','border':'none'});
		}else if(now3>index){
			$('.hali:eq(2) li').eq(index).css('left',-width1);
			$('.hali:eq(2) li').eq(now3).animate({'left':width1});
			$('.hali:eq(2) li').eq(index).animate({'left':0});
			$('.neirong26:eq(2) li').eq(index).css({'background':'#fff','border':'2px solid #ff6700'})
			$('.neirong26:eq(2) li').eq(now3).css({'background':'#b0b0b0','border':'none'});
		}
		now3=next3=index;
	})
	$('.neirong252:eq(2)').click(function(){
		next3++;
		if(next3==$('.hali:eq(2) li').length){
			next3=0;
			return;
		}
		$('.hali:eq(2) li').eq(next3).css('left',width1);
		$('.hali:eq(2) li').eq(now3).animate({'left':-width1});
		$('.hali:eq(2) li').eq(next3).animate({'left':0});
		$('.neirong26:eq(2) li').eq(next3).css({'background':'#fff','border':'2px solid #ff6700'})
		$('.neirong26:eq(2) li').eq(now3).css({'background':'#b0b0b0','border':'none'});
		now3=next3;
	})
	$('.neirong251:eq(2)').click(function(){
		next3--;
		if(next3<0){
			next3=$('.hali:eq(2) li').length-1;
			return;
		}
		$('.hali:eq(2) li').eq(next3).css('left',-width1);
		$('.hali:eq(2) li').eq(now3).animate({'left':width1});
		$('.hali:eq(2) li').eq(next3).animate({'left':0});
		$('.neirong26:eq(2) li').eq(next3).css({'background':'#fff','border':'2px solid #ff6700'})
		$('.neirong26:eq(2) li').eq(now3).css({'background':'#b0b0b0','border':'none'});
		now3=next3;
	})
	let now4=next4=0;
	$('.neirong26:eq(3) li').click(function(){
		let index=$(this).index();
		if(index==now4){
			return;
		}else if(now4<index){
			$('.hali:eq(3) li').eq(index).css('left',width1);
			$('.hali:eq(3) li').eq(now4).animate({'left':-width1});
			$('.hali:eq(3) li').eq(index).animate({'left':0});
			$('.neirong26:eq(3) li').eq(index).css({'background':'#fff','border':'2px solid #ff6700'})
			$('.neirong26:eq(3) li').eq(now4).css({'background':'#b0b0b0','border':'none'});
		}else if(now4>index){
			$('.hali:eq(3) li').eq(index).css('left',-width1);
			$('.hali:eq(3) li').eq(now4).animate({'left':width1});
			$('.hali:eq(3) li').eq(index).animate({'left':0});
			$('.neirong26:eq(3) li').eq(index).css({'background':'#fff','border':'2px solid #ff6700'})
			$('.neirong26:eq(3) li').eq(now4).css({'background':'#b0b0b0','border':'none'});
		}
		now4=next4=index;
	})
	$('.neirong252:eq(3)').click(function(){
		next4++;
		if(next4==$('.hali:eq(3) li').length){
			next4=0;
			return;
		}
		$('.hali:eq(3) li').eq(next4).css('left',width1);
		$('.hali:eq(3) li').eq(now4).animate({'left':-width1});
		$('.hali:eq(3) li').eq(next4).animate({'left':0});
		$('.neirong26:eq(3) li').eq(next4).css({'background':'#fff','border':'2px solid #ff6700'})
		$('.neirong26:eq(3) li').eq(now4).css({'background':'#b0b0b0','border':'none'});
		now4=next4;
	})
	$('.neirong251:eq(3)').click(function(){
		next4--;
		if(next4<0){
			next4=$('.hali:eq(3) li').length-1;
			return;
		}
		$('.hali:eq(3) li').eq(next4).css('left',-width1);
		$('.hali:eq(3) li').eq(now4).animate({'left':width1});
		$('.hali:eq(3) li').eq(next4).animate({'left':0});
		$('.neirong26:eq(3) li').eq(next4).css({'background':'#fff','border':'2px solid #ff6700'})
		$('.neirong26:eq(3) li').eq(now4).css({'background':'#b0b0b0','border':'none'});
		now4=next4;
	})
})