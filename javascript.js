//Function makes the computer output either rock, paper or scissors randomly for the game
function getComputerChoice(ranNumber = Math.random()) {
  if (ranNumber <= 0.33) {
    return "Rock";
  } else if (ranNumber <= 0.67) {
    return "Papper";
  } else {
    return "Scissor";
  }
}

//Set intial user and computer score
let userScore = 0;
let compScore = 0;

//Function sets and establishes the rules of the game
function playRound(userSelection, getComputerChoice) {
  if (userSelection.toLowerCase() == "rock" && getComputerChoice == "Scissor") {
    return "You Won";
  } else if (
    userSelection.toLowerCase() == "papper" &&
    getComputerChoice == "Rock"
  ) {
    return "You Won";
  } else if (
    userSelection.toLowerCase() == "scissor" &&
    getComputerChoice == "Papper"
  ) {
    return "You Won";
  } else if (
    userSelection.toLowerCase() == "rock" &&
    getComputerChoice == "Rock"
  ) {
    return "You Tied";
  } else if (
    userSelection.toLowerCase() == "papper" &&
    getComputerChoice == "Papper"
  ) {
    return "You Tied";
  } else if (
    userSelection.toLowerCase() == "scissor" &&
    getComputerChoice == "Scissor"
  ) {
    return "You Tied";
  } else {
    return "You Lose";
  }
}
//Function sets up the game and calls on the game rules as well as the computer
//choice to determine the winner
function game() {
  for (let i = 0; i < 5; i++) {
    userSelection = prompt("Do you choose rock, papper or scissors?!?", "");
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

game();

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
