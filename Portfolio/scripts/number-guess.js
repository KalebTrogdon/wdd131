document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("guessInput");
    const button = document.getElementById("submitGuess");
    const result = document.getElementById("guessResult");
  
    if (input && button && result) {
      const correctNumber = Math.floor(Math.random() * 10) + 1;
  
      button.addEventListener("click", () => {
        const guess = parseInt(input.value);
        if (isNaN(guess)) {
          result.textContent = "Please enter a number!";
        } else if (guess < 1 || guess > 10) {
          result.textContent = "Pick a number between 1 and 10!";
        } else if (guess === correctNumber) {
          result.textContent = "🎉 You guessed it!";
        } else {
          result.textContent = "❌ Try again!";
        }
      });
    }
  });
  