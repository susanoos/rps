let computerScore, playerScore;
const choice = ["rock", "paper", "scissors"];
const playerPoints = document.querySelector(".player-score");
const computerPoints = document.querySelector(".computer-score");
const btn = document.querySelectorAll("input");

const disableBtns = () => {
  btn.forEach((el) => {
    el.disabled = true;
  });
};

const computerPlay = () => {
  const random = Math.floor(Math.random() * choice.length);
  return choice[random];
};

const playRound = (playerSelection) => {
  let result = "";
  const computerSelection = computerPlay();
  playerScore = playerPoints.innerHTML;
  computerScore = computerPoints.innerHTML;
  if (playerSelection === computerSelection) {
    console.log(`Tied`);
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    playerPoints.innerHTML = playerScore;
    console.log(`Player wins!`);
    console.log(`Player scored a point`);
    if (playerScore === 5) {
      console.log(`Player won`);
      document.querySelector(".player-winner-text").innerHTML =
        "Player won the 5 rounds!";
      addEle();
      disableBtns();
    }
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    computerScore++;
    computerPoints.innerHTML = computerScore;
    console.log(`Computer wins`);
    console.log(`Computer scored a point`);

    if (computerScore === 5) {
      console.log(`Computer won`);
      document.querySelector(".computer-winner-text").innerHTML =
        "Computer won the 5 rounds!";
      addEle();
      disableBtns();
    }
  }
};

btn.forEach((btns) => {
  btns.addEventListener("click", () => {
    playRound(btns.value);
  });
});

const addEle = () => {
  const newPara = document.createElement("p");
  const newParaText = document.createTextNode("Reload page to play again");
  newPara.appendChild(newParaText);
  const currentDiv = document.querySelector(".game-score");
  document.body.insertBefore(newPara, currentDiv);
};
