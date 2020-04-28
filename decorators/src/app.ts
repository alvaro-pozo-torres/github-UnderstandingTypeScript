function Logger(constructor: Function) {
    console.log('Loggin...');
    console.log(constructor);
}

@Logger
class Person {
    name = 'Alvaro';

    constructor () {
        console.log('Creating a person...');
    }
}

const person = new Person();

console.log(person);