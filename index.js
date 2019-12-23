document.querySelector(".myButton").addEventListener("click", function() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
  if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").textContent = "Draw!";
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 wins!";
  } else {
    document.querySelector("h1").textContent = "Player 2 wins!";
  }
});

// Random Number Generation

// var randomNumber1 = 6;
// var randomNumber2 = 6;
//
// function selectRandomNumbers() {
//
//   var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//   var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//
// }

// Image Replacement to Match Random Number

// function changeImages() {
//
//   document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
//   document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
//
// }

// If Statement To Determine Winner Text

// function declareWinner() {
//   if (randomNumber1 == randomNumber2) {
//     document.querySelector("h1").textContent = "Draw!";
//   } else if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").textContent = "Player 1 wins!";
//   } else {
//     document.querySelector("h1").textContent = "Player 2 wins!";
//   }
//
// }
