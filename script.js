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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // Function that plays a single round
  function playRound(humanChoice, computerChoice) {
    if (
      (humanChoice === "rock" && computerChoice === "rock") ||
      (humanChoice === "paper" && computerChoice === "paper") ||
      (humanChoice === "scissors" && computerChoice === "scissors")
    ) {
      return `You chose ${humanChoice}. Computer chose ${computerChoice}. It's a Tie!`;
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      return `You chose ${humanChoice}. Computer chose ${computerChoice}. You Win!`;
    } else {
      computerScore++;
      return `You chose ${humanChoice}. Computer chose ${computerChoice}. Computer Wins!`;
    }
  }

  for (let i = 0; i < 5; i++) {
    console.log(playRound(getHumanChoice(), getComputerChoice()));
  }

  if (humanScore === computerScore) {
    console.log("It's a Tie! No one Wins!");
  } else if (humanScore > computerScore) {
    console.log("You are the Winner! Congrats!");
  } else {
    console.log("The Computer Wins! Better luck next time!");
  }
}

const weapons = document.querySelectorAll(".btn-container div");
const userEmoji = document.querySelector("#user-choice");
const compEmoji = document.querySelector("#comp-choice");
const userSelectText = document.querySelector("#user-selection");
const compSelectText = document.querySelector("#comp-selection");

weapons.forEach((weapon) => {
  weapon.addEventListener("click", () => {
    const userChoice = weapon.firstElementChild.id;
    const compChoice = getComputerChoice();

    userEmoji.textContent = setEmoji(userChoice);
    compEmoji.textContent = setEmoji(compChoice);
    userSelectText.textContent = userChoice;
    compSelectText.textContent = compChoice;
  });
});
