window.onload=function(){
	let banner=$('.banner')[0];
	let bi=$('.bi')[0];
	let li=bi.querySelectorAll('li');
	let width=li[0].offsetWidth;
	let lunbo=$('.lunbo')[0];
	let lis=lunbo.querySelectorAll('li');
	let pre=$('pre');
	let next=now=0;
	let fn=function(){
		next++;
		if(next==li.length){
			next=0;
		}
		li[next].style.left=`${width}px`;
		animate(li[now],{left:-width});
		animate(li[next],{left:0});
		lis[now].style.background='#aaa';
		lis[next].style.background='#fff';
		lis[next].style.border='2px solid #AAAAAA';
		now=next;
	}
	let t=setInterval(fn,3000);
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(fn,5000);
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
				lis[now].style.background='#aaa';
				lis[i].style.background='#fff';
				lis[i].style.border='2px solid #AAAAAA';
			}else if(now>i){
				li[i].style.left=`${-width}px`;
				animate(li[now],{left:width});
				animate(li[i],{left:0});
				lis[now].style.background='#aaa';
				lis[i].style.background='#fff';
				lis[i].style.border='2px solid #AAAAAA';
			}
		now=next=i;
		}
    }
	let newarr=[];
	let class2=document.querySelectorAll('.class2');
	class2.forEach(value=>{
		let tops=value.offsetTop;
		console.log(tops);
		newarr.push(tops);
	})
	let ch=window.innerHeight;
	let point=document.querySelector('.point');
	window.onscroll=function(){
		let scroll=document.body.scrollTop?document.body:document.documentElement;
		let obj=scroll.scrollTop;
		for(let i=0;i<newarr.length;i++){
			
			if(ch+obj>=newarr[0] && ch+obj<newarr[1]){
				point.style.display='block';
			}else{
				point.style.display='none';
			}
			if(ch+obj>=newarr[i]){
				class2[i].style.opacity=1;			
			}else{
				class2[i].style.opacity=0;
			}
		}
		
	}
	
	
	let r=100,every=10,deg=360/every,time=100;
	const bili=Math.PI/180;
	let flag=true;
	point.onclick=function(){
		if(flag){
			flag=false;
			for(let i=0;i<every;i++){
				let div=document.createElement('a');
				div.href='';
				let degs=i*deg*bili;
				div.style.transitionDelay=`${time}ms`;
				let lefts=r*Math.cos(degs);
				let tops=r*Math.sin(degs);
				div.classList.add('circle');
				div.appendTo(point);
				setTimeout(()=>{
					div.style.left=`${lefts}px`;
					div.style.top=`${tops}px`;
				},1)
			
		}
		let circle=document.querySelectorAll('.circle');
		circle[3].innerText='爵士';
		circle[4].innerText='古典';
		circle[5].innerText='现代';
		circle[6].innerText='踢踏';
		circle[7].innerText='拉丁';
		}else{
			flag=true;
			point.innerHTML='';
		}
		
	}
	
}
