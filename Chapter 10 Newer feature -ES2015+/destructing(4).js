// destructing pattern
let a, b;
// using array
[a,b] = [100, 200]; // a = 100, b = 200

// rest pattern
[c, d, ...rest] = [5, 10, 15, 20, 25, 30, 35, 40]; // c= 5, d = 10 and rest = rest of all
 const arr = [c,d, rest]
// console.log(c, d);

for(let i in rest) { // accessing rest
    // console.log(rest[i]);
}

// accessing all arrays element
for(let i in arr) { // accessing rest
    // console.log(arr[i]);
}

//============================== using object =======================

( { x, y, ...rest } = { x: 100, y: 200, z: 300, w: 400, a: 500, b: 600 } ); // x = 100, y = 200 and rest = rest of all;

const obj = ({x, y, rest});
// console.log(x, y);
// console.log(obj);
// accessing rest of all object names.
for(let i in rest) {
    // console.log(rest[i]);
}

// accessing all objects property
for(let i in obj) {
    // console.log(obj[i]);
}

// ====================Destructig Array==============================

// const people = ['Uzair', 'Khan', 'Maria'];
// const [person1, person2, person3] = people;
// console.log(person1, person2, person3);


// ========= parse array returned from function

function getPeople() {
    return ['Uzair', 'Khan', 'Maria'];
}

const [person1, person2, person3] = getPeople();

// console.log(person1, person2, person3);


// ======== Oject destructing =====================

const person = {
    name: 'Smith',
    age: 32,
    gender: 'male', 
    sayHello: function() {
        return 'Hello'
    }
};


// Old ES5
/*
const name = person.name,
      age = person.age,
      gender = person.gender,
      sayHello = person.sayHello();

console.log(name);
*/
// new ES6 
const {name, age, gender, sayHello} = person;
// console.log(name, age, gender, sayHello()) // print all objct peoperty

// OR accessing each by loop
for(let i in person) {
    console.log(person[i]);
}
