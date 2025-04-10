// Closure : A closure is a function that has access to the parent scope, even after the outer function has finished execution.
// In the above example, the inner function has access to the name variable of the outer function even after the outer function has returned. Therefore, the inner function forms a closure.

function outer() {
    const name = 'Roadmap';
  
    function inner() {
      console.log(name);
    }
  
    return inner;
  }
  
  const closure = outer();
  closure();        // Roadmap

//  Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. 
// This means that no matter where the functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.
//  Note that hoisting only moves the declaration, not the initialization.

console.log(x === undefined); // true
var x = 3;
console.log(x); // 3
//The above code snippet can be visualized in the following way:

var y;
console.log(y ); // true
x = 3;
console.log(x); // 3