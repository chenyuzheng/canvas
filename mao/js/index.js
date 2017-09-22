window.onload=function(){
	let banner11=document.getElementsByClassName('banner11');
	let li=banner11[0].getElementsByTagName('li');
	let banner=document.getElementsByClassName('banner');
	let now=next=0;
	let width=banner11[0].offsetWidth;
	let lunkuodian=document.getElementsByClassName('lunkuodian');
	let lis=lunkuodian[0].getElementsByTagName('li');
	let bannerimg=document.getElementsByClassName('banner-img');
	let width1=bannerimg[0].offsetWidth;
	let li1=bannerimg[0].getElementsByTagName('li');
	for(let i=0;i<lis.length;i++){
		lis[i].onclick=function(){
			if(i==now){
				return;
			}
			if(now<i){
				li[i].style.left=`${width}px`;
				li1[i].style.left=`${width1}px`;
				animate(li[now],{left:-width});
				animate(li1[now],{left:-width1});
				animate(li[i],{left:0});
				animate(li1[i],{left:0})
				lis[now].style.background='#a2a2a2';
				li1[now].style.display='none';
				lis[i].style.background='#fff';
				li1[i].style.display='block';
			}else if(now>i){
				li[i].style.left=`${-width}px`;
				li1[i].style.left=`${-width1}px`;
				animate(li[now],{left:width});
				animate(li1[now],{left:width1});
				animate(li[i],{left:0});
				animate(li1[i],{left:0})
				lis[now].style.background='#a2a2a2';
				li1[now].style.display='none';
				lis[i].style.background='#fff';
				li1[i].style.display='block';
			}
			now=next=i;
		}
	}
	
	let fn=function(){
		next++;
		if(next==lis.length){
			next=0;
		}
		li[next].style.left=`${width}px`;
		li1[next].style.left=`${width1}px`;
		animate(li[now],{left:-width});
		animate(li1[now],{left:-width1});
		animate(li[next],{left:0});
		animate(li1[next],{left:0})
		lis[now].style.background='#a2a2a2';
		li1[now].style.display='none';
		lis[next].style.background='#fff';
		li1[next].style.display='block';
		now=next;
	}
	let t=window.setInterval(fn,3000);
	
	let main=banner[0].getElementsByTagName('main');
	main[0].onmouseenter=function(){
		clearInterval(t);
	}
	main[0].onmouseleave=function(){
		t=window.setInterval(fn,3000);
	}
	
	let asideNav=document.querySelectorAll('.asideNav>li');
	let asideNav1=document.querySelector('.asideNav');
	let navarr=[];
	let ch=window.innerHeight;
	let foot=1;
	let meili=document.querySelectorAll('.meili');
	let tuijian=document.querySelector('.tuijian');
	meili.forEach(function(value){
		let tops=value.offsetTop;
		navarr.push(tops);
	})
	navarr.push(tuijian.offsetTop);
	asideNav.forEach(function(value,index){
		asideNav[1].onclick=function(){
			animate(document.body,{scrollTop:navarr[0]});
			this.style.background='#EA5F8D';
			asideNav[index].style.background='#666';
		}
		asideNav[2].onclick=function(){
			animate(document.body,{scrollTop:navarr[1]});
			this.style.background='#0AA6E8';
			asideNav[index].style.background='#666';
		}
		asideNav[3].onclick=function(){
			animate(document.body,{scrollTop:navarr[2]});
			this.style.background='#64C333';
			asideNav[index].style.background='#666';
		}
		asideNav[4].onclick=function(){
			animate(document.body,{scrollTop:navarr[3]});
			this.style.background='#F15453';
			asideNav[index].style.background='#666';
		}
		asideNav[5].onclick=function(){
			animate(document.body,{scrollTop:navarr[4]});
			this.style.background='#19C8A9';
			asideNav[index].style.background='#666';
		}
		asideNav[6].onclick=function(){
			animate(document.body,{scrollTop:navarr[5]});
			asideNav[index].style.background='#666';
			this.style.background='#F7A945';
			
		}
		asideNav[7].onclick=function(){
			animate(document.body,{scrollTop:navarr[6]});
			this.style.background='#FF0036';
		}
	})
	window.onscroll=function(){
		let scroll=document.body.scrollTop?document.body:document.documentElement;
		let obj=scroll.scrollTop;
		asideNav.forEach(function(value,index){
			if(index>0){
				if(ch+obj>=navarr[index-1]+100){
					asideNav1.style.display='block';
					asideNav[foot].style.background='#666';
					asideNav[index].style.background='#F7A945';
					
					foot=index;
				}
				if(ch+obj<=navarr[0]){
					asideNav1.style.display='none';
				}
			}
				
		})
	}
	let headerright=document.querySelector('.header-right');
	let hb=document.querySelectorAll('.head-bottom');
	let hl=headerright.querySelectorAll('.hr');
	hl[0].onmouseenter=function(){
		hb[0].style.height='52px';
	}
	hl[0].onmouseleave=function(){
		hb[0].style.height=0;
	}
	hl[3].onmouseenter=function(){
		hb[1].style.height='52px';
	}
	hl[3].onmouseleave=function(){
		hb[1].style.height=0;
	}
	let aside3=document.querySelectorAll('.aside3');
	let aside11=document.querySelectorAll('.aside1-1');
	for(let i=0;i<aside3.length;i++){
		aside3[i].onmouseenter=function(){
			aside11[i].style.display='block';
		}
		aside3[i].onmouseleave=function(){
			aside11[i].style.display='none';
		}
	}
	
}
