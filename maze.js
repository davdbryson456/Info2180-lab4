
window.onload = function(){

	doEverything();	
}
var stop=false;	

function youLose() {
    document.getElementById("boundary1").classList.add("youlose");
    
};



function youlose2(){
	stop=true;
	 var loser = document.getElementsByClassName("boundary");
	 var x;

		 for(x = 0; x < loser.length; x++) {
		  loser[x].classList.add("youlose");
	 	}
	 	//document.getElementById("status").innerHTML = "YOU LOSE";
};

function doEverything(){

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

		window.alert("YOU WIN");
	}

	
};
