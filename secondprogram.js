let a = 20;
let b = 5;

// 1. Arithmetic Operators
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);

// 2. Assignment Operator
let price = 500;

price += 100;
console.log("Updated Price:", price);

price -= 50;
console.log("After Discount:", price);

// 3. Comparison Operators
console.log(a > b);
console.log(a < b);
console.log(a === b);
console.log(a !== b);

// 4. Logical Operators
let age = 21;
let hasID = true;

console.log(age >= 18 && hasID);
console.log(age >= 18 || hasID);
console.log(!hasID);

// 5. Ternary Operator
let marks = 75;

let result = marks >= 40 ? "Pass" : "Fail";

console.log("Result:", result);