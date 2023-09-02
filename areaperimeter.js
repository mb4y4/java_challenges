const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to calculate the area of a rectangle
function calculateArea(length, width) {
  return length * width;
}

// Function to calculate the perimeter of a rectangle
function calculatePerimeter(length, width) {
  return 2 * (length + width);
}

// Get length from user input
rl.question("Enter the length of the rectangle: ", function(length) {
  // Get width from user input
  rl.question("Enter the width of the rectangle: ", function(width) {
    // Convert input to numbers
    const parsedLength = parseFloat(length);
    const parsedWidth = parseFloat(width);

    // Check if input is valid numbers
    if (isNaN(parsedLength) || isNaN(parsedWidth)) {
      console.log("Invalid input. Please enter valid numbers.");
    } else {
      // Calculate and display the area and perimeter
      const area = calculateArea(parsedLength, parsedWidth);
      const perimeter = calculatePerimeter(parsedLength, parsedWidth);

      console.log(`Area: ${area}`);
      console.log(`Perimeter: ${perimeter}`);
    }

    // Close the readline interface
    rl.close();
  });
});
