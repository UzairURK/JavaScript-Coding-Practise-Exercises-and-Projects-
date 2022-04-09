// Iterator Example
function nameIterator(names) {
    let nextIndex = 0;
    
    // return object
    return {
        next: function() {   
        return nextIndex < names.length ?
        {value: names[nextIndex++], done: false} :
        {done: true}
        }
    } // end of return
}

const namesArr = ['Ali', 'Uzair', 'Muna'];
// Initialize iterator and pass in the names array
const names = nameIterator(namesArr);

// print each name
console.log(names.next().value); // index 0
console.log(names.next().value); // index 1
console.log(names.next().value); // index 2
console.log(names.next().value);

// Generator Example
function* saynames() {
    yield 'jack';
    yield 'Jill';
    yield 'john';
    yield 1321;
}
const name = saynames();
/*
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
*/

function* genrateId() {
    let index = 1;

    while(true) {
        yield index++;
    }
}
const Id = genrateId();
// console.log(Id.next().value);
// console.log(Id.next().value);
// console.log(Id.next().value);
// console.log(Id.next().value);
// console.log(Id.next().value);