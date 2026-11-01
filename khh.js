
console.log("===== NUMBER AND ARRAY TOOLKIT =====");

// 1. Check Even or Odd
console.log("\n1. Even or Odd");

let number = 25;

if (number % 2 === 0) {
    console.log(number, "is Even");
} else {
    console.log(number, "is Odd");
}

// 2. Print Multiplication Table
console.log("\n2. Multiplication Table");

let n = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
}

// 3. Find Maximum Number
console.log("\n3. Maximum Number");

let numbers = [15, 80, 25, 60, 45];

let maximum = Math.max(...numbers);

console.log("Maximum:", maximum);

// 4. Find Minimum Number
console.log("\n4. Minimum Number");

let minimum = Math.min(...numbers);

console.log("Minimum:", minimum);

// 5. Count Positive and Negative Numbers
console.log("\n5. Positive and Negative");

let values = [10, -5, 20, -8, 0, 15];

let positive = values.filter(num => num > 0);
let negative = values.filter(num => num < 0);
let zero = values.filter(num => num === 0);

console.log("Positive:", positive);
console.log("Negative:", negative);
console.log("Zero:", zero);

// 6. Find Average
console.log("\n6. Average");

let sum = numbers.reduce((total, num) => total + num, 0);

let average = sum / numbers.length;

console.log("Average:", average);

// 7. Sort Array
console.log("\n7. Sorting");

let ascending = [...numbers].sort((a, b) => a - b);
let descending = [...numbers].sort((a, b) => b - a);

console.log("Ascending:", ascending);
console.log("Descending:", descending);

// 8. Find Common Elements
console.log("\n8. Common Elements");

let arr1 = [10, 20, 30, 40];
let arr2 = [20, 40, 50, 60];

let common = arr1.filter(num => arr2.includes(num));

console.log("Common:", common);

// 9. Count Words in a Sentence
console.log("\n9. Word Count");

let sentence = "JavaScript is easy to learn";

let words = sentence.trim().split(/\s+/);

console.log("Sentence:", sentence);
console.log("Total Words:", words.length);

// 10. Generate Random Number
console.log("\n10. Random Number");

let randomNumber = Math.floor(Math.random() * 100) + 1;

console.log("Random Number:", randomNumber);

console.log("\n===== TOOLKIT COMPLETED =====");
