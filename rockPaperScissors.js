function getComputerChoice() {
  let rng = Math.floor(Math.random() * 3);
  switch (rng) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
    default:
      return "Error";
  }
}
let choice = prompt("test");
console.log(choice);
console.log(getComputerChoice());
