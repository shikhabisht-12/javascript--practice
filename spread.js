// 1. Arrays
let arr1 = [10, 20, 30];
let arr2 = [40, 50, 60];

let combinedArray = [...arr1, ...arr2];
console.log("Combined Array:", combinedArray);

// 2. Copy an Array
let original = [1, 2, 3, 4, 5];
let copiedArray = [...original];

copiedArray.push(6);

console.log("Original Array:", original);
console.log("Copied Array:", copiedArray);

// 3. Objects
let student = {
    name: "Shikha",
    age: 21
};

let updatedStudent = {
    ...student,
    course: "BCA",
    age: 22
};

console.log("Updated Student:", updatedStudent);

// 4. Function Arguments
function add(a, b, c) {
    return a + b + c;
}

let numbers = [10, 20, 30];

console.log("Sum:", add(...numbers));

// 5. Shopping Cart
let cart = ["Laptop", "Mouse"];
let newItems = ["Keyboard", "Headphones"];

cart = [...cart, ...newItems];

console.log("Shopping Cart:", cart);
console.log("Total Items:", cart.length);