"use strict";
let score = 20;
let highscore = 0;
let winningNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (className, message) {
  document.querySelector(className).textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  // Get the user's guess value
  let guess = Number(document.querySelector(".guess").value);

  // When the user does not fill out anything
  if (!guess) {
    displayMessage(".message", "⚠️ Not a number!");
  }
  // When the user fills out a number that is greater than 20
  else if (guess > 20) {
    displayMessage(".message", "⚠️ Insert only numbers between 1 - 20!");
  }
  // When the user's guess is too low or too high
  else if (guess !== winningNumber) {
    if (score > 1) {
      displayMessage(
        ".message",
        guess > winningNumber ? "↗️ Too high..." : "↘️ Too low..."
      );
      score--;
      displayMessage(".score", score);
    } else {
      displayMessage(".message", "🧨 You lost");
      displayMessage(".score", 0);
    }
  }
  // When user guesses the secret number
  else if (winningNumber === guess) {
    displayMessage(".message", "🎉 YAY! You guessed it!");
    displayMessage(".number", guess);

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      displayMessage(".highscore", highscore);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  winningNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage(".message", "Start guessing...");
  displayMessage(".score", score);
  displayMessage(".number", "?");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
