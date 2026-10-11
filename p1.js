
let numbers = [12, 45, 23, 67, 34, 89, 10];

let sum = 0;
let largest = numbers[0];
let smallest = numbers[0];
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];

    if (numbers[i] > largest) {
        largest = numbers[i];
    }

    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }

    if (numbers[i] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log("Array:", numbers);
console.log("Sum:", sum);
console.log("Average:", sum / numbers.length);
console.log("Largest Number:", largest);
console.log("Smallest Number:", smallest);
console.log("Even Numbers:", evenCount);
console.log("Odd Numbers:", oddCount);
