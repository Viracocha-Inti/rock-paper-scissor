const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultRoundDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userScore = 0;
let compScore = 0;
let userChoice;
let computerChoice;
let roundResult;

//Registers which button the user clicked
possibleChoices.forEach((button) => {
  button.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerText = userChoice;
    computerChoice = getComputerChoice();
    computerChoiceDisplay.innerText = computerChoice;
    roundResult = playRound();
    resultRoundDisplay.innerText = roundResult;
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

//Function sets up the game and calls on the game rules as well as the computer
//choice to determine the winner
function game() {
  for (let i = 0; i < 5; i++) {
    userSelection = prompt("Do you choose rock, paper or scissors?!?", "");
    const computer = getComputerChoice();
    const result = playRound(userSelection.toLowerCase(), computer);
    if (result == "You Won") {
      userScore++;
      console.log(`You scored a point! Congratulations!!`);
    } else if (result == "You Lose") {
      compScore++;
      console.log("You lost a point, better luck next time!!");
    } else {
      console.log("You tied");
    }
  }
}

if (userScore > compScore) {
  console.log("You won, you destroyed the computer!!!");
  console.log("Player score: ", userScore);
  console.log("Computer score: ", compScore);
} else if (compScore > userScore) {
  console.log("You Lost. Computer takeover commencing!!");
  console.log("Player score: ", userScore);
  console.log("Computer score: ", compScore);
} else if (userScore == compScore) {
  console.log("You tied, you might want to try again!!");
  console.log("Player score: ", userScore);
  console.log("Computer score: ", compScore);
}
