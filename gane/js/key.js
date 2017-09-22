window.onload=function(){
	let text1=document.querySelector('textarea');
	let ul=document.querySelector('ul');
	let input1=document.querySelector('input');
	let button1=document.querySelector('button');
	text1.onkeyup=function(){
		let val=this.value;
		let span=document.querySelector('span');
		span.innerText=`${this.maxLength-val.length}`;
	}
	button1.onclick=text1.onkeydown=function(e){
		if(e.type=='click'){
			fn.call(text1);
		}else if(e.type=='keydown'){
			if(e.keyCode==13){
				fn.call(text1);
			}
		}
	}
	function fn(){
		let name=input1.value;
		input1.value='';
		let val=text1.value;
		text1.value='';
		let li=document.createElement('li');
		li.innerHTML=`
					<img src="" alt="" />
					<div class="box">
						<h3>${name}</h3>
						<p>${val}</p>
					</div>
			`
	    ul.preInsert(li);
	}
	ul.onclick=function(e){
		let ele=e.target;
		if(ele.nodeName!='UL'){
			ele.style.background='rgba(255,0,0,0.1)';
		}
	}
	
}

