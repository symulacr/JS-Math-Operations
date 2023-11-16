// Function for addition
function addition(a, b) {
  return a + b;
}

// Function for subtraction
function subtraction(a, b) {
  return a - b;
}

// Function for multiplication
function multiplication(a, b) {
  return a * b;
}

// Function for division
function division(a, b) {
  if (b === 0) {
    // Handling division by zero error
    return "Division by zero is not possible";
  }
  return a / b;
}

// Example usage of the functions
console.log("Addition: " + addition(5, 3)); // Output: 8
console.log("Subtraction: " + subtraction(8, 4)); // Output: 4
console.log("Multiplication: " + multiplication(6, 2)); // Output: 12
console.log("Division: " + division(10, 2)); // Output: 5
console.log("Division by zero: " + division(7, 0)); // Output: "Division by zero is not possible"