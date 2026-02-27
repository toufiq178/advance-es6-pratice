// function add() {
    
//     const multiply = 12 + 12 ;
//     // return multiply

//     function divide(params) {
        
//         const result = multiply / 4 ;
//         return result
//     }
// }

// // console.log(divide());

// console.log(divide());


// function outerFunction() {
    
//     function innerFunction() {
        
//         // console.log('im inner function');
        
//     }

//     return innerFunction
// }

// const result = outerFunction ()

// result()


// function count(owner) {
    

//     let count = 0

//     function count1() {
        
//         count = count + 1
//         console.log('current count :', owner , count);
        
//     }

//     return count1
// }

// const countResult = count('rahim');
// const karimCount = count('karim');

// countResult()
// countResult()
// countResult()
// karimCount()
// karimCount()
// karimCount()
// countResult()
// countResult()
// console.log(countResult);








function outer(owner) {
    
    let count = 0 ;


    function inner() {
        
        count ++ ;
        console.log( 'im inner' , owner , count);
        
    }

    return inner
}


const outerFunction = outer('rahim')
const outerFunctionabdul = outer('abdul')

outerFunction()
outerFunction()
outerFunction()
outerFunctionabdul()
outerFunctionabdul()
outerFunctionabdul()
outerFunction()
outerFunctionabdul()
outerFunctionabdul()
outerFunctionabdul()
// console.log(outerFunction);
