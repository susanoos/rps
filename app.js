let playerSelection, computerSelection, computerScore, playerScore;
const gameScore = [];
const choice = ["rock", "paper", "scissors"];

const computerPlay = () => {
  const random = Math.floor(Math.random() * choice.length);
  return choice[random];
};

computerSelection = computerPlay();
playerSelection = prompt("rock paper scissors");
const playRound = (playerSelection) => {
  if (playerSelection === computerSelection) {
    console.log(`Tied`);
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(`Player wins!`);
    console.log(`Player scored a point`);
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    console.log(`Computer wins`);
    console.log(`Computer scored a point`);
  }
};
// console.log(playerSelection);
// console.log(computerSelection);
// playRound(playerSelection);

const game = () => {
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection);
  }
};
game();
