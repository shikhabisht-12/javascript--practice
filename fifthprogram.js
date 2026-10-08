// Student Information
const studentName = "Shikha";
let marks = 78;
let attendance = 85;
let assignmentCompleted = true;

// 1. Arithmetic Operators
let bonusMarks = 5;
let finalMarks = marks + bonusMarks;

console.log("Original Marks:", marks);
console.log("Bonus Marks:", bonusMarks);
console.log("Final Marks:", finalMarks);


// 2. Comparison Operators
console.log("Marks >= 40:", finalMarks >= 40);
console.log("Attendance >= 75:", attendance >= 75);
console.log("Marks == 83:", finalMarks == 83);
console.log("Marks === 83:", finalMarks === 83);


// 3. Logical Operators
let isPassed = finalMarks >= 40;
let goodAttendance = attendance >= 75;

let eligibleForExam = isPassed && goodAttendance;

console.log("Eligible for Exam:", eligibleForExam);


// 4. NOT Operator
console.log("Assignment not completed:", !assignmentCompleted);


// 5. Ternary Operator
let result = finalMarks >= 40 ? "PASS" : "FAIL";

console.log("Result:", result);


// 6. Scholarship Condition
let scholarship =
    finalMarks >= 75 &&
    attendance >= 80 &&
    assignmentCompleted;

console.log("Scholarship Eligible:", scholarship);


// 7. Assignment Operator
let extraMarks = 2;

extraMarks += 3;

console.log("Extra Marks:", extraMarks);


// 8. More Assignment Operators
let number = 10;

number += 5;
console.log("After += :", number);

number -= 3;
console.log("After -= :", number);

number *= 2;
console.log("After *= :", number);

number /= 4;
console.log("After /= :", number);


// 9. Increment Operator
let attempts = 1;

attempts++;

console.log("Attempts:", attempts);


// 10. Decrement Operator
attempts--;

console.log("After Decrement:", attempts);


// Final Message
console.log(
    `${studentName} scored ${finalMarks} marks and the result is ${result}.`
);