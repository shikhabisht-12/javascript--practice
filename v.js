
console.log("===== JAVASCRIPT PRACTICE PROGRAM =====");

// 1. Find Largest of Three Numbers

console.log("\n1. Largest Number");

let a = 20;
let b = 50;
let c = 30;

if (a > b && a > c) {
    console.log("Largest:", a);
} else if (b > c) {
    console.log("Largest:", b);
} else {
    console.log("Largest:", c);
}

// 2. Reverse a String

console.log("\n2. Reverse String");

let name = "Shikha";

let reverse = name.split("").reverse().join("");

console.log("Original:", name);
console.log("Reverse:", reverse);

// 3. Count Vowels

console.log("\n3. Count Vowels");

let str = "javascript";
let vowelCount = 0;

for (let char of str) {
    if ("aeiou".includes(char)) {
        vowelCount++;
    }
}

console.log("Vowels:", vowelCount);

// 4. Sum of Array

console.log("\n4. Sum of Array");

let numbers = [10, 20, 30, 40, 50];

let sum = numbers.reduce((total, num) => {
    return total + num;
}, 0);

console.log("Array:", numbers);
console.log("Sum:", sum);

// 5. Remove Duplicate Values

console.log("\n5. Remove Duplicates");

let values = [10, 20, 10, 30, 20, 40];

let unique = [...new Set(values)];

console.log("Original:", values);
console.log("Unique:", unique);

// 6. Check Prime Number

console.log("\n6. Prime Number");

let number = 17;
let isPrime = number > 1;

for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
        isPrime = false;
        break;
    }
}

console.log(
    number,
    isPrime ? "is Prime" : "is Not Prime"
);

// 7. Factorial of a Number

console.log("\n7. Factorial");

let n = 5;
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial *= i;
}

console.log("Factorial of", n, "=", factorial);

// 8. Check Palindrome

console.log("\n8. Palindrome");

let word = "madam";

let reversedWord = word.split("").reverse().join("");

if (word === reversedWord) {
    console.log(word, "is Palindrome");
} else {
    console.log(word, "is Not Palindrome");
}

// 9. Second Largest Number

console.log("\n9. Second Largest");

let arr = [10, 50, 30, 80, 40, 80];

let sorted = [...new Set(arr)].sort((x, y) => y - x);

if (sorted.length >= 2) {
    console.log("Second Largest:", sorted[1]);
} else {
    console.log("Second largest does not exist");
}

// 10. Character Frequency

console.log("\n10. Character Frequency");

let text = "javascript";
let frequency = {};

for (let char of text) {
    frequency[char] = (frequency[char] || 0) + 1;
}

console.log(frequency);

console.log("\n===== ALL PROGRAMS COMPLETED =====");
