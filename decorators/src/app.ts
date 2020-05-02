function Logger(logString: string) {
    console.log('LOGGER. Function creation. NOT EXECUTION');
    return function (constructor: Function) {
        console.log('running LOGGER. Executing function');
        console.log(logString);
        console.log(constructor);
    };
}

function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE. Function creation. NOT EXECUTION');
    return function(constructor: any) {                  // indica que el parametro no ser[a utilizado]
        console.log('running template. Executing function');
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent+=' ';
            hookEl.querySelector('h1')!.textContent+=p.name;
        }
    }
}

@Logger('LOGGIN - PERSON')     //decorator calling/
@WithTemplate('<h1>My person object.</h1>', 'app')
class Person {
    name = 'Alvaro';

    constructor () {
        console.log('Creating a person...');
    }
}

console.log('creating an object person');
const person = new Person();
console.log(person);

//////////////////

function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator sample!');
    console.log(target, propertyName);
}

class Product {
    title: string;
    @Log
    _price: number;

    set price(val: number) {
        if (val>0) {
            this._price = val;
        } else {
            throw new Error('Invalid Price - It should be greater than 0.');
        }
    }
        
    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax (tax: number) {
        return this._price * (1 + tax);
    }
}