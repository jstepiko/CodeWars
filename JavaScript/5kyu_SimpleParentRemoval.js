/*
In this Kata, you will be given a mathematical string and your task will be to remove all braces as follows:

solve("x-(y+z)") = "x-y-z"
solve("x-(y-z)") = "x-y+z"
solve("u-(v-w-(x+y))-z") = "u-v+w+x+y-z"
solve("x-(-y-z)") = "x+y+z"
There are no spaces in the expression. Only two operators are given: "+" or "-".
 */

function solve(s) {
    let g = [], l = 1, a = '';
    for (let c of s) {
        switch (c) {
            case '(': g.push(l); l = 1; break;
            case ')': g.pop(); l = 1; break;
            case '-': l = -1; break;
            case '+': l = 1; break;
            default: a += (g.reduce((a, v) => a * v, 1) * l == 1 ? '+' : '-') + c;
        }
    }
    return a[0] == '+' ? a.slice(1) : a;
}

console.log(solve("a-(b)")); // "a-b"
