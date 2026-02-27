
function sum(num1, num2) {

    num1 = 40;
    num2 = 30;
    return num1 + num2

}

let num1 = 10
let num2 = 20

console.log(num1, num2);

sum(num1, num2);

console.log('after :', num1, num2);


function arraySum(arr1, arr2) {

    arr1[0] = 100;
    arr2[0] = 200;

    const sum = arr1[0] + arr2[0];

    console.log(sum);

}

let arr1 = [1, 2, 3, 4, 5, 6, 3];
let arr2 = [1, 2, 3, 4, 5, 6, 3];

console.log('before :', arr1, arr2);

arraySum(arr1, arr2)
console.log('after :', arr1, arr2);