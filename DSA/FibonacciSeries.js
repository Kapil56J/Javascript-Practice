// program to generate fibonacci series up to n terms

const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextNumber;

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextNumber = n1 + n2;
    n1 = n2;
    n2 = nextNumber;
};
