$(function(){
	let now=next=0;
	let width=$('.banner11').width();
	let width1=$('.banner-img').width();
	let fn=function(){
		next++;
		if(next==$('.lunkuodian li').length){
			next=0;
		}
		$($('.banner11 li')[next]).css({'left':width});
		$($('.banner-img li')[next]).css({'left':width1});
		$($('.banner11 li')[next]).animate({'left':0});
		$($('.banner-img li')[next]).animate({'left':0});
		$($('.banner11 li')[now]).animate({'left':-width});
		$($('.banner-img li')[now]).animate({'left':-width1});
		$($('.lunkuodian li')[now]).css('background','#a2a2a2');
		$($('.lunkuodian li')[next]).css('background','#fff');
		now=next;
	}
	let t=setInterval(fn,4000);
	$('.banner main').hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(fn,4000)
	})
	$('.lunkuodian>li').click(function(){
		let index=$(this).index();
		if(index==now){
			return;
		}else if(now<index){
			$($('.banner11 li')[index]).css({'left':width});
			$($('.banner-img li')[index]).css({'left':width1});
			$($('.banner11 li')[index]).animate({'left':0});
			$($('.banner-img li')[index]).animate({'left':0});
			$($('.banner11 li')[now]).animate({'left':-width});
			$($('.banner-img li')[now]).animate({'left':-width1});
			$($('.lunkuodian li')[now]).css('background','#a2a2a2');
			$($('.lunkuodian li')[index]).css('background','#fff');
		}else if(now>index){
			$($('.banner11 li')[index]).css({'left':-width});
			$($('.banner-img li')[index]).css({'left':-width1});
			$($('.banner11 li')[index]).animate({'left':0});
			$($('.banner-img li')[index]).animate({'left':0});
			$($('.banner11 li')[now]).animate({'left':width});
			$($('.banner-img li')[now]).animate({'left':width1});
			$($('.lunkuodian li')[now]).css('background','#a2a2a2');
			$($('.lunkuodian li')[index]).css('background','#fff');
		}
		now=next=index;
	})
	$('.aside3').hover(function(){
		let index=$(this).index();
		$('.aside1-1').hide();
		$('.aside1-1').eq(index).show();
	},function(){
		let index=$(this).index();
		$('.aside1-1').eq(index).hide();
	})
	$('.header-right>.hr').eq(0).hover(function(){
		$('.head-bottom').eq(0).css('height','52px')
	},function(){
		$('.head-bottom').eq(0).css('height','0px')
	})
	$('.header-right>.hr').eq(3).hover(function(){
		$('.head-bottom').eq(1).css('height','52px')
	},function(){
		$('.head-bottom').eq(1).css('height','0px')
	})
	let navarr=[];
	let ch=window.innerHeight;
	let foot=1;
	$('.meili').each(function(index,obj){
		let tops=obj.offsetTop;
		navarr.push(tops);
	})
	navarr.push($('.tuijian')[0].offsetTop);
	$(window).scroll(function(){
		let scroll=document.body.scrollTop?document.body:document.documentElement;
		let obj=$(scroll).scrollTop();
		$('.asideNav>li').each(function(index,obj1){
			if(index>0){
				if(ch+obj>=navarr[index-1]+100){
					$('.asideNav').show();
					$('.asideNav>li').eq(foot).css('background','#666')
					$('.asideNav>li').eq(index).css('background','#f7a945')
					foot=index;
				}else if(ch+obj<=navarr[0]){
					$('.asideNav').hide();
				}
			}
		})
	})
	$('.asideNav>li').click(function(){
		let index=$(this).index();
		if(index>0){
			let topone=navarr[index-1]
			$(document.body).animate({'scrollTop':topone})
			$(this).css('background','#666');
		}
	})
})

