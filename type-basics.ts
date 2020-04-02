
enum Role {ADMIN, DEV, QA, PM};

const person = {
    name: 'Alvaro',
    age: 42,
    hobbies: ['sports', 'puzzles', 'food'],
    role: Role.ADMIN    
};

let favoriteActivities: string[];

favoriteActivities = ['udemy', 'tech'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby);
}

if (person.role === Role.ADMIN ){
    console.log('es admin');
} else {
    console.log('no es admin');
}
