window.onload=function(){
	let song=document.querySelector('.song')
	let singer=document.querySelector('.singer')
	let list=document.querySelector('.list')
	let pause=document.querySelector('.icon-bofang');
	let audio=document.querySelector('audio')
	let img=document.querySelector('img');
	let pre=document.querySelector('.icon-shangyishou');
	let next=document.querySelector('.icon-xiayishou');
	let jindu=document.querySelector('.jindu')
	let jindutiao=document.querySelector('.jindutiao')
	let circle=document.querySelector('.circle')
	let xinxi=document.querySelector('.xinxi');
	let current=document.querySelector('.current');
	let duration=document.querySelector('.duration');
	let j=0;
	let volumeb=document.querySelector('.volumeb');
	let volumec=document.querySelector('.volumec');
	let volumecc=document.querySelector('.volumecc');
	let bottom=document.querySelector('.bottom');
	circle.onmousedown=function(e){
		let ox=e.clientX,oy=e.clientY;
		let left=this.offsetLeft;
		jindu.onmousemove=function(e){
			let cx=e.clientX,cy=e.clientY;
			let lefts=cx-ox+left+4;
			if(lefts<0){
				lefts=0
			}
			if(lefts>=this.offsetWidth){
				lefts=this.offsetWidth
			}
			jindutiao.style.width=`${lefts}px`;
			circle.style.left=`${lefts-4}px`;
			let now=lefts/jindu.offsetWidth*audio.duration;
			audio.currentTime=now;
			current.innerText=format(now);
			database[j].lyrics.forEach((ele,index)=>{
				if(ele.time==current.innerText){
					let a=index;
					if(index<3){
						index=0;
					}else{
						index-=3;
					}
					list.innerHTML='';
					for(let i=index;i<database[j].lyrics.length;i++){
						list.innerHTML+=`<li class=list${i}>${database[j].lyrics[i].lyric}</li>`;
					}
					let obj=document.querySelector(`.list${a}`);
					obj.style.color='red';
				}
			})
		}
		circle.onmouseup=function(){
			jindu.onmousemove=null;
			circle.onmouseup=null;
		}
	}
	volumecc.onmousedown=function(e){
		let ox=e.clientX,oy=e.clientY;
		let left=this.offsetLeft;
		volumeb.onmousemove=function(e){
			let cx=e.clientX,cy=e.clientY;
			let lefts=cx-ox+left+8;
			if(lefts<0){
				lefts=0
			}
			if(lefts>=this.offsetWidth){
				lefts=this.offsetWidth
			}
			volumec.style.width=`${lefts}px`;
			volumecc.style.left=`${lefts-8}px`;
			audio.volume=lefts/80;
		}
		volumecc.onmouseup=function(){
			console.dir(audio)
			volumeb.onmousemove=null;
			volumecc.onmouseup=null;
		}
	}
	pause.onclick=function(){
		if(audio.paused){
			audio.play();
			pause.classList.add('icon-zanting');
			pause.classList.remove('icon-bofang');
			img.style.transform='rotate(3600deg)'
		}else{
			audio.pause();
			pause.classList.remove('icon-zanting');
			pause.classList.add('icon-bofang');
			img.style.transform='none'
		}
		
	}
	
	pre.onclick=function(){
		if(j==0){
			return;
		}
		render(database[--j]);
	}
	audio.ended=function(){
		if(j==database.length-1){
			return;
		}
		render(database[++j])
	}
	next.onclick=function(){
		if(j==database.length-1){
			return;
		}
		render(database[++j]);
		jindutiao.style.width=0;
		circle.style.left=0;
		current.innerText='00:00';
		audio.autoplay='autoplay';
		
	}
	render(database[j])
	function render(data){
		song.innerText=data.songs;
		singer.innerText=data.name;
		audio.src=data.src;
		img.src=data.photo;
		xinxi.innerText=`${data.songs}-${data.name}`;
		current.innerText='00:00';
		duration.innerText=data.alltime;
		list.innerHTML='';
		for(let i=0;i<data.lyrics.length;i++){
			list.innerHTML+=`<li class=list${i}>${data.lyrics[i].lyric}</li>`
		}
		
	}
	function format(time){
		let minute=Math.floor(time/60)>=10 ? Math.floor(time/60) :`0${Math.floor(time/60)}`;
		let seconds=Math.floor(time%60)>=10 ? Math.floor(time%60) :`0${Math.floor(time%60)}`;
		return `${minute}:${seconds}`;
	}
	audio.ontimeupdate=function(){
		let now=audio.currentTime;
		let all=audio.duration;
		let w=now/all*jindu.offsetWidth;
		jindutiao.style.width=`${w}px`;
		circle.style.left=`${w}px`;
		current.innerText=format(now);
		database[j].lyrics.forEach((ele,index)=>{
			if(ele.time==current.innerText){
				let a=index;
				if(index<3){
					index=0;
				}else{
					index-=3;
				}
				list.innerHTML='';
				for(let i=index;i<database[j].lyrics.length;i++){
					list.innerHTML+=`<li class=list${i}>${database[j].lyrics[i].lyric}</li>`;
				}
				let obj=document.querySelector(`.list${a}`);
				obj.style.color='red';
			}
		})
	}
}
