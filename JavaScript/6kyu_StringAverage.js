/*
You are given a string of numbers between 0-9.
Find the average of these numbers and return it
as a floored whole number (ie: no decimal places) written out as a string. Eg:

"zero nine five two" -> "four"

If the string is empty or includes a number greater than 9, return "n/a"
 */

function averageString(str) {
    let numStr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let sum = 0;
    let floor = 0;
    let f;

    let arrStr = str.split(' ');
    for (let i = 0; i < arrStr.length; i++) {
        f = false;
        for (let q = 0; q < numStr.length; q++) {
            if (arrStr[i] === numStr[q]) {
                sum += q;
                f = true;
            }
        }
        if(!f) return 'n/a';
    }

    floor = Math.floor(sum / arrStr.length);
    return numStr[floor];
}

console.log(averageString("zero nine five two")); // "four"
console.log(averageString("")); // "n/a"
