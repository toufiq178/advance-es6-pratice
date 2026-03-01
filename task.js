// 🎯 Task 1: Default Parameter + Template String + Arrow Function
// 👉 একটা arrow function বানাও createUser
// Requirements:

// parameters: name, age = 18, country = "Bangladesh"
// return করবে template string দিয়ে:


const createUser = (name , age  , country) => `hello , I am  ${name}. I am ${age} years old and I live in ${country}`;
// console.log(createUser('taj', 18 , 'bangladesh'));


// 🎯 Task 2: Rest Operator
// 👉 একটা function বানাও totalMarks
// unknown amount of marks নিবে
// rest operator ব্যবহার করবে
// সব mark যোগ করে return করবে

const totalMarks = (...totalMarks) => {
    
    let total = 0 ;
    for (elem of totalMarks){ total += elem }
    return total
}
// console.log(totalMarks(10,20,30,40));


// Task 3: Spread Operator
// 👉 একটা students array বানাও:
// 👉 Spread ব্যবহার করে নতুন array বানাও যেখানে:
// আগের সব নাম থাকবে
// শেষে "Jamal" add হবে

const arr = ["Taj", "Rahim", "Karim"] ;
const arr2 = [...arr , 'Jamal'];
// console.log(arr2);




// Task 4: Destructuring (Array + Object)

// Part A (Array)
// const colors = ["red", "blue", "green"]
// প্রথম দুইটা আলাদা variable এ রাখো

const [red , blue , ...arrays] = ["red", "blue", "green"] ;
// console.log(red , blue);

// Part B (Object)
// destructuring করে শুধু name & city বের করো

const {name , age , ...objects} = {
  name: "Taj",
  age: 22,
  city: "Dhaka"
}
console.log(name , age);
