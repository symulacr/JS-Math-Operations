# JS Math Operations

This repository contains a JavaScript library for performing basic arithmetic operations. It includes functions for addition, subtraction, multiplication, and division enabling simple mathematical computations.

## Usage

### Functions Available:

- `addition(a, b)`: Adds two numbers `a` and `b`.
- `subtraction(a, b)`: Subtracts `b` from `a`.
- `multiplication(a, b)`: Multiplies `a` by `b`.
- `division(a, b)`: Divides `a` by `b`. 
     * Avoids division by zero.

### Example usage:

```javascript
console.log("Addition: " + addition(5, 3)); // Output: 8
console.log("Subtraction: " + subtraction(8, 4)); // Output: 4
console.log("Multiplication: " + multiplication(6, 2)); // Output: 12
console.log("Division: " + division(10, 2)); // Output: 5
console.log("Division by zero: " + division(7, 0)); // Output: "Division by zero is not possible"
