let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  /* console.log(randomNumber); */
  let randomChosenColour = buttonColours[randomNumber];
  console.log(randomChosenColour);

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}
