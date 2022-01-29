let number1 = Number(prompt("Enter first number: "));
let number2 = Number(prompt("Enter second number: "));
let operator = prompt("Enter operation: ");
let result;

if (operator == "+") {
  result = number1 + number2;
} else if (operator == "-") {
  result = number1 - number2;
} else if (operator == "*") {
  result = number1 * number2;
} else {
  result = number1 / number2;
}
document.write(`${number1} ${operator} ${number2} = ${result}`);
