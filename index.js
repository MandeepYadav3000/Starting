"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult1(num) {
    console.log("Result is : " + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult1(add(10, 10));
let combineValues;
combineValues = add;
console.log(combineValues(10, 20));
addAndHandle(10, 50, (rest) => {
    console.log(rest);
});
