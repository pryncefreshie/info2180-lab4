var boundry;

var end;

window.onload = function(){
	
	//Exercise 1
	var maze = document.getElementById("maze");
	var boundaries = document.querySelectorAll(".boundary");
	//Exercise 2
 +	var status = document.querySelector("#status");
	var changeBounds = function(){

		for(var i = 0; i < boundaries.length;i++){
			if(boundaries[i].className = "boundary"){
				boundaries[i].className += "youlose";
			}
			status.innerHTML = "You Lose!";
			}
		};
	}
	//Exercise 6
	for(var i=0; i < boundaries.length;i++){
		boundaries[i].onmouseover = function(){
			changeBounds();
		};
	}
	maze.onmouseleave = function(){
 +			for (var i = 0; i< otherBoundaries.length-1; i++) {
 +				otherBoundaries[i].classList.add("youlose");
 +			}
 +		};
 
};