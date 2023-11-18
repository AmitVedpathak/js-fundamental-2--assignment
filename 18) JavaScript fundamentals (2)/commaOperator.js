// The comma operator in JavaScript allows you to combine multiple expressions into a single line of code. It's used to separate these expressions, and it evaluates them from left to right. The overall value of the expression is the value of the rightmost expression.

let a = 5, b = 10, c = 15;

// Using the comma operator in a single line
let result = (a += 2, b += 3, c += 5);

console.log(`a: ${a}, b: ${b}, c: ${c}, result: ${result}`);

// In this example:

// a += 2, b += 3, and c += 5 are three expressions separated by commas.
// The overall value of the expression is the value of the rightmost expression (c += 5), which is 20.
// The variables a, b, and c are modified as a result of these comma-separated assignments.
// The comma operator is also used in situations like for loops to combine different parts of the loop statement.

// While the comma operator can be handy, it's important to use it with care to maintain code clarity and readability. In many cases, using separate lines or statements may make the code easier to understand.