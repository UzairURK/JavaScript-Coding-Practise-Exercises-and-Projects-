// SETS: They have unique values.
// NB: objets are reference type (which is not stored in stack or heap but perimitive type is stored in heap and stack) not perimitive type 
const set1 = new Set();
// Add values to set'
set1.add(1321);
set1.add(100)
set1.add('String');
set1.add({name: 'Muna'}); // reference type
set1.add(1321); // we will get only 1 time this duplicate value
set1.add(true);
// console.log(set1);

//By An other format
const set2 = new Set([1321, 'A String', true, {name: 'iamuhk'}, 1321]); // get one time duplicate values i.e 1321
// console.log(set2);

// Get count
// console.log(set1.size);

// check values
// console.log(set1.has(1321));
// console.log(set1.has('String'));
// console.log(set1.has({name: 'Muna'})); // get false because object is reference type which points to different location.
// console.log({name: 'Muna'} === {name: 'Muna'}); //  get false because object is reference type which points to different location.

// delete from set
set1.delete(100);
// console.log(set1);

// Iterate through for...of
for( let item of set1 ) {
    // console.log(item);
}

// by other formate
for( let item of set1.values() ) {
    // console.log(item);
}
// by other formate
for( let item of set1.keys() ) {
    // console.log(item);
}
// by entries().(key and value are the same here)
for( let item of set1.entries() ) {
    // console.log(item);
}

// by forEach loop
set1.forEach(  (value) => {
    // console.log(` ${value}`)
    // console.log(value);
})

// converts sets to array
const setArr = Array.from(set1);
// console.log(setArr);