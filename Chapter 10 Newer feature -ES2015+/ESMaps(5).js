// Maps: Key values pairs - can use any type as a key or value
const map1 = new Map(); 

// set Keys (this is name of key)
const key1 = 'Some String', // this is name of key
      key2 = {}, // set to empty object
      key3 = 1321, // set to number
      key4 = function() {}; //set to empty function


// set map values by key
map1.set(key1, 'value of Key1')  ;
map1.set(key2, 'value of Key2');
map1.set(key3, 'value of Key3');
map1.set(key4, 'value of Key4');
// Get values by key
// console.log(map1.get(key1), map1.get(key2), map1.get(key3),  map1.get(key4));

//count values
// console.log(map1.size);

// loop using for...of to get keys and values
for( let [key, value] of map1 ) {
    // console.log(`${key} = ${value}`);
}

// Iterates keys only
for(let key of map1.keys()) {
    // console.log(key);
}

// Iterates values only
for(let value of map1.values()) {
    // console.log(value);
}

// Iterate with forEach
map1.forEach(  (value, key) => {
    // console.log(`${key}, ${value}`)
})

// Create an array of value pairs
const keyvalArr = Array.from(map1); // there are 4 index size of array and in each index there is an array of 2 index size [[2], [2],[2], [2]]
// console.log(keyvalArr);

// create an arrays of the values only
const valArr = Array.from(map1.values());
// console.log(valArr);

// create an arrays of the keys only
const keyArr = Array.from(map1.keys());
console.log(keyArr);