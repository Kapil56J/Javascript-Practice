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
// Used to spread (expand) elements from an array/object into individual elements.
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
