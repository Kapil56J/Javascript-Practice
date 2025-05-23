// Rest Operator
// Used to collect the remaining elements into an array.
function greet(first, ...others) {
    console.log('Hello', first);
    console.log('Others:', others);
}

greet('Kapil', 'Ram', 'Sita', 'Laxman');

// Output:
// Hello Kapil
// Others: [ 'Ram', 'Sita', 'Laxman' ]

// Spread Operator:
// Used to spread (expand) elements from an array/object into individual elements also create the new array by combining existing array or adding new elements
// also cloning/update the oject.
const fruits = ['apple', 'banana'];
const moreFruits = ['mango', ...fruits, 'orange'];

console.log(moreFruits);

// Output
// [ 'mango', 'apple', 'banana', 'orange' ]

// Use Case: Object cloning/updating

const user = {name : 'kapil', age: 25};
const updateUser = {...user, age: 26};

console.log(updateUser);
// Output
// { name: 'Kapil', age: 26 }


// Destructuring in JavaScript provides a concise way to extract values from arrays or objects and assign them to distinct variables

const colors = ['red', 'green', 'blue'];
const [first, second, third] = colors;

console.log(first);  // Output: red
console.log(second); // Output: green
console.log(third);  // Output: blue
