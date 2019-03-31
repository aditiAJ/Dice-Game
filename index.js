var min = 1;
var max = 6;
var randomNumber1 =  ((Math.random() * 6) + 1);
var randomNumber2 = Math.round(randomNumber1);
var randomDice = "dice" + randomNumber2 + ".png";
var randomImageSource = "images/" + randomDice;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber3 =  ((Math.random() * 6) + 1);
var randomNumber4 = Math.round(randomNumber3);
var randomDice = "dice" + randomNumber4 + ".png";
var randomImageSource1 = "images/" + randomDice;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource1);

if (randomNumber2 > randomNumber4) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}

else if (randomNumber4 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}

else {
  document.querySelector("h1").innerHTML = "Draw!";
}
