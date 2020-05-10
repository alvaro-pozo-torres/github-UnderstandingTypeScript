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
    return function<T extends{new(...args: any[]): {name: string}}>(originalConstructor: T) {                  // indica que el parametro no ser[a utilizado]
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                console.log('running template. Executing function');
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent+=' ';
                    hookEl.querySelector('h1')!.textContent+=this.name;
                }
            }
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

//////////////////

function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator sample!');
    console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor Decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method Decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log('parameter Decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    title: string;
    @Log
    _price: number;

    @Log2
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
    @Log3
    getPriceWithTax (@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFuntion = originalMethod.bind(this);
            return boundFuntion;
        }
    }
    return adjDescriptor;
}

class Printer {
    message = 'This works!!';

    @Autobind
    showMessage() {
        console.log(this.message);

    }
}

const p = new Printer();

const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);

//----

interface ValidatorConfig {
    [property: string]: {
        [validatableProperty: string]: string[]   //required, positive
    }

}

const registeredValidtors: ValidatorConfig = {};

function Required(target: any, propName: string) {
    registeredValidtors[target.constructor.name] = {
        ...registeredValidtors[target.constructor.name], 
        [propName]: [...registeredValidtors[target.constructor.name][propName], 'required']
    };
}

function PositiveNumber(target: any, propName: string) {
    registeredValidtors[target.constructor.name] = {
        ...registeredValidtors[target.constructor.name], 
        [propName]: [...registeredValidtors[target.constructor.name][propName], 'positive']
    };
}

function validate(obj: any) {
    const objValidatorConfig = registeredValidtors[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator){
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }

}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);

    if (!validate(createdCourse)) {
        alert('Invalid input. Please try again!');
        return;
    }

    console.log(createdCourse);

})