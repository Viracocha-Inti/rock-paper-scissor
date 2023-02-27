const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultRoundDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const finalPhrase = document.getElementById("phrase");

let userScore = 0;
let compScore = 0;
let userChoice;
let computerChoice;
let roundResult;
let phrase;

//Registers which button the user clicked
possibleChoices.forEach((button) => {
  button.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerText = userChoice;
    computerChoice = getComputerChoice();
    computerChoiceDisplay.innerText = computerChoice;
    roundResult = playRound();
    resultRoundDisplay.innerText = roundResult;
    phrase = gameScore();
    finalPhrase.innerText = phrase;
    gameEnd();
  });
});

//Function makes the computer output either rock, paper or scissors randomly for the game
function getComputerChoice(ranNumber = Math.floor(Math.random() * 3) + 1) {
  if (ranNumber == 1) {
    return "Rock";
  } else if (ranNumber == 2) {
    return "Paper";
  } else {
    return "Scissor";
  }
}

//Function sets and establishes the rules of the game
function playRound() {
  if (userChoice == "Rock" && computerChoice == "Scissor") {
    return "You Won";
  } else if (userChoice == "Paper" && computerChoice == "Rock") {
    return "You Won";
  } else if (userChoice == "Scissor" && computerChoice == "Paper") {
    return "You Won";
  } else if (userChoice === computerChoice) {
    return "You Tied";
  } else {
    return "You Lose";
  }
}

function gameScore() {
  if (roundResult == "You Won") {
    userScore++;
    return `Congratulations, you scored a point!
    Your Score: ${userScore} Computer Score: ${compScore}`;
  } else if (roundResult == "You Lose") {
    compScore++;
    return `You lost a point, better luck next time!
    Your Score: ${userScore} Computer Score: ${compScore}`;
  } else {
    return `You tied. Don't give up!
    Your Score: ${userScore} Computer Score: ${compScore}`;
  }
}

function gameEnd() {
  if (userScore == 5) {
    alert(
      "You beat the computer!?!?! I can't believe it. Thank you for saving us!! Legend foretold of your coming, but none of us actually believed it. Thank you so much!!"
    );
  } else if (compScore == 5) {
    alert(
      "The computer prevails, god save us!! Please refresh your browser and try again. We are tired of living under its tyranny :("
    );
  }
}
