const students = [
    { name: "Taj", age: 20, marks: 75 },
    { name: "Rofik", age: 22, marks: 35 },
    { name: "Karim", age: 19, marks: 45 },
    { name: "Rahim", age: 21, marks: 75 },
];

const aboveSixty = students.filter(mark => mark.marks > 60);
const aboveName = aboveSixty.map(nm => nm.name)

const older = students.filter(student => student.age > 20 && student.marks > 60)

// console.log(older);


const Marks = students.filter(student => student.marks < 50);
const name = Marks.map(names => {

    return {
        name: names.name,
        marks: names.marks
    }
})

console.log(
    'failer name :', name, 
    'avobe60:', aboveSixty, 
    'avobe60 name:', aboveName, 
    'marks and age :', older, 
    'failer mark :', Marks
);
