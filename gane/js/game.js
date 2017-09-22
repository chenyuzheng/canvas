function game(){
	this.charSheet=['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
	this.length=6;
	this.speed=10;
	this.newarr=[];
	this.score=0;
	this.guan=document.querySelector('.big');
	this.position=[];
	this.scoreObj=document.querySelector('.form');
	this.life=document.querySelector('progress');
	this.stop1=document.querySelector('.stop');
	this.continue1=document.querySelector('.continue');
}
game.prototype={
	start:function(){
		this.getChars(this.length);
		this.drop();
		this.keyboard();
		this.stop();
		this.continue();
	},
	getChars:function(le){
		for(let i=0;i<le;i++){
			this.getChar();			
		}
	},
	check:function(num){
		return this.newarr.some(value=> value.innerText==this.charSheet[num]);
	},
	checkPosition:function(lefts){
//		return this.position.some(value=> lefts+50>value && value+50>lefts);
		return this.position.some(value=> Math.abs(lefts-value)<50);
	},
	getChar:function(){
		let num;
		let divs=document.createElement('div');
		let lefts;
		let tops=Math.random()*100;
		
		do{
			num=Math.floor(Math.random()*this.charSheet.length);
		}while(this.check(num));
		do{
			lefts=(innerWidth-400)*Math.random()+200;
		}while(this.checkPosition(lefts));
		
		divs.classList.add('box');
		divs.style.cssText=`
			left:${lefts}px;top:${tops}px;background:${Random()};
		`;
		divs.innerText=this.charSheet[num];
		document.body.appendChild(divs);
		
		
//		for(let j=0;j<this.newarr.length;j++){
//			if(divs.innerText==this.newarr[j].innerText){
//				document.body.removeChild(divs);
//				this.getChar();
//			}
//		}

		
//		for(let j=0;j<this.newarr.length;j++){
//			if(divs.offsetLeft+parseInt(divs.style.width)>=this.newarr[j].offsetLeft && divs.offsetLeft<=this.newarr[j].offsetLeft+parseInt(divs.style.width)){
//				document.body.removeChild(divs);
//				this.getChar();
//			}
//		}
			
		this.newarr.push(divs);
		this.position.push(lefts);
		
	},
	drop:function(){
		let that=this;
		that.t=setInterval(function(){
			for(let i=0;i<that.newarr.length;i++){
				if(that.newarr[i].offsetTop>=500){
					document.body.removeChild(that.newarr[i]);
					that.newarr.splice(i,1);
					that.position.splice(i,1);
					that.getChar();
					that.life.value--;
					if(that.life.value==0){
						if(confirm('想要重新开始吗？')){
							clearInterval(that.t);
							for(let i=0;i<that.length;i++){
								document.body.removeChild(that.newarr[i]);	
							}
							that.newarr=[];
							that.position=[];
							that.length++;
							that.score=0;
							that.life.value=10;
							that.start();
						}else{
							close();
						}
				}
				}
				that.newarr[i].style.top=`${that.newarr[i].offsetTop+that.speed}px`;
				
			}
		},300)
	},
	keyboard:function(){
		let that=this;
		document.onkeydown=function(e){
			let ele=String.fromCharCode(e.keyCode);
			for(let i=0;i<that.length;i++){
				if(ele==that.newarr[i].innerText){
					that.score++;
					that.scoreObj.innerText=that.score;
					document.body.removeChild(that.newarr[i]);
					that.newarr.splice(i,1);
					that.position.splice(i,1);
					that.getChar();
					if(that.score==10){
						that.next();
					}
				}
			}
		}
	},
	next:function(){
		this.guan.innerText++;
		let that=this;
		clearInterval(that.t);
		for(let i=0;i<that.length;i++){
			document.body.removeChild(that.newarr[i]);	
		}
		that.newarr=[];
		that.position=[];
		that.length++;
		that.score=0;
		
		if(that.guan.innerText>='10'){
			that.speed++;
			that.length=6;
		}
		if(that.guan.innerText=='20'){
			alert("您已通关");
			return;
		}
		that.start();
		
	},
	stop:function(){
		let that=this;
		that.stop1.onclick=function(){
			clearInterval(that.t);
		}
		
	},
	continue:function(){
		let that=this;
		that.continue1.onclick=function(){
			that.t=setInterval(function(){
			for(let i=0;i<that.newarr.length;i++){
				if(that.newarr[i].offsetTop>=500){
					document.body.removeChild(that.newarr[i]);
					that.newarr.splice(i,1);
					that.position.splice(i,1);
					that.getChar();
					that.life.value--;
					if(that.life.value==0){
						if(confirm('想要重新开始吗？')){
							clearInterval(that.t);
							for(let i=0;i<that.length;i++){
								document.body.removeChild(that.newarr[i]);	
							}
							that.newarr=[];
							that.position=[];
							that.length++;
							that.score=0;
							that.life.value=10;
							that.start();
						}else{
							close();
						}
				}
				}
				that.newarr[i].style.top=`${that.newarr[i].offsetTop+that.speed}px`;
				
			}
		},300)
		}
		
	}
}
function Random(){
	let r=Math.round(Math.random()*255);
	let g=Math.round(Math.random()*255);
	let b=Math.round(Math.random()*255);
	return `rgba(${r},${g},${b},0.2)`;
}
