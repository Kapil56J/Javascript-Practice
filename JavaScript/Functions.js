// Higher Order Function:
// A higher-order function is a function that takes one or more functions as arguments,
//  returns a new function, or both.
// This allows for code reusability, callbacks, and functional programming.
// A higher-order function is a function that takes another function as a parameter or returns a function as a result.
// One or more functions as a parameter
function greet(name, message) {
    console.log(`${name}`);
    message();
};

function Greetings() {
    console.log('Namaste!');
}
greet('Kapil',Greetings);

// greet() is a higher-order function because it takes another function (callback) as an argument.

// Returning a new functions

function multipleBy(triple) {
    return function (double) {
      return  double * triple;
    }
}
const double = multipleBy(2);
const triple = multipleBy(3);

console.log(double(2));
console.log(triple(3));

// multiplyBy is a higher-order function because it returns another function.


// Pure Functions:
// A pure functions is a function that :
// always return the same output for the same input
// and does not modify global varibles and external states ( No Side Effects )
// Use Pure Functions for predictability, debugging ease,
// same output for same input
function add(a, b) {
    return a + b;
}

console.log(add(5,10));
console.log(add(5,10));

//////////////////////////////////
// Impure Functions

let total = 0;

function addTototal(a) {
    return total += a
}
addTototal(5);
console.log(total);
addTototal(5);
console.log(total);
// This function is NOT pure because it modifies total (external state).

// Currying: Currying in JavaScript is a functional programming technique where a function that takes multiple arguments is transformed into a sequence of functions, each taking a single argument. It helps in creating more reusable and modular code.
//Instead of calling a function with multiple arguments all at once, currying allows you to pass them one at a time.

function multiply(a, b, c) {
    return a * b * c;
  }
  
  console.log(multiply(2, 3, 4)); // 24 (Non-curried)

// Curried version

function multiply(a) {
    return function(b) {
        return function (c) {
         return a * b * c;   
        }
    }
  } 

    console.log(multiply(2)(3)(4)); // 24 (Curried)

const multiply = a => b => a * b;
console.log(multiply(12)(6));

// const multiplication = a => b => a * b;
// const multiply = multiplication(5);
// console.log(multiply(12));

// Currying allows you to create a reusable function that can be used with different arguments.
// In the above example, the multiply function is curried, allowing you to pass the arguments one at a time.
