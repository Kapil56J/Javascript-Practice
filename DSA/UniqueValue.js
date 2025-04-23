// Find Unique values in an array

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







