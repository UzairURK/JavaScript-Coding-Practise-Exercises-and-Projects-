// create symbol.
const sym1 = Symbol();
const sym2 = Symbol('sym2');
// const sym1 = new Symbol(); // It gives error
// console.log(sym1);
// console.log(sym2);
// console.log(typeof sym2);
// console.log(Symbol('123') === Symbol('123')); // can not be equal 
// console.log(`Hello ${String(sym1)}`); // consver to string
// console.log(`Hello ${sym1.toString()}`); // consver to string

// unique object keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');


// creste object 

const myobj = {};
myobj[KEY1] = 'Property1'; // assign value to Symbols.we can no use like myobj.KEY1 = 'property 1'; because it means that we assign new proerty with new name.

myobj[KEY2] = 'Property2';
myobj.key1 = 'Property3';
myobj.key2 = 'Property4';

console.log(myobj[KEY1]);

// Symbols are not enumerable in 'for...in', means symbols are not allwed to be accessed in for loop. following other properties will accessed.

for(let i in myobj) {
    console.log(`${i}: ${myobj[i]}`);
}

// symbols are ignored by JSON.stringify. i.e we can not convert Symbols() into JSON string.

console.log(`${JSON.stringify({key: 'Key 1'})}`); // we will get json string
console.log(`${JSON.stringify({[Symbol('sym1')]: 'Symbol'})}`); // we will get empty json string.

