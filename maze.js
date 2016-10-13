var bounds;
var s = false;
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
	for(var i = 0; i < bounds.length; i++ ){
		c = bounds[i].className;
		if(c === "boundary"){
			bounds[i].className+=" youlose";
		}
	}	
}
function start(){
	s = true;
}

function win(){
	if (s){
		var b = document.querySelector(".boundary");
		if(b.className !== "boundary youlose"){
			alert("You Win!")
		}
	}
	s = false;
}

function reset(){
	for(var i = 0; i < bounds.length; i++ ){
		bounds[i].className = "boundary";
	}	 
}