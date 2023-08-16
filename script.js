const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guessInput = document.getElementById('guessInput');
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    displayMessage('Please enter a valid number between 1 and 100.', 'red');
    return;
  }

  attempts++;

  if (guess === targetNumber) {
    displayMessage(`Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`, 'green');
  } else if (guess < targetNumber) {
    displayMessage('Try a higher number.', 'blue');
  } else {
    displayMessage('Try a lower number.', 'blue');
  }
  
  guessInput.value = '';
  guessInput.focus();
}

function displayMessage(message, color) {
  const messageElement = document.getElementById('message');
  messageElement.textContent = message;
  messageElement.style.color = color;
}
