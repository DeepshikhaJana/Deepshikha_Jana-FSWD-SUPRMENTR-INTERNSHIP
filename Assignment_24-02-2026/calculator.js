// Take input from user
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

// Perform operations
let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let modulus = num1 % num2;

// Display results
console.log("The sum of " + num1 + " and " + num2 + " is: " + addition);
console.log(
  "The difference of " + num1 + " and " + num2 + " is: " + subtraction,
);
console.log(
  "The product of " + num1 + " and " + num2 + " is: " + multiplication,
);

// Handle division separately (division by zero check)
if (num2 !== 0) {
  let division = num1 / num2;
  console.log("The division of " + num1 + " by " + num2 + " is: " + division);
} else {
  console.log("Division by zero is not allowed.");
}

console.log("The modulus of " + num1 + " and " + num2 + " is: " + modulus);
