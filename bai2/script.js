const wrap = document.querySelector('.wrapper');

let n = prompt("Nhap so hang",'');
let m = prompt("Nhap so cot",'');
let i=0;
let j=0;
while(i<m){
let header = document.createElement("div");
	header.className ="header";
	wrap.appendChild(header);
	header.innerHTML = i+1;
	i++;
}
while(j<m*n){
	let node = document.createElement("div");
	node.className ="item";
	wrap.appendChild(node);
	node.innerHTML = Math.floor(Math.random()*1000)+1;
	j++;
}

wrap.style.gridTemplateColumns = "repeat("+m+",1fr)";
wrap.style.gridTemplateRows = "repeat("+n+",1fr)";



