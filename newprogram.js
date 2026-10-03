// ========================================
// STUDENT RESULT MANAGEMENT SYSTEM
// ========================================

// 1. VARIABLES

const collegeName = "BBDIT";
let totalStudents = 5;

console.log("College:", collegeName);
console.log("Total Students:", totalStudents);


// ========================================
// 2. ARRAY OF OBJECTS
// ========================================

const students = [
    {
        id: 1,
        name: "Shikha",
        age: 21,
        course: "BCA",
        marks: 85,
        city: "Ghaziabad"
    },

    {
        id: 2,
        name: "Riya",
        age: 20,
        course: "BCA",
        marks: 72,
        city: "Delhi"
    },

    {
        id: 3,
        name: "Aman",
        age: 22,
        course: "BCA",
        marks: 35,
        city: "Noida"
    },

    {
        id: 4,
        name: "Rahul",
        age: 21,
        course: "BCA",
        marks: 91,
        city: "Meerut"
    },

    {
        id: 5,
        name: "Neha",
        age: 20,
        course: "BCA",
        marks: 63,
        city: "Delhi"
    }
];


// ========================================
// 3. IF-ELSE FUNCTION
// ========================================

function checkResult(marks) {

    if (marks >= 40) {
        return "Pass";
    } else {
        return "Fail";
    }
}


// ========================================
// 4. GRADE FUNCTION
// ========================================

function getGrade(marks) {

    if (marks >= 90) {
        return "A+";
    } 
    else if (marks >= 75) {
        return "A";
    } 
    else if (marks >= 60) {
        return "B";
    } 
    else if (marks >= 40) {
        return "C";
    } 
    else {
        return "F";
    }
}


// ========================================
// 5. DISPLAY ALL STUDENTS
// ========================================

console.log("\n===== ALL STUDENTS =====");

students.forEach((student) => {

    console.log(
        `${student.name} - ${student.marks} marks`
    );

});


// ========================================
// 6. MAP()
// ========================================

const studentResults = students.map((student) => {

    return {
        name: student.name,
        marks: student.marks,
        result: checkResult(student.marks),
        grade: getGrade(student.marks)
    };

});

console.log("\n===== STUDENT RESULTS =====");

console.log(studentResults);


// ========================================
// 7. FILTER()
// ========================================

const passedStudents = students.filter((student) => {

    return student.marks >= 40;

});

console.log("\n===== PASSED STUDENTS =====");

console.log(passedStudents);


// ========================================
// 8. FILTER FAILED STUDENTS
// ========================================

const failedStudents = students.filter((student) => {

    return student.marks < 40;

});

console.log("\n===== FAILED STUDENTS =====");

console.log(failedStudents);


// ========================================
// 9. FIND()
// ========================================

const student = students.find((student) => {

    return student.name === "Shikha";

});

console.log("\n===== SEARCH RESULT =====");

console.log(student);


// ========================================
// 10. DESTRUCTURING
// ========================================

const {
    name,
    age,
    course,
    marks,
    city
} = student;

console.log("\n===== STUDENT DETAILS =====");

console.log("Name:", name);
console.log("Age:", age);
console.log("Course:", course);
console.log("Marks:", marks);
console.log("City:", city);


// ========================================
// 11. TERNARY OPERATOR
// ========================================

const status = marks >= 40 ? "Pass" : "Fail";

console.log("\nStatus:", status);


// ========================================
// 12. TEMPLATE LITERAL
// ========================================

const message = `
Student ${name} is ${age} years old.
She is studying ${course}.
She scored ${marks} marks.
She lives in ${city}.
`;

console.log(message);


// ========================================
// 13. REDUCE()
// ========================================

const totalMarks = students.reduce((total, student) => {

    return total + student.marks;

}, 0);

console.log("Total Marks:", totalMarks);


// ========================================
// 14. AVERAGE MARKS
// ========================================

const averageMarks = totalMarks / students.length;

console.log("Average Marks:", averageMarks);


// ========================================
// 15. FIND HIGHEST MARKS
// ========================================

