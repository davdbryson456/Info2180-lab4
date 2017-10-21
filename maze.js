
window.onload = function(){

	doEverything();	
}
var stop=false;	

function youLose() {
    document.getElementById("boundary1").classList.add("youlose");
    
};



function youlose2(){
	document.getElementById("status").innerHTML = "YOU LOSE"
	stop=true;
	 var loser = document.getElementsByClassName("boundary");
	 var x;

		 for(x = 0; x < loser.length; x++) {
		  loser[x].classList.add("youlose");
	 	}

};

function doEverything(){
	start=document.getElementById("start").addEventListener("click",restart);
	 var allbound = document.querySelectorAll(".boundary");
	 var i;

	 for(i = 0; i < allbound.length; i++ ) {

	  	allbound[i].addEventListener("mouseover", youlose2);
	  	
	 }
	 end=document.getElementById("end").addEventListener("mouseover", youWin);
};

function youWin(){
	if (stop==true){

	}else{

		document.getElementById("status").innerHTML = "YOU WIN";
	}

};

function restart(){
	stop=false;

	var poop=document.querySelectorAll(".boundary");
	document.getElementById("status").innerHTML = "Move your mouse over the S to begin.";
	var i;
  	for (i = 0; i < poop.length; i++) {
    	poop[i].classList.remove("youlose");
  	}

};