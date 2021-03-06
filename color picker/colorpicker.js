var colors = [];
var squares = document.querySelectorAll(".squares");
var colorDisplay = document.querySelector(".display-4");
var newgame = document.querySelector("#newgame");
var message = document.querySelector("#message");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var jumboBG = document.querySelector(".bg-myblue");
var colorPick;
var numSquare = 6;

init();

function init(){
	newGame();
	newgame.addEventListener("click", newGame);
	easy.addEventListener("click", easyMode);
	hard.addEventListener("click", hardMode);
}

function newGame(){
	for (var i=0; i< squares.length; i++){
		if(i>=numSquare){
			squares[i].style.display = "none";
		}else{
			squares[i].style.display = "block";
			colors[i] = randomColors();
			squares[i].style.backgroundColor = colors[i];
			squares[i].addEventListener("click", checkWinner);
		}
	}
	message.textContent = " ";
	newgame.textContent = "NEW COLORS"
	jumboBG.style.backgroundColor = "#66c2ff";
	colorPick = pickRandom();
	colorDisplay.textContent = colorPick.toUpperCase();
}

function hardMode(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	numSquare = 6;
	newGame();
}

function easyMode(){
	hard.classList.remove("selected");
	easy.classList.add("selected");
	numSquare = 3;
	newGame();
}

function randomColors(){
	var color_R = Math.floor(Math.random()*256);
	var color_G = Math.floor(Math.random()*256);
	var color_B = Math.floor(Math.random()*256);
	return "rgb(" + color_R + ", " + color_G + ", " + color_B +")";
}

function pickRandom(){
	var index = Math.floor(Math.random()*numSquare);
	return colors[index];
}

function setAllColors(color=colorPick){
	for (var i = 0; i < numSquare; i++){
		squares[i].style.backgroundColor = color;
	}
	jumboBG.style.backgroundColor = color;
}

function checkWinner(){
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
}