//Higher-Order Functions

function iAmCallbackFunction() {
    console.log("callback has been invoked");
    }
    function iAmJustFunction(callbackFn) {
   
    callbackFn();
    }
iAmJustFunction(iAmCallbackFunction);

//Pure Functions

//1

let obj = { a: 0 }
const impure = (input) => {

input.a = input.a + 1;
return input.a;
}
let b = impure(obj)
console.log(obj) 
console.log(b)

//Accepting Functions as Arguments

function transform(fn, arr) {
    let result = [];
    for (let el of arr) {
    result.push(fn(el)); // We push the result of the transformed item to result
    }
    return result;
}
console.log(transform(x => x * 2, [1,2,3,4]));
console.log([1, 2, 3, 4].map(x => x * 2));