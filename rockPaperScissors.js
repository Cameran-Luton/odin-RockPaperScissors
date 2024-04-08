function getComputerChoice() {
  let rng = Math.floor(Math.random() * 3);
  switch (rng) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return "Error";
  }
}

function playAGame(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  console.log(computerSelection);

  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      console.log("Draw");
    }
    if (computerSelection == "scissors") {
      console.log("Win");
    }
    if (computerSelection == "paper") {
      console.log("Lose");
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      console.log("Win");
    }
    if (computerSelection == "scissors") {
      console.log("Lose");
    }
    if (computerSelection == "paper") {
      console.log("Draw");
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      console.log("Lose");
    }
    if (computerSelection == "scissors") {
      console.log("Draw");
    }
    if (computerSelection == "rock") {
      console.log("Win");
    }
  }
}
console.log(playAGame(prompt("make your choice"), getComputerChoice()));
