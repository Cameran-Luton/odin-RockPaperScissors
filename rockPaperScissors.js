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

function PlayAGame(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      return "Draw";
    }
    if (computerSelection == "scissors") {
      return "Win";
    }
    if (computerSelection == "paper") {
      return "Lose";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      return "Win";
    }
    if (computerSelection == "scissors") {
      return "Lose";
    }
    if (computerSelection == "paper") {
      return "Draw";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      return "Lose";
    }
    if (computerSelection == "scissors") {
      return "Draw";
    }
    if (computerSelection == "rock") {
      return "Win";
    }
  }
}

function PlayFiveGames() {
  let pScore = 0;
  let cScore = 0;
  let WDL = "";
  for (let index = 0; index < 5; index++) {
    WDL = PlayAGame(prompt("make your choice"), getComputerChoice());
    switch (WDL) {
      case "Win":
        pScore++;
        break;
      case "Draw":
        break;
      case "Lose":
        cScore++;
        break;

      default:
        break;
    }
  }
  console.log(cScore);
  console.log(pScore);
  if (pScore > cScore) {
    return "WINNER";
  } else {
    return "LOSER";
  }
}
console.log(PlayFiveGames());
