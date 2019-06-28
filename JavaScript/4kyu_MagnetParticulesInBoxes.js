/*
To help Professor Chambouliard can we calculate the function doubles
that will take as parameter maxk and maxn such that doubles(maxk, maxn) = S(maxk, maxn)?
Experiences seems to show that this could be something around 0.7 when maxk and maxn are big enough.

Examples:
doubles(1, 3)  => 0.4236111111111111
doubles(1, 10) => 0.5580321939764581
doubles(10, 100) => 0.6832948559787737
 */

function doubles(maxk, maxn) {
    let sum = 0;
    for (let i = 1; i <= maxk; i++) {
        for (let j = 1; j <= maxn; j++) {
            sum += (1 / (i * Math.pow(j + 1, 2 * i)));
        }
    }
    return sum;
}

console.log(doubles(1,10));
