var bounds;
var s = false;
var w = false;

window.onload = function(){
	//document.getElementById("boundary1").onmouseover = outOfBounds;
	bounds = document.querySelectorAll(".boundary");
	
	setupBounds(bounds);
	document.getElementById("start").onmouseover = start;
	document.getElementById("end").onmouseover = win;	
	document.getElementById("start").onclick = reset;
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
	for(var i = 0; i < bounds.length; i++ ){
		bounds[i].className = "boundary";
	}	 
	document.getElementById("status").textContent = "Move your mouse over the \"S\" to begin.";
	w = false;
	s = false;
}