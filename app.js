let playerSelection, computerSelection;
const choice = ["rock", "paper", "scissors"];

const computerPlay = () => {
  const random = Math.floor(Math.random() * choice.length);
  return choice[random];
};

computerSelection = computerPlay();
// const playRound = (playerSelection) => {
//   if (playerSelection === computerSelection) {
//     return `Tie game.`;
//   } else if (
//     (playerSelection === "Rock" && computerSelection === "Paper") ||
//     (playerSelection === "Paper" && computerSelection === "Rock") ||
//     (playerSelection === "Scissors" && computerSelection === "Paper")
//   ) {
//     return `Player beats Computer ${computerSelection} with ${playerSelection}`;
//   }

//   if (
//     (computerSelection === "Rock" && playerSelection === "Scissors") ||
//     (computerSelection === "Paper" && playerSelection === "Rock") ||
//     (computerSelection === "Scissors" && playerSelection === "Paper")
//   ) {
//     return `Computer won with ${computerSelection}`;
//   }
// };
// playRound("Paper");
