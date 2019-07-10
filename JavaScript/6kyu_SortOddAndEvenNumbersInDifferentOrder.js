/*
You are given an array of integers. Your task is to sort odd numbers within the array in ascending order, and even numbers in descending order.

Note that zero is an even number. If you have an empty array, you need to return it.

For example:

[5, 3, 2, 8, 1, 4]  -->  [1, 3, 8, 4, 5, 2]

odd numbers ascending:   [1, 3,       5   ]
even numbers descending: [      8, 4,    2]
 */

function sortArray(array) {
    let odd = [];
    let even = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2) odd.push(array[i]);
        else even.push(array[i]);
    }

    odd.sort((a, b) => a - b);
    even.sort((a, b) => b - a);

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2) array[i] = odd.shift();
        else array[i] = even.shift();
    }

    return array;
}

console.log(sortArray([5, 3, 2, 8, 1, 4, 11])); // [1, 3, 8, 4, 5, 2, 11]
console.log(sortArray([2, 22, 37, 11, 4, 1, 5, 0])); // [22, 4, 1, 5, 2, 11, 37, 0]
console.log(sortArray([1, 111, 11, 11, 2, 1, 5, 0])); // [1, 1, 5, 11, 2, 11, 111, 0]
console.log(sortArray([])); // []