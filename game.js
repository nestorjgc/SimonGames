let buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  console.log(randomNumber);

  let randomChosenColour = buttonColours[randomNumber];
  console.log(randomChosenColour);
}
