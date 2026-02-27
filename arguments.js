function detail(name, age, roll, marriage) {

    // console.log(arguments);
    // console.log(arguments[1]);
    // console.log(arguments[0]);
    // console.log(arguments[3]);


}

detail('taj', 20, 100, false);



function arr(...arr) {

    console.log(arguments);
    
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr(numbers)