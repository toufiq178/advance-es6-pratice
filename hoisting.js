// Task 1: Hoisting
// console.log(a);
var a = 20;

// console.log(b);
let b = 30;


// Task 2: Scope
let x = 10;

function test() {
  let x = 20;
  console.log(x);
}

test();
console.log(x);