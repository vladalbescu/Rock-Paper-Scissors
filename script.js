function playGame() {
  // DOM
  let message = document.querySelector("#message");
  let buttons = document.querySelectorAll("button");
  let player1Score = document.querySelector("#player1score");
  let player2Score = document.querySelector("#player2score");

  buttons.forEach((button) => {
    button.addEventListener("click", playRound);
  });

  // VARIABLES

  let playerOneScore = 0;
  let playerTwoScore = 0;

  /*   console.log(
    `The game has finished! The scores are:\nPlayer one: ${playerOneScore}\nPlayer two: ${playerTwoScore}`
  );
  if (playerOneScore > playerTwoScore) {
    console.log("Player one wins!");
  } else if (playerOneScore < playerTwoScore) {
    console.log("Player two wins!");
  } else {
    console.log("It's a match! Play again!");
  } */

  // FUNCTIONS

  function playRound(e) {
    playerOneSelection = e.target.id;
    playerTwoSelection = playComputer();

    if (playerOneSelection === playerTwoSelection) {
      displayMessage(
        `${playerOneSelection} vs ${playerTwoSelection} - It's a match!`
      );
    } else if (
      (playerOneSelection === "rock" && playerTwoSelection === "scissors") ||
      (playerOneSelection === "paper" && playerTwoSelection === "rock") ||
      (playerOneSelection === "scissors" && playerTwoSelection === "paper")
    ) {
      playerOneScore++;
      displayMessage(
        `${playerOneSelection} vs ${playerTwoSelection} - Player one wins!`
      );
    } else {
      playerTwoScore++;
      displayMessage(
        `${playerOneSelection} vs ${playerTwoSelection} - Player two wins!`
      );
    }

    refreshScores();
    checkForGameEnd();
  }

  function playComputer() {
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * choices.length);

    return choices[randomChoice];
  }

  function refreshScores() {
    player1Score.textContent = playerOneScore;
    player2Score.textContent = playerTwoScore;
  }

  function checkForGameEnd() {
    if (playerOneScore === 5 || playerTwoScore === 5) {
      displayMessage("Game over!");
      playerOneScore = playerTwoScore = 0;
    }
  }

  function displayMessage(str) {
    message.textContent = str;
  }

  // FUNCTIONS ENDS
}
// GAME FUNCTION ENDS

playGame();
