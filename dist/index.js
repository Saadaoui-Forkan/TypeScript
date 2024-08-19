"use strict";
function sum1(a, b) {
    const res = a + b;
    console.log(res);
}
function sum2(a, b) {
    const res = a + b;
    return res;
}
const result1 = sum1(1, 2);
console.log("function without return (void) " + result1);
const result2 = sum2(1, 2);
console.log("function with return " + result2);
