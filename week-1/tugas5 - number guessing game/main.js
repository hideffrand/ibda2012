let randomNumber = Math.floor(Math.random() * 1000) + 1;
const output = document.getElementById("output");
const guessedNumberEl = document.getElementById("guessedNumber");
const guessedNumbers = [];

const numberInput = document.querySelector(".numberInput");

let chance = 10;

function handleClick() {
  chance -= 1;
  if (chance > 0) {
    if (randomNumber == Number(numberInput.value)) {
      output.innerHTML = "Congrats! You guessed right!";
      output.style.backgroundColor = "green";
      output.style.color = "white";
    } else if (Number(numberInput.value) > randomNumber) {
      output.innerHTML = "Too high!";
    } else {
      output.innerHTML = "Too low!";
    }
  } else {
    output.innerHTML = "You Guessed 15 times! No chance left!";
    output.style.backgroundColor = "red";
    output.style.color = "white";
  }
}
