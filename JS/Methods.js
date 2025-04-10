// map function : creates a new array by applying a given callback function to each element of an existing array

const map = ['JavaScript', 'React', 'Node.js'];

const result = map.map(val => {
    return `${val}`
});

console.log('Map Function:', result);

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];

  const keyStore = people.map(key => {
    return `${key.name}`});

 console.log('Map key store: ', keyStore);

 // forEach function : forEach() is a method that executes a provided function once for each array element.use when don't need a returned value.

const forEach = ['JavaScript', 'React', 'Node.js'];

forEach.forEach(val => console.log('For each Function=>: ', `${val}`))

// Filter function: The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const number = [1, 2, 3, 4, 5, 6];

const evenNumbers = number.filter((number) => {
  return number % 2 === 0;
});
console.log('Filter=>: ', evenNumbers);

// Reduce Method = The reduce() method to reduce an array to a single value.

const array = [1,2,3,4];
const sum = array.reduce((acc, curr) => {
    return acc + curr
}, 0);

console.log('Reduce Method: ', sum);

// acc means accumulator and curr means current value.

// Remove * from key

const obj = {
  '*first' : 1,
  'second' : 2,
  'third*' : 3
};

const clearObj = {};
for (let key in obj) {
  let newKey = key.replace('*','');
  clearObj[newKey] = obj[key]
}
console.log('clearObj',clearObj)

// Javascript array methods list
const arrayMethods = [
  'concat',
  'copyWithin',
  'entries',
  'every',
  'fill',
  'filter',
  'find',
  'findIndex',
  'forEach',
  'includes',
  'indexOf',
  'join',
  'keys',
  'lastIndexOf',
  'map',
  'pop',
  'push',
  'reduce',
  'reduceRight',
  'reverse',
  'shift',
  'slice',
  'some',
  'sort',
  'splice',
  'toString',
  'unshift',
  'values'
];

const arra = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arra2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const object = {
  name: 'kapil',
  age: 25,
  city: 'Delhi'
};

console.log('concat', arra.concat(arra2));
console.log('copyWithin', arra.copyWithin(3, 1, 3)); // explain: copyWithin(target, start, end)
console.log('entries', arra.entries()); // explain: returns a new Array Iterator object that contains the key/value pairs for each index in the array.
console.log( 'every', arra.every(value => value > 5)) // explain: tests whether all elements in the array pass the test implemented by the provided function.
console.log('fill', arra.fill(0, 2, 5)); // explain: fills all the elements of an array from a start index to an end index with a static value. fill(value, start, end)
console.log('filter', arra.filter(value => value > 5)); // explain: creates a new array with all elements that pass the test implemented by the provided function.
console.log('find', arra.find(value => value > 5)); // explain: returns the value of the first element in the provided array that satisfies the provided testing function.
console.log('findIndex', arra.findIndex(value => value > 5)); // explain: returns the index of the first element in the array that satisfies the provided testing function.
// Reduce: The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
console.log('reduce', arra.reduce((acc, curr) => acc + curr, 0)); // explain: The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const numbers = [10, 20, 30, 40];



// console.log(add); // Output: 100


// max value fromm array
const max = Math.max(...numbers);
// with reduce method
const maxValue = numbers.reduce((acc, num) => (num > acc ? num : acc),0)
