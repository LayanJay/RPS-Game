const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
const computerChoiceImg = document.getElementById("computerChoice");
const result = document.getElementById("result");
const restart = document.getElementById("restart");

restart.style.display = "none";

let isGameOver = false;

userScoreValue = 0;
computerScoreValue = 0;

function rpsGame(choice) {
  var humanChoice = choice.id;
  var compChoice = computerChoice(randomChoice());
  var resultText;
  result.classList.remove("green");
  result.classList.remove("red");
  result.classList.remove("blue");

  if (!isGameOver) {
    if (humanChoice == compChoice) {
      resultText = "You tied";
    } else if (humanChoice == "rock" && compChoice == "paper") {
      resultText = "You Lost";
      computerScoreValue++;
    } else if (humanChoice == "rock" && compChoice == "scissor") {
      resultText = "You Win";
      userScoreValue++;
    } else if (humanChoice == "paper" && compChoice == "scissor") {
      resultText = "You Lost";
      computerScoreValue++;
    } else if (humanChoice == "paper" && compChoice == "rock") {
      resultText = "You Win";
      userScoreValue++;
    } else if (humanChoice == "scissor" && compChoice == "rock") {
      resultText = "You Lost";
      computerScoreValue++;
    } else if (humanChoice == "scissor" && compChoice == "paper") {
      resultText = "You Win";
      userScoreValue++;
    }
  } else {
    resultText = "Restart the game";
    result.classList.add("blue");
  }

  if (userScoreValue == 10 || computerScoreValue == 10) {
    if (userScoreValue > computerScoreValue) {
      resultText = "You won the round!!";
      result.classList.add("green");
    } else if (computerScoreValue > userScoreValue) {
      resultText = "You lost the round.. Let's try again.";
      result.classList.add("red");
    }
    userScoreValue = 0;
    computerScoreValue = 0;
    isGameOver = true;
    restart.style.display = "block";
  }

  userScore.innerHTML = `0${userScoreValue}`;
  computerScore.innerHTML = `0${computerScoreValue}`;
  result.innerHTML = resultText;
}

function randomChoice() {
  return Math.floor(Math.random() * 3);
}

function computerChoice(number) {
  return ["rock", "paper", "scissor"][number];
}
