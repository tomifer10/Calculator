document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    let currentInput = "";

    // Get all buttons
    const buttons = document.querySelectorAll(".button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const buttonValue = button.dataset.value;

            // Handle different button types
            if (buttonValue === "=") {
                // Evaluate the expression and display the result
                display.textContent = eval(currentInput);
                // Clear the currentInput after displaying the result
                currentInput = "";
            } else if (buttonValue === "clear-button") {
                // Clear the display and currentInput
                display.textContent = "";
                currentInput = "";
            } else if (buttonValue === "+/-") {
                // Change the sign of the current input
                if (currentInput.length > 0 && currentInput[0] !== '-') {
                    currentInput = '-' + currentInput;
                } else if (currentInput.length > 0 && currentInput[0] === '-') {
                    currentInput = currentInput.slice(1);
                }
                display.textContent = currentInput;
            } else if (buttonValue === "%") {
                // Handle modular division
                if (currentInput.length > 0) {
                    const lastChar = currentInput.slice(-1);
                    if (!isNaN(lastChar)) {
                        // If the last character is a number, append the modulus operator
                        currentInput += "%";
                        display.textContent = currentInput;
                    }
                }
            } else {
                // Append the button value to the current input
                currentInput += buttonValue;
                display.textContent = currentInput;
            }
        });
    });

  // Dark mode toggle
  const darkModeToggle = document.getElementById("darkMode-toggle");
  const darkContainer = document.getElementById("dark-container");
  const body = document.body;

  darkModeToggle.addEventListener("change", function () {
      if (darkModeToggle.checked) {
          darkContainer.classList.add("dark-mode");
          body.classList.add("dark-mode");
      } else {
          darkContainer.classList.remove("dark-mode");
          body.classList.remove("dark-mode");
      }
  });
});



