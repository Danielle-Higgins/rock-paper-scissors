const weapons = document.querySelectorAll(".btn-container div");
const userEmoji = document.querySelector("#user-choice");
const compEmoji = document.querySelector("#comp-choice");
const userSelectText = document.querySelector("#user-selection");
const compSelectText = document.querySelector("#comp-selection");
const roundWinner = document.querySelector("#round-winner");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#comp-score");
const winner = document.querySelector("#overall-winner");
const playAgain = document.querySelector("#play-again");

let userScore = 0;
let compScore = 0;

function getComputerChoice() {
  const compChoice = Math.floor(Math.random() * 3) + 1;

  if (compChoice === 1) {
    return "rock";
  } else if (compChoice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function setEmoji(choice) {
  if (choice === "rock") return "✊";
  else if (choice === "paper") return "✋";
  else return "✌️";
}

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "scissors")
  ) {
    return "This Round ends in an Tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore++;
    return "You Win this Round!";
  } else {
    compScore++;
    return "The Computer Wins this Round!";
  }
}

function getWinner() {
  if (userScore === 5) return "You Won the Game! Congrats!";
  else return "The Computer Wins the Game! Better luck next time!";
}

weapons.forEach((weapon) => {
  weapon.addEventListener("click", () => {
    const userChoice = weapon.firstElementChild.id;
    const compChoice = getComputerChoice();

    userEmoji.textContent = setEmoji(userChoice);
    compEmoji.textContent = setEmoji(compChoice);
    userSelectText.textContent = userChoice;
    compSelectText.textContent = compChoice;

    roundWinner.textContent = playRound(userChoice, compChoice);
    playerScore.textContent = userScore;
    computerScore.textContent = compScore;

    if (userScore === 5 || compScore === 5) {
      // make each div unclickable
      weapons.forEach((weapon) => {
        weapon.style.pointerEvents = "none";
        weapon.style.backgroundColor = "lightgrey";
      });

      winner.hidden = false;
      winner.textContent = getWinner();
    }
  });
});

// reload the page
playAgain.addEventListener("click", () => window.location.reload());
