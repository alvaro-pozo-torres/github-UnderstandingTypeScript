"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Code goes here!
var userName = 'Max';
var age = 30;
age = 29;
var add2 = function (a, b) {
    if (b === void 0) { b = 10; }
    return a + b;
};
var printOutput = function (output) { return console.log(output); };
var button = document.querySelector('button');
if (button) {
    button.addEventListener('click', function (event) { return console.log(event, 'hola'); });
}
printOutput(add2(7, 3));
var hobbies = ['sports', 'puzzles', 'music', 'learning'];
var activeHobbies = ['Biking'];
console.log(hobbies);
console.log(activeHobbies);
//activeHobbies.push(hobbies);   //falla porque se quiere pasar un array cuando se espera un string
activeHobbies.push.apply(activeHobbies, hobbies); // el operador @desgloza@ el contenido del array y los pasa como valores sueltos
var person = {
    firstName: 'alvaro',
    actualAge: 43
};
var copiedPerson = __assign({}, person);
console.log(copiedPerson.actualAge + 105);
var addMultipleValues = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (currentResult, currentValue) {
        return currentResult + currentValue;
    }, 0);
};
var addedValues = addMultipleValues(5, 6, 7, 8, 9);
console.log(addedValues);
var hobbie1 = hobbies[0];
var hobbie2 = hobbies[1];
var hobb1 = hobbies[0], hobb2 = hobbies[1], remainingHobb = hobbies.slice(2); // ejemplo de deconstruccion de un array
console.log(typeof (hobbies) + ' ahora valores ', hobbies);
console.log(typeof (hobb1), hobb1);
console.log(typeof (remainingHobb), remainingHobb);
var firstName = person.firstName, actualAge = person.actualAge; // ejemplo de deconstruccion de un objeto. es importante sacar los valores haciendo referencia alos nombre de loa atributos en el objeto
