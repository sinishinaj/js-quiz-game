const scoreBoard = JSON.parse(localStorage.getItem("scoreBoard"));
const players = document.getElementById("players");
const winners = document.getElementById("winners");
const colors = ["", "blue", "red", "green", "orange"];

let highest = 0;
let winnerCount = 0;

for (var i=0; i < scoreBoard.length; i++){
	if (scoreBoard[i] > highest){
		highest = scoreBoard[i];
	}
	players.innerHTML+=`<h2 class="${colors[i+1]}" style="width:300px; padding:10px;">Player ${i+1}'s score: ${scoreBoard[i]}pts</h2>`
}
for (var i=0; i < scoreBoard.length; i++){
	let delimiter = '';
	if (scoreBoard[i] == highest){
		winnerCount++;

		if (winnerCount > 1){
			delimiter = ', and ';
		}
		winners.innerHTML+=`${delimiter}Player ${i+1}`;
	}
}

winners.innerHTML+=", won the game!"