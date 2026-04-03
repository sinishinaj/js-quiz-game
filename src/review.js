const questions = JSON.parse(localStorage.getItem("answeredQuestions"));
const list = document.getElementById("questions");

for (var i=0; i < questions.length; i++){
	list.innerHTML+=`
		<div class="expanding no-flex-container" style="text-align: left;">
          <h3 id="${i}question">Question for Player ${questions[i].Player}:</h3>
          <p id="${i}answer1">Answer #1:</p>
          <p id="${i}answer2">Answer #2:</p>
          <p id="${i}answer3">Answer #3:</p>
          <p id="${i}answer4">Answer #4:</p>
          <p id="${i}playerAnswer">Player ${questions[i].Player}'s Answer:</p>
        </div>
	`
	document.getElementById(`${i}question`).innerText +=" "+ questions[i].Question;
	for (var a=0; a < 4; a++){
		var element = document.getElementById(`${i}answer${a+1}`);
		element.innerText +=" "+ questions[i].Answers[a];
		if (questions[i].Answers[a] == questions[i].CorrectAnswer){
			element.classList.add("green");
		}
	}
	var playerElement = document.getElementById(`${i}playerAnswer`);
	playerElement.innerText +=" "+ questions[i].ChosenAnswer;
	if (questions[i].ChosenAnswer == questions[i].CorrectAnswer){
		playerElement.classList.add("green");
	}else{
		playerElement.classList.add("red");
	}
}
