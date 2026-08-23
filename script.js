/**
 * Create function to get computer choice
 *      Use Math.random to get a random integer between 1-3 and store inside variable compChoice
 *      If compChoice is 1, return string rock
 *      Else If compChoice is 2, return string paper
 *      Else return string scissors
 */

// Function randomly returns “rock”, “paper” or “scissors”
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

/**
 * Create function to get the human choice
 *      Create empty string
 *      While true, prompt the user for rock, paper, or scissors and convert to lowercase
 *          if the choice is rock, paper, or scissors, break out of loop
 *      return the choice
 */

// Function that takes the user choice and returns it
function getHumanChoice() {
  let choice = "";

  while (true) {
    choice = prompt("Enter rock, paper, or scissors:", "").toLowerCase();

    if (choice === "rock" || choice === "paper" || choice === "scissors") break;
  }
  return choice;
}

// console.log(getComputerChoice());
// console.log(getHumanChoice());
