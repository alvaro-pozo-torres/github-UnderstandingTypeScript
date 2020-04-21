type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;   // interseccion of object types >> combinacion de ambos types

const e1: ElevatedEmployee = {
    name: 'Alvaro',
    privileges: ['access', 'files', 'food'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;      // interseccion of Union types >> interseccion de types comunes.

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {       // sample of a typeGuard using typeof funtion. 
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation (emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {                                  // sample of a typeGuard using IN to validate certain property of an object
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in  emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}

printEmployeeInformation(e1);
printEmployeeInformation ({name: 'Ce', startDate: new Date()});

class Car {
    drive() {
        console.log('Drivin a Car...');
    }
}

class Truck {
    drive() {
        console.log('Drivin a Truck...');
    }

    loadCargo(amount: number) {
        console.log('Loading a cargo of ' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {                     // sample of a typeGuard using instanceof with Classes as this exists within JS.
        vehicle.loadCargo(1000)
    } else {
        console.log('no cargo loading possible');
    }

}

useVehicle(v1);
useVehicle(v2);

interface Bird {
    kind: 'bird';       //property that describes an object. Patron: discriminated union. 
    flyingSpeed: number;
}

interface Horse {
    kind: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.kind) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
}

moveAnimal({kind: 'horse', runningSpeed: 60});
moveAnimal({kind: 'bird', flyingSpeed: 200});



