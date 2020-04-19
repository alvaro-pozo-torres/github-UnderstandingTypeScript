//START. using interface as a custum type
interface AddFn {
    (a:number, b:number): number;
}

let add: AddFn;

add = (n1:number, n2: number) => {
    return n1 + n2;
}

console.log(add(5, 4));
//END. using interface as a custum type


interface Named {
    readonly name?: string;
    outputName?: string;        //  el simbolo ? hace que la implementacion del elemento sea opcional en la clase
}

interface Greetable extends Named{
    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string;
    age = 42;

    constructor(n?:string) {
        if (n) this.name = n;
    }

    greet(phrase: string) {
        if (this.name) {
            console.log('Hello '+ this.name + '. ' + phrase);
        } else {
            console.log('Hello there');
        }
    }

}
let user1: Greetable;

user1 = new Person ()
user1.greet('Como va todo?');
console.log(user1);

let user2: Greetable;
user2 = new Person('Bruno');
user2.greet('Como va todo?');
console.log(user2);
