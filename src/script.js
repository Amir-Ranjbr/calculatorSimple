document.addEventListener("DOMContentLoaded", function () {
  const display = document.querySelector(".display");
  const buttons = document.querySelectorAll(".button");
  let expression = "";

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = this.textContent;

      switch (value) {
        case "C":
          expression = clearDisplay();
          break;
        case "=":
          if (isValidExpression()) {
            expression = calculate();
          }
          break;
        default:
          expression = addToExpression(value);
          break;
      }

      updateDisplay(expression);
    });
  });

  const clearDisplay = () => {
    return "";
  };

  const addToExpression = (value) => {
    return expression + value;
  };

  const isValidExpression = () => {
    const lastChar = expression[expression.length - 1];
    const operators = ["+", "-", "*", "/"];

    if (operators.includes(lastChar)) {
      return false;
    }

    return true;
  };

  const calculate = () => {
    try {
      const result = eval(expression);
      const roundedResult = parseFloat(result.toFixed(2));
      return roundedResult.toString();
    } catch (error) {
      return "0";
    }
  };

  const updateDisplay = (value) => {
    display.value = value;
  };
});
