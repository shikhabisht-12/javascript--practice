const students = [
    {
        name: "Shikha",
        marks: [85, 78, 92, 88, 76]
    },
    {
        name: "Rahul",
        marks: [65, 72, 68, 80, 75]
    },
    {
        name: "Priya",
        marks: [95, 91, 89, 96, 94]
    }
];

function calculateResult(student) {
    let total = 0;

    for (let mark of student.marks) {
        total += mark;
    }

    let percentage = total / student.marks.length;

    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else {
        grade = "D";
    }

    return {
        name: student.name,
        total: total,
        percentage: percentage,
        grade: grade
    };
}

for (let student of students) {
    let result = calculateResult(student);

    console.log("Name:", result.name);
    console.log("Total Marks:", result.total);
    console.log("Percentage:", result.percentage + "%");
    console.log("Grade:", result.grade);
    console.log("--------------------");
}