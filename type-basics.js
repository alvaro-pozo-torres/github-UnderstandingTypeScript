"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["DEV"] = 1] = "DEV";
    Role[Role["QA"] = 2] = "QA";
    Role[Role["PM"] = 3] = "PM";
})(Role || (Role = {}));
;
var person = {
    name: 'Alvaro',
    age: 42,
    hobbies: ['sports', 'puzzles', 'food'],
    role: Role.ADMIN
};
var favoriteActivities;
favoriteActivities = ['udemy', 'tech'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
if (person.role === Role.ADMIN) {
    console.log('es admin');
}
else {
    console.log('no es admin');
}