const highestMarksStudent = students.reduce(
    (highest, student) => {

        if (student.marks > highest.marks) {
            return student;
        }

        return highest;

    }
);

console.log("\n===== TOP STUDENT =====");

console.log(highestMarksStudent);


// ========================================
// 16. FIND LOWEST MARKS
// ========================================

const lowestMarksStudent = students.reduce(
    (lowest, student) => {

        if (student.marks < lowest.marks) {
            return student;
        }

        return lowest;

    }
);

console.log("\n===== LOWEST MARKS =====");

console.log(lowestMarksStudent);


// ========================================
// 17. SEARCH BY CITY
// ========================================

const DelhiStudents = students.filter((student) => {

    return student.city === "Delhi";

});

console.log("\n===== DELHI STUDENTS =====");

console.log(DelhiStudents);


// ========================================
// 18. SEARCH BY COURSE
// ========================================

const bcaStudents = students.filter((student) => {

    return student.course === "BCA";

});

console.log("\n===== BCA STUDENTS =====");

console.log(bcaStudents);


// ========================================
// 19. GET ONLY STUDENT NAMES
// ========================================

const studentNames = students.map((student) => {

    return student.name;

});

console.log("\n===== STUDENT NAMES =====");

console.log(studentNames);


// ========================================
// 20. GET ONLY MARKS
// ========================================

const marksList = students.map((student) => {

    return student.marks;

});

console.log("\n===== MARKS =====");

console.log(marksList);


// ========================================
// 21. CHECK SOME()
// ========================================

const hasFailedStudent = students.some((student) => {

    return student.marks < 40;

});

console.log("\nAny student failed?", hasFailedStudent);


// ========================================
// 22. CHECK EVERY()
// ========================================

const everyonePassed = students.every((student) => {

    return student.marks >= 40;

});

console.log("Did everyone pass?", everyonePassed);


// ========================================
// 23. SPREAD OPERATOR - OBJECT
// ========================================

const updatedStudent = {

    ...student,

    marks: 95

};

console.log("\n===== UPDATED STUDENT =====");

console.log(updatedStudent);


// ========================================
// 24. SPREAD OPERATOR - ARRAY
// ========================================

const newStudent = {

    id: 6,
    name: "Pooja",
    age: 21,
    course: "BCA",
    marks: 78,
    city: "Noida"

};

const updatedStudents = [

    ...students,

    newStudent

];

console.log("\n===== UPDATED STUDENT LIST =====");

console.log(updatedStudents);


// ========================================
// 25. LOOP
// ========================================

console.log("\n===== STUDENT LOOP =====");

for (let i = 0; i < students.length; i++) {

    console.log(
        `${i + 1}. ${students[i].name}`
    );

}


// ========================================
// 26. ARROW FUNCTION
// ========================================

const calculatePercentage = (marks, total) => {

    return (marks / total) * 100;

};

const percentage = calculatePercentage(425, 500);

console.log(
    "\nPercentage:",
    percentage + "%"
);


// ========================================
// 27. PRACTICAL STUDENT REPORT
// ========================================

console.log("\n================================");
console.log("        STUDENT REPORT");
console.log("================================");

students.forEach((student) => {

    const result = checkResult(student.marks);

    const grade = getGrade(student.marks);

    console.log(
        `Name: ${student.name}`
    );

    console.log(
        `Marks: ${student.marks}`
    );

    console.log(
        `Result: ${result}`
    );

    console.log(
        `Grade: ${grade}`
    );

    console.log("-------------------------------");

});


// ========================================
// 28. FINAL SUMMARY
// ========================================

console.log("\n================================");
console.log("             SUMMARY");
console.log("================================");

console.log(
    "Total Students:",
    students.length
);

console.log(
    "Passed Students:",
    passedStudents.length
);

console.log(
    "Failed Students:",
    failedStudents.length
);

console.log(
    "Average Marks:",
    averageMarks
);

console.log(
    "Top Student:",
    highestMarksStudent.name
);

console.log(
    "Lowest Student:",
    lowestMarksStudent.name
);