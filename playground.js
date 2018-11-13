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
	console.log("current background: " + this.style.background)
 	if(this.style.background != "rgb(217, 179, 255)"){
 		this.style.background = "rgb(217, 179, 255)";
  	}
  	else{
  		this.style.background = "#FFFFFF";
  	}
});