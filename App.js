function rpsGame(choice) {
  var humanChoice = choice.id;
  var compChoice = computerChoice(randomChoice());
  var resultText;

  if (humanChoice == compChoice) {
    resultText = "You tied";
  } else if (humanChoice == "rock" && compChoice == "paper") {
    resultText = "You Lost";
  } else if (humanChoice == "rock" && compChoice == "scissors") {
    resultText = "You Win";
  } else if (humanChoice == "paper" && compChoice == "scissors") {
    resultText = "You Lost";
  } else if (humanChoice == "paper" && compChoice == "rock") {
    resultText = "You Win";
  } else if (humanChoice == "scissors" && compChoice == "rock") {
    resultText = "You Lost";
  } else if (humanChoice == "scissors" && compChoice == "paper") {
    resultText = "You Win";
  }

  document.getElementById("result").innerHTML = resultText;
}

function randomChoice() {
  return Math.floor(Math.random() * 3);
}

function computerChoice(number) {
  return ["rock", "paper", "scissors"][number];
}
