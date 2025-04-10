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

////////////////////////////////////////////////////////////

// Spread Operator:
// Used to spread (expand) elements from an array/object into individual elements.
const fruits = ['apple', 'banana'];
const moreFruits = ['mango', ...fruits, 'orange'];

console.log(moreFruits);
// Output
// [ 'mango', 'apple', 'banana', 'orange' ]

// example:2

// const numbers = [1, 2, 3];
// const moreNumbers = [...numbers, 4, 5]; 

// console.log(moreNumbers);//[ 1, 2, 3, 4, 5 ]

// Use Case: Object cloning/updating

const user = {name : 'kapil', age: 25};
const updateUser = {...user, age: 26};

console.log(updateUser);
// Output
// { name: 'Kapil', age: 26 }

////////////////////////////////////////////////////////////

// Destructuring:
// Used to extract values from arrays/objects into distinct variables.

// const user = { name: 'Kapil', age: 25 };
// const { name, age } = user;

// console.log(name); // Kapil
// console.log(age);  // 25

const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a, b, c); // Output: 1 2 3

