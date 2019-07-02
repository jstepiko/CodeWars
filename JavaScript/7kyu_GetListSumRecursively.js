/*
Write function sumR which returns the sum of values in a given list.
Try no to cheat and provide recursive solution.
 */

function sumR(x) {
    return x.length === 0 ? 0 : x.shift() + sumR(x);
}

console.log(sumR([])); // 0
console.log(sumR([1])); // 1
console.log(sumR([1,1,1])); // 3
console.log(sumR([5,5,5])); // 15
console.log(sumR([10,10,10,10,10])); // 50
