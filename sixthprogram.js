const student = {
    name: "Shikha",
    marks: [85, 78, 92, 66, 88]
};

let total = 0;

for (let mark of student.marks) {
    total = total + mark;
}

let percentage = total / student.marks.length;

let grade;

if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 75) {
    grade = "A";
} else if (percentage >= 60) {
    grade = "B";
} else if (percentage >= 40) {
    grade = "C";
} else {
    grade = "Fail";
}

console.log("Student Name:", student.name);
console.log("Total Marks:", total);
console.log("Percentage:", percentage + "%");
console.log("Grade:", grade);