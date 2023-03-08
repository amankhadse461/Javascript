 function sum(a,b)
 {
 return a+b;}
console.log(sum(10,20))    


let a = 'hello';
function foo() {
    return a}
let b = 'world';
function bar() {
    return b}
console.log(foo());
console.log(bar());

//Currying

let prism = function(l, w, h) {
return l * w * h;
}
console.log(prism(1,2,3))

//Named Functions
let namedSum = function sum (a, b) { // named
    return a + b;
    }
let anonSum = function (a, b) { // anonymous
    return a + b;
    }
namedSum(1, 3);
anonSum(1, 3);

//for loop

function logSomeThings() {
    for (var i = 0; i < arguments.length; ++i) {
    console.log(arguments[i]);
    }
    }
logSomeThings('hello', 'world');