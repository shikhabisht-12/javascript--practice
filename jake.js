
console.log("===== JAVASCRIPT OPERATORS =====");

// 1. Arithmetic Operators
let a = 10;
let b = 3;

console.log("\n1. Arithmetic Operators");
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);
console.log("Power:", a ** b);


// 2. Comparison Operators
console.log("\n2. Comparison Operators");
console.log("a > b:", a > b);
console.log("a < b:", a < b);
console.log("a >= b:", a >= b);
console.log("a <= b:", a <= b);
console.log("10 == '10':", 10 == "10");
console.log("10 === '10':", 10 === "10");
console.log("10 != 5:", 10 != 5);
console.log("10 !== '10':", 10 !== "10");


// 3. Logical Operators
let age = 20;
let hasID = true;

console.log("\n3. Logical Operators");
console.log("AND:", age >= 18 && hasID);
console.log("OR:", age >= 18 || hasID);
console.log("NOT:", !hasID);


// 4. Assignment Operators
console.log("\n4. Assignment Operators");

let number = 10;
console.log("Initial:", number);

number += 5;
console.log("After += 5:", number);

number -= 3;
console.log("After -= 3:", number);

number *= 2;
console.log("After *= 2:", number);

number /= 4;
console.log("After /= 4:", number);

number %= 4;
console.log("After %= 4:", number);


// 5. Increment and Decrement
console.log("\n5. Increment and Decrement");

let count = 5;

console.log("Post-increment:", count++);
console.log("After increment:", count);
console.log("Pre-increment:", ++count);
console.log("Post-decrement:", count--);
console.log("Pre-decrement:", --count);


// 6. Ternary Operator
console.log("\n6. Ternary Operator");

let marks = 75;

let result = marks >= 40 ? "Pass" : "Fail";
console.log("Result:", result);


// 7. Even or Odd
console.log("\n7. Even or Odd");

let value = 17;

console.log(
    value % 2 === 0 ? "Even Number" : "Odd Number"
);


// 8. Largest of Two Numbers
console.log("\n8. Largest Number");

let x = 25;
let y = 40;

console.log("Largest:", x > y ? x : y);


// 9. Temperature Check
console.log("\n9. Temperature Check");

let temperature = 32;

let weather =
    temperature >= 35 ? "Very Hot" :
    temperature >= 25 ? "Warm" :
    temperature >= 15 ? "Cool" :
    "Cold";

console.log("Weather:", weather);


// 10. Type Operators
console.log("\n10. Type Operators");

console.log("Type of a:", typeof a);
console.log("Type of age:", typeof age);
console.log("Is array:", Array.isArray([1, 2, 3]));


// 11. Nullish Coalescing Operator
console.log("\n11. Nullish Coalescing");

let username = null;

console.log("Username:", username ?? "Guest");


// 12. String Concatenation
console.log("\n12. String Concatenation");

let firstName = "Shikha";
let lastName = "Bisht";

console.log("Full Name:", firstName + " " + lastName);


// 13. Exponentiation Assignment
console.log("\n13. Exponentiation Assignment");

let power = 2;
power **= 3;

console.log("2 power 3:", power);


console.log("\n===== PROGRAM COMPLETED =====");
