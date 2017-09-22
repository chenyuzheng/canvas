window.onload=function(){
	//增加
	let newArr=[
		{'name':'陈玉珍','sex':'女','age':20,'phone':'15635450023','local':'山西省临汾市'},
		{'name':'陈玉珍','sex':'女','age':20,'phone':'15635450023','local':'山西省临汾市'},
		{'name':'陈玉珍','sex':'女','age':20,'phone':'15635450023','local':'山西省临汾市'},
		{'name':'陈玉珍','sex':'女','age':20,'phone':'15635450023','local':'山西省临汾市'},
		{'name':'陈玉珍','sex':'女','age':20,'phone':'15635450023','local':'山西省临汾市'},
	]
	localStorage.student=JSON.stringify(newArr);
	let students=JSON.parse(localStorage.student);
	let tbody=document.querySelector('tbody');
	for(let i=0;i<students.length;i++){
		tbody.innerHTML+=`
			<tr>
				<td>${students[i].name}</td>
				<td>${students[i].sex}</td>
				<td>${students[i].age}</td>
				<td>${students[i].phone}</td>
				<td>${students[i].local}</td>
				<td class="delete"><button>删除</button></td>
			</tr>
		`;
	}
	let add=document.querySelector('.add');
	let table=document.querySelector('table');
	add.onclick=function(){
		let tr=document.createElement('tr');
		tr.innerHTML=`
			<td>陈玉珍</td>
			<td>女</td>
			<td>21</td>
			<td>15635450023</td>
			<td>山西省浮山县</td>
			<td class="delete"><button>删除</button></td>
		`;
		tbody.appendChild(tr);
	}
	//修改
	tbody.ondblclick=function(e){
		let ele=e.target;
		if(ele.nodeName=='TD' && ele.className!='delete'){
			let input1=document.createElement('input');
			input1.value=ele.innerText;
			ele.innerText='';
			ele.appendChild(input1);
			input1.onblur=function(){
				let newvalue=input1.value;
				ele.removeChild(input1);
				input1=null;
				ele.innerText=newvalue;
			}
		}
	}
//	table.addEventListener('click',function(e){
//		let ele=e.target;
//		if(ele.nodeName=='TD' && ele.className!='delete'){
//			let input1=document.createElement('input');
//			input1.value=ele.innerText;
//			ele.innerText='';
//			ele.appendChild(input1);
//			input1.onblur=function(){
//				let newvalue=input1.value;
//				ele.removeChild(input1);
//				input1=null;
//				ele.innerText=newvalue;
//			}
//		}
//	})
	//删除
	tbody.onclick=function(e){
		let ele=e.target;
		if(ele.nodeName=='BUTTON'){
			let parent=ele.parentNode;
			console.log(parent);
			let parents=parent.parentNode;
			console.log(parents);
			parents.innerHTML='';
		}
	}
	
	
	
}
