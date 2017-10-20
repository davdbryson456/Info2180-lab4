
window.onload = function(){

	doEverything();	
}
	

function youLose() {
    document.getElementById("boundary1").classList.add("youlose");
    
};



function youlose2(){
	 var loser = document.getElementsByClassName("boundary");
	 var x;

		 for(x = 0; x < loser.length; x++) {
		  loser[x].classList.add("youlose");
	 	}
};

function doEverything(){

	 var allbound = document.querySelectorAll(".boundary");
	 var i;

	 for(i = 0; i < allbound.length; i++ ) {
	  	allbound[i].addEventListener("mouseover", youlose2);
	 }
};

