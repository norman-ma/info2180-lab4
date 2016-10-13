var bounds,obounds;
var s = false;
var w = false;

window.onload = function(){
	//document.getElementById("boundary1").onmouseover = outOfBounds;
	bounds = document.querySelectorAll(".boundary");
	obounds = defOBounds();
	setupBounds(bounds);
	document.getElementById("start").onmouseover = start;
	document.getElementById("end").onmouseover = win;	
	document.getElementById("start").onclick = reset;
	document.onmousemove = checkBounds;
}

window.onresize = function(){
	obounds = defOBounds();
}

function setupBounds(list){
	for(var i = 0; i < list.length; i++ ){
		list[i].onmouseover = outOfBounds;
	}
}

function outOfBounds(){
	//document.getElementById("boundary1").className+=" youlose";
	var c;
	if(!w){
		for(var i = 0; i < bounds.length; i++ ){
			c = bounds[i].className;
			if(c === "boundary"){
				bounds[i].className+=" youlose";
			}
		}
		document.getElementById("status").textContent = "You Lose!";	
	}	
}

function start(){
	s = true;
}

function win(){
	var b = document.querySelector(".boundary");
	if (s && b.className !== "boundary youlose"){
		//alert("You Win!")
		document.getElementById("status").textContent = "You Win!";
	}
	w = true;
}

function reset(){
	var c;
	for(var i = 0; i < bounds.length; i++ ){
		c = bounds[i].className;
		if (c === "boundary youlose"){
			bounds[i].className = "boundary";
		}
	}	 
	document.getElementById("status").textContent = "Move your mouse over the \"S\" to begin.";
	w = false;
	s = true;
}

function defOBounds(){
	var m = document.getElementById("maze");
	
	var l = m.offsetLeft;
	var t = m.offsetTop;
	var r = m.offsetLeft + m.offsetWidth;
	var b = m.offsetTop + m.offsetHeight;
	console.log(l,r,t,b);
	return [l,r,t,b];
}

function inBounds(p){
	return p[0] >= obounds[0] && p[0] <= obounds[1] && p[1] >= obounds[2] && p[1] <= obounds[3];
}

function checkBounds(event){
	event = event || window.event;
	//console.log(event.clientX,event.clientY);
	var pos = [event.clientX,event.clientY]
	if(s && !inBounds(pos)){		
		outOfBounds();
	}
}