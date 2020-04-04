"use strict";
function add1(n1, n2, showResult, phrase) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number'){
    //     throw new Error('incorrect input type!');
    // }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult1 = true;
var phraseResult = 'Result is: ';
var result = add1(number1, number2, printResult1, phraseResult);
