window.onload = function(){
	//document.getElementById("boundary1").onmouseover = outOfBounds;
	var bounds = document.querySelectorAll(".boundary");
	setupBounds(bounds);
}


function setupBounds(list){
	for(var i = 0; i < list.length; i++ ){
		list[i].onmouseover = outOfBounds;
	}
}

function outOfBounds(){
	//document.getElementById("boundary1").className+=" youlose";
	var bounds = document.querySelectorAll(".boundary");
	var c;
	for(var i = 0; i < bounds.length; i++ ){
		c = bounds[i].className;
		if(c === "boundary"){
			bounds[i].className+=" youlose";
		}
	}	
}