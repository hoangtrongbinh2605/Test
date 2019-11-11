
const resetButton = document.querySelector('.button');
const wrap = document.querySelector('.wrapper');


let n = prompt("Nhap so hang va cot",'');
let m = prompt("Nhap so o chien thang",'');
let i=0;
let count =1;

while(i<n*n){
	let node = document.createElement("div");
	node.className ="item";
	wrap.appendChild(node);
	i++;
	console.log(i);
}

wrap.style.gridTemplateColumns = "repeat("+n+",5fr)";
wrap.style.gridTemplateRows = "repeat("+n+",1fr)";

const item = document.querySelectorAll('.item');

function clickBox(e){
	if(this.innerHTML ==""){
	if(count%2!=0){
	this.innerHTML="X";}
	else{
		this.innerHTML="O";}
	count++;	
}
	console.log(e);
}

// function resetGrid(){
// 	i=0;
// 	while(i<n*n){
// 	let res = document.createElement("div");
// 	res.className ="item";
// 	res.innerHTML ="";
// 	wrap.replaceChild(res,item);
// 	}
// }


item.forEach(item=>item.addEventListener('click', clickBox));
//resetButton.addEventListener('click',resetGrid);