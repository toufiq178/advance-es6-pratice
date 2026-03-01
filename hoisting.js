// Task 1: Hoisting
// console.log(a);
// var a = 20;

// // console.log(b);
// let b = 30;


// // Task 2: Scope
// let x = 10;

// function test() {
//   let x = 20;
//   console.log(x);

// }

// test();
// console.log(x);


// let vs const

// const price2 = 100;
// // price2 = 200;
// console.log(price2);



// let price = 100;
// price = 200;
// console.log(price);




// // ✅ Task 4: Default Parameter

// function welcome(name = 'Guest' ) {
    
//     console.log('welcome', name);
    
// }

// welcome('taj')
// welcome()


// ✅ Task 1: Rest (Function)
// Eta function sumAll banao:
// joto gula number diba
// shob gula jog kore return korbe
// rest operator use korte hobe


function symAll(...Parameter) {
    
    // console.log(Parameter);
    let total = 0
    for(elem of Parameter){

        total += elem
    }
    // console.log(total);
    
}

symAll(5,10,15)



// ✅ Task 2: Rest (Destructuring)
// Nicher array theke:
// first value alada variable e rakho
// baki gula ekta array te rakho (rest use kore)


const [first , ...others] = [10, 20, 30, 40, 50];

// const first = numbers[0]
// const others = [ n,  ...numbers]
// console.log(first);

// console.log(first , '||', others);


// ✅ Task 3: Array Merge
// Spread use kore ekta students array banao jekhane sob thakbe.

const boys = ["Rahim", "Karim"];
const girls = ["Ayesha", "Mim"];

// const sts = [boys , girls]

const students = [...boys , ...girls]
// console.log(students);


// Task 4: Array Copy Problem (Important)
// 👉 Problem ta explain koro.
// 👉 Spread use kore eta fix koro jate arr1 change na hoy

const arr1 = [1,2,3];
const arr2 = [...arr1];

arr2.push(4);

// console.log(arr1);
// console.log(arr2);

const user = {
  name: "Taj",
  age: 22
};

user.age = 25 
user.country = 'bangladesh'
// console.log(user);


// descture
const {name , age = 25 , country = 'bangladesh' } = {
  name: "Taj",
  age: 22
};

// console.log(name , age , country);


// ✅ Task 6: Advanced Function
// Ekta function banao:
// first parameter: multiplier
// baki sob parameter: numbers (rest use kore)
// sob number ke multiplier diye gun kore new array return korbe

function multiply(multiplier , ...rest) {
    
    return rest.map(elem => multiplier * elem)
}
const arr = multiply(2, 5, 10, 15)

// console.log(arr);


// ✅ Task 7: Tricky One 🔥
// Nicher code er output ki hobe?

function test(a, b, ...rest) {
//   console.log(...rest);
}

test(1,2,3,4,5);



function combineArrays(...params) {
    
    console.log([...params[0],...params[1],...params[2]]);
    
}
combineArrays([1,2], [3,4], [5,6])