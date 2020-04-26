// GENERICS
// const names: Array<string> = [];   /// igual a poner solamente names: string[];
// names[0].split(' ');                // se puede hacer esto ya que estoy especificando que el tipo asociado es STRING

// const promise: Promise<string> = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         resolve('hola mundo');
//     }, 2000);
// });

// promise.then(data => {
//     data.split(' ');
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Alvaro', age: 42}, {job: 'PM', age: 12});
console.log(mergedObj.age);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T):  [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    } else if (element.length > 1){
        descriptionText = 'Got ' + element.length + ' elements.';
    }

    return([element, descriptionText]);
}

console.log(countAndDescribe('hello world'));
console.log(countAndDescribe(['hi', 'there']));

function extractAndConvert<T extends object, U extends keyof T> (obj: T, key: U) {
    return 'Value: ' + obj[key];
}
console.log(extractAndConvert({name: 'Alvaro', age: 42}, 'age'));

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem (item: T) {
        this.data.push(item);
    }

    removeItem (item: T) {
        if (this.data.indexOf(item) === -1){
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
        }

    getItems() {
        return [...this.data];
    }
}

const namesStorage = new DataStorage<string>();
namesStorage.addItem('Alvaro');
namesStorage.addItem('Marce');
namesStorage.addItem('Pau');
console.log(namesStorage.getItems());
namesStorage.removeItem('Marce');
console.log(namesStorage.getItems());

interface CourseGoal {
    title: string,
    description: string,
    completeUntil: Date;
}

function createCourseGoal( title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Juan', 'Juana'];    // Readonly hace que este array no pueda ser modificado luego de creado.
