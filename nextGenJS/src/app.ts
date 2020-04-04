// Code goes here!
const userName = 'Max';

let age = 30;
age = 29;

const add2 = (a: number, b: number = 10) => a+b;

const printOutput: (a:number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => console.log(event, 'hola'));
}
printOutput(add2(7, 3));

const hobbies = ['sports', 'puzzles', 'music', 'learning'];
const activeHobbies = ['Biking'];

console.log(hobbies);
console.log(activeHobbies);

//activeHobbies.push(hobbies);   //falla porque se quiere pasar un array cuando se espera un string
activeHobbies.push(...hobbies);  // el operador @desgloza@ el contenido del array y los pasa como valores sueltos

const person = {
    firstName:'alvaro',
    actualAge: 43
};
const copiedPerson = { ...person};
console.log(copiedPerson.actualAge + 105);

const addMultipleValues = (...numbers: number[]) => {       // USO DE REST PARAMETERS
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;

    }, 0);
};

const addedValues = addMultipleValues(5, 6, 7, 8, 9);
console.log(addedValues);

const hobbie1 = hobbies[0];
const hobbie2 = hobbies[1];

const [hobb1, hobb2, ...remainingHobb] = hobbies;   // ejemplo de deconstruccion de un array

console.log(typeof(hobbies) + ' ahora valores ', hobbies);
console.log(typeof(hobb1), hobb1 );
console.log(typeof(remainingHobb), remainingHobb);

const {firstName, actualAge} = person;   // ejemplo de deconstruccion de un objeto. es importante sacar los valores haciendo referencia alos nombre de loa atributos en el objeto