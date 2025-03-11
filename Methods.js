// map function : creates a new array by applying a given callback function to each element of an existing array

const map = ['JavaScript', 'React', 'Node.js'];

const result = map.map(val => {
    return `${val}`
});

console.log('Map Function:', result);