var h1 = document.querySelector("h1");
var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
var reset = document.querySelector("#reset");
var p1_display = document.querySelector("#p1_score_disyplay");
var p2_display = document.querySelector("#p2_score_disyplay");
var winning = document.querySelector("input[type=number]");
var winning_display = document.querySelector("#playTill");
var win_required = 5 //document.querySelector("input[type="number"]");

var gameOver = false;
var p1_score = 0;
var p2_score = 0;

player1.addEventListener("click", addPlayer1Score);
player2.addEventListener("click", addPlayer2Score);
reset.addEventListener("click", resetScore);
winning.addEventListener("change", input_changed);

function input_changed(){
	winning_display.textContent = winning.value;
	win_required = Number(winning.value);
	resetScore();
}

function addPlayer1Score(){
	if(!gameOver){
		p1_score++;
		p1_display.textContent = p1_score;
		if (p1_score === win_required) {
			gameOver = true;
			p1_display.classList.add("winner")
		}
	}	
}

function addPlayer2Score(){
	if(!gameOver){
		p2_score++;
		p2_display.textContent = p2_score;
		if (p2_score === win_required) {
			gameOver = true;
			p2_display.classList.add("winner")
		}
	}	
}

function resetScore(){
	gameOver = false;
 	p1_score = 0;
	p2_score = 0;
	p1_display.classList.remove("winner")
	p2_display.classList.remove("winner")
	p1_display.textContent = p1_score;
	p2_display.textContent = p2_score;
}