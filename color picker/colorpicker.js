var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)",
];
var squares = document.querySelectorAll(".squares");
var colorDisplay = document.querySelector(".display-4");
var newgame = document.querySelector("#newgame");
var message = document.querySelector("#message");
var colorPick = colors[4];

colorDisplay.textContent = colorPick.toUpperCase();

// function assignColor(){
// })

for (var i=0; i< squares.length ;i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function(){
			var picked = this.style.backgroundColor;
			if(picked === colorPick){
				message.textContent = "CORRECT!";
				newgame.textContent = "PLAY AGAIN?"
				setAllColors(colorPick);
			}
			else{
				this.style.backgroundColor = "black";
				message.textContent = "TRY AGAIN";
			}
		});
}

function newGame(){
	message.textContent = " ";
	newgame.textContent = "NEW COLORS"
	for (var i=0; i< squares.length ;i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", checkWinner);
	}
}

function setAllColors(color=colorPick){
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function checkWinner(){}