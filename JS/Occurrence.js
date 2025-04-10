// FInd Unique values in an array

const array1 = [1, 2, 2, 3, 4, 5, 6, 6 , 7, 8, 9, 10];

const uniqueValue = [];

array1.forEach(value => {
  if (!uniqueValue.includes(value)) {
    uniqueValue.push(value)
  }
});
console.log('uniqueValue',uniqueValue)

// const uniqueArray = array1.filter((value, index, self) => {
//   return self.indexOf(value) === index;
// });
// console.log('uniqueArray', uniqueArray);

// occurence of each element in an array
const array2 = [1, 2, 2, 3, 4, 5, 6, 6 , 7, 8, 9, 10];
const occurrence = {};
array2.forEach(value => {
  if (occurrence[value]) {
    occurrence[value] += 1;
  }
  else {
    occurrence[value] = 1;
  }
});
// explaination: forEacch takes a callback function and iterates over each element of the array. It checks if the value already exists in the occurrence object. If it does, it increments the count by 1. If it doesn't, it initializes the count to 1.
console.log('occurrence', occurrence);
// Output: { '1': 1, '2': 2, '3': 1, '4': 1, '5': 1, '6': 2, '7': 1, '8': 1, '9': 1, '10': 1 }
    






