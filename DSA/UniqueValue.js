// Find near value of x in an array
const arr = [1,2,3,4,5,6,12,15,20];
const x = 17;

function closetvalue(arr, x) {
    let closest = arr[0];
    let minDiff = Math.abs(x - closest);
    
    for (const i of arr) {
        let diff = Math.abs(i - x);
        if (diff < minDiff) {
            closest = i;
            minDiff = diff
        }
    }
    return closest;
};

console.log(closetvalue(arr, x))








