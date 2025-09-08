let maximum = parseInt(prompt('Enter the maximum number!'));
while (!maximum) {
  maximum = parseInt(prompt('Enter the a valid number!'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = prompt("Enter your first guess! (Type 'q' to quit)");
let attemps = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === 'q') break;
  guess = parseInt(guess);
  if (guess > targetNum) {
    guess = prompt('Too high! Enter a new guess:');
    attemps++;
  } else if (guess < targetNum) {
    guess = prompt('Too low! Enter a new guess:');
    attemps++;
  } else {
    guess = prompt("Invalid Guess. Please eter a number or 'q' to quit");
  }
}
if (guess === 'q') {
  console.log('OK, YOU QUIT!');
} else {
  console.log('CONGRATS YOU WIN');
  console.log(`YOU GOT IT!! IT TOOK YOU ${attemps} GUESSES`);
}
