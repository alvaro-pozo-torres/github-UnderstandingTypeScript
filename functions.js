"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, callBackFunction) {
    var result = n1 + n2;
    callBackFunction(result);
}
printResult(add(10, 13));
var combineValues;
combineValues = add;
console.log(combineValues(8, 7));
addAndHandle(40, 41, function (result) {
    console.log(result);
});
