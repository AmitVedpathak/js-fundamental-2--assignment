// The ternary operator is a concise way to write conditional statements in JavaScript. It's often used as a shorthand for simple if-else statements, providing a more compact syntax. 

// The basic syntax of the ternary operator is:
//     condition ? expressionIfTrue : expressionIfFalse;

// Here, condition is evaluated, and if it's true, expressionIfTrue is executed; otherwise, expressionIfFalse is executed.


// Program to check if a number is even or odd using the ternary operator

let number = 8;

// Using the ternary operator to check if the number is even or odd
let result = (number % 2 === 0) ? "Even" : "Odd";

// Displaying the result
console.log(`The number ${number} is ${result}.`);


