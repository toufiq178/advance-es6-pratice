const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);

const squared = numbers.map(num => num * 4);

console.log(doubled);
console.log(squared);



const students = [

    { name: 'taj', marks: 45 },
    { name: 'rofik', marks: 30 },
    { name: 'sofik', marks: 78 },
    { name: 'karim', marks: 92 },
    { name: 'rohim', marks: 67 },
]

const studentName = students.map(student => student.name);
const bonusNumber = students.map(student => student.marks + 5);

const marks = students.map(student => {


    return {
        name: student.name,
        status: student.marks >= 50 ? 'pass' : 'fail'

    }
})


const grade = students.map(student => {

    if (student.marks >= 90) {

        student.grade = 'A'
    } else if (student.marks >= 80) {

       student.grade = 'B'

    } else if (student.marks >= 70) {

       student.grade = 'C'
    } else if (student.marks >= 60) {

       student.grade = 'D'
    } else  {

        student.grade = 'F'
    }

    return {
        name : student.name,
        grade : student.grade 
    }
})

// console.log(studentName);
// console.log(bonusNumber);
// console.log(marks);

console.log(grade);
