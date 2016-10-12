window.onload = function(){
	document.getElementById("boundary1").onmouseover = outOfBounds;
}

function outOfBounds(){
	document.getElementById("boundary1").className+=" youlose";
}