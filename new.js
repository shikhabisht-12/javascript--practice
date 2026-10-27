console.log("===== JAVASCRIPT ALL-IN-ONE PROGRAM =====");

// 1. Short-Circuit Operators
console.log("\n1. Short-Circuit Operators");

let username = "";
console.log("Username:", username || "Guest");

let age = 20;
console.log("Eligible:", age >= 18 && "Yes");

// 2. Array map()
console.log("\n2. Map Method");

let numbers = [10, 20, 30, 40, 50];

let doubled = numbers.map(num => num * 2);
console.log("Original:", numbers);
console.log("Doubled:", doubled);

// 3. Array filter()
console.log("\n3. Filter Method");

let evenNumbers = numbers.filter(num => num % 2 === 0);
let greaterThan25 = numbers.filter(num => num > 25);

console.log("Even Numbers:", evenNumbers);
console.log("Above 25:", greaterThan25);

// 4. Array find()
console.log("\n4. Find Method");

let foundNumber = numbers.find(num => num > 25);
console.log("First number above 25:", foundNumber);

// 5. Array of Objects
console.log("\n5. Students Data");

let students = [
    { name: "Riya", marks: 85 },
    { name: "Aman", marks: 32 },
    { name: "Priya", marks: 72 },
    { name: "Rahul", marks: 25 }
];

let passedStudents = students.filter(student => student.marks >= 40);

console.log("Passed Students:", passedStudents);

// 6. Object Destructuring
console.log("\n6. Destructuring");

let student = {
    name: "Shikha",
    course: "BCA",
    marks: 88
};

let { name, course, marks } = student;

console.log("Name:", name);
console.log("Course:", course);
console.log("Marks:", marks);

// 7. Spread Operator
console.log("\n7. Spread Operator");

let oldNumbers = [1, 2, 3];
let newNumbers = [...oldNumbers, 4, 5];

console.log("Combined Array:", newNumbers);

let updatedStudent = { ...student, marks: 95 };
console.log("Updated Student:", updatedStudent);

// 8. Optional Chaining
console.log("\n8. Optional Chaining");

let user = {
    name: "Aman"
};

console.log("User City:", user.address?.city);
console.log("User Name:", user.name);

// 9. Nullish Coalescing
console.log("\n9. Nullish Coalescing");

let city = null;
console.log("City:", city ?? "Delhi");

// 10. Rest Parameters
console.log("\n10. Rest Parameters");

function calculateSum(...values) {
    return values.reduce((total, value) => total + value, 0);
}

console.log("Sum:", calculateSum(10, 20, 30, 40));

// 11. Promise
console.log("\n11. Promise");

let myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Task completed successfully!");
    } else {
        reject("Task failed!");
    }
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));

// 12. Async/Await and Fetch API
console.log("\n12. Async/Await");

async function getTodo() {
    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        let data = await response.json();

        console.log("Todo Title:", data.title);
        console.log("Completed:", data.completed);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

getTodo();

// 13. setTimeout()
console.log("\n13. setTimeout");

setTimeout(() => {
    console.log("Message after 2 seconds!");
}, 2000);

// 14. setInterval()
console.log("\n14. setInterval");

let counter = 0;

let timer = setInterval(() => {
    counter++;
    console.log("Counter:", counter);

    if (counter === 3) {
        clearInterval(timer);
        console.log("Timer stopped!");
    }
}, 1000);

// 15. DOM Events
// Run this section in a browser with matching HTML elements.
console.log("\n15. DOM Events");

if (typeof document !== "undefined") {
    const button = document.getElementById("btn");
    const message = document.getElementById("message");

    if (button && message) {
        button.addEventListener("click", () => {
            message.textContent = "Button clicked successfully!";
            console.log("Button clicked!");
        });
    } else {
        console.log("Add btn and message elements to HTML.");
    }
} else {
    console.log("DOM events require a browser.");
}

console.log("\n===== PROGRAM FINISHED =====");