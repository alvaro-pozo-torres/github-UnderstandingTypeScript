"use strict";
function combine(input1, input2, resulttype) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + ' ' + input2.toString();
    }
    if (resulttype === 'as-string') {
        return result.toString();
    }
    else {
        return +result;
    }
}
var combinedAges = combine(30, 36, 'as-number');
console.log(combinedAges);
var combinedNames = combine('Alvaro', 'Pozo', 'as-string');
console.log(combinedNames);
