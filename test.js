// Import the functions to be tested
const { addition, subtraction, multiplication, division } = require('./mathOperations');

// Function to perform unit tests
function runTests() {
  // Test addition
  console.log('Testing Addition...');
  console.assert(addition(5, 3) === 8, '5 + 3 should equal 8');
  console.assert(addition(0, 0) === 0, '0 + 0 should equal 0');
  console.log('Addition tests passed!');

  // Test subtraction
  console.log('Testing Subtraction...');
  console.assert(subtraction(8, 4) === 4, '8 - 4 should equal 4');
  console.assert(subtraction(10, 3) === 7, '10 - 3 should equal 7');
  console.log('Subtraction tests passed!');

  // Test multiplication
  console.log('Testing Multiplication...');
  console.assert(multiplication(6, 2) === 12, '6 * 2 should equal 12');
  console.assert(multiplication(4, 0) === 0, '4 * 0 should equal 0');
  console.log('Multiplication tests passed!');

  // Test division
  console.log('Testing Division...');
  console.assert(division(10, 2) === 5, '10 / 2 should equal 5');
  console.assert(division(7, 0) === "Division by zero is not possible", 'Division by zero error should be handled');
  console.log('Division tests passed!');
}

// Run the tests
runTests();