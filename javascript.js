//Selectors

//Event Listeners

//Functions
function getComputerChoice(ranNumber = Math.random()) {
  if (ranNumber <= 0.33) {
    return "Rock";
  } else if (ranNumber <= 0.67) {
    return "Papper";
  } else {
    return "Scissor";
  }
}

var userSelection = prompt("Do you choose rock, papper or scissors?!?", "");
let uChoice = userSelection.toLowerCase();
let userScore = 0;
let compScore = 0;

function playRound(uChoice, getComputerChoice) {
  if (uChoice == "rock" && getComputerChoice == "Scissor") {
    // userScore = userScore++;
    return "You Won";
  } else if (uChoice == "papper" && getComputerChoice == "Rock") {
    // userScore = userScore++;
    return "You Won";
  } else if (uChoice == "scissor" && getComputerChoice == "Papper") {
    // userScore = userScore++;
    return "You Won";
  } else if (uChoice == "rock" && getComputerChoice == "Rock") {
    return "You Tied";
  } else if (uChoice == "papper" && getComputerChoice == "Papper") {
    return "You Tied";
  } else if (uChoice == "scissor" && getComputerChoice == "Scissor") {
    return "You Tied";
  } else {
    // compScore = compScore++;
    return "You Lose";
  }
}

// function game(result) {
//   if (result == "You Won") {
//     userScore = userScore + 1;
//     console.log(
//       `Congrats you scored a point, User score is ${userScore} and Computer score is ${compScore}`
//     );
//   } else if (result == "You Lose") {
//     compScore = compScore + 1;
//     console.log(
//       `Sorry, you lost this round: User score is ${userScore} and Computer score is ${compScore}`
//     );
//   } else {
//     console.log(
//       `You tied, no points to either party!! User score is ${userScore} and Computer score is ${compScore}`
//     );
//   }
// }

console.log("User choice =", uChoice);
const computer = getComputerChoice();
console.log("Computer choice =", computer);
const result = playRound(uChoice, computer);
console.log(result);
// const point = game(result);
// console.log(point);
