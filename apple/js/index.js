/*
* @Author: dell-pc
* @Date:   2017-08-27 15:46:44
* @Last Modified by:   dell-pc
* @Last Modified time: 2017-08-28 08:59:26
*/
window.onload=function(){
	let banner=document.querySelector('.banner');
	let baner11=document.querySelector('.banner1-1');
	let li=baner11.querySelectorAll('li');
	let width=li[0].offsetWidth;
	let lunbo=document.querySelector('.lunbo');
	let lis=lunbo.querySelectorAll('li');
	let quan11=document.querySelector('.quan11');
	let quan12=document.querySelector('.quan12');
	let next=now=0;
	let flag=true;
	let fn=function(){
		next++;
		if(next==lis.length){
			next=0;
			return false;
		}
		li[next].style.left=`${width}px`;
		 animate(li[now],{left:-width});
		animate(li[next],{left:0},function(){
			flag=true;
		});
		lis[now].style.background='#dcdcdc';
		lis[next].style.background='#868686';
		now=next;
	}
	let t=setInterval(fn,3000);
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=window.setInterval(fn,3000);
	}
	for(let i=0;i<lis.length;i++){
		lis[i].onclick=function(){
			if(i==now){
				return;
			}
			if(now<i){
				li[i].style.left=`${width}px`;
				 animate(li[now],{left:-width});
				animate(li[i],{left:0});
				lis[now].style.background='#dcdcdc';
				lis[i].style.background='#868686';
			}else if(now>i){
				li[i].style.left=`${-width}px`;
				animate(li[now],{left:width});
				animate(li[i],{left:0});
				lis[now].style.background='#dcdcdc';
				lis[i].style.background='#868686';
			}
		now=next=i;
		}
	}
	quan12.onclick=function(){
		if(flag){
			flag=false;
			fn();
		}
	}
	quan11.onclick=function(){
		if(flag){
			flag=false;
			next--;
			if(next<0){
				next=lis.length-1;
			}
			li[next].style.left=`${-width}px`;
			animate(li[now],{left:width});
			animate(li[next],{left:0},function(){
				flag=true;
			});
			lis[now].style.background='#dcdcdc';
			lis[next].style.background='#868686';
			now=next;
		}
	}
}