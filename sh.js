console.log("===== STUDENT MANAGEMENT SYSTEM =====");

// 1. Student Data
let students = [
    { id: 1, name: "Aman", age: 20, marks: [80, 75, 90] },
    { id: 2, name: "Riya", age: 21, marks: [65, 70, 60] },
    { id: 3, name: "Shikha", age: 20, marks: [90, 95, 88] },
    { id: 4, name: "Rahul", age: 22, marks: [30, 35, 40] },
    { id: 5, name: "Priya", age: 19, marks: [85, 80, 92] }
];

// 2. Calculate Total and Average
let studentResults = students.map(student => {
    let { id, name, age, marks } = student;

    let total = marks.reduce((sum, mark) => sum + mark, 0);

    let average = total / marks.length;

    return {
        id,
        name,
        age,
        marks,
        total,
        average: Number(average.toFixed(2))
    };
});

console.log("\n1. All Student Results");
console.log(studentResults);

// 3. Find Passed Students
let passedStudents = studentResults.filter(
    student => student.average >= 40
);

console.log("\n2. Passed Students");
console.log(passedStudents);

// 4. Find Failed Students
let failedStudents = studentResults.filter(
    student => student.average < 40
);

console.log("\n3. Failed Students");
console.log(failedStudents);

// 5. Find Topper
let topper = studentResults.reduce((best, current) => {
    return current.average > best.average ? current : best;
});

console.log("\n4. Class Topper");
console.log(topper.name, topper.average);

// 6. Sort Students by Marks
let sortedStudents = [...studentResults].sort(
    (a, b) => b.average - a.average
);

console.log("\n5. Ranking");
console.log(sortedStudents);

// 7. Calculate Class Average
let classTotal = studentResults.reduce(
    (sum, student) => sum + student.average,
    0
);

let classAverage = classTotal / studentResults.length;

console.log("\n6. Class Average:", classAverage.toFixed(2));

// 8. Search Student by Name
function searchStudent(studentName) {
    let result = studentResults.find(
        student =>
            student.name.toLowerCase() === studentName.toLowerCase()
    );

    if (result) {
        console.log("\n7. Student Found");
        console.log(result);
    } else {
        console.log("\nStudent Not Found");
    }
}

searchStudent("Shikha");

// 9. Update Student Marks
function updateMarks(id, newMarks) {
    studentResults = studentResults.map(student => {
        if (student.id === id) {
            let total = newMarks.reduce(
                (sum, mark) => sum + mark, 0
            );

            return {
                ...student,
                marks: [...newMarks],
                total,
                average: Number(
                    (total / newMarks.length).toFixed(2)
                )
            };
        }

        return student;
    });

    console.log("\n8. Updated Student Data");
    console.log(studentResults);
}

updateMarks(2, [90, 85, 95]);

// 10. Count Passed and Failed Students
console.log("\n9. Student Count");

console.log("Passed:", passedStudents.length);
console.log("Failed:", failedStudents.length);

// 11. Find Students Above 80 Average
let excellentStudents = studentResults.filter(
    student => student.average >= 80
);

console.log("\n10. Excellent Students");
console.log(excellentStudents);

// 12. Final Report
console.log("\n===== FINAL REPORT =====");

studentResults.forEach((student, index) => {
    console.log(
        `${index + 1}. ${student.name} | Total: ${student.total} | Average: ${student.average}`
    );
});

console.log("\n===== PROGRAM COMPLETED =====");