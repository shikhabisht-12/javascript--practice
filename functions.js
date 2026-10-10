// Student Management System

// 1. Display welcome message
function welcome(name) {
    console.log(`\nWelcome, ${name}!`);
}

// 2. Calculate total marks
function calculateTotal(marks) {
    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    return total;
}

// 3. Calculate percentage
const calculatePercentage = (total, subjects) => {
    return total / subjects;
};

// 4. Calculate grade
function calculateGrade(percentage) {
    if (percentage >= 90) return "A+";
    if (percentage >= 75) return "A";
    if (percentage >= 60) return "B";
    if (percentage >= 40) return "C";
    return "F";
}

// 5. Check pass or fail
function checkResult(marks) {
    return marks.every(mark => mark >= 33)
        ? "Pass"
        : "Fail";
}

// 6. Display student details
function displayStudent(student) {
    welcome(student.name);

    let total = calculateTotal(student.marks);
    let percentage = calculatePercentage(
        total,
        student.marks.length
    );
    let grade = calculateGrade(percentage);
    let result = checkResult(student.marks);

    console.log("Name:", student.name);
    console.log("Marks:", student.marks.join(", "));
    console.log("Total:", total);
    console.log("Percentage:", percentage.toFixed(2) + "%");
    console.log("Grade:", grade);
    console.log("Result:", result);
}

// 7. Find the topper
function findTopper(students) {
    let topper = students[0];

    for (let student of students) {
        if (
            calculateTotal(student.marks) >
            calculateTotal(topper.marks)
        ) {
            topper = student;
        }
    }

    return topper;
}

// 8. Student data
const students = [
    { name: "Shikha", marks: [85, 90, 78, 88, 92] },
    { name: "Aman", marks: [65, 70, 72, 60, 68] },
    { name: "Riya", marks: [30, 45, 55, 60, 70] }
];

// 9. Display all students
students.forEach(function(student) {
    console.log("---------------------------");
    displayStudent(student);
});

// 10. Display topper
let topper = findTopper(students);

console.log("\n===========================");
console.log("CLASS TOPPER:", topper.name);
console.log(
    "TOPPER TOTAL:",
    calculateTotal(topper.marks)
);
console.log("===========================");

