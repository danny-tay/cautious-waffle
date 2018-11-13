var button = document.querySelector("button");


// button.addEventListener("click", function(){
// 	this.classList.toggle("togglePurple")
// })

// var isPurple = false; 
// button.addEventListener("click",function(){
// 	if(isPurple){
// 		this.style.background = "white";
// 	}
// 	else{
// 		this.style.background = "#9966ff";
// 	}
// 	isPurple = !isPurple;
// });

button.addEventListener("click",function(){
 	if(this.style.background != "purple"){
 		this.style.background = "purple";
  	}
  	else{
  		this.style.background = "white";
  	}
});